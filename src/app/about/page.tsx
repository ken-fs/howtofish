import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Heading, SonarPanel } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMeta({
  title: "About How to Fish Hub",
  description:
    "Who runs How to Fish Hub and how we verify our fish list, achievements and co-op guides for the Steam game How to Fish.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <article className="space-y-6">
      <Breadcrumbs label="About" path="/about/" />
      <Heading as="h1" color="lure">About This Site</Heading>
      <SonarPanel className="space-y-4 text-fg">
        <p>
          {SITE.name} is an independent fan resource for <strong>{SITE.game}</strong>,
          the physics-based fishing game by {SITE.developer} on Steam. It is run by{" "}
          {SITE.editor} ({SITE.editorRole.toLowerCase()}) - we are players, not the
          developer.
        </p>
        <p>
          We started this site the week the game blew up. The goal is simple: the
          fastest, cleanest answers to the things people actually get stuck on - how
          to catch a specific fish, how to unlock every achievement, and how to get
          co-op working with friends.
        </p>
      </SonarPanel>

      <SonarPanel className="space-y-4 text-fg">
        <h2 className="display text-lg glow-sonar">How we verify</h2>
        <p>
          Everything here is tested in-game or cross-checked against the Steam
          community and the game&apos;s own patch notes. Each page carries a dated
          &ldquo;last checked&rdquo; stamp, so you can judge freshness at a glance -
          and when a patch changes something (like the piranha and tuna rebalance in
          v1.0.12), we mark affected numbers as approximate until they are re-tested
          instead of leaving stale figures up.
        </p>
        <p>
          Sell values, boss strategies and achievement steps come from in-game testing
          cross-checked against at least two independent community sources. Global
          unlock percentages are Steam&apos;s own public stats. When we cannot confirm
          something, we say so and mark it &ldquo;check in-game&rdquo; instead of
          guessing.
        </p>
        <p>
          The game patches fast - it went through twelve patches in its first three
          weeks. We track the official Steam announcements and update the version log
          and affected guides as each patch lands.
        </p>
        <p>
          Found a mistake, or a route we have not covered? <a href="/contact/">Tell
          us</a> and we will fix it.
        </p>
      </SonarPanel>

      <SonarPanel className="space-y-4 text-fg">
        <h2 className="display text-lg glow-sonar">Disclosure</h2>
        <p>
          {SITE.name} is not affiliated with, endorsed by, or sponsored by{" "}
          {SITE.developer} or Valve Corporation. All game names, trademarks and assets
          belong to their respective owners. In-game screenshots are ©{" "}
          {SITE.developer} and used for commentary and guidance.
        </p>
      </SonarPanel>
    </article>
  );
}
