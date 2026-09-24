import { securityHeaders } from "../../scripts/security-headers.mjs";

interface SecurityEvent {
  req: { headers: Headers };
}

export default async function securityMiddleware(
  event: SecurityEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  const https = (event.req.headers.get("x-forwarded-proto") ?? "").includes("https");
  const headers = securityHeaders({ https });
  if (result instanceof Response) {
    for (const [key, value] of Object.entries(headers)) {
      if (!result.headers.has(key)) result.headers.set(key, value);
    }
    return result;
  }
  return result;
}
