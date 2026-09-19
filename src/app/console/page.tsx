import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LAST_CHECKED } from "@/data/game";

/** Q&A drives both the visible list and the FAQPage schema - one source. */
const faq = [
  {
    q: "Is How to Fish on console (PS5, Xbox, or Switch)?",
    a: "No. How to Fish is PC-only on Steam (Windows 10 or newer, 64-bit). There is no PlayStation, Xbox, or Nintendo Switch version, and the developer Dazed Games has not announced one.",
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
  title: "Is How to Fish on Console? Platform Status (PS5, Xbox, Switch, Mac)",
  description:
    "No console version - How to Fish is Windows-only on Steam ($7.99), but it is Steam Deck Verified and on GeForce NOW, which is how Mac players can actually play. Full platform status.",
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
          Is How to Fish on Console? Every Platform, Answered
        </Heading>
        <p className="text-fg">
          <strong>
            No console version: How to Fish is PC-only on Steam - no PS5, Xbox, or
            Switch build exists or has been announced.
          </strong>{" "}
          It is $7.99, Windows 10+ (64-bit). Mac and handheld players do have real
          options, though - below is every platform, answered.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
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
            <li><strong>PS5 / Xbox / Switch:</strong> no version, none announced by Dazed Games.</li>
            <li><strong>Mac (native):</strong> no macOS build - GeForce NOW is the practical route.</li>
            <li><strong>Linux / mobile:</strong> no iOS or Android version either.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">If a console version gets announced</Heading>
        <SonarPanel>
          <p className="text-fg">
            Dazed Games ships patches fast (the game left Early Access-style rapid
            updates only weeks ago), but nothing about consoles is on the record. If a
            port is announced we will update this page the day it happens - and since
            the game is single-platform today,{" "}
            <Link href="/multiplayer/">crossplay questions</Link> only become relevant
            once a second platform exists.
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
