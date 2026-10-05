import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Plus, Heart, MapPin, Clock } from "lucide-react";
import { offerings } from "@/lib/offerings";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";
import { CommunityLapse } from "@/components/site/community-lapse";
import { FilmReel } from "@/components/site/film-reel";
import { ResourceHub } from "@/components/site/place-page";
import { Container, Reveal, RequestButton, CallButton } from "@/components/site/ui";

import { servicePhoto } from "@/lib/service-photos";

const boardOrder = ["primary-care", "screenings", "womens-care", "chronic-care", "labs"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Canby Community Clinic | Care close to home in Reseda" },
      {
        name: "description",
        content:
          "Community healthcare in Reseda. Explore care, prepare for your visit, and request an appointment at Canby Community Clinic, formerly Pura Vida.",
      },
    ],
    links: [{ rel: "canonical", href: "https://canbycc.org/" }],
  }),
  component: Home,
});

function Home() {
  const { tx } = useTx();
  return (
    <div className="editorial-home">
      <CommunityLapse />
      <section className="trust-line">
        <Container>
          <span>
            {tx({
              en: "Primary care for adults in Reseda.",
              es: "Atención primaria para adultos en Reseda.",
              hy: "Առաջնային խնամք մեծահասակների համար՝ Ռեսեդայում։",
            })}
          </span>
          <Link to="/care-team">
            {tx({ en: "Who may care for you", es: "Quién puede atenderle", hy: "Ով կարող է ընդունել ձեզ" })}
            <ArrowUpRight size={14} />
          </Link>
        </Container>
      </section>
      <FilmReel />
      <section id="care" className="home-section">
        <Container>
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                {tx({
                  en: "Where to begin",
                  es: "Por dónde empezar",
                  hy: "Որտեղից սկսել",
                })}
              </p>
              <h2>
                {tx({
                  en: "What do you need today?",
                  es: "¿Qué necesita hoy?",
                  hy: "Ի՞նչ է պետք այսօր։",
                })}
              </h2>
            </div>
            <p>
              {tx({
                en: "Pick the one that matches.",
                es: "Elija lo que corresponda.",
                hy: "Ընտրեք այն, ինչ համապատասխանում է։",
              })}
            </p>
          </Reveal>
          <div className="care-paths">
            {[
              {
                to: "/visit" as const,
                n: "01",
                title: { en: "I’m new here", es: "Vengo por primera vez", hy: "Առաջին անգամ եմ գալիս" },
                body: {
                  en: "What to bring, how check-in works, and what happens in the room.",
                  es: "Qué traer, cómo se registra y qué pasa en el consultorio.",
                  hy: "Ինչ բերել, ինչպես եք գրանցվում, և ինչ է լինում սենյակում։",
                },
                link: {
                  en: "Plan your first visit",
                  es: "Prepárese para la primera visita",
                  hy: "Պատրաստվեք առաջին այցին",
                },
              },
              {
                to: "/services" as const,
                n: "02",
                title: {
                  en: "I need a service",
                  es: "Necesito atención",
                  hy: "Խնամք է պետք",
                },
                body: {
                  en: "Checkups, screenings, follow-up, and lab orders.",
                  es: "Revisiones, evaluaciones, seguimiento y órdenes de laboratorio.",
                  hy: "Ստուգումներ, զննումներ, հսկում և լաբորատոր ուղղումներ։",
                },
                link: {
                  en: "Explore our services",
                  es: "Ver los servicios",
                  hy: "Տեսնել ծառայությունները",
                },
              },
              {
                to: "/insurance" as const,
                n: "03",
                title: {
                  en: "I have an insurance question",
                  es: "Tengo una duda del seguro",
                  hy: "Հարց ունեմ ապահովագրության մասին",
                },
                body: {
                  en: "Call with the exact plan name on your card. If you do not have a card, say that.",
                  es: "Llame con el nombre exacto del plan en su tarjeta. Si no tiene tarjeta, dígalo.",
                  hy: "Զանգեք քարտի վրայի պլանի ճիշտ անունով։ Եթե քարտ չունեք, այդպես էլ ասեք։",
                },
                link: {
                  en: "Insurance",
                  es: "Seguro",
                  hy: "Ապահովագրություն",
                },
              },
            ].map((item) => (
              <Link key={item.n} to={item.to} className="care-path">
                <span className="path-number">{item.n}</span>
                <h3>{tx(item.title)}</h3>
                <p>{tx(item.body)}</p>
                <span className="path-link">
                  {tx(item.link)}
                  <ArrowUpRight size={21} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="service-board" aria-label={tx({ en: "Services", es: "Servicios", hy: "Ծառայություններ" })}>
        <div className="service-board-head">
          <div>
            <p className="eyebrow">{tx({ en: "Services", es: "Servicios", hy: "Ծառայություններ" })}</p>
            <h2>{tx({ en: "Care at the clinic.", es: "Atención en la clínica.", hy: "Խնամք կլինիկայում։" })}</h2>
          </div>
          <Link to="/services" className="text-link">
            {tx({ en: "All services", es: "Todos los servicios", hy: "Բոլոր ծառայությունները" })}
          </Link>
        </div>
        <div className="service-board-grid">
          {boardOrder.map((slug) => offerings.find((item) => item.slug === slug)).filter((item) => item != null).map((item) => (
            <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="service-tile">
              <img src={servicePhoto[item.slug]} alt="" width={1200} height={800} loading="lazy" decoding="async" />
              <span>
                <strong>{tx(item.title)}</strong>
                <em>{tx(item.sentence)}</em>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ResourceHub />
      <section className="community-section">
        <Container>
          <div className="community-grid">
            <div className="community-copy">
              <p className="eyebrow">
                {tx({
                  en: "Around the clinic",
                  es: "Alrededor de la clínica",
                  hy: "Կլինիկայի շուրջ",
                })}
              </p>
              <h2>
                {tx({
                  en: "Volunteer, or find help nearby.",
                  es: "Sea voluntario, o busque ayuda cerca.",
                  hy: "Դարձեք կամավոր, կամ գտեք օգնություն մոտակայքում։",
                })}
              </h2>
              <p>
                {tx({
                  en: "The resources page lists 211, Covered California, and other public directories. The clinic also takes volunteers.",
                  es: "La página de recursos lista 211, Covered California y otros directorios públicos. La clínica también recibe voluntarios.",
                  hy: "Ռեսուրսների էջում կան 211-ը, Covered California-ն և այլ հանրային ցուցակներ։ Կլինիկան նաև կամավորներ է ընդունում։",
                })}
              </p>
              <div className="community-links">
                <Link to="/resources">
                  {tx({
                    en: "Community resources",
                    es: "Recursos comunitarios",
                    hy: "Համայնքային ռեսուրսներ",
                  })}
                  <ArrowUpRight />
                </Link>
                <Link to="/volunteer">
                  {tx({ en: "Volunteer with us", es: "Sea voluntario", hy: "Դարձեք կամավոր" })}
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="giving-panel">
              <Heart size={32} strokeWidth={1.2} />
              <p className="eyebrow">
                {tx({
                  en: "Support",
                  es: "Apoyo",
                  hy: "Աջակցություն",
                })}
              </p>
              <h3>
                {tx({
                  en: "Give to the clinic.",
                  es: "Done a la clínica.",
                  hy: "Նվիրաբերեք կլինիկային։",
                })}
              </h3>
              <p>
                {tx({
                  en: `Canby Community Clinic Inc. is a 501(c)(3), EIN ${clinic.ein}. A gift supports the clinic. It is not set aside for one program.`,
                  es: `Canby Community Clinic Inc. es una 501(c)(3), EIN ${clinic.ein}. Un donativo apoya a la clínica. No queda apartado para un solo programa.`,
                  hy: `Canby Community Clinic Inc.-ը 501(c)(3) է, EIN ${clinic.ein}։ Նվերը աջակցում է կլինիկային։ Մեկ ծրագրի համար առանձնացված չէ։`,
                })}
              </p>
              <Link to="/give" className="giving-button">
                {tx({ en: "Donate", es: "Donar", hy: "Նվիրաբերել" })}
                <ArrowRight size={19} />
              </Link>
              <small>
                {tx({
                  en: "By mail or online",
                  es: "Por correo o en línea",
                  hy: "Փոստով կամ առցանց",
                })}
              </small>
            </div>
          </div>
        </Container>
        <img className="community-photo" src="/media/clinic/fence.png" alt="" loading="lazy" decoding="async" />
      </section>
      <section className="home-section home-faq">
        <Container>
          <div className="faq-grid">
            <div className="faq-side">
              <h2>{tx({ en: "On Canby Avenue.", es: "En Canby Avenue.", hy: "Canby Avenue-ում։" })}</h2>
              <div className="map-hold">
                <div className="map-square">
                  <iframe
                    title={tx({ en: "Map of the clinic", es: "Mapa de la clínica", hy: "Կլինիկայի քարտեզ" })}
                    src={`${clinic.mapsEmbed}&iwloc=near`}
                  />
                </div>
                <a className="map-open" href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {tx({ en: "Open in Maps", es: "Abrir en Maps", hy: "Բացել քարտեզում" })}
                </a>
              </div>
            </div>
            <div className="faq-list">
              {[
                {
                  q: {
                    en: "Do you speak Spanish?",
                    es: "¿Hablan español?",
                    hy: "Իսպաներեն խոսո՞ւմ եք։",
                  },
                  a: {
                    en: "Yes. The visit can be in English or Spanish. For another language, ask for an interpreter when you call or when you arrive.",
                    es: "Sí. La visita puede ser en inglés o en español. Para otro idioma, pida un intérprete al llamar o al llegar.",
                    hy: "Այո։ Այցը կարող է լինել անգլերեն կամ իսպաներեն։ Այլ լեզվի համար թարգմանիչ խնդրեք զանգելիս կամ երբ գաք։",
                  },
                },
                {
                  q: {
                    en: "Is this the same clinic as Pura Vida?",
                    es: "¿Es la misma clínica que Pura Vida?",
                    hy: "Սա նույն կլինիկա՞ն է, ինչ Pura Vida-ն։",
                  },
                  a: {
                    en: "Yes. Canby Community Clinic was Pura Vida Community Clinic. The address is the same.",
                    es: "Sí. Canby Community Clinic era Pura Vida Community Clinic. La dirección es la misma.",
                    hy: "Այո։ Canby Community Clinic-ը նախկին Pura Vida Community Clinic-ն է։ Հասցեն նույնն է։",
                  },
                },
                {
                  q: {
                    en: "Can I bring someone with me?",
                    es: "¿Puedo llevar a alguien?",
                    hy: "Կարո՞ղ եմ մեկին հետս բերել։",
                  },
                  a: {
                    en: "Yes. A family member or friend can come into the visit with you.",
                    es: "Sí. Un familiar o un amigo puede entrar a la visita con usted.",
                    hy: "Այո։ Ընտանիքի անդամը կամ ընկերը կարող է մտնել այցի ժամանակ։",
                  },
                },
              ].map((f) => (
                <details key={f.q.en}>
                  <summary>
                    {tx(f.q)}
                    <Plus size={19} />
                  </summary>
                  <p>{tx(f.a)}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="home-section visit-final">
        <Container>
          <div>
            <p className="eyebrow">
              {tx({
                en: "Canby Avenue",
                es: "Canby Avenue",
                hy: "Canby Avenue",
              })}
            </p>
            <h2>
              {tx({
                en: "Request a visit.",
                es: "Pida una visita.",
                hy: "Խնդրեք այց։",
              })}
            </h2>
            <div className="final-details">
              <span>
                <MapPin size={17} />
                {clinic.street}
              </span>
              <span>
                <Clock size={17} />
                {tx({
                  en: "Mon–Fri, 9 AM–5 PM",
                  es: "Lun–Vie, 9 AM–5 PM",
                  hy: "Երկ–Ուր, 9:00–17:00",
                })}
              </span>
            </div>
          </div>
          <div className="final-actions">
            <RequestButton variant="green" />
            <CallButton variant="secondary" />
          </div>
        </Container>
      </section>
    </div>
  );
}
