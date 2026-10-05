import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-practices")({
  head: () => ({
    meta: [
      { title: "Privacy practices summary | Canby Community Clinic" },
      {
        name: "description",
        content:
          "A summary of privacy practices for Canby Community Clinic. The paper notice at the front desk is the official notice.",
      },
    ],
  }),
  component: NoticePage,
});

const sections: { title: L; body: L }[] = [
  {
    title: { en: "What this summary covers", es: "Qué cubre este resumen", hy: "Ինչ է ծածկում այս ամփոփումը" },
    body: {
      en: "This page is a summary of how medical information may be used and disclosed, and how you can ask for access. Please review it carefully. It applies to Canby Community Clinic, formerly Pura Vida Community Clinic, at 7601 Canby Ave #6B, Reseda. The official Notice of Privacy Practices is the paper copy at the front desk. Ask for that paper when you check in.",
      es: "Esta página es un resumen de cómo se puede usar y compartir la información médica, y cómo puede pedir acceso. Léalo con atención. Aplica a Canby Community Clinic, antes Pura Vida Community Clinic, en 7601 Canby Ave #6B, Reseda. El Aviso oficial de prácticas de privacidad es la copia en papel de la recepción. Pida ese papel al registrarse.",
      hy: "Այս էջը ամփոփում է, թե ինչպես կարող է օգտագործվել և բացվել բժշկական տեղեկությունը, և ինչպես կարող եք մուտք խնդրել։ Կարդացեք ուշադիր։ Այն վերաբերում է Canby Community Clinic-ին, նախկին Pura Vida Community Clinic, 7601 Canby Ave #6B, Ռեսեդա։ Պաշտոնական ծանուցումը ընդունարանի թղթե օրինակն է։ Այդ թուղթը խնդրեք գրանցվելիս։",
    },
  },
  {
    title: { en: "Treatment and clinic operations", es: "Tratamiento y operaciones de la clínica" },
    body: {
      en: "We may use and share your information to treat you and to run the clinic. Treatment includes sharing information with another clinician who is involved in your care. Operations include quality review, training, and appointment reminders. We may contact you about an appointment or about a treatment alternative.",
      es: "Podemos usar y compartir su información para atenderle y para operar la clínica. El tratamiento incluye compartir información con otro clínico que participa en su atención. Las operaciones incluyen revisión de calidad, capacitación y recordatorios de citas. Podemos contactarle por una cita o por una alternativa de tratamiento.",
    },
  },
  {
    title: { en: "Other uses the law allows", es: "Otros usos que permite la ley" },
    body: {
      en: "We may also share information when the law requires it, for public health, for health oversight, to report abuse or neglect when the law requires a report, in response to a valid court order, to lessen a serious and imminent threat, or for workers’ compensation when the law allows it. We do not sell medical information. We do not use it for marketing without your written permission.",
      es: "También podemos compartir información cuando la ley lo exige, para salud pública, para supervisión de salud, para reportar abuso o negligencia cuando la ley exige un reporte, ante una orden judicial válida, para reducir una amenaza grave e inminente, o para compensación laboral cuando la ley lo permite. No vendemos información médica. No la usamos para mercadeo sin su permiso por escrito.",
    },
  },
  {
    title: { en: "Uses that need your written permission", es: "Usos que necesitan su permiso por escrito" },
    body: {
      en: "Other uses and disclosures need your written authorization. You may cancel that authorization in writing. Cancellation does not undo a disclosure already made. Ask the clinic for the authorization form. Do not send the signed form, or the records it covers, by ordinary email.",
      es: "Otros usos y divulgaciones necesitan su autorización por escrito. Puede cancelar esa autorización por escrito. La cancelación no deshace una divulgación ya hecha. Pida a la clínica el formulario de autorización. No envíe el formulario firmado, ni los documentos que cubre, por correo ordinario.",
    },
  },
  {
    title: { en: "Your rights", es: "Sus derechos" },
    body: {
      en: `You may ask to see or get a copy of your record, ask us to correct it, ask for a list of certain disclosures, ask us to limit how we use or share it, ask us to contact you in a particular way or at a particular place, and ask for a paper copy of the official notice. We may say no to a request when the law allows it, and we will tell you why. Call ${clinic.phoneDisplay} and ask for the privacy contact.`,
      es: `Puede pedir ver o recibir una copia de su expediente, pedir que lo corrijamos, pedir una lista de ciertas divulgaciones, pedir que limitemos cómo lo usamos o compartimos, pedir que le contactemos de una forma o en un lugar en particular, y pedir una copia en papel del aviso oficial. Podemos negar una solicitud cuando la ley lo permite, y le diremos por qué. Llame al ${clinic.phoneDisplay} y pida el contacto de privacidad.`,
      hy: `Կարող եք խնդրել տեսնել կամ ստանալ ձեր գրառման պատճենը, ուղղել այն, խնդրել որոշ բացահայտումների ցանկ, սահմանափակել օգտագործումը, խնդրել որ ձեզ կապվեն որոշակի ձևով կամ վայրում, և խնդրել պաշտոնական ծանուցման թղթե օրինակ։ Օրենքի թույլատրած դեպքում կարող ենք մերժել, և կասենք ինչու։ Զանգեք ${clinic.phoneDisplay} և խնդրեք գաղտնիության կոնտակտը։`,
    },
  },
  {
    title: { en: "Our duties", es: "Nuestras obligaciones" },
    body: {
      en: "We are required by law to maintain the privacy of medical information, to give you the official notice, and to follow the notice that is currently in effect. If the law requires notice of a breach of unsecured medical information, we will provide that notice. We may change the notice. The new notice will apply to information we already have. Ask the front desk for the current paper copy.",
      es: "La ley nos exige proteger la privacidad de la información médica, entregarle el aviso oficial y seguir el aviso que esté vigente. Si la ley exige avisar de una violación de información médica no protegida, daremos ese aviso. Podemos cambiar el aviso. El aviso nuevo aplicará a la información que ya tenemos. Pida en recepción la copia en papel vigente.",
      hy: "Օրենքը պահանջում է պաշտպանել բժշկական տեղեկության գաղտնիությունը, տալ ձեզ պաշտոնական ծանուցումը և հետևել գործող ծանուցմանը։ Եթե օրենքը պահանջում է ծանուցել չպաշտպանված բժշկական տեղեկության խախտման մասին, այդ ծանուցումը կտանք։ Ծանուցումը կարող է փոխվել։ Նոր ծանուցումը կգործի արդեն ունեցած տեղեկության վրա։ Գործող թղթե օրինակը խնդրեք ընդունարանից։",
    },
  },
  {
    title: { en: "Complaints", es: "Quejas" },
    body: {
      en: `You may complain to the clinic or to the U.S. Department of Health and Human Services if you believe your privacy rights were violated. We will not retaliate for a complaint. Call ${clinic.phoneDisplay} or write to ${clinic.street}, ${clinic.city}. You may also contact the Office for Civil Rights at 1-800-368-1019 or 1-800-537-7697 (TDD), or file at https://www.hhs.gov/ocr/complaints. Mailing address: 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201.`,
      es: `Puede quejarse ante la clínica o ante el Departamento de Salud y Servicios Humanos de EE. UU. si cree que se violaron sus derechos de privacidad. No tomaremos represalias por una queja. Llame al ${clinic.phoneDisplay} o escriba a ${clinic.street}, ${clinic.city}. También puede contactar a la Office for Civil Rights al 1-800-368-1019 o al 1-800-537-7697 (TDD), o presentar la queja en https://www.hhs.gov/ocr/complaints. Dirección postal: 200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201.`,
    },
  },
];

function NoticePage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Summary", es: "Resumen", hy: "Ամփոփում" })}
        title={tx({ en: "Privacy practices, in short.", es: "Prácticas de privacidad, en breve.", hy: "Գաղտնիության կանոնները՝ կարճ։" })}
        lede={tx({
          en: "This page is a summary. The official Notice of Privacy Practices is the paper copy at the front desk.",
          es: "Esta página es un resumen. El Aviso oficial de prácticas de privacidad es la copia en papel de la recepción.",
          hy: "Այս էջը ամփոփում է։ Պաշտոնական ծանուցումը ընդունարանի թղթե օրինակն է։",
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
        </div>
      </Container>
    </>
  );
}
