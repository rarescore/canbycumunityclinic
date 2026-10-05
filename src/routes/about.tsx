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
          "Canby Community Clinic is a nonprofit primary-care clinic in Reseda. It was Pura Vida Community Clinic. The address is still 7601 Canby Ave #6B.",
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
        kicker={tx({ en: "About the clinic", es: "La clínica", hy: "Կլինիկայի մասին" })}
        title={tx({
          en: "A nonprofit primary-care clinic in Reseda.",
          es: "Una clínica comunitaria de atención primaria en Reseda.",
          hy: "Ոչ առևտրային առաջնային խնամքի կլինիկա Ռեսեդայում։",
        })}
        lede={tx({
          en: "The clinic was called Pura Vida Community Clinic. The name changed. The address did not.",
          es: "La clínica se llamaba Pura Vida Community Clinic. El nombre cambió. La dirección no.",
          hy: "Կլինիկան կոչվում էր Pura Vida Community Clinic։ Անունը փոխվեց։ Հասցեն՝ ոչ։",
        })}
      />
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="grid grid-cols-5 gap-3">
          <Photo
            src="/media/clinic/fruit.png"
            alt={tx({ en: "Three generations sharing fruit outdoors.", es: "Tres generaciones comparten fruta al aire libre.", hy: "Երեք սերունդ բակում միրգ են կիսում։" })}
            className="col-span-5 aspect-[4/3] w-full bg-[#ebe6de] object-contain"
          />
        </div>
        <div className="space-y-5 leading-relaxed text-muted">
          <h2 className="font-serif text-3xl text-ink">
            {tx({ en: "What stayed the same", es: "Qué siguió igual", hy: "Ինչը մնաց նույնը" })}
          </h2>
          <p>
            {tx({
              en: "Adults come here for a checkup, a screening, follow-up for diabetes, blood pressure, or cholesterol, and a lab a clinician orders. Visits are in English or Spanish. The address is 7601 Canby Ave #6B, Reseda. Hours are weekdays, 9 AM to 5 PM.",
              es: "Los adultos vienen por una revisión, una evaluación, seguimiento de diabetes, presión o colesterol, y un laboratorio que ordena un clínico. Las visitas son en inglés o en español. La dirección es 7601 Canby Ave #6B, Reseda. El horario es de lunes a viernes, de 9 AM a 5 PM.",
              hy: "Մեծահասակները գալիս են ստուգման, զննման, դիաբետի, ճնշման կամ խոլեստերինի հսկման, և բուժաշխատողի նշանակած լաբորատորիայի համար։ Այցերը անգլերեն կամ իսպաներեն են։ Հասցեն՝ 7601 Canby Ave #6B, Ռեսեդա։ Ժամերը՝ երկուշաբթիից ուրբաթ, 9:00–17:00։",
            })}
          </p>
          <p>
            {tx({
              en: `Canby Community Clinic Inc. is a 501(c)(3) formed in 2022. EIN ${clinic.ein}.`,
              es: `Canby Community Clinic Inc. es una 501(c)(3) formada en 2022. EIN ${clinic.ein}.`,
              hy: `Canby Community Clinic Inc.-ը 501(c)(3) է, ստեղծված 2022-ին։ EIN ${clinic.ein}։`,
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
              en: "Registration numbers.",
              es: "Números de registro.",
              hy: "Գրանցման համարներ։",
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
