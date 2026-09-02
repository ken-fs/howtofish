import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Heading, SonarPanel } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = buildMeta({
  title: "Terms of Use",
  description: `Terms of use for ${SITE.name}, an independent fan resource for How to Fish.`,
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <article className="space-y-6">
      <Breadcrumbs label="Terms" path="/terms/" />
      <Heading as="h1" color="lure">Terms of Use</Heading>
      <SonarPanel className="space-y-4 text-fg">
        <p>
          By using {SITE.domain} you agree to these terms. This is a free, fan-made
          resource provided &ldquo;as is.&rdquo;
        </p>
        <h2 className="display text-xl glow-sonar">Not Official</h2>
        <p>
          {SITE.name} is not affiliated with, endorsed by, or sponsored by{" "}
          {SITE.developer}, Valve, or Steam. {SITE.game} and all related names and
          assets belong to their respective owners. We reference them under fair use
          for informational purposes.
        </p>
        <h2 className="display text-xl glow-sonar">Accuracy</h2>
        <p>
          We work hard to keep fish data, achievements and guides correct, but games
          get patched. We make no guarantee that every detail is current. Anything we
          cannot verify is marked &ldquo;check in-game.&rdquo;
        </p>
        <h2 className="display text-xl glow-sonar">Liability</h2>
        <p>
          We are not liable for any loss arising from use of this site. Use the
          information at your own discretion.
        </p>
      </SonarPanel>
    </article>
  );
}
