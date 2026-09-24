import { createFileRoute, Link } from "@tanstack/react-router";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found | Canby Community Clinic" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Missing,
});

function Missing() {
  const { tx } = useTx();
  return (
    <Container className="py-24">
      <p className="text-xs font-medium tracking-widest text-ink uppercase">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
        {tx({ en: "That page is not here.", es: "Esa página no está aquí." })}
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        {tx({
          en: "The clinic is. Call on a weekday, or start again from the homepage.",
          es: "La clínica sí. Llame en un día de semana, o empiece de nuevo en la página principal.",
        })}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CallButton variant="primary" />
        <RequestButton variant="secondary" />
      </div>
      <Link to="/" className="mt-6 inline-flex min-h-12 items-center font-medium text-blue">
        {tx({ en: "Back to the clinic", es: "Volver a la clínica" })}
      </Link>
    </Container>
  );
}
