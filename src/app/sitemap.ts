import type { MetadataRoute } from "next";
import { SITE, NAV, MORE_NAV, LEGAL_NAV } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const paths = [
    "/",
    ...NAV.map((n) => n.href),
    ...MORE_NAV.map((n) => n.href),
    ...LEGAL_NAV.map((n) => n.href),
  ];
  // changefreq/priority omitted on purpose - Google has ignored both since 2019.
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
  }));
}
