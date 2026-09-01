import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { CREATURES, TIER_ORDER, LAST_CHECKED, type Tier } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish — Full Fish List (All 49 Creatures)",
  description:
    "Every catchable creature in How to Fish (Steam), grouped by the bait/lure tier you need to catch them — all 49, from Brown Crab to the Mutated Bowhead Whale.",
  path: "/fish-list/",
});

const TIER_BLURB: Record<Tier, string> = {
  "Free Bait": "Caught with the starter Crab Rod and free bait. Your bread and butter early on.",
  "Standard Lure": "Need the Standard Lure. Bigger payouts once you can afford it.",
  "Professional Lure": "Professional Lure territory — where the real money starts.",
  "Scientific Lure": "The rarest catch tier. Blobfish, Oarfish, Anglerfish and friends.",
  "Boss / Special": "Bosses and special creatures. You fight these, you don't just reel them in.",
};

export default function FishListPage() {
  const total = CREATURES.length;
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Full Fish List — All {total} Creatures
        </Heading>
        <p className="text-fg">
          How to Fish isn&rsquo;t rod-and-reel — you catch creatures, kill them, and
          sell them. Here&rsquo;s every one, grouped by the bait or lure you need to
          land it. That tier ladder is also the rarity ladder: cheaper bait = common,
          Scientific Lure = the good stuff.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      {TIER_ORDER.map((tier) => {
        const rows = CREATURES.filter((c) => c.tier === tier);
        return (
          <section key={tier} className="space-y-3">
            <Heading color="sonar" className="text-xl sm:text-2xl">
              {tier} <span className="text-dim text-base">· {rows.length}</span>
            </Heading>
            <p className="text-sm text-dim">{TIER_BLURB[tier]}</p>
            <SonarPanel className="!p-0 overflow-hidden">
              <ul className="grid gap-x-6 gap-y-1 p-5 sm:grid-cols-2 lg:grid-cols-3">
                {rows.map((c) => (
                  <li key={c.name} className="flex items-baseline gap-2 border-b border-kelp/40 py-1.5">
                    <span className="text-fg">{c.name}</span>
                  </li>
                ))}
              </ul>
            </SonarPanel>
          </section>
        );
      })}

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">Two collection achievements to know</p>
        <p><span className="glow-sonar">Collector</span> — find and kill all creatures. <span className="glow-sonar">Fishipedia</span> — find and kill every &ldquo;drip&rdquo; (shiny) variant. A drip is a shiny version of any creature and uses the same bait as the normal one.</p>
        <p className="text-dim">
          Per-creature sell values and exact island spawns aren&rsquo;t fully
          documented yet — we&rsquo;re verifying them in-game and will add them here
          rather than guess. Check in-game with the <em>Inspect</em> action before you
          sell.
        </p>
      </SonarPanel>
    </article>
  );
}
