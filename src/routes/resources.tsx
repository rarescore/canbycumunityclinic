import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Questions patients ask Canby Community Clinic, what to prepare, and official public resources for coverage, emergencies, and preventive care.",
      },
    ],
  }),
  component: ResourcesPage,
});

const faqs: { q: L; a: L }[] = [
  {
    q: { en: "Do I need an appointment?", es: "¿Necesito una cita?" },
    a: {
      en: "Yes. Call first. We do not promise walk-in visits, and this is not an emergency department.",
      es: "Sí. Llame primero. No prometemos visitas sin cita y esto no es una sala de emergencias.",
    },
  },
  {
    q: { en: "Are you the same clinic as Pura Vida?", es: "¿Son la misma clínica que Pura Vida?" },
    a: {
      en: "Canby Community Clinic was formerly known as Pura Vida Community Clinic. The address is still 7601 Canby Ave #6B, Reseda.",
      es: "Canby Community Clinic antes se llamaba Pura Vida Community Clinic. La dirección sigue siendo 7601 Canby Ave #6B, Reseda.",
    },
  },
  {
    q: { en: "Do you take my insurance?", es: "¿Aceptan mi seguro?" },
    a: {
      en: "We do not list insurance plans here, because they change. Call and ask about your situation before you come.",
      es: "No publicamos planes de seguro aquí porque cambian. Llame y pregunte por su situación antes de venir. No suponga que la visita es gratis.",
    },
  },
  {
    q: { en: "I don’t have insurance. Can I still call?", es: "No tengo seguro. ¿Puedo llamar?" },
    a: {
      en: "Yes. People without insurance, or with coverage that still leaves care out of reach, should call. Insurance does not, by itself, decide whether the clinic can help.",
      es: "Sí. Quien no tiene seguro, o tiene una cobertura que igual deja la atención fuera de alcance, debe llamar. El seguro, por sí solo, no decide si la clínica puede ayudar.",
    },
  },
  {
    q: { en: "Do you speak Spanish?", es: "¿Hablan español?" },
    a: {
      en: "Information is available in English and Spanish. Ask about an interpreter when you schedule so we can tell you what is possible that day.",
      es: "La información está disponible en inglés y en español. Pregunte por un intérprete al programar para decirle qué es posible ese día.",
    },
  },
  {
    q: { en: "Can I email my diagnosis or lab results?", es: "¿Puedo enviar mi diagnóstico o mis resultados?" },
    a: {
      en: "No. Ordinary email and this website are not a secure way to send medical information. Call and ask for an approved method if records are needed.",
      es: "No. El correo ordinario y este sitio no son una forma segura de enviar información médica. Llame y pida un método aprobado si hacen falta documentos.",
    },
  },
  {
    q: { en: "Is a request on the website a confirmed appointment?", es: "¿Una solicitud en el sitio es una cita confirmada?" },
    a: {
      en: "No. We contact you to confirm availability, eligibility, and what to bring. Until you hear that confirmation, you do not have a visit on the schedule.",
      es: "No. Le contactamos para confirmar disponibilidad, elegibilidad y qué traer. Hasta que escuche esa confirmación, no tiene una visita en el calendario.",
    },
  },
  {
    q: { en: "When should I not wait for this clinic?", es: "¿Cuándo no debo esperar a esta clínica?" },
    a: {
      en: "Call 911 for chest pain, trouble breathing, signs of a stroke, severe bleeding, fainting, confusion, or a serious injury. This is not an emergency department, and the website is not watched overnight or on weekends.",
      es: "Llame al 911 por dolor de pecho, dificultad para respirar, signos de un derrame, sangrado grave, desmayo, confusión o una lesión seria. Esto no es una sala de emergencias y el sitio no se vigila de noche ni en fin de semana.",
    },
  },
];

