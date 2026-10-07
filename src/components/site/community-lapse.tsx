import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { useTx } from "@/components/site/i18n";
import { RequestButton } from "@/components/site/ui";
import { ChatWithUs } from "@/components/site/clinic-chat";
import { clinic } from "@/lib/clinic";

export function CommunityLapse() {
  const { tx } = useTx();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mobile = window.matchMedia("(max-width: 860px)").matches;
    const src = mobile ? "/media/clinic/hero-mobile.mp4" : "/media/clinic/hero-desktop.mp4";
    video.poster = mobile ? "/media/clinic/hero-mobile-poster.jpg" : "/media/clinic/hero-desktop-poster.jpg";
    if (video.getAttribute("src") !== src) {
      video.src = src;
      video.load();
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }
    const start = () => {
      void video.play().catch(() => {});
    };
    const kick = () => {
      if (video.readyState >= 2) start();
      else video.addEventListener("canplay", start, { once: true });
    };
    const timer = window.setTimeout(kick, 400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="neighborhood-hero hero-film">
      <img className="hero-ambient" src="/media/clinic/hero-poster.jpg" alt="" />
      <div className="hero-above">
        <span>{tx({ en: `Formerly ${clinic.former}`, es: `Antes, ${clinic.former}`, hy: `Առաջ՝ ${clinic.former}` })}</span>
        <span>{tx({ en: "Nonprofit clinic", es: "Clínica comunitaria", hy: "Համայնքային կլինիկա" })}</span>
      </div>
      <div className="hero-film-frame">
        <video
          ref={videoRef}
          className="hero-film-video"
          src="/media/clinic/hero-desktop.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/clinic/hero-desktop-poster.jpg"
          width={1920}
          height={1088}
          aria-label={tx({
            en: "A parent and child overlooking the Valley at sunset.",
            es: "Una madre y su hija miran el Valle al atardecer.",
            hy: "Մայր և աղջիկ՝ հովիտը մայրամուտին։",
          })}
        >
        </video>
      </div>
      <div className="hero-film-copy">
          <p className="eyebrow">
            {tx({
              en: "Canby Community Clinic · Reseda",
              es: "Canby Community Clinic · Reseda",
              hy: "Canby Community Clinic · Ռեսեդա",
            })}
          </p>
          <h1>
            <span>{tx({ en: "Primary care,", es: "Atención primaria,", hy: "Առաջնային խնամք՝" })}</span>
            <span>{tx({ en: "close to home.", es: "en su vecindario.", hy: "ձեր թաղում։" })}</span>
          </h1>
          <p>
            {tx({
              en: "Checkups, screenings, and follow-up for adults in Reseda. Request a time, or call.",
              es: "Revisiones, evaluaciones y seguimiento para adultos en Reseda. Pida una hora, o llame.",
              hy: "Ստուգումներ, զննումներ և հսկում մեծահասակների համար՝ Ռեսեդայում։ Ժամ խնդրեք, կամ զանգեք։",
            })}
          </p>
          <div className="hero-film-actions">
            <RequestButton variant="primary" />
            <a className="hero-phone" href={`tel:${clinic.phoneTel}`}>
              <Phone className="size-4 md:hidden" aria-hidden />
              {clinic.phoneDisplay}
            </a>
            <ChatWithUs inline />
          </div>
        </div>
      <div className="neighborhood-bottom hero-film-meta">
        <span>
          {clinic.street}, {clinic.city}
        </span>
        <span>
          {tx({ en: "Weekdays, 9 AM–5 PM", es: "Lunes a viernes, 9:00 a 5:00", hy: "Երկ–ուրբ, 9:00–17:00" })}
        </span>
        <Link to="/location">
          {tx({ en: "Directions", es: "Cómo llegar", hy: "Ինչպես գալ" })}
        </Link>
      </div>
    </section>
  );
}
