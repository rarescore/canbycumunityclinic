import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { clinic } from "@/lib/clinic";
import { cleanLine, cleanText, isEmail, tooFast } from "@/lib/guard";

type MailInput = {
  inbox: "patients" | "office";
  subject: string;
  body: string;
  replyTo?: string;
  trap?: string;
};

function callerKey() {
  try {
    const header = getRequest().headers.get("x-forwarded-for") ?? "";
    return (header.split(",")[0] ?? "local").trim().slice(0, 80) || "local";
  } catch {
    return "local";
  }
}

export const sendClinicMail = createServerFn({ method: "POST" })
  .inputValidator((input: MailInput) => {
    if (input.inbox !== "patients" && input.inbox !== "office") throw new Error("bad inbox");
    const subject = cleanLine(input.subject ?? "", 180);
    const body = cleanText(input.body ?? "", 8000);
    const replyTo = cleanLine(input.replyTo ?? "", 120);
    if (!subject || !body) throw new Error("bad message");
    if (replyTo && !isEmail(replyTo)) throw new Error("bad email");
    return {
      inbox: input.inbox,
      subject,
      body,
      replyTo,
      trap: cleanLine(input.trap ?? "", 200),
    };
  })
  .handler(async ({ data }) => {
    if (data.trap) return { ok: true as const };
    if (tooFast(`mail:${callerKey()}`, 6, 10 * 60 * 1000)) throw new Error("send failed");
    const to = data.inbox === "office" ? clinic.emailOffice : clinic.emailPatients;
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://canbycc.org",
        Referer: "https://canbycc.org/",
      },
      body: JSON.stringify({
        _subject: data.subject,
        _captcha: "false",
        _template: "box",
        ...(data.replyTo ? { _replyto: data.replyTo } : {}),
        message: data.body,
      }),
    });
    const payload = (await response.json().catch(() => null)) as { success?: string | boolean } | null;
    const ok = response.ok && payload?.success !== false && payload?.success !== "false";
    if (!ok) throw new Error("send failed");
    return { ok: true as const };
  });
