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
      en: "Content on this website is general information about the clinic and about preparing for care. It does not diagnose, treat, or create a clinician-patient relationship. Only a visit, or another appropriate clinical encounter, does that.",
      es: "El contenido de este sitio es información general sobre la clínica y sobre cómo prepararse para la atención. No diagnostica, no trata y no crea una relación clínico-paciente. Solo una visita, u otro encuentro clínico apropiado, hace eso.",
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
      en: "Services, eligibility, and staffing change. Sending a request or leaving a voicemail does not reserve a time. You have an appointment only when the clinic confirms it.",
      es: "Los servicios, la elegibilidad y el personal cambian. Enviar una solicitud o dejar un mensaje no reserva una hora. Tiene una cita solo cuando la clínica la confirma.",
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
          en: "Read this as a boundary, not as a substitute for care.",
          es: "Léalo como un límite, no como un sustituto de la atención.",
        })}
        lede={tx({
          en: "Using the site means you understand what it can and cannot do.",
          es: "Usar el sitio significa que entiende lo que puede y lo que no puede hacer.",
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
