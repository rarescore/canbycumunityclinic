import { useState, type FormEvent, type ReactNode } from "react";
import { clinic, weekdayKeys, type Weekday } from "@/lib/clinic";
import { sendClinicMail } from "@/lib/mail.functions";
import { cn } from "@/lib/cn";
import { useTx, type L } from "@/components/site/i18n";

const days: { key: Weekday; label: L }[] = [
  { key: "mon", label: { en: "Mon", es: "Lun" } },
  { key: "tue", label: { en: "Tue", es: "Mar" } },
  { key: "wed", label: { en: "Wed", es: "Mié" } },
  { key: "thu", label: { en: "Thu", es: "Jue" } },
  { key: "fri", label: { en: "Fri", es: "Vie" } },
];

const dayName: Record<Weekday, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
};

type ApptState = {
  forWhom: "self" | "family" | "";
  need: "checkup" | "ongoing" | "screening" | "medicine" | "test" | "unsure" | "";
  first: string;
  last: string;
  phone: string;
  email: string;
  contact: "phone" | "email" | "";
  patient: "new" | "returning" | "";
  language: "english" | "spanish" | "other" | "";
  otherLanguage: string;
  days: Weekday[];
  time: "morning" | "afternoon" | "either" | "";
  note: string;
  ack: boolean;
  website: string;
};

