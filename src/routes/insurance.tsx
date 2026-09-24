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
          "Ask Canby Community Clinic about your coverage or about coming without insurance. This page does not check eligibility.",
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
          subject: "Coverage question",
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
        kicker={tx({ en: "Insurance", es: "Seguro" })}
        title={tx({ en: "Call about your coverage.", es: "Llame por su cobertura." })}
        lede={tx({
          en: "There is no wall of insurer logos, because that would pretend we have confirmed something we have not. Tell us the plan name. We call you back. That is not an instant yes.",
          es: "No hay una pared de logotipos, porque ambos fingirían una confirmación que no tenemos. Díganos el nombre del plan. Le devolvemos la llamada. Eso no es un sí instantáneo.",
        })}
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <form onSubmit={onSubmit} className="border border-line bg-cream p-6 md:p-8">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            {tx({ en: "About one minute. No member ID.", es: "Cerca de un minuto. Sin número de miembro." })}
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
            {sending ? tx({ en: "Sending…", es: "Enviando…" }) : tx({ en: "Ask about my coverage", es: "Preguntar por mi cobertura" })}
          </button>
          {error ? <p className="mt-4 text-sm text-danger">{error}</p> : null}
          {sent ? (
            <p className="mt-4 text-sm text-ink" role="status">
              {tx({ en: "Sent. The clinic will call you.", es: "Enviado. La clínica le llamará." })}
            </p>
          ) : null}
        </form>
        <div>
          <img src="/media/pages/card.jpg" alt={tx({ en: "Two people talking at a counter about a card.", es: "Dos personas hablan en un mostrador sobre una tarjeta." })} className="mb-6 aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
          <h2 className="font-serif text-4xl">{tx({ en: "I don’t have insurance.", es: "No tengo seguro." })}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {tx({
              en: "Call anyway. This clinic exists for people who have trouble getting care, including people without coverage and people whose coverage still leaves the visit out of reach. Having a card does not automatically mean yes. Not having one does not automatically mean no.",
              es: "Llame de todos modos. Esta clínica existe para quien tiene dificultad para recibir atención, incluidas las personas sin cobertura y quienes tienen una cobertura que igual deja la visita fuera de alcance. Tener una tarjeta no significa sí. No tenerla no significa no.",
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
