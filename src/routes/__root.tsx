import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { I18nProvider } from "@/components/site/i18n";
import { SiteFrame } from "@/components/site/chrome";
import { clinic } from "@/lib/clinic";
import appCss from "../styles.css?inline";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  alternateName: clinic.former,
  telephone: clinic.phoneTel,
  email: clinic.emailPatients,
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
      { name: "theme-color", content: "#0d4f98" },
      { property: "og:site_name", content: "Canby Community Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://canbycc.org/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "ai-catalog", href: "/.well-known/ai-catalog.json" },
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
        <style dangerouslySetInnerHTML={{ __html: appCss }} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=Noto+Sans+Armenian:wght@500;600;700&display=swap"
          media="print"
          onLoad={(event) => {
            event.currentTarget.media = "all";
          }}
        />
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
