import { createFileRoute } from "@tanstack/react-router";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro, Photo } from "@/components/site/ui";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Your visit | Canby Community Clinic" },
      {
        name: "description",
        content:
          "What a visit at Canby Community Clinic is like, and what to bring. 7601 Canby Ave #6B, Reseda.",
      },
    ],
  }),
  component: VisitPage,
});

const moments: { n: string; title: L; body: L }[] = [
  {
    n: "01",
    title: { en: "Why you came", es: "Por qué vino" },
    body: {
      en: "Tell us why you came, which medicines you take, and the questions you brought.",
      es: "Díganos por qué vino, qué medicamentos toma y las preguntas que trajo.",
    },
  },
  {
    n: "02",
    title: { en: "The visit", es: "La visita" },
    body: {
      en: "We check blood pressure and examine you when that is part of the visit.",
      es: "Revisamos la presión y lo examinamos cuando eso forma parte de la visita.",
    },
  },
  {
    n: "03",
    title: { en: "Before you leave", es: "Antes de irse" },
    body: {
      en: "Ask what was decided: a medicine, a test, another visit, or a referral.",
      es: "Pregunte qué se decidió: un medicamento, una prueba, otra visita o una referencia.",
      hy: "Հարցրեք՝ ինչ է որոշվել՝ դեղ, թեստ, այլ այց, թե ուղղորդում։",
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
          hy: "Ինչ է լինում այցի ժամանակ։",
        })}
        lede={tx({
          en: "What to bring, what happens in the room, and what to ask before you leave.",
          es: "Qué traer, qué pasa en el consultorio y qué preguntar antes de irse.",
          hy: "Ինչ բերել, ինչ է լինում սենյակում, և ինչ հարցնել մինչ դուրս գալը։",
        })}
      />

      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="grid grid-cols-5 gap-3">
          <Photo
            src="/media/clinic/sidewalk.png"
            alt={tx({
              en: "A Valley sidewalk. Not the clinic building.",
              es: "Una banqueta del Valle. No es el edificio de la clínica.",
              hy: "Մայթ Valley-ում։ Կլինիկայի շենքը չէ։",
            })}
            className="col-span-3 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
          <Photo
            src="/media/clinic/pack-meds.png"
            alt={tx({ en: "Medicine bottles packed for a visit.", es: "Frascos de medicina listos para una visita.", hy: "Դեղի շշեր՝ այցի համար պատրաստ։" })}
            className="col-span-2 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl leading-tight">
            {tx({
              en: "A first visit.",
              es: "Una primera visita.",
              hy: "Առաջին այց։",
            })}
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            {tx({
              en: "Bring a photo ID if you have one, the medicines you take or a list, and any paper records you already have. Check in at the front desk. Say which language you want, whether you need step-free access, and if you want someone with you in the room.",
              es: "Traiga una identificación con foto si tiene, los medicamentos que toma o una lista, y los papeles que ya tenga. Regístrese en recepción. Diga qué idioma quiere, si necesita acceso sin escalones y si quiere a alguien con usted en el cuarto.",
              hy: "Բերեք լուսանկարով փաստաթուղթ, եթե ունեք, ձեր դեղերը կամ ցանկը, և արդեն ունեցած թղթերը։ Գրանցվեք ընդունարանում։ Ասեք որ լեզուն եք ուզում, արդյոք առանց աստիճանի մուտք է պետք, և արդյոք ուզում եք որ մեկը սենյակում ձեզ հետ լինի։",
            })}
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            {tx({
              en: "The visit can be in English or Spanish. If you need an interpreter in another language, say so at the desk or when you call.",
              es: "La visita puede ser en inglés o en español. Si necesita un intérprete en otro idioma, dígalo en recepción o al llamar.",
              hy: "Այցը կարող է լինել անգլերեն կամ իսպաներեն։ Եթե այլ լեզվով թարգմանիչ է պետք, ասեք ընդունարանում կամ զանգելիս։",
            })}
          </p>
        </div>
      </Container>

      <section className="bg-cream">
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-4xl">
            {tx({ en: "During the visit", es: "Durante la visita" })}
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
                en: "Blood pressure, and a check that fits why you came",
                es: "La presión, y una revisión que corresponda al motivo",
                hy: "Ճնշում, և ստուգում, որ համապատասխանում է պատճառին",
              },
              { en: "A focused physical examination", es: "Un examen físico enfocado" },
              {
                en: "Preventive recommendations based on age, history, and risk",
                es: "Recomendaciones preventivas según edad, historia y riesgo",
              },
              {
                en: "The next step: a medicine, a test, another visit, or a referral",
                es: "Lo siguiente: un medicamento, una prueba, otra visita o una referencia",
                hy: "Հաջորդ քայլը՝ դեղ, թեստ, այլ այց կամ ուղղորդում",
              },
            ].map((item) => (
              <li key={item.en} className="border-l-2 border-blue pl-3">
                {tx(item)}
              </li>
            ))}
          </ul>
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
        </div>
      </Container>

      <section className="border-t border-line bg-paper text-ink">
        <Container className="grid gap-6 py-12 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "Insurance", es: "Seguro" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: "If you have a plan, bring the card. If you do not have insurance, you can still come.",
                es: "Si tiene un plan, traiga la tarjeta. Si no tiene seguro, igual puede venir.",
                hy: "Եթե պլան ունեք, բերեք քարտը։ Եթե ապահովագրություն չունեք, միևնույն է կարող եք գալ։",
              })}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "Arrive prepared", es: "Llegue preparado" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: "Ask whether you need to fast or bring anything else. Allow time to park and check in. Call if you need the entrance or step-free access.",
                es: "Pregunte si debe ayunar o traer algo más. Tome en cuenta el estacionamiento y el registro. Llame si necesita la entrada o acceso sin escalones.",
                hy: "Հարցրեք՝ արդյոք պետք է ծոմ պահել կամ այլ բան բերել։ Ժամ թողեք կայանելու և գրանցվելու համար։ Զանգեք, եթե մուտքը կամ առանց աստիճանի մուտք է պետք։",
              })}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl">{tx({ en: "After you leave", es: "Después de irse", hy: "Դուրս գալուց հետո" })}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tx({
                en: "If a test was ordered, ask where it is done and when to call if you have not heard the result.",
                es: "Si ordenaron una prueba, pregunte dónde se hace y cuándo llamar si no ha recibido el resultado.",
                hy: "Եթե թեստ է նշանակվել, հարցրեք որտեղ է արվում, և երբ զանգել, եթե արդյունքը դեռ չեք լսել։",
              })}
            </p>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
