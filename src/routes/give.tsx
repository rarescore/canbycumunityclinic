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
          "Donate to Canby Community Clinic in Reseda. One-time or monthly. Card, Apple Pay, or PayPal. 501(c)(3), EIN 87-1610266.",
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
            <h2 className="font-serif text-4xl">{tx({ en: "Where it goes", es: "A dónde va" })}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {tx({
                en: `Canby Community Clinic Inc. is a 501(c)(3). EIN ${clinic.ein}.`,
                es: `Canby Community Clinic Inc. es una 501(c)(3). EIN ${clinic.ein}.`,
              })}
            </p>
          </div>
          <ul className="grid gap-6 md:col-span-7">
            {[
              { t: { en: "Medical supplies", es: "Insumos médicos" }, d: { en: "Gloves, tests, and the supplies used in a visit.", es: "Guantes, pruebas y los insumos que se usan en una visita." } },
              { t: { en: "Medications", es: "Medicamentos" }, d: { en: "Medicine the clinic can give or help a patient get.", es: "Medicamentos que la clínica puede dar o ayudar a conseguir." } },
              { t: { en: "Health education", es: "Educación en salud" }, d: { en: "Time to explain a result, a medicine, or a next step.", es: "Tiempo para explicar un resultado, un medicamento o un siguiente paso." } },
              { t: { en: "Keeping the clinic open", es: "Mantener la clínica abierta" }, d: { en: "Rent, phones, and the weekday schedule at suite 6B.", es: "Renta, teléfonos y el horario de lunes a viernes en la suite 6B." } },
            ].map((item) => (
              <li key={item.t.en} className="border-t border-line pt-4">
                <h3 className="font-medium">{tx(item.t)}</h3>
                <p className="mt-1 text-sm text-muted">{tx(item.d)}</p>
              </li>
            ))}
          </ul>
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
