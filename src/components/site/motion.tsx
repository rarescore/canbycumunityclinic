import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * Inertial scroll and a nav that clears while you move down.
 * The pinned film and the hero photograph are started by the
 * components that own those nodes, after they have hydrated.
 * Nothing here runs when the visitor asks for reduced motion.
 */
export function Motion() {
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 860px)").matches;
    if (reduced || phone) return;

    let cancelled = false;
    let teardown = () => {};

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        anchors: { offset: -88 },
        stopInertiaOnNavigate: true,
      });

      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const nav = document.querySelector(".site-nav");
      nav?.classList.remove("nav-away");

      const menuWatch = new MutationObserver(() => {
        if (document.body.hasAttribute("data-menu-open")) {
          lenis.stop();
          nav?.classList.remove("nav-away");
        } else {
          lenis.start();
        }
      });
      menuWatch.observe(document.body, { attributes: true, attributeFilter: ["data-menu-open"] });

      teardown = () => {
        menuWatch.disconnect();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      teardown();
    };
  }, [pathname]);

  return null;
}
