import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Heading, SonarPanel } from "@/components/ui";

export const metadata: Metadata = buildMeta({
  title: "About How to Fish Hub",
  description:
    "Who runs How to Fish Hub and how we verify our fish list, achievements and co-op guides for the Steam game How to Fish.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <article className="space-y-6">
      <Heading as="h1" color="lure">About This Site</Heading>
      <SonarPanel className="space-y-4 text-fg">
        <p>
          {SITE.name} is an independent fan resource for <strong>{SITE.game}</strong>,
          the physics-based fishing game by {SITE.developer} on Steam. We are players,
          not the developer.
        </p>
        <p>
          We started this site the week the game blew up. The goal is simple: the
          fastest, cleanest answers to the things people actually get stuck on - how
          to catch a specific fish, how to unlock every achievement, and how to get
          co-op working with friends.
        </p>
        <p>
          Everything here is tested in-game or cross-checked against the Steam
          community. When we cannot confirm something ourselves, we say so and mark it
          &ldquo;check in-game&rdquo; instead of guessing. Found a mistake?{" "}
          <a href="/contact/">Tell us</a> and we will fix it.
        </p>
      </SonarPanel>
    </article>
  );
}
