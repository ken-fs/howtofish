import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ISLANDS, KILLSCORE, LAST_CHECKED } from "@/data/game";

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
          <p>You catch by casting and reeling, then <strong>beat the creature before it escapes</strong>, and sell it to a shopkeeper NPC. Use <strong>Inspect</strong> to check a value first. Note: a &ldquo;drip&rdquo; (rare variant) is worth <em>less</em>, so keep drips for the skin machine instead of selling.</p>
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
        <SonarPanel className="space-y-3 text-fg">
          <p><strong>Farm Clams on island 1:</strong> feed the respawning Clams to the Vendor - it&rsquo;s faster than early fishing and gets you your first weapons and the Radar. You can hold about four at a time.</p>
          <p><strong>Kill-score multiplier:</strong> stylish kills stack a multiplier onto a catch&rsquo;s sell value. Use guns over melee and combine moves in one kill (most stack). Cooking on the Grill adds a <em>separate</em> multiplier on top (up to ~1.5x). Hitting a 5x multiplier is the &ldquo;Impressive&rdquo; achievement.</p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-sm border-collapse text-sm">
              <tbody>
                {KILLSCORE.map((k) => (
                  <tr key={k.move} className="border-b border-kelp/40">
                    <td className="py-1.5 pr-4 text-fg">{k.move}</td>
                    <td className="py-1.5 glow-lure">{k.mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><strong>Dynamite ($25 on island 2):</strong> kills ~5 fish at once - it pays for itself and it&rsquo;s the key to the 10-second Albatross kill.</p>
          <p><strong>Gambling (island 4):</strong> roulette pays out on a wagered item; landing green is the &ldquo;All in&rdquo; achievement. The Reel of Fortune slot machine drops skins (feed it your drips). Fun, but selling rare creatures is still the steady money.</p>
          <p className="text-sm text-dim">Multiplier values are from community guides (Game8) - treat as a guide, not gospel.</p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">What to upgrade first</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <ul className="space-y-1">
            <li><strong>Radar first</strong> - buy it (next to the island-1 Vendor) before you sail; it points you to the next island so you&rsquo;re not wandering.</li>
            <li><strong>Firepower over boat</strong> - prioritise a gun (Knife → Pistol → save for the SMG) before engine upgrades. See the <a href="/weapons/">weapons guide</a>.</li>
            <li><strong>Better lures</strong> - Free → Standard → Professional → Scientific opens higher-value creatures. See the <a href="/fish-list/">full fish list</a>.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="coral" className="text-xl sm:text-2xl">Common mistakes to avoid</Heading>
        <SonarPanel className="space-y-1 text-fg">
          <ul className="space-y-1">
            <li><strong>Don&rsquo;t sell boss trophies / proof items</strong> - you hand them to NPCs to unlock the next island. Sell one and you stall.</li>
            <li><strong>Don&rsquo;t leave weapons behind</strong> when you change islands - dropped guns and their attachments are gone permanently.</li>
            <li><strong>Don&rsquo;t over-upgrade every gun</strong> - fully kitting all of them is very expensive; pick one main weapon.</li>
            <li><strong>Don&rsquo;t gamble early</strong> with few resources, and don&rsquo;t sell drips - save them for skins.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">The islands</Heading>
        <p className="text-sm text-dim">Five islands, in order, each gated by a proof item you hand to an NPC. Full boss strategies are on the <a href="/bosses/">bosses page</a>.</p>
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
