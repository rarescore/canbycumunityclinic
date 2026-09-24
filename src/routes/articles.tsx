import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/lib/articles";
import { useTx } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Health guides for Reseda | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Plain-language guides for Reseda and the west Valley: Medi-Cal, primary care, screenings, and the Canby address. Call (818) 674-4414.",
      },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Articles", es: "Artículos" })}
        title={tx({ en: "Health articles.", es: "Artículos de salud." })}
        lede={tx({
          en: "Guides for Reseda and the west Valley. Each one names a source. None of them is a diagnosis.",
          es: "Guías para Reseda y el oeste del Valle. Cada una nombra una fuente. Ninguna es un diagnóstico.",
        })}
      />
      <Container className="py-16 md:py-24">
        <ul className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link to="/articles/$slug" params={{ slug: article.slug }} className="group block">
                <img src={article.image} alt={tx(article.imageAlt)} className="aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
                <h2 className="mt-4 font-serif text-2xl leading-snug group-hover:text-blue">{tx(article.title)}</h2>
                <p className="mt-2 text-muted">{tx(article.lede)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
