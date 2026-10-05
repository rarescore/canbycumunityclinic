import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { I18nProvider } from "@/components/site/i18n";
import { SiteFrame } from "@/components/site/chrome";
import { clinic } from "@/lib/clinic";
import appCss from "../styles.css?url";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  alternateName: clinic.former,
  url: "https://canbycc.org",
  telephone: clinic.phoneTel,
  email: clinic.emailPatients,
  medicalSpecialty: "PrimaryCare",
  availableLanguage: ["English", "Spanish"],
  areaServed: "Reseda, CA",
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.street,
    addressLocality: "Reseda",
    addressRegion: "CA",
    postalCode: "91335",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  identifier: clinic.npi,
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Canby Community Clinic" },
      {
        name: "description",
        content:
          "Canby Community Clinic in Reseda, formerly Pura Vida Community Clinic. Weekday primary care built around listening. Call (818) 674-4414 or request an appointment.",
      },
      { name: "theme-color", content: "#0e3d78" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <SiteFrame>
              <Outlet />
            </SiteFrame>
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
