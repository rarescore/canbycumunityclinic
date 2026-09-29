import { useEffect, useRef, useState } from "react";
import { useTx } from "@/components/site/i18n";
import { CallButton, RequestButton } from "@/components/site/ui";
import { DESK_STILL, PHONE_FILM } from "@/lib/premium-media";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function DesktopHero() {
  const { tx } = useTx();
  return (
    <section className="relative hidden h-[calc(100svh-6rem)] min-h-[560px] overflow-hidden bg-ink md:block">
      <img
        src={DESK_STILL.poster}
        alt=""
        width={DESK_STILL.width}
        height={DESK_STILL.height}
        fetchPriority="high"
        decoding="async"
        className="hero-drift absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
      <div className="relative flex h-full items-end px-12 pb-10 lg:px-16">
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
  const [ready, setReady] = useState(false);
  const welcome = "WELCOME.";

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    let attached = false;
    let running = true;
    let raf = 0;
    let shown = 0;
    let visible = false;

    const detach = () => {
      attached = false;
      video.pause();
      video.removeAttribute("src");
      while (video.firstChild) video.removeChild(video.firstChild);
      video.load();
      setReady(false);
    };

    const attach = () => {
      if (attached || reducedMotion() || !PHONE_FILM.mp4) return;
      const mp4 = document.createElement("source");
      mp4.src = PHONE_FILM.mp4;
      mp4.type = "video/mp4";
      video.appendChild(mp4);
      video.preload = "auto";
      video.load();
      attached = true;
    };

    const paintWord = (progress: number) => {
      const word = wordRef.current;
      if (!word) return;
      const lettersShown = Math.round(Math.min(1, Math.max(0, progress)) * welcome.length);
      const letters = word.children;
      for (let i = 0; i < letters.length; i += 1) {
        (letters[i] as HTMLElement).style.opacity = i < lettersShown ? "1" : "0";
      }
    };

    const seek = (amount: number) => {
      if (!attached || video.seeking || video.readyState < 2 || !Number.isFinite(video.duration)) return;
      const last = Math.max(0, video.duration - 1 / 24);
      const time = Math.min(last, Math.round(amount * last * 24) / 24);
      if (Math.abs(video.currentTime - time) < 1 / 48) return;
      const fast = (video as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek;
      if (typeof fast === "function") {
        try {
          fast.call(video, time);
          return;
        } catch {
          /* fall through */
        }
      }
      video.currentTime = time;
    };

    const progress = () => {
      const total = track.offsetHeight - window.innerHeight;
      const scrolled = -track.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, scrolled / Math.max(1, total)));
    };

    const tick = () => {
      raf = 0;
      if (!running || document.hidden || reducedMotion()) return;
      const next = progress();
      shown += (next - shown) * 0.22;
      if (Math.abs(next - shown) < 0.001) shown = next;
      paintWord(shown);
      if (visible) seek(shown);
      if (visible && shown !== next) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!running || document.hidden || raf) return;
      raf = requestAnimationFrame(tick);
    };

    const onReady = () => setReady(true);

    const io = new IntersectionObserver(
      (entries) => {
        const near = entries.some((e) => e.isIntersecting);
        const rect = track.getBoundingClientRect();
        visible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (reducedMotion()) {
          detach();
          paintWord(1);
          return;
        }
        if (near) attach();
        else if (attached && !visible) video.pause();
        if (visible) wake();
      },
      { rootMargin: "280px 0px" },
    );

    io.observe(track);
    video.muted = true;
    video.playsInline = true;
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("seeked", wake);

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      visible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (visible && !attached && !reducedMotion()) attach();
      wake();
    };

    const onVis = () => {
      if (document.hidden) {
        video.pause();
        cancelAnimationFrame(raf);
        raf = 0;
      } else wake();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    if (reducedMotion()) paintWord(1);

    return () => {
      running = false;
      io.disconnect();
      cancelAnimationFrame(raf);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("seeked", wake);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      detach();
    };
  }, []);

  return (
    <section ref={trackRef} className="relative h-[170svh] bg-[#e7e4df] md:hidden">
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden bg-[#e7e4df]">
        <img
          src={PHONE_FILM.poster}
          alt=""
          width={PHONE_FILM.width}
          height={PHONE_FILM.height}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <video
          ref={videoRef}
          className={"absolute inset-0 h-full w-full object-cover object-center" + (ready ? " is-ready" : "")}
          muted
          playsInline
          preload="none"
          poster={PHONE_FILM.poster}
          width={PHONE_FILM.width}
          height={PHONE_FILM.height}
        />
        <p ref={wordRef} aria-label="Welcome" className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[2.6rem] leading-none font-bold tracking-[0.14em] text-[#14940f]">
          {welcome.split("").map((letter, i) => (
            <span key={`${letter}-${i}`} className="opacity-0 [-webkit-text-stroke:2px_#111] [paint-order:stroke_fill]">{letter}</span>
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
