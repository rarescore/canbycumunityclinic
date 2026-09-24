import { createFileRoute } from "@tanstack/react-router";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/care-team")({
  head: () => ({
    meta: [
      { title: "Care team | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic is fully staffed: primary care physicians, specialty physicians, nurse practitioners, physician assistants, nurses, medical assistants, receptionists, and the office staff a clinic needs.",
      },
    ],
  }),
  component: CareTeamPage,
});

const clinical: { role: L; does: L }[] = [
  {
    role: { en: "Primary care physicians", es: "Médicos de atención primaria", hy: "Առաջնային խնամքի բժիշկներ" },
    does: { en: "The doctors for a checkup, an ongoing condition, and the visit when you are not sure where to start.", es: "Los médicos para una revisión, una condición continua y la visita cuando no sabe por dónde empezar.", hy: "Բժիշկները ստուգման, շարունակվող վիճակի և այն այցի համար, երբ չգիտեք որտեղից սկսել։" },
  },
  {
    role: { en: "Specialty physicians", es: "Médicos especialistas", hy: "Մասնագետ բժիշկներ" },
    does: { en: "Specialists on staff for care that needs more than a general visit.", es: "Especialistas en el personal para la atención que necesita más que una visita general.", hy: "Մասնագետներ անձնակազմում, երբ ընդհանուր այցից ավելին է պետք։" },
  },
  {
    role: { en: "Nurse practitioners", es: "Enfermeras practicantes", hy: "Բուժքույր-պրակտիկներ" },
    does: { en: "NPs who see patients, order what is needed, and manage the plan.", es: "NPs que atienden pacientes, ordenan lo necesario y manejan el plan.", hy: "NP-ներ, որ ընդունում են պացիենտներ, նշանակում են ինչ պետք է, և վարում են ծրագիրը։" },
  },
  {
    role: { en: "Physician assistants", es: "Asistentes médicos", hy: "Բժշկի օգնականներ" },
    does: { en: "PAs who see patients and carry the visit with the rest of the clinical team.", es: "PAs que atienden pacientes y llevan la visita con el resto del equipo clínico.", hy: "PA-ներ, որ ընդունում են պացիենտներ և այցը տանում են կլինիկական թիմի հետ։" },
  },
  {
    role: { en: "Registered nurses", es: "Enfermeras registradas", hy: "Գրանցված բուժքույրեր" },
    does: { en: "Nursing for the visit: medicines, instructions, and what happens next.", es: "Enfermería de la visita: medicamentos, instrucciones y qué sigue.", hy: "Այցի բուժքույրությունը՝ դեղեր, ցուցումներ և ինչ է հաջորդը։" },
  },
  {
    role: { en: "Medical assistants", es: "Asistentes médicos de consultorio", hy: "Բժշկական օգնականներ" },
    does: { en: "Rooming, measurements, and the hands-on support around the clinician.", es: "Preparación del consultorio, medidas y el apoyo práctico junto al clínico.", hy: "Սենյակի պատրաստում, չափումներ և գործնական օգնություն բուժաշխատողի կողքին։" },
  },
];

