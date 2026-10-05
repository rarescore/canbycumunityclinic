import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { offerings } from "@/lib/offerings";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro } from "@/components/site/ui";
import { servicePhoto } from "@/lib/service-photos";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    if (params.slug === "checkups") throw redirect({ to: "/services/$slug", params: { slug: "primary-care" } });
    if (params.slug === "education") throw redirect({ to: "/visit" });
    if (params.slug === "navigation") throw redirect({ to: "/resources" });
    if (params.slug === "medications" || params.slug === "vaccines" || params.slug === "specialty-care") {
      throw redirect({ to: "/services" });
    }
    const offering = offerings.find((item) => item.slug === params.slug);
    if (!offering) throw notFound();
    return offering;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title.en ?? "Service"} | Canby Community Clinic` },
      { name: "description", content: loaderData?.sentence.en ?? "" },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const offering = Route.useLoaderData();
  const { tx } = useTx();
  return (
    <>
      <PageIntro kicker={tx({ en: "A specific visit", es: "Una visita específica" })} title={tx(offering.title)} lede={tx(offering.sentence)} />
      <Container className="pb-2">
        <img
          src={servicePhoto[offering.slug]}
          alt=""
          className="aspect-[16/9] w-full bg-[#ebe6de] object-contain"
        />
      </Container>
      <Container className="service-detail">
        <div className="service-blocks">
          <Block title={tx({ en: "What we can help with", es: "En qué podemos ayudar", hy: "Ինչում կարող ենք օգնել" })} items={offering.helps.map((item) => tx(item))} />
          <Block title={tx({ en: "When to ask for this visit", es: "Cuándo pedir esta visita", hy: "Երբ խնդրել այս այցը" })} items={offering.when.map((item) => tx(item))} />
          <Block title={tx({ en: "What to expect", es: "Qué esperar", hy: "Ինչ սպասել" })} items={offering.expect.map((item) => tx(item))} />
        </div>
        <div className="service-split">
          <div>
            <h2>{tx({ en: "Scheduling", es: "Citas", hy: "Գրանցում" })}</h2>
            <p className="mt-3 text-muted">
              {tx({
                en: `Call ${clinic.phoneDisplay}, or request a time on the appointments page.`,
                es: `Llame al ${clinic.phoneDisplay}, o pida una hora en la página de citas.`,
                hy: `Զանգեք ${clinic.phoneDisplay}, կամ ժամ խնդրեք ժամադրությունների էջից։`,
              })}
            </p>
            <Link to="/appointments" className="mt-4 inline-flex min-h-11 items-center font-medium text-blue">
              {tx({ en: "Request a visit", es: "Pedir una visita", hy: "Խնդրել այց" })}
            </Link>
          </div>
          <div>
            <h2>{tx({ en: "Who sees you", es: "Quién lo atiende" })}</h2>
            <p className="mt-3 text-muted">
              {tx({
                en: "A clinician sees you. Nurses, medical assistants, and the front desk are part of the visit.",
                es: "Lo atiende un clínico. Enfermería, asistentes de consultorio y recepción forman parte de la visita.",
                hy: "Ձեզ ընդունում է բուժաշխատող։ Բուժքույրերը, բժշկական օգնականները և ընդունարանը այցի մասն են։",
              })}
            </p>
            <Link to="/care-team" className="mt-4 inline-flex min-h-11 items-center font-medium text-blue">
              {tx({ en: "Who may care for you", es: "Quién puede atenderle", hy: "Ով կարող է ընդունել ձեզ" })} →
            </Link>
          </div>
        </div>
      </Container>
      <FinalCta />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="service-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
