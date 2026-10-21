import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";

/** Q&A drives both the visible list and the FAQPage schema - one source. */
const faq = [
  {
    q: "Is How to Fish on PS5 (or PS4)?",
    a: "Not yet. There is no PlayStation version today. On October 12, 2026 the developers said they are porting the game to consoles in the coming months, but they did not name PS5 or give a date.",
  },
  {
    q: "Is How to Fish coming to consoles?",
    a: "Yes, a console port is announced. The developers' October 12, 2026 Steam post says they will be working on a bigger content update, porting to consoles and bug fixes in the coming months. No platforms, price or release date were given.",
  },
  {
    q: "Is How to Fish on Xbox?",
    a: "Not yet. No Xbox version exists. A console port is announced, but Xbox has not been named. The only version today is the Windows build on Steam ($7.99).",
  },
  {
    q: "Is How to Fish on Nintendo Switch?",
    a: "Not yet. There is no Switch version. A console port is announced, but Switch has not been named. The Windows build on Steam is the only release today.",
  },
  {
    q: "Can you play How to Fish on Mac?",
    a: "There is no native Mac version - the Steam build is Windows-only. Mac players can play through GeForce NOW cloud streaming (no install needed), or unofficially via Windows workarounds like Boot Camp or a virtual machine.",
  },
  {
    q: "Does How to Fish work on Steam Deck?",
    a: "Yes. Since patch 1.0.11 (September 2026) the game is fully Steam Deck Verified, so it runs out of the box on Valve's handheld.",
  },
  {
    q: "Is How to Fish on GeForce NOW?",
    a: "Yes. It is playable through GeForce NOW cloud streaming - so a Mac, Chromebook, or weak laptop can play it via NVIDIA's cloud without a native version.",
  },
];

export const metadata: Metadata = buildMeta({
  title: "Is How to Fish on PS5, Xbox or Switch? Console Port Status",
  description:
    "Not yet: How to Fish is PC-only on Steam ($7.99). A console port was announced Oct 12, 2026 with no date or platforms named. Steam Deck and Mac options too.",
  path: "/console/",
});

export default function ConsolePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Breadcrumbs label="Platforms" path="/console/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Is How to Fish on PS5, Xbox or Switch? Not Yet
        </Heading>
        <p className="text-fg">
          <strong>
            Not yet. How to Fish is only on PC (Steam) right now. There&rsquo;s no
            PS5, Xbox or Switch version.
          </strong>{" "}
          A console port is on the way, though. On October 12, 2026 the developers
          said they&rsquo;re porting the game to consoles &ldquo;in the coming
          months&rdquo;.
        </p>
        <p className="text-fg">
          They didn&rsquo;t say which consoles or give a date. Until then you can play
          on a Windows PC ($7.99), a Steam Deck, or through GeForce NOW on a Mac.
        </p>
        <VerifiedStamp date="October 21, 2026" />
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-sonar">Where it runs</p>
          <ul className="space-y-1 text-fg">
            <li><strong>Windows PC (Steam):</strong> yes - the only native version, $7.99.</li>
            <li><strong>Steam Deck:</strong> yes - fully Verified since patch 1.0.11 (September 2026).</li>
            <li><strong>GeForce NOW:</strong> yes - streams the game; this is how Mac, Chromebook, and weak laptops can play.</li>
          </ul>
        </SonarPanel>
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-coral">Where it does NOT run</p>
          <ul className="space-y-1 text-fg">
            <li><strong>PS5 / Xbox / Switch:</strong> not yet. A console port is announced, but no platform or date is named.</li>
            <li><strong>Mac (native):</strong> no macOS build - GeForce NOW is the practical route.</li>
            <li><strong>Linux / mobile:</strong> no iOS or Android version either.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">The console port: what&rsquo;s confirmed</Heading>
        <SonarPanel className="space-y-3">
          <p className="text-fg">
            The devs posted this on Steam on October 12, 2026, when the game passed 10
            million players: &ldquo;We&rsquo;ll be working on a bigger content update,
            porting to consoles and bugfixes in the coming months.&rdquo;
          </p>
          <p className="text-fg">
            That&rsquo;s all that&rsquo;s on the record. The table shows what&rsquo;s
            known and what isn&rsquo;t.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-dim">
                  <th className="py-1 pr-4">Question</th>
                  <th className="py-1">Answer</th>
                </tr>
              </thead>
              <tbody className="text-fg">
                <tr><td className="py-1 pr-4">Is a console version coming?</td><td className="py-1">Yes, announced Oct 12, 2026</td></tr>
                <tr><td className="py-1 pr-4">Which consoles (PS5, Xbox, Switch)?</td><td className="py-1">Not announced</td></tr>
                <tr><td className="py-1 pr-4">Release date</td><td className="py-1">Not announced (&ldquo;coming months&rdquo;)</td></tr>
                <tr><td className="py-1 pr-4">Console price</td><td className="py-1">Not announced</td></tr>
                <tr><td className="py-1 pr-4">Crossplay with PC</td><td className="py-1">Not announced</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-dim">
            Short version: it&rsquo;s coming, but treat any PS5 date you see elsewhere
            as a guess. We&rsquo;ll update this page when the devs name platforms. For
            now the game is PC-only, so <Link href="/multiplayer/">crossplay</Link>{" "}
            isn&rsquo;t a thing yet.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">FAQ</Heading>
        <SonarPanel>
          <dl className="space-y-4">
            {faq.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-fg">{f.q}</dt>
                <dd className="mt-1 text-dim">{f.a}</dd>
              </div>
            ))}
          </dl>
        </SonarPanel>
      </section>

      <p className="text-sm text-dim">
        Related: <Link href="/multiplayer/">co-op &amp; crossplay status</Link>, the{" "}
        <Link href="/controls/">controls guide</Link>, and the{" "}
        <Link href="/beginner-guide/">beginner guide</Link> if you are just starting on PC.
      </p>
    </article>
  );
}
