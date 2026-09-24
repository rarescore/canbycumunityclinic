import { useEffect, useRef } from "react";
import { useTx } from "@/components/site/i18n";
import { CallButton, RequestButton } from "@/components/site/ui";

function DesktopHero() {
  const { tx } = useTx();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches) return;
    let frame = 0;
    const paint = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;
      if (!desktop.matches || reduce.matches) {
        hero.style.removeProperty("--desktop-scroll");
        return;
      }
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      hero.style.setProperty("--desktop-scroll", String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    desktop.addEventListener("change", schedule);
    reduce.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      desktop.removeEventListener("change", schedule);
      reduce.removeEventListener("change", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section ref={heroRef} className="desktop-clinic-hero relative hidden h-[calc(100svh-6rem)] min-h-[560px] overflow-hidden bg-ink md:block">
      <img
        src="/media/hero-desk.png"
        alt=""
        className="hero-drift absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="desktop-hero-shade absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
      <div className="desktop-hero-content relative flex h-full items-end px-12 pb-10 lg:px-16">
        <div>
          <p className="text-[11px] font-medium tracking-[0.22em] text-cream/85 uppercase">
            {tx({ en: "Reseda · Nonprofit clinic", es: "Reseda · Clínica sin fines de lucro" })}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-cream lg:text-5xl">
            {tx({ en: "Primary care for this neighborhood.", es: "Atención primaria para este vecindario." })}
          </h1>
          <div className="mt-5 flex gap-3">
            <RequestButton variant="inverse" />
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneHero() {
  const trackRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);
  const welcome = "WELCOME.";

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let seeking = false;
    let want = 0;

    const paint = (progress: number) => {
      const word = wordRef.current;
      if (!word) return;
      const shown = Math.round(Math.min(1, Math.max(0, progress)) * welcome.length);
      const letters = word.children;
      for (let i = 0; i < letters.length; i += 1) {
        (letters[i] as HTMLElement).style.opacity = i < shown ? "1" : "0";
      }
    };

    const seekTo = (time: number) => {
      want = time;
      if (seeking || !Number.isFinite(video.duration)) return;
      if (Math.abs(video.currentTime - want) < 0.03) return;
      seeking = true;
      const onSeeked = () => {
        video.removeEventListener("seeked", onSeeked);
        seeking = false;
        if (Math.abs(video.currentTime - want) >= 0.03) seekTo(want);
      };
      video.addEventListener("seeked", onSeeked);
      video.currentTime = want;
    };

    const read = () => {
      const duration = video.duration;
      if (reduce) {
        paint(1);
        if (Number.isFinite(duration) && duration > 0) seekTo(0);
        return;
      }
      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const passed = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = passed / scrollable;
      paint(progress);
      if (!Number.isFinite(duration) || duration <= 0) return;
      seekTo(Math.min(duration - 0.04, progress * duration));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(read);
    };

    video.pause();
    video.addEventListener("loadedmetadata", read);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    read();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={trackRef} className="relative h-[170svh] bg-[#e7e4df] md:hidden">
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden bg-[#e7e4df]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/media/hero-phone.mp4?v=3"
          poster="/media/hero-phone-poster.jpg?v=3"
          muted
          playsInline
          preload="auto"
        />
        <p
          ref={wordRef}
          aria-label="Welcome"
          className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[2.6rem] leading-none font-bold tracking-[0.14em] text-[#14940f]"
        >
          {welcome.split("").map((letter) => (
            <span
              key={letter + welcome.indexOf(letter)}
              className="opacity-0 [-webkit-text-stroke:2px_#111] [paint-order:stroke_fill]"
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export function CommunityLapse() {
  return (
    <>
      <DesktopHero />
      <PhoneHero />
    </>
  );
}
