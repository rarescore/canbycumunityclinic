import { createFileRoute, Link } from "@tanstack/react-router";
import { useTx } from "@/components/site/i18n";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/fundraiser")({
  head: () => ({
    meta: [
      { title: "Fundraiser | Canby Community Clinic" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: FundraiserPage,
});

function FundraiserPage() {
  const { tx } = useTx();
  return (
    <Container className="max-w-2xl py-16 md:py-24">
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
        {tx({ en: "Fundraiser", es: "Recaudación", hy: "Դրամահավաք" })}
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-[-0.03em]">
        {tx({ en: "No upcoming fundraiser.", es: "No hay una recaudación próxima.", hy: "Առաջիկա դրամահավաք չկա։" })}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        {tx({
          en: "Nothing is on the calendar. Check back later.",
          es: "No hay nada en el calendario. Vuelva a revisar más tarde.",
          hy: "Օրացույցում ոչինչ չկա։ Ստուգեք ավելի ուշ։",
        })}
      </p>
      <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
        <Link to="/give" className="text-link">
          {tx({ en: "Donate", es: "Donar", hy: "Նվիրատվություն" })}
        </Link>
        <Link to="/volunteer" className="text-link">
          {tx({ en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" })}
        </Link>
      </div>
    </Container>
  );
}
