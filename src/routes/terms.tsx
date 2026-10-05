import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Website terms for Canby Community Clinic. The site is not medical advice, not an emergency service, and not a confirmed appointment.",
      },
    ],
  }),
  component: TermsPage,
});

const sections: { title: L; body: L }[] = [
  {
    title: { en: "Not medical advice", es: "No es consejo médico" },
    body: {
      en: "Content on this website is general information about the clinic and about preparing for care. It does not diagnose or treat. Reading it does not make you a patient of the clinic.",
      es: "El contenido de este sitio es información general sobre la clínica y sobre cómo prepararse para la atención. No diagnostica ni trata. Leerlo no lo hace paciente de la clínica.",
      hy: "Այս կայքի բովանդակությունը ընդհանուր տեղեկություն է կլինիկայի և այցին պատրաստվելու մասին։ Այն չի ախտորոշում և չի բուժում։ Կարդալը ձեզ այս կլինիկայի պացիենտ չի դարձնում։",
    },
  },
  {
    title: { en: "Not for emergencies", es: "No es para emergencias" },
    body: {
      en: "If you may be having a medical emergency, call 911 or go to the nearest emergency department. Do not use the form, the email addresses, or this website. Messages are not monitored for emergencies, including nights and weekends.",
      es: "Si puede estar teniendo una emergencia médica, llame al 911 o vaya a la sala de emergencias más cercana. No use el formulario, los correos ni este sitio. Los mensajes no se vigilan para emergencias, ni de noche ni en fin de semana.",
    },
  },
  {
    title: { en: "A request is not an appointment", es: "Una solicitud no es una cita" },
    body: {
      en: "A form or a voicemail holds a time only after the clinic confirms it.",
      es: "Un formulario o un mensaje de voz reserva una hora solo cuando la clínica la confirma.",
      hy: "Ձևը կամ ձայնային հաղորդագրությունը ժամ է պահում միայն այն ժամանակ, երբ կլինիկան դա հաստատում է։",
    },
  },
  {
    title: { en: "What you may send", es: "Qué puede enviar" },
    body: {
      en: "Use the forms and inboxes only for scheduling, general questions, volunteer interest, or office matters. Do not send protected health information, another person’s medical information, or anything you would not want in ordinary email.",
      es: "Use los formularios y los correos solo para programar, preguntas generales, interés de voluntariado o asuntos de oficina. No envíe información de salud protegida, información médica de otra persona ni nada que no quiera en un correo ordinario.",
    },
  },
  {
    title: { en: "The clinic’s name and mark", es: "El nombre y el emblema de la clínica" },
    body: {
      en: "The Canby Community Clinic name and logo belong to the clinic. You may not copy the site and present it as your own.",
      es: "El nombre y el logotipo de Canby Community Clinic pertenecen a la clínica. No puede copiar el sitio y presentarlo como propio.",
    },
  },
  {
    title: { en: "Links", es: "Enlaces" },
    body: {
      en: "Links to public agencies are for convenience. We do not control those sites and we are not promising that a program they describe is available through this clinic.",
      es: "Los enlaces a agencias públicas son por conveniencia. No controlamos esos sitios y no prometemos que un programa que describen esté disponible en esta clínica.",
    },
  },
  {
    title: { en: "These terms and your rights as a patient", es: "Estos términos y sus derechos como paciente" },
    body: {
      en: `These terms cover use of the website. They do not limit rights you have under privacy or health-care law when you are actually a patient. Questions about the site: ${clinic.emailOffice}. Questions about a visit: ${clinic.phoneDisplay}.`,
      es: `Estos términos cubren el uso del sitio. No limitan los derechos que tenga bajo las leyes de privacidad o de atención de salud cuando realmente es paciente. Preguntas sobre el sitio: ${clinic.emailOffice}. Preguntas sobre una visita: ${clinic.phoneDisplay}.`,
    },
  },
];

function TermsPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Website terms", es: "Términos del sitio" })}
        title={tx({
          en: "Website terms.",
          es: "Términos del sitio.",
          hy: "Կայքի պայմաններ։",
        })}
        lede={tx({
          en: "The site is not medical advice, not an emergency service, and a form is not a confirmed appointment.",
          es: "El sitio no es consejo médico, no es un servicio de emergencias, y un formulario no es una cita confirmada.",
          hy: "Կայքը բժշկական խորհուրդ չէ, շտապ օգնության ծառայություն չէ, և ձևը հաստատված ժամադրություն չէ։",
        })}
      />
      <Container className="max-w-3xl space-y-8 py-12 md:py-16">
        {sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-serif text-2xl">{tx(section.title)}</h2>
            <p className="mt-3 leading-relaxed text-muted">{tx(section.body)}</p>
          </section>
        ))}
      </Container>
    </>
  );
}
