import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GAME_VERSION } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: `How to Fish Patch Notes & Updates (v${GAME_VERSION})`,
  description:
    "Track How to Fish updates and patch notes. The current version, notable changes that affect achievements and strategy, and how to check which version you're on.",
  path: "/updates/",
});

/** Append newest-first as patches land. Only entries we can stand behind. */
const UPDATES: { version: string; note: string }[] = [
  {
    version: GAME_VERSION,
    note: "Tiny patch. The Fishipedia (the in-game creature log) now shows which bait catches each fish, once you've killed it at least once. That makes hunting drip creatures for the 'Fishipedia' achievement much easier.",
  },
  {
    version: "1.1.2",
    note: "Clean-up for the Islet Update. You can now rebind reload, the bow gets 2 new skins, and the new bait spawns 3 times on the new mini island instead of 2. Shiny rod skins are shinier, wishbone upgrade prices were adjusted (no numbers given), mini-island dots on the radar are bigger, and you can downgrade back to the iron sight. Fixes: the Tench can now spawn from the new bait, and the new mini-boss's model faces the right way.",
  },
  {
    version: "1.1.0",
    note: "The Islet Update - the first content update. It adds a new weapon, several mini islands, more creatures, a new mini-boss, more items, a new bait, a new NPC, new achievements, a new outfit and a bundle with PEAK. Some sound effects are quieter or louder, and the distance between islands changed. The patch notes don't name the new creatures or weapon, so our fish, weapon and achievement lists don't include them yet. The 1.1.2 notes mention a bow and a Tench fish, which hints at two of them.",
  },
  {
    version: "1.0.12",
    note: "Steam Cloud saves arrive (play and exit once on your main PC to upload). Piranha was rebalanced and Tuna nerfed slightly - no numbers published, so treat our Piranha/Tuna sell values as approximate until re-checked in-game. Items now have capped velocity so they're harder to lose, and MetaVoice 4.3 should fix voice chat bugs. Fixes: FishNet no longer overrides your max FPS when joining a lobby, music preloads so the first radio purchase doesn't lag-spike, and the final boss takes explosive damage even when landing on its tail. The devs say this is likely the last bugfix patch before content updates begin.",
  },
  {
    version: "1.0.11",
    note: "Steam Deck Verified and GeForce NOW support, plus new toggle options for aim, sprint, attack and nametags. Saves are now corruption-checked with automatic backups. Dropped weapons ping orange (dead players turquoise) on the item dots, your own explosives now hurt you even with friendly fire off, the Iron Sight was removed from shops, and Suppressors can no longer be downgraded to Compensators.",
  },
  {
    version: "Post-1.0.5",
    note: "The 1-hour speedrun timing behind the 'Bean' achievement shifted after early patches. If you're going for Bean, plan your route against the current build, not an old guide.",
  },
];

export default function UpdatesPage() {
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Patch Notes" path="/updates/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Patch Notes &amp; Updates
        </Heading>
        <p className="text-fg">
          How to Fish is still being patched often. Updates can tweak bait odds, boss
          behaviour and the tricky achievements - so an old guide can go stale fast.
          We track the changes that actually matter here.
        </p>
        <p className="text-fg">
          <strong>What&rsquo;s next:</strong> on October 12, 2026 the devs said
          they&rsquo;re working on a bigger content update,{" "}
          <a href="/console/">console ports</a> and bug fixes &ldquo;in the coming
          months&rdquo;. No dates yet.
        </p>
        <VerifiedStamp date="October 15, 2026" />
      </header>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Version log</Heading>
        <div className="space-y-3">
          {UPDATES.map((u) => (
            <SonarPanel key={u.version} className="space-y-1">
              <p className="display text-lg glow-sonar">v{u.version.replace(/^v/, "")}</p>
              <p className="text-fg">{u.note}</p>
            </SonarPanel>
          ))}
        </div>
        <p className="text-sm text-dim">
          We only post changes we can confirm - no copied or guessed patch notes. Spot
          a change we missed? <a href="/contact/">Send it over</a> and we&rsquo;ll add
          it same-day.
        </p>
      </section>

      <section className="space-y-3">
        <Heading color="shallow" className="text-xl sm:text-2xl">How to check your version</Heading>
        <SonarPanel className="text-fg">
          <p>
            The version number is shown on the main menu (usually a corner of the
            title screen). In Steam you can also right-click the game →{" "}
            <em>Properties → Updates</em> to see the current build and force an update
            if you&rsquo;re behind.
          </p>
        </SonarPanel>
      </section>
    </article>
  );
}
