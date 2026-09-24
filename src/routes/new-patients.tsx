import { createFileRoute } from "@tanstack/react-router";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/new-patients")({
  head: () => ({
    meta: [
      { title: "New patients | Canby Community Clinic" },
      {
        name: "description",
        content:
          "What a first visit at Canby Community Clinic in Reseda actually involves. Call before you come.",
      },
    ],
  }),
  component: NewPatientsPage,
});

const steps: { n: string; title: L; body: L }[] = [
  { n: "01", title: { en: "Before", es: "Antes" }, body: { en: "Call or send a callback request. You get a time only when a person confirms it.", es: "Llame o pida que le llamen. Tiene una hora solo cuando una persona la confirma." } },
  { n: "02", title: { en: "Prepare", es: "Prepárese" }, body: { en: "They tell you what to bring. Usually identification if you have it, medicines, and your questions.", es: "Le dicen qué traer. Por lo general, identificación si la tiene, medicamentos y sus preguntas." } },
  { n: "03", title: { en: "Arrive", es: "Llegue" }, body: { en: "7601 Canby Ave, suite 6B. Call ahead for parking, the entrance, and access. We do not publish a photo of the door.", es: "7601 Canby Ave, suite 6B. Llame antes por el estacionamiento, la entrada y el acceso. No publicamos una foto de la puerta." } },
  { n: "04", title: { en: "Check in", es: "Registro" }, body: { en: "You confirm who you are and why you came. You do not retell your whole history to a website.", es: "Confirma quién es y por qué vino. No vuelve a contar toda su historia en un sitio web." } },
  { n: "05", title: { en: "The visit", es: "La visita" }, body: { en: "A doctor, nurse practitioner, or physician assistant. Nurses and the front desk are part of the same clinic. English or Spanish.", es: "Un médico, una enfermera practicante o un asistente médico. Enfermería y recepción son parte de la misma clínica. Inglés o español." } },
  { n: "06", title: { en: "After", es: "Después" }, body: { en: "A treatment, a test, a referral, or another resource — named. If the answer is not here, that is said out loud.", es: "Un tratamiento, una prueba, una referencia u otro recurso, con nombre. Si la respuesta es que aquí no, se dice en voz alta." } },
];

function NewPatientsPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "New patients", es: "Pacientes nuevos" })}
        title={tx({ en: "Your first visit, in the order it happens.", es: "Su primera visita, en el orden en que ocurre." })}
        lede={tx({
          en: "The unknown is the reason people do not book. This is the path. It is the same path if you are coming back.",
          es: "Lo desconocido es la razón por la que la gente no pide cita. Este es el camino. Es el mismo si regresa.",
        })}
      />
      <Container className="py-16 md:py-24">
        <ol className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-ink pt-5">
              <p className="font-serif text-5xl text-ink/15">{step.n}</p>
              <h2 className="mt-3 font-serif text-3xl">{tx(step.title)}</h2>
              <p className="mt-3 leading-relaxed text-muted">{tx(step.body)}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
          <img src="/media/pages/door.jpg" alt={tx({ en: "A person walking toward a clinic door.", es: "Una persona camina hacia la puerta de una clínica." })} className="aspect-[3/4] w-full bg-[#ebe6de] object-contain" />
          <img src="/media/pages/medicines.jpg" alt={tx({ en: "Medicine bottles and a key on a table.", es: "Frascos de medicamento y una llave sobre una mesa." })} className="mt-8 aspect-[3/4] w-full bg-[#ebe6de] object-contain" />
          <img src="/media/pages/bench.jpg" alt={tx({ en: "A man sitting on a bench outside.", es: "Un hombre sentado en una banca afuera." })} className="col-span-2 aspect-[3/4] w-full bg-[#ebe6de] object-contain md:col-span-1" />
        </div>
      </Container>
      <FinalCta />
    </>
  );
}
