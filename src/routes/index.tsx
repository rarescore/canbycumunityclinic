import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { CommunityLapse } from "@/components/site/community-lapse";
import { CallButton, Container, HoursTable, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canby Community Clinic | Reseda" },
      {
        name: "description",
        content:
          "Community healthcare in Reseda. Primary care, screenings, and a clear next step at Canby Community Clinic, formerly Pura Vida. Call (818) 674-4414. Weekdays 9–5.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: "/media/hero-desk.webp", media: "(min-width: 768px)" },
      { rel: "preload", as: "image", href: "/media/hero-phone-poster.jpg?v=3", media: "(max-width: 767px)" },
    ],
  }),
  component: Home,
});

const reasons: { title: L; body: L }[] = [
  {
    title: { en: "I need a checkup", es: "Necesito una revisión" },
    body: {
      en: "A general visit, the measurements that help, and a plan before you leave.",
      es: "Una visita general, las medidas que ayudan y un plan antes de irse.",
    },
  },
  {
    title: { en: "I have an ongoing condition", es: "Tengo una condición continua" },
    body: {
      en: "Follow-up for something stable. Call first so we can say if this is the right place.",
      es: "Seguimiento de algo estable. Llame primero para saber si este es el lugar correcto.",
    },
  },
  {
    title: { en: "I need a screening", es: "Necesito una evaluación" },
    body: {
      en: "Blood pressure, diabetes risk, and other checks matched to you. Not every test is done in the room.",
      es: "Presión, riesgo de diabetes y otras revisiones según usted. No toda prueba se hace en el consultorio.",
    },
  },
  {
    title: { en: "I need help with a medicine", es: "Necesito ayuda con un medicamento" },
    body: {
      en: "Understand a prescription, or ask about certain medicines. Nothing is guaranteed in stock.",
      es: "Entender una receta, o preguntar por ciertos medicamentos. Nada está garantizado en existencia.",
    },
  },
  {
    title: { en: "I need a test", es: "Necesito una prueba" },
    body: {
      en: "Help arranging basic labs when they are appropriate. The place is confirmed first.",
      es: "Ayuda para coordinar laboratorios básicos cuando corresponde. El lugar de la prueba se confirma antes.",
    },
  },
  {
    title: { en: "I’m not sure", es: "No estoy seguro" },
    body: {
      en: "Say the concern in ordinary words. Staff will tell you whether we can see you.",
      es: "Diga el problema con palabras sencillas. El personal le dirá si podemos atenderle.",
    },
  },
];

const faqs: { q: L; a: L }[] = [
  {
    q: { en: "Are you accepting new patients?", es: "¿Aceptan pacientes nuevos?" },
    a: {
      en: "Call and ask. New patients are scheduled when staffing and the service line up. A request on this website is not a confirmed visit.",
      es: "Llame y pregunte. Los pacientes nuevos se programan cuando el personal y el servicio coinciden. Una solicitud en este sitio no es una visita confirmada.",
    },
  },
  {
    q: { en: "Do you take my insurance?", es: "¿Aceptan mi seguro?" },
    a: {
      en: "We do not publish a list of plans. Call with your coverage and we will say whether it changes anything for this visit. Do not assume the visit is free.",
      es: "No publicamos una lista de planes. Llame con su cobertura y diremos si cambia algo para esta visita. No suponga que la visita es gratis.",
    },
  },
  {
    q: { en: "Can I come without insurance?", es: "¿Puedo venir sin seguro?" },
    a: {
      en: "Yes, call. People without insurance, or with coverage that still leaves care out of reach, are who this clinic is for. Insurance does not, by itself, decide whether we can help.",
      es: "Sí, llame. Esta clínica es para quien no tiene seguro, o tiene una cobertura que igual deja la atención fuera de alcance. El seguro, por sí solo, no decide si podemos ayudar.",
    },
  },
  {
    q: { en: "How fast can I be seen?", es: "¿Qué tan pronto me pueden atender?" },
    a: {
      en: "That depends on the day and the staffing. The phone is the fastest way to hear a real time. Walk-ins are not guaranteed.",
      es: "Depende del día y del personal. El teléfono es la forma más rápida de escuchar una hora real. Las visitas sin cita no están garantizadas.",
    },
  },
  {
    q: { en: "What languages do you speak?", es: "¿Qué idiomas hablan?" },
    a: {
      en: "English and Spanish. If you need an interpreter, say so when you call so we can tell you what we can arrange.",
      es: "Inglés y español. Si necesita un intérprete, dígalo al llamar para decirle qué podemos organizar.",
    },
  },
  {
    q: { en: "Do you treat children?", es: "¿Atienden a niños?" },
    a: {
      en: "Ask when you call and name the age and the concern. We will not guess on this page whether a particular visit is one we can offer.",
      es: "Pregunte al llamar e indique la edad y el motivo. En esta página no adivinamos si una visita en particular es una que podemos ofrecer.",
    },
  },
  {
    q: { en: "What should I bring?", es: "¿Qué debo traer?" },
    a: {
      en: "Photo identification if you have it, a medicine list or the bottles, insurance information if you have coverage, your pharmacy’s phone number, and two or three questions.",
      es: "Identificación con foto si la tiene, una lista de medicamentos o los frascos, información del seguro si tiene cobertura, el teléfono de su farmacia y dos o tres preguntas.",
    },
  },
  {
    q: { en: "Do you take walk-ins?", es: "¿Atienden sin cita?" },
    a: {
      en: "No. Call before you come. If you need to cancel, call early so the time can go to someone else.",
      es: "No. Llame antes de venir. Si necesita cancelar, llame temprano para que ese tiempo pueda ser de otra persona.",
    },
  },
];

