import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { DonateCheckout } from "@/components/site/donate-checkout";
import { useTx } from "@/components/site/i18n";
import { Container } from "@/components/site/ui";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "Donate | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Donate to Canby Community Clinic in Reseda. One-time, monthly, or yearly. Card, Apple Pay, or PayPal. 501(c)(3), EIN 87-1610266.",
      },
    ],
  }),
  component: GivePage,
});

export function GivePage({ donated = false }: { donated?: boolean }) {
  const { tx } = useTx();
  return (
    <>
      <Container className="max-w-lg py-12 md:py-16">
        <DonateCheckout donated={donated} />
      </Container>
      <section className="border-t border-line bg-cream">
        <Container className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-serif text-4xl">{tx({ en: "Gifts", es: "Donativos", hy: "Նվերներ" })}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tx({
                en: `Canby Community Clinic Inc. is a 501(c)(3). EIN ${clinic.ein}.`,
                es: `Canby Community Clinic Inc. es una 501(c)(3). EIN ${clinic.ein}.`,
              })}
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              {tx({
                en: "A gift supports the clinic. It is not set aside for one program.",
                es: "Un donativo apoya a la clínica. No queda apartado para un solo programa.",
                hy: "Նվերը աջակցում է կլինիկային։ Մեկ ծրագրի համար առանձնացված չէ։",
              })}
            </p>
          </div>
          <div className="md:col-span-12">
            <h2 className="font-serif text-2xl">{tx({ en: "A check works too", es: "Un cheque también sirve" })}</h2>
            <p className="mt-3 text-sm text-muted">{tx({ en: "Payable to Canby Community Clinic Inc.", es: "A nombre de Canby Community Clinic Inc." })}</p>
            <p className="mt-2 font-medium">
              {clinic.name}
              <br />
              {clinic.street}
              <br />
              {clinic.city}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
