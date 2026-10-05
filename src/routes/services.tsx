import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { offerings } from "@/lib/offerings";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, FinalCta, Kicker, PageIntro, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Primary care, screenings, women’s care, follow-up for diabetes, blood pressure, and cholesterol, and lab orders at Canby Community Clinic in Reseda.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Services", es: "Servicios" })}
        title={tx({
          en: "Care at the clinic.",
          es: "Atención en la clínica.",
          hy: "Խնամք կլինիկայում։",
        })}
        lede={tx({
          en: "Checkups, screenings, follow-up for conditions you already know, and help arranging a basic lab.",
          es: "Revisiones, evaluaciones, seguimiento de condiciones que ya conoce y ayuda para coordinar un laboratorio básico.",
          hy: "Ստուգումներ, կանխարգելիչ զննումներ, հսկում արդեն հայտնի վիճակների համար և օգնություն հիմնական լաբորատորիա կազմակերպելու։",
        })}
      />
      <Container className="visit-photos">
        <img src="/media/clinic/stethoscope.png" alt={tx({ en: "A stethoscope, a watch, and a notebook.", es: "Un estetoscopio, un reloj y un cuaderno.", hy: "Ստետոսկոպ, ժամացույց և տետր։" })} />
        <img src="/media/clinic/bp-gauge.png" alt={tx({ en: "A blood pressure cuff and gauge.", es: "Un tensiómetro de brazo.", hy: "Ճնշաչափ և սանդղակ։" })} />
        <img src="/media/clinic/pill-bottles.png" alt={tx({ en: "Medicine bottles, glasses, and a notebook.", es: "Frascos de medicina, lentes y un cuaderno.", hy: "Դեղի շշեր, ակնոց և տետր։" })} />
      </Container>
      <Container className="max-w-3xl pb-4">
        <div className="bg-cream p-6 ring-1 ring-line md:p-8">
          <Kicker>{tx({ en: "Coming in", es: "Al venir" })}</Kicker>
          <p className="mt-4 leading-relaxed text-ink">
            {tx({
              en: `Weekdays, 9 AM to 5 PM. Bring a photo ID if you have one, your medicines, and an insurance card if you have one. Call ${clinic.phoneDisplay} if you want a time reserved.`,
              es: `De lunes a viernes, de 9 AM a 5 PM. Traiga una identificación con foto si tiene, sus medicamentos y la tarjeta del seguro si tiene una. Llame al ${clinic.phoneDisplay} si quiere una hora reservada.`,
              hy: `Երկուշաբթիից ուրբաթ, 9:00–17:00։ Բերեք լուսանկարով փաստաթուղթ, եթե ունեք, ձեր դեղերը և ապահովագրության քարտը, եթե կա։ Զանգեք ${clinic.phoneDisplay}, եթե ուզում եք, որ ժամը պահենք։`,
            })}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <CallButton variant="primary" />
            <RequestButton variant="secondary" />
          </div>
        </div>
      </Container>
      <Container className="pb-6">
        <div className="grid gap-8 border border-line bg-paper p-6 md:grid-cols-2 md:p-10">
          <div>
            <Kicker>{tx({ en: "In this clinic", es: "En esta clínica", hy: "Այս կլինիկայում" })}</Kicker>
            <h2 className="mt-3 font-serif text-4xl leading-tight">
              {tx({
                en: "What you can come in for.",
                es: "Para qué puede venir.",
                hy: "Ինչի համար կարող եք գալ։",
              })}
            </h2>
          </div>
          <ul className="space-y-4 text-muted">
            <li>{tx({ en: "A general visit for adults who live nearby, including a checkup or a question about a medicine.", es: "Una visita general para adultos que viven cerca, incluida una revisión o una pregunta sobre un medicamento.", hy: "Ընդհանուր այց մոտակայքում ապրող մեծահասակների համար՝ ստուգում կամ դեղի հարց։" })}</li>
            <li>{tx({ en: "Blood pressure, diabetes risk, and other checks matched to age and history.", es: "Presión, riesgo de diabetes y otras revisiones según la edad y la historia.", hy: "Ճնշում, դիաբետի ռիսկ և այլ ստուգումներ՝ ըստ տարիքի և պատմության։" })}</li>
            <li>{tx({ en: "Help arranging a basic lab, and a plain explanation of the result when it comes back.", es: "Ayuda para coordinar un laboratorio básico y una explicación clara del resultado cuando llegue.", hy: "Օգնություն հիմնական լաբորատորիա կազմակերպելու, և պարզ բացատրություն, երբ արդյունքը գա։" })}</li>
            <li>{tx({ en: "The visit can be in English or Spanish.", es: "La visita puede ser en inglés o en español.", hy: "Այցը կարող է լինել անգլերեն կամ իսպաներեն։" })}</li>
          </ul>
        </div>
      </Container>
      <Container className="pb-8">
        <div className="border-b border-line">
          {offerings.map((item, index) => (
            <article key={item.slug} className="grid gap-4 border-t border-line py-12 md:grid-cols-12 md:gap-8">
              <p className="font-serif text-5xl tracking-[-0.05em] text-ink/15 md:col-span-2">{String(index + 1).padStart(2, "0")}</p>
              <div className="md:col-span-4">
                <h2 className="font-serif text-4xl leading-tight">{tx(item.title)}</h2>
                <Link to="/services/$slug" params={{ slug: item.slug }} className="mt-3 inline-flex text-sm font-medium text-blue">
                  {tx({ en: "About this visit", es: "Sobre esta visita", hy: "Այս այցի մասին" })}
                </Link>
                <div className="mt-6">
                  <RequestButton variant="secondary" />
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg leading-relaxed text-muted">{tx(item.sentence)}</p>
                <ul className="mt-6 space-y-3">
                  {item.helps.map((point) => (
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
