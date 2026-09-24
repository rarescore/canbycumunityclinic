import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { offerings } from "@/lib/offerings";
import { useTx, type L } from "@/components/site/i18n";
import { CallButton, Container, FinalCta, Kicker, PageIntro, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Primary care, preventive checks, lab coordination, medication help, health education, and community resource navigation at Canby Community Clinic in Reseda. Call to confirm availability.",
      },
    ],
  }),
  component: ServicesPage,
});

const items: { title: L; body: L; points: L[] }[] = [
  {
    title: { en: "Primary care", es: "Atención primaria" },
    body: {
      en: "For a general checkup, follow-up of a stable ongoing condition, or a non-emergency concern when you are not sure where to start. The visit is a conversation first. The clinic then decides whether the concern can be handled here or needs another level of care.",
      es: "Para una revisión general, el seguimiento de una condición estable, o un problema que no es emergencia cuando no sabe por dónde empezar. La visita empieza con una conversación. Luego la clínica decide si el problema se puede atender aquí o necesita otro nivel de atención.",
    },
    points: [
      { en: "Your main concern, health history, and medicines", es: "Su motivo principal, historia de salud y medicamentos" },
      { en: "Blood pressure, pulse, weight, or temperature when they change the plan", es: "Presión, pulso, peso o temperatura cuando cambian el plan" },
      { en: "A focused physical examination", es: "Un examen físico enfocado" },
      { en: "Prevention matched to age, history, and risk — not a standard package", es: "Prevención según edad, historia y riesgo, no un paquete estándar" },
      { en: "A named next step: treatment, a test, follow-up, or a referral", es: "Un siguiente paso con nombre: tratamiento, prueba, seguimiento o referencia" },
    ],
  },
  {
    title: { en: "Preventive screenings", es: "Evaluaciones preventivas" },
    body: {
      en: "A screening looks for some problems before they cause obvious symptoms. The right one depends on age, medical history, family history, medicines, pregnancy, and other risks. An unusual result is not automatically a diagnosis. It may need to be repeated, and a clinician should say what it means and how soon to follow up.",
      es: "Una evaluación busca algunos problemas antes de que den síntomas claros. La correcta depende de la edad, la historia médica, la historia familiar, los medicamentos, el embarazo y otros riesgos. Un resultado inusual no es automáticamente un diagnóstico. Puede hacer falta repetirlo, y un clínico debe decir qué significa y qué tan pronto hay que seguir.",
    },
    points: [
      { en: "Blood pressure", es: "Presión arterial" },
      { en: "Diabetes risk and blood glucose, when appropriate", es: "Riesgo de diabetes y glucosa, cuando corresponde" },
      { en: "Cholesterol and cardiovascular risk", es: "Colesterol y riesgo cardiovascular" },
      { en: "Age-appropriate cancer screening — often arranged, not always done in the room", es: "Detección de cáncer según la edad: a menudo se coordina, no siempre se hace en el consultorio" },
      { en: "Depression and other behavioral-health concerns", es: "Depresión y otros problemas de salud conductual" },
      { en: "Vaccination history and preventive counseling", es: "Historia de vacunas y orientación preventiva" },
      { en: "Not every screening is offered on site. Outside labs, imaging, or specialists are named before you are sent", es: "No toda evaluación se ofrece aquí. Laboratorios, imágenes o especialistas externos se nombran antes de enviarle" },
    ],
  },
  {
    title: { en: "Diagnostic and lab support", es: "Apoyo diagnóstico y de laboratorio" },
    body: {
      en: "When a test is clinically appropriate, the clinic may help arrange basic laboratory or diagnostic work. Availability and how you will hear the result are confirmed before the test is ordered. Do not assume it happens in suite 6B.",
      es: "Cuando una prueba es clínicamente apropiada, la clínica puede ayudar a coordinar laboratorio o diagnóstico básico. La disponibilidad, el lugar de la prueba y cómo recibirá el resultado se confirman antes de ordenar la prueba. No suponga que ocurre en la suite 6B ni que es gratis.",
    },
    points: [
      { en: "Ask where the test is done, where it is done, and when you will hear back", es: "Pregunte dónde se hace la prueba, dónde se hace y cuándo le avisarán" },
    ],
  },
  {
    title: { en: "Medication assistance", es: "Ayuda con medicamentos" },
    body: {
      en: "Help understanding a prescription, or help finding certain medicines. Stock and programs change. The clinic cannot promise that a particular medicine will be in hand.",
      es: "Ayuda para entender una receta, o para encontrar ciertos medicamentos. Las existencias y los programas cambian. La clínica no puede prometer que un medicamento en particular estará disponible.",
    },
    points: [
      { en: "Bring the bottles, or a written list of prescriptions, over-the-counter medicines, vitamins, and supplements", es: "Traiga los frascos, o una lista de recetas, medicamentos sin receta, vitaminas y suplementos" },
      { en: "Bring the pharmacy name and phone number", es: "Traiga el nombre y el teléfono de la farmacia" },
    ],
  },
  {
    title: { en: "Health education", es: "Educación en salud" },
    body: {
      en: "This is part of the visit, not a blog. A clinician or volunteer explains instructions, results, medicines, and the plan in ordinary language, in English or Spanish. General advice on this website is not a personal plan. History, medicines, pregnancy, and allergies can change it.",
      es: "Esto es parte de la visita, no un blog. Un clínico o un voluntario explica instrucciones, resultados, medicamentos y el plan en lenguaje sencillo, en inglés o en español. Los consejos generales de este sitio no son un plan personal. La historia, los medicamentos, el embarazo y las alergias pueden cambiarlo.",
    },
    points: [
      { en: "How to prepare, and which two or three questions to ask", es: "Cómo prepararse y cuáles dos o tres preguntas hacer" },
      { en: "What a blood pressure, glucose, or cholesterol result means for you", es: "Qué significa para usted un resultado de presión, glucosa o colesterol" },
      { en: "How to use a medicine and keep an accurate list", es: "Cómo usar un medicamento y mantener una lista precisa" },
      { en: "Food, movement, sleep, and stress only as they fit a realistic plan", es: "Comida, movimiento, sueño y estrés solo en la medida en que caben en un plan realista" },
      { en: "What can wait for a clinic visit, and what cannot", es: "Qué puede esperar una cita y qué no" },
    ],
  },
  {
    title: { en: "Where to go next", es: "A dónde seguir" },
    body: {
      en: "If a service cannot be provided here, staff may help you find a public program, a specialist, or another community resource. That is navigation. It is not enrollment, and it is not a promise that another office will take you.",
      es: "Si un servicio no se puede ofrecer aquí, el personal puede ayudarle a encontrar un programa público, un especialista u otro recurso comunitario. Eso es orientación. No es una inscripción ni una promesa de que otra oficina le recibirá.",
    },
    points: [
      { en: "You should leave knowing the name of the next place, or a clear reason there is not one yet", es: "Usted debe irse sabiendo el nombre del siguiente lugar, o una razón clara de por qué todavía no lo hay" },
    ],
  },
];

function ServicesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Services", es: "Servicios" })}
        title={tx({
          en: "Services. Call to find out if we can do it.",
          es: "Servicios. Llame para saber si podemos hacerlo.",
        })}
        lede={tx({
          en: "Six kinds of help. None of them is guaranteed until the clinic says so on the phone. Staffing, eligibility, and what is in the room that day decide it.",
          es: "Seis tipos de ayuda. Ninguno está garantizado hasta que la clínica lo diga por teléfono. Lo deciden el personal, la elegibilidad y lo que hay en el consultorio ese día.",
        })}
      />
      <Container className="grid gap-3 py-8 md:grid-cols-3">
        <img src="/media/pages/pressure.jpg" alt={tx({ en: "A blood pressure check.", es: "Una toma de presión." })} className="aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
        <img src="/media/pages/desk.jpg" alt={tx({ en: "A receptionist greeting someone at the desk.", es: "Una recepcionista saluda a alguien en el escritorio." })} className="mt-6 aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
        <img src="/media/pages/explain.jpg" alt={tx({ en: "A nurse talking with a seated patient.", es: "Una enfermera habla con un paciente sentado." })} className="aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
      </Container>
      <Container className="max-w-3xl pb-4">
        <div className="bg-cream p-6 ring-1 ring-line md:p-8">
          <Kicker>{tx({ en: "Before you request care", es: "Antes de pedir atención" })}</Kicker>
          <p className="mt-4 leading-relaxed text-ink">
            {tx({
              en: `Call ${clinic.phoneDisplay}. Ask if the service is open, whether you fit current eligibility, and where it is done. Staff may ask where you live, whether you have insurance, and what kind of care you need. Do not send records, insurance numbers, or medical details through this website. Do not assume the visit is free.`,
              es: `Llame al ${clinic.phoneDisplay}. Pregunte si el servicio está disponible, si usted entra en la elegibilidad actual y dónde se hace. El personal puede preguntar dónde vive, si tiene seguro y qué tipo de atención necesita. No envíe expedientes, números de seguro ni datos médicos por este sitio. No suponga que la visita es gratis.`,
            })}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <CallButton variant="primary" />
            <RequestButton variant="secondary" />
          </div>
        </div>
      </Container>
      <Container className="pb-8">
        <div className="border-b border-line">
          {items.map((item, index) => (
            <article key={item.title.en} className="grid gap-4 border-t border-line py-12 md:grid-cols-12 md:gap-8">
              <p className="font-serif text-5xl tracking-[-0.05em] text-ink/65 md:col-span-2">0{index + 1}</p>
              <div className="md:col-span-4">
                <h2 className="font-serif text-4xl leading-tight">{tx(item.title)}</h2>
                <Link to="/services/$slug" params={{ slug: offerings[index].slug }} className="mt-3 inline-flex text-sm font-medium text-blue">
                  {tx({ en: "The full visit", es: "La visita completa" })}
                </Link>
                <div className="mt-6">
                  <RequestButton variant="secondary" />
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg leading-relaxed text-muted">{tx(item.body)}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point.en} className="border-l border-ink/20 pl-4 text-sm leading-relaxed text-ink">
                      {tx(point)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <FinalCta />
    </>
  );
}
