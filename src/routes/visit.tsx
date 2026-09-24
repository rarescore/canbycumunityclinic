import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro, Photo } from "@/components/site/ui";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Your visit | Canby Community Clinic" },
      {
        name: "description",
        content:
          "What a visit at Canby Community Clinic is like, what to bring, and how new patients get started. Call (818) 674-4414. Do not send medical details by email.",
      },
    ],
  }),
  component: VisitPage,
});

const moments: { n: string; title: L; body: L }[] = [
  {
    n: "01",
    title: { en: "You reach us", es: "Usted nos contacta" },
    body: {
      en: "A phone call, or a short request with only the details needed to call you back. No history, no symptoms, no insurance number through the website.",
      es: "Una llamada, o una solicitud breve solo con lo necesario para devolverle la llamada. Sin historia, sin síntomas y sin número de seguro por el sitio.",
    },
  },
  {
    n: "02",
    title: { en: "We confirm", es: "Confirmamos" },
    body: {
      en: "You hear whether the service is available, what eligibility looks like, and which documents to bring. Until then, you do not have an appointment.",
      es: "Usted escucha si el servicio está disponible, cómo son la elegibilidad, y qué documentos traer. Hasta entonces, no tiene una cita.",
    },
  },
  {
    n: "03",
    title: { en: "You are heard", es: "Lo escuchan" },
    body: {
      en: "The visit stays with your concern, your medicines, and the questions you wrote down. An exam and measurements are done when they change the plan.",
      es: "La visita se queda con su motivo, sus medicamentos y las preguntas que anotó. El examen y las medidas se hacen cuando cambian el plan.",
    },
  },
  {
    n: "04",
    title: { en: "You leave knowing", es: "Se va sabiendo" },
    body: {
      en: "Treatment, a test, a follow-up, a referral, or a community resource — which one, and how to take it. If the answer is “not here,” that is said out loud.",
      es: "Tratamiento, una prueba, un seguimiento, una referencia o un recurso comunitario: cuál, y cómo seguirlo. Si la respuesta es “aquí no”, se dice en voz alta.",
    },
  },
];

const bring: L[] = [
  { en: "Photo identification, when you have it", es: "Identificación con foto, si la tiene" },
  {
    en: "A current list of prescriptions, over-the-counter medicines, vitamins, and supplements",
    es: "Una lista actual de recetas, medicamentos sin receta, vitaminas y suplementos",
  },
  { en: "The bottles themselves, if a written list is hard to make", es: "Los frascos, si es difícil hacer una lista escrita" },
  {
    en: "Test results, discharge papers, or specialist notes you already have on paper",
    es: "Resultados, hojas de alta o notas de especialistas que ya tenga en papel",
  },
  { en: "Insurance information, if you have coverage", es: "Información del seguro, si tiene cobertura" },
  { en: "Your pharmacy’s name and phone number", es: "El nombre y teléfono de su farmacia" },
  { en: "Two or three questions you do not want to forget", es: "Dos o tres preguntas que no quiere olvidar" },
];

function VisitPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Your visit", es: "Su visita" })}
        title={tx({
          en: "What happens at a visit.",
          es: "Qué pasa en una visita.",
        })}
        lede={tx({
          en: "New and returning patients follow the same path: reach us, wait for confirmation, arrive prepared, and leave knowing the next step. This page is the whole path.",
          es: "Pacientes nuevos y conocidos siguen el mismo camino: contactarnos, esperar la confirmación, llegar preparados y salir sabiendo el siguiente paso. Esta página es todo el camino.",
        })}
      />

      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="grid grid-cols-5 gap-3">
          <Photo
            src="/media/pages/consult.jpg"
            alt={tx({
              en: "Two people talking across a desk.",
              es: "Dos personas hablan frente a un escritorio.",
            })}
            className="col-span-3 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
          <Photo
            src="/media/pages/meter.jpg"
            alt={tx({
              en: "A glass of water and a glucose meter on a table.",
              es: "Un vaso de agua y un medidor de glucosa sobre una mesa.",
            })}
            className="col-span-2 mt-8 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight">
            {tx({
              en: "Bring someone if that helps you be heard.",
              es: "Traiga a alguien si eso le ayuda a ser escuchado.",
            })}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            {tx({
              en: "Information is available in English and Spanish. Tell us when you schedule if you need an interpreter or want a family member in the room. Say so early, so we can tell you what we can arrange.",
              es: "La información está disponible en inglés y en español. Díganos al programar si necesita un intérprete o quiere a un familiar en el cuarto. Dígalo pronto, para decirle qué podemos organizar.",
            })}
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            {tx({
              en: "Insurance status, language, transportation, and the simple difficulty of finding an appointment keep people out of basic care. The clinic exists to lower those barriers — not to pretend they are gone. Ask about insurance and eligibility before you come.",
              es: "El seguro, el idioma, el transporte y la simple dificultad de encontrar una cita alejan a la gente de la atención básica. La clínica existe para bajar esas barreras, no para fingir que desaparecieron. Pregunte por el seguro y la elegibilidad antes de venir.",
            })}
          </p>
        </div>
      </Container>

      <section className="bg-cream">
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-4xl">
            {tx({ en: "Four moments of one visit", es: "Cuatro momentos de una visita" })}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {moments.map((moment) => (
              <article key={moment.n} className="border-t border-line pt-5">
                <p className="font-serif text-3xl text-green">{moment.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{tx(moment.title)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{tx(moment.body)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-serif text-3xl">{tx({ en: "What a visit may include", es: "Qué puede incluir una visita" })}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            {[
              {
                en: "Your main concern, health history, and medications",
                es: "Su motivo principal, historia de salud y medicamentos",
              },
              {
                en: "Measurements when they are useful",
                es: "Medidas cuando son útiles",
              },
              { en: "A focused physical examination", es: "Un examen físico enfocado" },
              {
                en: "Preventive recommendations based on age, history, and risk",
                es: "Recomendaciones preventivas según edad, historia y riesgo",
              },
              {
                en: "A named plan: treatment, testing, follow-up, or referral",
                es: "Un plan con nombre: tratamiento, pruebas, seguimiento o referencia",
              },
            ].map((item) => (
              <li key={item.en} className="border-l-2 border-blue pl-3">
                {tx(item)}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {tx({
              en: "Primary care can help an adult who wants a general checkup, follow-up for a stable condition, or a non-emergency place to start. The clinic decides whether a concern can be addressed safely here.",
              es: "La atención primaria puede ayudar a un adulto que quiere un chequeo general, seguimiento de una condición estable o un lugar no urgente por dónde empezar. La clínica decide si un problema se puede atender aquí con seguridad.",
            })}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl">{tx({ en: "What to bring", es: "Qué traer" })}</h2>
          <ul className="mt-5 space-y-3">
            {bring.map((item) => (
              <li key={item.en} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-green" aria-hidden />
                {tx(item)}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-danger">
            {tx({
              en: "Do not email medical records, Social Security numbers, insurance member numbers, diagnoses, or test results to a general inbox. Ask the clinic for an approved secure method when records are needed.",
              es: "No envíe expedientes, números de Seguro Social, números de seguro, diagnósticos ni resultados a un correo general. Pida a la clínica un método seguro aprobado cuando hagan falta documentos.",
            })}
          </p>
        </div>
      </Container>

      <section className="border-t border-line bg-paper text-ink">
        <Container className="grid gap-6 py-12 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "Insurance and eligibility", es: "Seguro y elegibilidad" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: "Insurance requirements, eligibility, and availability change. Do not assume every service is free, and do not assume your plan is accepted. Call first.",
                es: "Los requisitos del seguro, la elegibilidad y la disponibilidad cambian. No suponga que todo servicio es gratis ni que aceptan su plan. Llame primero.",
              })}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "Arrive prepared", es: "Llegue preparado" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: "Confirm the suite, the time, and whether you need to fast or do anything else before you come. Allow time for parking and check-in.",
                es: "Confirme la suite, la hora y si debe ayunar o hacer algo más antes de venir. Tome en cuenta el estacionamiento y el registro.",
              })}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "Not an emergency", es: "No es una emergencia" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: `This website is not watched for emergencies. Call 911 or go to the nearest emergency department. For a weekday visit, call ${clinic.phoneDisplay}.`,
                es: `Este sitio no se vigila para emergencias. Llame al 911 o vaya a la sala de emergencias más cercana. Para una visita entre semana, llame al ${clinic.phoneDisplay}.`,
              })}
            </p>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