const emptyAppt: ApptState = {
  forWhom: "",
  need: "",
  first: "",
  last: "",
  phone: "",
  email: "",
  contact: "",
  patient: "",
  language: "",
  otherLanguage: "",
  days: [],
  time: "",
  note: "",
  ack: false,
  website: "",
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className={cn("mt-2", error && "field-error")}>{children}</div>
      {error ? <span className="mt-1 block text-sm text-danger">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "min-h-12 w-full rounded-sm border border-line bg-cream px-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink";

export function AppointmentForm() {
  const { tx } = useTx();
  const [state, setState] = useState<ApptState>(emptyAppt);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function update<K extends keyof ApptState>(key: K, value: ApptState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function toggleDay(day: Weekday) {
    setState((current) => ({
      ...current,
      days: current.days.includes(day)
        ? current.days.filter((item) => item !== day)
        : [...current.days, day],
    }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validateAppt(state, tx);
    setErrors(next);
    if (Object.keys(next).length) return;
    if (state.website.trim()) {
      setSent(true);
      return;
    }
    const message = appointmentMessage(state);
    setSending(true);
    try {
      await sendClinicMail({ data: { ...message, trap: state.website } });
      setSent(true);
    } catch {
      setErrors({
        form: tx({
          en: "That did not send. Call (818) 674-4414.",
          es: "No se envió. Llame al (818) 674-4414.",
        }),
      });
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    const bring: L[] = [
      { en: "Photo ID, if you have one. A driver’s license, state ID, or passport.", es: "Identificación con foto, si la tiene. Licencia, identificación estatal o pasaporte.", hy: "Լուսանկարով փաստաթուղթ, եթե ունեք։ Վարորդական իրավունք, նահանգի ID կամ անձնագիր։" },
      { en: "Insurance card, Medi-Cal card, or Medicare card, if you have coverage. No card is fine. Still come.", es: "Tarjeta del seguro, de Medi-Cal o de Medicare, si tiene cobertura. Sin tarjeta también está bien. Venga igual.", hy: "Ապահովագրության, Medi-Cal-ի կամ Medicare-ի քարտ, եթե ծածկույթ ունեք։ Քարտ չունենալը նորմալ է։ Միևնույն է եկեք։" },
      { en: "A list of medicines you take, including pills from the store, vitamins, and supplements. Or bring the bottles.", es: "Una lista de los medicamentos que toma, incluidas las pastillas de la tienda, vitaminas y suplementos. O traiga los frascos.", hy: "Ցանկ այն դեղերի, որ ընդունում եք, ներառյալ խանութից հաբերը, վիտամինները և հավելումները։ Կամ բերեք շշերը։" },
      { en: "Your pharmacy’s name and phone number.", es: "El nombre y el teléfono de su farmacia.", hy: "Ձեր դեղատան անունը և հեռախոսը։" },
      { en: "Paper records you already have: lab results, discharge papers, or a specialist’s note.", es: "Papeles que ya tenga: resultados, hojas de alta o una nota del especialista.", hy: "Թղթեր, որ արդեն ունեք՝ լաբորատոր արդյունքներ, դուրսգրման թղթեր կամ մասնագետի նշում։" },
      { en: "Two or three questions, written down.", es: "Dos o tres preguntas, escritas.", hy: "Երկու կամ երեք հարց, գրված։" },
    ];
    return (
      <div role="status">
        <div className="rounded-lg bg-green-soft p-6 md:p-8">
          <h2 className="font-serif text-3xl text-ink">{tx({ en: "Sent.", es: "Enviado.", hy: "Ուղարկված է։" })}</h2>
          <p className="mt-4 leading-relaxed text-ink">
            {tx({
              en: "Your request is in. The clinic will call you to set the time. Bring the items below when that time is confirmed.",
              es: "Su solicitud llegó. La clínica le llamará para fijar la hora. Traiga lo de abajo cuando esa hora esté confirmada.",
              hy: "Ձեր հայտը ստացվել է։ Կլինիկան կզանգի՝ ժամը նշելու համար։ Բերեք ներքևի բաները, երբ ժամը հաստատված լինի։",
            })}
          </p>
        </div>
        <div className="mt-4 rounded-lg border border-line bg-cream p-6 md:p-8">
          <h3 className="font-serif text-2xl text-ink">{tx({ en: "What to bring", es: "Qué traer", hy: "Ինչ բերել" })}</h3>
          <ol className="mt-5 space-y-4">
            {bring.map((item, index) => (
              <li key={item.en} className="flex gap-4 text-sm leading-relaxed">
                <span className="w-6 shrink-0 font-medium text-green tabular-nums">{index + 1}</span>
                <span>{tx(item)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-cream p-5 md:p-8" noValidate>
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
        {tx({ en: "About a minute. No symptoms. No member ID.", es: "Cerca de un minuto. Sin síntomas. Sin número de miembro." })}
      </p>
      <fieldset className="mt-6">
        <legend className="text-sm font-medium">{tx({ en: "1 · Who is the visit for?", es: "1 · ¿Para quién es la visita?" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Choice pressed={state.forWhom === "self"} onClick={() => update("forWhom", "self")} label={tx({ en: "Myself", es: "Para mí" })} />
          <Choice pressed={state.forWhom === "family"} onClick={() => update("forWhom", "family")} label={tx({ en: "A family member", es: "Un familiar" })} />
        </div>
        {errors.forWhom ? <p className="mt-2 text-sm text-danger">{errors.forWhom}</p> : null}
      </fieldset>
      <fieldset className="mt-6">
        <legend className="text-sm font-medium">{tx({ en: "2 · What can we help with?", es: "2 · ¿En qué podemos ayudar?" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {(
            [
              ["checkup", { en: "A checkup", es: "Una revisión" }],
              ["ongoing", { en: "An ongoing concern", es: "Un problema continuo" }],
              ["screening", { en: "A screening", es: "Una evaluación" }],
              ["medicine", { en: "A medicine", es: "Un medicamento" }],
              ["test", { en: "A test", es: "Una prueba" }],
              ["unsure", { en: "I’m not sure", es: "No estoy seguro" }],
            ] as const
          ).map(([key, label]) => (
            <Choice key={key} pressed={state.need === key} onClick={() => update("need", key)} label={tx(label)} />
          ))}
        </div>
        {errors.need ? <p className="mt-2 text-sm text-danger">{errors.need}</p> : null}
      </fieldset>
      <p className="mt-8 text-sm font-medium">{tx({ en: "3 · When, and how we reach you", es: "3 · Cuándo, y cómo le contactamos" })}</p>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "First name", es: "Nombre" })} error={errors.first}>
          <input
            className={inputClass}
            autoComplete="given-name"
            autoCapitalize="words"
            value={state.first}
            onChange={(event) => update("first", event.target.value)}
          />
        </Field>
        <Field label={tx({ en: "Last name", es: "Apellido" })} error={errors.last}>
          <input
            className={inputClass}
            autoComplete="family-name"
            autoCapitalize="words"
            value={state.last}
            onChange={(event) => update("last", event.target.value)}
          />
        </Field>
        <Field label={tx({ en: "Phone", es: "Teléfono" })} error={errors.phone}>
          <input
            className={inputClass}
            autoComplete="tel"
            inputMode="tel"
            value={state.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label={tx({ en: "Email", es: "Correo" })} error={errors.email}>
          <input
            className={inputClass}
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            inputMode="email"
            value={state.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">
          {tx({ en: "Best way to reach you", es: "Mejor forma de contactarle" })}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Choice
            pressed={state.contact === "phone"}
            onClick={() => update("contact", "phone")}
            label={tx({ en: "Phone", es: "Teléfono" })}
          />
          <Choice
            pressed={state.contact === "email"}
            onClick={() => update("contact", "email")}
            label={tx({ en: "Email", es: "Correo" })}
          />
        </div>
        {errors.contact ? <p className="mt-2 text-sm text-danger">{errors.contact}</p> : null}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">
          {tx({ en: "Have you been here before?", es: "¿Ha venido antes?" })}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Choice
            pressed={state.patient === "new"}
            onClick={() => update("patient", "new")}
            label={tx({ en: "New patient", es: "Paciente nuevo" })}
          />
          <Choice
            pressed={state.patient === "returning"}
            onClick={() => update("patient", "returning")}
            label={tx({ en: "I have been seen here", es: "Ya me han atendido aquí" })}
          />
        </div>
        {errors.patient ? <p className="mt-2 text-sm text-danger">{errors.patient}</p> : null}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">
          {tx({ en: "Language for the visit", es: "Idioma para la visita" })}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          <Choice
            pressed={state.language === "english"}
            onClick={() => update("language", "english")}
            label={tx({ en: "English", es: "Inglés" })}
          />
          <Choice
            pressed={state.language === "spanish"}
            onClick={() => update("language", "spanish")}
            label={tx({ en: "Spanish", es: "Español" })}
          />
          <Choice
            pressed={state.language === "other"}
            onClick={() => update("language", "other")}
            label={tx({ en: "Other", es: "Otro" })}
          />
        </div>
        {state.language === "other" ? (
          <input
            className={cn(inputClass, "mt-3")}
            maxLength={40}
            placeholder={tx({ en: "Which language?", es: "¿Qué idioma?" })}
            value={state.otherLanguage}
            onChange={(event) => update("otherLanguage", event.target.value)}
          />
        ) : null}
        {errors.language ? <p className="mt-2 text-sm text-danger">{errors.language}</p> : null}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">
          {tx({ en: "Preferred weekdays", es: "Días de semana que prefiere" })}
        </legend>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {days.map((day) => (
            <button
              key={day.key}
              type="button"
              aria-pressed={state.days.includes(day.key)}
              onClick={() => toggleDay(day.key)}
              className={cn(
                "min-h-12 rounded-lg text-sm font-medium ring-1",
                state.days.includes(day.key)
                  ? "bg-blue text-cream ring-blue"
                  : "bg-paper text-ink ring-line",
              )}
            >
              {tx(day.label)}
            </button>
          ))}
        </div>
        {errors.days ? <p className="mt-2 text-sm text-danger">{errors.days}</p> : null}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-ink">
          {tx({ en: "Time of day", es: "Hora del día" })}
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {(
            [
              ["morning", { en: "Morning", es: "Mañana" }],
              ["afternoon", { en: "Afternoon", es: "Tarde" }],
              ["either", { en: "Either", es: "Cualquiera" }],
            ] as const
          ).map(([key, label]) => (
            <Choice
              key={key}
              pressed={state.time === key}
              onClick={() => update("time", key)}
              label={tx(label)}
            />
          ))}
        </div>
        {errors.time ? <p className="mt-2 text-sm text-danger">{errors.time}</p> : null}
      </fieldset>

      <Field
        label={tx({
          en: "Scheduling note, optional",
          es: "Nota para programar, opcional",
        })}
        error={errors.note}
      >
        <textarea
          className={cn(inputClass, "min-h-28 py-3")}
          maxLength={280}
          value={state.note}
          onChange={(event) => update("note", event.target.value)}
          placeholder={tx({
            en: "Example: weekday mornings after 10. Do not describe symptoms or medicines.",
            es: "Ejemplo: mañanas entre semana después de las 10. No describa síntomas ni medicamentos.",
          })}
        />
        <span className="mt-1 block text-xs text-muted">{state.note.length}/280</span>
      </Field>

      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={state.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input
          type="checkbox"
          className="mt-1 size-5 accent-blue"
          checked={state.ack}
          onChange={(event) => update("ack", event.target.checked)}
        />
        <span>
          {tx({
            en: "I understand this form only arranges a callback. I will not include symptoms, diagnoses, medications, test results, insurance numbers, or other medical details. Ordinary email is not secure for that information.",
            es: "Entiendo que este formulario solo sirve para que me llamen. No incluiré síntomas, diagnósticos, medicamentos, resultados, números de seguro ni otros datos médicos. El correo ordinario no es seguro para esa información.",
          })}
        </span>
      </label>
      {errors.ack ? <p className="mt-2 text-sm text-danger">{errors.ack}</p> : null}

      {errors.form ? <p className="mt-3 text-sm text-danger">{errors.form}</p> : null}
      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-blue px-5 font-medium text-cream hover:bg-blue-deep disabled:opacity-60 sm:w-auto"
      >
        {sending
          ? tx({ en: "Sending…", es: "Enviando…" })
          : tx({ en: "Submit request", es: "Enviar solicitud" })}
      </button>
    </form>
  );
}

function Choice({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "min-h-12 rounded-lg px-3 text-sm font-medium ring-1",
        pressed ? "bg-blue text-cream ring-blue" : "bg-paper text-ink ring-line",
      )}
    >
      {label}
    </button>
  );
}

function validateAppt(state: ApptState, tx: (value: L) => string) {
  const errors: Record<string, string> = {};
  const required = tx({ en: "This is required.", es: "Esto es necesario." });
  if (!state.forWhom) errors.forWhom = required;
  if (!state.need) errors.need = required;
  if (!state.first.trim()) errors.first = required;
  if (!state.last.trim()) errors.last = required;
  if (!/^[+()\d\s.-]{7,20}$/.test(state.phone.trim())) {
    errors.phone = tx({ en: "Enter a phone number we can call.", es: "Escriba un teléfono al que podamos llamar." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
    errors.email = tx({ en: "Enter a valid email.", es: "Escriba un correo válido." });
  }
  if (!state.contact) errors.contact = required;
  if (!state.patient) errors.patient = required;
  if (!state.language) errors.language = required;
  if (state.language === "other" && !state.otherLanguage.trim()) errors.language = required;
  if (!state.days.length) {
    errors.days = tx({ en: "Choose at least one weekday.", es: "Elija al menos un día." });
  }
  if (!state.time) errors.time = required;
  if (state.note.length > 280) errors.note = required;
  if (!state.ack) {
    errors.ack = tx({
      en: "Please confirm you will not include medical details.",
      es: "Confirme que no incluirá datos médicos.",
    });
  }
  return errors;
}

function appointmentMessage(state: ApptState) {
  const language =
    state.language === "other"
      ? `Other: ${state.otherLanguage.trim()}`
      : state.language === "spanish"
        ? "Spanish"
        : "English";
  const body = [
    "Appointment request for Canby Community Clinic",
    "",
    `Appointment for: ${state.forWhom === "family" ? "A family member" : "Myself"}`,
    `Kind of visit: ${state.need}`,
    `Name: ${state.first.trim()} ${state.last.trim()}`,
    `Phone: ${state.phone.trim()}`,
    `Email: ${state.email.trim()}`,
    `Preferred contact: ${state.contact}`,
    `Patient: ${state.patient === "new" ? "New" : "Returning"}`,
    `Language: ${language}`,
    `Preferred days: ${weekdayKeys.filter((day) => state.days.includes(day)).map((day) => dayName[day]).join(", ")}`,
    `Time of day: ${state.time}`,
    `Scheduling note: ${state.note.trim() || "(none)"}`,
  ].join("\n");
  return {
    inbox: "patients" as const,
    subject: "Appointment request",
    body,
    replyTo: state.email.trim(),
  };
}

function Sent({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg bg-green-soft p-6" role="status">
      <h2 className="font-serif text-3xl text-ink">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Chip({
  pressed,
  label,
  onClick,
}: {
  pressed: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "min-h-12 rounded-lg px-3 text-left text-sm font-medium ring-1",
        pressed ? "bg-blue text-cream ring-blue" : "bg-paper text-ink ring-line",
      )}
    >
      {label}
    </button>
  );
}

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export function MedicalVolunteerForm() {
  const { tx } = useTx();
  const roles: { id: string; label: L }[] = [
    { id: "Physician", label: { en: "Physician", es: "Médico" } },
    { id: "Nurse practitioner", label: { en: "Nurse practitioner", es: "Enfermera practicante" } },
    { id: "Physician assistant", label: { en: "Physician assistant", es: "Asistente médico" } },
    { id: "Pharmacist", label: { en: "Pharmacist", es: "Farmacéutico" } },
    { id: "Nurse", label: { en: "Nurse", es: "Enfermería" } },
    { id: "Other licensed role", label: { en: "Other licensed role", es: "Otro rol con licencia" } },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [license, setLicense] = useState("");
  const [licenseState, setLicenseState] = useState("");
  const [languages, setLanguages] = useState("");
  const [availability, setAvailability] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !emailOk(email) || !phone.trim() || !role || !license.trim() || !licenseState.trim()) {
      setError(
        tx({
          en: "Name, email, phone, role, license type, and license state are required.",
          es: "El nombre, correo, teléfono, rol, tipo de licencia y estado de la licencia son necesarios.",
        }),
      );
      return;
    }
    setError("");
    if (website.trim()) {
      setSent(true);
      return;
    }
    setSending(true);
    try {
      await sendClinicMail({
        data: {
          inbox: "office",
          subject: "Medical volunteer interest",
          replyTo: email.trim(),
          trap: website,
          body: [
            "Medical volunteer interest — Canby Community Clinic",
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            `Phone: ${phone.trim()}`,
            `Role: ${role}`,
            `License type: ${license.trim()}`,
            `License state: ${licenseState.trim()}`,
            `Languages: ${languages.trim() || "(not given)"}`,
            `Availability: ${availability.trim() || "(not given)"}`,
          ].join("\n"),
        },
      });
      setSent(true);
    } catch {
      setError(tx({ en: "That did not send. Call (818) 674-4414.", es: "No se envió. Llame al (818) 674-4414." }));
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return <Sent title={tx({ en: "Sent.", es: "Enviado." })} body={tx({ en: "The clinic has your volunteer request.", es: "La clínica tiene su solicitud de voluntariado." })} />;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <Field label={tx({ en: "Full name", es: "Nombre completo" })}>
        <input className={inputClass} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "Email", es: "Correo" })}>
          <input className={inputClass} inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Field>
        <Field label={tx({ en: "Phone", es: "Teléfono" })}>
          <input className={inputClass} inputMode="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </Field>
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "Licensed role", es: "Rol con licencia" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {roles.map((item) => (
            <Chip key={item.id} pressed={role === item.id} label={tx(item.label)} onClick={() => setRole(item.id)} />
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "License type", es: "Tipo de licencia" })}>
          <input
            className={inputClass}
            value={license}
            placeholder={tx({ en: "MD, DO, NP, PA, RN, RPh…", es: "MD, DO, NP, PA, RN, RPh…" })}
            onChange={(event) => setLicense(event.target.value)}
          />
        </Field>
        <Field label={tx({ en: "License state", es: "Estado de la licencia" })}>
          <input className={inputClass} value={licenseState} placeholder="CA" onChange={(event) => setLicenseState(event.target.value)} />
        </Field>
      </div>
      <Field label={tx({ en: "Languages", es: "Idiomas" })}>
        <input className={inputClass} value={languages} onChange={(event) => setLanguages(event.target.value)} />
      </Field>
      <Field label={tx({ en: "When you can be here", es: "Cuándo puede estar aquí" })}>
        <textarea className={cn(inputClass, "min-h-24 py-3")} maxLength={280} value={availability} onChange={(event) => setAvailability(event.target.value)} />
      </Field>
      <Honeypot value={website} onChange={setWebsite} />
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue px-5 font-medium text-cream disabled:opacity-60">
        {sending ? tx({ en: "Sending…", es: "Enviando…" }) : tx({ en: "Submit", es: "Enviar" })}
      </button>
    </form>
  );
}

export function CommunityVolunteerForm() {
  const { tx } = useTx();
  const roles: { id: string; label: L }[] = [
    { id: "Registration", label: { en: "Registration", es: "Registro" } },
    { id: "Phones and scheduling", label: { en: "Phones and scheduling", es: "Teléfonos y citas" } },
    { id: "Interpretation", label: { en: "Interpretation", es: "Interpretación" } },
    { id: "Outreach", label: { en: "Outreach", es: "Alcance comunitario" } },
    { id: "Administration", label: { en: "Administration", es: "Administración" } },
    { id: "Another non-clinical role", label: { en: "Another non-clinical role", es: "Otro rol no clínico" } },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [languages, setLanguages] = useState("");
  const [availability, setAvailability] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !emailOk(email) || !phone.trim() || !role) {
      setError(tx({ en: "Name, email, phone, and role are required.", es: "El nombre, correo, teléfono y rol son necesarios." }));
      return;
    }
    setError("");
    if (website.trim()) {
      setSent(true);
      return;
    }
    setSending(true);
    try {
      await sendClinicMail({
        data: {
          inbox: "office",
          subject: "Volunteer interest",
          replyTo: email.trim(),
          trap: website,
          body: [
            "Volunteer interest — Canby Community Clinic",
            `Name: ${name.trim()}`,
            `Email: ${email.trim()}`,
            `Phone: ${phone.trim()}`,
            `Role: ${role}`,
            `Languages: ${languages.trim() || "(not given)"}`,
            `Availability: ${availability.trim() || "(not given)"}`,
          ].join("\n"),
        },
      });
      setSent(true);
    } catch {
      setError(tx({ en: "That did not send. Call (818) 674-4414.", es: "No se envió. Llame al (818) 674-4414." }));
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return <Sent title={tx({ en: "Sent.", es: "Enviado." })} body={tx({ en: "The clinic has your volunteer request.", es: "La clínica tiene su solicitud de voluntariado." })} />;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <Field label={tx({ en: "Full name", es: "Nombre completo" })}>
        <input className={inputClass} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "Email", es: "Correo" })}>
          <input className={inputClass} inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Field>
        <Field label={tx({ en: "Phone", es: "Teléfono" })}>
          <input className={inputClass} inputMode="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </Field>
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "How you want to help", es: "Cómo quiere ayudar" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {roles.map((item) => (
            <Chip key={item.id} pressed={role === item.id} label={tx(item.label)} onClick={() => setRole(item.id)} />
          ))}
        </div>
      </fieldset>
      <Field label={tx({ en: "Languages", es: "Idiomas" })}>
        <input className={inputClass} value={languages} onChange={(event) => setLanguages(event.target.value)} />
      </Field>
      <Field label={tx({ en: "When you are usually free", es: "Cuándo suele estar disponible" })}>
        <textarea className={cn(inputClass, "min-h-24 py-3")} maxLength={280} value={availability} onChange={(event) => setAvailability(event.target.value)} />
      </Field>
      <Honeypot value={website} onChange={setWebsite} />
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green px-5 font-medium text-cream disabled:opacity-60">
        {sending ? tx({ en: "Sending…", es: "Enviando…" }) : tx({ en: "Submit", es: "Enviar" })}
      </button>
    </form>
  );
}

export function DonateForm() {
  const { tx } = useTx();
  const [cadence, setCadence] = useState<"once" | "monthly">("once");
  const once = ["25", "50", "100", "250", "500", "other"] as const;
  const monthly = ["10", "25", "50", "100", "250", "other"] as const;
  const amounts = cadence === "once" ? once : monthly;
  const funds: { id: string; label: L }[] = [
    { id: "Wherever it is needed", label: { en: "Wherever it is needed", es: "Donde haga falta" } },
    { id: "Medical supplies", label: { en: "Medical supplies", es: "Insumos médicos" } },
    { id: "Medications", label: { en: "Medications", es: "Medicamentos" } },
    { id: "Health education", label: { en: "Health education", es: "Educación en salud" } },
    { id: "Operations", label: { en: "Keeping the clinic open", es: "Mantener la clínica abierta" } },
  ];
  const [amount, setAmount] = useState("");
  const [other, setOther] = useState("");
  const [fund, setFund] = useState("Wherever it is needed");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const raw = amount === "other" ? other.trim() : amount;
    const n = Number(raw);
    if (!Number.isFinite(n) || n <= 0) {
      setError(tx({ en: "Choose an amount.", es: "Elija un monto." }));
      return;
    }
    setError("");
    const business = encodeURIComponent(clinic.emailOffice);
    const item = encodeURIComponent(`Canby Community Clinic — ${fund}`);
    const url =
      cadence === "monthly"
        ? `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=${business}&item_name=${item}&currency_code=USD&a3=${n}&p3=1&t3=M&src=1&no_shipping=1`
        : `https://www.paypal.com/donate?business=${business}&amount=${n}&currency_code=USD&item_name=${item}`;
    window.location.href = url;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "How you want to give", es: "Cómo quiere dar" })}</legend>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Chip pressed={cadence === "once"} label={tx({ en: "One time", es: "Una vez" })} onClick={() => { setCadence("once"); setAmount(""); }} />
          <Chip pressed={cadence === "monthly"} label={tx({ en: "Monthly", es: "Mensual" })} onClick={() => { setCadence("monthly"); setAmount(""); }} />
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "Amount you have in mind", es: "Monto que tiene en mente" })}</legend>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {amounts.map((item) => (
            <Chip
              key={item}
              pressed={amount === item}
              label={item === "other" ? tx({ en: "Other", es: "Otro" }) : cadence === "monthly" ? `$${item}/mo` : `$${item}`}
              onClick={() => setAmount(item)}
            />
          ))}
        </div>
        {amount === "other" ? (
          <input
            className={cn(inputClass, "mt-3")}
            inputMode="decimal"
            placeholder={tx({ en: "Amount", es: "Monto" })}
            value={other}
            onChange={(event) => setOther(event.target.value)}
          />
        ) : null}
      </fieldset>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "What you hope it supports", es: "Qué espera que apoye" })}</legend>
        <div className="mt-3 grid gap-2">
          {funds.map((item) => (
            <Chip key={item.id} pressed={fund === item.id} label={tx(item.label)} onClick={() => setFund(item.id)} />
          ))}
        </div>
      </fieldset>
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue px-5 font-medium text-cream">
        {tx({ en: "Donate with PayPal", es: "Donar con PayPal" })}
      </button>
    </form>
  );
}

function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="sr-only" aria-hidden="true">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" value={value} onChange={(event) => onChange(event.target.value)} />
      </label>
    </div>
  );
}

