import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/nondiscrimination")({
  head: () => ({
    meta: [
      { title: "Non-discrimination | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Non-discrimination notice for Canby Community Clinic, including language help, aids for disabilities, and how to file a grievance.",
      },
    ],
  }),
  component: RightsPage,
});

const sections: { title: L; body: L }[] = [
  {
    title: { en: "We do not turn people away for who they are", es: "No rechazamos a las personas por quiénes son" },
    body: {
      en: "Canby Community Clinic complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. National origin includes the language you speak. We do not exclude people or treat them less favorably for these reasons.",
      es: "Canby Community Clinic cumple las leyes federales de derechos civiles que aplican y no discrimina por raza, color, origen nacional, edad, discapacidad o sexo. El origen nacional incluye el idioma que habla. No excluimos a las personas ni las tratamos peor por estas razones.",
    },
  },
  {
    title: { en: "Language help is free", es: "La ayuda con el idioma es gratuita" },
    body: {
      en: `If English is not your language, you may ask for a qualified interpreter or for written information in another language. Visits at the clinic are in English or Spanish. Armenian on this website is a translation of the pages, not a language spoken at the front desk. For another language, call ${clinic.phoneDisplay} or ask at the desk. Language help is free.`,
      es: `Si el inglés no es su idioma, puede pedir un intérprete calificado o información escrita en otro idioma. Las visitas en la clínica son en inglés o en español. El armenio de este sitio es una traducción de las páginas, no un idioma que se hable en recepción. Para otro idioma, llame al ${clinic.phoneDisplay} o pregunte en la recepción. La ayuda con el idioma es gratuita.`,
      hy: `Եթե անգլերենը ձեր լեզուն չէ, կարող եք խնդրել որակավորված թարգմանիչ կամ գրավոր տեղեկություն այլ լեզվով։ Կլինիկայում այցերը անգլերեն կամ իսպաներեն են։ Այս կայքի հայերենը էջերի թարգմանություն է, ոչ թե ընդունարանում խոսվող լեզու։ Այլ լեզվի համար զանգեք ${clinic.phoneDisplay} կամ հարցրեք ընդունարանում։ Լեզվի օգնությունն անվճար է։`,
    },
  },
  {
    title: { en: "Help if you have a disability", es: "Ayuda si tiene una discapacidad" },
    body: {
      en: `We will provide a reasonable change to a policy, and free aids for communication, when needed for you to receive care. That can include a qualified sign language interpreter or written information in another format. Call ${clinic.phoneDisplay} before the visit and say what you need, so the clinic can arrange it.`,
      es: `Daremos un cambio razonable a una norma, y ayudas gratuitas para la comunicación, cuando las necesite para recibir atención. Eso puede incluir un intérprete calificado de lengua de señas o información escrita en otro formato. Llame al ${clinic.phoneDisplay} antes de la visita y diga qué necesita, para que la clínica pueda organizarlo.`,
    },
  },
  {
    title: { en: "How to file a grievance with the clinic", es: "Cómo presentar una queja ante la clínica" },
    body: {
      en: `If you believe we failed to provide these services, or discriminated against you, you may file a grievance. Call ${clinic.phoneDisplay}, come to ${clinic.street}, ${clinic.city} on a weekday, or write to ${clinic.emailOffice}. Say what happened, the date, and how to reach you. Do not include a diagnosis, test results, or an insurance number in the email. Someone at the clinic can help you file the grievance. We will not retaliate because you complained.`,
      es: `Si cree que no dimos estos servicios, o que discriminamos contra usted, puede presentar una queja. Llame al ${clinic.phoneDisplay}, venga a ${clinic.street}, ${clinic.city} en un día de semana, o escriba a ${clinic.emailOffice}. Diga qué pasó, la fecha y cómo localizarle. No incluya un diagnóstico, resultados ni un número de seguro en el correo. Alguien de la clínica puede ayudarle a presentar la queja. No tomaremos represalias porque se quejó.`,
    },
  },
  {
    title: { en: "You can also complain to the federal government", es: "También puede quejarse ante el gobierno federal" },
    body: {
      en: "You may file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights. Phone 1-800-368-1019 or 1-800-537-7697 (TDD). Online: https://www.hhs.gov/ocr/complaints. Mail: 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201.",
      es: "Puede presentar una queja de derechos civiles ante el Departamento de Salud y Servicios Humanos de EE. UU., Office for Civil Rights. Teléfono 1-800-368-1019 o 1-800-537-7697 (TDD). En línea: https://www.hhs.gov/ocr/complaints. Correo: 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201.",
    },
  },
  {
    title: { en: "Your medical record", es: "Su expediente médico" },
    body: {
      en: "Privacy rights for your medical record are in the Notice of Privacy Practices. That notice is separate from this page.",
      es: "Los derechos de privacidad de su expediente médico están en el Aviso de prácticas de privacidad. Ese aviso es aparte de esta página.",
    },
  },
];

function RightsPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Civil rights", es: "Derechos civiles" })}
        title={tx({ en: "Non-discrimination notice.", es: "Aviso de no discriminación." })}
        lede={tx({
          en: "Care at this clinic does not depend on race, color, national origin, age, disability, or sex. Language help is free.",
          es: "La atención en esta clínica no depende de la raza, el color, el origen nacional, la edad, la discapacidad o el sexo. La ayuda con el idioma es gratuita.",
        })}
      />
      <Container className="max-w-3xl py-12 md:py-16">
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title.en}>
              <h2 className="font-serif text-2xl">{tx(section.title)}</h2>
              <p className="mt-3 leading-relaxed text-muted">{tx(section.body)}</p>
            </section>
          ))}
          <p className="leading-relaxed">
            <Link to="/privacy-practices" className="text-blue">
              {tx({ en: "Notice of Privacy Practices", es: "Aviso de prácticas de privacidad" })}
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
