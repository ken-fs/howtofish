import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BOSSES, MINI_BOSSES, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - All Bosses & How to Beat Them",
  description:
    "Every island boss in How to Fish: the Spider Crab, Giant Piranha, the Albatross and the final Bowhead Whale - the bait that lures them and how to take each one down.",
  path: "/bosses/",
});

export default function BossesPage() {
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Bosses" path="/bosses/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Bosses - How to Beat Each One
        </Heading>
        <p className="text-fg">
          Each island ends in a boss. Most need a specific bait to lure out, then a
          lot of firepower. Here are the confirmed island bosses, the bait that pulls
          them, and the trick to each fight.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <div className="space-y-4">
        {BOSSES.map((b) => (
          <SonarPanel key={b.name} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="display text-xl glow-sonar">{b.name}</h2>
              <span className="text-sm text-dim">{b.island}</span>
            </div>
            <p className="text-sm text-dim">
              Bait:{" "}
              <span className={b.bait === "check in-game" ? "text-fg italic" : "glow-lure"}>
                {b.bait}
              </span>
            </p>
            <p className="text-fg">{b.tip}</p>
          </SonarPanel>
        ))}
      </div>

      <section className="space-y-3">
        <Heading color="shallow" className="text-xl sm:text-2xl">Mini-bosses &amp; special catches</Heading>
        <SonarPanel className="space-y-2 text-fg">
          <p>
            Beyond the island bosses, you&rsquo;ll run into tougher special creatures
            worth big money: {MINI_BOSSES.join(", ")}. Guides put the total boss +
            mini-boss count around a dozen.
          </p>
          <p className="text-sm text-dim">
            We&rsquo;re confirming the exact bait and spawn island for each mini-boss
            in-game before publishing them - we&rsquo;d rather leave a gap than post a
            guess. Check back, we update fast.
          </p>
        </SonarPanel>
      </section>

      <p className="text-sm text-dim">
        Two boss-related achievements to chase: <span className="glow-sonar">Easy</span>{" "}
        (kill a boss within 10 seconds) and <span className="glow-coral">Handyman</span>{" "}
        (beat the final boss bare-handed). See the full{" "}
        <a href="/achievements/">achievements list</a>.
      </p>
          <p className="text-sm text-dim">See also the <a href="/beginner-guide/">beginner guide</a> for the money and upgrades you need before each fight.</p>
</article>
  );
}
