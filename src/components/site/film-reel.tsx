import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { clinic } from "@/lib/clinic";
import { useTx, type L } from "@/components/site/i18n";

type Frame = {
  to: "/appointments" | "/visit" | "/location" | "/insurance" | "/articles";
  src: string;
  alt: L;
  title: L;
  line: L;
};

const frames: Frame[] = [
  {
    to: "/appointments",
    src: "/media/clinic/call-kitchen.png",
    alt: {
      en: "A woman on a phone call at home.",
      es: "Una mujer habla por teléfono en casa.",
      hy: "Կինը տանը խոսում է հեռախոսով։",
    },
    title: { en: "Request an appointment", es: "Pedir una cita", hy: "Այց խնդրել" },
    line: {
      en: `Call ${clinic.phoneDisplay}, or send a request.`,
      es: `Llame al ${clinic.phoneDisplay}, o deje sus datos y le devolvemos la llamada.`,
      hy: `Զանգեք ${clinic.phoneDisplay}, կամ թողեք տվյալները, և մենք կզանգենք։`,
    },
  },
  {
    to: "/visit",
    src: "/media/clinic/door-tote.png",
    alt: {
      en: "A tote bag and jacket by a front door, ready to leave.",
      es: "Una bolsa de tela y una chaqueta junto a la puerta, listas para salir.",
      hy: "Կտորե պայուսակ և բաճկոն մուտքի դռան մոտ, դուրս գալու համար։",
    },
    title: { en: "Walk-ins", es: "Sin cita", hy: "Առանց գրանցման" },
    line: {
      en: "Welcome Monday–Friday, 9 AM–5 PM. Calling ahead is optional.",
      es: "De lunes a viernes, de 9:00 a 5:00. Si quiere, llame antes. No es obligatorio.",
      hy: "Երկուշաբթիից ուրբաթ, 9:00–17:00։ Կարող եք նախապես զանգել, բայց պարտադիր չէ։",
    },
  },
  {
    to: "/visit",
    src: "/media/clinic/pack-meds.png",
    alt: {
      en: "Medicine bottles being packed into a clear bag.",
      es: "Frascos de medicina que se guardan en una bolsa transparente.",
      hy: "Դեղի շշեր, որոնք դրվում են թափանցիկ պայուսակի մեջ։",
    },
    title: { en: "What to bring", es: "Qué traer", hy: "Ինչ բերել" },
    line: {
      en: "Photo ID if you have it, your medicines, and an insurance card if you have one.",
      es: "Una identificación con foto, si la tiene, sus medicinas y la tarjeta del seguro, si tiene una.",
      hy: "Լուսանկարով փաստաթուղթ, եթե ունեք, ձեր դեղերը և ապահովագրության քարտը, եթե կա։",
    },
  },
  {
    to: "/insurance",
    src: "/media/clinic/insurance-card.png",
    alt: {
      en: "A blank card taken from a wallet. Not a real insurance card.",
      es: "Una tarjeta en blanco sacada de una cartera. No es una tarjeta de seguro real.",
      hy: "Դատարկ քարտ՝ դրամապանակից։ Իրական ապահովագրության քարտ չէ։",
    },
    title: { en: "Insurance", es: "Seguro", hy: "Ապահովագրություն" },
    line: {
      en: "Bring the plan name if you have one. You can still come without a card.",
      es: "Si tiene plan, traiga el nombre. También puede venir sin tarjeta.",
      hy: "Եթե պլան ունեք, ասեք անունը։ Կարող եք գալ նաև առանց քարտի։",
    },
  },
  {
    to: "/location",
    src: "/media/clinic/canby-clinic-aerial-suite-6b.webp",
    alt: {
      en: "Aerial view of the Canby Community Clinic building, with Suite 6B, the parking lot entrance, and the main entrance marked.",
      es: "Vista aérea del edificio de Canby Community Clinic, con la Suite 6B, la entrada del estacionamiento y la entrada principal señaladas.",
      hy: "Canby Community Clinic-ի շենքը վերևից՝ նշված են Suite 6B-ն, ավտոկայանատեղիի մուտքը և գլխավոր մուտքը։",
    },
    title: { en: "Location", es: "Ubicación", hy: "Հասցե" },
    line: {
      en: `${clinic.street}, ${clinic.city}. Weekdays, 9 AM–5 PM.`,
      es: `${clinic.street}, ${clinic.city}. Lunes a viernes, 9 AM–5 PM.`,
      hy: `${clinic.street}, ${clinic.city}։ Երկ–Ուր, 9:00–17:00։`,
    },
  },
  {
    to: "/articles",
    src: "/media/clinic/reading.png",
    alt: {
      en: "A woman reading at a kitchen table.",
      es: "Una mujer lee en la mesa de la cocina.",
      hy: "Կինը կարդում է խոհանոցի սեղանի մոտ։",
    },
    title: { en: "Articles", es: "Artículos", hy: "Հոդվածներ" },
    line: {
      en: "Guides for Reseda. None of them is a diagnosis.",
      es: "Guías para quien vive en Reseda. Ninguna reemplaza una consulta.",
      hy: "Ուղեցույցներ Ռեսեդայի համար։ Սրանք այցի փոխարեն չեն։",
    },
  },
];

