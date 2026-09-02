import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ISLANDS, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - Beginner Guide, Controls & Money Tips",
  description:
    "New to How to Fish? The core loop, the controls we've confirmed, how to sell fish, the kill-score multiplier, fast money tricks, and which upgrades to buy first.",
  path: "/beginner-guide/",
});

export default function BeginnerGuidePage() {
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Beginner Guide" path="/beginner-guide/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Beginner Guide
        </Heading>
        <p className="text-fg">
          The name is a bluff. You&rsquo;re not learning to fish - you catch creatures,
          kill them with weapons, and sell them to fund bigger guns and a faster boat.
          Here&rsquo;s how to stop flailing in the first hour.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">The core loop</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <p>Catch a creature → kill it → sell it → buy better gear → reach new islands → beat the boss → repeat with rarer creatures.</p>
          <p>You sell by <strong>throwing the catch into the shopkeeper&rsquo;s mouth</strong>. Before you sell, use <strong>Inspect</strong> to check a creature&rsquo;s value - some are worth holding for a &ldquo;drip&rdquo; (shiny) variant.</p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Controls (what&rsquo;s confirmed)</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <ul className="space-y-1">
            <li><strong>Interact:</strong> pick up creatures and items.</li>
            <li><strong>Inspect:</strong> check a creature&rsquo;s sell value before selling.</li>
            <li><strong>Tab:</strong> open the collection / Fishipedia view.</li>
            <li><strong>Number keys:</strong> switch weapons (switching auto-drops the fish you&rsquo;re holding).</li>
            <li><strong>Eat:</strong> restore hunger (keep an eye on the hunger/grill system).</li>
          </ul>
          <p className="text-sm text-dim">
            The game doesn&rsquo;t publish a full keybind chart and there&rsquo;s no
            listed controller support, so exact WASD/mouse casting binds aren&rsquo;t
            documented anywhere yet. We&rsquo;re mapping them in-game and will post the
            full list here - rather than copy a guess.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Make money faster</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <p><strong>Kill-score multiplier:</strong> stylish kills stack a multiplier (up to 5x) that boosts payouts - the &ldquo;Impressive&rdquo; achievement wants 5x. Trick kills like the <strong>360 no-scope</strong> pump it fast.</p>
          <p><strong>Gambling:</strong> the slot machine drops skins (including a legendary), and roulette has a &ldquo;bet on green&rdquo; win for the &ldquo;All in&rdquo; achievement. Fun, but the reliable money is still selling rare creatures.</p>
          <p><strong>Don&rsquo;t sell everything to seagulls:</strong> seagulls try to steal your catch - kill them, don&rsquo;t hand them your payday.</p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">What to upgrade first</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <ul className="space-y-1">
            <li><strong>Radar</strong> - buy it before you leave the starting island; it makes finding creatures far less painful.</li>
            <li><strong>Boat engine</strong> - unlocks travel and feeds the &ldquo;Getting an upgrade&rdquo; and &ldquo;I am speed&rdquo; achievements.</li>
            <li><strong>Better lures</strong> - Free → Standard → Professional → Scientific opens up higher-value creatures. See the <a href="/fish-list/">full fish list</a> for the tier ladder.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">The islands</Heading>
        <p className="text-sm text-dim">Rough progression order and bosses. Exact island count and biome names aren&rsquo;t fully confirmed yet - flagged where uncertain.</p>
        <div className="space-y-3">
          {ISLANDS.map((i) => (
            <SonarPanel key={i.name} className="space-y-1">
              <p className="display text-lg text-fg">
                {i.name}
                {i.boss !== "-" && <span className="text-dim text-sm"> · boss: {i.boss}</span>}
              </p>
              <p className="text-sm text-fg">{i.note}</p>
            </SonarPanel>
          ))}
        </div>
      </section>
    </article>
  );
}
