import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CollectionTracker } from "@/components/CollectionTracker";
import { CREATURES, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - Full Fish List (All 49 Creatures)",
  description:
    "Every catchable creature in How to Fish (Steam), grouped by the bait/lure tier you need to catch them - all 49, from Brown Crab to the Mutated Bowhead Whale.",
  path: "/fish-list/",
});

export default function FishListPage() {
  const total = CREATURES.length;
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Fish List" path="/fish-list/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Full Fish List - All {total} Creatures
        </Heading>
        <p className="text-fg">
          How to Fish isn&rsquo;t rod-and-reel - you catch creatures, kill them, and
          sell them. Here&rsquo;s every one, grouped by the bait or lure you need to
          land it. That tier ladder is also the rarity ladder: cheaper bait = common,
          Scientific Lure = the good stuff. Tick them off as you go - your progress
          saves in your browser.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <CollectionTracker />

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">Two collection achievements to know</p>
        <p><span className="glow-sonar">Collector</span> - find and kill all creatures. <span className="glow-sonar">Fishipedia</span> - find and kill every &ldquo;drip&rdquo; (shiny) variant. A drip is a shiny version of any creature and uses the same bait as the normal one.</p>
        <p className="text-dim">
          Per-creature sell values and exact island spawns aren&rsquo;t fully
          documented yet - we&rsquo;re verifying them in-game and will add them here
          rather than guess. Check in-game with the <em>Inspect</em> action before you
          sell.
        </p>
      </SonarPanel>
    </article>
  );
}
