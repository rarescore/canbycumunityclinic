import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CommunityVolunteerForm, MedicalVolunteerForm } from "@/components/site/forms";
import { useTx, type L } from "@/components/site/i18n";
import { cn } from "@/lib/cn";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Two volunteer signups for Canby Community Clinic: licensed medical roles, and non-medical roles such as registration, phones, interpretation, and outreach.",
      },
    ],
  }),
  component: VolunteerPage,
});

const medicalPoints: L[] = [
  {
    en: "Physicians, nurse practitioners, physician assistants, pharmacists, nurses, and other licensed roles.",
    es: "Médicos, enfermeras practicantes, asistentes médicos, farmacéuticos, enfermería y otros roles con licencia.",
  },
  {
    en: "Current licensure is required. The clinic verifies credentials before anyone sees patients.",
    es: "Se exige licencia vigente. La clínica verifica credenciales antes de que alguien atienda pacientes.",
  },
  {
    en: "Work stays inside the clinic’s approved scope and supervision.",
    es: "El trabajo se queda dentro del alcance y la supervisión aprobados de la clínica.",
  },
];

const communityPoints: L[] = [
  {
    en: "Registration, phones, scheduling, interpretation, outreach, and office support.",
    es: "Registro, teléfonos, citas, interpretación, alcance y apoyo de oficina.",
  },
  {
    en: "This signup is for people who do not hold a clinical license.",
    es: "Este registro es para personas que no tienen una licencia clínica.",
    hy: "Այս գրանցումը այն մարդկանց համար է, ովքեր կլինիկական լիցենզիա չունեն։",
  },
  {
    en: "You will be told if the role is needed, and what training comes first.",
    es: "Le diremos si el rol hace falta y qué capacitación va primero.",
  },
];

function VolunteerPage() {
  const { tx } = useTx();
  const [track, setTrack] = useState<"medical" | "community">("medical");

  return (
    <>
      <PageIntro
        kicker={tx({ en: "Volunteer", es: "Voluntariado" })}
        title={tx({
          en: "Help at the desk, or in the exam room.",
          es: "Ayude en recepción, o en el consultorio.",
          hy: "Օգնեք ընդունարանում, կամ զննման սենյակում։",
        })}
        lede={tx({
          en: "Licensed clinicians, and people who can help with registration, phones, or outreach, use different forms. Sending a form does not reserve a shift. The office calls if a role is open and says what screening and training come first.",
          es: "Los clínicos con licencia, y las personas que pueden ayudar con el registro, los teléfonos o el alcance, usan formularios distintos. Enviar un formulario no reserva un turno. La oficina llama si hay un puesto y dice qué revisión y capacitación van primero.",
          hy: "Լիցենզավորված բուժաշխատողները, և նրանք, ովքեր կարող են օգնել գրանցման, հեռախոսի կամ դուրս աշխատանքի հետ, լրացնում են տարբեր ձևեր։ Ձև ուղարկելը հերթափոխ չի պահում։ Գրասենյակը զանգում է, եթե տեղ կա, և ասում է ինչ ստուգում և ուսուցում է առաջինը։",
        })}
      />
      <Container className="grid items-start gap-8 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <img src="/media/clinic/volunteers.png" alt={tx({ en: "People sorting tote bags and notebooks.", es: "Personas ordenan bolsas de tela y cuadernos.", hy: "Մարդիկ դասավորում են պայուսակներ և տետրեր։" })} className="mb-6 aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
          <div className="grid gap-3">
            <TrackButton
              active={track === "medical"}
              kicker={tx({ en: "Clinical", es: "Clínico" })}
              title={tx({ en: "Medical signup", es: "Registro médico" })}
              onClick={() => setTrack("medical")}
            />
            <TrackButton
              active={track === "community"}
              kicker={tx({ en: "Everyone else", es: "Todos los demás" })}
              title={tx({ en: "Non-medical signup", es: "Registro no médico" })}
              onClick={() => setTrack("community")}
            />
          </div>
          <ul className="mt-8 space-y-4">
            {(track === "medical" ? medicalPoints : communityPoints).map((point) => (
              <li key={point.en} className="border-l-2 border-green pl-4 text-sm leading-relaxed text-muted">
                {tx(point)}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-cream p-5 md:col-span-7 md:p-8">
          <h2 className="font-serif text-3xl">
            {track === "medical"
              ? tx({ en: "Licensed clinical interest", es: "Interés clínico con licencia" })
              : tx({ en: "Non-medical interest", es: "Interés no médico" })}
          </h2>
          <p className="mt-2 mb-6 text-sm leading-relaxed text-muted">
            {track === "medical"
              ? tx({
                  en: "Tell us the license you hold. Do not send patient information.",
                  es: "Díganos qué licencia tiene. No envíe información de pacientes.",
                })
              : tx({
                  en: "Tell us the desk, phone, language, or outreach work you can do.",
                  es: "Díganos el trabajo de registro, teléfono, idioma o alcance que puede hacer.",
                })}
          </p>
          {track === "medical" ? <MedicalVolunteerForm /> : <CommunityVolunteerForm />}
        </div>
      </Container>
    </>
  );
}

function TrackButton({
  active,
  kicker,
  title,
  onClick,
}: {
  active: boolean;
  kicker: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-24 rounded-lg px-5 py-4 text-left ring-1",
        active ? "bg-ink text-cream ring-ink" : "bg-cream text-ink ring-line",
      )}
    >
      <span className={cn("text-xs font-medium tracking-widest uppercase", active ? "text-green-soft" : "text-green")}>
        {kicker}
      </span>
      <span className="mt-2 block font-serif text-2xl">{title}</span>
    </button>
  );
}
