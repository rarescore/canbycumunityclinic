import { createServerFn } from "@tanstack/react-start";
import { clinic } from "@/lib/clinic";

type MailInput = {
  inbox: "patients" | "office";
  subject: string;
  body: string;
  replyTo?: string;
};

export const sendClinicMail = createServerFn({ method: "POST" })
  .inputValidator((input: MailInput) => {
    if (input.inbox !== "patients" && input.inbox !== "office") throw new Error("bad inbox");
    if (!input.subject.trim() || input.subject.length > 180) throw new Error("bad subject");
    if (!input.body.trim() || input.body.length > 8000) throw new Error("bad body");
    return input;
  })
  .handler(async ({ data }) => {
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