export function FilmReel() {
  const { tx } = useTx();
  const reelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobileQuery = window.matchMedia("(max-width: 860px)");
    if (mobileQuery.matches) {
      const track = reel.querySelector<HTMLElement>(".film-track");
      if (!track) return;
      const cards = () => Array.from(track.querySelectorAll<HTMLElement>(".film-card"));
      let index = 0;
      let timer = 0;
      const mark = () => {
        const list = cards();
        if (list.length < 2) return;
        reel.style.setProperty("--film", (index / (list.length - 1)).toFixed(4));
      };
      const go = (next: number) => {
        const list = cards();
        if (!list.length) return;
        index = (next + list.length) % list.length;
        const card = list[index];
        track.scrollTo({ left: Math.max(0, card.offsetLeft - 16), behavior: "smooth" });
        mark();
      };
      const start = () => {
        window.clearInterval(timer);
        timer = window.setInterval(() => go(index + 1), 2800);
      };
      const stop = () => window.clearInterval(timer);
      const onScroll = () => {
        const list = cards();
        if (!list.length) return;
        const left = track.scrollLeft;
        let nearest = 0;
        let best = Number.POSITIVE_INFINITY;
        list.forEach((card, i) => {
          const distance = Math.abs(card.offsetLeft - 16 - left);
          if (distance < best) {
            best = distance;
            nearest = i;
          }
        });
        index = nearest;
        mark();
      };
      track.addEventListener("pointerdown", stop);
      track.addEventListener("pointerup", start);
      track.addEventListener("scroll", onScroll, { passive: true });
      start();
      return () => {
        stop();
        track.removeEventListener("pointerdown", stop);
        track.removeEventListener("pointerup", start);
        track.removeEventListener("scroll", onScroll);
      };
    }

    let dead = false;
    let cleanup = () => {};

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (dead || !reelRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const root = reelRef.current;
      const track = root.querySelector<HTMLElement>(".film-track");
      if (!track) return;
      const ctx = gsap.context(() => {
        const travel = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);
        gsap.to(track, {
          x: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: root,
            pin: true,
            pinType: "fixed",
            scrub: 0.65,
            start: "top top",
            end: () => "+=" + Math.max(travel(), window.innerHeight * 0.8),
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              root.style.setProperty("--film", self.progress.toFixed(4));
            },
          },
        });
      }, root);
      const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);
      const onLoad = () => ScrollTrigger.refresh();
      root.querySelectorAll("img").forEach((img) => {
        if (!img.complete) img.addEventListener("load", onLoad, { once: true });
      });
      cleanup = () => {
        window.clearTimeout(refresh);
        root.querySelectorAll("img").forEach((img) => img.removeEventListener("load", onLoad));
        ctx.revert();
      };
    })();

    return () => {
      dead = true;
      cleanup();
    };
  }, []);

  return (
    <section
      ref={reelRef}
      className="film-reel"
      aria-label={tx({ en: "Before you come", es: "Antes de venir", hy: "Մինչև գալը" })}
    >
      <div className="film-head">
        <p className="eyebrow">{tx({ en: "Your visit", es: "Su visita", hy: "Ձեր այցը" })}</p>
        <h2>{tx({ en: "Before you come.", es: "Antes de venir.", hy: "Մինչև գալը։" })}</h2>
        <p className="film-credit">
          Photographs via Pexels. Waiting room by{" "}
          <a href="https://commons.wikimedia.org/wiki/File:A_waiting_room_at_a_medical_healthcare_clinic,_doctor%27s_office,_hospital.jpg">
            Harrison Keely
          </a>
          , <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </p>
        <div className="film-progress" aria-hidden="true">
          <span />
        </div>
      </div>
      <div className="film-track">
        {frames.map((frame) => (
          <Link key={frame.src} to={frame.to} className="film-card">
            <img src={frame.src} alt={tx(frame.alt)} width={1728} height={1152} loading="lazy" decoding="async" />
            <p className="film-caption">
              <strong>{tx(frame.title)}</strong>
              <span>{tx(frame.line)}</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
