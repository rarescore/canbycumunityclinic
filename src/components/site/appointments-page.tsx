import { Link } from "@tanstack/react-router";
import { clinic } from "@/lib/clinic";
import { AppointmentForm } from "@/components/site/forms";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, HoursTable, Kicker } from "@/components/site/ui";

export function AppointmentsPage() {
  const { tx } = useTx();
  return (
    <>
      <Container className="grid gap-12 py-14 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Kicker>{tx({ en: "Appointments", es: "Citas" })}</Kicker>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.015em] md:text-7xl">
            {tx({
              en: "Book the visit. The phone confirms it.",
              es: "Pida la visita. El teléfono la confirma.",
            })}
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            {tx({
              en: "Call on a weekday and we can tell you, in the same conversation, whether we can see you, what to bring, and whether we can see you. If you cannot call, the form prepares an email with scheduling details only.",
              es: "Llame en un día de semana y, en la misma conversación, le diremos si podemos atenderle, qué traer y si podemos atenderle. Si no puede llamar, el formulario prepara un correo solo con datos para programar.",
            })}
          </p>
          <div className="mt-6">
            <CallButton variant="primary" className="w-full sm:w-auto" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <img src="/media/pages/phone.jpg" alt={tx({ en: "A woman on the phone at a kitchen table.", es: "Una mujer al teléfono en una mesa de cocina." })} className="aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
            <img src="/media/pages/couple.jpg" alt={tx({ en: "Two people walking on a sidewalk.", es: "Dos personas caminan por la banqueta." })} className="mt-8 aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
          </div>
          <div className="mt-8">
            <HoursTable />
          </div>
          <div id="contact" className="mt-8 space-y-4">
            <article className="border border-line bg-cream p-5">
              <h2 className="font-medium">{tx({ en: "Patients and appointments", es: "Pacientes y citas" })}</h2>
              <a className="mt-2 inline-flex min-h-11 items-center font-medium text-blue" href={`mailto:${clinic.emailPatients}`}>
                {clinic.emailPatients}
              </a>
              <p className="text-sm leading-relaxed text-muted">
                {tx({
                  en: "Use this address for a scheduling request or a general question about becoming a patient.",
                  es: "Use esta dirección para pedir una cita o hacer una pregunta general sobre cómo ser paciente.",
                })}
              </p>
            </article>
            <article className="border border-line bg-cream p-5">
              <h2 className="font-medium">
                {tx({ en: "Office and administration", es: "Oficina y administración" })}
              </h2>
              <a className="mt-2 inline-flex min-h-11 items-center font-medium text-blue" href={`mailto:${clinic.emailOffice}`}>
                {clinic.emailOffice}
              </a>
              <p className="text-sm leading-relaxed text-muted">
                {tx({
                  en: "Volunteers, donations, vendors, and other office matters. Not for medical details.",
                  es: "Voluntarios, donaciones, proveedores y otros asuntos de oficina. No para datos médicos.",
                })}
              </p>
            </article>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl">
            {tx({ en: "Request a callback", es: "Pida que le llamemos" })}
          </h2>
          <p className="mt-3 mb-3 text-sm leading-relaxed text-muted">
            {tx({
              en: "We ask only for what we need to contact you and suggest a time. The form does not store your information and it is not a medical record. A request is not a confirmed appointment.",
              es: "Pedimos solo lo necesario para contactarle y proponer una hora. El formulario no guarda su información y no es un expediente médico. Una solicitud no es una cita confirmada.",
            })}
          </p>
          <Link to="/privacy" className="mb-6 inline-flex min-h-11 items-center text-sm font-medium text-blue">
            {tx({ en: "Read the privacy policy", es: "Lea la política de privacidad" })}
          </Link>
          <AppointmentForm />
        </div>
      </Container>

      <section className="border-t border-line">
        <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl leading-tight">
              {tx({ en: "What happens when you call.", es: "Qué pasa cuando llama." })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {tx({
                en: "The phone is also the most private way to ask. Say you want to request or change a visit. Staff will answer in that conversation — not with a brochure.",
                es: "El teléfono también es la forma más privada de preguntar. Diga que quiere pedir o cambiar una visita. El personal responde en esa conversación, no con un folleto.",
              })}
            </p>
          </div>
          <ol className="md:col-span-8">
            {[
              {
                n: "01",
                t: { en: "You say what kind of visit you need", es: "Usted dice qué tipo de visita necesita" },
                d: {
                  en: "A checkup, a follow-up, a screening question, help with a medicine, or something else. Not a full medical history.",
                  es: "Una revisión, un seguimiento, una pregunta de evaluación, ayuda con un medicamento u otra cosa. No una historia médica completa.",
                },
              },
              {
                n: "02",
                t: { en: "Staff says what is actually available", es: "El personal dice qué hay de verdad" },
                d: {
                  en: "Current openings, whether you fit today’s eligibility, whether we can see you, whether insurance changes anything, and which papers to bring. Having insurance does not automatically decide it. Not having insurance does not automatically close the door. Call either way.",
                  es: "Los espacios actuales, si usted entra en la elegibilidad de hoy, si podemos atenderle, si el seguro cambia algo y qué papeles traer. Tener seguro no lo decide automáticamente. No tenerlo no cierra la puerta automáticamente. Llame de cualquier modo.",
                },
              },
              {
                n: "03",
                t: { en: "A time is real only when they say it is", es: "Una hora es real solo cuando lo dicen" },
                d: {
                  en: "If there is a visit, you leave the call with a date, a time, suite 6B, and what to bring. A website request is not that confirmation.",
                  es: "Si hay una visita, usted termina la llamada con una fecha, una hora, la suite 6B y qué traer. Una solicitud en el sitio no es esa confirmación.",
                },
              },
            ].map((step) => (
              <li key={step.n} className="grid grid-cols-12 gap-4 border-t border-line py-6">
                <span className="col-span-2 font-serif text-3xl tracking-[-0.04em] text-ink/65 md:col-span-1">{step.n}</span>
                <div className="col-span-10">
                  <h3 className="font-serif text-2xl">{tx(step.t)}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{tx(step.d)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-cream">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="font-serif text-3xl">
              {tx({ en: "Walk-ins, cancellations, late arrivals", es: "Sin cita, cancelaciones, llegadas tarde" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {tx({
                en: "Capacity moves with staffing. Do not arrive expecting to be seen without a call. If you need to cancel or move a visit, call as early as you can so the time can go to someone else. If you are running late, call before you get here.",
                es: "La capacidad cambia con el personal. No llegue esperando ser atendido sin haber llamado. Si necesita cancelar o mover una visita, llame lo antes posible para que ese tiempo pueda ser de otra persona. Si va tarde, llame antes de llegar.",
              })}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl">
              {tx({ en: "What they may ask, and what not to send", es: "Qué pueden preguntar y qué no enviar" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {tx({
                en: "On the phone, staff may ask where you live, whether you have insurance, and what kind of care you need — enough to know if the clinic can offer it. Do not put diagnoses, test results, insurance member numbers, Social Security numbers, or medical records in this form or in ordinary email.",
                es: "Por teléfono, el personal puede preguntar dónde vive, si tiene seguro y qué tipo de atención necesita: lo suficiente para saber si la clínica puede ofrecerla. No ponga diagnósticos, resultados, números de seguro, números de Seguro Social ni expedientes en este formulario ni en un correo ordinario.",
              })}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
