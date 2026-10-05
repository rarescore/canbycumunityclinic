import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { clinic } from "@/lib/clinic";
import { useTx } from "@/components/site/i18n";

type Msg = { from: "clinic" | "you"; text: string };

function answer(raw: string) {
  const q = raw.toLowerCase();
  if (/911|emergency|emergencia|chest|bleeding|suicid|unconscious|can’t breathe|can't breathe/.test(q)) {
    return "If this is an emergency, call 911. This chat is not a medical visit.";
  }
  if (/symptom|pain|hurt|diagnos|medicine|meds|pregnant|rash|fever|dolor|síntoma|sintoma|medicamento|embaraz/.test(q)) {
    return `Don’t put symptoms or a diagnosis in this chat. Call ${clinic.phoneDisplay} and talk to the clinic. If it is an emergency, call 911.`;
  }
  if (/hour|open|close|when|horario|abierto|9/.test(q)) {
    return "Weekdays, 9 AM to 5 PM. Closed Saturday and Sunday.";
  }
  if (/where|address|location|park|suite|dirección|direccion|dónde|donde|canby/.test(q)) {
    return `${clinic.street}, ${clinic.city}. Suite 6B. Call ${clinic.phoneDisplay} if you need the entrance.`;
  }
  if (/home visit|house call|domicilio|տնային/.test(q)) {
    return "Home visits are not offered through this website. Call the clinic.";
  }
  if (/walk|sin cita|walk-in|walk in/.test(q)) {
    return "Walk-ins are welcome on weekdays, 9 AM to 5 PM. Calling ahead is optional.";
  }
  if (/appoint|book|cita|schedule|office visit|reserv/.test(q)) {
    return `Call ${clinic.phoneDisplay} or use the office visit form. The clinic calls you back to set a time.`;
  }
  if (/insur|medi-cal|medicare|seguro|card/.test(q)) {
    return "Bring the plan name if you have one. You can still come without a card.";
  }
  if (/spanish|english|idioma|language|հայ|armenian/.test(q)) {
    return "Visits are in English or Spanish. This site also has Armenian.";
  }
  if (/donat|give|volunteer|fund|donar|volunt/.test(q)) {
    return "Donate is one-time, monthly, or yearly. Volunteer is under Support our cause.";
  }
  if (/phone|call|número|numero|llame|զանգ/.test(q)) {
    return `Call ${clinic.phoneDisplay}. That is the fastest way to reach the clinic.`;
  }
  return `I can help with hours, the address, a visit, insurance, or a donation. For anything about your health, call ${clinic.phoneDisplay}. Don’t send symptoms here.`;
}

export function ChatWithUs({ inline = false }: { inline?: boolean }) {
  const { tx } = useTx();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "clinic",
      text: "Canby Community Clinic. Ask about hours, the address, a visit, or insurance. Don’t send symptoms.",
    },
  ]);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function send(value: string) {
    const next = value.trim();
    if (!next) return;
    setMessages((list) => [...list, { from: "you", text: next }, { from: "clinic", text: answer(next) }]);
    setText("");
  }

  const prompts = [
    tx({ en: "Hours", es: "Horario", hy: "Ժամեր" }),
    tx({ en: "Address", es: "Dirección", hy: "Հասցե" }),
    tx({ en: "Request a visit", es: "Pedir una visita", hy: "Այց խնդրել" }),
    tx({ en: "Insurance", es: "Seguro", hy: "Ապահովագրություն" }),
  ];

  return (
    <>
      <button type="button" className={inline ? "chat-inline" : "chat-launch"} onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {tx({ en: "Chat with us", es: "Escríbanos", hy: "Գրեք մեզ" })}
      </button>
      {open ? (
        <div className="clinic-chat" role="dialog" aria-label={tx({ en: "Chat with us", es: "Escríbanos", hy: "Գրեք մեզ" })}>
          <header className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="text-sm font-medium">{tx({ en: "Chat with us", es: "Escríbanos", hy: "Գրեք մեզ" })}</p>
              <p className="text-xs text-muted">{clinic.phoneDisplay}</p>
            </div>
            <button type="button" className="min-h-9 px-2 text-sm" onClick={() => setOpen(false)}>
              {tx({ en: "Close", es: "Cerrar", hy: "Փակել" })}
            </button>
          </header>
          <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p key={index} className={message.from === "you" ? "ml-8 bg-blue px-3 py-2 text-sm text-cream" : "mr-8 bg-paper px-3 py-2 text-sm text-ink"}>
                {message.text}
              </p>
            ))}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link to="/appointments" className="text-xs font-medium text-blue" onClick={() => setOpen(false)}>
                {tx({ en: "Office visit", es: "Cita en la clínica", hy: "Այց կլինիկայում" })}
              </Link>
            </div>
          </div>
          <div className="border-t border-line px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {prompts.map((prompt) => (
                <button key={prompt} type="button" className="border border-line bg-paper px-2 py-1 text-xs" onClick={() => send(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                send(text);
              }}
            >
              <input
                className="min-h-11 flex-1 border border-line bg-paper px-3 text-sm"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder={tx({ en: "Ask a question", es: "Haga una pregunta", hy: "Հարց տվեք" })}
                aria-label={tx({ en: "Message", es: "Mensaje", hy: "Հաղորդագրություն" })}
              />
              <button type="submit" className="min-h-11 bg-blue px-3 text-sm font-medium text-cream">
                {tx({ en: "Send", es: "Enviar", hy: "Ուղարկել" })}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
