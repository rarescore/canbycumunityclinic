import { createFileRoute, Link } from "@tanstack/react-router";
import { useTx } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "From the community | Canby Community Clinic" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "From the community", es: "De la comunidad" })}
        title={tx({ en: "No stories are posted.", es: "No hay historias publicadas.", hy: "Պատմություններ տեղադրված չեն։" })}
        lede={tx({
          en: "This page is not linked from the menu.",
          es: "Esta página no está enlazada en el menú.",
          hy: "Այս էջը մենյուում կապ չունի։",
        })}
      />
      <Container className="flex flex-col gap-4 py-16 text-sm font-medium md:py-24">
        <Link to="/appointments" className="text-blue">
          {tx({ en: "Request a callback", es: "Pedir que le llamen", hy: "Հետզանգ խնդրել" })}
        </Link>
        <Link to="/volunteer" className="text-blue">
          {tx({ en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" })}
        </Link>
        <Link to="/give" className="text-blue">
          {tx({ en: "Donate", es: "Donar", hy: "Նվիրատվություն" })}
        </Link>
      </Container>
    </>
  );
}
