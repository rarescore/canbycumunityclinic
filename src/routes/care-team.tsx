import { createFileRoute } from "@tanstack/react-router";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/care-team")({
  head: () => ({
    meta: [
      { title: "Who may care for you | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Clinicians, nurses, medical assistants, the front desk, and scheduling at Canby Community Clinic in Reseda.",
      },
    ],
  }),
  component: CareTeamPage,
});

const clinical: { role: L; does: L }[] = [
  {
    role: { en: "Clinicians", es: "Clínicos", hy: "Բուժաշխատողներ" },
    does: { en: "The people who see you for a checkup, an ongoing condition, or a new concern.", es: "Quienes lo atienden en una revisión, una condición continua o un problema nuevo.", hy: "Մարդիկ, որ ընդունում են ձեզ ստուգման, շարունակական վիճակի կամ նոր հարցի համար։" },
  },
  {
    role: { en: "Nurses", es: "Enfermería", hy: "Բուժքույրեր" },
    does: { en: "Medicines, instructions, and what happens next in the visit.", es: "Medicamentos, instrucciones y qué sigue en la visita.", hy: "Դեղեր, ցուցումներ և այցի հաջորդ քայլը։" },
  },
  {
    role: { en: "Medical assistants", es: "Asistentes de consultorio", hy: "Բժշկական օգնականներ" },
    does: { en: "Rooming, measurements, and support around the clinician.", es: "Preparación del consultorio, medidas y apoyo junto al clínico.", hy: "Սենյակի պատրաստում, չափումներ և օգնություն բուժաշխատողի կողքին։" },
  },
];

const office: { role: L; does: L }[] = [
  {
    role: { en: "Front desk", es: "Recepción", hy: "Ընդունարան" },
    does: { en: "Check-in, the phone, and the person you see first.", es: "El registro, el teléfono y la persona que ve primero.", hy: "Գրանցումը, հեռախոսը և առաջին մարդը, որին տեսնում եք։" },
  },
  {
    role: { en: "Scheduling", es: "Citas", hy: "Ժամադրություն" },
    does: { en: "Sets a reserved time after the clinic confirms it.", es: "Fija una hora cuando la clínica la confirma.", hy: "Ժամ է նշում, երբ կլինիկան հաստատում է։" },
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
              {tx({ en: "At a visit", es: "En una visita", hy: "Այցի ժամանակ" })}
            </p>
            <h1 className="mt-4 font-serif text-5xl tracking-[-0.02em] md:text-6xl">
              {tx({ en: "Who may care for you.", es: "Quién puede atenderle.", hy: "Ով կարող է ընդունել ձեզ։" })}
            </h1>
          </div>
          <p className="self-end text-lg leading-relaxed text-muted md:col-span-4">
            {tx({
              en: "Clinicians, nurses, medical assistants, and the front desk.",
              es: "Clínicos, enfermería, asistentes de consultorio y recepción.",
              hy: "Բուժաշխատողներ, բուժքույրեր, բժշկական օգնականներ և ընդունարան։",
            })}
          </p>
        </Container>
      </header>
      <Container className="grid gap-16 py-14 md:py-20">
        <RoleList title={tx({ en: "Who sees you", es: "Quién lo atiende", hy: "Ով է ձեզ ընդունում" })} items={clinical} />
        <RoleList title={tx({ en: "Front desk and office", es: "Recepción y oficina", hy: "Ընդունարան և գրասենյակ" })} items={office} />
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {tx({
            en: "You meet the person for your visit when you come in.",
            es: "Conoce a la persona de su visita cuando llega.",
            hy: "Այցի մարդուն հանդիպում եք, երբ գալիս եք։",
          })}
        </p>
      </Container>
      <FinalCta />
    </>
  );
}
