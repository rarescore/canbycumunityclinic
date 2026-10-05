import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Public directories for coverage, food, housing, crisis support, and health information. Canby Community Clinic does not run these sites.",
      },
    ],
  }),
  component: ResourcesPage,
});

const faqs: { q: L; a: L }[] = [
  {
    q: { en: "Do you take insurance?", es: "¿Aceptan seguro?" },
    a: {
      en: "Call with the exact plan name. This page does not list accepted plans. Participation changes.",
      es: "Llame con el nombre exacto del plan. Esta página no lista los planes aceptados. La participación cambia.",
      hy: "Զանգեք պլանի ճիշտ անունով։ Այս էջը ընդունված պլաններ չի թվարկում։ Մասնակցությունը փոխվում է։",
    },
  },
  {
    q: { en: "I don’t have insurance. Can I still call?", es: "No tengo seguro. ¿Puedo llamar?" },
    a: {
      en: "Yes. Tell us you do not have a card and what kind of visit you need.",
      es: "Sí. Díganos que no tiene tarjeta y qué tipo de visita necesita.",
      hy: "Այո։ Ասեք, որ քարտ չունեք, և ինչ այց է պետք։",
    },
  },
  {
    q: { en: "Can I email my diagnosis or lab results?", es: "¿Puedo enviar mi diagnóstico o mis resultados?" },
    a: {
      en: "No. Ordinary email and this website are not a secure way to send medical information. Call and ask for an approved method if records are needed.",
      es: "No. El correo ordinario y este sitio no son una forma segura de enviar información médica. Llame y pida un método aprobado si hacen falta documentos.",
      hy: "Ոչ։ Սովորական էլփոստը և այս կայքը բժշկական տեղեկություն ուղարկելու ապահով ձև չեն։ Եթե թղթեր են պետք, զանգեք և հարցրեք հաստատված եղանակ։",
    },
  },
  {
    q: { en: "When should I not wait for this clinic?", es: "¿Cuándo no debo esperar a esta clínica?" },
    a: {
      en: "Call 911 for chest pain, trouble breathing, signs of a stroke, severe bleeding, fainting, confusion, or a serious injury.",
      es: "Llame al 911 por dolor de pecho, dificultad para respirar, signos de un derrame, sangrado grave, desmayo, confusión o una lesión seria.",
      hy: "Կրծքավանդակի ցավի, շնչառության դժվարության, կաթվածի նշանների, ուժեղ արյունահոսության, ուշագնացության, շփոթության կամ լուրջ վնասվածքի դեպքում զանգեք 911։",
    },
  },
];

