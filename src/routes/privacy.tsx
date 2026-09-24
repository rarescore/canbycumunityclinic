import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";
import { Container, PageIntro } from "@/components/site/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Canby Community Clinic" },
      {
        name: "description",
        content:
          "Website privacy notice for Canby Community Clinic. This page is not the clinic’s Notice of Privacy Practices. Do not send medical information by ordinary email.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections: { title: L; body: L }[] = [
  {
    title: { en: "This page is about the website", es: "Esta página es sobre el sitio web" },
    body: {
      en: "It explains how this public website behaves. It is not the clinic’s Notice of Privacy Practices for medical records, and it does not describe every use of information collected in person. Ask for that notice when you call or visit. We will not invent one here.",
      es: "Explica cómo se comporta este sitio público. No es el Aviso de prácticas de privacidad de la clínica para expedientes médicos, ni describe todo uso de información recogida en persona. Pida ese aviso cuando llame o visite. No vamos a inventarlo aquí.",
    },
  },
  {
    title: { en: "Appointment requests are not stored here", es: "Las solicitudes de cita no se guardan aquí" },
    body: {
      en: "The appointment, volunteer, group, and contact forms do not save a patient chart on this website. After you submit, the message is sent to the clinic email. We do not operate a patient portal on this site.",
      es: "Los formularios de cita, voluntariado, grupos y contacto no guardan un expediente en este sitio. Al enviar, el mensaje llega al correo de la clínica. No operamos un portal de pacientes aquí.",
    },
  },
  {
    title: { en: "Do not send medical information by email", es: "No envíe información médica por correo" },
    body: {
      en: `Ordinary email is not a secure, HIPAA-compliant way to send protected health information. Do not include symptoms, diagnoses, medications, test results, insurance member numbers, Social Security numbers, or medical records in a message to ${clinic.emailPatients} or ${clinic.emailOffice}. Call ${clinic.phoneDisplay} and ask for an approved method when records are needed.`,
      es: `El correo ordinario no es una forma segura ni compatible con HIPAA para enviar información de salud protegida. No incluya síntomas, diagnósticos, medicamentos, resultados, números de seguro, números de Seguro Social ni expedientes en un mensaje a ${clinic.emailPatients} o ${clinic.emailOffice}. Llame al ${clinic.phoneDisplay} y pida un método aprobado cuando hagan falta documentos.`,
    },
  },
  {
    title: { en: "What the scheduling email contains", es: "Qué contiene el correo para programar" },
    body: {
      en: "If you use the form, the email can include your name, phone, email, whether you are new or returning, preferred weekdays and time of day, preferred language, and an optional scheduling note. That is contact information for arranging a visit, not a medical history.",
      es: "Si usa el formulario, el correo puede incluir su nombre, teléfono, correo, si es paciente nuevo o conocido, los días y la hora que prefiere, el idioma y una nota opcional para programar. Eso es información de contacto para organizar una visita, no una historia médica.",
    },
  },
  {
    title: { en: "Language preference on this device", es: "Preferencia de idioma en este dispositivo" },
    body: {
      en: "If you choose English, Spanish, or Armenian, that choice is saved in your browser’s local storage under the name canby-lang. It is not sent to the clinic. You can clear it in your browser settings. We do not run advertising trackers on this site.",
      es: "Si elige inglés, español o armenio, esa elección se guarda en el almacenamiento local de su navegador con el nombre canby-lang. No se envía a la clínica. Puede borrarla en los ajustes del navegador. No usamos rastreadores publicitarios en este sitio.",
    },
  },
  {
    title: { en: "Fonts and the map", es: "Tipografías y el mapa" },
    body: {
      en: "Pages may load typefaces from Google Fonts and show an embedded Google Map of the published address. Those services receive the technical information a browser normally sends, such as an IP address. We do not control their privacy practices.",
      es: "Las páginas pueden cargar tipografías de Google Fonts y mostrar un mapa de Google con la dirección publicada. Esos servicios reciben la información técnica que un navegador suele enviar, como una dirección IP. No controlamos sus prácticas de privacidad.",
    },
  },
  {
    title: { en: "Questions about this notice", es: "Preguntas sobre este aviso" },
    body: {
      en: `For a question about the website, email ${clinic.emailOffice}. For a question about your care or to request the clinic’s Notice of Privacy Practices, call ${clinic.phoneDisplay} or visit during weekday hours. Do not include medical details in the email.`,
      es: `Si tiene una pregunta sobre el sitio, escriba a ${clinic.emailOffice}. Si tiene una pregunta sobre su atención o quiere el Aviso de prácticas de privacidad de la clínica, llame al ${clinic.phoneDisplay} o visite en horario de semana. No incluya datos médicos en el correo.`,
    },
  },
];

function PrivacyPage() {
  const { tx } = useTx();
  return (
    <>
      <PageIntro
        kicker={tx({ en: "Privacy", es: "Privacidad" })}
        title={tx({
          en: "Your medical story does not belong in a website form.",
          es: "Su historia médica no pertenece a un formulario web.",
        })}
        lede={tx({
          en: "We built the appointment request so it collects only how to reach you. Read this before you send anything.",
          es: "Armamos la solicitud de cita para que recoja solo cómo localizarle. Lea esto antes de enviar algo.",
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