function Home() {
  const { tx } = useTx();

  return (
    <>
      <CommunityLapse />

      <section className="border-b border-line">
        <Container className="py-8 md:py-10">
          <h2 className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            {tx({ en: "I want to", es: "Quiero" })}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/appointments" as const, t: { en: "Book a visit", es: "Pedir una visita" }, d: { en: "Call, or send a callback request. A time is real only after the clinic confirms it.", es: "Llame, o pida que le llamemos. La hora es real solo cuando la clínica la confirma." } },
              { to: "/new-patients" as const, t: { en: "Start as a new patient", es: "Empezar como paciente nuevo" }, d: { en: "What happens first, and what to bring.", es: "Qué pasa primero y qué traer." } },
              { to: "/insurance" as const, t: { en: "Ask about insurance", es: "Preguntar por el seguro" }, d: { en: "No plan list on this site. Call with the card you have, or with none.", es: "No hay lista de planes en este sitio. Llame con la tarjeta que tiene, o sin ninguna." } },
              { to: "/services" as const, t: { en: "See services", es: "Ver servicios" }, d: { en: "Primary care, screenings, labs, medicines, education, and what we refer out.", es: "Atención primaria, evaluaciones, laboratorios, medicamentos, educación y lo que referimos." } },
              { to: "/location" as const, t: { en: "Get directions", es: "Cómo llegar" }, d: { en: "7601 Canby Ave #6B, Reseda. Weekdays, 9–5.", es: "7601 Canby Ave #6B, Reseda. Lunes a viernes, 9–5." } },
              { to: "/groups" as const, t: { en: "Bring us to your group", es: "Llévenos a su grupo", hy: "Բերեք մեզ ձեր խումբ" }, d: { en: "Schools, churches, businesses, and public offices. Physicals, checkups, a blood drive, or a talk.", es: "Escuelas, iglesias, negocios y oficinas públicas. Exámenes, revisiones, una donación de sangre o una charla.", hy: "Դպրոցներ, եկեղեցիներ, բիզնեսներ և հանրային գրասենյակներ։ Զննումներ, ստուգումներ, արյան հանձնում կամ զրույց։" } },
              { to: "/articles" as const, t: { en: "Read a health article", es: "Leer un artículo de salud" }, d: { en: "Blood pressure, screenings, and primary care. Not a diagnosis.", es: "Presión, evaluaciones y atención primaria. No es un diagnóstico." } },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex h-full flex-col border border-line bg-cream p-5 hover:border-ink">
                  <span className="font-serif text-2xl">{tx(item.t)}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">{tx(item.d)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line bg-paper">
        <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-ink">
            {tx({
              en: "No insurance, dropped from a plan, or not sure we can see you? Call before you come. This website does not enroll you in Medi-Cal.",
              es: "¿Sin seguro, lo sacaron de un plan, o no sabe si podemos atenderle? Llame antes de venir. Este sitio no lo inscribe en Medi-Cal.",
            })}
          </p>
          <a href={`tel:${clinic.phoneTel}`} className="shrink-0 text-lg font-semibold whitespace-nowrap text-[#b42318] tabular-nums">
            {clinic.phoneDisplay}
          </a>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid md:grid-cols-2">
          <Link to="/new-patients" className="border-b border-line py-10 md:border-r md:border-b-0 md:pr-10">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{tx({ en: "New", es: "Nuevo" })}</p>
            <h2 className="mt-3 font-serif text-4xl">{tx({ en: "First visit", es: "Primera visita" })}</h2>
            <p className="mt-3 max-w-md text-muted">{tx({ en: "How the visit works, and what to bring to suite 6B.", es: "Cómo funciona la visita y qué traer a la suite 6B." })}</p>
          </Link>
          <Link to="/appointments" className="py-10 md:pl-10">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{tx({ en: "Returning", es: "Ya es paciente" })}</p>
            <h2 className="mt-3 font-serif text-4xl">{tx({ en: "Schedule or change a visit", es: "Programar o cambiar una visita" })}</h2>
            <p className="mt-3 max-w-md text-muted">{tx({ en: "Call the clinic. Do not email symptoms or test results.", es: "Llame a la clínica. No envíe síntomas ni resultados por correo." })}</p>
          </Link>
        </Container>
      </section>

      <section className="border-b border-line bg-cream">
        <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: { en: "Who provides care", es: "Quién atiende" }, v: { en: "Doctors, NPs, PAs, nurses, and reception", es: "Médicos, NPs, PAs, enfermería y recepción" } },
            { k: { en: "Languages", es: "Idiomas" }, v: { en: "English and Spanish", es: "Inglés y español" } },
            { k: { en: "Patients", es: "Pacientes" }, v: { en: "400+ and growing", es: "Más de 400, y sigue creciendo" } },
            { k: { en: "Insurance", es: "Seguro" }, v: { en: "Ask on the phone before you come", es: "Se confirma por teléfono antes de venir" } },
          ].map((item) => (
            <div key={item.k.en}>
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{tx(item.k)}</p>
              <p className="mt-2 text-sm leading-snug text-ink">{tx(item.v)}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-line bg-paper">
        <Container className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-4">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">Google</p>
            <p className="mt-3 text-2xl tracking-wide text-[#b42318]" aria-label={tx({ en: "5 stars on Google", es: "5 estrellas en Google" })}>
              ★★★★★
            </p>
            <p className="mt-2 text-sm text-muted">{tx({ en: "5.0 on Google", es: "5.0 en Google" })}</p>
          </div>
          <div className="grid gap-6 md:col-span-8">
            <blockquote className="border-t border-line pt-4">
              <p className="text-lg leading-relaxed text-ink">“Doctor was very knowledgeable and answered all my concerns.”</p>
            </blockquote>
            <blockquote className="border-t border-line pt-4">
              <p className="text-lg leading-relaxed text-ink">“Odelia at reception was friendly and made check-in quick and easy.”</p>
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-28">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="font-serif text-4xl leading-tight md:col-span-6 md:text-6xl">
              {tx({ en: "What a visit includes", es: "Qué incluye una visita" })}
            </h2>
            <p className="text-muted md:col-span-5 md:col-start-8">
              {tx({
                en: "A visit is a conversation, the measurements that help, and a next step before you leave.",
                es: "Una visita es una conversación, las medidas que ayudan y un siguiente paso antes de irse.",
              })}
            </p>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              { n: "01", t: { en: "We start with your question", es: "Empezamos con su pregunta" }, d: { en: "Your symptoms, your medicines, and why you came.", es: "Sus síntomas, sus medicamentos y por qué vino." } },
              { n: "02", t: { en: "There is time to talk", es: "Hay tiempo para hablar" }, d: { en: "We do not advertise a minute count.", es: "No anunciamos un número de minutos." } },
              { n: "03", t: { en: "We explain it in plain language", es: "Lo explicamos en lenguaje sencillo" }, d: { en: "English or Spanish.", es: "Inglés o español." } },
              { n: "04", t: { en: "You leave with a next step", es: "Se va con un siguiente paso" }, d: { en: "Treatment, a test, a referral, or another resource.", es: "Tratamiento, una prueba, una referencia u otro recurso." } },
            ].map((item) => (
              <li key={item.n} className="border-t border-ink pt-6">
                <p className="font-serif text-5xl tracking-[-0.05em] text-ink/65">{item.n}</p>
                <h3 className="mt-4 font-serif text-3xl">{tx(item.t)}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{tx(item.d)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line bg-cream">
        <Container className="grid gap-8 py-14 md:grid-cols-3 md:py-20">
          {[
            { href: clinic.npiUrl, t: { en: "Federal NPI registry", es: "Registro federal NPI" }, d: { en: `${clinic.npi}. Registered as a clinic/center at this address.`, es: `${clinic.npi}. Registrada como clínica en esta dirección.` } },
            { href: clinic.hcaiUrl, t: { en: "California HCAI", es: "HCAI de California" }, d: { en: `Listed as an open community clinic under ${clinic.former}. Facility ${clinic.hcaiId}.`, es: `Figura como clínica comunitaria abierta bajo ${clinic.former}. Centro ${clinic.hcaiId}.` } },
            { href: clinic.nonprofitUrl, t: { en: "Nonprofit filings", es: "Declaraciones" }, d: { en: `Canby Community Clinic Inc., EIN ${clinic.ein}, 501(c)(3), formed in 2022.`, es: `Canby Community Clinic Inc., EIN ${clinic.ein}, 501(c)(3), formada en 2022.` } },
          ].map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="group block border-t border-line pt-5">
              <h3 className="font-serif text-2xl group-hover:text-blue">{tx(item.t)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tx(item.d)}</p>
            </a>
          ))}
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid items-end gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              {tx({ en: "Wondering about your insurance?", es: "¿Duda sobre su seguro?" })}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {tx({
                en: "We do not put insurer logos on this site. Plans change, and a logo would imply a yes we have not confirmed. Call with the card you actually have. No insurance? Call anyway — that is not a reason to stay home.",
                es: "No ponemos logotipos de aseguradoras en este sitio. Los planes cambian, y un logotipo implicaría un sí que no hemos confirmado. Llame con la tarjeta que realmente tiene. ¿Sin seguro? Llame de todos modos: eso no es razón para quedarse en casa.",
              })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton variant="primary" />
              <RequestButton variant="secondary" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-cream">
        <Container className="py-16 md:py-24">
          <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-5xl">
            {tx({ en: "What brings you in?", es: "¿Qué le trae?" })}
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            {tx({
              en: "You do not need the medical name for it. Pick the closest reason, then call so we can say if we can help.",
              es: "No necesita el nombre médico. Elija la razón más cercana y llame para saber si podemos ayudar.",
            })}
          </p>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <Link key={reason.title.en} to="/appointments" className="group bg-cream p-6 transition-colors duration-200 hover:bg-paper">
                <h3 className="font-serif text-2xl tracking-[-0.02em] group-hover:text-blue">{tx(reason.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tx(reason.body)}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              {tx({ en: "How to get an appointment", es: "Cómo pedir una cita" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {tx({
                en: "Three steps. The visit is real only when a person at the clinic confirms it.",
                es: "Tres pasos. La visita es real solo cuando una persona de la clínica la confirma.",
              })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RequestButton />
              <CallButton />
            </div>
          </div>
          <ol className="md:col-span-7">
            {[
              { n: "01", t: { en: "Call, or ask us to call you", es: "Llame, o pida que le llamemos" }, d: { en: "Name, phone, a good time of day, language, and the kind of visit. No symptoms on this website.", es: "Nombre, teléfono, una hora del día, idioma y el tipo de visita. Sin síntomas en este sitio." } },
              { n: "02", t: { en: "We say what is possible", es: "Decimos qué es posible" }, d: { en: "Availability, eligibility, where it is done, and what to bring.", es: "Disponibilidad, elegibilidad, dónde se hace y qué traer." } },
              { n: "03", t: { en: "You come to suite 6B", es: "Viene a la suite 6B" }, d: { en: "With your questions. You leave knowing the next step, or that the next step is somewhere else.", es: "Con sus preguntas. Se va sabiendo el siguiente paso, o que el siguiente paso es en otro lugar." } },
            ].map((step) => (
              <li key={step.n} className="grid grid-cols-12 gap-4 border-t border-line py-6">
                <span className="col-span-2 font-serif text-3xl text-ink/65">{step.n}</span>
                <div className="col-span-10">
                  <h3 className="font-serif text-2xl">{tx(step.t)}</h3>
                  <p className="mt-2 text-muted">{tx(step.d)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid grid-cols-2 gap-3 py-6 md:grid-cols-4 md:py-8">
          {[
            ["/media/pages/hall.jpg", { en: "A person walking down a clinic hallway.", es: "Una persona camina por un pasillo de clínica." }],
            ["/media/pages/outside.jpg", { en: "Three adults talking outside a community building.", es: "Tres adultos hablan afuera de un edificio comunitario." }],
            ["/media/pages/walk.jpg", { en: "A parent and child walking on a sidewalk.", es: "Un padre y su hijo caminan por la banqueta." }],
            ["/media/pages/morning.jpg", { en: "A woman sitting at the edge of a bed in the morning.", es: "Una mujer sentada al borde de la cama por la mañana." }],
          ].map(([src, alt]) => (
            <img key={src as string} src={src as string} alt={tx(alt as { en: string; es: string })} className="aspect-[4/5] w-full object-cover object-center" />
          ))}
        </Container>
      </section>

      <section className="border-b border-line bg-paper">
        <Container className="grid items-end gap-10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
              {tx({ en: "Who you will see", es: "A quién verá" })}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {tx({ en: "A full staff sees patients.", es: "Un personal completo atiende." })}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              {tx({
                en: "Primary care physicians, specialty physicians, nurse practitioners, physician assistants, nurses, medical assistants, and receptionists. The clinic is staffed to run.",
                es: "Médicos de primaria, especialistas, enfermeras practicantes, asistentes médicos, enfermería, asistentes de consultorio y recepcionistas. La clínica tiene el personal para funcionar.",
              })}
            </p>
            <Link to="/care-team" className="mt-8 inline-flex min-h-12 items-center font-medium text-blue">
              {tx({ en: "See the care team", es: "Ver el equipo" })} →
            </Link>
          </div>
          <figure className="grid grid-cols-2 gap-3 md:col-span-6">
            <img
              src="/media/pages/team.jpg"
              alt={tx({
                en: "A doctor, a nurse, and a patient talking in an exam room.",
                es: "Un médico, una enfermera y un paciente hablan en un consultorio.",
              })}
              className="aspect-[4/3] w-full bg-[#ebe6de] object-contain"
            />
            <img
              src="/media/pages/listen.jpg"
              alt={tx({
                en: "A clinician listening to a patient across a table.",
                es: "Un clínico escucha a un paciente al otro lado de la mesa.",
              })}
              className="mt-8 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
            />
          </figure>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl leading-tight">
              {tx({ en: "If you need a different service", es: "Si necesita otro servicio" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {tx({
                en: "These are public directories. They are not partners, and calling them is not a guarantee they can help.",
                es: "Son directorios públicos. No son aliados, y llamarlos no garantiza que puedan ayudar.",
              })}
            </p>
          </div>
          <ul className="divide-y divide-line border-y border-line md:col-span-7">
            {[
              { href: "https://211la.org/", t: "211 LA", d: { en: "Food, housing, health, and other local help.", es: "Comida, vivienda, salud y otra ayuda local." } },
              { href: "https://www.coveredca.com/", t: "Covered California", d: { en: "The state marketplace, including Medi-Cal information.", es: "El mercado del estado, incluida información de Medi-Cal." } },
              { href: "https://findahealthcenter.hrsa.gov/", t: { en: "Find a health center", es: "Encontrar un centro de salud" }, d: { en: "HRSA’s locator if you need a different site.", es: "El localizador de HRSA si necesita otro lugar." } },
              { href: "https://988lifeline.org/", t: "988", d: { en: "Mental health crisis. For a medical emergency, call 911.", es: "Crisis de salud mental. En una emergencia médica, llame al 911." } },
            ].map((item) => (
              <li key={item.href} className="grid gap-1 py-4 sm:grid-cols-3">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-blue">
                  {typeof item.t === "string" ? item.t : tx(item.t)}
                </a>
                <p className="text-sm text-muted sm:col-span-2">{tx(item.d)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line bg-cream">
        <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-20">
          <h2 className="font-serif text-4xl leading-tight md:col-span-5 md:text-5xl">
            {tx({ en: "About this clinic", es: "Sobre esta clínica" })}
          </h2>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              {tx({
                en: "Insurance, language, transportation, and the wait for an appointment keep people out of basic care. Canby Community Clinic, formerly Pura Vida, is a nonprofit weekday clinic at 7601 Canby Ave #6B. It is a 501(c)(3), formed in 2022. More than 400 patients, and growing.",
                es: "El seguro, el idioma, el transporte y la espera de una cita alejan a la gente de la atención básica. Canby Community Clinic, antes Pura Vida, es una clínica sin fines de lucro de lunes a viernes en 7601 Canby Ave #6B. Es una 501(c)(3), formada en 2022. Más de 400 pacientes, y sigue creciendo.",
              })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/volunteer" className="inline-flex min-h-12 items-center justify-center bg-ink px-5 text-sm font-medium text-cream">
                {tx({ en: "Volunteer", es: "Voluntariado" })}
              </Link>
              <Link to="/give" className="inline-flex min-h-12 items-center justify-center px-5 text-sm font-medium text-ink ring-1 ring-line">
                {tx({ en: "Donate", es: "Donar" })}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 md:py-24">
          <h2 className="font-serif text-4xl">{tx({ en: "New here?", es: "¿Es su primera vez?" })}</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-4">
            {[
              { n: "01", t: { en: "Reach us", es: "Contáctenos" }, d: { en: "Call, or leave a callback request.", es: "Llame, o deje una solicitud de llamada." } },
              { n: "02", t: { en: "Hear the terms", es: "Escuche las condiciones" }, d: { en: "Eligibility and what to bring.", es: "Elegibilidad y qué traer." } },
              { n: "03", t: { en: "Arrive", es: "Llegue" }, d: { en: "ID if you have it, medicines, questions.", es: "Identificación si la tiene, medicamentos, preguntas." } },
              { n: "04", t: { en: "Leave with a plan", es: "Váyase con un plan" }, d: { en: "Treatment, a test, a referral, or another resource.", es: "Tratamiento, una prueba, una referencia u otro recurso." } },
            ].map((step) => (
              <li key={step.n} className="border-t border-line pt-4">
                <p className="font-serif text-3xl text-ink/65">{step.n}</p>
                <h3 className="mt-3 font-serif text-2xl">{tx(step.t)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tx(step.d)}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link to="/visit" className="font-medium text-blue">
              {tx({ en: "The full visit, including what to bring", es: "La visita completa, incluido qué traer" })} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-cream">
        <Container className="py-16 md:py-20">
          <h2 className="font-serif text-4xl">{tx({ en: "Before you book.", es: "Antes de pedir cita." })}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <Faq key={item.q.en} q={tx(item.q)} a={tx(item.a)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-paper text-ink">
        <Container className="grid items-center gap-8 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">
              {tx({ en: "Call to schedule", es: "Llame para programar" })}
            </h2>
            <p className="mt-4 text-muted">
              {clinic.street}
              <span className="block">{clinic.city}</span>
              <span className="mt-2 block">{tx({ en: "Monday–Friday, 9–5", es: "Lunes a viernes, 9–5" })}</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RequestButton variant="secondary" />
              <CallButton />
            </div>
          </div>
          <div className="bg-cream p-6 text-ink">
            <HoursTable />
            <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-12 items-center font-medium text-blue">
              {tx({ en: "Directions", es: "Cómo llegar" })}
            </a>
            <iframe
              title={tx({ en: "Map of the clinic", es: "Mapa de la clínica" })}
              src={clinic.mapsEmbed}
              className="mt-4 h-64 w-full border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = q.slice(0, 24).replace(/\s+/g, "-");
  return (
    <div>
      <button
        type="button"
        className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium">{q}</span>
        <span aria-hidden className="font-serif text-xl text-blue">
          {open ? "–" : "+"}
        </span>
      </button>
      <p id={id} hidden={!open} className="max-w-3xl pb-5 leading-relaxed text-muted">
        {a}
      </p>
    </div>
  );
}
