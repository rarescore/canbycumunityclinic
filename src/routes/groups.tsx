import { createFileRoute } from "@tanstack/react-router";
import { GroupVisitForm } from "@/components/site/forms";
import { useTx, type L } from "@/components/site/i18n";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/groups")({
  head: () => ({
    meta: [
      { title: "Schools, churches, and workplaces | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Schools, churches, businesses, and public offices in the west Valley can ask Canby Community Clinic to come to them for physicals, checkups, a blood drive, or a health talk.",
      },
    ],
  }),
  component: GroupsPage,
});

const steps: { n: string; t: L; d: L }[] = [
  {
    n: "1",
    t: { en: "You send the request", es: "Usted envía la solicitud", hy: "Դուք ուղարկում եք հայտը" },
    d: {
      en: "Say who you are, where you are, and what you want. A physical day, checkups, a blood drive, or a talk.",
      es: "Diga quién es, dónde está y qué quiere. Un día de exámenes, revisiones, una donación de sangre o una charla.",
      hy: "Ասեք ով եք, որտեղ եք, և ինչ եք ուզում։ Զննումների օր, ստուգումներ, արյան հանձնում կամ զրույց։",
    },
  },
  {
    n: "2",
    t: { en: "We call", es: "Llamamos", hy: "Մենք զանգում ենք" },
    d: {
      en: "We say what we can do, what we cannot, and whether a partner is needed. A blood drive may need one.",
      es: "Decimos qué podemos hacer, qué no, y si hace falta un socio. Una donación de sangre puede necesitarlo.",
      hy: "Ասում ենք՝ ինչ կարող ենք անել, ինչ չենք կարող, և արդյոք գործընկեր է պետք։ Արյան հանձնմանը կարող է պետք լինել։",
    },
  },
  {
    n: "3",
    t: { en: "We come to you, if it fits", es: "Vamos a ustedes, si encaja", hy: "Գալիս ենք ձեզ մոտ, եթե ստացվում է" },
    d: {
      en: "Date, place, and what people should expect. Anyone who wants ongoing care can then book at the clinic.",
      es: "Fecha, lugar y qué debe esperar la gente. Quien quiera atención continua puede pedir cita en la clínica.",
      hy: "Օր, տեղ, և ինչ սպասել։ Ով ուզում է շարունակական խնամք, կարող է հետո գրանցվել կլինիկայում։",
    },
  },
];

function GroupsPage() {
  const { tx } = useTx();

  return (
    <div className="bg-[#eef3ea]">
      <header className="border-b border-line">
        <Container className="grid gap-8 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              {tx({ en: "Groups", es: "Grupos", hy: "Խմբեր" })}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-[-0.02em] md:text-6xl">
              {tx({
                en: "Bring the clinic to your school, church, or workplace.",
                es: "Lleve la clínica a su escuela, iglesia o trabajo.",
                hy: "Բերեք կլինիկան ձեր դպրոց, եկեղեցի կամ աշխատավայր։",
              })}
            </h1>
          </div>
          <p className="self-end text-lg leading-relaxed text-muted md:col-span-5">
            {tx({
              en: "Send a request. We call, work out what is possible, and come to you if it fits. This is not a confirmed date.",
              es: "Envíe una solicitud. Llamamos, vemos qué es posible y vamos si encaja. No es una fecha confirmada.",
              hy: "Ուղարկեք հայտ։ Զանգում ենք, տեսնում ենք ինչ է հնարավոր, և գալիս ենք, եթե ստացվում է։ Սա հաստատված օր չէ։",
            })}
          </p>
        </Container>
      </header>
      <Container className="grid items-start gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="rounded-lg border border-line bg-cream p-5 md:col-span-7 md:p-8">
          <h2 className="font-serif text-3xl">{tx({ en: "Request a visit", es: "Pedir una visita", hy: "Խնդրել այց" })}</h2>
          <p className="mt-2 mb-6 text-sm leading-relaxed text-muted">
            {tx({
              en: "For the person we should call. Do not list students, members, or anyone’s medical details.",
              es: "Para la persona a la que debemos llamar. No liste estudiantes, miembros ni datos médicos de nadie.",
              hy: "Այն մարդու համար, ում պետք է զանգենք։ Մի գրեք աշակերտների, անդամների կամ որևէ մեկի բժշկական մանրամասները։",
            })}
          </p>
          <GroupVisitForm />
        </div>
        <div className="md:col-span-5">
          <img
            src="/media/pages/class.jpg"
            alt={tx({
              en: "Adults sitting together in a community room.",
              es: "Adultos sentados juntos en un salón comunitario.",
              hy: "Մեծահասակներ նստած են միասին համայնքային սենյակում։",
            })}
            className="aspect-[16/9] w-full bg-[#ebe6de] object-contain"
          />
          <ol className="mt-8 space-y-6">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="text-[11px] font-medium tracking-[0.16em] text-green uppercase">
                  {step.n}
                </p>
                <h3 className="mt-1 font-serif text-2xl">{tx(step.t)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tx(step.d)}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </div>
  );
}
