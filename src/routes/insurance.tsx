import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { clinic } from "@/lib/clinic";
import { sendClinicMail } from "@/lib/mail.functions";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Call Canby Community Clinic with the name of your plan, or to schedule if you do not have insurance. Reseda, weekdays 9–5.",
      },
    ],
  }),
  component: InsurancePage,
});

function InsurancePage() {
  const { tx } = useTx();
  const [plan, setPlan] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSending(true);
    setError("");
    try {
      await sendClinicMail({
        data: {
          inbox: "patients",
          subject: "Insurance question",
          body: [`Name: ${name.trim()}`, `Phone: ${phone.trim()}`, `Plan: ${plan.trim() || "(not sure)"}`].join("\n"),
        },
      });
      setSent(true);
    } catch {
      setError(tx({ en: "That did not send. Call (818) 674-4414.", es: "No se envió. Llame al (818) 674-4414." }));
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageIntro
        kicker={tx({ en: "Insurance", es: "Seguro", hy: "Ապահովագրություն" })}
        title={tx({ en: "Call with the exact plan name.", es: "Llame con el nombre exacto del plan.", hy: "Զանգեք պլանի ճիշտ անունով։" })}
        lede={tx({
          en: "Insurance participation changes. Call with the exact name on your card before you come. If you do not have insurance, you can still come.",
          es: "La participación de los planes cambia. Llame con el nombre exacto de su tarjeta antes de venir. Si no tiene seguro, igual puede venir.",
          hy: "Պլանների մասնակցությունը փոխվում է։ Գալուց առաջ զանգեք քարտի վրայի ճիշտ անունով։ Եթե ապահովագրություն չունեք, միևնույն է կարող եք գալ։",
        })}
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <form onSubmit={onSubmit} className="border border-line bg-cream p-6 md:p-8">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            {tx({ en: "Name, phone, and the plan if you know it. Do not send a member number.", es: "Nombre, teléfono y el plan si lo sabe. No envíe un número de miembro." })}
          </p>
          <label className="mt-6 block text-sm font-medium">
            {tx({ en: "Your name", es: "Su nombre" })}
            <input className="mt-2 min-h-12 w-full border border-line bg-paper px-3" value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
          <label className="mt-4 block text-sm font-medium">
            {tx({ en: "Phone", es: "Teléfono" })}
            <input className="mt-2 min-h-12 w-full border border-line bg-paper px-3" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          </label>
          <label className="mt-4 block text-sm font-medium">
            {tx({ en: "Insurance plan, if you know it", es: "Plan de seguro, si lo sabe" })}
            <input className="mt-2 min-h-12 w-full border border-line bg-paper px-3" value={plan} onChange={(event) => setPlan(event.target.value)} placeholder={tx({ en: "Or leave blank", es: "O déjelo en blanco" })} />
          </label>
          <button type="submit" disabled={sending} className="mt-6 inline-flex min-h-12 items-center bg-blue px-5 font-medium text-cream disabled:opacity-60">
            {sending ? tx({ en: "Sending…", es: "Enviando…" }) : tx({ en: "Request a call", es: "Pedir una llamada" })}
          </button>
          {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
          {sent ? (
            <p className="mt-4 text-sm text-ink" role="status">
              {tx({ en: "Sent. The clinic will call you.", es: "Enviado. La clínica le llamará." })}
            </p>
          ) : null}
        </form>
        <div>
          <img src="/media/clinic/paperwork.png" alt={tx({ en: "A woman checking papers and a blank card at the kitchen table.", es: "Una mujer revisa papeles y una tarjeta en blanco en la mesa de la cocina.", hy: "Կինը խոհանոցի սեղանին ստուգում է թղթեր և դատարկ քարտ։" })} className="mb-6 aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
          <h2 className="font-serif text-4xl">{tx({ en: "No card yet.", es: "Todavía no tiene tarjeta." })}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {tx({
              en: "You can still come. Tell the person who answers that you do not have insurance, and what kind of visit you need.",
              es: "Igual puede venir. Diga a quien conteste que no tiene seguro y qué tipo de visita necesita.",
              hy: "Դուք դեռ կարող եք գալ։ Ասեք պատասխանողին, որ ապահովագրություն չունեք, և ինչ այց է պետք։",
            })}
          </p>
          <div className="mt-8">
            <CallButton variant="primary" />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {tx({
              en: "Do not send a member number, Social Security number, or a photo of the card through this form.",
              es: "No envíe un número de miembro, un número de Seguro Social ni una foto de la tarjeta por este formulario.",
            })}
          </p>
        </div>
      </Container>
    </>
  );
}
