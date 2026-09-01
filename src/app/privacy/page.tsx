import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { Heading, SonarPanel } from "@/components/ui";

export const metadata: Metadata = buildMeta({
  title: "Privacy Policy",
  description: `How ${SITE.name} handles data, cookies and third-party advertising.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <article className="space-y-6">
      <Heading as="h1" color="lure">Privacy Policy</Heading>
      <SonarPanel className="space-y-4 text-fg">
        <p>
          {SITE.name} ({SITE.domain}) is a static informational site. We do not ask
          for accounts, and we do not collect names, emails or passwords through this
          site. If you email us, we only use your message to reply.
        </p>
        <h2 className="display text-xl glow-sonar">Cookies &amp; Analytics</h2>
        <p>
          We may use privacy-friendly analytics to count page views and see which
          guides are useful. These do not identify you personally.
        </p>
        <h2 className="display text-xl glow-sonar">Advertising</h2>
        <p>
          This site is supported by third-party advertising (Adsterra). Ad partners
          may use cookies or similar technologies to serve and measure ads. You can
          control cookies in your browser settings. See each ad partner&rsquo;s own
          policy for details on the data they process.
        </p>
        <h2 className="display text-xl glow-sonar">Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
        </p>
      </SonarPanel>
    </article>
  );
}
