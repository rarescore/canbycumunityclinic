import type { L } from "@/components/site/i18n";
import { moreArticles } from "@/lib/articles-more";

export type Article = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: L;
  lede: L;
  image: string;
  imageAlt: L;
  source: string;
  sourceLabel: string;
  service: string;
  sections: { h: L; p: L }[];
};

export const articles: Article[] = [
  {
    slug: "clinic-without-insurance",
    seoTitle: "Clinic Without Insurance in Reseda | Canby",
    seoDescription:
      "How to see a clinician in Reseda if you do not have insurance. Canby Community Clinic, 7601 Canby Ave #6B. Call (818) 674-4414. A visit is not automatically free.",
    title: { en: "Where to go in Reseda if you do not have insurance", es: "A dónde ir en Reseda si no tiene seguro" },
    lede: {
      en: "You can call a community clinic without a card in your wallet. That call tells you whether this clinic can see you.",
      es: "Puede llamar a una clínica comunitaria sin una tarjeta en la cartera. Esa llamada no promete una visita. Le dice si esta clínica puede atenderle.",
    },
    image: "/media/articles/clinic-without-insurance.jpg",
    imageAlt: {
      en: "A woman calls from a kitchen table with a blank notebook.",
      es: "Una mujer llama desde una mesa de cocina con un cuaderno en blanco.",
    },
    source: "https://www.coveredca.com/",
    sourceLabel: "Covered California",
    service: "primary-care",
    sections: [
      {
        h: { en: "Call before you travel", es: "Llame antes de viajar" },
        p: {
          en: "Canby Community Clinic is a nonprofit office at 7601 Canby Ave #6B in Reseda. Call (818) 674-4414 on weekdays from 9 to 5 before you make the trip. Say that you do not have insurance and name the kind of visit you need. A checkup, a blood pressure check, a medicine question, or an unsure first call are all fine. Ask whether there is an opening and whether there is an opening. This page does not set the visit on a webpage. Staff do. A nonprofit clinic is not the same thing as a promise that the visit is free. People call from Canoga Park, Winnetka, Northridge, Lake Balboa, and Tarzana as well as Reseda. Walking in without a time is not a plan if the schedule is already full. Leave symptoms off any website form and say them on the phone instead.",
          es: "Canby Community Clinic es una oficina sin fines de lucro en 7601 Canby Ave #6B, en Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5, antes de hacer el viaje. Diga que no tiene seguro y nombre el tipo de visita que necesita. Una revisión, una medida de la presión, una pregunta sobre un medicamento o una primera llamada si no está seguro son formas válidas de empezar. Pregunte si hay un espacio. Esta página no fija la visita en una página web. Lo hace el personal. Llaman personas de Canoga Park, Winnetka, Northridge, Lake Balboa y Tarzana, además de Reseda. Llegar sin una hora no es un plan si el horario ya está lleno. Deje los síntomas fuera de cualquier formulario del sitio y dígalos por teléfono.",
        },
      },
      {
        h: { en: "Not a weekend free clinic", es: "No es una clínica gratis de fin de semana" },
        p: {
          en: "Los Angeles sometimes hosts a large free clinic for a weekend. Those events are not this office, and they are not open on an ordinary Tuesday. A community clinic is a place you can call again when the question is still there. Eligibility, staffing, and the schedule can still change from one month to the next. Do not assume you will be seen for free because the word community is on the sign. If a flyer or a social post names a date, treat it as out of date until staff confirm it. This clinic does not publish a list of insurance plans it accepts. Not having a card does not, by itself, decide whether you can be seen. Having a card does not decide that either until someone checks the visit with you. Ask on the phone, then decide whether the trip to suite 6B makes sense.",
          es: "A veces Los Ángeles organiza una clínica gratuita grande durante un fin de semana. Esos eventos no son esta oficina y no están abiertos un martes cualquiera. Una clínica comunitaria es un lugar al que puede volver a llamar cuando la pregunta sigue ahí. La elegibilidad, el personal y el horario pueden cambiar de un mes a otro. No suponga que lo atenderán gratis porque la palabra comunitaria está en el letrero. Si un volante o una publicación nombra una fecha, trátese como algo desactualizado hasta que el personal lo confirme. Esta clínica no publica una lista de planes de seguro que acepte. No tener tarjeta, por sí solo, no decide si puede ser atendido. Tener tarjeta tampoco lo decide hasta que alguien revise la visita con usted. Pregunte por teléfono y luego decida si el viaje a la suite 6B tiene sentido.",
        },
      },
      {
        h: { en: "Look up coverage yourself", es: "Consulte la cobertura usted mismo" },
        p: {
          en: "Covered California is the state marketplace where many people shop for a health plan. Medi-Cal is California’s Medicaid program for people who qualify based on income and other rules. Applying for either one is separate from booking a visit at this clinic. This office does not process that application and does not see your case file. If you want the official starting point, use coveredca.com or the state Medi-Cal pages at dhcs.ca.gov. If you want help understanding which door is which, call and say that in plain words. Do not put a Social Security number or a medical history into a form on this website. A website request is not a confirmed visit, and it is not an application for coverage. Staff can tell you what to bring if you already started an application. They cannot tell you that you are enrolled, because that decision is not made here.",
          es: "Covered California es el mercado del estado donde muchas personas buscan un plan de salud. Medi-Cal es el programa Medicaid de California para personas que califican según el ingreso y otras reglas. Solicitar cualquiera de los dos es aparte de pedir una visita en esta clínica. Esta oficina no tramita esa solicitud y no ve su expediente. Si quiere el punto de partida oficial, use coveredca.com o las páginas estatales de Medi-Cal en dhcs.ca.gov. Si quiere ayuda para entender cuál puerta es cuál, llame y dígalo con palabras sencillas. No ponga un número de Seguro Social ni una historia médica en un formulario de este sitio. Una solicitud en el sitio web no es una visita confirmada ni una solicitud de cobertura. El personal puede decirle qué traer si ya empezó una solicitud. No puede decirle que ya está inscrito, porque esa decisión no se toma aquí.",
        },
      },
      {
        h: { en: "What a visit can cover", es: "Qué puede cubrir una visita" },
        p: {
          en: "A visit here is primary care, not a diagnosis written from a webpage. The clinician can talk about blood pressure, diabetes risk, and other screening questions. You can ask about a medicine you already take, including pills you bought yourself. You can ask for help arranging a basic test when that test is the right next step. Many blood tests are drawn somewhere else, and that site may be done at another site. Ask where the test happens before you agree to it. The visit should end with a next step you can repeat in your own words. If the service is not offered in this suite, ask where people in the west Valley usually go next. That answer may be another office, not a promise that this clinic does every test. Bring a written question so the short visit is spent on the thing you came for.",
          es: "Una visita aquí es atención primaria, no un diagnóstico escrito desde una página web. El clínico puede hablar de la presión arterial, el riesgo de diabetes y otras preguntas de evaluación. Puede preguntar por un medicamento que ya toma, incluidas pastillas que compró usted. Puede pedir ayuda para coordinar una prueba básica cuando esa prueba es el siguiente paso correcto. Muchos análisis de sangre se hacen en otro lugar, y ese sitio puede hacerse en otro sitio. Pregunte dónde se hace la prueba y dónde se hace antes de aceptarla. La visita debe terminar con un siguiente paso que usted pueda repetir con sus propias palabras. Si el servicio no se ofrece en esta suite, pregunte adónde suele ir después la gente del oeste del Valle. Esa respuesta puede ser otra oficina, no una promesa de que esta clínica hace todas las pruebas. Traiga una pregunta escrita para que la visita corta se use en lo que vino a resolver.",
        },
      },
      {
        h: { en: "What this page will not do", es: "Qué no hará esta página" },
        p: {
          en: "This page will not diagnose you, and it will not tell you to start or stop a medicine. A single article cannot set a treatment goal, because goals depend on age, other illnesses, and medicines. It will not promise that every person without insurance is seen the same week. It will not promise that a laboratory, a pharmacy, or an imaging center does every test. Canby Community Clinic is not an emergency department. Chest pain, trouble breathing, sudden weakness, trouble speaking, fainting, or bleeding you cannot stop is a reason to call 911. Do not drive to 7601 Canby Ave #6B for those problems. The website is not watched at night or on Saturday and Sunday. Weekday hours are 9 to 5, and a closed door is not a backup for an emergency. If the problem can wait for a planned visit, call (818) 674-4414 and ask for a time.",
          es: "Esta página no le diagnostica y no le dice que empiece o deje un medicamento. Un solo artículo no puede fijar una meta de tratamiento, porque las metas dependen de la edad, otras enfermedades y los medicamentos. No promete que toda persona sin seguro sea atendida la misma semana. No promete que un laboratorio, una farmacia o un centro de imágenes hace todas las pruebas. Canby Community Clinic no es una sala de emergencias. Dolor de pecho, dificultad para respirar, debilidad súbita, dificultad para hablar, desmayo o un sangrado que no puede detener es motivo para llamar al 911. No conduzca a 7601 Canby Ave #6B por esos problemas. El sitio no se vigila de noche ni el sábado y el domingo. El horario de lunes a viernes es de 9 a 5, y una puerta cerrada no es un respaldo para una emergencia. Si el problema puede esperar una visita planeada, llame al (818) 674-4414 y pida una hora.",
        },
      },
      {
        h: { en: "How the call should go", es: "Cómo debe ir la llamada" },
        p: {
          en: "Have a phone number where staff can reach you, and say whether you prefer English or Spanish. Give your name and the neighborhood you are coming from only if it helps with the time of day. You do not need a perfect medical story to ask for the visit. You do need enough detail for staff to know this is not a 911 problem. If you are unsure, describe the problem in ordinary words and let them tell you the right door. Ask what to bring, such as identification and a list of medicines, if you have them. Ask what to do if you need to cancel. Write down the day and the time only after a person confirms them. A message left on a form is a request, not that confirmation. If nobody has called you back, call the clinic again during weekday hours rather than arriving unannounced.",
          es: "Tenga un teléfono donde el personal pueda localizarle, y diga si prefiere inglés o español. Dé su nombre y el vecindario del que viene solo si ayuda con la hora del día. No necesita una historia médica perfecta para pedir la visita. Sí necesita el detalle suficiente para que el personal sepa que esto no es un problema del 911. Si no está seguro, describa el problema con palabras sencillas y deje que le indiquen la puerta correcta. Pregunte qué traer, como una identificación y una lista de medicamentos, si las tiene. Pregunte qué hacer si necesita cancelar. Anote el día y la hora solo después de que una persona los confirme. Un mensaje dejado en un formulario es una solicitud, no esa confirmación. Si nadie le ha devuelto la llamada, vuelva a llamar a la clínica en horario de lunes a viernes en lugar de llegar sin avisar.",
        },
      },
    ],
  },
  {
    slug: "medi-cal",
    seoTitle: "Medi-Cal Clinic Near Reseda | Call First",
    seoDescription:
      "Does Canby Community Clinic take Medi-Cal? We do not publish a plan list. Call (818) 674-4414 with the name of your coverage. Reseda, weekdays 9–5.",
    title: { en: "If you have Medi-Cal, call before you assume yes or no", es: "Si tiene Medi-Cal, llame antes de suponer que sí o que no" },
    lede: {
      en: "People search “Medi-Cal clinic near me” because a card is not the same as an appointment. This page will not pretend we have checked your plan.",
      es: "La gente busca “clínica de Medi-Cal cerca de mí” porque una tarjeta no es lo mismo que una cita. Esta página no va a fingir que revisamos su plan.",
    },
    image: "/media/articles/medi-cal.jpg",
    imageAlt: {
      en: "Hands beside a blank card turned face down.",
      es: "Manos junto a una tarjeta en blanco boca abajo.",
    },
    source: "https://www.dhcs.ca.gov/",
    sourceLabel: "California DHCS",
    service: "navigation",
    sections: [
      {
        h: { en: "A logo is not an answer", es: "Un logotipo no es una respuesta" },
        p: {
          en: "Health plans change their networks, and a logo on a clinic website can outlive the agreement that put it there. Canby Community Clinic does not publish a list of accepted plans for that reason. A picture of a card would look like a yes the clinic has not confirmed for you. When you call (818) 674-4414, say the name printed on your card and the kind of visit you need. Staff at 7601 Canby Ave #6B in Reseda can tell you whether that changes anything for an appointment. Bring the card if you are told to bring it. Do not photograph the card into an email or into a form on this website. Member numbers and dates of birth do not belong in a normal message. A website request is not a confirmed visit, and it is not proof that a plan will pay.",
          es: "Las redes de los planes de salud cambian, y un logotipo en el sitio de una clínica puede durar más que el acuerdo que lo puso ahí. Canby Community Clinic no publica una lista de planes aceptados por esa razón. La foto de una tarjeta parecería un sí que la clínica no ha confirmado para usted. Cuando llame al (818) 674-4414, diga el nombre impreso en su tarjeta y el tipo de visita que necesita. El personal en 7601 Canby Ave #6B, en Reseda, puede decirle si eso cambia algo para una cita. Traiga la tarjeta si le dicen que la traiga. No fotografíe la tarjeta en un correo ni en un formulario de este sitio. Los números de miembro y las fechas de nacimiento no pertenecen a un mensaje normal. Una solicitud en el sitio web no es una visita confirmada ni una prueba de que un plan va a pagar.",
        },
      },
      {
        h: { en: "Say the plan name", es: "Diga el nombre del plan" },
        p: {
          en: "Medi-Cal is not one single card with one single set of rules. Many people have Medi-Cal through a managed care plan, and the plan name is what staff need to hear. Read the name slowly, and say whether the visit is a checkup, a follow-up, or a question about a medicine. If a family member holds the card, you can still call, but the person who will be seen may need to be on the line. Ask what identification to bring. Ask whether we can see you if the plan does not cover it, or if the coverage is still pending. The clinic will not guess your coverage on this page. The honest answer is the one given on the phone for that visit, on that week. Write it down, including who said it.",
          es: "Medi-Cal no es una sola tarjeta con un solo conjunto de reglas. Muchas personas tienen Medi-Cal a través de un plan de atención administrada, y el nombre del plan es lo que el personal necesita oír. Lea el nombre despacio y diga si la visita es una revisión, un seguimiento o una pregunta sobre un medicamento. Si un familiar tiene la tarjeta, usted igual puede llamar, pero la persona que será atendida tal vez deba estar en la línea. Pregunte qué identificación traer. Pregunte si podemos atenderle si el plan no la cubre, o si la cobertura todavía está pendiente. La clínica no va a adivinar su cobertura en esta página. La respuesta honesta es la que se da por teléfono para esa visita, en esa semana. Anótela, incluido quién la dijo.",
        },
      },
      {
        h: { en: "Medi-Cal is not required", es: "Medi-Cal no es obligatorio" },
        p: {
          en: "People without any coverage call this clinic too. People whose card still leaves a visit hard to afford call too. Insurance does not, by itself, decide whether the clinic can help. Neither does the lack of it. Canby Community Clinic is a nonprofit, and that fact still does not mean every visit is free. Language and the schedule are separate questions. Say which one is in the way. If you are waiting on an application, say that as well. Staff may be able to talk about a visit while the application is pending, or they may tell you to wait until you have a number. Either answer is more useful than guessing from a search result. Do not skip the call because you assume the answer is no.",
          es: "Quien no tiene ninguna cobertura también llama a esta clínica. Quien tiene una tarjeta que igual deja la visita difícil de pagar también llama. El seguro, por sí solo, no decide si la clínica puede ayudar. La falta de seguro tampoco. Canby Community Clinic es una organización sin fines de lucro, y ese hecho igual no significa que toda visita sea gratis. El idioma y el horario son preguntas aparte. Diga cuál estorba. Si está esperando una solicitud, dígalo también. El personal tal vez pueda hablar de una visita mientras la solicitud está pendiente, o tal vez le diga que espere hasta tener un número. Cualquiera de las dos respuestas es más útil que adivinar desde un resultado de búsqueda. No deje de llamar porque supone que la respuesta es no.",
        },
      },
      {
        h: { en: "What Medi-Cal itself is", es: "Qué es Medi-Cal en sí" },
        p: {
          en: "Medi-Cal is California’s Medicaid program. The Department of Health Care Services oversees it. Covered California is the marketplace many people use to apply, and the same application can screen for Medi-Cal when income qualifies. Rules depend on age, household, income, immigration status, and other facts this clinic does not collect on a webpage. This office does not approve or deny Medi-Cal. It does not see the state’s file on you. If you need the official starting point, use dhcs.ca.gov or coveredca.com, then call the clinic about a visit. A clinician here can still talk about blood pressure, diabetes risk, medicines, and the next test. That conversation is not a decision about your eligibility. Confirm any coverage question with the plan or the county, not with a blog post.",
          es: "Medi-Cal es el programa Medicaid de California. Lo supervisa el Departamento de Servicios de Atención Médica. Covered California es el mercado que muchas personas usan para solicitar, y la misma solicitud puede evaluar Medi-Cal cuando el ingreso califica. Las reglas dependen de la edad, el hogar, el ingreso, el estatus migratorio y otros datos que esta clínica no recoge en una página web. Esta oficina no aprueba ni niega Medi-Cal. No ve el expediente del estado sobre usted. Si necesita el punto de partida oficial, use dhcs.ca.gov o coveredca.com y luego llame a la clínica por una visita. Un clínico aquí igual puede hablar de la presión arterial, el riesgo de diabetes, los medicamentos y la siguiente prueba. Esa conversación no es una decisión sobre su elegibilidad. Confirme cualquier pregunta de cobertura con el plan o con el condado, no con una publicación.",
        },
      },
      {
        h: { en: "Outside tests happen elsewhere", es: "Las pruebas externas se hacen en otro sitio" },
        p: {
          en: "Even when a visit at this clinic is possible, a laboratory or an imaging center may happen at another site. A plan that pays for the office visit may still treat an outside test differently. Ask where the blood draw or the scan happens, whether that site is a place your coverage uses, before you agree. Ask who calls you with the result and how long that usually takes. Do not assume a paper you signed at a lab was explained if you did not understand it. You can ask for the explanation again in English or in Spanish. If the result is abnormal, that finding still needs a clinician. This page is not a diagnosis, and a number forwarded by text is not a full plan. Bring the paper to the follow-up rather than interpreting it alone.",
          es: "Aunque una visita en esta clínica sea posible, un laboratorio o un centro de imágenes puede estar en otro sitio. Un plan que paga la visita en la oficina igual puede tratar de otra forma una prueba externa. Pregunte dónde se hace la extracción de sangre o el estudio, si ese sitio es un lugar que usa su cobertura y dónde se hace antes de aceptar. Pregunte quién le llama con el resultado y cuánto suele tardar. No suponga que un papel que firmó en un laboratorio quedó explicado si usted no lo entendió. Puede pedir la explicación otra vez en inglés o en español. Si el resultado es anormal, ese hallazgo igual necesita un clínico. Esta página no es un diagnóstico, y un número enviado por mensaje no es un plan completo. Traiga el papel al seguimiento en lugar de interpretarlo solo.",
        },
      },
      {
        h: { en: "Ask before you travel", es: "Pregunte antes de viajar" },
        p: {
          en: "The address is 7601 Canby Ave #6B, Reseda. The hours are weekdays from 9 to 5. The clinic is closed Saturday and Sunday. Call (818) 674-4414 and ask about parking and the entrance before the first trip. This suite is not an emergency department. Chest pain, trouble breathing, one-sided weakness, trouble speaking, fainting, severe bleeding, or a sudden confusion is 911, not a Medi-Cal question for the next business day. The website is not watched after hours. If your question is a planned visit, say so, and wait for a person to confirm the day and the time. Neighbors come from Reseda, Canoga Park, Winnetka, Northridge, Lake Balboa, and Tarzana. If you are farther away, ask whether the trip is the right use of the day before you drive.",
          es: "La dirección es 7601 Canby Ave #6B, Reseda. El horario es de lunes a viernes, de 9 a 5. La clínica está cerrada el sábado y el domingo. Llame al (818) 674-4414 y pregunte por el estacionamiento y la entrada antes del primer viaje. Esta suite no es una sala de emergencias. Dolor de pecho, dificultad para respirar, debilidad de un lado, dificultad para hablar, desmayo, sangrado grave o una confusión súbita es el 911, no una pregunta de Medi-Cal para el siguiente día hábil. El sitio no se vigila fuera de horario. Si su pregunta es una visita planeada, dígalo y espere a que una persona confirme el día y la hora. Vienen vecinos de Reseda, Canoga Park, Winnetka, Northridge, Lake Balboa y Tarzana. Si está más lejos, pregunte si el viaje es el uso correcto del día antes de manejar.",
        },
      },
    ],
  },
  {
    slug: "blood-pressure",
    seoTitle: "Blood Pressure Check in Reseda | Canby Clinic",
    seoDescription:
      "High blood pressure often has no symptom. A check in Reseda is a conversation, not a diagnosis. Canby Community Clinic, weekdays 9–5. Call (818) 674-4414.",
    title: { en: "When a blood pressure check in Reseda is worth the call", es: "Cuándo una revisión de presión en Reseda vale la llamada" },
    lede: {
      en: "High blood pressure is one of the most searched health topics because it usually feels like nothing. A single number on a machine is not a diagnosis.",
      es: "La presión alta es uno de los temas de salud más buscados porque por lo general no se siente. Un solo número en una máquina no es un diagnóstico.",
    },
    image: "/media/articles/blood-pressure.jpg",
    imageAlt: {
      en: "A blood pressure cuff on an arm in a quiet room.",
      es: "Un manguito de presión en un brazo en un cuarto tranquilo.",
    },
    source: "https://medlineplus.gov/highbloodpressure.html",
    sourceLabel: "MedlinePlus",
    service: "screenings",
    sections: [
      {
        h: { en: "Why the check matters", es: "Por qué importa la revisión" },
        p: {
          en: "High blood pressure is common, and many adults who have it do not feel sick. Over years it raises the chance of heart attack, stroke, heart failure, and kidney disease. That is why public guidance, including the U.S. Preventive Services Task Force, supports checking blood pressure in adults. The check is a screening when you feel well. It is not a prize for having symptoms. A pharmacy machine, a home cuff, and a clinic reading can disagree. Cuff size, a full bladder, caffeine, a recent cigarette, talking during the reading, and rushing in from the parking lot all move the number. Write home readings down with the date and the time. One rushed number on a website is not a reason to start or stop a medicine. It is a reason to talk with a clinician who can repeat the reading.",
          es: "La presión arterial alta es común, y muchos adultos que la tienen no se sienten enfermos. Con los años sube la posibilidad de infarto, derrame cerebral, insuficiencia cardíaca y enfermedad de los riñones. Por eso la orientación pública, incluido el Grupo de Trabajo de Servicios Preventivos de EE. UU., apoya revisar la presión en los adultos. La revisión es una evaluación cuando se siente bien. No es un premio por tener síntomas. Una máquina de farmacia, un manguito de casa y una medida en la clínica pueden no coincidir. El tamaño del manguito, la vejiga llena, la cafeína, un cigarrillo reciente, hablar durante la medida y llegar apurado desde el estacionamiento mueven el número. Anote las medidas de casa con la fecha y la hora. Un número apresurado en un sitio web no es motivo para empezar o dejar un medicamento. Es motivo para hablar con un clínico que pueda repetir la medida.",
        },
      },
      {
        h: { en: "Categories are general education", es: "Las categorías son educación general" },
        p: {
          en: "Clinicians often describe adult blood pressure with categories used in general education. A reading under 120 systolic and under 80 diastolic is commonly called normal. Systolic 120 to 129 with diastolic under 80 is commonly called elevated. Systolic 130 to 139 or diastolic 80 to 89 is commonly called stage 1 hypertension. Systolic 140 or higher, or diastolic 90 or higher, is commonly called stage 2. These bands are not a diagnosis for you, and they are not a treatment order from this page. Targets change with age, diabetes, kidney disease, pregnancy, and the medicines you already take. A clinician has to confirm the pattern, often with more than one reading on more than one day. Do not treat a single category as permission to borrow someone else’s pills. Confirm the meaning of your own numbers at a visit.",
          es: "Los clínicos suelen describir la presión arterial de los adultos con categorías usadas en la educación general. Una medida por debajo de 120 de sistólica y por debajo de 80 de diastólica se llama con frecuencia normal. Una sistólica de 120 a 129 con diastólica por debajo de 80 se llama con frecuencia elevada. Una sistólica de 130 a 139 o una diastólica de 80 a 89 se llama con frecuencia hipertensión en etapa 1. Una sistólica de 140 o más, o una diastólica de 90 o más, se llama con frecuencia etapa 2. Esos rangos no son un diagnóstico para usted y no son una orden de tratamiento de esta página. Las metas cambian con la edad, la diabetes, la enfermedad de los riñones, el embarazo y los medicamentos que ya toma. Un clínico tiene que confirmar el patrón, a menudo con más de una medida en más de un día. No trate una sola categoría como permiso para usar las pastillas de otra persona. Confirme el significado de sus propios números en una visita.",
        },
      },
      {
        h: { en: "One reading is not a plan", es: "Una medida no es un plan" },
        p: {
          en: "Blood pressure moves through the day. A high reading at a drugstore can fall after you sit quietly, and a calm reading at home can miss highs that happen at work. The useful record is a pattern: morning and evening numbers for several days, taken after sitting still, with the cuff on bare skin and the arm supported. Bring that list. Also bring the names of prescriptions, pharmacy-shelf pills, and supplements. Pain medicines, decongestants, and some herbs can raise the number. Tell the clinician if you skip doses because of side effects or confusion about the label. That fact changes the plan more than a lecture does. This page will not tell you which pill to take. It will not tell you that a home monitor you bought is accurate until someone compares it with a clinic cuff.",
          es: "La presión arterial cambia durante el día. Una medida alta en una farmacia puede bajar después de sentarse en calma, y una medida tranquila en casa puede pasar por alto subidas que ocurren en el trabajo. El registro útil es un patrón: números de mañana y de noche durante varios días, tomados después de estar sentado quieto, con el manguito sobre la piel y el brazo apoyado. Traiga esa lista. También traiga los nombres de las recetas, las pastillas del estante de la farmacia y los suplementos. Los analgésicos, los descongestionantes y algunas hierbas pueden subir el número. Diga al clínico si se salta dosis por efectos o por confusión con la etiqueta. Ese dato cambia el plan más que un regaño. Esta página no le dirá cuál pastilla tomar. No le dirá que un monitor de casa que compró es preciso hasta que alguien lo compare con un manguito de la clínica.",
        },
      },
      {
        h: { en: "What the visit includes", es: "Qué incluye la visita" },
        p: {
          en: "At Canby Community Clinic, a screening conversation can include a blood pressure reading when it helps. The clinician will ask what brought you in, what you were told before, and whether anyone in the family had a stroke or heart disease at a young age. You may talk about salt, activity, alcohol, tobacco, sleep, and stress without being handed a slogan. None of those topics replaces a medicine you were told to take. If a repeat reading stays high, the next step may be a home log, a blood test, or a return visit. Some tests are done outside suite 6B. Ask where the test is done before it is ordered. The visit is a conversation with a clinician. It is not a diagnosis delivered by this article, and it is not a promise that every high reading becomes a prescription the same day.",
          es: "En Canby Community Clinic, una conversación de evaluación puede incluir una medida de la presión cuando ayuda. El clínico preguntará qué lo trajo, qué le dijeron antes y si alguien en la familia tuvo un derrame o enfermedad del corazón a una edad joven. Puede hablar de la sal, la actividad, el alcohol, el tabaco, el sueño y el estrés sin que le entreguen una consigna. Ninguno de esos temas reemplaza un medicamento que le dijeron que tomara. Si una medida repetida sigue alta, el siguiente paso puede ser un registro en casa, un análisis de sangre o una visita de regreso. Algunas pruebas se hacen fuera de la suite 6B, y esas pruebas se hacen en otro sitio. Pregunte dónde se hace la prueba antes de que se ordene. La visita es una conversación con un clínico. No es un diagnóstico entregado por este artículo, y no es una promesa de que toda medida alta se vuelva una receta el mismo día.",
        },
      },
      {
        h: { en: "When to call 911", es: "Cuándo llamar al 911" },
        p: {
          en: "A very high reading needs a different door when symptoms are present. Call 911 for chest pain, trouble breathing, weakness or numbness on one side, trouble speaking, a sudden severe headache, fainting, or confusion. Public education often treats a systolic pressure of 180 or higher, or a diastolic pressure of 120 or higher, as a reason to get medical help promptly, especially with those symptoms. Do not drive yourself to a clinic to see if it falls. Canby Community Clinic is not an emergency department. Suite 6B cannot treat a stroke or a heart attack, and the website is not watched at night or on weekends. If the number is high and you feel well, still call a clinician the same day rather than waiting months, and ask whether you should be seen now or the same week. Confirm the urgency with a person, not with a chart on a page.",
          es: "Una medida muy alta necesita otra puerta cuando hay síntomas. Llame al 911 por dolor de pecho, dificultad para respirar, debilidad o entumecimiento de un lado, dificultad para hablar, un dolor de cabeza súbito y fuerte, desmayo o confusión. La educación pública suele tratar una presión sistólica de 180 o más, o una diastólica de 120 o más, como motivo para buscar ayuda médica pronto, sobre todo con esos síntomas. No conduzca usted mismo a una clínica para ver si baja. Canby Community Clinic no es una sala de emergencias. La suite 6B no puede tratar un derrame ni un infarto, y el sitio no se vigila de noche ni los fines de semana. Si el número está alto y se siente bien, igual llame a un clínico el mismo día en lugar de esperar meses, y pregunte si debe ser atendido ahora o la misma semana. Confirme la urgencia con una persona, no con una tabla en una página.",
        },
      },
      {
        h: { en: "How to ask for it", es: "Cómo pedirla" },
        p: {
          en: "Call (818) 674-4414 on a weekday and say you want a blood pressure check or a general visit. The clinic is at 7601 Canby Ave #6B, Reseda, and the desk is open from 9 to 5. It is a nonprofit community clinic, not a walk-in urgent care, and it does not promise a same-hour visit. Call before you travel. The clinic does not publish a list of accepted insurance plans on this page. A request on this website is not a confirmed visit. Wait until a person tells you the day, the time, and what to bring. Bring home readings and medicine bottles if you have them. English and Spanish are both fine. If you need an interpreter, say so when you schedule. Neighbors come from the west San Fernando Valley. If you searched from another part of Los Angeles, ask whether the trip fits before you come.",
          es: "Llame al (818) 674-4414 en un día de semana y diga que quiere una revisión de la presión o una visita general. La clínica está en 7601 Canby Ave #6B, Reseda, y el escritorio está abierto de 9 a 5. Es una clínica comunitaria sin fines de lucro, no una urgencia sin cita, y no promete una visita en la misma hora. Llame antes de viajar. La clínica no publica una lista de planes de seguro aceptados en esta página. Una solicitud en este sitio web no es una visita confirmada. Espere hasta que una persona le diga el día, la hora y qué traer. Traiga las medidas de casa y los frascos de medicamentos si los tiene. El inglés y el español están bien. Si necesita un intérprete, dígalo al programar. Vienen vecinos del oeste del Valle de San Fernando. Si buscó desde otra parte de Los Ángeles, pregunte si el viaje conviene antes de venir.",
        },
      },
    ],
  },
  {
    slug: "blood-sugar",
    seoTitle: "Blood Sugar Check Near Reseda | Canby Clinic",
    seoDescription:
      "What a blood sugar or diabetes-risk check can and cannot tell you. Community clinic in Reseda. Call (818) 674-4414. Not every test is done in the room.",
    title: { en: "What people mean when they search “normal blood sugar”", es: "Qué quiere decir la gente cuando busca “azúcar normal”" },
    lede: {
      en: "A number without a story is not a diagnosis of diabetes. It is a reason to talk with a clinician who can repeat it, explain it, or send the test somewhere it can be done properly.",
      es: "Un número sin una historia no es un diagnóstico de diabetes. Es una razón para hablar con un clínico que pueda repetirlo, explicarlo o enviar la prueba a donde se pueda hacer bien.",
    },
    image: "/media/articles/blood-sugar.jpg",
    imageAlt: {
      en: "A glucose meter and a glass of water on a wooden table.",
      es: "Un medidor de glucosa y un vaso de agua sobre una mesa de madera.",
    },
    source: "https://medlineplus.gov/diabetes.html",
    sourceLabel: "MedlinePlus",
    service: "screenings",
    sections: [
      {
        h: { en: "A number is not a diagnosis", es: "Un número no es un diagnóstico" },
        p: {
          en: "Diabetes and prediabetes are among the most looked-up conditions because so many families already live with them. Thirst, frequent urination, fatigue, blurry vision, and slow-healing skin can be worth mentioning. They are not a lab result. Many people with early blood-sugar problems have no symptom at all. A home glucose meter shows the sugar at one moment. It depends on food, illness, a missed meal, and the quality of the meter and the strips. A clinician may talk about diabetes risk, and sometimes order a glucose test, based on age, weight, pregnancy history, and family history. Not every test is done inside the exam room. Outside labs are a separate stop. Ask where the test is done before it is ordered. Do not decide you have diabetes, or that you do not, from a search result.",
          es: "La diabetes y la prediabetes están entre las condiciones más buscadas porque muchas familias ya viven con ellas. La sed, orinar con frecuencia, el cansancio, la visión borrosa y una piel que tarda en sanar merecen mencionarse. No son un resultado de laboratorio. Muchas personas con problemas tempranos del azúcar no tienen ningún síntoma. Un medidor de glucosa en casa muestra el azúcar en un momento. Depende de la comida, una enfermedad, una comida saltada y la calidad del medidor y de las tiras. Un clínico puede hablar del riesgo de diabetes y, a veces, ordenar una prueba de glucosa, según la edad, el peso, la historia de embarazos y la historia familiar. No toda prueba se hace dentro del consultorio. Los laboratorios externos están en otro sitio, y hay que decir el lugar antes de ordenar la prueba. No decida que tiene diabetes, o que no la tiene, a partir de un resultado de búsqueda.",
        },
      },
      {
        h: { en: "A1C is a laboratory test", es: "La A1C es una prueba de laboratorio" },
        p: {
          en: "The A1C, also called hemoglobin A1C, is a blood test. It reflects the average blood sugar over about the past three months. It is not a number you can calculate by averaging a few home fingersticks, and it is not a guess from how tired you felt last week. Some conditions change the A1C even when day-to-day sugar is not what the result suggests, including certain blood disorders and pregnancy. That is one reason a clinician may choose a different test, such as a fasting glucose or another lab measure. You may be told to fast, or you may not. Follow the instruction you are given for that test, not a rule you found online. Results should come back to a clinician who can repeat an abnormal test when guidelines say a repeat is needed. A printout without that conversation is not a plan.",
          es: "La A1C, también llamada hemoglobina A1C, es un análisis de sangre. Refleja el promedio del azúcar en la sangre durante unos tres meses. No es un número que pueda calcular promediando unos pocos pinchazos en casa, y no es una suposición de lo cansado que se sintió la semana pasada. Algunas condiciones cambian la A1C aunque el azúcar del día a día no sea lo que el resultado sugiere, incluidos ciertos trastornos de la sangre y el embarazo. Esa es una razón por la que un clínico puede elegir otra prueba, como una glucosa en ayunas u otra medida de laboratorio. Puede que le pidan ayunar, o puede que no. Siga la instrucción que le den para esa prueba, no una regla que encontró en línea. Los resultados deben volver a un clínico que pueda repetir una prueba anormal cuando las guías dicen que hace falta repetirla. Una hoja impresa sin esa conversación no es un plan.",
        },
      },
      {
        h: { en: "Ranges used in education", es: "Rangos usados en la educación" },
        p: {
          en: "Educational materials often use these adult ranges, and a clinician still has to apply them to you. An A1C below 5.7 percent is commonly described as the usual range. An A1C from 5.7 percent to 6.4 percent is commonly called prediabetes. An A1C of 6.5 percent or higher is commonly used, often with a repeat test, when diagnosing diabetes. A fasting plasma glucose under 100 mg/dL is commonly called the usual range, 100 to 125 is commonly called prediabetes, and 126 or higher is in the diabetes range on that test. These cutoffs are general education. They are not a diagnosis from Canby Community Clinic, and they are not a target for someone already being treated. Pregnancy uses different standards. Do not change a diabetes medicine because a home number crossed one of these lines. Call and ask what to do with the number you actually have.",
          es: "Los materiales educativos suelen usar estos rangos para adultos, y un clínico igual tiene que aplicarlos a usted. Una A1C por debajo de 5.7 por ciento se describe con frecuencia como el rango habitual. Una A1C de 5.7 por ciento a 6.4 por ciento se llama con frecuencia prediabetes. Una A1C de 6.5 por ciento o más se usa con frecuencia, a menudo con una prueba repetida, al diagnosticar la diabetes. Una glucosa en ayunas por debajo de 100 mg/dL se llama con frecuencia el rango habitual, de 100 a 125 se llama con frecuencia prediabetes, y 126 o más está en el rango de diabetes en esa prueba. Esos límites son educación general. No son un diagnóstico de Canby Community Clinic y no son una meta para alguien que ya está en tratamiento. El embarazo usa otras normas. No cambie un medicamento para la diabetes porque un número de casa cruzó una de estas líneas. Llame y pregunte qué hacer con el número que de verdad tiene.",
        },
      },
      {
        h: { en: "Who often gets screened", es: "A quién suelen evaluar" },
        p: {
          en: "The U.S. Preventive Services Task Force recommends screening for prediabetes and type 2 diabetes in adults aged 35 to 70 who have overweight or obesity. Clinicians may start earlier when risk is higher, for example a strong family history, a history of diabetes in pregnancy, or other conditions they know about. Screening is for people without clear symptoms. If you already have thirst, weight loss, or a sore that will not heal, say that. It may be an evaluation of a problem, not a routine screen. Finding prediabetes can matter because food, activity, and sometimes a medicine lower the chance of type 2 diabetes for some people. Which of those fits you is a clinical decision. This page will not hand you a diet that reverses diabetes. It will not tell you to stop a medicine. Those choices belong to a clinician who knows the rest of your health.",
          es: "El Grupo de Trabajo de Servicios Preventivos de EE. UU. recomienda evaluar la prediabetes y la diabetes tipo 2 en adultos de 35 a 70 años que tienen sobrepeso u obesidad. Los clínicos pueden empezar antes cuando el riesgo es mayor, por ejemplo una historia familiar marcada, diabetes en el embarazo u otras condiciones que conocen. La evaluación es para personas sin síntomas claros. Si ya tiene sed, pérdida de peso o una herida que no sana, dígalo. Puede ser la evaluación de un problema, no una prueba de rutina. Encontrar prediabetes puede importar porque la comida, la actividad y a veces un medicamento bajan la posibilidad de diabetes tipo 2 en algunas personas. Cuál de esas le corresponde es una decisión clínica. Esta página no le entregará una dieta que revierta la diabetes. No le dirá que deje un medicamento. Esas decisiones pertenecen a un clínico que conoce el resto de su salud.",
        },
      },
      {
        h: { en: "What to bring along", es: "Qué conviene traer" },
        p: {
          en: "Bring home readings with dates, if you have any, and note whether they were fasting. Bring a list of medicines, insulin if you use it, and the pharmacy name. Bring old labs if you still have the paper. Write two questions so the visit does not end on the one you forgot in the hall. Useful questions are what the result means, whether it should be repeated, what to do about a medicine you cannot afford, and where the next test is done. Ask who calls you if the result is abnormal. Do not email the list, the member number, or a photo of the lab to the website. A form on this site is only a request for a callback. It is not a confirmed visit, and it is not a place to store a chart. If a family member helps with doses, ask whether that person should come in or stay in the waiting room.",
          es: "Traiga las medidas de casa con fechas, si las tiene, y anote si fueron en ayunas. Traiga una lista de medicamentos, la insulina si la usa y el nombre de la farmacia. Traiga análisis viejos si todavía tiene el papel. Escriba dos preguntas para que la visita no termine en la que olvidó en el pasillo. Preguntas útiles son qué significa el resultado, si debe repetirse, qué hacer con un medicamento que no puede pagar y dónde se hace la siguiente prueba. Pregunte quién le llama si el resultado es anormal. No envíe la lista, el número de miembro ni una foto del laboratorio al sitio web. Un formulario en este sitio es solo una solicitud de devolución de llamada. No es una visita confirmada y no es un lugar para guardar un expediente. Si un familiar ayuda con las dosis, pregunte si esa persona debe entrar o quedarse en la sala de espera.",
        },
      },
      {
        h: { en: "How to book the talk", es: "Cómo pedir la conversación" },
        p: {
          en: "You do not need the word prediabetes to book. Call (818) 674-4414 and say you are worried about blood sugar, or that someone in your family has diabetes and you have not been checked. Canby Community Clinic is a nonprofit at 7601 Canby Ave #6B, Reseda, open weekdays from 9 to 5. Ask whether we can see you. The clinic does not list accepted plans here. English and Spanish are spoken. This page is not a diagnosis. The suite is not an emergency department. If you already know you have diabetes and you are confused, vomiting, breathing fast, or very drowsy, seek urgent care or call 911. Do not wait for a weekday clinic for that. If the problem is a planned conversation, wait for a person to confirm the time before you travel from Reseda or the nearby Valley.",
          es: "No necesita la palabra prediabetes para pedir cita. Llame al (818) 674-4414 y diga que le preocupa el azúcar, o que alguien en su familia tiene diabetes y usted no se ha revisado. Canby Community Clinic es una organización sin fines de lucro en 7601 Canby Ave #6B, Reseda, abierta de lunes a viernes de 9 a 5. Pregunte si podemos atenderle. La clínica no publica planes aceptados aquí. Se habla inglés y español. Esta página no es un diagnóstico. La suite no es una sala de emergencias. Si ya sabe que tiene diabetes y está confundido, vomita, respira rápido o está muy somnoliento, busque atención urgente o llame al 911. No espere una clínica de lunes a viernes para eso. Si el problema es una conversación planeada, espere a que una persona confirme la hora antes de viajar desde Reseda o el Valle cercano.",
        },
      },
    ],
  },
  {
    slug: "cholesterol",
    seoTitle: "Cholesterol Check in the San Fernando Valley",
    seoDescription:
      "A cholesterol conversation is not a promise of a lab on site. Canby Community Clinic in Reseda explains what can be done here and what is sent out. Call (818) 674-4414.",
    title: { en: "A cholesterol check is a conversation before it is a lab", es: "Una revisión de colesterol es una conversación antes de ser un laboratorio" },
    lede: {
      en: "People search cholesterol because a past result scared them, or because no one has explained the paper. The useful visit starts with that story, not with a supplement.",
      es: "La gente busca colesterol porque un resultado anterior les asustó, o porque nadie les explicó el papel. La visita útil empieza con esa historia, no con un suplemento.",
    },
    image: "/media/articles/cholesterol.jpg",
    imageAlt: {
      en: "A simple meal of beans, greens, and fish on a worn table.",
      es: "Una comida sencilla de frijoles, verduras y pescado sobre una mesa gastada.",
    },
    source: "https://medlineplus.gov/cholesterol.html",
    sourceLabel: "MedlinePlus",
    service: "labs",
    sections: [
      {
        h: { en: "What the search is asking", es: "Qué pregunta la búsqueda" },
        p: {
          en: "How do I lower cholesterol is often a question about last year’s lab, a parent’s heart attack, or a number an app flagged in red. Food, movement, tobacco, and medicines can all matter. Which one matters for you is not something a clinic website can assign. Cholesterol itself is a blood fat the body uses. Trouble starts when the pattern of fats, together with blood pressure, diabetes, smoking, and age, points to a higher chance of a heart attack or stroke. A single food rule will not settle that. Bring the old paper if you still have it, even if the lab was in another city. If you only remember that the doctor said it was a little high, say that. The visit can start from a sentence. It does not have to start from a perfect chart. This article is not a diagnosis and it is not a meal plan.",
          es: "Cómo bajo el colesterol suele ser una pregunta sobre el laboratorio del año pasado, el infarto de un padre o un número que una aplicación marcó en rojo. La comida, el movimiento, el tabaco y los medicamentos pueden importar. Cuál importa para usted no lo puede asignar el sitio de una clínica. El colesterol en sí es una grasa de la sangre que el cuerpo usa. El problema empieza cuando el patrón de grasas, junto con la presión, la diabetes, el tabaco y la edad, señala una posibilidad más alta de infarto o derrame. Una sola regla de comida no resuelve eso. Traiga el papel viejo si todavía lo tiene, aunque el laboratorio haya sido en otra ciudad. Si solo recuerda que el médico dijo que estaba un poco alto, dígalo. La visita puede empezar desde una frase. No tiene que empezar desde un expediente perfecto. Este artículo no es un diagnóstico ni un plan de comidas.",
        },
      },
      {
        h: { en: "What a lipid panel shows", es: "Qué muestra un perfil de lípidos" },
        p: {
          en: "A cholesterol check is usually a lipid panel, a blood test. The report often lists total cholesterol, LDL cholesterol, HDL cholesterol, and triglycerides. LDL is commonly called the cholesterol that raises risk when it stays high. HDL is commonly described as the cholesterol that is more helpful when it is higher. Triglycerides are another blood fat, and a recent meal can push them up, which is why some labs still ask you to fast. Other labs accept a non-fasting sample for the rest of the panel. Follow the instruction for the lab you are actually using. The panel is not done by looking at a meal, and it is not a fingerstick you interpret from a video. Abnormal cutoffs in a brochure are general education. A clinician reads them next to your age and your other risks. Do not treat a headline number as the only one that counts.",
          es: "Una revisión de colesterol suele ser un perfil de lípidos, un análisis de sangre. El informe a menudo lista el colesterol total, el colesterol LDL, el colesterol HDL y los triglicéridos. El LDL se llama con frecuencia el colesterol que sube el riesgo cuando se mantiene alto. El HDL se describe con frecuencia como el colesterol que ayuda más cuando está más alto. Los triglicéridos son otra grasa de la sangre, y una comida reciente puede subirlos, por eso algunos laboratorios todavía piden ayuno. Otros aceptan una muestra sin ayuno para el resto del perfil. Siga la instrucción del laboratorio que de verdad va a usar. El perfil no se hace mirando una comida, y no es un pinchazo en el dedo que se interpreta desde un video. Los límites anormales de un folleto son educación general. Un clínico los lee junto a su edad y sus otros riesgos. No trate un número de un titular como el único que cuenta.",
        },
      },
      {
        h: { en: "Risk decides the next step", es: "El riesgo decide el siguiente paso" },
        p: {
          en: "Public guidance often uses a lipid panel, with age, blood pressure, smoking, and diabetes, to estimate heart risk in adults about 40 to 75 years old. The U.S. Preventive Services Task Force talks about statin medicine for primary prevention in that age range when risk factors and estimated risk are high enough, and a more selective conversation when risk is lower. Younger adults may be checked when family history of early heart disease or other risks are present. A statin is a prescription decision. It is not a supplement, and it is not something to borrow. Side effects, other medicines, pregnancy, and liver history all change the choice. This page will not tell you to start a statin or to stop one. If a past clinician recommended a medicine you never filled, say that at the visit. The unpaid prescription is part of the medical story.",
          es: "La orientación pública suele usar un perfil de lípidos, con la edad, la presión, el tabaco y la diabetes, para estimar el riesgo cardíaco en adultos de unos 40 a 75 años. El Grupo de Trabajo de Servicios Preventivos de EE. UU. habla de medicamentos del grupo de las estatinas para la prevención primaria en ese rango de edad cuando los factores de riesgo y el riesgo estimado son lo bastante altos, y de una conversación más selectiva cuando el riesgo es menor. Los adultos más jóvenes pueden revisarse cuando hay historia familiar de enfermedad cardíaca temprana u otros riesgos. Una estatina es una decisión de receta. No es un suplemento y no es algo para pedir prestado. Los efectos, otros medicamentos, el embarazo y la historia del hígado cambian la elección. Esta página no le dirá que empiece una estatina ni que la deje. Si un clínico anterior recomendó un medicamento que nunca surtió, dígalo en la visita. La receta sin pagar es parte de la historia médica.",
        },
      },
      {
        h: { en: "Food is not a prescription", es: "La comida no es una receta" },
        p: {
          en: "Oats, beans, vegetables, fish, and fewer sugary drinks show up in public guidance because they are reasonable for many people. Replacing some saturated fat with unsaturated fat is a common piece of that guidance. These are not a personal prescription, and they do not replace a medicine you were told to take. A bottle that says it supports healthy cholesterol is marketing. Red yeast rice and other products sold as natural can contain drug-like substances and can interact with real medicines. Do not add them quietly. Tell the clinician what you already take. Exercise helps many risk factors, and it is still not a number you can promise from a webpage. If chest pain starts while you are trying to walk more, stop and get urgent help. Do not push through pain to finish a plan you found online. Food and walking are topics for the visit, after safety is clear.",
          es: "La avena, los frijoles, las verduras, el pescado y menos bebidas dulces aparecen en la orientación pública porque son razonables para muchas personas. Cambiar parte de la grasa saturada por grasa no saturada es una pieza común de esa orientación. No son una receta personal y no reemplazan un medicamento que le dijeron que tomara. Un frasco que dice que apoya un colesterol saludable es publicidad. El arroz de levadura roja y otros productos vendidos como naturales pueden contener sustancias parecidas a medicamentos y pueden interferir con medicinas reales. No los agregue en silencio. Diga al clínico lo que ya toma. El ejercicio ayuda con muchos factores de riesgo, y igual no es un número que se pueda prometer desde una página web. Si empieza un dolor de pecho mientras intenta caminar más, deténgase y busque ayuda urgente. No siga con el dolor para terminar un plan que encontró en línea. La comida y el caminar son temas para la visita, después de que la seguridad esté clara.",
        },
      },
      {
        h: { en: "The draw may be elsewhere", es: "La extracción puede ser en otro lugar" },
        p: {
          en: "A clinician in Reseda can talk through risk and, when it is appropriate, help arrange a blood test. The blood draw is often somewhere else. Ask where it is, whether you must fast, and how you will hear the result before you go. An outside laboratory may happen somewhere else even when the clinic visit itself was arranged. That site is not a detail to discover later. Ask what an abnormal result would lead to, so you are not surprised by a second test. Bring the old report so the new one can be compared with it. Trends matter more than a single scary line. If you do not understand the words on the page, ask for a plain explanation in English or Spanish. You should leave knowing which number is being watched and when it would be checked again. If the visit cannot answer that, ask for the next appointment before you go.",
          es: "Un clínico en Reseda puede hablar del riesgo y, cuando corresponde, ayudar a coordinar un análisis de sangre. La extracción a menudo es en otro lugar. Pregunte dónde es, si debe ayunar y cómo recibirá el resultado antes de ir. Un laboratorio externo puede estar en otro sitio aunque la visita en la clínica se haya coordinado. Ese lugar no es un detalle para descubrir después. Pregunte a qué llevaría un resultado anormal, para que no le sorprenda una segunda prueba. Traiga el informe viejo para comparar el nuevo con él. Las tendencias importan más que una sola línea que asusta. Si no entiende las palabras de la hoja, pida una explicación sencilla en inglés o en español. Debe irse sabiendo qué número se está vigilando y cuándo se revisaría otra vez. Si la visita no puede responder eso, pida la siguiente cita antes de irse.",
        },
      },
      {
        h: { en: "Book it as a question", es: "Pídala como una pregunta" },
        p: {
          en: "Call (818) 674-4414 and say you want to talk about cholesterol or a past lab. Canby Community Clinic is a nonprofit at 7601 Canby Ave #6B, Reseda, open weekdays from 9 to 5. Ask whether the test can be arranged and where it is done. The clinic does not publish a list of accepted insurance plans. A request on this website is not a confirmed visit. Wait for a person to set the time. This page is not a diagnosis, and the suite is not an emergency department. Call 911 for chest pain, trouble breathing, sudden weakness, or trouble speaking. Do not bring those problems to a cholesterol appointment later in the week. If your only question is how to read an old paper, the weekday visit is the right door. Bring the paper, the medicine list, and one question written down.",
          es: "Llame al (818) 674-4414 y diga que quiere hablar del colesterol o de un laboratorio anterior. Canby Community Clinic es una organización sin fines de lucro en 7601 Canby Ave #6B, Reseda, abierta de lunes a viernes de 9 a 5. Pregunte si la prueba se puede coordinar y dónde se hace. La clínica no publica una lista de planes de seguro aceptados. Una solicitud en este sitio web no es una visita confirmada. Espere a que una persona fije la hora. Esta página no es un diagnóstico, y la suite no es una sala de emergencias. Llame al 911 por dolor de pecho, dificultad para respirar, debilidad súbita o dificultad para hablar. No lleve esos problemas a una cita de colesterol más tarde en la semana. Si su única pregunta es cómo leer un papel viejo, la visita de lunes a viernes es la puerta correcta. Traiga el papel, la lista de medicamentos y una pregunta escrita.",
        },
      },
    ],
  },
  {
    slug: "urgent-or-clinic",
    seoTitle: "Urgent Care, ER, or Clinic in Reseda",
    seoDescription:
      "Canby Community Clinic is not an emergency department and not a walk-in urgent care. Call (818) 674-4414 for a weekday visit in Reseda. Call 911 for an emergency.",
    title: { en: "Urgent care, the ER, or a clinic on Canby Avenue", es: "Urgencias, la sala de emergencias o una clínica en Canby Avenue" },
    lede: {
      en: "The wrong door wastes the day or, worse, the hour you did not have. This clinic is the weekday door. It is not the red-sign door.",
      es: "La puerta equivocada pierde el día o, peor, la hora que no tenía. Esta clínica es la puerta de lunes a viernes. No es la puerta del letrero rojo.",
    },
    image: "/media/articles/urgent-or-clinic.jpg",
    imageAlt: {
      en: "A quiet clinic corridor with closed doors.",
      es: "Un pasillo tranquilo de clínica con puertas cerradas.",
    },
    source: "https://www.cdc.gov/stroke/signs-symptoms/index.html",
    sourceLabel: "CDC",
    service: "primary-care",
    sections: [
      {
        h: { en: "Signs that need 911", es: "Señales que necesitan el 911" },
        p: {
          en: "Call 911 for chest pain or pressure, trouble breathing, fainting, a seizure, sudden confusion, a serious injury, or bleeding you cannot control. Call for a sudden severe headache, coughing or vomiting blood, or a reaction with swelling of the face or throat. Do not stop to open this website and do not drive yourself if you may pass out. Canby Community Clinic is not an emergency department. Suite 6B cannot place a breathing tube, read an emergency scan, or treat a heart attack. The site is not watched at night or on weekends. A nonprofit clinic with weekday hours is the wrong building for a problem that is happening right now and getting worse. If you are unsure and the person on the phone at 911 tells you to go to an emergency department, take that instruction. Waiting to see if it passes is how some emergencies get worse.",
          es: "Llame al 911 por dolor o presión en el pecho, dificultad para respirar, desmayo, una convulsión, confusión súbita, una lesión grave o un sangrado que no puede controlar. Llame por un dolor de cabeza súbito y fuerte, por toser o vomitar sangre, o por una reacción con hinchazón de la cara o la garganta. No se detenga a abrir este sitio y no conduzca usted mismo si puede desmayarse. Canby Community Clinic no es una sala de emergencias. La suite 6B no puede colocar un tubo para respirar, leer un estudio de emergencia ni tratar un infarto. El sitio no se vigila de noche ni los fines de semana. Una clínica sin fines de lucro con horario de lunes a viernes es el edificio equivocado para un problema que está pasando ahora y empeora. Si no está seguro y la persona del 911 le dice que vaya a una sala de emergencias, siga esa instrucción. Esperar a ver si pasa es como algunas emergencias empeoran.",
        },
      },
      {
        h: { en: "Stroke signs need speed", es: "Las señales de derrame urgen" },
        p: {
          en: "The public signs of stroke are sudden face drooping, arm weakness, and trouble speaking. Time matters, which is why the reminder is to call 911 rather than to lie down and see if speech returns. Other sudden signs include numbness on one side, trouble seeing, trouble walking, or a severe headache with no known cause. A stroke can be treated better when the emergency system starts early. A clinic appointment later in the week cannot do that job. Do not give aspirin on a guess, because some strokes are bleeds and a clinician in an emergency department has to sort that out. Do not drive the person yourself if symptoms are active. Note the time the symptoms started, if you know it, and tell the emergency crew. This page is not a diagnosis of stroke. It is a reason to use the emergency number when those signs show up.",
          es: "Las señales públicas de un derrame cerebral son la cara que se cae de pronto, debilidad en un brazo y dificultad para hablar. El tiempo importa, por eso el recordatorio es llamar al 911 en lugar de acostarse a ver si el habla regresa. Otras señales súbitas incluyen entumecimiento de un lado, dificultad para ver, dificultad para caminar o un dolor de cabeza fuerte sin causa conocida. Un derrame se puede tratar mejor cuando el sistema de emergencia empieza temprano. Una cita en la clínica más tarde en la semana no puede hacer ese trabajo. No dé aspirina por adivinar, porque algunos derrames son sangrados y un clínico en una sala de emergencias tiene que distinguirlo. No conduzca usted a la persona si los síntomas están activos. Anote la hora en que empezaron los síntomas, si la sabe, y dígasela al equipo de emergencia. Esta página no es un diagnóstico de derrame. Es un motivo para usar el número de emergencia cuando aparecen esas señales.",
        },
      },
      {
        h: { en: "Urgent care is different", es: "La urgencia es distinta" },
        p: {
          en: "Urgent care clinics are built for problems that should not wait until next week and are not 911. A sprain, a high fever that worries you tonight, a painful ear, a cut that may need stitches, or a urinary infection that just started are common examples. Hours, imaging, and what they treat vary by site. Canby Community Clinic does not advertise itself as urgent care and does not promise a same-hour walk-in. If you are unsure which door you need, call (818) 674-4414 during weekdays from 9 to 5 and describe the problem in ordinary words. If the answer is not here, go now, take that answer. After hours, use 911 or an urgent care or emergency department you can actually reach. Do not leave a website form about chest pain and wait for a callback the next morning. A request on this website is not a confirmed visit, and it is not emergency care.",
          es: "Las clínicas de urgencias están hechas para problemas que no deben esperar a la semana que viene y no son del 911. Un esguince, una fiebre alta que le preocupa esta noche, un oído doloroso, un corte que puede necesitar puntos o una infección urinaria que acaba de empezar son ejemplos comunes. El horario, los estudios y lo que atienden cambian según el sitio. Canby Community Clinic no se anuncia como urgencias y no promete una visita sin cita en la misma hora. Si no está seguro de qué puerta necesita, llame al (818) 674-4414 de lunes a viernes de 9 a 5 y describa el problema con palabras sencillas. Si la respuesta es aquí no, vaya ahora, tome esa respuesta. Fuera de horario, use el 911 o una urgencia o sala de emergencias a la que de verdad pueda llegar. No deje un formulario del sitio sobre dolor de pecho y espere una llamada a la mañana siguiente. Una solicitud en este sitio web no es una visita confirmada y no es atención de emergencia.",
        },
      },
      {
        h: { en: "What fits a weekday visit", es: "Qué cabe en una visita de semana" },
        p: {
          en: "A checkup belongs on a weekday calendar. So does follow-up of something stable, a blood pressure reading, a diabetes-risk conversation, a cholesterol question, and a medicine you do not understand. So does a form, a referral, or a question you have been carrying for months. Those are the visits this clinic is built for, at 7601 Canby Ave #6B in Reseda. The clinician can decide whether to watch, treat, test, or send you somewhere else. Primary care is also the place that still has the story next time. Urgent care often will not. If a problem has been the same for weeks, call and book rather than stacking another weekend at an urgent care that does not know your medicines. Bring the bottles. Ask whether we can see you. The clinic does not post a list of plans it accepts. Confirm both before you travel.",
          es: "Una revisión pertenece a un calendario de lunes a viernes. También el seguimiento de algo estable, una medida de la presión, una conversación sobre el riesgo de diabetes, una pregunta de colesterol y un medicamento que no entiende. También un formulario, una referencia o una pregunta que ha cargado por meses. Esas son las visitas para las que está hecha esta clínica, en 7601 Canby Ave #6B, en Reseda. El clínico puede decidir si observar, tratar, hacer una prueba o enviarle a otro lugar. La atención primaria es también el lugar que todavía tiene la historia la próxima vez. La urgencia a menudo no. Si un problema ha sido el mismo por semanas, llame y pida cita en lugar de sumar otro fin de semana en una urgencia que no conoce sus medicamentos. Traiga los frascos. Pregunte si podemos atenderle. La clínica no publica una lista de planes que acepte. Confirme ambas cosas antes de viajar.",
        },
      },
      {
        h: { en: "Help that is not this suite", es: "Ayuda que no es esta suite" },
        p: {
          en: "For a mental health crisis, call or text 988. That line is for people thinking about suicide or in severe emotional distress, and for people worried about someone else. For food, shelter, or help finding another clinic or a ride, 211 is the public directory for local services. Linking to those numbers is not a promise they will take you tonight, and it is not a promise this clinic provides housing or crisis counseling in suite 6B. Poison questions in the United States can go to Poison Control at 1-800-222-1222. If someone is unconscious after taking a substance, call 911. A weekday primary care visit can still be the right follow-up after a crisis has been stabilized somewhere else. Bring the discharge paper. Ask which medicines changed. Do not assume the emergency clinician and the clinic share a chart unless you have been told they do.",
          es: "En una crisis de salud mental, llame o envíe un mensaje al 988. Esa línea es para personas que piensan en el suicidio o están en una angustia emocional grave, y para quienes se preocupan por otra persona. Para comida, refugio o ayuda para encontrar otra clínica o un transporte, el 211 es el directorio público de servicios locales. Enlazar esos números no es una promesa de que le recibirán esta noche, y no es una promesa de que esta clínica da vivienda o consejería de crisis en la suite 6B. Las preguntas por envenenamiento en Estados Unidos pueden ir a Poison Control al 1-800-222-1222. Si alguien está inconsciente después de tomar una sustancia, llame al 911. Una visita de atención primaria de lunes a viernes igual puede ser el seguimiento correcto después de que una crisis se estabilizó en otro lugar. Traiga el papel de alta. Pregunte qué medicamentos cambiaron. No suponga que el clínico de emergencias y la clínica comparten un expediente a menos que le hayan dicho que sí.",
        },
      },
      {
        h: { en: "How this clinic is set up", es: "Cómo está organizada esta clínica" },
        p: {
          en: "Canby Community Clinic is a nonprofit at 7601 Canby Ave #6B, Reseda. The phone is (818) 674-4414. The hours are weekdays from 9 to 5. People come from Canoga Park, Winnetka, Northridge, Lake Balboa, and Tarzana. English and Spanish are available. If you need an interpreter, ask when you call. The visit you get is the one a person confirms. A note on the website does not hold a chair. This page is not a diagnosis of your symptom, and it cannot see you. Use it to pick a door: 911, urgent care, or a planned clinic visit. If you pick the clinic, say how long the problem has been present and what you have already tried. That helps staff decide whether you belong on the calendar or in another building today. When the answer is another building, go there. Do not argue the schedule into an emergency service it does not have.",
          es: "Canby Community Clinic es una organización sin fines de lucro en 7601 Canby Ave #6B, Reseda. El teléfono es (818) 674-4414. El horario es de lunes a viernes, de 9 a 5. La gente viene de Canoga Park, Winnetka, Northridge, Lake Balboa y Tarzana. Hay atención en inglés y en español. Si necesita un intérprete, pídalo cuando llame. La visita que obtiene es la que una persona confirma. Una nota en el sitio web no reserva una silla. Esta página no es un diagnóstico de su síntoma y no puede verle. Úsela para elegir una puerta: el 911, una urgencia o una visita planeada en la clínica. Si elige la clínica, diga cuánto tiempo lleva el problema y qué ya intentó. Eso ayuda al personal a decidir si le corresponde el calendario o otro edificio hoy. Cuando la respuesta es otro edificio, vaya allí. No discuta el horario hasta convertirlo en un servicio de emergencia que no tiene.",
        },
      },
    ],
  },
  {
    slug: "spanish-clinic",
    seoTitle: "Spanish-Speaking Clinic in Reseda | Canby",
    seoDescription:
      "Canby Community Clinic offers information in English and Spanish at 7601 Canby Ave #6B, Reseda. Ask for an interpreter when you call (818) 674-4414.",
    title: { en: "A clinic in Reseda where you can start in Spanish", es: "Una clínica en Reseda donde puede empezar en español" },
    lede: {
      en: "The search is not really for a language. It is for a visit where you are not translating your own symptoms while the clock runs.",
      es: "La búsqueda no es realmente de un idioma. Es de una visita en la que usted no esté traduciendo sus propios síntomas mientras corre el reloj.",
    },
    image: "/media/articles/spanish-clinic.jpg",
    imageAlt: {
      en: "A clinician and a patient talking in a small office.",
      es: "Un clínico y un paciente conversan en una oficina pequeña.",
    },
    source: "https://www.lep.gov/",
    sourceLabel: "LEP.gov",
    service: "education",
    sections: [
      {
        h: { en: "English and Spanish here", es: "Inglés y español aquí" },
        p: {
          en: "Information at Canby Community Clinic is available in English and Spanish. The address is 7601 Canby Ave #6B, Reseda. The phone is (818) 674-4414, weekdays from 9 to 5. The clinic is a nonprofit community clinic, not a hospital and not an emergency department. If you want the visit in Spanish, say so when you schedule. If you need an interpreter, or you want a family member in the room, say that too. Staff will tell you what they can arrange that day. They will not promise a specific person will be the one who sees you. A request on this website is not a confirmed visit. Use the form only for a callback, with your name, phone, and language. Leave symptoms, identification numbers, and medical history off the form. The phone is the private way to say them. This page is not a diagnosis in either language.",
          es: "La información en Canby Community Clinic está disponible en inglés y en español. La dirección es 7601 Canby Ave #6B, Reseda. El teléfono es (818) 674-4414, de lunes a viernes de 9 a 5. La clínica es una clínica comunitaria sin fines de lucro, no un hospital y no una sala de emergencias. Si quiere la visita en español, dígalo al programar. Si necesita un intérprete, o quiere a un familiar en el cuarto, dígalo también. El personal le dirá qué puede organizar ese día. No prometerá que una persona en particular será quien le atienda. Una solicitud en este sitio web no es una visita confirmada. Use el formulario solo para una devolución de llamada, con su nombre, teléfono e idioma. Deje los síntomas, los números de identificación y la historia médica fuera del formulario. El teléfono es la forma privada de decirlos. Esta página no es un diagnóstico en ninguno de los dos idiomas.",
        },
      },
      {
        h: { en: "A missed word can matter", es: "Una palabra perdida puede importar" },
        p: {
          en: "A missed word about a dose, an allergy, a pregnancy, or a warning sign is not a small mistake. Public guidance on language access exists because people have been harmed when they nodded through a plan they did not follow. You should not have to pretend you understood. Ask for the explanation again. Ask what the medicine is for, how many times a day, and what to do if you miss a dose. Ask what side effect should make you call. Ask the name of the next test and who calls you with the result. If the answer comes too fast, say so. A good visit can slow down. Bring a written list if that is easier than remembering under pressure. If you prefer to speak Spanish and the materials are in English, ask for a spoken explanation. A paper you cannot read is not informed consent, even if you signed it.",
          es: "Una palabra perdida sobre una dosis, una alergia, un embarazo o una señal de alarma no es un error pequeño. La orientación pública sobre el acceso al idioma existe porque ha habido daño cuando las personas asintieron a un plan que no siguieron. Usted no debería tener que fingir que entendió. Pida la explicación otra vez. Pregunte para qué es el medicamento, cuántas veces al día y qué hacer si olvida una dosis. Pregunte qué efecto debe hacerle llamar. Pregunte el nombre de la siguiente prueba y quién le llama con el resultado. Si la respuesta llega demasiado rápido, dígalo. Una buena visita puede ir más despacio. Traiga una lista escrita si eso es más fácil que recordar bajo presión. Si prefiere hablar español y los papeles están en inglés, pida una explicación hablada. Un papel que no puede leer no es un consentimiento informado, aunque lo haya firmado.",
        },
      },
      {
        h: { en: "What to say when you call", es: "Qué decir cuando llame" },
        p: {
          en: "You can start with Necesito la visita en español. Then name the kind of visit: a checkup, blood pressure, blood sugar, a medicine, a test result, or you are not sure. You do not need perfect medical Spanish or perfect English. Ordinary words are enough. If a child or a parent is the person who needs the visit, say who that is so the appointment is under the right name. Call before you travel. The clinic does not publish a list of accepted plans. Not having insurance is something you can say on the same call. Having Medi-Cal is also something to say, including the plan name, without assuming the answer is yes. Ask what to bring. Ask about parking and the entrance at suite 6B. Write the time down only after a person confirms it. If you reach a recording after hours, call back on a weekday.",
          es: "Puede empezar con Necesito la visita en español. Luego nombre el tipo de visita: una revisión, la presión, el azúcar, un medicamento, un resultado de prueba, o no está seguro. No necesita un español médico perfecto ni un inglés perfecto. Las palabras sencillas bastan. Si un niño o un padre es la persona que necesita la visita, diga quién es para que la cita quede a su nombre. Llame antes de viajar. La clínica no publica una lista de planes aceptados. No tener seguro es algo que puede decir en la misma llamada. Tener Medi-Cal también es algo que debe decir, incluido el nombre del plan, sin suponer que la respuesta es sí. Pregunte qué traer. Pregunte por el estacionamiento y la entrada de la suite 6B. Anote la hora solo después de que una persona la confirme. Si llega a una grabación fuera de horario, vuelva a llamar en un día de semana.",
        },
      },
      {
        h: { en: "Interpreters and family", es: "Intérpretes y familia" },
        p: {
          en: "A family member who translates can be a comfort, and can also be a problem. Some people do not want a child, a spouse, or a parent to hear questions about sexual health, violence, mental health, or a diagnosis. You can ask for the sensitive part of the visit without that relative in the room. You can also ask that a minor not be the interpreter. Professional interpreters are trained to say what you said, not to soften it and not to add advice. The clinic will tell you what it can arrange. It will not pretend an interpreter is in the room if one is not. If you understand some English, you can still ask for Spanish when the topic is a dose or a consent. Mixing languages is allowed. The goal is that you can repeat the plan back. If you cannot repeat it, the visit is not finished, even if the clock is.",
          es: "Un familiar que traduce puede ser un apoyo, y también puede ser un problema. Algunas personas no quieren que un hijo, una pareja o un padre oiga preguntas sobre salud sexual, violencia, salud mental o un diagnóstico. Puede pedir la parte delicada de la visita sin ese familiar en el cuarto. También puede pedir que un menor no sea el intérprete. Los intérpretes profesionales están entrenados para decir lo que usted dijo, no para suavizarlo ni para agregar un consejo. La clínica le dirá qué puede organizar. No va a fingir que hay un intérprete en el cuarto si no lo hay. Si entiende algo de inglés, igual puede pedir español cuando el tema es una dosis o un consentimiento. Mezclar idiomas está permitido. La meta es que usted pueda repetir el plan. Si no puede repetirlo, la visita no terminó, aunque el reloj sí.",
        },
      },
      {
        h: { en: "This office is in Reseda", es: "Esta oficina está en Reseda" },
        p: {
          en: "This page is for Reseda and for people who drive in from Canoga Park, Winnetka, Northridge, Lake Balboa, Van Nuys, and Tarzana. It is not a Pasadena office, and ranking a search from the east side of Los Angeles will not move the suite. Call and ask whether the trip makes sense before you come across the city. The west Valley has other hospitals and urgent cares for problems that cannot wait. Use them when the problem is an emergency. Use this clinic when you need a planned conversation in Spanish about primary care. That includes checkups, screening questions, medicines, and help understanding a paper from somewhere else. It does not include every specialty. If the clinician sends you out for a mammogram, a lab, or a specialist, ask whether that next site can see you in Spanish too. Language access should not stop at the clinic door.",
          es: "Esta página es para Reseda y para personas que vienen en carro desde Canoga Park, Winnetka, Northridge, Lake Balboa, Van Nuys y Tarzana. No es una oficina de Pasadena, y posicionar una búsqueda desde el este de Los Ángeles no mueve la suite. Llame y pregunte si el viaje tiene sentido antes de cruzar la ciudad. El oeste del Valle tiene otros hospitales y urgencias para problemas que no pueden esperar. Úselos cuando el problema es una emergencia. Use esta clínica cuando necesita una conversación planeada en español sobre atención primaria. Eso incluye revisiones, preguntas de evaluación, medicamentos y ayuda para entender un papel de otro lugar. No incluye todas las especialidades. Si el clínico le envía a una mamografía, un laboratorio o un especialista, pregunte si ese siguiente sitio también puede atenderle en español. El acceso al idioma no debería detenerse en la puerta de la clínica.",
        },
      },
      {
        h: { en: "Keep details off the form", es: "Deje los detalles fuera del formulario" },
        p: {
          en: "Do not type symptoms, test results, or a Social Security number into the website form. Those details belong on a phone call or in the visit. The form can carry your name, a callback number, the language, and the kind of visit, such as checkup or blood pressure. A person at the clinic confirms the day and the time. Until that happens, you do not have an appointment. If you are calling for someone else, know their full name and date of birth, and be ready for staff to ask whether you have permission to speak for them. Privacy rules are not an insult. They keep a chart from being discussed with the wrong person. For an emergency, skip the form and call 911. For a mental health crisis, call or text 988. The weekday line, (818) 674-4414, is for a planned visit between 9 and 5. Come only after that visit is real.",
          es: "No escriba síntomas, resultados de pruebas ni un número de Seguro Social en el formulario del sitio. Esos detalles pertenecen a una llamada o a la visita. El formulario puede llevar su nombre, un teléfono para devolver la llamada, el idioma y el tipo de visita, como una revisión o la presión. Una persona de la clínica confirma el día y la hora. Hasta que eso pase, usted no tiene una cita. Si llama por otra persona, sepa su nombre completo y su fecha de nacimiento, y esté listo para que el personal pregunte si tiene permiso para hablar por ella. Las reglas de privacidad no son una ofensa. Evitan que un expediente se hable con la persona equivocada. En una emergencia, deje el formulario y llame al 911. En una crisis de salud mental, llame o envíe un mensaje al 988. La línea de lunes a viernes, (818) 674-4414, es para una visita planeada entre las 9 y las 5. Venga solo cuando esa visita sea real.",
        },
      },
    ],
  },
  {
    slug: "first-visit",
    seoTitle: "What to Bring to a Clinic Visit in Reseda",
    seoDescription:
      "A practical list for a first or return visit at Canby Community Clinic, 7601 Canby Ave #6B. Medicines, questions, ID. Call (818) 674-4414 before you come.",
    title: { en: "What to bring so a short visit is not wasted", es: "Qué traer para que una visita corta no se pierda" },
    lede: {
      en: "The visit fails in a predictable way: the medicine list is at home, the question is remembered in the parking lot, and the result from last year is a photo you cannot find.",
      es: "La visita falla de una forma predecible: la lista de medicamentos se quedó en casa, la pregunta se recuerda en el estacionamiento y el resultado del año pasado es una foto que no encuentra.",
    },
    image: "/media/articles/first-visit.jpg",
    imageAlt: {
      en: "Medicine bottles, keys, and a blank list by a door.",
      es: "Frascos de medicamentos, llaves y una lista en blanco junto a una puerta.",
    },
    source: "https://medlineplus.gov/talkingwithyourdoctor.html",
    sourceLabel: "MedlinePlus",
    service: "primary-care",
    sections: [
      {
        h: { en: "Bring what you already have", es: "Traiga lo que ya tiene" },
        p: {
          en: "Bring photo identification if you have it. Bring insurance information if you have coverage, but do not stay home because you do not. Bring your pharmacy’s name and phone number. Bring old results, discharge papers, or vaccine records on paper if you can find them. A photo on your phone is better than nothing if the text is readable. You do not need every record ever made. You need enough that the clinician is not guessing about the last blood pressure, the last sugar test, or the reason another office sent you. If you have no papers, come anyway and say that. Canby Community Clinic is a nonprofit at 7601 Canby Ave #6B in Reseda. Call (818) 674-4414 on a weekday from 9 to 5 before you arrive. A request on this website is not a confirmed visit. Ask what this particular visit requires so you are not turned around for a missing item you could have brought.",
          es: "Traiga identificación con foto si la tiene. Traiga información del seguro si tiene cobertura, pero no se quede en casa porque no la tiene. Traiga el nombre y el teléfono de su farmacia. Traiga resultados viejos, papeles de alta o registros de vacunas en papel si puede encontrarlos. Una foto en el teléfono es mejor que nada si el texto se lee. No necesita todos los documentos que alguna vez existieron. Necesita lo suficiente para que el clínico no esté adivinando la última presión, la última prueba de azúcar o la razón por la que otra oficina le envió. Si no tiene papeles, venga igual y dígalo. Canby Community Clinic es una organización sin fines de lucro en 7601 Canby Ave #6B, en Reseda. Llame al (818) 674-4414 de lunes a viernes, de 9 a 5, antes de llegar. Una solicitud en este sitio web no es una visita confirmada. Pregunte qué exige esta visita en particular para que no le hagan volver por algo que pudo haber traído.",
        },
      },
      {
        h: { en: "Do not email the records", es: "No envíe los documentos por correo" },
        p: {
          en: "Diagnoses, lab reports, member numbers, and Social Security numbers do not belong in a normal email or in the form on this website. Those messages are easy to misplace and hard to protect. Call the clinic and ask how records should travel, if they are needed at all. Sometimes a list you wrote is enough. Sometimes a prior office can send a record after you sign a release. Do not assume another hospital automatically shares a chart with this suite. If you want records sent, ask who should receive them and how. Bring the paper copy to the visit when the file is thin. Black out nothing you want the clinician to see, and do not hand over a stack you yourself have never looked at if a shorter list would do. The goal is a usable story, not a suitcase of folders. Privacy is part of the visit, not a barrier to it.",
          es: "Los diagnósticos, los informes de laboratorio, los números de miembro y los números de Seguro Social no pertenecen a un correo normal ni al formulario de este sitio. Esos mensajes se extravían con facilidad y son difíciles de proteger. Llame a la clínica y pregunte cómo deben viajar los documentos, si es que hacen falta. A veces basta una lista que usted escribió. A veces una oficina anterior puede enviar un expediente después de que usted firme una autorización. No suponga que otro hospital comparte automáticamente un expediente con esta suite. Si quiere que envíen documentos, pregunte quién debe recibirlos y cómo. Traiga la copia en papel a la visita cuando el archivo es delgado. No tape nada que quiera que el clínico vea, y no entregue una pila que usted mismo nunca miró si una lista más corta sirve. La meta es una historia útil, no una maleta de carpetas. La privacidad es parte de la visita, no una barrera.",
        },
      },
      {
        h: { en: "Questions worth writing down", es: "Preguntas que vale anotar" },
        p: {
          en: "Four questions cover most visits. What is the plan? What would make you tell me to come back sooner? Which medicine is the one I should not stop on my own? Where is the test done, where it is done, and who calls me with the result? Write them on paper so they survive the nervousness of the room. Add the one worry you keep postponing, even if it feels small or embarrassing. Clinicians cannot answer a question you never say. If there is time for only one, lead with the one that changes what you do this week. Ask for the answer in words you can repeat to a family member later. Ask what the next step is called, so you can book it or decline it on purpose. This page is not a diagnosis, and it cannot rank your questions for you. The visit can. Leave with the answers written, not only remembered.",
          es: "Cuatro preguntas cubren la mayoría de las visitas. ¿Cuál es el plan? ¿Qué le haría decirme que regrese antes? ¿Cuál es el medicamento que no debo dejar por mi cuenta? ¿Dónde se hace la prueba, dónde se hace y quién me llama con el resultado? Escríbalas en papel para que sobrevivan a los nervios del cuarto. Agregue la preocupación que sigue posponiendo, aunque le parezca pequeña o incómoda. Los clínicos no pueden responder una pregunta que usted nunca dice. Si solo hay tiempo para una, empiece por la que cambia lo que hace esta semana. Pida la respuesta con palabras que pueda repetir después a un familiar. Pregunte cómo se llama el siguiente paso, para que pueda pedirlo o rechazarlo a propósito. Esta página no es un diagnóstico y no puede ordenar sus preguntas por usted. La visita sí. Váyase con las respuestas escritas, no solo recordadas.",
        },
      },
      {
        h: { en: "Medicines, allergies, pharmacy", es: "Medicamentos, alergias, farmacia" },
        p: {
          en: "Bring the bottles, or a list that includes prescriptions, pills from the pharmacy shelf, vitamins, and supplements. Include the dose and how often you actually take it, which may not match the label. Include creams, inhalers, eye drops, and injections. Include a medicine you stopped and the reason, especially if it made you sick or you could not pay for it. Name allergies, and say what happened: a rash, swelling, vomiting, or only an upset stomach. Those are different problems. Give the pharmacy name so a prescription, if one is written, has somewhere to go. The clinic does not stock every medicine and cannot promise a drug is on the shelf somewhere else. Ask how to take the medicine before you leave if getting it has been hard. Ask which medicine interacts with the one you buy for pain. Do not start a leftover antibiotic because it is already in the cabinet.",
          es: "Traiga los frascos, o una lista que incluya recetas, pastillas del estante de la farmacia, vitaminas y suplementos. Incluya la dosis y con qué frecuencia la toma de verdad, que puede no coincidir con la etiqueta. Incluya cremas, inhaladores, gotas para los ojos e inyecciones. Incluya un medicamento que dejó y la razón, sobre todo si le hizo daño o no pudo pagarlo. Nombre las alergias y diga qué pasó: un sarpullido, hinchazón, vómito o solo malestar del estómago. Son problemas distintos. Dé el nombre de la farmacia para que una receta, si se escribe, tenga adónde ir. La clínica no tiene todos los medicamentos y no puede prometer que un fármaco está en el estante de otro lugar. Pregunte cómo tomar el medicamento antes de irse si conseguirlo ha sido difícil. Pregunte cuál medicamento interfiere con el que compra para el dolor. No empiece un antibiótico que sobró porque ya está en el gabinete.",
        },
      },
      {
        h: { en: "The time has to be real", es: "La hora tiene que ser real" },
        p: {
          en: "Arrive only after the time is real. A person at the clinic confirms the day, the time, and what to bring. The door is suite 6B on Canby Avenue in Reseda. Call ahead about parking and the entrance, and ask about step-free access if you need it. Come a few minutes early if staff asked you to, and call if you are running late rather than assuming the slot will hold. If you need to cancel, call as soon as you know so someone else can use the time. The clinic is not an emergency department and does not take unscheduled emergencies. If you feel worse on the way and the problem is chest pain, trouble breathing, or sudden weakness, stop and call 911 instead of trying to make the appointment. For a routine visit, bring the list and the questions. English or Spanish is fine. Say which you want when you schedule, and ask for an interpreter if you need one.",
          es: "Llegue solo cuando la hora sea real. Una persona de la clínica confirma el día, la hora y qué traer. La puerta es la suite 6B en Canby Avenue, en Reseda. Llame antes por el estacionamiento y la entrada, y pregunte por el acceso sin escalones si lo necesita. Llegue unos minutos antes si el personal se lo pidió, y llame si va tarde en lugar de suponer que el espacio se mantiene. Si necesita cancelar, llame en cuanto lo sepa para que otra persona pueda usar la hora. La clínica no es una sala de emergencias y no atiende emergencias sin programar. Si se siente peor en el camino y el problema es dolor de pecho, dificultad para respirar o debilidad súbita, deténgase y llame al 911 en lugar de intentar llegar a la cita. Para una visita de rutina, traiga la lista y las preguntas. El inglés o el español están bien. Diga cuál quiere al programar, y pida un intérprete si lo necesita.",
        },
      },
      {
        h: { en: "A short visit can still help", es: "Una visita corta igual ayuda" },
        p: {
          en: "A first visit will not finish every screening that exists. It should settle the concern you have now, the medicines you take, and the next step. That next step might be a return visit, a blood test at another site, or a different office. Ask where each piece happens before you agree. The clinic does not claim that a specific insurance plan is accepted. If you have Medi-Cal or another card, bring it and let staff tell you what it means for this visit. If you have no card, say that on the phone. You will not be asked to perform a perfect history. You will be asked what hurts, what you take, and what you are afraid of. Answer those. Then ask the clinician to say the plan once more while you write. That last minute is the part people skip, and it is the part that makes the visit useful after you leave the room.",
          es: "Una primera visita no terminará todas las evaluaciones que existen. Debe resolver la preocupación que tiene ahora, los medicamentos que toma y el siguiente paso. Ese siguiente paso puede ser una visita de regreso, un análisis de sangre en otro sitio u otra oficina. Pregunte dónde se hace cada parte antes de aceptar. La clínica no afirma que un plan de seguro específico sea aceptado. Si tiene Medi-Cal u otra tarjeta, tráigala y deje que el personal le diga qué significa para esta visita. Si no tiene tarjeta, dígalo por teléfono. No le pedirán que recite una historia perfecta. Le preguntarán qué duele, qué toma y qué le da miedo. Responda eso. Luego pida al clínico que diga el plan una vez más mientras usted escribe. Ese último minuto es la parte que la gente se salta, y es la parte que hace útil la visita después de salir del cuarto.",
        },
      },
    ],
  },
  {
    slug: "years-without-doctor",
    seoTitle: "Haven't Seen a Doctor in Years | Reseda",
    seoDescription:
      "You do not need a perfect history to book a checkup in Reseda. Canby Community Clinic sees people who have been away from care. Call (818) 674-4414.",
    title: { en: "You have not seen a doctor in years. Start anyway.", es: "No ha visto a un médico en años. Empiece igual." },
    lede: {
      en: "The long gap is the reason people do not call. It is also the reason the call is worth making. You do not have to arrive with a tidy chart.",
      es: "El largo tiempo sin ir es la razón por la que la gente no llama. También es la razón por la que la llamada vale la pena. No tiene que llegar con un expediente ordenado.",
    },
    image: "/media/articles/years-without-doctor.jpg",
    imageAlt: {
      en: "A man waits in a chair by a window.",
      es: "Un hombre espera en una silla junto a una ventana.",
    },
    source: "https://medlineplus.gov/healthcheckup.html",
    sourceLabel: "MedlinePlus",
    service: "primary-care",
    sections: [
      {
        h: { en: "A long gap still counts", es: "Un largo tiempo igual cuenta" },
        p: {
          en: "If you cannot remember the last time a clinician checked your blood pressure, your medicines, or which screening you might be due for, that gap is the reason to call. Years without a visit are common. People lose insurance, move, work a shift that never matches clinic hours, or leave after a visit that felt rushed or rude. None of that erases the value of starting again. Canby Community Clinic in Reseda sees people who have been away from care. You do not need a letter from a previous doctor. You do not need to reconstruct every illness since childhood. You need the concern you have now, the medicines you actually take, and the illnesses you remember. If you only remember sugar, pressure, or the medicine from the pharmacy on Sherman Way, that is a start. Say how long it has been, in plain words, on the call.",
          es: "Si no recuerda la última vez que un clínico revisó su presión, sus medicamentos o qué evaluación podría tocarle, ese tiempo es la razón para llamar. Los años sin una visita son comunes. La gente pierde el seguro, se muda, trabaja un turno que nunca coincide con el horario de la clínica, o se va después de una visita que se sintió apurada o grosera. Nada de eso borra el valor de empezar de nuevo. Canby Community Clinic en Reseda atiende a personas que han estado lejos de la atención. No necesita una carta de un médico anterior. No necesita reconstruir cada enfermedad desde la niñez. Necesita la preocupación que tiene ahora, los medicamentos que de verdad toma y las enfermedades que recuerda. Si solo recuerda el azúcar, la presión o la medicina de la farmacia en Sherman Way, eso es un comienzo. Diga cuánto tiempo ha pasado, con palabras sencillas, en la llamada.",
        },
      },
      {
        h: { en: "You will not be scolded", es: "No le van a regañar" },
        p: {
          en: "Shame keeps people out, some days. A lecture about the years you missed does not lower blood pressure. A useful visit names what is going on now and what can be done next. You can say you are embarrassed. You can say you are afraid of what a test might show. You can say you stopped a medicine because it was expensive or because it made you feel worse. Those are medical facts, not confessions. The clinician’s job is to sort them, not to score your past. If a visit ever feels disrespectful, you can say so and you can ask for the plan without the commentary. You can also ask to speak in Spanish, or to have a family member step out. This page is not a diagnosis of what those years did to you. Nobody can know that from a paragraph. The first visit is how the questions get specific.",
          es: "La vergüenza mantiene a la gente afuera, algunos días. Un regaño por los años que faltó no baja la presión. Una visita útil nombra lo que pasa ahora y lo que se puede hacer después. Puede decir que le da pena. Puede decir que le da miedo lo que una prueba pueda mostrar. Puede decir que dejó un medicamento porque era caro o porque le hizo sentir peor. Esos son datos médicos, no confesiones. El trabajo del clínico es ordenarlos, no calificar su pasado. Si una visita se siente irrespetuosa, puede decirlo y puede pedir el plan sin el comentario. También puede pedir hablar en español, o que un familiar salga. Esta página no es un diagnóstico de lo que esos años le hicieron. Nadie puede saberlo desde un párrafo. La primera visita es como las preguntas se vuelven concretas.",
        },
      },
      {
        h: { en: "Ask on the call", es: "Pregunte en la llamada" },
        p: {
          en: "Insurance is a fair question on the same call as the medical one. Ask it. Not having insurance is not a reason to stay home, and having insurance is not a guarantee the visit is covered. Canby Community Clinic does not publish which plans it accepts. Staff confirm what they can before you travel. The number is (818) 674-4414. The address is 7601 Canby Ave #6B, Reseda. Hours are weekdays from 9 to 5. The clinic is a nonprofit, which still does not mean the visit is free. If a lab or an imaging center is part of the plan, that site may happen at another site. Ask before you agree. If you have started an application with Covered California or Medi-Cal, say so. This office does not process those applications. It can still talk with you about a visit while you sort the paperwork out, or it can tell you to wait. Either answer is better than silence.",
          es: "El seguro es una pregunta justa en la misma llamada que la pregunta médica. Hágala. No tener seguro no es una razón para quedarse en casa, y tener seguro no es una garantía de que la visita esté cubierta. Canby Community Clinic no publica qué planes acepta. El personal confirma lo que puede antes de que usted viaje. El número es (818) 674-4414. La dirección es 7601 Canby Ave #6B, Reseda. El horario es de lunes a viernes, de 9 a 5. La clínica es una organización sin fines de lucro, lo que igual no significa que la visita sea gratis. Si un laboratorio o un centro de imágenes es parte del plan, ese sitio puede estar en otro sitio. Pregunte antes de aceptar. Si empezó una solicitud con Covered California o Medi-Cal, dígalo. Esta oficina no tramita esas solicitudes. Igual puede hablar con usted de una visita mientras ordena los papeles, o puede decirle que espere. Cualquiera de las dos respuestas es mejor que el silencio.",
        },
      },
      {
        h: { en: "What the first visit can cover", es: "Qué puede cubrir la primera visita" },
        p: {
          en: "A clinician needs a history you can give without notes: illnesses you remember, surgeries, pregnancies, allergies, tobacco, alcohol, and family illnesses such as diabetes, early heart disease, or cancer. Blood pressure is often part of the visit because it is common and quiet. A conversation about diabetes risk, cholesterol, depression, tobacco, and which cancer screening might apply can be part of it too. The right list depends on age and history. Public screening advice is not the same for a 28-year-old and a 60-year-old. Vaccines you may have missed can be discussed, and they may not be given in this room. Bring any home readings and any bottle you take more than twice a month. Mention weight change, chest pain, bleeding, or a lump directly. Those are not small talk. They change whether this is a routine checkup or a problem that needs a sooner look.",
          es: "Un clínico necesita una historia que usted pueda dar sin notas: enfermedades que recuerda, cirugías, embarazos, alergias, tabaco, alcohol y enfermedades en la familia como diabetes, enfermedad cardíaca temprana o cáncer. La presión arterial a menudo es parte de la visita porque es común y silenciosa. Una conversación sobre el riesgo de diabetes, el colesterol, la depresión, el tabaco y qué evaluación de cáncer podría aplicar también puede ser parte. La lista correcta depende de la edad y la historia. El consejo público de evaluación no es el mismo para una persona de 28 años y una de 60. Las vacunas que pudo haberse perdido se pueden comentar, y puede que no se pongan en este cuarto. Traiga cualquier medida de casa y cualquier frasco que tome más de dos veces al mes. Mencione un cambio de peso, dolor de pecho, sangrado o un bulto de forma directa. No son charla menor. Cambian si esto es una revisión de rutina o un problema que necesita verse antes.",
        },
      },
      {
        h: { en: "You will not finish every test", es: "No terminará todas las pruebas" },
        p: {
          en: "You will not finish every test that exists on the first afternoon. Trying to do that is how visits become a pile of papers and no plan. A better end point is one or two next steps you understand. That might be a return visit for blood pressure, a lab order with the place named first, or a referral for a screening this clinic does not perform in suite 6B. Mammograms, colonoscopies, and many blood draws happen in other buildings. Ask where it is done, and how you will hear the result. Write the plan down before you stand up. If you leave unsure, ask the clinician to say it again. You should also leave knowing what can wait and what should not. Years away from care do not obligate you to accept every test offered. They do obligate a clear reason for the ones you do accept. Consent is a sentence you understand, not a signature you rush.",
          es: "No terminará todas las pruebas que existen en la primera tarde. Intentar hacerlo es como las visitas se vuelven una pila de papeles y ningún plan. Un mejor punto final es uno o dos pasos siguientes que usted entienda. Puede ser una visita de regreso por la presión, una orden de laboratorio con el lugar nombrado primero, o una referencia para una evaluación que esta clínica no hace en la suite 6B. Las mamografías, las colonoscopias y muchas extracciones de sangre ocurren en otros edificios. Pregunte dónde, dónde se hace y cómo recibirá el resultado. Escriba el plan antes de ponerse de pie. Si se va sin estar seguro, pida al clínico que lo diga otra vez. También debe irse sabiendo qué puede esperar y qué no. Los años lejos de la atención no le obligan a aceptar todas las pruebas que le ofrezcan. Sí obligan a una razón clara para las que sí acepta. El consentimiento es una frase que usted entiende, no una firma que apura.",
        },
      },
      {
        h: { en: "Where to call in Reseda", es: "Dónde llamar en Reseda" },
        p: {
          en: "Call (818) 674-4414. The clinic is at 7601 Canby Ave #6B, Reseda, CA 91335, weekdays from 9 to 5. If you are coming from Northridge, Canoga Park, Winnetka, Lake Balboa, or Tarzana, say so only if it helps with the time of day. You do not need to recite a medical history for the website. A website request is not a confirmed visit. Wait until a person tells you when to come. The suite is not an emergency department. Chest pain, sudden weakness, trouble breathing, fainting, or bleeding you cannot control is 911, even if you have been meaning to book a checkup. For a mental health crisis, call or text 988. For the checkup itself, one phone call is the whole assignment. Tell them it has been years, tell them the worry if you have one, and ask where it is done. Then put the confirmed time on a calendar you actually look at.",
          es: "Llame al (818) 674-4414. La clínica está en 7601 Canby Ave #6B, Reseda, CA 91335, de lunes a viernes de 9 a 5. Si viene de Northridge, Canoga Park, Winnetka, Lake Balboa o Tarzana, dígalo solo si ayuda con la hora del día. No necesita recitar una historia médica para el sitio web. Una solicitud en el sitio web no es una visita confirmada. Espere hasta que una persona le diga cuándo venir. La suite no es una sala de emergencias. Dolor de pecho, debilidad súbita, dificultad para respirar, desmayo o un sangrado que no puede controlar es el 911, aunque lleve tiempo queriendo pedir una revisión. En una crisis de salud mental, llame o envíe un mensaje al 988. Para la revisión en sí, una llamada es toda la tarea. Diga que han pasado años, diga la preocupación si la tiene y pregunte si podemos atenderle. Luego ponga la hora confirmada en un calendario que de verdad mire.",
        },
      },
    ],
  },
  {
    slug: "reseda-clinic",
    seoTitle: "Community Clinic in Reseda, CA | Canby",
    seoDescription:
      "Canby Community Clinic, formerly Pura Vida, is at 7601 Canby Ave #6B, Reseda, CA 91335. Weekdays 9–5. English and Spanish. Call (818) 674-4414.",
    title: { en: "The community clinic on Canby Avenue, in Reseda", es: "La clínica comunitaria en Canby Avenue, en Reseda" },
    lede: {
      en: "If you searched for a clinic near Reseda, Canoga Park, or the west Valley, this is the address, the hours, and the honest limit of what a webpage can promise.",
      es: "Si buscó una clínica cerca de Reseda, Canoga Park o el oeste del Valle, esta es la dirección, el horario y el límite honesto de lo que una página puede prometer.",
    },
    image: "/media/articles/reseda-clinic.jpg",
    imageAlt: {
      en: "A late-afternoon street in the San Fernando Valley.",
      es: "Una calle al atardecer en el Valle de San Fernando.",
    },
    source: "https://hcai.ca.gov/",
    sourceLabel: "HCAI",
    service: "primary-care",
    sections: [
      {
        h: { en: "Address, hours, and phone", es: "Dirección, horario y teléfono" },
        p: {
          en: "Canby Community Clinic, formerly Pura Vida Community Clinic, is at 7601 Canby Ave #6B, Reseda, CA 91335. The phone is (818) 674-4414. The hours are Monday through Friday, 9 to 5. The clinic is closed Saturday and Sunday. English and Spanish are available. Call for parking, the entrance, and step-free access before the first visit. Do not come for a medical emergency. This suite is not an emergency department, and the website is not watched after hours. A request on this website is not a confirmed visit. A time is real only when a person at the clinic confirms the day and what to bring. If you need a same-day emergency service, call 911. If you need a planned visit, call during weekday hours and say whether you want English or Spanish. Write the confirmed time down. Do not rely on a map pin alone to tell you the suite number. It is 6B.",
          es: "Canby Community Clinic, antes Pura Vida Community Clinic, está en 7601 Canby Ave #6B, Reseda, CA 91335. El teléfono es (818) 674-4414. El horario es de lunes a viernes, de 9 a 5. La clínica está cerrada el sábado y el domingo. Hay atención en inglés y en español. Llame por el estacionamiento, la entrada y el acceso sin escalones antes de la primera visita. No venga por una emergencia médica. Esta suite no es una sala de emergencias, y el sitio no se vigila fuera de horario. Una solicitud en este sitio web no es una visita confirmada. Una hora es real solo cuando una persona de la clínica confirma el día y qué traer. Si necesita un servicio de emergencia el mismo día, llame al 911. Si necesita una visita planeada, llame en horario de lunes a viernes y diga si quiere inglés o español. Anote la hora confirmada. No se fíe solo de un pin del mapa para saber el número de suite. Es la 6B.",
        },
      },
      {
        h: { en: "Who the clinic is for", es: "Para quién es la clínica" },
        p: {
          en: "The clinic is for people who have had trouble getting care because of insurance, language, transportation, or the wait for an appointment. That includes neighbors in Reseda and people who drive from Canoga Park, Winnetka, Northridge, Lake Balboa, and Tarzana. It is not a Pasadena clinic. Searching from the east side of Los Angeles and then driving across the city to the wrong suite wastes the day. Call first if you are outside the west Valley. Adults who need a checkup, a follow-up, or help understanding a medicine are the usual callers. People who have not been seen in years are usual callers too. You do not need to prove that you tried enough other clinics before this one. You do need to say what kind of visit you want so staff can say whether this office is the right door. If it is not, ask what kind of site you should look for instead.",
          es: "La clínica es para personas que han tenido dificultad para recibir atención por el seguro, el idioma, el transporte o la espera de una cita. Eso incluye vecinos de Reseda y quienes vienen en carro desde Canoga Park, Winnetka, Northridge, Lake Balboa y Tarzana. No es una clínica de Pasadena. Buscar desde el este de Los Ángeles y luego manejar al otro lado de la ciudad hasta la suite equivocada pierde el día. Llame primero si está fuera del oeste del Valle. Los adultos que necesitan una revisión, un seguimiento o ayuda para entender un medicamento son quienes suelen llamar. Las personas que no han sido atendidas en años también suelen llamar. No necesita probar que intentó suficientes otras clínicas antes de esta. Sí necesita decir qué tipo de visita quiere para que el personal diga si esta oficina es la puerta correcta. Si no lo es, pregunte qué tipo de sitio debería buscar.",
        },
      },
      {
        h: { en: "What you can ask to book", es: "Qué puede pedir para agendar" },
        p: {
          en: "You can ask for a general visit or for follow-up of something that is stable. You can ask for a blood pressure check and other screening conversations, including diabetes risk and cholesterol. You can ask for help arranging a basic test, and where it will be done, before you agree. You can ask for help understanding a medicine, without a promise that every medicine is in stock at a pharmacy. You can ask what the next step is if the service is not offered in this suite. Cancer screening such as a mammogram or a colonoscopy is often another building. Vaccines may be too. The clinician decides what fits your age and history. This page is not a diagnosis, and it does not order those tests. Bring old results if the question is about a number you already have. Bring the bottles if the question is about a dose. Two written questions are enough for a short visit.",
          es: "Puede pedir una visita general o el seguimiento de algo que está estable. Puede pedir una revisión de la presión y otras conversaciones de evaluación, incluido el riesgo de diabetes y el colesterol. Puede pedir ayuda para coordinar una prueba básica, con el lugar nombrado antes de que usted acepte. Puede pedir ayuda para entender un medicamento, sin una promesa de que todo medicamento está en existencia en una farmacia. Puede preguntar cuál es el siguiente paso si el servicio no se ofrece en esta suite. Una evaluación de cáncer, como una mamografía o una colonoscopia, a menudo es otro edificio. Las vacunas también pueden serlo. El clínico decide qué corresponde a su edad y su historia. Esta página no es un diagnóstico y no ordena esas pruebas. Traiga resultados viejos si la pregunta es sobre un número que ya tiene. Traiga los frascos si la pregunta es sobre una dosis. Dos preguntas escritas bastan para una visita corta.",
        },
      },
      {
        h: { en: "A request is not a time", es: "Una solicitud no es una hora" },
        p: {
          en: "Call, or send a callback request with your name, phone number, language, and the kind of visit. Do not put symptoms, lab results, or a Social Security number on the form. A person confirms the appointment. Until you hear that confirmation, do not take time off work and do not tell a ride that the visit is set. If the clinic cannot see you for the problem you described, the useful answer is where to go instead, not a vague promise. Ask about your insurance on that same call. Nonprofit does not mean the visit is automatically free, and a card in your wallet does not mean the visit is automatically paid. The clinic will not list a guess to make the page look complete. If you need to change the time, call. Do not send a relative to explain a cancellation at the door after the slot is already lost. The schedule only works if the people on it can be reached.",
          es: "Llame, o envíe una solicitud de devolución de llamada con su nombre, número de teléfono, idioma y el tipo de visita. No ponga síntomas, resultados de laboratorio ni un número de Seguro Social en el formulario. Una persona confirma la cita. Hasta que oiga esa confirmación, no pida tiempo libre en el trabajo y no le diga a un transporte que la visita ya está fijada. Si la clínica no puede atenderle por el problema que describió, la respuesta útil es adónde ir, no una promesa vaga. Pregunte por su seguro en esa misma llamada. Sin fines de lucro no significa que la visita sea automáticamente gratis, y una tarjeta en la cartera no significa que la visita esté automáticamente pagada. La clínica no va a publicar una suposición para que la página parezca completa. Si necesita cambiar la hora, llame. No envíe a un familiar a explicar una cancelación en la puerta cuando el espacio ya se perdió. El horario solo funciona si se puede localizar a las personas que están en él.",
        },
      },
      {
        h: { en: "A nonprofit in the Valley", es: "Una organización sin fines de lucro en el Valle" },
        p: {
          en: "The clinic is a nonprofit 501(c)(3) and has been listed with the state as a community clinic under its former name, Pura Vida Community Clinic. That public record is not the same thing as a promise about your visit. Community clinic is a licensing description. It means a setting for outpatient care, not a free event and not a hospital. Volunteers help the clinic run, but a scheduled medical visit is done by a licensed professional. You can ask who will see you. You can ask what the visit is for. You cannot assume every specialty is in suite 6B, because it is not. Primary care is the work of this office: the ongoing story, the ordinary problems, and the decision about what needs a different building. If you want the state listing for your own records, ask the clinic which name appears on the public file. Do not rely on an old sign alone.",
          es: "La clínica es una organización sin fines de lucro 501(c)(3) y ha figurado en el estado como clínica comunitaria bajo su nombre anterior, Pura Vida Community Clinic. Ese registro público no es lo mismo que una promesa sobre su cuenta. Clínica comunitaria es una descripción de licencia. Significa un lugar de atención ambulatoria, no un evento gratis y no un hospital. Los voluntarios ayudan a que la clínica funcione, pero una visita médica programada la hace un profesional con licencia. Puede preguntar quién le atenderá. Puede preguntar para qué es la visita. No puede suponer que todas las especialidades están en la suite 6B, porque no lo están. La atención primaria es el trabajo de esta oficina: la historia que sigue, los problemas comunes y la decisión de qué necesita otro edificio. Si quiere el registro estatal para sus propios documentos, pregunte a la clínica qué nombre aparece en el archivo público. No se fíe solo de un letrero viejo.",
        },
      },
      {
        h: { en: "What this office is not", es: "Qué no es esta oficina" },
        p: {
          en: "This office is not an emergency department, not a same-hour urgent care, and not a place that diagnoses you from a web form. It is not open at night. It does not replace 911, and it does not replace 988 if you are in a mental health crisis. It does not process Medi-Cal or Covered California applications. It does not promise that a specific insurance plan is accepted. It does not do every lab, every vaccine, or every cancer screening inside the suite. It does not give legal advice or immigration advice. What it can do is see you for primary care on a confirmed weekday, explain the next step in English or Spanish, and tell you the insurance question before you travel. If that is the door you need, call (818) 674-4414. If you need a hospital, go to a hospital. Knowing the difference is the most useful fact on this page.",
          es: "Esta oficina no es una sala de emergencias, no es una urgencia de la misma hora y no es un lugar que le diagnostica desde un formulario web. No está abierta de noche. No reemplaza al 911, y no reemplaza al 988 si está en una crisis de salud mental. No tramita solicitudes de Medi-Cal ni de Covered California. No promete que un plan de seguro específico sea aceptado. No hace todos los laboratorios, todas las vacunas ni todas las evaluaciones de cáncer dentro de la suite. No da consejo legal ni consejo de inmigración. Lo que sí puede hacer es atenderle para atención primaria en un día de semana confirmado, explicar el siguiente paso en inglés o en español, y decirle la pregunta del seguro antes de que viaje. Si esa es la puerta que necesita, llame al (818) 674-4414. Si necesita un hospital, vaya a un hospital. Conocer la diferencia es el dato más útil de esta página.",
        },
      },
    ],
  },
  ...moreArticles,
];
