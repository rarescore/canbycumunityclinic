import { useEffect, useRef, useState } from "react";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";
import { CallButton, Container, IllustrativeNote, RequestButton } from "@/components/site/ui";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function ScrollHero() {
  const { tx } = useTx();
  const stageRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);

    const onScroll = () => {
      const stage = stageRef.current;
      if (!stage || media.matches) return;
      const total = stage.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-stage.getBoundingClientRect().top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const p = reduced ? 1 : progress;
  const first = 1 - clamp((p - 0.18) / 0.34);
  const second = clamp((p - 0.42) / 0.34);

  return (
    <section ref={stageRef} className="hero-stage bg-ink text-cream" aria-label={tx({ en: "Introduction", es: "Introducción" })}>
      <div className="hero-pin" style={{ ["--p" as string]: String(p) }}>
        <div className="hero-photo absolute inset-0">
          <img
            src="/media/listen.jpg"
            alt={tx({
              en: "A clinician sits with a patient and listens. Illustrative photograph.",
              es: "Una persona clínica escucha a una paciente. Fotografía ilustrativa.",
            })}
            className="h-full w-full object-cover"
            width={1792}
            height={1008}
          />
          <div className="hero-shade absolute inset-0" />
        </div>

        <Container className="relative z-10 flex h-full flex-col justify-end pb-28 md:pb-12">
          <p className="hero-rise text-[11px] font-medium tracking-[0.22em] text-green-soft uppercase" style={{ animationDelay: "80ms" }}>
            {tx({ en: "Canby Community Clinic · Reseda", es: "Canby Community Clinic · Reseda" })}
          </p>

          <h1 className="sr-only">
            {tx({
              en: "Heard clearly. Then a plan you can follow.",
              es: "Escuchado con claridad. Después, un plan que puede seguir.",
            })}
          </h1>
          <div className="relative mt-4 min-h-28 max-w-5xl md:min-h-56" aria-hidden>
            <p className="font-serif text-[2.75rem] tracking-[-0.015em] text-cream md:text-[5.6rem]" style={{ opacity: first }}>
              {tx({ en: "Heard clearly.", es: "Escuchado con claridad." })}
            </p>
            <p
              className="absolute inset-x-0 top-0 font-serif text-[2.75rem] tracking-[-0.015em] text-cream md:text-[5.6rem]"
              style={{ opacity: second }}
            >
              {tx({
                en: "Then a plan you can follow.",
                es: "Después, un plan que puede seguir.",
              })}
            </p>
          </div>

          <div className="pointer-events-none absolute top-1/3 right-8 hidden flex-col items-end gap-3 lg:flex" aria-hidden>
            <span className="text-[11px] tracking-[0.22em] uppercase" style={{ opacity: 0.35 + first * 0.65 }}>
              01 · {tx({ en: "Listen", es: "Escuchar" })}
            </span>
            <span className="text-[11px] tracking-[0.22em] uppercase" style={{ opacity: 0.35 + second * 0.65 }}>
              02 · {tx({ en: "A plan", es: "Un plan" })}
            </span>
          </div>

          <p className="hero-rise mt-3 max-w-xl text-sm leading-relaxed text-cream/85 md:mt-6 md:text-lg" style={{ animationDelay: "220ms" }}>
            {tx({
              en: "Formerly Pura Vida. A weekday clinic on Canby Avenue — a real conversation about what is happening, and what comes next.",
              es: "Antes Pura Vida. Una clínica de lunes a viernes en Canby Avenue: una conversación real sobre qué pasa y qué sigue.",
            })}
          </p>

          <div className="hero-rise mt-4 flex flex-col gap-2 sm:flex-row md:mt-8 md:gap-3" style={{ animationDelay: "340ms" }}>
            <CallButton variant="inverse" />
            <RequestButton variant="quiet" />
          </div>

          <div className="mt-4 flex items-end justify-between gap-6 md:mt-8">
            <p className="text-sm text-cream/80">
              {clinic.street}
              <span className="hidden sm:inline"> · {clinic.city}</span>
              <span className="mt-1 block text-cream/70">
                {tx({ en: "Weekdays 9–5 · English and Spanish", es: "Lunes a viernes, 9–5 · Inglés y español" })}
              </span>
            </p>
            <div className="hidden items-center gap-3 md:flex" aria-hidden>
              <span className="text-xs tracking-widest text-cream/70 uppercase">
                {tx({ en: "Scroll", es: "Deslice" })}
              </span>
              <span className="relative block h-14 w-px bg-cream/30">
                <span className="hero-scroll-line absolute inset-x-0 top-0 h-full w-px bg-green-soft" />
              </span>
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-cream/20">
            <div className="h-px bg-green-soft" style={{ width: `${Math.round(p * 100)}%` }} />
          </div>
          <div className="mt-3 hidden max-w-md md:block">
            <IllustrativeNote light />
          </div>
        </Container>
      </div>
    </section>
  );
}
