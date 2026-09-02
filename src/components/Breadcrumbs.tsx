import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Visible breadcrumb + BreadcrumbList JSON-LD. Adds a Home link (internal
 * linking) and structured breadcrumb data on every non-home page.
 */
export function Breadcrumbs({ label, path }: { label: string; path: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE.url}${path}` },
    ],
  };
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-dim">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/" className="hover:text-sonar">Home</Link>
      <span className="px-2 text-kelp">/</span>
      <span className="text-fg">{label}</span>
    </nav>
  );
}
