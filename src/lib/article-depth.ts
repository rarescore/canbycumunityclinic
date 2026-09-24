import type { L } from "@/components/site/i18n";
type Section = { h: L; p: L };
const s = (h: L, p: L): Section => ({ h, p });

export const articleDepth: Record<string, Section[]> = {
  "why-primary-care": [
    s(
      { en: "What the visit is for", es: "Para qué es la visita" },
      {
        en: "Primary care is the visit you can repeat. It is not a one-time booth and it is not an emergency department. At Canby Community Clinic, a nonprofit office at 7601 Canby Ave #6B in Reseda, a doctor, nurse practitioner, or physician assistant looks at the concern you have now, the medicines you actually take, and the illnesses you already know about. Blood pressure may be checked. A conversation about diabetes risk may happen. You will not finish every test that exists. You should leave knowing the next step, or that the next step is a different office.",
        es: "Para qué es la visita. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Why people put it off", es: "Por qué se pospone" },
      {
        en: "People skip this visit for ordinary reasons: no insurance, a job that will not give the morning off, no one to watch a child, or a last appointment that felt rushed. Those reasons are real. They are also why the phone call matters. Call (818) 674-4414 on a weekday between 9 and 5. Say what you need in plain words. Staff will say whether the clinic can see you. A form on this website is not a confirmed time. More than 400 patients have started this way, and the number is growing, so the schedule is not something a webpage can promise.",
        es: "Por qué se pospone. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What to bring", es: "Qué traer" },
      {
        en: "Bring a photo ID if you have one, your insurance or Medi-Cal card if you have coverage, and every medicine bottle or a written list that includes store-bought pills, vitamins, and supplements. Bring your pharmacy’s phone number and two questions written down. If you have old lab papers, bring those. Do not email symptoms or results to a general inbox. If you have chest pain, trouble breathing, sudden weakness, heavy bleeding, or you might pass out, call 911. Suite 6B is for planned care.",
        es: "Qué traer. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What you should leave knowing", es: "Con qué debe irse" },
      {
        en: "A useful primary care visit names one problem, checks the medicines that touch that problem, and decides whether to watch, treat, test, or send you on. Screening is a question asked of someone without symptoms. Diagnosis answers a question raised by a symptom or an abnormal result. One blood pressure reading does not name a disease. The clinician decides whether to repeat it. Outside labs are a separate stop. Ask where the test is done before you go. This page is information for people in Reseda, Winnetka, Canoga Park, Northridge, and Lake Balboa. It is not a diagnosis and it does not enroll you in a plan.",
        es: "Con qué debe irse. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "If you have not had a clinician in a long time, say that on the first call. You do not need to arrive with a diagnosis. You need the story you can tell: what hurts or what worries you, what you take, and what you hope happens today. The nonprofit clinic will not finish a lifetime of postponed care in one hour. It can start the list. Ask which item is first. Ask what to bring. Then come at the confirmed time to suite 6B. That is the whole path, and it is the one that works.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "Ask the clinician to say the plan in one sentence before you leave. Repeat it back. If you cannot repeat it, you do not have it yet. That single check saves a second phone call and a wasted week of the wrong medicine.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
  "preventive-screenings": [
    s(
      { en: "What screening means", es: "Qué significa una evaluación" },
      {
        en: "A screening looks for a problem before you feel sick. It is not a full-body scan and it is not a promise that nothing is wrong. At a nonprofit community clinic the useful screenings are the ones that change a decision: blood pressure, a conversation about diabetes risk, cholesterol when a clinician orders it, and the cancer screenings that fit your age. Canby Community Clinic is at 7601 Canby Ave #6B, Reseda. Call (818) 674-4414 weekdays from 9 to 5 and say which check you think you need. Staff will say whether that check is done in the room, arranged outside, or better done at another office.",
        es: "Qué significa una evaluación. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Pressure, sugar, and cholesterol", es: "Presión, azúcar y colesterol" },
      {
        en: "Blood pressure is read with a cuff. One high number in a noisy morning is not a diagnosis of hypertension. Clinicians look at repeated readings, your medicines, and how you feel. Home numbers help if you write the date next to them. Diabetes risk is a conversation about thirst, weight change, family history, and sometimes a lab test. A finger-stick on a kitchen table is not the same as an A1C drawn and run properly. Cholesterol is a blood test, usually fasting only if the order says so. Ask before you skip breakfast. Not every test is drawn in suite 6B. Ask where it is done.",
        es: "Presión, azúcar y colesterol. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Cancer checks are not one package", es: "Las pruebas de cáncer no son un paquete" },
      {
        en: "Cervical, breast, and colon screening follow age and history, not a coupon. This page will not invent a calendar for you. A clinician who knows your age and your last test can say what is due. If you have not been seen in years, start with the phone, not with a list of every test you have read about. Bring prior results if you still have the paper. More than 400 patients use this clinic and the number is growing, which means a screening day still has to be scheduled. Do not arrive and expect every test the same afternoon.",
        es: "Las pruebas de cáncer no son un paquete. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Call before you come", es: "Llame antes de venir" },
      {
        en: "Insurance, Medi-Cal, or no card at all: call before you come. This website does not publish a plan list and it does not enroll you in Covered California. Bring an ID if you have one and a medicine list. Write the question you do not want to forget. If you are in severe pain, short of breath, or suddenly weak, call 911. Screening is for a stable day. The clinic is a nonprofit weekday office, not an emergency department, and this website is not monitored after hours.",
        es: "Llame antes de venir. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "Write down the last year you remember for each check, even if the year is a guess. Bring that note. A clinician can order what is missing and skip what was done recently somewhere else. Repeating a test because the paper was lost is common and wasteful. If the result has to come from an outside lab, ask how you will hear it and where it is done. Do not assume the clinic will call the same day. Ask. Screening only helps if the result reaches a person who can explain it.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "If a screening is not offered in this room, ask for the name of the place, the phone number, and whether you need an order in your hand. A vague instruction to go get a test is how screenings get lost.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
  "schedule-a-checkup": [
    s(
      { en: "How the time gets set", es: "Cómo se fija la hora" },
      {
        en: "A checkup is a planned visit, not a walk-in. Canby Community Clinic schedules on weekdays, 9 to 5, at 7601 Canby Ave #6B in Reseda. Call (818) 674-4414. Say whether you are a new patient, whether you have insurance or Medi-Cal, and what you want the visit to cover: blood pressure, diabetes risk, medicines, or a problem you can name in ordinary words. A message on this website only asks the clinic to call you. The time is real when a person confirms it. If you need to cancel, call early so the opening can go to someone else. If you are running late, call before you arrive.",
        es: "Cómo se fija la hora. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "The day before", es: "El día anterior" },
      {
        en: "Before the day, put your medicines in a bag or write the names, including pills from the store, vitamins, and supplements. Add the pharmacy phone number. Find a photo ID if you have one and an insurance card if you have coverage. No card is still a reason to call. Find old lab results or discharge papers if they are already in the house. Write two or three questions. Sleep and eat as you normally do unless someone told you to fast for a specific test. Do not fast because a webpage suggested it. Fasting is for an order, not for a guess.",
        es: "El día anterior. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What happens in the room", es: "Qué pasa en el consultorio" },
      {
        en: "On the day, allow time for parking and check-in. The suite is 6B. Tell the front desk the name on the appointment and the reason you came, in short form. You do not need to retell your whole life in the lobby. In the room, the clinician will ask what changed, what you take, and what you want from this visit. Measurements are done when they change the plan. You should leave with a named next step: a treatment, a test, a follow-up, a referral, or a clear statement that the next step is another office. If the answer is not here, that is said out loud.",
        es: "Qué pasa en el consultorio. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Language and emergencies", es: "Idioma y emergencias" },
      {
        en: "The visit is confirmed on the phone, not assumed from the word community. The clinic is a nonprofit 501(c)(3). More than 400 patients have been seen, and the panel is growing, so same-day promises are not made on this page. English and Spanish are spoken. If you need an interpreter, say so when you book. Do not send symptoms, diagnoses, or member ID numbers by ordinary email. If this is an emergency, call 911. A checkup is for a problem that can wait until the confirmed hour.",
        es: "Idioma y emergencias. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "If you are booking for a parent or another adult, say so, and be ready to have that person speak for themselves when the clinic calls. The clinic needs a working phone number and a time of day they can answer. A missed callback is the most common way a request dies. Check the phone. If the number on the form is wrong, call the clinic yourself at (818) 674-4414 and correct it. The visit cannot be confirmed by silence.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "Put the confirmed day on a calendar the same hour the clinic says it. Set an alarm the evening before to gather the medicine bottles. Most missed visits are not a mystery. They are a time that never left the phone call.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
  "what-primary-care-does": [
    s(
      { en: "Problems this visit can hold", es: "Problemas que esta visita puede atender" },
      {
        en: "Primary care handles the problems that are common and the problems that need a decision before a specialist. A cough that stayed, a rash, a medicine that makes you dizzy, a blood pressure you have been ignoring, a refill you do not understand. The clinician looks, decides whether to watch, treat, test, or send you on, and says which of those is today. Canby Community Clinic does that work with doctors, nurse practitioners, physician assistants, nurses, and the front desk. The office is a nonprofit clinic at 7601 Canby Ave #6B, Reseda. Call (818) 674-4414 weekdays, 9 to 5.",
        es: "Problemas que esta visita puede atender. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What is sent somewhere else", es: "Lo que se envía a otro lugar" },
      {
        en: "What primary care does not do is every procedure, every scan, and every emergency. A test that has to be done in a hospital is arranged, not improvised in suite 6B. A specialist visit needs a reason. The clinic can say whether a referral is the next step and what information that office will want. It will not pretend a referral is already booked if it is not. Dental emergencies, major injuries, and chest pain belong in the right emergency setting. Call 911 for those. This website is not watched for emergencies.",
        es: "Lo que se envía a otro lugar. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "The medicine list decides a lot", es: "La lista de medicamentos decide mucho" },
      {
        en: "A good visit starts with the medicine list. Bring the bottles if a written list is hard. Include inhalers, creams, eye drops, and the pills you take only sometimes. The clinician cannot reconcile a list that stayed at home. Bring readings you wrote down, with the date. One rushed number does not become a plan. If you do not have insurance, say so. If you have Medi-Cal, bring the card and still ask whether this office is the right one for that plan. The website does not publish a plan list because the answer depends on your card and the day.",
        es: "La lista de medicamentos decide mucho. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Leave with one next step", es: "Váyase con un siguiente paso" },
      {
        en: "After the visit you should be able to say what changed: a medicine to start or stop, a test to complete, a date to come back, or a different clinic to call. If you are unsure, ask before you stand up. More than 400 patients have used this clinic and the number is growing. That is a reason to schedule, not a reason to walk in and wait. New patients are booked when the service and the staffing line up. Ask. Do not assume the chair is open because the door is unlocked on a weekday.",
        es: "Váyase con un siguiente paso. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "Specialty physicians are part of the staff, and they are still scheduled. Do not expect every specialty on the afternoon you call about a sore throat. Ask which clinician fits the problem. Nurses and medical assistants are part of the same visit: rooming, measurements, and the instructions you leave with. Reception is who confirms the time. Use them. Do not treat the website as the front desk. The front desk is a person, on the phone, on a weekday.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "If the clinician changes a medicine, ask what to do with the old bottle. Taking both is a common mistake. Ask when to come back if you feel worse, and what worse means for this particular medicine, not in general. Write the new dose on the bottle you are keeping, in your own handwriting, before you leave the room. A label you cannot read is how the wrong pill gets taken on Thursday.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
  "screenings-for-women": [
    s(
      { en: "Matched to age, not to a slogan", es: "Según la edad, no según un lema" },
      {
        en: "Screening for women is a set of checks matched to age and history, not a single package with a pink ribbon on it. Blood pressure, diabetes risk, cholesterol when it is ordered, cervical cancer screening, breast cancer screening, and colon cancer screening each have their own timing. Canby Community Clinic, a nonprofit office in Reseda at 7601 Canby Ave #6B, can talk through what is due and what has to be done somewhere else. Call (818) 674-4414 weekdays from 9 to 5. Say your age and the last test you remember. If you do not remember, say that. A guess is less useful than an honest gap.",
        es: "Según la edad, no según un lema. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Cervical, breast, and colon checks", es: "Pruebas de cuello uterino, mama y colon" },
      {
        en: "Cervical screening is a test of the cervix, on a schedule that depends on age and on previous results. It is not done because a website said this is the year. Breast screening is imaging, usually not performed inside a small exam room. The clinic can discuss whether you are due and where the test is done. Colon screening has more than one method. The right one depends on age, family history, and what you are willing to complete. None of these pages replaces the conversation. Bleeding that is new, a lump you can feel, or pain that is severe is not a screening topic. Call the clinic the same day, or call 911 if you are faint, short of breath, or bleeding heavily.",
        es: "Pruebas de cuello uterino, mama y colon. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Ask about pregnancy care on the phone", es: "Pregunte por el embarazo por teléfono" },
      {
        en: "Pregnancy testing, prenatal care, and contraception are questions to ask on the phone before you assume they are offered in suite 6B. The clinic will say yes, no, or not this service. Do not wait on a blog post for that answer. If you might be pregnant and you are bleeding or in severe pain, seek urgent care or call 911. Bring a medicine list either way. Some medicines matter in pregnancy and some blood pressure medicines are the wrong choice. The bottles tell the truth better than memory.",
        es: "Pregunte por el embarazo por teléfono. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Papers and a real time", es: "Papeles y una hora real" },
      {
        en: "Coverage still have to be asked. Medi-Cal, private insurance, or no insurance: call and say which one is yours. This site does not enroll you and does not list every plan. Bring an ID if you have it. Bring prior Pap or mammogram papers if they are in a folder at home. Write the question down. More than 400 patients are in this clinic’s care and the number is growing, so a screening visit is scheduled, not assumed. English and Spanish are spoken. Ask for an interpreter when you book if you need one.",
        es: "Papeles y una hora real. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "If a previous test was abnormal, bring that paper or the name of the office that has it. An abnormal Pap or mammogram changes the next step, and a clinician should not have to start from zero. If you are afraid of the test, say that too. Fear is a reason to plan the visit, not a reason to disappear for five years. The clinic can tell you what the test actually involves. Most of the dread is the version people trade in waiting rooms, not the version a clinician describes.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

  ],
  "early-detection": [
    s(
      { en: "A useful check, not every scan", es: "Una prueba útil, no todos los estudios" },
      {
        en: "Early detection means finding a problem while there is still a useful choice. It does not mean scanning a healthy person for every disease with a name. The checks with the best reason are the ones tied to age and risk: blood pressure, diabetes, certain cancers, and cholesterol when a clinician orders the blood test. Canby Community Clinic talks through those checks at 7601 Canby Ave #6B in Reseda. It is a nonprofit weekday clinic. Call (818) 674-4414 between 9 and 5. Say what you are worried about in ordinary words. A request on the website is not an appointment until a person confirms the time.",
        es: "Una prueba útil, no todos los estudios. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What the numbers do and do not mean", es: "Qué significan y qué no significan los números" },
      {
        en: "Blood pressure that stays high can damage vessels, kidneys, and the heart over years, which is why a single scary reading should be repeated rather than ignored or treated from a headline. Diabetes that is found before the thirst and the weight loss is easier to plan for. An A1C is a lab test that reflects roughly three months of sugar, not a number you can invent from how tired you feel. Cancer screening finds some cancers early and misses others. A normal screen is not a permission slip to skip the next one, and an abnormal screen is not a diagnosis by itself. The next test is what names it.",
        es: "Qué significan y qué no significan los números. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Bring the old paper", es: "Traiga el papel viejo" },
      {
        en: "Bring the last results you have, even if they are old. A paper from three years ago is more useful than a memory of someone saying you were fine. Bring medicines. A drug for blood pressure or diabetes changes what the new numbers mean. If you have a family history, say who had the illness and about how old they were. You do not need a perfect family tree. You need the fact you actually know. If you have no insurance, call anyway. Ask whether we can see you. Do not assume it is free because the clinic is a nonprofit.",
        es: "Traiga el papel viejo. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Do not wait if you are suddenly ill", es: "No espere si se enferma de pronto" },
      {
        en: "Do not wait for a screening appointment if you are suddenly much sicker. Chest pain, a one-sided weakness, trouble speaking, trouble breathing, or bleeding you cannot stop is a 911 problem. Early detection is for a morning when you can sit and talk. More than 400 patients have come to this clinic, and the number is growing. The way in is still a phone call, a confirmed time, and a visit where the next step is said out loud. This article is education for the west San Fernando Valley. It does not diagnose you.",
        es: "No espere si se enferma de pronto. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "Keep a one-page list at home: medicines, allergies, major illnesses, and the last screening you remember. Update it when something changes. Bring the same page every time so the story does not depend on memory at 9 in the morning. If a result is abnormal, ask what the next test is, where it is done, and where it is done. Early detection fails when the first abnormal result sits in a portal nobody opens. Ask how you will hear it. Write the answer down before you leave suite 6B.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "Share the result with the person who helps you keep appointments, if you want them to know. A date on a card in a wallet works better than a promise to remember. Early detection is a series of ordinary errands, not a single dramatic visit.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
  "community-clinics-reseda": [
    s(
      { en: "This office, on a weekday", es: "Esta oficina, en un día de semana" },
      {
        en: "A community clinic is a local office you can call again, not a tent that leaves on Monday. Canby Community Clinic continues the work that started as Pura Vida. It is a nonprofit 501(c)(3) at 7601 Canby Ave #6B, Reseda, CA 91335. Weekdays 9 to 5. Phone (818) 674-4414. The staff includes primary care physicians, specialty physicians, nurse practitioners, physician assistants, nurses, medical assistants, and reception. The visit is scheduled. Walk-ins are not the plan. If you live in Reseda, Winnetka, Canoga Park, Northridge, Lake Balboa, or Tarzana, this is the number to ask whether the clinic can see you.",
        es: "Esta oficina, en un día de semana. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "Three things people mix up", es: "Tres cosas que la gente confunde" },
      {
        en: "People use the phrase community clinic to mean three different things: a free weekend fair, a large federally qualified health center, and a smaller nonprofit office. Those are not interchangeable. Ask which one you are calling. Ask whether your Medi-Cal plan is one this office can use. Canby does not publish a plan list on the website because the honest answer depends on your card. No insurance is still a reason to call. The clinic exists for people who have had trouble getting in. Insurance status does not, by itself, decide whether you can be seen. Ask before you come, so nothing is a surprise at the desk.",
        es: "Tres cosas que la gente confunde. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "What you can ask for", es: "Qué puede pedir" },
      {
        en: "What you can ask for is primary care, screenings such as blood pressure and diabetes risk, help arranging a basic test, questions about medicines, and a plain explanation of the next step. What you should not expect is an emergency department, a promise that every specialist is in the building, or a same-day opening just because you drove over. More than 400 patients have been cared for here and the number is growing. That is why the schedule is confirmed by a person. Bring an ID if you have one, medicines or a list, an insurance card if you have coverage, and your questions. English and Spanish are spoken.",
        es: "Qué puede pedir. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "The other numbers are not this clinic", es: "Los otros números no son esta clínica" },
      {
        en: "Other public tools sit next to the clinic, not inside it. 211 LA for food and housing. Covered California for marketplace coverage and Medi-Cal information. The 988 line for a mental health crisis. 911 for a medical emergency. Those are not appointments at suite 6B. If you want this clinic, call this clinic. Do not send medical records, Social Security numbers, or insurance member numbers through ordinary email or a general form. Say that you need a person to call you back. Then wait for the time. A community clinic works when the next visit is a real hour on a real day.",
        es: "Los otros números no son esta clínica. Canby Community Clinic, 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414, de lunes a viernes, de 9 a 5. Esta página informa. No diagnostica. Una solicitud en el sitio no es una cita confirmada. Si es una emergencia, llame al 911.",
      },
    ),
    s(
      { en: "One more practical point", es: "Un punto práctico más" },
      {
        en: "Parking and the entrance are easier if you ask when the time is confirmed. The address is 7601 Canby Ave, suite 6B, Reseda, CA 91335. If you need a visit without stairs, say so on the phone. Hours can change on a holiday. Call before you drive across the Valley. The clinic is nonprofit, the care is scheduled, and the phone is (818) 674-4414. That is the practical version of community: a place that answers, a time that is real, and a next step you can repeat.",
        es: "Canby Community Clinic está en 7601 Canby Ave #6B, Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5. Confirme la hora y traiga sus medicamentos. Esto no es un diagnóstico. En una emergencia, llame al 911.",
      },
    ),

    s(
      { en: "Before you hang up", es: "Antes de colgar" },
      {
        en: "If this clinic is not the right fit, ask for the kind of office that is. A clear no is more useful than a polite maybe. You should not spend a month waiting on a visit that was never going to happen here.",
        es: "Antes de colgar, repita la hora y qué debe traer. Canby Community Clinic, Reseda, (818) 674-4414.",
      },
    ),

  ],
};