const links: { href: string; group: L; title: L; body: L }[] = [
  {
    href: "https://www.coveredca.com/",
    group: { en: "Coverage", es: "Cobertura", hy: "Ծածկույթ" },
    title: { en: "Covered California", es: "Covered California" },
    body: {
      en: "The state’s official marketplace for health coverage, including information about Medi-Cal.",
      es: "El mercado oficial del estado para cobertura de salud, incluida información sobre Medi-Cal.",
      hy: "Նահանգի պաշտոնական շուկան առողջության ծածկույթի համար, ներառյալ Medi-Cal-ի մասին տեղեկությունը։",
    },
  },
  {
    href: "https://www.dhcs.ca.gov/",
    group: { en: "Coverage", es: "Cobertura", hy: "Ծածկույթ" },
    title: { en: "California DHCS", es: "DHCS de California" },
    body: {
      en: "The department that oversees Medi-Cal.",
      es: "El departamento que supervisa Medi-Cal.",
      hy: "Բաժինը, որ վերահսկում է Medi-Cal-ը։",
    },
  },
  {
    href: "https://211la.org/",
    group: { en: "Food and housing", es: "Comida y vivienda", hy: "Սնունդ և բնակարան" },
    title: { en: "211 LA", es: "211 LA" },
    body: {
      en: "A public directory for food, housing, health, and other local help.",
      es: "Un directorio público de comida, vivienda, salud y otra ayuda local.",
      hy: "Հանրային ցուցակ սննդի, բնակարանի, առողջության և այլ տեղական օգնության համար։",
    },
  },
  {
    href: "https://findahealthcenter.hrsa.gov/",
    group: { en: "Health centers", es: "Centros de salud", hy: "Առողջության կենտրոններ" },
    title: { en: "Find a health center", es: "Encontrar un centro de salud" },
    body: {
      en: "HRSA’s locator for health centers, if you need a different site or service.",
      es: "El localizador de HRSA de centros de salud, si necesita otro lugar o servicio.",
      hy: "HRSA-ի որոնիչը, եթե այլ վայր կամ ծառայություն է պետք։",
    },
  },
  {
    href: "https://988lifeline.org/",
    group: { en: "Crisis support", es: "Apoyo en crisis", hy: "Ճգնաժամային աջակցություն" },
    title: { en: "988 Suicide & Crisis Lifeline", es: "Línea 988 de crisis" },
    body: {
      en: "Call or text 988 for a mental health crisis. For a medical emergency, call 911.",
      es: "Llame o envíe un mensaje al 988 en una crisis de salud mental. En una emergencia médica, llame al 911.",
      hy: "Հոգեկան առողջության ճգնաժամի դեպքում զանգեք կամ գրեք 988։ Բժշկական շտապ օգնության համար զանգեք 911։",
    },
  },
  {
    href: "https://medlineplus.gov/talkingwithyourdoctor.html",
    group: { en: "Health information", es: "Información de salud", hy: "Առողջության տեղեկություն" },
    title: { en: "Talking with your clinician", es: "Hablar con su clínico" },
    body: {
      en: "MedlinePlus, from the National Library of Medicine, on making a visit useful.",
      es: "MedlinePlus, de la Biblioteca Nacional de Medicina, sobre cómo aprovechar una visita.",
      hy: "MedlinePlus, Ազգային բժշկական գրադարանից, այցը օգտակար դարձնելու մասին։",
    },
  },
];

function ResourcesPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Resources", es: "Recursos" })}
        title={tx({
          en: "Help beyond the clinic.",
          es: "Ayuda más allá de la clínica.",
          hy: "Օգնություն կլինիկայից դուրս։",
        })}
        lede={tx({
          en: "Coverage, food, housing, crisis support, and health information from public agencies.",
          es: "Cobertura, comida, vivienda, apoyo en crisis e información de salud de agencias públicas.",
          hy: "Ծածկույթ, սնունդ, բնակարան, ճգնաժամային աջակցություն և առողջության տեղեկություն հանրային գործակալություններից։",
        })}
      />
      <Container className="py-12 md:py-16">
        <h2 className="font-serif text-3xl">
          {tx({ en: "Public directories", es: "Directorios públicos", hy: "Հանրային ցուցակներ" })}
        </h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {links.map((item) => (
            <li key={item.href} className="grid gap-2 py-4 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">{tx(item.group)}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue"
                >
                  {tx(item.title)}
                  <span className="sr-only">
                    {tx({ en: ", opens in a new tab", es: ", se abre en una pestaña nueva" })}
                  </span>
                </a>
              </div>
              <p className="text-sm leading-relaxed text-muted md:col-span-8">{tx(item.body)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {tx({
            en: "This clinic does not run these sites.",
            es: "Esta clínica no opera estos sitios.",
            hy: "Այս կլինիկան այս կայքերը չի վարում։",
          })}
        </p>
      </Container>
      <Container className="py-12 md:py-16">
        <h2 className="font-serif text-3xl">{tx({ en: "A few answers", es: "Algunas respuestas", hy: "Մի քանի պատասխան" })}</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {faqs.map((item, index) => (
            <Faq key={item.q.en} id={`faq-${index}`} q={tx(item.q)} a={tx(item.a)} />
          ))}
        </div>
      </Container>
      <FinalCta />
    </>
  );
}

function Faq({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium text-ink">{q}</span>
        <span className="font-serif text-xl text-green" aria-hidden>
          {open ? "–" : "+"}
        </span>
      </button>
      <p id={id} hidden={!open} className="pb-5 leading-relaxed text-muted">
        {a}
      </p>
    </div>
  );
}
