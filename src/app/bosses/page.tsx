import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BOSSES, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - All 12 Bosses & How to Beat Them",
  description:
    "Every boss in How to Fish (Steam): the lure that summons each one, the weapon to bring, and the strategy - from the Spider Crab to the Pufferfish, Albatross and the final Mutated Bowhead Whale.",
  path: "/bosses/",
});

export default function BossesPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "How to Fish - all bosses",
            numberOfItems: BOSSES.length,
            itemListElement: BOSSES.map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: b.name,
            })),
          }),
        }}
      />
      <Breadcrumbs label="Bosses" path="/bosses/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          All 12 Bosses - How to Beat Each One
        </Heading>
        <p className="text-fg">
          Every island ends in a boss (a couple are optional), and the final one has
          two forms. Each is summoned with a specific boss lure on your rod, then
          fought with weapons. Here&rsquo;s the lure, the weapon to bring, and how each
          fight actually goes. There&rsquo;s no published boss HP or weak-point data, so
          these are behaviour-based strategies - expect to adapt on the day.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <div className="space-y-4">
        {BOSSES.map((b) => (
          <SonarPanel key={b.name} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="display text-xl glow-sonar">{b.name}</h2>
              <span className="text-sm text-dim">Island {b.island}</span>
            </div>
            <div className="grid gap-1 text-sm sm:grid-cols-2">
              <p className="text-dim">
                Lure: <span className="text-fg">{b.lure}</span>
              </p>
              <p className="text-dim">
                Weapon: <span className="glow-lure">{b.weapon}</span>
              </p>
            </div>
            <p className="text-fg">{b.strategy}</p>
          </SonarPanel>
        ))}
      </div>

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">Two boss achievements worth planning for</p>
        <p>
          <span className="glow-sonar">Easy</span> - kill a boss within 10 seconds; the
          Albatross Dynamite-ring trick above is the reliable way.{" "}
          <span className="glow-coral">Handyman</span> - beat the final boss bare-handed
          (guns to whittle it down, fists for the last hit). See the{" "}
          <a href="/achievements/">achievements guide</a> and{" "}
          <a href="/weapons/">weapons guide</a>.
        </p>
      </SonarPanel>

      <p className="text-sm text-dim">
        Boss lures come from island NPCs; swap the lure on your rod before you cast.
        Some lure prices differ between guides, so confirm in-game before spending big.
      </p>
    </article>
  );
}