const office: { role: L; does: L }[] = [
  {
    role: { en: "Receptionists", es: "Recepcionistas", hy: "Ընդունարան" },
    does: { en: "The front desk. Check-in, the phone, and the person you see first.", es: "La recepción. El registro, el teléfono y la persona que ve primero.", hy: "Ընդունարանը։ Գրանցումը, հեռախոսը, և առաջին մարդը, որին տեսնում եք։" },
  },
  {
    role: { en: "Scheduling", es: "Citas", hy: "Ժամադրություն" },
    does: { en: "Books the time, moves it, and tells you what is actually open.", es: "Agenda la hora, la mueve y le dice qué está realmente abierto.", hy: "Գրանցում է ժամը, տեղափոխում է, և ասում է ինչն է իրոք բաց։" },
  },
  {
    role: { en: "Registration", es: "Registro", hy: "Գրանցում" },
    does: { en: "The paperwork when you arrive, so the visit can start.", es: "Los papeles cuando llega, para que la visita pueda empezar.", hy: "Թղթերը, երբ հասնում եք, որ այցը սկսվի։" },
  },
  {
    role: { en: "Coverage", es: "Cobertura", hy: "Ծածկույթ" },
    does: { en: "Insurance questions, handled by the office.", es: "Preguntas de seguro, a cargo de la oficina.", hy: "Ապահովագրության հարցերը՝ գրասենյակի կողմից։" },
  },
  {
    role: { en: "Medical records", es: "Expedientes", hy: "Բժշկական գրառումներ" },
    does: { en: "The chart stays with the clinic, not in a website form.", es: "El expediente se queda en la clínica, no en un formulario del sitio.", hy: "Քարտը մնում է կլինիկայում, ոչ կայքի ձևում։" },
  },
  {
    role: { en: "Clinic management", es: "Dirección de la clínica", hy: "Կլինիկայի ղեկավարություն" },
    does: { en: "The people who keep the weekday schedule and the building running.", es: "Quienes mantienen el horario de semana y el funcionamiento del local.", hy: "Մարդիկ, որ աշխատանքային ժամանակացույցը և շենքը պահում են աշխատանքի մեջ։" },
  },
  {
    role: { en: "Interpreters", es: "Intérpretes", hy: "Թարգմանիչներ" },
    does: { en: "English and Spanish in the clinic. Ask when you book if you need an interpreter.", es: "Inglés y español en la clínica. Pida un intérprete al reservar si lo necesita.", hy: "Անգլերեն և իսպաներեն կլինիկայում։ Խնդրեք թարգմանիչ, երբ գրանցում եք, եթե պետք է։" },
  },
];

function RoleList({ title, items }: { title: string; items: { role: L; does: L }[] }) {
  const { tx } = useTx();
  return (
    <section>
      <h2 className="font-serif text-3xl">{title}</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.role.en} className="grid gap-1 py-4 md:grid-cols-12 md:gap-6">
            <h3 className="font-medium md:col-span-5">{tx(item.role)}</h3>
            <p className="text-sm leading-relaxed text-muted md:col-span-7">{tx(item.does)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CareTeamPage() {
  const { tx } = useTx();
  return (
    <>
      <header className="border-b border-line bg-cream">
        <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              {tx({ en: "Care team", es: "Equipo", hy: "Խնամքի թիմ" })}
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-[-0.02em] md:text-6xl">
              {tx({ en: "A full clinic staff.", es: "Un personal completo.", hy: "Ամբողջական կլինիկայի անձնակազմ։" })}
            </h1>
          </div>
          <p className="self-end text-lg leading-relaxed text-muted md:col-span-4">
            {tx({
              en: "Primary care doctors, specialty doctors, nurse practitioners, physician assistants, nurses, and the front desk. The people a clinic needs in order to run.",
              es: "Médicos de primaria, especialistas, enfermeras practicantes, asistentes médicos, enfermería y recepción. La gente que una clínica necesita para funcionar.",
              hy: "Առաջնային բժիշկներ, մասնագետ բժիշկներ, բուժքույր-պրակտիկներ, բժշկի օգնականներ, բուժքույրեր և ընդունարան։ Մարդիկ, որ կլինիկային պետք են աշխատելու համար։",
            })}
          </p>
        </Container>
      </header>
      <Container className="grid gap-16 py-14 md:py-20">
        <RoleList title={tx({ en: "Who sees you", es: "Quién lo atiende", hy: "Ով է ձեզ ընդունում" })} items={clinical} />
        <RoleList title={tx({ en: "Front desk and office", es: "Recepción y oficina", hy: "Ընդունարան և գրասենյակ" })} items={office} />
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {tx({
            en: "You meet the person for your visit when the appointment is confirmed. This page names the roles, not a made-up biography.",
            es: "Conoce a la persona de su visita cuando la cita está confirmada. Esta página nombra los roles, no una biografía inventada.",
            hy: "Այցի մարդուն հանդիպում եք, երբ ժամադրությունը հաստատված է։ Այս էջը անվանում է դերերը, ոչ հորինված կենսագրություն։",
          })}
        </p>
      </Container>
      <FinalCta />
    </>
  );
}
