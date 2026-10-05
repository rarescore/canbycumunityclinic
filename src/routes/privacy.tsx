import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Privacy policy for Canby Community Clinic. What this website collects, how it is used, and how medical information is handled.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections: { title: L; body: L }[] = [
  {
    title: { en: "Information collection", es: "Recopilación de información" },
    body: {
      en: `This website may receive non-personal information that a browser sends on its own, such as a domain name, an IP address, the type of browser, the operating system, and which public pages were opened. That information does not identify you by itself. If you use a form, we receive only what you type. An appointment request includes your name, phone, email, whether you are new or returning, preferred days and time of day, preferred language, and an optional note. Other forms ask for the contact details shown on that page. When you submit, this website sends that information to FormSubmit (formsubmit.co), which delivers it by email to ${clinic.emailPatients} or ${clinic.emailOffice}. Canby does not keep a copy in a database on this website.`,
      es: `Este sitio puede recibir información no personal que el navegador envía por sí solo, como un dominio, una dirección IP, el tipo de navegador, el sistema operativo y qué páginas públicas se abrieron. Esa información no lo identifica por sí sola. Si usa un formulario, recibimos solo lo que usted escribe. Una solicitud de cita incluye su nombre, teléfono, correo, si es paciente nuevo o conocido, los días y la hora que prefiere, el idioma y una nota opcional. Los otros formularios piden los datos de contacto que aparecen en esa página. Al enviarlo, este sitio manda esa información a FormSubmit (formsubmit.co), que la entrega por correo a ${clinic.emailPatients} o ${clinic.emailOffice}. Canby no guarda una copia en una base de datos de este sitio.`,
      hy: `Այս կայքը կարող է ստանալ ոչ անձնական տեղեկություն, որ դիտարկիչն ինքն է ուղարկում՝ դոմեն, IP հասցե, դիտարկիչի տեսակ, օպերացիոն համակարգ և թե որ հրապարակային էջերն են բացվել։ Դա ինքնին ձեզ չի ճանաչում։ Եթե ձև եք լրացնում, ստանում ենք միայն այն, ինչ գրում եք։ Այցի հայտը ներառում է անուն, հեռախոս, էլփոստ, նոր եք թե վերադարձող, նախընտրած օրերն ու օրվա ժամը, լեզուն և կամընտիր նշում։ Մյուս ձևերը խնդրում են այդ էջում երևացող կապի տվյալները։ Ուղարկելիս կայքը այդ տեղեկությունը փոխանցում է FormSubmit-ին (formsubmit.co), որը այն էլփոստով հասցնում է ${clinic.emailPatients} կամ ${clinic.emailOffice}։ Canby-ն այս կայքի տվյալների բազայում պատճեն չի պահում։`,
    },
  },
  {
    title: { en: "Information use", es: "Uso de la información" },
    body: {
      en: "We use website information to answer you, to arrange a visit or a volunteer shift, and to keep the public pages working. We do not use it to sell products, and we do not send marketing mail from this site. Medical information collected at a visit is used for treatment and for running the clinic. That use is described in the Notice of Privacy Practices, not in this website policy.",
      es: "Usamos la información del sitio para responderle, para organizar una visita o un turno de voluntariado, y para mantener las páginas públicas. No la usamos para vender productos, y este sitio no envía correo de publicidad. La información médica recogida en una visita se usa para el tratamiento y para operar la clínica. Ese uso se describe en el Aviso de prácticas de privacidad, no en esta política del sitio.",
    },
  },
  {
    title: { en: "Security", es: "Seguridad" },
    body: {
      en: `Ordinary email and this website are not a secure way to send medical information. Do not include symptoms, diagnoses, medicines, test results, insurance member numbers, Social Security numbers, or medical records in a message to ${clinic.emailPatients} or ${clinic.emailOffice}. Call ${clinic.phoneDisplay} and ask for an approved method when records are needed. A gift by card is processed by Stripe or PayPal on their own page. Canby does not store the card number on this website. Staff see a message only when it is needed to answer you or to schedule a visit.`,
      es: `El correo ordinario y este sitio no son una forma segura de enviar información médica. No incluya síntomas, diagnósticos, medicamentos, resultados, números de seguro, números de Seguro Social ni expedientes en un mensaje a ${clinic.emailPatients} o ${clinic.emailOffice}. Llame al ${clinic.phoneDisplay} y pida un método aprobado cuando hagan falta documentos. Un donativo con tarjeta lo procesa Stripe o PayPal en su propia página. Canby no guarda el número de la tarjeta en este sitio. El personal ve un mensaje solo cuando hace falta para responderle o para programar una visita.`,
    },
  },
  {
    title: { en: "Cookies", es: "Cookies" },
    body: {
      en: "If you choose English, Spanish, or Armenian, that choice is saved in your browser under the name canby-lang. It stays on your device. It is not sent to the clinic, and it is not used to advertise to you. You can clear it in your browser settings. We do not run advertising cookies on this site.",
      es: "Si elige inglés, español o armenio, esa elección se guarda en su navegador con el nombre canby-lang. Permanece en su dispositivo. No se envía a la clínica y no se usa para mostrarle publicidad. Puede borrarla en los ajustes del navegador. No usamos cookies de publicidad en este sitio.",
    },
  },
  {
    title: { en: "Sharing", es: "Divulgación" },
    body: {
      en: "We do not sell information collected on this website. Form messages go to FormSubmit (formsubmit.co) so they can be delivered by email to the clinic. Card payments are completed on Stripe or PayPal. We do not give website information to outside parties for their own marketing. We may disclose information when the law requires it, to answer a valid legal process, or to protect the clinic, a patient, or another person from harm. Medical information from a visit may be shared for treatment and for running the clinic, as the Notice of Privacy Practices explains.",
      es: "No vendemos la información recogida en este sitio. Los mensajes de los formularios van a FormSubmit (formsubmit.co) para que lleguen por correo a la clínica. Los pagos con tarjeta se completan en Stripe o PayPal. No damos la información del sitio a terceros para su propia publicidad. Podemos divulgar información cuando la ley lo exige, para responder a un proceso legal válido, o para proteger a la clínica, a un paciente o a otra persona de un daño. La información médica de una visita puede compartirse para el tratamiento y para operar la clínica, como explica el Aviso de prácticas de privacidad.",
      hy: "Այս կայքում հավաքված տեղեկությունը չենք վաճառում։ Ձևերի հաղորդագրությունները գնում են FormSubmit (formsubmit.co), որպեսզի էլփոստով հասնեն կլինիկային։ Քարտով վճարումներն ավարտվում են Stripe-ում կամ PayPal-ում։ Կայքի տեղեկությունը դրսի կողմերին չենք տալիս իրենց գովազդի համար։ Կարող ենք բացել տեղեկություն, երբ օրենքը պահանջում է, վավեր իրավական գործընթացին պատասխանելու համար, կամ կլինիկան, պացիենտին կամ մեկ ուրիշին վնասից պաշտպանելու համար։ Այցից բժշկական տեղեկությունը կարող է կիսվել բուժման և կլինիկան վարելու համար, ինչպես բացատրված է Գաղտնիության գործելակերպի ծանուցման մեջ։",
    },
  },
  {
    title: { en: "Links", es: "Enlaces" },
    body: {
      en: "This site links to public agencies and other organizations, including BenefitsCal, Covered California, 211 LA, LAHSA, WIC, Google Maps, Yelp, and the federal health-center finder. Those sites have their own privacy rules. Canby does not control them. Read their notices before you send them personal information.",
      es: "Este sitio enlaza a agencias públicas y otras organizaciones, entre ellas BenefitsCal, Covered California, 211 LA, LAHSA, WIC, Google Maps, Yelp y el buscador federal de centros de salud. Esos sitios tienen sus propias reglas de privacidad. Canby no las controla. Lea sus avisos antes de enviarles información personal.",
    },
  },
  {
    title: { en: "Donations", es: "Donativos" },
    body: {
      en: "A donation on this site is optional. The gift is completed on Stripe or PayPal. Those companies receive the card details. Canby receives the amount and the name the processor provides. We do not run surveys or contests on this website.",
      es: "Un donativo en este sitio es opcional. El donativo se completa en Stripe o PayPal. Esas empresas reciben los datos de la tarjeta. Canby recibe el monto y el nombre que proporciona el procesador. No hacemos encuestas ni concursos en este sitio.",
    },
  },
  {
    title: { en: "Consent", es: "Consentimiento" },
    body: {
      en: `Using this website means you have read this policy. If we change it, the new version will be posted on this page with a new date. This version was posted October 5, 2026. If you believe we are not following it, call ${clinic.phoneDisplay} or write to ${clinic.emailOffice}. Do not include medical details in the email. You can also read the Notice of Privacy Practices and the non-discrimination notice, which are linked below.`,
      es: `Usar este sitio significa que leyó esta política. Si la cambiamos, la versión nueva se publicará en esta página con una fecha nueva. Esta versión se publicó el 5 de octubre de 2026. Si cree que no la estamos siguiendo, llame al ${clinic.phoneDisplay} o escriba a ${clinic.emailOffice}. No incluya datos médicos en el correo. También puede leer el Aviso de prácticas de privacidad y el aviso de no discriminación, enlazados abajo.`,
    },
  },
  {
    title: { en: "Identification at a visit", es: "Identificación en una visita" },
    body: {
      en: "At the clinic, staff may ask for a photo ID before care, if you have one. A driver’s license, a state ID card, or a passport is enough. This website does not collect a photo of your ID. If you do not have an ID, call and say so. Do not email a picture of an identification card.",
      es: "En la clínica, el personal puede pedir una identificación con foto antes de la atención, si usted tiene una. Basta una licencia de conducir, una identificación estatal o un pasaporte. Este sitio no recoge una foto de su identificación. Si no tiene identificación, llame y dígalo. No envíe por correo una foto de una tarjeta de identificación.",
    },
  },
];

function PrivacyPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Last updated October 5, 2026", es: "Actualizado el 5 de octubre de 2026" })}
        title={tx({ en: "Privacy Policy.", es: "Política de privacidad." })}
        lede={tx({
          en: "Canby Community Clinic protects information you give this website, and keeps medical information separate from it.",
          es: "Canby Community Clinic protege la información que usted da en este sitio, y mantiene la información médica aparte.",
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
        <p className="mt-10 leading-relaxed">
          <Link to="/privacy-practices" className="text-blue">
            {tx({ en: "Notice of Privacy Practices", es: "Aviso de prácticas de privacidad" })}
          </Link>
          <span className="mx-3 text-muted">·</span>
          <Link to="/nondiscrimination" className="text-blue">
            {tx({ en: "Non-discrimination notice", es: "Aviso de no discriminación" })}
          </Link>
        </p>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          {clinic.name}
          <br />
          {clinic.street}, {clinic.city}
          <br />
          {clinic.phoneDisplay}
        </p>
      </Container>
    </>
  );
}
