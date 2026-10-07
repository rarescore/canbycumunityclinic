import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { articles, type Article } from "@/lib/articles";
import { clinic } from "@/lib/clinic";
import { sendClinicMail } from "@/lib/mail.functions";
import { useTx } from "@/components/site/i18n";
import { ArticleBody } from "@/components/site/article-body";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/articles_/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return { meta: [{ title: "Article | Canby Community Clinic" }] };
    return {
      meta: [
        { title: article.seoTitle },
        { name: "description", content: article.seoDescription },
      ],
      links: [{ rel: "canonical", href: `https://canbycc.org/articles/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.seoDescription,
            image: `https://canbycc.org${article.image}`,
            author: { "@type": "MedicalClinic", name: clinic.name },
            publisher: { "@type": "MedicalClinic", name: clinic.name },
            mainEntityOfPage: `https://canbycc.org/articles/${article.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Articles", item: "/articles" },
              { "@type": "ListItem", position: 3, name: article.title, item: `/articles/${article.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { tx } = useTx();
  const suggested = suggestions(article);
  return (
    <>
      <header className="bg-paper">
        <Container className="max-w-3xl pt-10 pb-2 md:pt-14">
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            <Link to="/articles" className="text-muted">
              {tx({ en: "Articles", es: "Artículos" })}
            </Link>
          </p>
          <h1 className="mt-3 font-serif text-3xl leading-snug tracking-[-0.015em] text-ink md:text-4xl">{article.title}</h1>
        </Container>
      </header>
      <Container className="max-w-3xl pb-8">
        <figure className="mt-8">
          <img src={article.image} alt={article.imageAlt} width={1600} height={900} className="mx-auto max-h-[72vh] w-full bg-[#ebe6de] object-contain" />
        </figure>
        <ArticleBody markdown={article.body} />
      </Container>
      <section className="border-t border-line bg-cream">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-start lg:py-16">
          <div>
            <h2 className="font-serif text-3xl">{tx({ en: "Request a callback", es: "Pida que le llamen", hy: "Հետզանգ խնդրեք" })}</h2>
            <p className="mt-3 mb-5 text-muted">
              {tx({
                en: "Name and phone. The clinic calls you back to set a time.",
                es: "Nombre y teléfono. La clínica le llama para fijar una hora.",
                hy: "Անուն և հեռախոս։ Կլինիկան զանգում է՝ ժամ նշելու։",
              })}
            </p>
            <ShortVisitForm />
          </div>
          <div className="border border-line bg-paper p-6 md:p-8">
            <h2 className="font-serif text-3xl">{tx({ en: "Visit us", es: "Visítenos" })}</h2>
            <p className="mt-4 leading-relaxed">
              {clinic.street}
              <br />
              {clinic.city}
            </p>
            <p className="mt-3 text-muted">{tx({ en: "Monday–Friday, 9 AM–5 PM", es: "Lunes a viernes, 9 AM–5 PM" })}</p>
            <Link to="/location" className="mt-6 inline-flex min-h-12 items-center bg-blue px-5 font-medium text-cream">
              {tx({ en: "Visit us", es: "Visítenos" })}
            </Link>
          </div>
        </Container>
      </section>
      <section className="border-t border-line bg-paper">
        <Container className="py-14">
          <h2 className="font-serif text-3xl">{tx({ en: "Other articles", es: "Otros artículos" })}</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {suggested.map((item) => (
              <li key={item.slug}>
                <Link to="/articles/$slug" params={{ slug: item.slug }} className="group block">
                  <img src={item.image} alt={item.imageAlt} className="aspect-[16/10] w-full bg-[#ebe6de] object-contain" loading="lazy" decoding="async" />
                  <h3 className="mt-3 font-serif text-xl leading-snug group-hover:text-blue">{item.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

function suggestions(article: Article) {
  const picked: Article[] = [];
  for (const slug of article.related) {
    const match = articles.find((item) => item.slug === slug);
    if (match) picked.push(match);
  }
  for (const item of articles) {
    if (picked.length >= 3) break;
    if (item.slug !== article.slug && !picked.some((entry) => entry.slug === item.slug)) picked.push(item);
  }
  return picked.slice(0, 3);
}

function ShortVisitForm() {
  const { tx } = useTx();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSending(true);
    setError("");
    try {
      await sendClinicMail({
        data: {
          inbox: "patients",
          subject: "Appointment request",
          body: ["Appointment request", "", `Name: ${name.trim()}`, `Phone: ${phone.trim()}`, `Time: ${when.trim() || "(not given)"}`].join("\n"),
        },
      });
      setSent(true);
    } catch {
      setError(tx({ en: "That did not send. Call (818) 674-4414.", es: "No se envió. Llame al (818) 674-4414." }));
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="border border-line bg-paper p-5" role="status">
        {tx({ en: "Sent. The clinic will call on a weekday.", es: "Enviado. La clínica llamará en un día de semana." })}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-paper p-5">
      <p className="text-sm leading-relaxed">
        {tx({
          en: "Appointment only. Do not write symptoms, medicines, or records.",
          es: "Solo la cita. No escriba síntomas, medicamentos ni documentos.",
        })}
      </p>
      <label className="mt-4 block text-sm font-medium">
        {tx({ en: "Name", es: "Nombre" })}
        <input className="mt-2 min-h-12 w-full border border-line bg-cream px-3" value={name} onChange={(event) => setName(event.target.value)} required autoComplete="name" />
      </label>
      <label className="mt-4 block text-sm font-medium">
        {tx({ en: "Phone", es: "Teléfono" })}
        <input className="mt-2 min-h-12 w-full border border-line bg-cream px-3" inputMode="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
      </label>
      <label className="mt-4 block text-sm font-medium">
        {tx({ en: "A time that works", es: "Una hora que le sirva" })}
        <input className="mt-2 min-h-12 w-full border border-line bg-cream px-3" value={when} onChange={(event) => setWhen(event.target.value)} placeholder={tx({ en: "Weekday mornings", es: "Mañanas entre semana" })} />
      </label>
      <button type="submit" disabled={sending} className="mt-5 inline-flex min-h-12 items-center bg-blue px-5 font-medium text-cream disabled:opacity-60">
        {sending ? tx({ en: "Sending…", es: "Enviando…" }) : tx({ en: "Request a call", es: "Pedir una llamada" })}
      </button>
      {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
    </form>
  );
}
