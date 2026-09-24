import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { offerings } from "@/lib/offerings";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, FinalCta, PageIntro, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
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
      <Container className="grid gap-16 py-16 md:py-24">
        <Block title={tx({ en: "What we can help with", es: "En qué podemos ayudar" })} items={offering.helps.map((item) => tx(item))} />
        <Block title={tx({ en: "When to ask for this visit", es: "Cuándo pedir esta visita" })} items={offering.when.map((item) => tx(item))} />
        <Block title={tx({ en: "What to expect", es: "Qué esperar" })} items={offering.expect.map((item) => tx(item))} />
        <div className="grid gap-4 border-t border-line pt-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl">{tx({ en: "Coverage", es: "Cobertura" })}</h2>
            <p className="mt-3 text-muted">
              {tx({
                en: "We do not list an insurance logo for this service. Call and ask about your situation. Uninsured patients should call too.",
                es: "No publicamos un logotipo de seguro para este servicio. Llame y pregunte por su situación. Quien no tiene seguro también debe llamar.",
              })}
            </p>
            <Link to="/insurance" className="mt-4 inline-flex min-h-11 items-center font-medium text-blue">
              {tx({ en: "Insurance", es: "Seguro" })} →
            </Link>
          </div>
          <div>
            <h2 className="font-serif text-3xl">{tx({ en: "Who sees you", es: "Quién lo atiende" })}</h2>
            <p className="mt-3 text-muted">
              {tx({
                en: "A primary care doctor, a specialty doctor, a nurse practitioner, or a physician assistant, with nurses and the front desk behind the visit.",
                es: "Un médico de primaria, un especialista, una enfermera practicante o un asistente médico, con enfermería y recepción detrás de la visita.",
              })}
            </p>
            <Link to="/care-team" className="mt-4 inline-flex min-h-11 items-center font-medium text-blue">
              {tx({ en: "Care team", es: "Equipo" })} →
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <RequestButton />
          <CallButton />
        </div>
      </Container>
      <FinalCta />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="grid gap-6 border-t border-line pt-8 md:grid-cols-12">
      <h2 className="font-serif text-3xl md:col-span-4">{title}</h2>
      <ul className="md:col-span-8">
        {items.map((item) => (
          <li key={item} className="border-b border-line py-3 text-lg leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
