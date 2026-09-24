import type { L } from "@/components/site/i18n";

export type Offering = {
  slug: string;
  title: L;
  sentence: L;
  helps: L[];
  when: L[];
  expect: L[];
};

export const offerings: Offering[] = [
  {
    slug: "primary-care",
    title: { en: "Primary care", es: "Atención primaria" },
    sentence: {
      en: "A general visit in Reseda for a new concern, a stable condition, or when you are not sure where to start.",
      es: "Una visita general en Reseda para un problema nuevo, una condición estable, o cuando no sabe por dónde empezar.",
    },
    helps: [
      { en: "A concern that is not an emergency", es: "Un problema que no es una emergencia" },
      { en: "Follow-up of something already known and stable", es: "Seguimiento de algo ya conocido y estable" },
      { en: "A medication question", es: "Una pregunta sobre un medicamento" },
      { en: "A referral when this clinic is not the right place", es: "Una referencia cuando esta clínica no es el lugar correcto" },
    ],
    when: [
      { en: "You want a checkup", es: "Quiere una revisión" },
      { en: "Something has changed and you need a clinician to hear it", es: "Algo cambió y necesita que un clínico lo escuche" },
      { en: "You have not been seen in a long time", es: "Hace mucho que no lo atienden" },
    ],
    expect: [
      { en: "Your story, history, and medicines come first", es: "Primero su historia y sus medicamentos" },
      { en: "Measurements and an exam only when they change the plan", es: "Medidas y examen solo cuando cambian el plan" },
      { en: "A named next step before you leave", es: "Un siguiente paso con nombre antes de irse" },
    ],
  },
  {
    slug: "screenings",
    title: { en: "Preventive screenings", es: "Evaluaciones preventivas" },
    sentence: {
      en: "Checks matched to your age and history. A result is not, by itself, a diagnosis.",
      es: "Revisiones según su edad e historia. Un resultado, por sí solo, no es un diagnóstico.",
    },
    helps: [
      { en: "Blood pressure", es: "Presión arterial" },
      { en: "Diabetes risk", es: "Riesgo de diabetes" },
      { en: "Cholesterol and heart risk, when appropriate", es: "Colesterol y riesgo cardíaco, cuando corresponde" },
      { en: "Vaccines and the screening conversation for your age", es: "Vacunas y la conversación de detección para su edad" },
    ],
    when: [
      { en: "You have not had a recent check", es: "No ha tenido una revisión reciente" },
      { en: "A previous result was unclear", es: "Un resultado anterior no quedó claro" },
    ],
    expect: [
      { en: "Not every test is done in suite 6B", es: "No toda prueba se hace en la suite 6B" },
      { en: "The place is named before a test is ordered", es: "El lugar se nombra antes de ordenar una prueba" },
    ],
  },
  {
    slug: "labs",
    title: { en: "Testing and labs", es: "Pruebas y laboratorio" },
    sentence: {
      en: "Help arranging basic tests when a clinician decides they are appropriate.",
      es: "Ayuda para coordinar pruebas básicas cuando un clínico decide que corresponden.",
    },
    helps: [
      { en: "Basic laboratory work", es: "Laboratorio básico" },
      { en: "A plan for where the test happens", es: "Un plan de dónde se hace la prueba" },
    ],
    when: [
      { en: "A clinician has said a test would change the decision", es: "Un clínico dijo que una prueba cambiaría la decisión" },
    ],
    expect: [
      { en: "Ask where it is, the place, and how you will hear the result", es: "Pregunte dónde es, el lugar y cómo recibirá el resultado" },
    ],
  },
  {
    slug: "medications",
    title: { en: "Medication support", es: "Apoyo con medicamentos" },
    sentence: {
      en: "Help understanding a prescription, or asking whether a medicine can be found. Stock is not guaranteed.",
      es: "Ayuda para entender una receta, o para preguntar si un medicamento se puede encontrar. La existencia no está garantizada.",
    },
    helps: [
      { en: "What a medicine is for", es: "Para qué es un medicamento" },
      { en: "A current list, including vitamins", es: "Una lista actual, incluidas las vitaminas" },
    ],
    when: [
      { en: "You are unsure how to take something", es: "No está seguro de cómo tomar algo" },
      { en: "You cannot find a medicine you were prescribed", es: "No encuentra un medicamento que le recetaron" },
    ],
    expect: [
      { en: "Bring the bottles or a written list, and your pharmacy’s phone number", es: "Traiga los frascos o una lista, y el teléfono de su farmacia" },
    ],
  },
  {
    slug: "education",
    title: { en: "Understanding your care", es: "Entender su atención" },
    sentence: {
      en: "Plain-language explanation during a visit. This is not a stack of articles standing in for a clinician.",
      es: "Una explicación en lenguaje sencillo durante la visita. No es una pila de artículos en lugar de un clínico.",
    },
    helps: [
      { en: "What a result means for you", es: "Qué significa un resultado para usted" },
      { en: "What can wait, and what cannot", es: "Qué puede esperar y qué no" },
    ],
    when: [
      { en: "You left another visit without understanding the plan", es: "Salió de otra visita sin entender el plan" },
    ],
    expect: [
      { en: "English or Spanish. Ask for an interpreter when you book.", es: "Inglés o español. Pida un intérprete al reservar." },
    ],
  },
  {
    slug: "navigation",
    title: { en: "Where to go next", es: "A dónde seguir" },
    sentence: {
      en: "When the service is not offered here, help naming a public program or another office. Not a guarantee they will take you.",
      es: "Cuando el servicio no se ofrece aquí, ayuda para nombrar un programa público u otra oficina. No es una garantía de que le recibirán.",
    },
    helps: [
      { en: "A next place, with a name", es: "Un siguiente lugar, con nombre" },
      { en: "Official directories for food, coverage, and crisis care", es: "Directorios oficiales de comida, cobertura y crisis" },
    ],
    when: [
      { en: "You already know this clinic cannot do the thing you need", es: "Ya sabe que esta clínica no puede hacer lo que necesita" },
    ],
    expect: [
      { en: "You should hear that plainly, not as a maybe", es: "Debe escucharlo con claridad, no como un tal vez" },
    ],
  },
];
