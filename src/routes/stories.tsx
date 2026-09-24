import { createFileRoute, Link } from "@tanstack/react-router";
import { useTx } from "@/components/site/i18n";
import { Container, PageIntro, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "From the community | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic does not publish patient, donor, or volunteer stories until the person has agreed and the story has been checked.",
      },
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
        title={tx({ en: "No patient stories are published yet.", es: "Todavía no publicamos historias de pacientes." })}
        lede={tx({
          en: "We will not invent reviews or quotes. When a patient agrees to share their own words, they will be posted here.",
          es: "No inventaremos reseñas ni citas. Cuando un paciente acepte compartir sus propias palabras, se publicarán aquí.",
        })}
      />
      <Container className="grid gap-6 py-16 md:grid-cols-3 md:py-24">
        <Link to="/appointments" className="border-t border-ink pt-5">
          <h2 className="font-serif text-3xl">{tx({ en: "Need a visit", es: "Necesita una visita" })}</h2>
          <p className="mt-3 text-muted">{tx({ en: "Book with your name and phone only.", es: "Pida cita solo con su nombre y teléfono." })}</p>
        </Link>
        <Link to="/volunteer" className="border-t border-ink pt-5">
          <h2 className="font-serif text-3xl">{tx({ en: "Have time", es: "Tiene tiempo" })}</h2>
          <p className="mt-3 text-muted">{tx({ en: "Clinical and non-clinical forms are separate.", es: "Los formularios clínico y no clínico van aparte." })}</p>
        </Link>
        <Link to="/give" className="border-t border-ink pt-5">
          <h2 className="font-serif text-3xl">{tx({ en: "Can give", es: "Puede dar" })}</h2>
          <p className="mt-3 text-muted">{tx({ en: "One-time or monthly, on PayPal.", es: "Una vez o mensual, en PayPal." })}</p>
        </Link>
        <div className="md:col-span-3">
          <RequestButton />
        </div>
      </Container>
    </>
  );
}
