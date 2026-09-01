import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { GAME_VERSION, LAST_CHECKED } from "@/data/game";

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
    note: "Current live version on Steam. We're logging changes here as they roll out — bookmark this page.",
  },
  {
    version: "Post-1.0.5",
    note: "The 1-hour speedrun timing behind the 'Bean' achievement shifted after early patches. If you're going for Bean, plan your route against the current build, not an old guide.",
  },
];

export default function UpdatesPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Patch Notes &amp; Updates
        </Heading>
        <p className="text-fg">
          How to Fish is still being patched often. Updates can tweak bait odds, boss
          behaviour and the tricky achievements — so an old guide can go stale fast.
          We track the changes that actually matter here.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
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
          We only post changes we can confirm — no copied or guessed patch notes. Spot
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
