import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, Fragment, type FocusEvent, type MouseEvent, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/cn";
import { useTx, type L } from "@/components/site/i18n";
import { offerings } from "@/lib/offerings";
import { Motion } from "@/components/site/motion";
import { Container } from "@/components/site/ui";

const nav: {
  to: "/services" | "/resources" | "/about";
  label: L;
}[] = [
  { to: "/services", label: { en: "Services", es: "Servicios", hy: "Ծառայություններ" } },
  { to: "/resources", label: { en: "Resources", es: "Recursos", hy: "Ռեսուրսներ" } },
  { to: "/about", label: { en: "About", es: "Nosotros", hy: "Մեր մասին" } },
];

const directory: {
  to:
    | "/"
    | "/services"
    | "/visit"
    | "/appointments"
    | "/care-team"
    | "/about"
    | "/resources"
    | "/articles"
    | "/volunteer"
    | "/give"
    | "/contact"
    | "/privacy"
    | "/privacy-practices"
    | "/nondiscrimination"
    | "/terms";
  label: L;
}[] = [
  { to: "/", label: { en: "Home", es: "Inicio", hy: "Գլխավոր" } },
  { to: "/services", label: { en: "Services", es: "Servicios", hy: "Ծառայություններ" } },
  { to: "/visit", label: { en: "Your visit", es: "Su visita", hy: "Ձեր այցը" } },
  { to: "/appointments", label: { en: "Appointments", es: "Citas", hy: "Ժամադրություններ" } },
  { to: "/care-team", label: { en: "Who may care for you", es: "Quién puede atenderle", hy: "Ով կարող է ընդունել ձեզ" } },
  { to: "/about", label: { en: "About", es: "Nosotros", hy: "Մեր մասին" } },
  { to: "/resources", label: { en: "Resources", es: "Recursos", hy: "Ռեսուրսներ" } },
  { to: "/articles", label: { en: "Guides", es: "Guías", hy: "Ուղեցույցներ" } },
  { to: "/volunteer", label: { en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" } },
  { to: "/give", label: { en: "Donate", es: "Donar", hy: "Նվիրատվություն" } },
  { to: "/contact", label: { en: "Contact", es: "Contacto", hy: "Կապ" } },
  { to: "/privacy", label: { en: "Privacy policy", es: "Política de privacidad", hy: "Գաղտնիության քաղաքականություն" } },
  { to: "/privacy-practices", label: { en: "Privacy summary", es: "Resumen de privacidad", hy: "Գաղտնիության ամփոփում" } },
  { to: "/nondiscrimination", label: { en: "Non-discrimination", es: "No discriminación", hy: "Խտրականության բացառում" } },
  { to: "/terms", label: { en: "Terms", es: "Términos", hy: "Պայմաններ" } },
];

function LangToggle() {
  const { lang, setLang, tx } = useTx();
  const flags = [
    { code: "en" as const, label: "English", word: "EN" },
    { code: "es" as const, label: "Español", word: "ES" },
    { code: "hy" as const, label: "Հայերեն", word: "ՀԱՅ" },
  ];
  return (
    <div className="lang-switch" role="group" aria-label={tx({ en: "Language", es: "Idioma", hy: "Լեզու" })}>
      {flags.map((flag) => (
        <button key={flag.code} type="button" data-lang={flag.code} aria-pressed={lang === flag.code} aria-label={flag.label} onClick={() => setLang(flag.code)}>
          {flag.code === "en" ? (
            <svg viewBox="0 0 36 24" aria-hidden>
              <rect width="36" height="24" fill="#fff" />
              <g fill="#B22234">
                <rect width="36" height="1.846" />
                <rect y="3.692" width="36" height="1.846" />
                <rect y="7.385" width="36" height="1.846" />
                <rect y="11.077" width="36" height="1.846" />
                <rect y="14.769" width="36" height="1.846" />
                <rect y="18.462" width="36" height="1.846" />
                <rect y="22.154" width="36" height="1.846" />
              </g>
              <rect width="14.4" height="12.92" fill="#3C3B6E" />
              <g fill="#fff">
                <circle cx="1.7" cy="1.5" r=".45" />
                <circle cx="4.1" cy="1.5" r=".45" />
                <circle cx="6.5" cy="1.5" r=".45" />
                <circle cx="8.9" cy="1.5" r=".45" />
                <circle cx="11.3" cy="1.5" r=".45" />
                <circle cx="13.1" cy="1.5" r=".42" />
                <circle cx="2.9" cy="3.15" r=".45" />
                <circle cx="5.3" cy="3.15" r=".45" />
                <circle cx="7.7" cy="3.15" r=".45" />
                <circle cx="10.1" cy="3.15" r=".45" />
                <circle cx="12.2" cy="3.15" r=".42" />
                <circle cx="1.7" cy="4.8" r=".45" />
                <circle cx="4.1" cy="4.8" r=".45" />
                <circle cx="6.5" cy="4.8" r=".45" />
                <circle cx="8.9" cy="4.8" r=".45" />
                <circle cx="11.3" cy="4.8" r=".45" />
                <circle cx="13.1" cy="4.8" r=".42" />
                <circle cx="2.9" cy="6.45" r=".45" />
                <circle cx="5.3" cy="6.45" r=".45" />
                <circle cx="7.7" cy="6.45" r=".45" />
                <circle cx="10.1" cy="6.45" r=".45" />
                <circle cx="12.2" cy="6.45" r=".42" />
                <circle cx="1.7" cy="8.1" r=".45" />
                <circle cx="4.1" cy="8.1" r=".45" />
                <circle cx="6.5" cy="8.1" r=".45" />
                <circle cx="8.9" cy="8.1" r=".45" />
                <circle cx="11.3" cy="8.1" r=".45" />
                <circle cx="13.1" cy="8.1" r=".42" />
                <circle cx="2.9" cy="9.75" r=".45" />
                <circle cx="5.3" cy="9.75" r=".45" />
                <circle cx="7.7" cy="9.75" r=".45" />
                <circle cx="10.1" cy="9.75" r=".45" />
                <circle cx="12.2" cy="9.75" r=".42" />
                <circle cx="1.7" cy="11.4" r=".45" />
                <circle cx="4.1" cy="11.4" r=".45" />
                <circle cx="6.5" cy="11.4" r=".45" />
                <circle cx="8.9" cy="11.4" r=".45" />
                <circle cx="11.3" cy="11.4" r=".45" />
                <circle cx="13.1" cy="11.4" r=".42" />
              </g>
            </svg>
          ) : flag.code === "es" ? (
            <svg viewBox="0 0 36 24" aria-hidden>
              <rect width="36" height="24" fill="#AA151B" />
              <rect y="6" width="36" height="12" fill="#F1BF00" />
            </svg>
          ) : (
            <svg viewBox="0 0 36 24" aria-hidden>
              <rect width="36" height="8" fill="#D90012" />
              <rect y="8" width="36" height="8" fill="#0033A0" />
              <rect y="16" width="36" height="8" fill="#F2A800" />
            </svg>
          )}
          <span className="lang-word">{flag.word}</span>
        </button>
      ))}
    </div>
  );
}

function PageContents({ rootRef }: { rootRef: RefObject<HTMLElement | null> }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const { tx, lang } = useTx();
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      setHeadings([]);
      return;
    }
    const collect = () => {
      const list = Array.from(root.querySelectorAll<HTMLElement>("h2:not(.no-toc)")).filter(
        (heading) => !heading.closest("nav, footer, .page-contents"),
      );
      const next = list
        .map((heading, index) => {
          const text = heading.innerText.replace(/\s+/g, " ").trim();
          if (!text) return null;
          const id = `on-page-${index + 1}`;
          heading.id = id;
          return { id, text };
        })
        .filter((item): item is { id: string; text: string } => item !== null)
        .slice(0, 8);
      setHeadings((current) =>
        current.length === next.length && current.every((item, index) => item.id === next[index].id && item.text === next[index].text)
          ? current
          : next,
      );
    };
    collect();
    const observer = new MutationObserver(collect);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname, lang, rootRef]);

  if (headings.length < 2) return null;
  return (
    <nav className="page-contents" aria-label={tx({ en: "On this page", es: "En esta página", hy: "Այս էջում" })}>
      <span>{tx({ en: "On this page", es: "En esta página", hy: "Այս էջում" })}</span>
      {headings.map((heading) => (
        <a key={heading.id} href={`#${heading.id}`}>
          {heading.text}
        </a>
      ))}
    </nav>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const { tx } = useTx();
  const contentRef = useRef<HTMLElement>(null);
  const pathname = useLocation({ select: (location) => location.pathname });
  const home = pathname === "/";

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-frame flex min-h-dvh flex-col bg-paper pb-44 text-ink md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-3"
      >
        {tx({ en: "Skip to content", es: "Saltar al contenido" })}
      </a>
      <div className="site-nav fixed inset-x-0 top-0 z-40">
        <Header />
      </div>
      <Motion />
      <main id="main" ref={contentRef} className={home ? "flex-1 pt-0" : "flex-1 pt-16 md:pt-24"}>
        {children}
        {home ? null : <PageContents rootRef={contentRef} />}
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

function Header({ light = false }: { light?: boolean }) {
  const { tx } = useTx();
  const pathname = useLocation({ select: (location) => location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hold = useRef(false);

  useEffect(() => {
    hold.current = false;
    setMenu(null);
  }, [pathname]);

  function enter(id: string) {
    if (hold.current) return;
    setMenu(id);
  }
  function leave(id: string) {
    hold.current = false;
    setMenu((current) => (current === id ? null : current));
  }
  function pick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("a")) {
      hold.current = true;
      setMenu(null);
    }
  }
  function focusMenu(id: string) {
    hold.current = false;
    setMenu(id);
  }
  function blurMenu(id: string, event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) leave(id);
  }

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${nextProgress})`;
      const nextScrolled = window.scrollY > 12;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.toggleAttribute("data-menu-open", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const items = menuRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        );
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a[href],button")?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-menu-open");
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "main-header relative transition-colors duration-300",
        light && "header-on-film",
        !light && scrolled && "shadow-[0_10px_30px_rgb(22_29_39/0.06)]",
      )}
    >
      <div
        className="read-progress absolute inset-x-0 bottom-0 h-px origin-left bg-blue"
        style={{ transform: "scaleX(0)" }}
        ref={barRef}
        aria-hidden
      />
      <Container className="flex min-h-16 items-center gap-3 py-2 md:min-h-20 md:gap-6">
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={tx({
            en: open ? "Close menu" : "Open menu",
            es: open ? "Cerrar menú" : "Abrir menú",
            hy: open ? "Փակել մենյուն" : "Բացել մենյուն",
          })}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <Link to="/" className="min-w-0 shrink md:shrink-0" aria-label={clinic.name} onClick={() => setOpen(false)}>
          <img
            src="/media/logo.png"
            alt={clinic.name}
            className="h-10 w-auto max-w-full object-contain object-left md:h-12 md:max-w-52"
          />
        </Link>
        <nav className="site-nav-links ml-auto hidden items-center gap-x-3 xl:gap-x-4 md:flex" aria-label="Primary">
          {nav.map((item) =>
            item.to === "/services" ? (
              <Fragment key={item.to}>
              <div className={cn("nav-preview", menu === "services" && "is-open")} onMouseEnter={() => enter("services")} onMouseLeave={() => leave("services")} onFocus={() => focusMenu("services")} onBlur={(event) => blurMenu("services", event)} onClick={pick}>
                <Link
                  to="/services"
                  className={cn("text-sm font-medium", light ? "text-white/90 hover:text-white" : "text-muted hover:text-ink")}
                  activeProps={{ className: cn("text-sm font-medium", light ? "text-white" : "text-ink") }}
                >
                  {tx(item.label)}
                </Link>
                <div className="nav-preview-panel">
                  <div className="nav-preview-grid">
                    {offerings.map((offering) => (
                      <Link key={offering.slug} to="/services/$slug" params={{ slug: offering.slug }} className="nav-preview-item">
                        <strong>{tx(offering.title)}</strong>
                        <span>{tx(offering.sentence)}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="nav-preview-side">
                    <Link to="/appointments">{tx({ en: "Request an office visit", es: "Pedir una cita en la clínica", hy: "Կլինիկայում այց խնդրել" })}</Link>
                    <Link to="/insurance">{tx({ en: "Insurance", es: "Seguro", hy: "Ապահովագրություն" })}</Link>
                    <a href={`tel:${clinic.phoneTel}`}>{tx({ en: "Call the clinic", es: "Llamar a la clínica", hy: "Զանգել կլինիկա" })}</a>
                  </div>
                </div>
              </div>
              <div className={cn("nav-preview", menu === "appointments" && "is-open")} onMouseEnter={() => enter("appointments")} onMouseLeave={() => leave("appointments")} onFocus={() => focusMenu("appointments")} onBlur={(event) => blurMenu("appointments", event)} onClick={pick}>
                <button type="button" className={cn("text-sm font-medium", light ? "text-white/90" : "text-muted")}>
                  {tx({ en: "Appointments", es: "Citas", hy: "Ժամադրություններ" })}
                </button>
                <div className="nav-preview-panel nav-preview-panel-slim">
                  <div className="nav-preview-side nav-preview-side-solo">
                    <Link to="/appointments">{tx({ en: "Request an office visit", es: "Pedir una cita en la clínica", hy: "Կլինիկայում այց խնդրել" })}</Link>
                    <Link to="/visit">{tx({ en: "Your visit", es: "Su visita", hy: "Ձեր այցը" })}</Link>
                    <a href={`tel:${clinic.phoneTel}`}>{tx({ en: "Call the clinic", es: "Llamar a la clínica", hy: "Զանգել կլինիկա" })}</a>
                  </div>
                </div>
              </div>
              </Fragment>
            ) : item.to === "/resources" ? (
              <div key={item.to} className={cn("nav-preview", menu === "resources" && "is-open")} onMouseEnter={() => enter("resources")} onMouseLeave={() => leave("resources")} onFocus={() => focusMenu("resources")} onBlur={(event) => blurMenu("resources", event)} onClick={pick}>
                <Link
                  to="/resources"
                  className={cn("text-sm font-medium", light ? "text-white/90 hover:text-white" : "text-muted hover:text-ink")}
                  activeProps={{ className: cn("text-sm font-medium", light ? "text-white" : "text-ink") }}
                >
                  {tx(item.label)}
                </Link>
                <div className="nav-preview-panel nav-preview-panel-slim">
                  <div className="nav-preview-side nav-preview-side-solo">
                    <Link to="/resources">{tx({ en: "Questions we hear", es: "Preguntas frecuentes", hy: "Հաճախ տրվող հարցեր" })}</Link>
                    <Link to="/articles">{tx({ en: "Health articles", es: "Artículos de salud", hy: "Առողջության հոդվածներ" })}</Link>
                    <a href="https://211la.org/" target="_blank" rel="noopener noreferrer">211 LA</a>
                    <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">{tx({ en: "988 crisis line", es: "Línea de crisis 988", hy: "988 ճգնաժամային գիծ" })}</a>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium",
                  light ? "text-white/90 hover:text-white" : "text-muted hover:text-ink",
                )}
                activeProps={{
                  className: cn("text-sm font-medium", light ? "text-white" : "text-ink"),
                }}
              >
                {tx(item.label)}
              </Link>
            ),
          )}
          <div className={cn("nav-preview", menu === "support" && "is-open")} onMouseEnter={() => enter("support")} onMouseLeave={() => leave("support")} onFocus={() => focusMenu("support")} onBlur={(event) => blurMenu("support", event)} onClick={pick}>
            <button type="button" className={cn("text-sm font-medium", light ? "text-white/90" : "text-muted")}>
              {tx({ en: "Support our cause", es: "Apoye a la clínica", hy: "Աջակցեք կլինիկային" })}
            </button>
            <div className="nav-preview-panel nav-preview-panel-slim">
              <div className="nav-preview-side nav-preview-side-solo">
                <Link to="/volunteer">{tx({ en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" })}</Link>
                <Link to="/give">{tx({ en: "Donate", es: "Donar", hy: "Նվիրատվություն" })}</Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <LangToggle />
          <a
            href={`tel:${clinic.phoneTel}`}
            className={cn(
              "hidden text-sm font-semibold whitespace-nowrap tabular-nums xl:inline",
              light ? "text-white" : "text-blue",
            )}
          >
            {clinic.phoneDisplay}
          </a>
          <Link to="/contact" className="site-action inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-sm px-4 text-sm font-medium">
            {tx({ en: "Contact us", es: "Contáctenos", hy: "Կապ մեզ հետ" })}
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <LangToggle />
        </div>
      </Container>
      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={menuRef}
              id="mobile-menu"
              className="mobile-sheet border-t border-line bg-cream md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label={tx({ en: "Menu", es: "Menú", hy: "Մենյու" })}
            >
              <div className="mobile-sheet-scroll">
                {nav.filter((item) => item.to !== "/resources").map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="mobile-link"
                    activeProps={{ className: "mobile-link is-current" }}
                  >
                    {tx(item.label)}
                  </Link>
                ))}
                <p className="mobile-label">{tx({ en: "Appointments", es: "Citas", hy: "Ժամադրություններ" })}</p>
                <Link to="/appointments" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Request an office visit", es: "Pedir una cita en la clínica", hy: "Կլինիկայում այց խնդրել" })}
                </Link>
                <Link to="/visit" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Your visit", es: "Su visita", hy: "Ձեր այցը" })}
                </Link>
                <Link to="/location" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Location", es: "Ubicación", hy: "Հասցե" })}
                </Link>
                <Link to="/insurance" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Insurance", es: "Seguro", hy: "Ապահովագրություն" })}
                </Link>
                <p className="mobile-label">{tx({ en: "Support our cause", es: "Apoye a la clínica", hy: "Աջակցեք կլինիկային" })}</p>
                <Link to="/volunteer" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" })}
                </Link>
                <Link to="/give" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Donate", es: "Donar", hy: "Նվիրատվություն" })}
                </Link>
                <p className="mobile-label">{tx({ en: "Resources", es: "Recursos", hy: "Ռեսուրսներ" })}</p>
                <Link to="/resources" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Help beyond the clinic", es: "Ayuda fuera de la clínica", hy: "Օգնություն կլինիկայից դուրս" })}
                </Link>
                <Link to="/articles" onClick={() => setOpen(false)} className="mobile-link">
                  {tx({ en: "Health articles", es: "Artículos de salud", hy: "Առողջության հոդվածներ" })}
                </Link>
              </div>
              <div className="mobile-sheet-actions">
                <Link to="/contact" onClick={() => setOpen(false)} className="site-action">
                  {tx({ en: "Contact us", es: "Contáctenos", hy: "Կապ մեզ հետ" })}
                </Link>
                <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}

export function CredBadges() {
  const { tx } = useTx();
  const badges = [
    {
      href: clinic.nonprofitUrl,
      mark: "501(c)(3)",
      tone: "seal-green",
      title: tx({ en: "Nonprofit", es: "Sin fines de lucro", hy: "Շահույթ չհետապնդող" }),
      detail: `EIN ${clinic.ein}`,
    },
    {
      href: clinic.hcaiUrl,
      mark: tx({ en: "State", es: "Estado", hy: "Նահանգ" }),
      tone: "seal-blue",
      title: tx({ en: "Licensed clinic", es: "Clínica con licencia", hy: "Լիցենզավորված կլինիկա" }),
      detail: `HCAI ${clinic.hcaiId}`,
    },
    {
      href: clinic.npiUrl,
      mark: "NPI",
      tone: "seal-navy",
      title: tx({ en: "National provider", es: "Proveedor nacional", hy: "Ազգային մատակարար" }),
      detail: clinic.npi,
    },
  ];
  return (
    <div className="cred-row">
      {badges.map((badge) => (
        <a key={badge.detail} className={`cred-badge ${badge.tone}`} href={badge.href} target="_blank" rel="noopener noreferrer">
          <span className="cred-seal">{badge.mark}</span>
          <span>
            <strong>{badge.title}</strong>
            <em>{badge.detail}</em>
          </span>
        </a>
      ))}
    </div>
  );
}

function Footer() {
  const { tx } = useTx();
  return (
    <footer className="main-footer border-t border-line bg-cream">
      <Container className="grid gap-0 py-10 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="pb-8 md:col-span-4 md:pb-0">
          <img src="/media/logo.png" alt="" className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {tx({
              en: `Formerly ${clinic.former}. A nonprofit community clinic in Reseda.`,
              es: `Antes se llamaba ${clinic.former}. Clínica comunitaria en Reseda, sin fines de lucro.`,
              hy: `Առաջ կոչվում էր ${clinic.former}։ Համայնքային կլինիկա Ռեսեդայում, շահույթ չի հետապնդում։`,
            })}
          </p>
          <div className="social-row">
            <a href={clinic.yelpUrl} target="_blank" rel="noopener noreferrer" aria-label="Yelp">
              <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><ellipse cx="12" cy="5.2" rx="2.05" ry="3.15"/><ellipse cx="17.7" cy="8.7" rx="2.05" ry="3.15" transform="rotate(72 17.7 8.7)"/><ellipse cx="15.5" cy="16.4" rx="2.05" ry="3.15" transform="rotate(144 15.5 16.4)"/><ellipse cx="8.5" cy="16.4" rx="2.05" ry="3.15" transform="rotate(216 8.5 16.4)"/><ellipse cx="6.3" cy="8.7" rx="2.05" ry="3.15" transform="rotate(288 6.3 8.7)"/></g></svg>
            </a>
            <a href={clinic.googleUrl} target="_blank" rel="noopener noreferrer" aria-label="Google">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path d="M12 22c2.7 0 5-1 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path d="M6.4 13.9A6 6 0 0 1 6.1 12c0-.7.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.6z"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6c.8-2.4 3-4.2 5.6-4.2z"/></svg>
            </a>
            <span role="img" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8A3.2 3.2 0 0 0 19.2 16V8A3.2 3.2 0 0 0 16 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.3-2.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
            </span>
          </div>
        </div>
        <div className="border-t border-line py-8 md:col-span-4 md:border-t-0 md:border-l md:py-0 md:pl-8">
          <h2 className="text-sm font-medium text-ink">{tx({ en: "Visit", es: "Visítenos", hy: "Այցելեք" })}</h2>
          <address className="mt-3 text-sm leading-relaxed text-muted not-italic">
            {clinic.street}
            <br />
            {clinic.city}
          </address>
          <p className="mt-3 text-sm text-muted">
            {tx({ en: "Monday–Friday, 9 AM–5 PM", es: "Lunes a viernes, 9:00 a 5:00", hy: "Երկուշաբթիից ուրբաթ, 9:00–17:00" })}
            <br />
            {tx({ en: "Saturday and Sunday, closed", es: "Sábado y domingo, cerrado", hy: "Շաբաթ և կիրակի՝ փակ" })}
          </p>
          <a
            href={clinic.mapsUrl}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tx({ en: "Open in Maps", es: "Abrir en el mapa", hy: "Բացել քարտեզում" })}
          </a>
        </div>
        <div className="border-t border-line pt-8 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <h2 className="text-sm font-medium text-ink">
            {tx({ en: "Which contact to use", es: "A quién escribir", hy: "Ում գրել" })}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {tx({ en: "Patients and appointments", es: "Pacientes y citas", hy: "Պացիենտներ և այցեր" })}
          </p>
          <a
            className="text-sm font-medium break-all text-blue"
            href={`mailto:${clinic.emailPatients}`}
          >
            {clinic.emailPatients}
          </a>
          <p className="mt-1 text-sm">
            <a className="font-semibold text-green tabular-nums" href={`tel:${clinic.phoneTel}`}>
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {tx({ en: "Office, volunteers, and gifts", es: "Oficina, voluntarios y donativos", hy: "Գրասենյակ, կամավորներ և նվիրատվություն" })}
          </p>
          <a
            className="text-sm font-medium break-all text-blue"
            href={`mailto:${clinic.emailOffice}`}
          >
            {clinic.emailOffice}
          </a>
        </div>
      </Container>
      <div className="border-t border-line bg-paper">
        <Container className="py-6">
          <CredBadges />
        </Container>
      </div>
      <div className="border-t border-line bg-paper text-ink">
        <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] tracking-wide text-muted">
            © {new Date().getFullYear()} {clinic.name}
            <span className="mt-1 block text-muted md:mt-0 md:ml-2 md:inline">
              NPI {clinic.npi} · EIN {clinic.ein} · HCAI {clinic.hcaiId}
            </span>
          </p>
          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4 md:border-t-0 md:pt-0"
            aria-label="Footer"
          >
            {directory.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[11px] font-medium tracking-wide text-muted hover:text-ink"
              >
                {tx(item.label)}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
      <div className="site-credit">
        <Container className="py-3 text-center text-[11px] tracking-wide text-muted">
          <span className="text-[#c8102e]">{tx({ en: "Website by", es: "Página de", hy: "Կայքը՝" })}</span>{" "}
          <a href="mailto:usscallisterllc@gmail.com?subject=Canby%20Community%20Clinic%20website">USSCALLISTER LLC</a>
        </Container>
      </div>
    </footer>
  );
}

function MobileDock() {
  const { tx } = useTx();
  return (
    <div className="site-dock no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2">
        <Link
          to="/appointments"
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-line bg-white px-3 text-sm font-medium text-ink"
        >
          {tx({ en: "Request a visit", es: "Pedir una visita", hy: "Այց խնդրել" })}
        </Link>
        <a
          href={`tel:${clinic.phoneTel}`}
          className="dock-call inline-flex min-h-12 flex-col items-center justify-center rounded-sm bg-blue px-3 text-sm font-semibold leading-tight text-white tabular-nums"
        >
          <span>{tx({ en: "Call", es: "Llamar", hy: "Զանգել" })}</span>
          <span>{clinic.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
