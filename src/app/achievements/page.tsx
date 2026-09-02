import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
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

      <p className="text-sm text-dim">
        Unlock percentages are global Steam stats, checked {LAST_CHECKED}. A patch can
        shift a few of these - the 1-hour <span className="glow-sonar">Bean</span> run
        in particular changed after 1.0.5, so time it against the current version.
      </p>
    </article>
  );
}
