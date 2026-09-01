import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const paths = ["/", ...NAV.map((n) => n.href), ...LEGAL_NAV.map((n) => n.href)];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/fish-list/" || p === "/achievements/" ? "weekly" : "monthly",
    priority: p === "/" ? 0.9 : p === "/fish-list/" || p === "/achievements/" ? 0.8 : 0.6,
  }));
}
