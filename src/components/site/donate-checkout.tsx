import { useEffect, useRef, useState } from "react";
import { clinic } from "@/lib/clinic";
import { donationSetup, prepareDonation } from "@/lib/pay.functions";
import { useTx } from "@/components/site/i18n";
import { cn } from "@/lib/cn";

type Cadence = "once" | "monthly";
type StripeCard = { mount: (el: HTMLElement) => void; destroy: () => void };
type StripePaymentRequest = {
  canMakePayment: () => Promise<{ applePay?: boolean } | null>;
  update: (data: { total: { label: string; amount: number } }) => void;
  on: (event: "paymentmethod", handler: (ev: PaymentMethodEvent) => void) => void;
  show: () => void;
};
type PaymentMethodEvent = {
  paymentMethod: { id: string };
  complete: (status: "success" | "fail") => void;
};
type StripeJs = {
  elements: () => { create: (type: "card", options: object) => StripeCard };
  paymentRequest: (options: object) => StripePaymentRequest;
  confirmCardPayment: (
    secret: string,
    data?: object,
    options?: object,
  ) => Promise<{ error?: { message?: string }; paymentIntent?: { status?: string } }>;
};

declare global {
  interface Window {
    Stripe?: (key: string) => StripeJs;
  }
}

const onceAmounts = [25, 50, 100, 250, 500];
const monthAmounts = [10, 25, 50, 100, 250];

function loadStripe(): Promise<NonNullable<Window["Stripe"]>> {
  if (window.Stripe) return Promise.resolve(window.Stripe);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.onload = () => (window.Stripe ? resolve(window.Stripe) : reject(new Error("Stripe")));
    script.onerror = () => reject(new Error("Stripe"));
    document.head.appendChild(script);
  });
}

