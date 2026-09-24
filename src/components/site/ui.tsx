import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/cn";
import { useTx, type L } from "@/components/site/i18n";

export function txJoin(lang: "en" | "es", value: L) {
  return value[lang];
}

export function useOpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const read = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).formatToParts(new Date());
      const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
      const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
      const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
      const weekend = weekday.startsWith("Sat") || weekday.startsWith("Sun");
      const mins = hour * 60 + minute;
      setOpen(!weekend && mins >= 9 * 60 && mins < 17 * 60);
    };
    read();
    const id = window.setInterval(read, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return open;
}

function useWeekdayIndex() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const weekday =
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        weekday: "short",
      })
        .formatToParts(new Date())
        .find((part) => part.type === "weekday")?.value ?? "";
    const order = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const found = order.findIndex((day) => weekday.startsWith(day));
    setIndex(found >= 0 ? found : null);
  }, []);

  return index;
}

export function OpenStatus({ light = false }: { light?: boolean }) {
  const { tx } = useTx();
  const open = useOpenNow();
  const tone = light ? "text-cream/80" : "text-muted";

  if (open === null) {
    return (
      <p className={cn("text-sm", tone)}>
        {tx({ en: "Weekdays, 9 AM–5 PM", es: "Lunes a viernes, 9 AM–5 PM" })}
      </p>
    );
  }

  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium", light ? "text-cream" : "text-ink")}>
      <span className={cn("size-2 rounded-full", open ? "bg-green" : "bg-danger")} aria-hidden />
      {open
        ? tx({ en: "Open now", es: "Abierto ahora" })
        : tx({ en: "Closed now", es: "Cerrado ahora" })}
      <span className={cn("font-normal", tone)}>
        {tx({ en: "Weekdays 9 AM–5 PM", es: "Lunes a viernes, 9 AM–5 PM" })}
      </span>
    </p>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", shown && "reveal-in", className)}>
      {children}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 md:px-8", className)}>{children}</div>;
}

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("text-[11px] font-medium tracking-[0.18em] uppercase", light ? "text-green-soft" : "text-ink")}>
      {children}
    </p>
  );
}

const buttonClass = {
  primary: "bg-blue text-cream hover:bg-blue-deep",
  green: "bg-green text-cream hover:bg-ink",
  secondary: "bg-cream text-ink ring-1 ring-line hover:ring-ink",
  inverse: "bg-cream text-ink hover:bg-paper",
  quiet: "bg-transparent text-cream ring-1 ring-cream/40 hover:bg-cream/10",
  red: "bg-[#b42318] text-white hover:bg-[#8e1b13]",
} as const;

type ButtonVariant = keyof typeof buttonClass;

export function ActionLink({
  to,
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  to?: "/appointments" | "/services" | "/visit" | "/about" | "/resources" | "/volunteer" | "/give" | "/";
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}) {
  const classNames = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-center text-[15px] font-medium tracking-wide transition-colors duration-200",
    buttonClass[variant],
    className,
  );
  if (to) {
    return (
      <Link to={to} className={classNames} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classNames} onClick={onClick}>
      {children}
    </a>
  );
}

export function CallButton({
  variant = "red",
  className,
  onClick,
}: {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}) {
  const { tx } = useTx();
  return (
    <ActionLink href={`tel:${clinic.phoneTel}`} variant={variant} className={className} onClick={onClick}>
      <Phone className="size-4" aria-hidden />
      {tx({ en: "Call", es: "Llamar" })} {clinic.phoneDisplay}
    </ActionLink>
  );
}

export function RequestButton({
  variant = "primary",
  className,
  onClick,
  compact = false,
}: {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}) {
  const { tx } = useTx();
  return (
    <ActionLink to="/appointments" variant={variant} className={cn("group", className)} onClick={onClick}>
      {compact
        ? tx({ en: "Book", es: "Cita" })
        : tx({ en: "Book an appointment", es: "Pedir una cita" })}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
    </ActionLink>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line bg-paper">
      <Container className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-8">
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-[-0.015em] text-ink md:text-5xl">{title}</h1>
        </div>
        <p className="max-w-sm self-end border-l border-line pl-6 text-lg leading-relaxed text-muted md:col-span-4">{lede}</p>
        <div className="flex flex-col gap-3 sm:flex-row md:col-span-12">
          <RequestButton variant="secondary" />
          <CallButton />
        </div>
      </Container>
    </header>
  );
}

export function Photo({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("photo-frame", className)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function IllustrativeNote(_props: { light?: boolean }) {
  return null;
}

export function FinalCta() {
  const { tx } = useTx();
  return (
    <section className="border-t border-line bg-paper text-ink">
      <Container className="grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
        <div className="md:col-span-7">
          <Kicker>{tx({ en: "Begin here", es: "Empiece aquí" })}</Kicker>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            {tx({
              en: "Call if you can. Or leave a way for us to reach you.",
              es: "Llame si puede. O déjenos una forma de comunicarnos con usted.",
            })}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {tx({
              en: "A request is not a confirmed visit. We will contact you on a weekday to confirm what is available and what to bring. Please do not include symptoms, diagnoses, or insurance numbers.",
              es: "Una solicitud no es una cita confirmada. Le contactaremos en un día de semana para confirmar qué hay disponible y qué traer. No incluya síntomas, diagnósticos ni números de seguro.",
            })}
          </p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-5 md:items-stretch">
          <RequestButton variant="secondary" />
          <CallButton />
        </div>
      </Container>
    </section>
  );
}

export function HoursTable() {
  const { tx } = useTx();
  const today = useWeekdayIndex();
  const rows: { label: L; time: L; closed?: boolean }[] = [
    { label: { en: "Monday", es: "Lunes" }, time: { en: "9 AM–5 PM", es: "9 AM–5 PM" } },
    { label: { en: "Tuesday", es: "Martes" }, time: { en: "9 AM–5 PM", es: "9 AM–5 PM" } },
    { label: { en: "Wednesday", es: "Miércoles" }, time: { en: "9 AM–5 PM", es: "9 AM–5 PM" } },
    { label: { en: "Thursday", es: "Jueves" }, time: { en: "9 AM–5 PM", es: "9 AM–5 PM" } },
    { label: { en: "Friday", es: "Viernes" }, time: { en: "9 AM–5 PM", es: "9 AM–5 PM" } },
    {
      label: { en: "Saturday", es: "Sábado" },
      time: { en: "Closed", es: "Cerrado" },
      closed: true,
    },
    {
      label: { en: "Sunday", es: "Domingo" },
      time: { en: "Closed", es: "Cerrado" },
      closed: true,
    },
  ];

  return (
    <div>
      <OpenStatus />
      <dl className="mt-5 divide-y divide-line border-y border-line">
        {rows.map((row, index) => (
          <div
            key={row.label.en}
            className={cn(
              "flex items-center justify-between gap-4 px-2 py-3 text-sm",
              index === today && "today-row",
            )}
          >
            <dt className="text-ink">
              {tx(row.label)}
              {index === today ? (
                <span className="ml-2 text-xs font-medium tracking-widest text-green uppercase">
                  {tx({ en: "Today", es: "Hoy" })}
                </span>
              ) : null}
            </dt>
            <dd className={cn("tabular-nums", row.closed ? "text-muted" : "font-medium text-ink")}>
              {tx(row.time)}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {tx({
          en: "This is the regular weekly schedule. Call to confirm a holiday closure before you come.",
          es: "Este es el horario semanal habitual. Llame para confirmar si hay un feriado antes de venir.",
        })}
      </p>
    </div>
  );
}
