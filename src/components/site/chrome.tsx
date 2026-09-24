import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/cn";
import { useTx, type L } from "@/components/site/i18n";
import { CallButton, Container, RequestButton } from "@/components/site/ui";

const nav: { to: "/services" | "/appointments" | "/new-patients" | "/insurance" | "/resources" | "/about" | "/volunteer"; label: L }[] = [
  { to: "/services", label: { en: "Care", es: "Atención" } },
  { to: "/new-patients", label: { en: "Patients", es: "Pacientes" } },
  { to: "/resources", label: { en: "Resources", es: "Recursos" } },
  { to: "/about", label: { en: "About", es: "Nosotros" } },
  { to: "/volunteer", label: { en: "Get involved", es: "Participar" } },
];

const directory: { to: "/" | "/services" | "/visit" | "/appointments" | "/care-team" | "/about" | "/resources" | "/articles" | "/groups" | "/volunteer" | "/give" | "/contact" | "/privacy" | "/terms"; label: L }[] = [
  { to: "/", label: { en: "Home", es: "Inicio", hy: "Գլխավոր" } },
  { to: "/services", label: { en: "Services", es: "Servicios", hy: "Ծառայություններ" } },
  { to: "/visit", label: { en: "Your visit", es: "Su visita", hy: "Ձեր այցը" } },
  { to: "/appointments", label: { en: "Appointments", es: "Citas", hy: "Ժամադրություններ" } },
  { to: "/care-team", label: { en: "Care team", es: "Equipo", hy: "Խնամքի թիմ" } },
  { to: "/groups", label: { en: "Groups", es: "Grupos", hy: "Խմբեր" } },
  { to: "/about", label: { en: "About", es: "Nosotros", hy: "Մեր մասին" } },
  { to: "/resources", label: { en: "Resources", es: "Recursos", hy: "Ռեսուրսներ" } },
  { to: "/articles", label: { en: "Guides", es: "Guías", hy: "Ուղեցույցներ" } },
  { to: "/volunteer", label: { en: "Volunteer", es: "Voluntariado", hy: "Կամավոր" } },
  { to: "/give", label: { en: "Donate", es: "Donar", hy: "Նվիրատվություն" } },
  { to: "/contact", label: { en: "Contact", es: "Contacto", hy: "Կապ" } },
  { to: "/privacy", label: { en: "Privacy", es: "Privacidad", hy: "Գաղտնիություն" } },
  { to: "/terms", label: { en: "Terms", es: "Términos", hy: "Պայմաններ" } },
];

