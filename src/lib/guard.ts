const hits = new Map<string, number[]>();

export function cleanText(value: string, max: number) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max);
}

export function cleanLine(value: string, max: number) {
  return cleanText(value, max).replace(/[\r\n]+/g, " ");
}

export function isEmail(value: string) {
  return value.length <= 120 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function tooFast(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const prev = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (prev.length >= limit) {
    hits.set(key, prev);
    return true;
  }
  prev.push(now);
  hits.set(key, prev);
  if (hits.size > 4000) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
  return false;
}

export function safeReturnUrl(value: string, requestHost?: string | null) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("Payment could not start.");
  }
  const host = url.host.toLowerCase();
  const allowed =
    host === "canbycc.org" ||
    host === "www.canbycc.org" ||
    host === "localhost:8080" ||
    host === "127.0.0.1:8080" ||
    host.endsWith(".grok-sandbox.com") ||
    (requestHost ? host === requestHost.toLowerCase() : false);
  const local = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  if (!allowed || (url.protocol !== "https:" && !(url.protocol === "http:" && local))) {
    throw new Error("Payment could not start.");
  }
  return url.toString();
}
