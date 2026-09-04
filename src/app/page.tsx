import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Screenshots } from "@/components/Screenshots";
import { TrailerEmbed } from "@/components/TrailerEmbed";
import { SCREENSHOTS } from "@/data/media";

const LAST_CHECKED = "September 1, 2026";

/** Short blurb per hub card - kept here so the homepage stays the single hub. */
const CARDS: { href: string; label: string; blurb: string }[] = [
  {
    href: "/fish-list/",
    label: "Full Fish List",
    blurb: "Every fish, where it bites, and which ones are actually rare.",
  },
  {
    href: "/achievements/",
    label: "All 28 Achievements",
    blurb: "The exact steps for each one - including the missable ones.",
  },
  {
    href: "/multiplayer/",
    label: "Co-op Setup",
    blurb: "Invite friends, fix the lobby, and whether crossplay works.",
  },
  {
    href: "/beginner-guide/",
    label: "Beginner Guide",
    blurb: "Controls, casting, selling fish, and your first upgrades.",
  },
  {
    href: "/islands/",
    label: "All 5 Islands",
    blurb: "Unlock order, gating bosses, and what each island's shop adds.",
  },
  {
    href: "/money/",
    label: "Make Money Fast",
    blurb: "Clam farming, best-value catches, and killscore multipliers.",
  },
  {
    href: "/faq/",
    label: "Quick Answers",
    blurb: "Price, length, Switch/Xbox, and is it worth $7.99.",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero - text + a real gameplay shot */}
      <section className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div className="space-y-4">
          <Heading as="h1" color="lure" className="text-4xl sm:text-5xl">
            How to Fish, actually explained
          </Heading>
          <p className="text-lg text-fg">
            The low-poly co-op game everyone&rsquo;s streaming - and it&rsquo;s secretly
            a shooter. You catch creatures, kill them, and sell them for money. We dug
            through it so you don&rsquo;t have to guess: fish list, every achievement,
            and how to drag your friends into co-op without the lobby breaking.
          </p>
          <VerifiedStamp date={LAST_CHECKED} />
        </div>
        <img
          src={SCREENSHOTS[0].src}
          alt={SCREENSHOTS[0].alt}
          width={1280}
          height={720}
          fetchPriority="high"
          className="w-full rounded border-2 border-kelp shadow-lg shadow-black/40"
        />
      </section>

      {/* Game facts + official Steam trailer / store embed */}
      <section className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-stretch">
        <SonarPanel className="space-y-2 text-sm">
          <p className="display text-lg glow-sonar">The game</p>
          <p className="text-dim">
            <span className="text-fg">{SITE.game}</span> by {SITE.developer}
          </p>
          <p className="text-dim">Released {SITE.releaseDate} · Steam · {SITE.price}</p>
          <p className="text-dim">1-4 player online co-op · 28 achievements</p>
          <p className="text-dim">
            <a href={SITE.steamUrl} rel="nofollow noopener" target="_blank">
              Overwhelmingly Positive · 95% of 50,000+ reviews
            </a>
          </p>
          <p>
            <a href={SITE.steamUrl} rel="nofollow noopener" target="_blank">
              View on Steam →
            </a>
          </p>
        </SonarPanel>
        <div className="sonar-panel overflow-hidden !p-0">
          <TrailerEmbed />
        </div>
      </section>

      <div className="sweep-divider" />

      {/* Hub links - uneven grid, not three equal cards */}
      <section className="space-y-5">
        <Heading color="shallow">Start here</Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="no-underline">
              <SonarPanel className="h-full transition-colors hover:border-sonar">
                <p className="display text-xl text-fg">{c.label}</p>
                <p className="mt-2 text-sm text-dim">{c.blurb}</p>
              </SonarPanel>
            </Link>
          ))}
        </div>
      </section>

      <div className="sweep-divider" />

      {/* Screenshots - real game imagery */}
      <section className="space-y-5">
        <Heading color="shallow">See it in action</Heading>
        <Screenshots limit={6} />
        <p className="text-xs text-dim">Screenshots © {SITE.developer}, via Steam.</p>
      </section>

      <div className="sweep-divider" />

      {/* Honest positioning - why this site over a wiki */}
      <section className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <Heading color="lure">Why not just the wiki?</Heading>
        <div className="space-y-3 text-fg">
          <p>
            Because the wiki is half-empty and the big guide sites recycle the same
            three tips. This game is days old. We update the second something changes.
          </p>
          <p>
            No fluff, no 800-word intros before the answer. Just the fish, the steps,
            and the fix. Bookmark it - we&rsquo;re adding pages daily.
          </p>
          <p className="text-sm text-dim">
            Missing something?{" "}
            <Link href="/contact/">Send it over</Link> and we&rsquo;ll add it.
          </p>
        </div>
      </section>

      {/* nav echo for crawlers / no-JS */}
      <nav aria-label="Guides" className="text-sm text-dim">
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