const links: { href: string; title: L; body: L }[] = [
  {
    href: "https://211la.org/",
    title: { en: "211 LA", es: "211 LA" },
    body: {
      en: "A public directory for food, housing, health, and other local help.",
      es: "Un directorio público de comida, vivienda, salud y otra ayuda local.",
    },
  },
  {
    href: "https://www.coveredca.com/",
    title: { en: "Covered California", es: "Covered California" },
    body: {
      en: "The state’s official marketplace for health coverage, including information about Medi-Cal.",
      es: "El mercado oficial del estado para cobertura de salud, incluida información sobre Medi-Cal.",
    },
  },
  {
    href: "https://www.dhcs.ca.gov/",
    title: { en: "California DHCS", es: "DHCS de California" },
    body: {
      en: "The department that oversees Medi-Cal. We are not saying a particular plan is accepted here.",
      es: "El departamento que supervisa Medi-Cal. No estamos diciendo que aquí se acepte un plan en particular.",
    },
  },
  {
    href: "https://findahealthcenter.hrsa.gov/",
    title: { en: "Find a health center", es: "Encontrar un centro de salud" },
    body: {
      en: "HRSA’s locator for health centers, if you need a different site or service.",
      es: "El localizador de HRSA de centros de salud, si necesita otro lugar o servicio.",
    },
  },
  {
    href: "https://988lifeline.org/",
    title: { en: "988 Suicide & Crisis Lifeline", es: "Línea 988 de crisis" },
    body: {
      en: "Call or text 988 for a mental health crisis. For a medical emergency, call 911.",
      es: "Llame o envíe un mensaje al 988 en una crisis de salud mental. En una emergencia médica, llame al 911.",
    },
  },
  {
    href: "https://medlineplus.gov/talkingwithyourdoctor.html",
    title: { en: "Talking with your clinician", es: "Hablar con su clínico" },
    body: {
      en: "MedlinePlus, from the National Library of Medicine, on making a visit useful.",
      es: "MedlinePlus, de la Biblioteca Nacional de Medicina, sobre cómo aprovechar una visita.",
    },
  },
];

function ResourcesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Resources", es: "Recursos" })}
        title={tx({
          en: "Answers, outside directories, and the health articles.",
          es: "Respuestas, directorios externos y los artículos de salud.",
        })}
        lede={tx({
          en: "How eligibility is reviewed, what a request on this website is not, and where to look if this clinic cannot help. Health articles are linked below.",
          es: "Cómo se revisa la elegibilidad, qué no es una solicitud en este sitio, y a dónde ir si esta clínica no puede ayudar. Los artículos de salud están enlazados abajo.",
        })}
      />
      <Container className="py-12 md:py-16">
        <h2 className="font-serif text-3xl">{tx({ en: "Questions we hear", es: "Preguntas que escuchamos" })}</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => (
            <Faq key={item.q.en} id={`faq-${index}`} q={tx(item.q)} a={tx(item.a)} />
          ))}
        </div>
      </Container>
      <Container className="py-12 md:py-16">
        <h2 className="font-serif text-3xl">
          {tx({ en: "Official places to continue", es: "Lugares oficiales para seguir" })}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {tx({
            en: "These are public agencies and directories. Linking to them is not a partnership, and it is not a statement that Canby accepts a particular program.",
            es: "Son agencias y directorios públicos. Enlazarlos no es una alianza ni significa que Canby acepte un programa en particular.",
          })}
        </p>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {links.map((item) => (
            <li key={item.href} className="grid gap-2 py-4 md:grid-cols-12">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue md:col-span-4"
              >
                {tx(item.title)}
                <span className="sr-only">
                  {tx({ en: ", opens in a new tab", es: ", se abre en una pestaña nueva" })}
                </span>
              </a>
              <p className="text-sm leading-relaxed text-muted md:col-span-8">{tx(item.body)}</p>
            </li>
          ))}
        </ul>
      </Container>
      <FinalCta />
    </>
  );
}

function Faq({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium text-ink">{q}</span>
        <span className="font-serif text-xl text-green" aria-hidden>
          {open ? "–" : "+"}
        </span>
      </button>
      <p id={id} hidden={!open} className="pb-5 leading-relaxed text-muted">
        {a}
      </p>
    </div>
  );
}
