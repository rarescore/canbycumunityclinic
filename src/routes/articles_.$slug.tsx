import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles } from "@/lib/articles";
import { articleDepth } from "@/lib/article-depth";
import { offerings } from "@/lib/offerings";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/articles_/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.seoTitle ?? "Guide | Canby Community Clinic" },
      { name: "description", content: loaderData?.seoDescription ?? "" },
    ],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.title.en,
              description: loaderData.seoDescription,
              image: loaderData.image,
              author: { "@type": "MedicalClinic", name: "Canby Community Clinic" },
              about: "Community clinic care in Reseda, California",
            }),
          },
        ]
      : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const { tx } = useTx();
  const service = offerings.find((item) => item.slug === article.service);
  return (
    <>
      <header className="bg-paper">
        <Container className="max-w-3xl pt-10 pb-2 md:pt-14">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{tx({ en: "Reseda", es: "Reseda" })}</p>
          <h1 className="mt-3 font-serif text-3xl leading-snug tracking-[-0.015em] text-ink md:text-4xl">{tx(article.title)}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{tx(article.lede)}</p>
        </Container>
      </header>
      <Container className="max-w-3xl pb-16">
        <figure className="mt-8">
          <img src={article.image} alt={tx(article.imageAlt)} className="w-full bg-[#ebe6de] object-contain" />
        </figure>
        <div className="mt-10 space-y-8">
          {[...article.sections, ...(articleDepth[article.slug] ?? [])].map((section) => (
            <section key={section.h.en}>
              <h2 className="font-serif text-2xl leading-snug text-ink">{tx(section.h)}</h2>
              <p className="mt-3 text-base leading-8 text-ink">{tx(section.p)}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          {tx({ en: "Source", es: "Fuente" })}:{" "}
          <a href={article.source} className="text-blue" target="_blank" rel="noopener noreferrer">
            {article.sourceLabel}
          </a>
          . {tx({ en: "This page does not diagnose you.", es: "Esta página no le diagnostica." })}
        </p>
        {service ? (
          <div className="mt-12 border border-line bg-cream p-6">
            <h2 className="font-serif text-3xl">{tx(service.title)}</h2>
            <p className="mt-3 text-muted">{tx(service.sentence)}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <RequestButton variant="secondary" />
              <CallButton />
              <Link to="/services/$slug" params={{ slug: service.slug }} className="inline-flex min-h-12 items-center font-medium text-blue">
                {tx({ en: "Read the service", es: "Ver el servicio" })}
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </>
  );
}
