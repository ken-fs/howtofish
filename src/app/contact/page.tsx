import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Heading, SonarPanel } from "@/components/ui";

export const metadata: Metadata = buildMeta({
  title: "Contact",
  description: `Get in touch with ${SITE.name} - corrections, missing fish, or co-op questions for How to Fish.`,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <article className="space-y-6">
      <Heading as="h1" color="lure">Contact</Heading>
      <SonarPanel className="space-y-4 text-fg">
        <p>
          Spotted a wrong fish location, a missing achievement step, or a co-op fix
          that worked for you? We want it. Corrections keep this site ahead of the
          slow wikis.
        </p>
        <p>
          Email us at{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. We read
          everything and update pages fast - usually the same day.
        </p>
      </SonarPanel>
    </article>
  );
}
