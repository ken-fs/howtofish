import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Build complete, consistent page metadata. Centralizes canonical + Open Graph +
 * Twitter so every page emits a correct per-page og:url (not the homepage URL).
 */
export function buildMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/fish-list/"
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: path,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

/** Article JSON-LD for guide pages (E-E-A-T). Pass the page's verified date. */
export function articleLd({
  headline,
  description,
  path,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    dateModified,
    author: {
      "@type": "Person",
      name: SITE.editor,
      jobTitle: SITE.editorRole,
      url: `${SITE.url}/about/`,
    },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}${path}`,
  };
}