function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang, tx } = useTx();
  const label = { en: "EN", es: "ES", hy: "ՀԱՅ" } as const;
  return (
    <div className="flex items-center" role="group" aria-label={tx({ en: "Language", es: "Idioma", hy: "Լեզու" })}>
      {(["en", "es", "hy"] as const).map((code, index) => (
        <span key={code} className="inline-flex items-center">
          {index > 0 ? <span className={light ? "text-cream/40" : "text-line"} aria-hidden>/</span> : null}
          <button
            type="button"
            aria-pressed={lang === code}
            onClick={() => setLang(code)}
            className={cn(
              "min-h-11 px-2 text-xs font-medium tracking-widest",
              lang === code ? (light ? "text-cream" : "text-ink") : light ? "text-cream/55 hover:text-cream" : "text-muted hover:text-ink",
            )}
          >
            {label[code]}
          </button>
        </span>
      ))}
    </div>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const { tx } = useTx();
  const [onFilm, setOnFilm] = useState(false);

  useEffect(() => {
    const read = () => {
      const hero = document.querySelector(".hero-stage");
      if (!hero) {
        setOnFilm(false);
        return;
      }
      setOnFilm(hero.getBoundingClientRect().bottom > 110);
    };
    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-paper pb-36 text-ink md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-3"
      >
        {tx({ en: "Skip to content", es: "Saltar al contenido" })}
      </a>
      <div className="fixed inset-x-0 top-0 z-40">
        <Header light={onFilm} />
      </div>
      <main id="main" className="flex-1 pt-16 md:pt-24">
        {children}
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}

function Header({ light = false }: { light?: boolean }) {
  const { tx } = useTx();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

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
    };
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
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
        "relative transition-colors duration-300",
        light ? "border-b border-transparent bg-transparent text-cream" : "border-b border-line bg-cream/92 text-ink backdrop-blur-md",
        !light && scrolled && "shadow-[0_10px_30px_rgb(22_29_39/0.06)]",
      )}
    >
      <div
        className="read-progress absolute inset-x-0 bottom-0 h-px origin-left bg-green"
        style={{ transform: "scaleX(0)" }}
        ref={barRef}
        aria-hidden
      />
      <Container className="flex min-h-16 items-center gap-6 py-2 md:min-h-20">
        <Link to="/" className="shrink-0" aria-label={clinic.name} onClick={() => setOpen(false)}>
          <img
            src="/media/logo.webp"
            alt={clinic.name}
            width={320}
            height={127}
            className="h-10 w-auto max-w-[13.5rem] object-contain object-left md:h-12 md:max-w-64"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-6 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "border-b border-transparent pb-0.5 text-[11px] font-medium tracking-[0.16em] uppercase",
                light ? "text-cream/80 hover:text-cream" : "text-muted hover:text-ink",
              )}
              activeProps={{
                className: cn(
                  "border-b pb-0.5 text-[11px] font-medium tracking-[0.16em] uppercase",
                  light ? "border-cream text-cream" : "border-ink text-ink",
                ),
              }}
            >
              {tx(item.label)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <LangToggle light={light} />
          <Link to="/give" className={cn("text-sm font-medium", light ? "text-cream" : "text-ink")}>
            {tx({ en: "Donate", es: "Donar" })}
          </Link>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="text-sm font-semibold whitespace-nowrap text-[#b42318] tabular-nums"
          >
            {clinic.phoneDisplay}
          </a>
          <RequestButton
            variant="secondary"
            compact
            className="min-h-11 shrink-0 whitespace-nowrap px-4 text-sm"
          />
        </div>
        <div className="ml-auto flex items-center gap-1 xl:hidden">
          <LangToggle light={light} />
          <button
            type="button"
            className={cn("inline-flex size-11 items-center justify-center", light ? "text-cream" : "text-ink")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={tx({ en: open ? "Close menu" : "Open menu", es: open ? "Cerrar menú" : "Abrir menú" })}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-cream xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={tx({ en: "Menu", es: "Menú" })}
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="min-h-12 rounded-lg px-2 py-3 text-lg text-ink"
                activeProps={{ className: "min-h-12 rounded-lg bg-blue-soft px-2 py-3 text-lg text-blue" }}
              >
                {tx(item.label)}
              </Link>
            ))}
            <Link
              to="/appointments"
              onClick={() => setOpen(false)}
              className="min-h-12 rounded-sm px-2 py-3 text-lg text-ink"
            >
              {tx({ en: "Appointments", es: "Citas" })}
            </Link>
            <Link
              to="/groups"
              onClick={() => setOpen(false)}
              className="min-h-12 rounded-sm px-2 py-3 text-lg text-ink"
            >
              {tx({ en: "Schools and groups", es: "Escuelas y grupos", hy: "Դպրոցներ և խմբեր" })}
            </Link>
            <Link
              to="/volunteer"
              onClick={() => setOpen(false)}
              className="min-h-12 rounded-sm px-2 py-3 text-lg text-ink"
            >
              {tx({ en: "Volunteer", es: "Voluntariado" })}
            </Link>
            <Link
              to="/give"
              onClick={() => setOpen(false)}
              className="min-h-12 rounded-sm px-2 py-3 text-lg text-ink"
            >
              {tx({ en: "Donate", es: "Donar" })}
            </Link>
            <div className="mt-3 flex flex-col gap-2">
              <RequestButton variant="secondary" />
              <CallButton />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  const { tx } = useTx();
  return (
    <footer className="border-t border-line bg-cream">
      <Container className="grid gap-0 py-10 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="pb-8 md:col-span-4 md:pb-0">
          <img src="/media/logo.webp" alt="" width={320} height={127} className="h-14 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {tx({
              en: `Formerly ${clinic.former}. A nonprofit community clinic in Reseda.`,
              es: `Antes ${clinic.former}. Una clínica comunitaria sin fines de lucro en Reseda.`,
            })}
          </p>
        </div>
        <div className="border-t border-line py-8 md:col-span-4 md:border-t-0 md:border-l md:py-0 md:pl-8">
          <h2 className="text-sm font-medium text-ink">{tx({ en: "Visit", es: "Visítenos" })}</h2>
          <address className="mt-3 text-sm leading-relaxed text-muted not-italic">
            {clinic.street}
            <br />
            {clinic.city}
          </address>
          <p className="mt-3 text-sm text-muted">
            {tx({ en: "Monday–Friday, 9 AM–5 PM", es: "Lunes a viernes, 9 AM–5 PM" })}
            <br />
            {tx({ en: "Saturday and Sunday, closed", es: "Sábado y domingo, cerrado" })}
          </p>
          <a
            href={clinic.mapsUrl}
            className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tx({ en: "Open in Maps", es: "Abrir en Maps" })}
          </a>
        </div>
        <div className="border-t border-line pt-8 md:col-span-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <h2 className="text-sm font-medium text-ink">{tx({ en: "Which contact to use", es: "Qué contacto usar" })}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {tx({ en: "Patients and appointments", es: "Pacientes y citas" })}
          </p>
          <a className="text-sm font-medium break-all text-blue" href={`mailto:${clinic.emailPatients}`}>
            {clinic.emailPatients}
          </a>
          <p className="mt-1 text-sm">
            <a className="font-semibold text-green tabular-nums" href={`tel:${clinic.phoneTel}`}>
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {tx({ en: "Office, volunteers, and gifts", es: "Oficina, voluntarios y donaciones" })}
          </p>
          <a className="text-sm font-medium break-all text-blue" href={`mailto:${clinic.emailOffice}`}>
            {clinic.emailOffice}
          </a>
          <p className="mt-4 text-xs leading-relaxed text-danger">
            {tx({
              en: "Do not email symptoms, diagnoses, test results, insurance ID numbers, Social Security numbers, or medical records. Ordinary email is not a secure medical channel.",
              es: "No envíe por correo síntomas, diagnósticos, resultados, números de seguro, números de Seguro Social ni expedientes. El correo ordinario no es un canal médico seguro.",
            })}
          </p>
        </div>
      </Container>
      <div className="border-t border-line bg-paper text-ink">
        <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] tracking-wide text-muted">
            © {new Date().getFullYear()} {clinic.name}
            <span className="mt-1 block text-muted md:mt-0 md:ml-2 md:inline">
              NPI {clinic.npi} · EIN {clinic.ein} · HCAI {clinic.hcaiId}
            </span>
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4 md:border-t-0 md:pt-0" aria-label="Footer">
            {directory.map((item) => (
              <Link key={item.to} to={item.to} className="text-[11px] font-medium tracking-wide text-muted hover:text-ink">
                {tx(item.label)}
              </Link>
            ))}
          </nav>
        </Container>
        <p className="pb-3 text-center text-[11px] leading-none tracking-wide text-ink">Made by USSCALLISTER LLC</p>
      </div>
    </footer>
  );
}

function MobileDock() {
  const { tx } = useTx();
  return (
    <div className="site-dock no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="mx-auto grid w-full max-w-lg grid-cols-1 gap-2">
        <Link
          to="/appointments"
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-line bg-white px-3 text-sm font-medium text-ink"
        >
          {tx({ en: "Book an appointment", es: "Pedir una cita" })}
        </Link>
        <a
          href={`tel:${clinic.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#b42318] px-3 text-sm font-semibold whitespace-nowrap text-white tabular-nums"
        >
          {tx({ en: "Call", es: "Llamar" })} {clinic.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
