import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ISLANDS, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - All 5 Islands & How to Unlock Them",
  description:
    "Every island in How to Fish (Steam) in order: Lighthouse, Forest, Palm Trees, Casino Barn and Volcano - the boss that gates each one, the proof-item that unlocks the next, and what each island's shop adds.",
  path: "/islands/",
});

export default function IslandsPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "How to Fish - all islands",
            numberOfItems: ISLANDS.length,
            itemListElement: ISLANDS.map((isl, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: isl.name,
            })),
          }),
        }}
      />
      <Breadcrumbs label="Islands" path="/islands/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          All 5 Islands - Unlock Order &amp; What Each One Adds
        </Heading>
        <p className="text-fg">
          How to Fish is a chain of five islands. Each one gates the next behind the
          same pattern: do a small NPC task for a boss lure, kill the boss, hand in the
          proof-item, and the next island&rsquo;s location is yours. There is no
          in-game map screen - you find new islands by boat with the Radar.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <div className="space-y-4">
        {ISLANDS.map((isl) => (
          <SonarPanel key={isl.name} className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="display text-xl glow-sonar">Island {isl.name}</h2>
              <span className="text-sm text-dim">
                Boss: <span className="glow-lure">{isl.boss}</span>
              </span>
            </div>
            <p className="text-fg">{isl.note}</p>
          </SonarPanel>
        ))}
      </div>

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">Stuck on &ldquo;where is the next island?&rdquo;</p>
        <p>
          Two common blockers: you forgot to buy the <strong>Radar</strong> on island 1
          (without it the next island doesn&rsquo;t show), or you killed the boss but
          didn&rsquo;t <strong>hand the proof-item to the NPC</strong> - the kill alone
          doesn&rsquo;t unlock anything. Full boss strategies are on the{" "}
          <a href="/bosses/">bosses page</a>, and what to catch on each island is in the{" "}
          <a href="/fish-list/">fish list</a>.
        </p>
      </SonarPanel>

      <p className="text-sm text-dim">
        Related: <a href="/beginner-guide/">beginner guide</a>,{" "}
        <a href="/bosses/">all 12 bosses</a>, <a href="/money/">how to make money fast</a>.
      </p>
    </article>
  );
}
