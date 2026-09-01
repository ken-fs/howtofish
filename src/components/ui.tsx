import type { ReactNode } from "react";
import Link from "next/link";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";

/** Sonar console panel — 2px kelp border, no soft rounded SaaS cards. */
export function SonarPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`sonar-panel p-5 sm:p-6 ${className}`}>{children}</section>;
}

type GlowColor = "sonar" | "lure" | "shallow" | "coral";

/** Section heading in the chunky display face, with optional bioluminescent glow. */
export function Heading({
  children,
  color = "lure",
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  color?: GlowColor;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`display glow-${color} text-2xl sm:text-3xl ${className}`}>
      {children}
    </Tag>
  );
}

/** Sticky top nav — the sonar console bar. */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-kelp bg-abyss/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
        <Link href="/" className="display text-lg font-bold glow-lure no-underline">
          HOW TO<span className="glow-sonar"> FISH</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-dim hover:text-sonar">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/** Shared footer + fan-made disclaimer (kept visible per project rules). */
export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-kelp">
      <div className="mx-auto max-w-5xl px-4 py-8 text-dim">
        <p className="display text-xs uppercase tracking-wide">
          Fan-made · Not affiliated with {SITE.developer} or Valve/Steam
        </p>
        <p className="mt-3 text-sm">
          {SITE.name} is an independent player resource for the Steam game{" "}
          {SITE.game}. Game names and assets belong to their owners. Fish data,
          achievements and tips are player-verified — anything we cannot confirm
          in-game is marked &ldquo;check in-game.&rdquo;
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {LEGAL_NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-dim hover:text-sonar">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm">© {new Date().getFullYear()} {SITE.domain}</p>
      </div>
    </footer>
  );
}

/** "Last verified" stamp — our freshness wedge vs. slow incumbents. */
export function VerifiedStamp({ date }: { date: string }) {
  return (
    <p className="text-sm text-dim">
      Last checked: <span className="glow-sonar">{date}</span>
    </p>
  );
}
