import { createFileRoute, Link } from "@tanstack/react-router";
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
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Location", es: "Ubicación" })}
        title={tx({ en: "7601 Canby Ave #6B, Reseda.", es: "7601 Canby Ave #6B, Reseda." })}
        lede={tx({
          en: "Weekdays, 9 AM to 5 PM. Hours can change on a holiday. Call for parking, the entrance, and step-free access.",
          es: "De lunes a viernes, de 9 AM a 5 PM. El horario puede cambiar en un feriado. Llame para el estacionamiento, la entrada y el acceso sin escalones.",
          hy: "Երկուշաբթիից ուրբաթ, 9:00–17:00։ Տոնին ժամերը կարող են փոխվել։ Կայանելու, մուտքի և առանց աստիճանի մուտքի համար զանգեք։",
        })}
      />
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <img src="/media/clinic/valley-street.png" alt={tx({ en: "A residential street in the west Valley. Not the clinic building.", es: "Una calle residencial del oeste del Valle. No es el edificio de la clínica.", hy: "Բնակելի փողոց արևմտյան Valley-ում։ Կլինիկայի շենքը չէ։" })} className="mb-6 aspect-[16/10] w-full bg-[#ebe6de] object-contain" />
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
            <li>
              <Link to="/visit" className="font-medium text-blue">
                {tx({ en: "What to expect on your first visit.", es: "Qué esperar en su primera visita.", hy: "Ինչ սպասել առաջին այցին։" })}
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