function paypalHref(amount: number, cadence: Cadence) {
  const business = encodeURIComponent(clinic.emailOffice);
  const item = encodeURIComponent("Canby Community Clinic");
  const back = encodeURIComponent(`${window.location.origin}/give?donated=1`);
  if (cadence === "monthly") {
    return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${business}&item_name=${item}&currency_code=USD&a3=${amount}&p3=1&t3=M&src=1&no_shipping=1&return=${back}`;
  }
  return `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${business}&amount=${amount}&currency_code=USD&item_name=${item}&no_shipping=1&return=${back}`;
}

export function DonateCheckout({ donated }: { donated?: boolean }) {
  const { tx } = useTx();
  const [cadence, setCadence] = useState<Cadence>("once");
  const [picked, setPicked] = useState<number | "other">(50);
  const [other, setOther] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (donated || new URLSearchParams(window.location.search).get("donated") === "1") setDone(true);
  }, [donated]);
  const [publishableKey, setPublishableKey] = useState<string | null>(null);
  const [appleReady, setAppleReady] = useState(false);
  const cardMount = useRef<HTMLDivElement>(null);
  const cardRef = useRef<StripeCard | null>(null);
  const stripeRef = useRef<StripeJs | null>(null);
  const payReq = useRef<StripePaymentRequest | null>(null);
  const amountRef = useRef(50);
  const cadenceRef = useRef<Cadence>("once");
  const emailRef = useRef("");

  const amounts = cadence === "once" ? onceAmounts : monthAmounts;
  const amount = picked === "other" ? Number(other) : picked;
  amountRef.current = amount;
  cadenceRef.current = cadence;
  emailRef.current = email;

  useEffect(() => {
    let dead = false;
    donationSetup()
      .then((setup) => {
        if (!dead) setPublishableKey(setup.publishableKey);
      })
      .catch(() => {
        if (!dead) setPublishableKey(null);
      });
    return () => {
      dead = true;
    };
  }, []);

  useEffect(() => {
    if (!publishableKey || !cardMount.current) return;
    let dead = false;
    let card: StripeCard | null = null;
    loadStripe()
      .then((Stripe) => {
        if (dead || !cardMount.current) return;
        const stripe = Stripe(publishableKey);
        stripeRef.current = stripe;
        const elements = stripe.elements();
        card = elements.create("card", {
          hidePostalCode: false,
          style: {
            base: { fontSize: "16px", color: "#1c1917", fontFamily: "Hanken Grotesk, sans-serif", "::placeholder": { color: "#a8a29e" } },
            invalid: { color: "#9f1239" },
          },
        });
        card.mount(cardMount.current);
        cardRef.current = card;
        const request = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: { label: "Canby Community Clinic", amount: Math.max(100, Math.round((amountRef.current || 1) * 100)) },
          requestPayerName: true,
          requestPayerEmail: true,
        });
        payReq.current = request;
        request.on("paymentmethod", async (event) => {
          try {
            const prepared = await prepareDonation({
              data: {
                amount: amountRef.current,
                cadence: cadenceRef.current,
                email: emailRef.current,
                returnUrl: `${window.location.origin}/give?donated=1`,
              },
            });
            if (prepared.kind !== "stripe") {
              event.complete("fail");
              window.location.href = prepared.url;
              return;
            }
            const result = await stripe.confirmCardPayment(
              prepared.clientSecret,
              { payment_method: event.paymentMethod.id },
              { handleActions: false },
            );
            if (result.error) {
              event.complete("fail");
              setError(result.error.message || "Payment did not go through.");
              return;
            }
            event.complete("success");
            setDone(true);
          } catch (err) {
            event.complete("fail");
            setError(err instanceof Error ? err.message : "Payment did not go through.");
          }
        });
        return request.canMakePayment();
      })
      .then((can) => {
        if (!dead && can && typeof can === "object" && "applePay" in can && can.applePay) setAppleReady(true);
      })
      .catch(() => {
        if (!dead) setPublishableKey(null);
      });
    return () => {
      dead = true;
      card?.destroy();
      cardRef.current = null;
    };
  }, [publishableKey]);

  useEffect(() => {
    if (!Number.isFinite(amount) || amount < 1) return;
    payReq.current?.update({ total: { label: "Canby Community Clinic", amount: Math.round(amount * 100) } });
  }, [amount]);

  async function payWithCard() {
    setError("");
    if (!Number.isFinite(amount) || amount < 1) {
      setError(tx({ en: "Choose an amount.", es: "Elija un monto." }));
      return;
    }
    setPaying(true);
    try {
      const prepared = await prepareDonation({
        data: { amount, cadence, email, returnUrl: `${window.location.origin}/give?donated=1` },
      });
      if (prepared.kind === "paypal" || !stripeRef.current || !cardRef.current) {
        window.location.href = prepared.kind === "paypal" ? prepared.url : paypalHref(amount, cadence);
        return;
      }
      const result = await stripeRef.current.confirmCardPayment(prepared.clientSecret, {
        payment_method: { card: cardRef.current, billing_details: { email: email || undefined } },
      });
      if (result.error) {
        setError(result.error.message || tx({ en: "Payment did not go through.", es: "El pago no se completó." }));
        return;
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : tx({ en: "Payment did not go through.", es: "El pago no se completó." }));
    } finally {
      setPaying(false);
    }
  }

  function payWithPayPal() {
    if (!Number.isFinite(amount) || amount < 1) {
      setError(tx({ en: "Choose an amount.", es: "Elija un monto." }));
      return;
    }
    window.location.href = paypalHref(amount, cadence);
  }

  function payWithApple() {
    if (!Number.isFinite(amount) || amount < 1) {
      setError(tx({ en: "Choose an amount.", es: "Elija un monto." }));
      return;
    }
    if (appleReady && payReq.current) {
      payReq.current.show();
      return;
    }
    window.location.href = paypalHref(amount, cadence);
  }

  if (done) {
    return (
      <div className="rounded-lg bg-green-soft p-8" role="status">
        <h1 className="font-serif text-4xl">{tx({ en: "Thank you.", es: "Gracias." })}</h1>
        <p className="mt-3 text-muted">
          {tx({
            en: "Your gift to Canby Community Clinic went through.",
            es: "Su donativo a Canby Community Clinic se completó.",
          })}
        </p>
      </div>
    );
  }

  const payLabel =
    cadence === "monthly"
      ? tx({ en: `Pay $${Number.isFinite(amount) && amount > 0 ? amount : "—"}/month`, es: `Pagar $${Number.isFinite(amount) && amount > 0 ? amount : "—"}/mes`, hy: `Վճարել $${Number.isFinite(amount) && amount > 0 ? amount : "—"}/ամիս` })
      : tx({ en: `Pay $${Number.isFinite(amount) && amount > 0 ? amount : "—"}`, es: `Pagar $${Number.isFinite(amount) && amount > 0 ? amount : "—"}`, hy: `Վճարել $${Number.isFinite(amount) && amount > 0 ? amount : "—"}` });

  return (
    <div>
      <h1 className="font-serif text-5xl tracking-[-0.03em]">{tx({ en: "Donate", es: "Donar" })}</h1>
      <div className="mt-6 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => { setCadence("once"); setPicked(50); }} className={cn("min-h-12 border text-sm font-medium", cadence === "once" ? "border-ink bg-ink text-cream" : "border-line bg-paper")}>
          {tx({ en: "One time", es: "Una vez" })}
        </button>
        <button type="button" onClick={() => { setCadence("monthly"); setPicked(25); }} className={cn("min-h-12 border text-sm font-medium", cadence === "monthly" ? "border-ink bg-ink text-cream" : "border-line bg-paper")}>
          {tx({ en: "Monthly", es: "Mensual" })}
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {amounts.map((value) => (
          <button key={value} type="button" onClick={() => setPicked(value)} className={cn("min-h-14 border font-serif text-2xl", picked === value ? "border-ink bg-ink text-cream" : "border-line bg-paper")}>
            ${value}
          </button>
        ))}
        <button type="button" onClick={() => setPicked("other")} className={cn("min-h-14 border text-sm font-medium", picked === "other" ? "border-ink bg-ink text-cream" : "border-line bg-paper")}>
          {tx({ en: "Other", es: "Otro" })}
        </button>
      </div>
      {picked === "other" ? (
        <input
          className="mt-3 min-h-12 w-full border border-line bg-paper px-3"
          inputMode="decimal"
          placeholder={tx({ en: "Amount", es: "Monto" })}
          value={other}
          onChange={(event) => setOther(event.target.value)}
        />
      ) : null}

      <div className="mt-8 border border-line bg-paper p-5">
        <p className="text-sm font-medium">{tx({ en: "Card", es: "Tarjeta" })}</p>
        <label className="mt-4 block text-sm">
          {tx({ en: "Email for the receipt", es: "Correo para el recibo" })}
          <input className="mt-2 min-h-12 w-full border border-line bg-cream px-3" inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        {publishableKey ? <div ref={cardMount} className="mt-4 min-h-12 border border-line bg-cream px-3 py-3" /> : null}
        <button type="button" disabled={paying} onClick={() => void payWithCard()} className="mt-4 inline-flex min-h-12 w-full items-center justify-center bg-blue font-medium text-cream disabled:opacity-60">
          {paying ? tx({ en: "Paying…", es: "Pagando…" }) : payLabel}
        </button>
        {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}

        <button type="button" onClick={payWithApple} className="apple-pay-btn mt-3 inline-flex min-h-12 w-full items-center justify-center bg-black text-sm font-medium text-white">
          Apple Pay
        </button>
        <button type="button" onClick={payWithPayPal} className="mt-3 inline-flex min-h-12 w-full items-center justify-center bg-[#ffc439] text-sm font-medium text-[#003087]">
          PayPal
        </button>
      </div>
    </div>
  );
}
