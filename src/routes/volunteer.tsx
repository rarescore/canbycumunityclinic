import { createFileRoute, Link } from "@tanstack/react-router";
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
    en: "No clinical license is asked for on this form.",
    es: "Este formulario no pide una licencia clínica.",
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
          en: "Medical and non-medical volunteers use different forms.",
          es: "Los voluntarios médicos y los no médicos usan formularios distintos.",
        })}
        lede={tx({
          en: "Medical volunteers and non-medical volunteers sign up on different forms. Sending either one does not reserve a shift. The office confirms need, screening, and training.",
          es: "Los voluntarios médicos y los no médicos se registran en formularios distintos. Enviar cualquiera de los dos no reserva un turno. La oficina confirma la necesidad, la revisión y la capacitación.",
        })}
      />
      <Container className="grid items-start gap-8 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <img src="/media/pages/folders.jpg" alt={tx({ en: "Two staff members at a front desk.", es: "Dos personas del personal en la recepción." })} className="mb-6 aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
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
      <Container className="border-t border-line py-10">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
          {tx({ en: "Not a volunteer shift", es: "No es un turno de voluntario", hy: "Կամավորի հերթափոխ չէ" })}
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl">
          {tx({
            en: "A school, church, or workplace can ask us to come to them.",
            es: "Una escuela, iglesia o trabajo puede pedirnos que vayamos.",
            hy: "Դպրոցը, եկեղեցին կամ աշխատավայրը կարող է խնդրել, որ գանք իրենց մոտ։",
          })}
        </h2>
        <Link to="/groups" className="mt-4 inline-flex min-h-12 items-center text-sm font-medium text-blue">
          {tx({ en: "Request a group visit", es: "Pedir una visita de grupo", hy: "Խնդրել խմբային այց" })}
        </Link>
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
