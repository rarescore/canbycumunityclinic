import { useTx } from "@/components/site/i18n";

const links = [
  {
    href: "https://benefitscal.com/",
    title: { en: "BenefitsCal", es: "BenefitsCal", hy: "BenefitsCal" },
    line: {
      en: "Apply for Medi-Cal, CalFresh, and CalWORKs.",
      es: "Solicite Medi-Cal, CalFresh y CalWORKs.",
      hy: "Դիմեք Medi-Cal, CalFresh և CalWORKs։",
    },
  },
  {
    href: "https://www.coveredca.com/",
    title: { en: "Covered California", es: "Covered California", hy: "Covered California" },
    line: {
      en: "The state site for health coverage.",
      es: "El sitio del estado para cobertura de salud.",
      hy: "Նահանգի կայքը առողջապահական ծածկույթի համար։",
    },
  },
  {
    href: "https://dpss.lacounty.gov/",
    title: { en: "LA County DPSS", es: "DPSS del Condado de LA", hy: "LA County DPSS" },
    line: {
      en: "County social services, including food and cash aid.",
      es: "Servicios sociales del condado, incluida ayuda de comida y efectivo.",
      hy: "Շրջանի սոցիալական ծառայություններ, ներառյալ սնունդ և դրամական օգնություն։",
    },
  },
  {
    href: "https://211la.org/",
    title: { en: "211 LA", es: "211 LA", hy: "211 LA" },
    line: {
      en: "Food pantries, rent help, and other local programs.",
      es: "Despensas, ayuda con la renta y otros programas locales.",
      hy: "Սննդի կետեր, վարձի օգնություն և այլ տեղական ծրագրեր։",
    },
  },
  {
    href: "https://www.lahsa.org/get-help",
    title: { en: "LAHSA", es: "LAHSA", hy: "LAHSA" },
    line: {
      en: "Homeless services and housing help in Los Angeles County.",
      es: "Servicios para personas sin hogar y ayuda de vivienda en el Condado de Los Ángeles.",
      hy: "Անօթևանների ծառայություններ և բնակարանային օգնություն Լոս Անջելեսի շրջանում։",
    },
  },
  {
    href: "https://myfamily.wic.ca.gov/",
    title: { en: "California WIC", es: "WIC de California", hy: "California WIC" },
    line: {
      en: "Apply for WIC if you are pregnant or have a child under 5.",
      es: "Solicite WIC si está embarazada o tiene un hijo menor de 5 años.",
      hy: "Դիմեք WIC, եթե հղի եք կամ ունեք 5 տարեկանից փոքր երեխա։",
    },
  },
  {
    href: "https://findahealthcenter.hrsa.gov/",
    title: { en: "Find a health center", es: "Encontrar un centro de salud", hy: "Գտնել առողջության կենտրոն" },
    line: {
      en: "Federal list of health centers, if you need a different clinic.",
      es: "Lista federal de centros de salud, si necesita otra clínica.",
      hy: "Առողջության կենտրոնների դաշնային ցանկ, եթե այլ կլինիկա է պետք։",
    },
  },
  {
    href: "https://988lifeline.org/",
    title: { en: "988", es: "988", hy: "988" },
    line: {
      en: "Call or text 988 for a mental health crisis. For a medical emergency, call 911.",
      es: "Llame o envíe un mensaje al 988 en una crisis de salud mental. En una emergencia médica, llame al 911.",
      hy: "Զանգեք կամ գրեք 988 հոգեկան առողջության ճգնաժամի դեպքում։ Բժշկական շտապ օգնության համար զանգեք 911։",
    },
  },
];

export function ResourceHub() {
  const { tx } = useTx();
  return (
    <section className="resource-hub" aria-label={tx({ en: "Community resources", es: "Recursos comunitarios", hy: "Համայնքային ռեսուրսներ" })}>
      <div className="resource-hub-intro">
        <p className="eyebrow">{tx({ en: "Outside this clinic", es: "Fuera de esta clínica", hy: "Այս կլինիկայից դուրս" })}</p>
        <h2>{tx({ en: "Places to apply.", es: "Dónde solicitar.", hy: "Որտեղ դիմել։" })}</h2>
        <p>
          {tx({
            en: "Government and nonprofit sites for coverage, food, and housing. Canby does not run these programs.",
            es: "Sitios del gobierno y de organizaciones para cobertura, comida y vivienda. Canby no administra estos programas.",
            hy: "Կառավարության և կազմակերպությունների կայքեր ծածկույթի, սննդի և բնակարանի համար։ Canby-ն այս ծրագրերը չի վարում։",
          })}
        </p>
        <img className="resource-hub-photo" src="/media/clinic/paperwork-phone.png" alt={tx({ en: "Papers and a phone on a dining table.", es: "Papeles y un teléfono en la mesa del comedor.", hy: "Թղթեր և հեռախոս ճաշասեղանին։" })} loading="lazy" decoding="async" />
      </div>
      <ul>
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <strong>{tx(item.title)}</strong>
              <span>{tx(item.line)}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
