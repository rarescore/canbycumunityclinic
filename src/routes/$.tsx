import { createFileRoute, Link } from "@tanstack/react-router";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container } from "@/components/site/ui";

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
        {tx({ en: "Page not found.", es: "Página no encontrada.", hy: "Էջը չի գտնվել։" })}
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted">
        {tx({
          en: "Try one of these, or call the clinic on a weekday.",
          es: "Pruebe una de estas, o llame a la clínica en un día de semana.",
          hy: "Փորձեք սրանցից մեկը, կամ աշխատանքային օր զանգեք կլինիկա։",
        })}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CallButton variant="primary" />
      </div>
      <div className="mt-6 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap">
        <Link to="/" className="inline-flex min-h-12 items-center text-blue">
          {tx({ en: "Home", es: "Inicio", hy: "Գլխավոր" })}
        </Link>
        <Link to="/services" className="inline-flex min-h-12 items-center text-blue">
          {tx({ en: "Services", es: "Servicios", hy: "Ծառայություններ" })}
        </Link>
        <Link to="/appointments" className="inline-flex min-h-12 items-center text-blue">
          {tx({ en: "Appointments", es: "Citas", hy: "Ժամադրություններ" })}
        </Link>
      </div>
    </Container>
  );
}
