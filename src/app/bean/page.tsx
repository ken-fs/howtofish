import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GAME_VERSION, ISLANDS, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - Bean Achievement Guide (Beat the Game in 1 Hour)",
  description:
    "How to get the Bean achievement in How to Fish (Steam): finish the game within 1 hour. Easy-mode setup, the critical path through all 5 islands, Dynamite boss strats, and co-op lobby tips.",
  path: "/bean/",
});

export default function BeanPage() {
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Bean Achievement" path="/bean/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Bean Achievement - Finish the Game in Under 1 Hour
        </Heading>
        <p className="text-fg">
          <strong>Bean</strong> asks you to finish How to Fish within 1 hour. Only
          ~2.7% of players have it - it&rsquo;s the rarest achievement in the game
          alongside Fishipedia. The good news: with the post-launch difficulty setting
          and a Dynamite-heavy route, it&rsquo;s very doable, especially in co-op.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Setup before the timer starts</Heading>
        <ul className="list-disc space-y-1 pl-5 text-fg">
          <li>
            <strong>Start a fresh save</strong> - the hour is measured on a new run, not
            your existing file. Skip the tutorial.
          </li>
          <li>
            <strong>Set difficulty to Easy.</strong> Since patch 1.0.9 the main menu has
            a difficulty option; Easy gives all creatures 25% less health and makes them
            deal 50% less damage. There&rsquo;s no achievement penalty for it.
          </li>
          <li>
            <strong>Bring friends.</strong> Co-op splits the money grind and melts
            bosses. Public &ldquo;Bean lobby&rdquo; runs exist - check the{" "}
            <a href="/multiplayer/">co-op guide</a> for setup.
          </li>
          <li>
            <strong>Island 1 opener:</strong> farm Clams (~$60), buy the Crab Rod, Knife
            and Beer, kill the Spider Crab, then buy the Radar - no Radar, no island 2.
          </li>
          <li>
            <strong>Stock Dynamite ($25) whenever it&rsquo;s sold.</strong> From island 2
            on, Dynamite instant-kills catches and chain-detonates bosses - it&rsquo;s the
            boss-killer on a clock. The Albatross dynamite-ring doubles as the
            &ldquo;Easy&rdquo; achievement (sub-10s boss kill).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">
          The critical path - nothing else
        </Heading>
        <p className="text-fg">
          An hour sounds tight, but the required chain is short if you ignore
          everything optional. Per island, do exactly this:
        </p>
        <div className="space-y-3">
          {ISLANDS.map((isl) => (
            <SonarPanel key={isl.name} className="space-y-1">
              <p className="display text-fg">Island {isl.name}</p>
              <p className="text-sm text-dim">{isl.note}</p>
            </SonarPanel>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">What to skip (this is where runs die)</Heading>
        <ul className="list-disc space-y-1 pl-5 text-fg">
          <li>
            <strong>The Blue Shark on island 3</strong> - it&rsquo;s optional and only
            unlocks the grill. Skip it.
          </li>
          <li>
            <strong>The casino.</strong> Roulette and slots are achievements for another
            save, not this one.
          </li>
          <li>
            <strong>Rare/drip hunting and the fish index.</strong> Collector and
            Fishipedia are separate, slower runs.
          </li>
          <li>
            <strong>Full weapon upgrades.</strong> One decent gun per player plus
            Dynamite is enough; maxing attachments burns your boss-kill budget.
          </li>
        </ul>
      </section>

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">One honest warning</p>
        <p>
          The 1-hour timing shifted after early patches, and the game is still being
          updated (current: v{GAME_VERSION}). Old speedrun routes from launch week may
          not line up - plan against the current build, and if a step below changed,{" "}
          <a href="/contact/">tell us</a> and we&rsquo;ll fix the page. All 28
          achievements with unlock rates are on the{" "}
          <a href="/achievements/">achievements page</a>.
        </p>
      </SonarPanel>
    </article>
  );
}
