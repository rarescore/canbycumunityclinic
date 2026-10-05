import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/lib/articles";
import { useTx } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Health articles | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Health articles for Reseda: primary care, screenings, Medi-Cal, and what to do before a visit at Canby Community Clinic.",
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
          en: "Blood pressure, checkups, Medi-Cal, a first visit, and when a problem should not wait.",
          es: "Presión, revisiones, Medi-Cal, una primera visita y cuándo un problema no debe esperar.",
          hy: "Ճնշում, ստուգումներ, Medi-Cal, առաջին այց, և երբ հարցը չպետք է սպասի։",
        })}
      />
      <Container className="py-16 md:py-24">
        <ul className="grid gap-10 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link to="/articles/$slug" params={{ slug: article.slug }} className="group block">
                <img src={article.image} alt={article.imageAlt} className="aspect-[16/10] w-full bg-[#ebe6de] object-contain" loading="lazy" decoding="async" />
                <h2 className="mt-4 font-serif text-2xl leading-snug group-hover:text-blue">{article.title}</h2>
                <p className="mt-2 text-muted">{article.seoDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
