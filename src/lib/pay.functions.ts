import { createServerFn } from "@tanstack/react-start";
import { clinic } from "@/lib/clinic";
import { env } from "@/lib/env.server";

type Cadence = "once" | "monthly";

function paypalUrl(amount: number, cadence: Cadence, returnUrl: string) {
  const business = encodeURIComponent(clinic.emailOffice);
  const item = encodeURIComponent("Canby Community Clinic");
  const back = encodeURIComponent(returnUrl);
  if (cadence === "monthly") {
    return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${business}&item_name=${item}&currency_code=USD&a3=${amount}&p3=1&t3=M&src=1&no_shipping=1&return=${back}&cancel_return=${back}`;
  }
  return `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${business}&amount=${amount}&currency_code=USD&item_name=${item}&no_shipping=1&return=${back}&cancel_return=${back}`;
}

async function stripePost(path: string, secret: string, params: URLSearchParams) {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });
  const json = (await response.json()) as {
    error?: { message?: string };
    client_secret?: string;
    id?: string;
    latest_invoice?: { payment_intent?: { client_secret?: string } | string };
  };
  if (!response.ok) throw new Error(json.error?.message || "Payment could not start.");
  return json;
}

export const donationSetup = createServerFn({ method: "POST" }).handler(async () => {
  return { publishableKey: env("STRIPE_PUBLISHABLE_KEY") ?? null };
});

export const prepareDonation = createServerFn({ method: "POST" })
  .inputValidator((input: { amount: number; cadence: Cadence; email?: string; returnUrl: string }) => {
    const amount = Math.round(Number(input.amount) * 100) / 100;
    if (!Number.isFinite(amount) || amount < 1 || amount > 100000) throw new Error("Choose an amount.");
    if (input.cadence !== "once" && input.cadence !== "monthly") throw new Error("Choose once or monthly.");
    return {
      amount,
      cadence: input.cadence,
      email: input.email?.trim() || "",
      returnUrl: input.returnUrl,
    };
  })
  .handler(async ({ data }) => {
    const secret = env("STRIPE_SECRET_KEY");
    const publishableKey = env("STRIPE_PUBLISHABLE_KEY");
    if (!secret || !publishableKey) {
      return { kind: "paypal" as const, url: paypalUrl(data.amount, data.cadence, data.returnUrl) };
    }

    const cents = Math.round(data.amount * 100);
    if (data.cadence === "monthly") {
      const priceParams = new URLSearchParams();
      priceParams.set("currency", "usd");
      priceParams.set("unit_amount", String(cents));
      priceParams.set("recurring[interval]", "month");
      priceParams.set("product_data[name]", "Monthly donation to Canby Community Clinic");
      const price = await stripePost("prices", secret, priceParams);

      const customerParams = new URLSearchParams();
      if (data.email) customerParams.set("email", data.email);
      customerParams.set("description", "Canby Community Clinic donor");
      const customer = await stripePost("customers", secret, customerParams);

      const subParams = new URLSearchParams();
      subParams.set("customer", customer.id || "");
      subParams.set("items[0][price]", price.id || "");
      subParams.set("payment_behavior", "default_incomplete");
      subParams.set("payment_settings[save_default_payment_method]", "on_subscription");
      subParams.append("expand[]", "latest_invoice.payment_intent");
      const subscription = await stripePost("subscriptions", secret, subParams);
      const intent = subscription.latest_invoice;
      const clientSecret =
        intent && typeof intent === "object" && intent.payment_intent && typeof intent.payment_intent === "object"
          ? intent.payment_intent.client_secret
          : undefined;
      if (!clientSecret) throw new Error("Payment could not start.");
      return { kind: "stripe" as const, clientSecret, publishableKey };
    }

    const params = new URLSearchParams();
    params.set("amount", String(cents));
    params.set("currency", "usd");
    params.set("automatic_payment_methods[enabled]", "true");
    params.set("description", "Donation to Canby Community Clinic");
    if (data.email) params.set("receipt_email", data.email);
    const intent = await stripePost("payment_intents", secret, params);
    if (!intent.client_secret) throw new Error("Payment could not start.");
    return { kind: "stripe" as const, clientSecret: intent.client_secret, publishableKey };
  });
