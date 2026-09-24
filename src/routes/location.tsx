import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, HoursTable, PageIntro, RequestButton } from "@/components/site/ui";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic is at 7601 Canby Ave #6B, Reseda, CA 91335. Weekdays 9–5. Call for parking, the entrance, and access.",
      },
    ],
  }),
  component: LocationPage,
});

export function LocationPage() {
  const { tx } = useTx();
  const onContact = useRouterState({ select: (state) => state.location.pathname === "/contact" });
  return (
    <>
      {onContact ? (
        <div className="bg-ink text-cream">
          <Container className="py-3 text-center text-sm leading-relaxed">
            {tx({
              en: "Medical emergency? Call 911. This is not an emergency department, and this website is not monitored for emergencies.",
              es: "¿Emergencia médica? Llame al 911. Esto no es una sala de emergencias y este sitio no se vigila para emergencias.",
              hy: "Բժշկական շտապ օգնությո՞ւն։ Զանգեք 911։ Սա շտապ օգնության բաժանմունք չէ, և այս կայքը շտապ դեպքերի համար չի վերահսկվում։",
            })}
          </Container>
        </div>
      ) : null}
      <PageIntro
        kicker={tx({ en: "Location", es: "Ubicación" })}
        title={tx({ en: "7601 Canby Ave #6B, Reseda.", es: "7601 Canby Ave #6B, Reseda." })}
        lede={tx({
          en: "Call before you travel if the time matters. Hours can change for a holiday. We will tell you how to park, which entrance to use, and what to do if you need step-free access.",
          es: "Llame antes de venir si la hora importa. El horario puede cambiar por un feriado. Le diremos cómo estacionar, qué entrada usar y qué hacer si necesita acceso sin escalones. No publicamos la foto de un edificio que no es el nuestro.",
        })}
      />
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <img src="/media/pages/street.jpg" alt={tx({ en: "A neighborhood street in the west Valley.", es: "Una calle del oeste del Valle." })} className="mb-6 aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
          <p className="font-serif text-3xl">
            {clinic.street}
            <span className="mt-1 block text-xl text-muted">{clinic.city}</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center bg-blue px-5 font-medium text-cream">
              {tx({ en: "Directions", es: "Cómo llegar" })}
            </a>
            <CallButton />
          </div>
          <div className="mt-8">
            <HoursTable />
          </div>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted">
            <li>{tx({ en: "English and Spanish.", es: "Inglés y español." })}</li>
            <li>{tx({ en: "Not a walk-in emergency department.", es: "No es una sala de emergencias sin cita." })}</li>
            <li>
              <Link to="/new-patients" className="font-medium text-blue">
                {tx({ en: "First time? See the visit in order.", es: "¿Primera vez? Vea la visita en orden." })}
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <RequestButton variant="secondary" />
          </div>
        </div>
        <iframe
          title={tx({ en: "Map of the clinic", es: "Mapa de la clínica" })}
          src={clinic.mapsEmbed}
          className="min-h-80 w-full border border-line"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </>
  );
}
