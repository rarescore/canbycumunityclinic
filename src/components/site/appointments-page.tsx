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
              en: "Request a callback.",
              es: "Pida que le llamemos.",
              hy: "Հետզանգ խնդրեք։",
            })}
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            {tx({
              en: "Walk-ins are welcome Monday through Friday, 9 AM to 5 PM. Calling ahead is optional. Use the form only if you want a time set aside.",
              es: "Puede venir sin cita de lunes a viernes, de 9 AM a 5 PM. Llamar antes es opcional. Use el formulario solo si quiere que le reservemos una hora.",
              hy: "Առանց գրանցման կարող եք գալ երկուշաբթիից ուրբաթ, 9:00–17:00։ Նախապես զանգելը պարտադիր չէ։ Ձևը լրացրեք միայն եթե ուզում եք, որ ժամը պահենք։",
            })}
          </p>
          <div className="mt-6">
            <CallButton variant="primary" className="w-full sm:w-auto" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <img src="/media/clinic/call-kitchen.png" alt={tx({ en: "A woman on the phone at a kitchen table.", es: "Una mujer al teléfono en una mesa de cocina.", hy: "Կինը խոհանոցի սեղանի մոտ հեռախոսով է խոսում։" })} className="aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
            <img src="/media/clinic/notes-table.png" alt={tx({ en: "A notebook, keys, and glasses set out before leaving.", es: "Un cuaderno, llaves y lentes listos antes de salir.", hy: "Տետր, բանալիներ և ակնոց՝ դուրս գալուց առաջ։" })} className="aspect-[4/3] w-full bg-[#ebe6de] object-contain" />
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
              en: "Use this if you want us to call you back and set a time. What you type is emailed to the clinic.",
              es: "Úselo si quiere que le llamemos para fijar una hora. Lo que escribe se envía por correo a la clínica.",
              hy: "Օգտագործեք սա, եթե ուզում եք, որ զանգենք և ժամ նշենք։ Գրածը էլփոստով գնում է կլինիկա։",
            })}
          </p>
          <Link to="/privacy" className="mb-6 inline-flex min-h-11 items-center text-sm font-medium text-blue">
            {tx({ en: "Read the privacy policy", es: "Lea la política de privacidad" })}
          </Link>
          <AppointmentForm />
        </div>
      </Container>
    </>
  );
}
