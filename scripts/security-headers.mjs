const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://js.stripe.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://api.stripe.com https://js.stripe.com https://m.stripe.network https://formsubmit.co",
  "frame-src https://js.stripe.com https://hooks.stripe.com https://www.paypal.com https://www.sandbox.paypal.com https://maps.google.com https://www.google.com",
  "form-action 'self' https://www.paypal.com https://www.sandbox.paypal.com",
  "frame-ancestors 'self' https://*.grok-sandbox.com https://grok.com https://*.grok.com https://*.x.ai",
].join("; ");

export function securityHeaders({ https = false } = {}) {
  const headers = {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    "X-Permitted-Cross-Domain-Policies": "none",
  };
  if (https) {
    headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains";
    headers["Content-Security-Policy"] = csp;
    headers["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups";
  }
  return headers;
}
