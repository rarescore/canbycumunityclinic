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
    title: { en: "Primary care", es: "Atención primaria", hy: "Առաջնային խնամք" },
    sentence: {
      en: "A checkup, a weekday concern, follow-up you already know you need, or a question about a medicine.",
      es: "Una revisión, un problema que puede esperar a un día de semana, un seguimiento que ya sabe que necesita, o una pregunta sobre un medicamento.",
      hy: "Ստուգում, աշխատանքային օրվա հարց, հսկում, որ արդեն գիտեք որ պետք է, կամ հարց դեղի մասին։",
    },
    helps: [
      { en: "A routine checkup", es: "Una revisión de rutina", hy: "Սովորական ստուգում" },
      { en: "A new concern that can wait for a weekday", es: "Un problema nuevo que puede esperar a un día de semana", hy: "Նոր հարց, որ կարող է սպասել աշխատանքային օրվա" },
      { en: "Follow-up for diabetes, high blood pressure, or cholesterol", es: "Seguimiento de diabetes, presión alta o colesterol", hy: "Հսկում շաքարախտի, բարձր ճնշման կամ խոլեստերինի" },
      { en: "A question about a medicine you take", es: "Una pregunta sobre un medicamento que toma", hy: "Հարց դեղի մասին, որ ընդունում եք" },
      { en: "A referral when you need another office", es: "Una referencia cuando necesita otra oficina", hy: "Ուղղորդում, երբ այլ գրասենյակ է պետք" },
    ],
    when: [
      { en: "You want a checkup", es: "Quiere una revisión", hy: "Ստուգում եք ուզում" },
      { en: "You have a question about a medicine", es: "Tiene una pregunta sobre un medicamento", hy: "Հարց ունեք դեղի մասին" },
      { en: "It has been a long time since you were seen", es: "Hace mucho que no lo atienden", hy: "Վաղուց չեք եղել բժշկի մոտ" },
    ],
    expect: [
      { en: "We start with why you came, your history, and your medicines", es: "Empezamos con el motivo, su historia y sus medicamentos", hy: "Սկսում ենք պատճառից, պատմությունից և դեղերից" },
      { en: "Blood pressure, and an exam when it fits the reason you came", es: "Presión, y un examen cuando corresponde al motivo", hy: "Ճնշում, և զննում, երբ համապատասխանում է պատճառին" },
      { en: "You leave knowing whether the next step is a medicine, a test, a follow-up, or another office", es: "Se va sabiendo si lo siguiente es un medicamento, una prueba, un seguimiento u otra oficina", hy: "Դուրս եք գալիս՝ իմանալով հաջորդը դեղ է, թեստ, հսկում, թե այլ գրասենյակ" },
    ],
  },
  {
    slug: "screenings",
    title: { en: "Screenings", es: "Evaluaciones", hy: "Զննումներ" },
    sentence: {
      en: "Blood pressure, diabetes risk, and cholesterol, matched to your age and history.",
      es: "Presión, riesgo de diabetes y colesterol, según su edad y su historia.",
      hy: "Ճնշում, դիաբետի ռիսկ և խոլեստերին՝ ըստ տարիքի և պատմության։",
    },
    helps: [
      { en: "Blood pressure", es: "Presión arterial", hy: "Արյան ճնշում" },
      { en: "Diabetes risk, when it fits your history", es: "Riesgo de diabetes, cuando corresponde a su historia", hy: "Դիաբետի ռիսկ, երբ համապատասխանում է պատմությանը" },
      { en: "Cholesterol, when it fits your history", es: "Colesterol, cuando corresponde a su historia", hy: "Խոլեստերին, երբ համապատասխանում է պատմությանը" },
    ],
    when: [
      { en: "You have not had these checks recently", es: "No ha tenido estas revisiones hace poco", hy: "Վերջերս այս ստուգումները չեք ունեցել" },
      { en: "A previous result was unclear", es: "Un resultado anterior no quedó claro", hy: "Նախորդ արդյունքը պարզ չէր" },
    ],
    expect: [
      { en: "Ask which checks fit you", es: "Pregunte qué revisiones le corresponden", hy: "Հարցրեք՝ որ ստուգումներն են ձեզ համապատասխանում" },
      { en: "Some blood tests are drawn at an outside lab. Ask where before you go", es: "Algunas pruebas de sangre se hacen en un laboratorio externo. Pregunte dónde antes de ir", hy: "Որոշ արյան թեստեր արվում են դրսի լաբորատորիայում։ Հարցրեք որտեղ, մինչ գնալը" },
    ],
  },
  {
    slug: "womens-care",
    title: { en: "Women’s care", es: "Atención de la mujer", hy: "Կանանց խնամք" },
    sentence: {
      en: "A checkup, a screening, or a question about a medicine.",
      es: "Una revisión, una evaluación o una pregunta sobre un medicamento.",
      hy: "Ստուգում, զննում կամ հարց դեղի մասին։",
    },
    helps: [
      { en: "A checkup", es: "Una revisión", hy: "Ստուգում" },
      { en: "Blood pressure and screenings that fit your age", es: "Presión y evaluaciones según su edad", hy: "Ճնշում և զննումներ՝ ըստ տարիքի" },
      { en: "A question about a medicine", es: "Una pregunta sobre un medicamento", hy: "Հարց դեղի մասին" },
    ],
    when: [
      { en: "You want a women’s health visit and are not sure where to start", es: "Quiere una visita de salud de la mujer y no sabe por dónde empezar", hy: "Կանանց առողջության այց եք ուզում և չգիտեք որտեղից սկսել" },
    ],
    expect: [
      { en: "You leave knowing what was checked", es: "Se va sabiendo qué se revisó", hy: "Դուրս եք գալիս՝ իմանալով ինչ է ստուգվել" },
      { en: "Mammograms and prenatal care are arranged at another office when they are needed", es: "Las mamografías y el control prenatal se coordinan en otra oficina cuando hacen falta", hy: "Մամոգրաֆիան և հղիության հսկումը, երբ պետք են, կազմակերպվում են այլ գրասենյակում" },
    ],
  },
  {
    slug: "chronic-care",
    title: { en: "Diabetes, pressure, cholesterol", es: "Diabetes, presión, colesterol", hy: "Դիաբետ, ճնշում, խոլեստերին" },
    sentence: {
      en: "Follow-up when you already know you have diabetes, high blood pressure, or high cholesterol.",
      es: "Seguimiento cuando ya sabe que tiene diabetes, presión alta o colesterol alto.",
      hy: "Հսկում, երբ արդեն գիտեք որ ունեք դիաբետ, բարձր ճնշում կամ բարձր խոլեստերին։",
    },
    helps: [
      { en: "Blood pressure checks", es: "Control de la presión", hy: "Ճնշման ստուգում" },
      { en: "Diabetes follow-up", es: "Seguimiento de diabetes", hy: "Դիաբետի հսկում" },
      { en: "Cholesterol follow-up", es: "Seguimiento del colesterol", hy: "Խոլեստերինի հսկում" },
      { en: "A review of the medicines you take", es: "Una revisión de los medicamentos que toma", hy: "Ձեր դեղերի վերանայում" },
    ],
    when: [
      { en: "It is time to be seen for a condition you already know about", es: "Toca que lo vean por una condición que ya conoce", hy: "Ժամանակն է, որ ընդունեն արդեն հայտնի վիճակի համար" },
      { en: "Something about that condition has changed", es: "Algo de esa condición cambió", hy: "Այդ վիճակում ինչ-որ բան փոխվել է" },
    ],
    expect: [
      { en: "Bring your medicines or a list", es: "Traiga sus medicamentos o una lista", hy: "Բերեք դեղերը կամ ցանկը" },
      { en: "Ask when the next lab or the next visit should be", es: "Pregunte cuándo toca el siguiente laboratorio o la siguiente visita", hy: "Հարցրեք՝ երբ պետք է լինի հաջորդ լաբորատորիան կամ հաջորդ այցը" },
    ],
  },
  {
    slug: "labs",
    title: { en: "Lab orders and results", es: "Órdenes de laboratorio y resultados", hy: "Լաբորատոր ուղղումներ և արդյունքներ" },
    sentence: {
      en: "When a clinician orders a test, we tell you where it is done and how you will hear the result.",
      es: "Cuando un clínico ordena una prueba, le decimos dónde se hace y cómo recibirá el resultado.",
      hy: "Երբ բուժաշխատողը թեստ է նշանակում, ասում ենք որտեղ է արվում և ինչպես կլսեք արդյունքը։",
    },
    helps: [
      { en: "Basic laboratory tests a clinician orders", es: "Pruebas de laboratorio básicas que ordena un clínico", hy: "Հիմնական լաբորատոր թեստեր, որ նշանակում է բուժաշխատողը" },
      { en: "Where the blood draw happens", es: "Dónde se hace la extracción", hy: "Որտեղ է արյուն վերցվում" },
      { en: "How you hear the result", es: "Cómo recibe el resultado", hy: "Ինչպես եք լսում արդյունքը" },
    ],
    when: [{ en: "A clinician has ordered a test", es: "Un clínico ordenó una prueba", hy: "Բուժաշխատողը թեստ է նշանակել" }],
    expect: [
      { en: "Ask where it is done", es: "Pregunte dónde se hace", hy: "Հարցրեք՝ որտեղ է արվում" },
      { en: "Ask when to call if you have not heard", es: "Pregunte cuándo llamar si no ha sabido nada", hy: "Հարցրեք՝ երբ զանգել, եթե դեռ չեք լսել" },
    ],
  },
];
