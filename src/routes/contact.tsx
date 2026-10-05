import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";
import { ContactForm } from "@/components/site/forms";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact us | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Send a message to Canby Community Clinic in Reseda. Name, phone, and what you need. Do not include symptoms or medical records.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { tx } = useTx();
  return (
    <>
      <div className="bg-ink text-cream">
        <Container className="py-3 text-center text-sm leading-relaxed">
          {tx({
            en: "Medical emergency? Call 911. This is not an emergency department, and this website is not monitored for emergencies.",
            es: "¿Emergencia médica? Llame al 911. Esto no es una sala de emergencias y este sitio no se vigila para emergencias.",
            hy: "Բժշկական շտապ օգնությո՞ւն։ Զանգեք 911։ Սա շտապ օգնության բաժանմունք չէ, և այս կայքը շտապ դեպքերի համար չի վերահսկվում։",
          })}
        </Container>
      </div>
      <PageIntro
        kicker={tx({ en: "Contact", es: "Contacto", hy: "Կապ" })}
        title={tx({ en: "Contact us.", es: "Escríbanos.", hy: "Գրեք մեզ։" })}
        lede={tx({
          en: "Send your name and a phone number. Staff read messages on weekdays and call you back. Do not include symptoms, a diagnosis, or records.",
          es: "Mande su nombre y un teléfono. El personal lee los mensajes de lunes a viernes y le llama. No incluya síntomas, un diagnóstico ni documentos.",
          hy: "Գրեք անունը և հեռախոսը։ Աշխատակիցները կարդում են աշխատանքային օրերին և հետ են զանգում։ Մի գրեք ախտանիշ, ախտորոշում կամ բժշկական թղթեր։",
        })}
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <ContactForm />
        <div>
          <img src="/media/clinic/call-morning.png" alt={tx({ en: "A man on a phone call at a kitchen table.", es: "Un hombre habla por teléfono en la mesa de la cocina.", hy: "Տղամարդը խոհանոցի սեղանի մոտ հեռախոսով է խոսում։" })} className="mb-6 aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
          <p className="text-sm text-muted">{tx({ en: "Or call", es: "O llame", hy: "Կամ զանգահարեք" })}</p>
          <a className="mt-2 block font-medium text-blue" href={`tel:${clinic.phoneTel}`}>
            {clinic.phoneDisplay}
          </a>
          <p className="mt-6 text-sm text-muted">{tx({ en: "Weekdays, 9 AM–5 PM", es: "Lunes a viernes, 9 AM–5 PM", hy: "Երկ–ուրբ, 9:00–17:00" })}</p>
          <p className="mt-6 text-sm text-muted">{tx({ en: "Patients and appointments", es: "Pacientes y citas", hy: "Պացիենտներ և ժամադրություններ" })}</p>
          <a className="mt-1 inline-flex font-medium text-blue" href={`mailto:${clinic.emailPatients}`}>
            {clinic.emailPatients}
          </a>
          <p className="mt-4 text-sm text-muted">{tx({ en: "Office, volunteers, and vendors", es: "Oficina, voluntarios y proveedores", hy: "Գրասենյակ, կամավորներ և մատակարարներ" })}</p>
          <a className="mt-1 inline-flex font-medium text-blue" href={`mailto:${clinic.emailOffice}`}>
            {clinic.emailOffice}
          </a>
          <p className="mt-6 font-medium">
            {clinic.name}
            <br />
            {clinic.street}
            <br />
            {clinic.city}
          </p>
        </div>
      </Container>
    </>
  );
}
