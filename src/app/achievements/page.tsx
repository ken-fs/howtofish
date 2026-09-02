import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ACHIEVEMENTS, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - All 28 Achievements Guide (100%)",
  description:
    "Every one of the 28 Steam achievements in How to Fish, with exact unlock steps and how rare each one is. The trickiest: Handyman, Fishipedia and the 1-hour Bean run.",
  path: "/achievements/",
});

export default function AchievementsPage() {
  const hard = ACHIEVEMENTS.filter((a) => a.hard);
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "How to Fish - all 28 achievements",
            numberOfItems: ACHIEVEMENTS.length,
            itemListElement: ACHIEVEMENTS.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: a.name,
              description: a.how,
            })),
          }),
        }}
      />
      <Breadcrumbs label="Achievements" path="/achievements/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          All 28 Achievements
        </Heading>
        <p className="text-fg">
          The full list with exact steps, sorted by how many players have unlocked
          each one - so the ones near the bottom are the grind. Most unlock naturally
          as you finish the game; a handful need a deliberate run.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <SonarPanel className="space-y-2">
        <p className="display text-lg glow-sonar">The 5 that actually take effort</p>
        <ul className="text-sm text-fg">
          {hard.map((a) => (
            <li key={a.name} className="py-0.5">
              <span className="glow-coral">{a.name}</span> - {a.how}{" "}
              <span className="text-dim">({a.pct}% have it)</span>
            </li>
          ))}
        </ul>
      </SonarPanel>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Every achievement</Heading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-kelp text-left">
                <th className="py-2 pr-4 font-semibold text-dim">Achievement</th>
                <th className="py-2 pr-4 font-semibold text-dim">How to unlock</th>
                <th className="py-2 font-semibold text-dim">Unlocked by</th>
              </tr>
            </thead>
            <tbody>
              {ACHIEVEMENTS.map((a) => (
                <tr key={a.name} className="border-b border-kelp/40 align-top">
                  <td className="py-2 pr-4">
                    <span className={a.hard ? "glow-coral" : "text-fg"}>{a.name}</span>
                  </td>
                  <td className="py-2 pr-4 text-fg">{a.how}</td>
                  <td className="py-2 text-dim whitespace-nowrap">{a.pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">How to get the tough ones</Heading>
        <div className="space-y-3">
          <SonarPanel className="space-y-1">
            <p className="display text-lg glow-coral">Handyman (3.6%)</p>
            <p className="text-fg">You don&rsquo;t fight the final boss unarmed the whole time. Whittle the Mutated Bowhead Whale down to almost nothing with guns (melee is too slow), then land only the <strong>final blow with your fists</strong>. Keep dodging its jumps and the magma pools.</p>
          </SonarPanel>
          <SonarPanel className="space-y-1">
            <p className="display text-lg glow-coral">Fishipedia (3.0%)</p>
            <p className="text-fg">Kill every <strong>drip</strong> variant of every creature. Drips are caught the same way as normal ones (same island, same lure) but only with a <strong>rod, not dynamite</strong>; a rainbow &ldquo;Creature Caught&rdquo; popup means you got one. Bosses count as both a normal and a drip kill. Drips are roughly a 1-in-10 catch, so this is a long grind - see the <a href="/fish-list/">fish list</a>.</p>
          </SonarPanel>
          <SonarPanel className="space-y-1">
            <p className="display text-lg glow-coral">Bean (2.7%) - finish in under 1 hour</p>
            <p className="text-fg">Start a fresh save on <strong>Easy</strong> (-25% creature HP, -50% damage taken). Skip the tutorial and beeline each boss. Island 1: farm Clams (~$60), buy the Crab Rod, Knife and Beer, kill the Spider Crab, buy the Radar. From island 2 on, spam <strong>Dynamite ($25)</strong> to instant-kill fish and chain-detonate bosses, and upgrade at every island. Joining a co-op &ldquo;Bean&rdquo; lobby helps.</p>
          </SonarPanel>
          <SonarPanel className="space-y-1">
            <p className="display text-lg glow-sonar">Easy (33.7%) - boss in 10 seconds</p>
            <p className="text-fg">Best target is the <strong>Albatross</strong> on island 4. Beat the Tuna, lay 20+ Dynamite where the Tuna was, and light one stick as the Albatross dives in - the chain reaction one-shots it. See the <a href="/bosses/">boss guide</a>.</p>
          </SonarPanel>
          <SonarPanel className="space-y-1">
            <p className="display text-lg glow-sonar">Collector (16.8%)</p>
            <p className="text-fg">Kill all 49 creatures across the five islands - each needs its specific lure, and endangered fish and bosses need special lures. No shortcut; the <a href="/fish-list/">fish list tracker</a> ticks off what you&rsquo;re missing.</p>
          </SonarPanel>
        </div>
      </section>

      <p className="text-sm text-dim">
        Unlock percentages are global Steam stats, checked {LAST_CHECKED}. Hard-achievement
        routes come from community guides (Game8); a patch can shift things (the 1-hour
        Bean run changed after 1.0.5), so verify against the current version.
      </p>
          <p className="text-sm text-dim">Related: <a href="/bosses/">boss strategies</a> and the <a href="/fish-list/">full fish list</a> for the Collector achievement.</p>
</article>
  );
}
