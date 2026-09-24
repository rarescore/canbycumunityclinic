import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, FinalCta, PageIntro, Photo } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic, formerly Pura Vida Community Clinic, is a community clinic in Reseda. Public registration, hours, and how care is delivered — without unverified claims.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { tx } = useTx();
  const records: { title: L; body: L; href?: string; link: L }[] = [
    {
      title: { en: "NPI registry", es: "Registro NPI" },
      body: {
        en: `National Provider Identifier ${clinic.npi}. The organization is registered as a clinic/center. The record lists ${clinic.street}, Reseda.`,
        es: `Identificador nacional de proveedor ${clinic.npi}. La organización está registrada como clínica. El registro indica ${clinic.street}, Reseda.`,
      },
      href: clinic.npiUrl,
      link: { en: "Look up the NPI", es: "Consultar el NPI" },
    },
    {
      title: { en: "California HCAI", es: "HCAI de California" },
      body: {
        en: `The state facility finder lists ${clinic.former} at 7601 Canby Ave, Reseda, as an open community clinic. Facility ID ${clinic.hcaiId}. The clinic now uses the name Canby Community Clinic.`,
        es: `El buscador estatal de centros lista a ${clinic.former} en 7601 Canby Ave, Reseda, como clínica comunitaria abierta. ID de centro ${clinic.hcaiId}. La clínica ahora usa el nombre Canby Community Clinic.`,
      },
      href: clinic.hcaiUrl,
      link: { en: "View the HCAI listing", es: "Ver el listado de HCAI" },
    },
    {
      title: { en: "Nonprofit filings", es: "Declaraciones sin fines de lucro" },
      body: {
        en: `Canby Community Clinic Inc., EIN ${clinic.ein}, is a 501(c)(3) formed in 2022.`,
        es: `Canby Community Clinic Inc., EIN ${clinic.ein}, es una 501(c)(3) formada en 2022.`,
      },
      href: clinic.nonprofitUrl,
      link: { en: "See public filings", es: "Ver declaraciones públicas" },
    },
  ];

  return (
    <>
      <PageIntro
        kicker={tx({ en: "About the clinic", es: "Sobre la clínica" })}
        title={tx({
          en: "Formerly Pura Vida. Still a clinic for people who have had trouble getting in.",
          es: "Antes Pura Vida. Sigue siendo una clínica para quien ha tenido dificultad para entrar.",
        })}
        lede={tx({
          en: "Canby Community Clinic is fully staffed: primary care physicians, specialty physicians, nurse practitioners, physician assistants, nurses, medical assistants, receptionists, and the office staff a clinic needs to run.",
          es: "Canby Community Clinic tiene el personal completo: médicos de primaria, especialistas, enfermeras practicantes, asistentes médicos, enfermería, asistentes de consultorio, recepción y la oficina que una clínica necesita para funcionar.",
        })}
      />
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="grid grid-cols-5 gap-3">
          <Photo
            src="/media/pages/meal.jpg"
            alt={tx({
              en: "A full plate of food on a table.",
              es: "Un plato completo de comida sobre una mesa.",
            })}
            className="col-span-5 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
        </div>
        <div className="space-y-5 leading-relaxed text-muted">
          <h2 className="font-serif text-3xl text-ink">
            {tx({ en: "Why the clinic exists", es: "Por qué existe la clínica" })}
          </h2>
          <p>
            {tx({
              en: "Insurance status, language, transportation, and the difficulty of finding a timely appointment keep people from basic care. The clinic tries to lower those barriers with scheduled visits, volunteer help, and community outreach.",
              es: "El seguro, el idioma, el transporte y la dificultad de encontrar una cita a tiempo alejan a la gente de la atención básica. La clínica intenta bajar esas barreras con visitas programadas, ayuda voluntaria y alcance comunitario.",
            })}
          </p>
          <p>
            {tx({
              en: "Care is a mix of scheduled patient visits and the people who make those visits possible. What can be offered depends on staffing and resources. That is why we ask you to call before you come.",
              es: "La atención combina visitas programadas y las personas que las hacen posibles. Lo que se puede ofrecer depende del personal y los recursos. Por eso pedimos que llame antes de venir.",
            })}
          </p>
          <p>
            {tx({
              en: "We welcome patients without regard to race, color, national origin, age, disability, sex, sexual orientation, gender identity, language, or insurance status. If you need help with access or interpretation, say so when you call. We will tell you plainly what we can arrange.",
              es: "Recibimos pacientes sin distinción de raza, color, origen nacional, edad, discapacidad, sexo, orientación sexual, identidad de género, idioma o situación de seguro. Si necesita ayuda con el acceso o la interpretación, dígalo al llamar. Le diremos con claridad qué podemos organizar.",
            })}
          </p>
        </div>
      </Container>

      <section className="bg-cream">
        <Container className="py-14 md:py-20">
          <h2 className="font-serif text-4xl">
            {tx({ en: "Public records", es: "Registros públicos" })}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {tx({
              en: "We do not publish clinician names, awards, patient stories, or insurance lists on this website unless they are verified and authorized. The items below are public registrations you can open yourself.",
              es: "No publicamos nombres de clínicos, premios, historias de pacientes ni listas de seguros en este sitio salvo que estén verificados y autorizados. Lo de abajo son registros públicos que usted puede abrir.",
            })}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {records.map((record) => (
              <article key={record.title.en} className="flex flex-col border border-line bg-paper p-5">
                <h3 className="font-serif text-2xl">{tx(record.title)}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{tx(record.body)}</p>
                {record.href ? (
                  <a
                    href={record.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-blue"
                  >
                    {tx(record.link)}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
