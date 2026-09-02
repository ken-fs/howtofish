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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "How to Fish - all catchable creatures",
            numberOfItems: total,
            itemListElement: CREATURES.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
            })),
          }),
        }}
      />
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
        <p className="text-fg display">Values, drips &amp; the two collection achievements</p>
        <p>
          The most valuable rod catch is the <span className="text-fg">Superdwarf Fish ($1,700)</span>,
          then Stonefish and Anglerfish ($1,500). Boss creatures pay far more - the
          Bowhead Whale sells for $8,000.
        </p>
        <p>
          A <span className="glow-sonar">drip</span> is a random variant of any creature
          (roughly a 1-in-10 catch, flagged by a rainbow &ldquo;Creature Caught&rdquo;
          popup). Counter-intuitively, a drip is worth <strong>less</strong> than the
          normal version - don&rsquo;t sell them, save them for the Reel of Fortune skin
          machine. Two achievements ride on this: <span className="glow-sonar">Collector</span>{" "}
          (kill all 49 creatures) and <span className="glow-coral">Fishipedia</span> (kill
          every drip variant, caught with a rod, not dynamite).
        </p>
        <p className="text-dim">
          Sell values come from community guides (Game8) and can shift with patches -
          use the in-game <em>Inspect</em> action to confirm before you sell.
        </p>
      </SonarPanel>
    </article>
  );
}