const groupTypes: { id: string; label: L }[] = [
  { id: "School", label: { en: "School", es: "Escuela", hy: "Դպրոց" } },
  { id: "Church", label: { en: "Church", es: "Iglesia", hy: "Եկեղեցի" } },
  { id: "Business", label: { en: "Business", es: "Negocio", hy: "Բիզնես" } },
  { id: "Public service", label: { en: "Public service", es: "Servicio público", hy: "Հանրային ծառայություն" } },
  { id: "Other", label: { en: "Other", es: "Otro", hy: "Այլ" } },
];

const groupNeeds: { id: string; label: L }[] = [
  { id: "School physicals", label: { en: "School physicals", es: "Exámenes escolares", hy: "Դպրոցական զննումներ" } },
  { id: "Health checkups", label: { en: "Health checkups", es: "Revisiones de salud", hy: "Առողջության ստուգումներ" } },
  { id: "Blood drive", label: { en: "Blood drive", es: "Donación de sangre", hy: "Արյան հանձնում" } },
  { id: "Health talk", label: { en: "Health talk", es: "Charla de salud", hy: "Առողջության զրույց" } },
  { id: "Not sure yet", label: { en: "Not sure yet", es: "Aún no sé", hy: "Դեռ վստահ չեմ" } },
];

export function GroupVisitForm() {
  const { tx } = useTx();
  const [kind, setKind] = useState("");
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [count, setCount] = useState("");
  const [dates, setDates] = useState("");
  const [note, setNote] = useState("");
  const [ack, setAck] = useState(false);
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function toggleNeed(id: string) {
    setNeeds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!kind || !org.trim() || !name.trim() || !emailOk(email) || !phone.trim() || needs.length === 0 || !ack) {
      setError(
        tx({
          en: "Organization, your name, phone, email, what you want, and the confirmation are required.",
          es: "La organización, su nombre, teléfono, correo, lo que quiere y la confirmación son necesarios.",
          hy: "Կազմակերպությունը, ձեր անունը, հեռախոսը, էլփոստը, ինչն եք ուզում, և հաստատումը պարտադիր են։",
        }),
      );
      return;
    }
    setError("");
    if (website.trim()) {
      setSent(true);
      return;
    }
    setSending(true);
    try {
      await sendClinicMail({
        data: {
          inbox: "office",
          subject: `Group visit request — ${org.trim()}`,
          replyTo: email.trim(),
          trap: website,
          body: [
            "Group visit request — Canby Community Clinic",
            `Type: ${kind}`,
            `Organization: ${org.trim()}`,
            `Contact: ${name.trim()}`,
            `Role: ${role.trim() || "(not given)"}`,
            `Phone: ${phone.trim()}`,
            `Email: ${email.trim()}`,
            `Place: ${place.trim() || "(not given)"}`,
            `Asked for: ${needs.join(", ")}`,
            `About how many people: ${count.trim() || "(not given)"}`,
            `Dates that might work: ${dates.trim() || "(not given)"}`,
            `Note: ${note.trim() || "(none)"}`,
          ].join("\n"),
        },
      });
      setSent(true);
    } catch {
      setError(
        tx({
          en: "That did not send. Call (818) 674-4414.",
          es: "No se envió. Llame al (818) 674-4414.",
          hy: "Չուղարկվեց։ Զանգեք (818) 674-4414։",
        }),
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <Sent
        title={tx({ en: "Sent.", es: "Enviado.", hy: "Ուղարկված է։" })}
        body={tx({
          en: "The office has your request. We will call to say what we can do, and set a date if it works.",
          es: "La oficina tiene su solicitud. Llamaremos para decir qué podemos hacer y fijar una fecha si encaja.",
          hy: "Գրասենյակը ստացել է ձեր հայտը։ Կզանգենք՝ ասելու ինչ կարող ենք անել, և կնշենք օր, եթե ստացվի։",
        })}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "What kind of group", es: "Qué tipo de grupo", hy: "Ինչ խումբ" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {groupTypes.map((item) => (
            <Chip key={item.id} pressed={kind === item.id} label={tx(item.label)} onClick={() => setKind(item.id)} />
          ))}
        </div>
      </fieldset>
      <Field label={tx({ en: "Organization", es: "Organización", hy: "Կազմակերպություն" })}>
        <input className={inputClass} value={org} onChange={(event) => setOrg(event.target.value)} autoComplete="organization" />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "Your name", es: "Su nombre", hy: "Ձեր անունը" })}>
          <input className={inputClass} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} />
        </Field>
        <Field label={tx({ en: "Your role", es: "Su cargo", hy: "Ձեր պաշտոնը" })}>
          <input
            className={inputClass}
            value={role}
            placeholder={tx({ en: "Principal, pastor, HR…", es: "Director, pastor, RR. HH.…", hy: "Տնօրեն, հովիվ, կադրեր…" })}
            onChange={(event) => setRole(event.target.value)}
          />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "Phone", es: "Teléfono", hy: "Հեռախոս" })}>
          <input className={inputClass} inputMode="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </Field>
        <Field label={tx({ en: "Email", es: "Correo", hy: "Էլփոստ" })}>
          <input className={inputClass} inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Field>
      </div>
      <Field label={tx({ en: "Where should we come", es: "A dónde debemos ir", hy: "Ուր գանք" })}>
        <input
          className={inputClass}
          value={place}
          placeholder={tx({ en: "Address or neighborhood", es: "Dirección o barrio", hy: "Հասցե կամ թաղամաս" })}
          onChange={(event) => setPlace(event.target.value)}
        />
      </Field>
      <fieldset>
        <legend className="text-sm font-medium text-ink">{tx({ en: "What you want", es: "Qué quiere", hy: "Ինչ եք ուզում" })}</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {groupNeeds.map((item) => (
            <Chip key={item.id} pressed={needs.includes(item.id)} label={tx(item.label)} onClick={() => toggleNeed(item.id)} />
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={tx({ en: "About how many people", es: "Más o menos cuántas personas", hy: "Մոտավոր քանի մարդ" })}>
          <input className={inputClass} inputMode="numeric" value={count} onChange={(event) => setCount(event.target.value)} />
        </Field>
        <Field label={tx({ en: "Dates that might work", es: "Fechas que podrían servir", hy: "Օրեր, որ կարող են ստացվել" })}>
          <input className={inputClass} value={dates} onChange={(event) => setDates(event.target.value)} />
        </Field>
      </div>
      <Field label={tx({ en: "Anything else", es: "Algo más", hy: "Այլ բան" })}>
        <textarea
          className={cn(inputClass, "min-h-24 py-3")}
          maxLength={500}
          value={note}
          placeholder={tx({
            en: "No names of students or members. No medical details.",
            es: "Sin nombres de estudiantes o miembros. Sin datos médicos.",
            hy: "Առանց աշակերտների կամ անդամների անունների։ Առանց բժշկական մանրամասների։",
          })}
          onChange={(event) => setNote(event.target.value)}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 size-4" checked={ack} onChange={(event) => setAck(event.target.checked)} />
        <span>
          {tx({
            en: "This is a request, not a confirmed date. I will not include anyone’s medical information.",
            es: "Esto es una solicitud, no una fecha confirmada. No incluiré información médica de nadie.",
            hy: "Սա հայտ է, ոչ հաստատված օր։ Ոչ մեկի բժշկական տեղեկություն չեմ ներառի։",
          })}
        </span>
      </label>
      <Honeypot value={website} onChange={setWebsite} />
      {error ? <p className="text-sm text-danger">{error}</p> : null}
      <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-lg bg-green px-5 font-medium text-cream disabled:opacity-60">
        {sending
          ? tx({ en: "Sending…", es: "Enviando…", hy: "Ուղարկվում է…" })
          : tx({ en: "Send the request", es: "Enviar la solicitud", hy: "Ուղարկել հայտը" })}
      </button>
    </form>
  );
}

