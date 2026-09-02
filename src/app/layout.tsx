import type { Metadata } from "next";
import Script from "next/script";
import { Titan_One, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { SiteNav, SiteFooter } from "@/components/ui";
import { AdsterraGlobal } from "@/components/ads";

const titan = Titan_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-titan",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `How to Fish (Steam) — Fish List, Achievements & Co-op Guide`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `How to Fish — Fish List, Achievements & Co-op Guide`,
    description: SITE.tagline,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Fish — Fish List, Achievements & Co-op Guide`,
    description: SITE.tagline,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  verification: SITE.gscVerification
    ? { google: SITE.gscVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: `Independent fan resource for the Steam game ${SITE.game}: fish list, achievements, co-op setup and guides.`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${SITE.url}/contact/`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "VideoGame",
        "@id": `${SITE.url}/#videogame`,
        name: SITE.game,
        url: SITE.steamUrl,
        description:
          "A physics-based fishing game with single-player and 1-4 player online co-op, released on Steam by Dazed Games.",
        gamePlatform: "PC (Steam)",
        applicationCategory: "Game",
        operatingSystem: "Windows",
        genre: ["Casual", "Simulation", "Indie"],
        playMode: ["SinglePlayer", "CoOp"],
        datePublished: SITE.releaseDate,
        image: `${SITE.url}/og.png`,
        author: { "@type": "Organization", name: SITE.developer },
        publisher: { "@type": "Organization", name: SITE.developer },
      },
    ],
  };

  return (
    <html lang="en" className={`${titan.variable} ${inter.variable}`}>
      <body>
        {/* Google tag (gtag.js) — GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N37YFN49Z3"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N37YFN49Z3');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <SiteFooter />
        <AdsterraGlobal />
      </body>
    </html>
  );
}
