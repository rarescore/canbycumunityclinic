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
    if (typeof input.subject !== "string" || !input.subject.trim() || input.subject.length > 180)
      throw new Error("bad subject");
    if (typeof input.body !== "string" || !input.body.trim() || input.body.length > 8000)
      throw new Error("bad body");
    return input;
  })
  .handler(async ({ data }) => {
    const to = data.inbox === "office" ? clinic.emailOffice : clinic.emailPatients;
    // FormSubmit is activated for canbycc.org. Keep that Origin so deliveries
    // continue after the public hostname moved to puravidacc.org. Activating the
    // same inboxes for https://www.puravidacc.org would let us drop the override.
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      signal: AbortSignal.timeout(15000),
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
    const payload = (await response.json().catch(() => null)) as {
      success?: string | boolean;
    } | null;
    const ok = response.ok && (payload?.success === true || payload?.success === "true");
    if (!ok) throw new Error("send failed");
    return { ok: true as const };
  });
