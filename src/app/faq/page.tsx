import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";
import { LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish FAQ — Console, Crossplay, Price & Co-op",
  description:
    "Quick answers about the Steam game How to Fish: is it on PS5/Xbox/Switch, is it crossplay, how much it costs, co-op player count, and whether it's the Roblox one.",
  path: "/faq/",
});

/** Q&A drives both the visible list and the FAQPage schema — one source. */
const FAQS: { q: string; a: string }[] = [
  {
    q: "Is How to Fish on console (PS5, Xbox, or Switch)?",
    a: "No. How to Fish is PC-only on Steam (Windows 10 or newer, 64-bit). There is no PlayStation, Xbox, or Nintendo Switch version, and the developer Dazed Games has not announced one.",
  },
  {
    q: "Is How to Fish on Mac or mobile?",
    a: "No. It runs on Windows only — there is no macOS, Linux, iOS, or Android version. Mac players can only run it through Windows workarounds like Boot Camp or a virtual machine, which are not officially supported.",
  },
  {
    q: "Is How to Fish crossplay?",
    a: "Crossplay does not apply — the game is only on PC (Steam), so everyone is already on the same platform. Steam players can play co-op together directly.",
  },
  {
    q: "How much does How to Fish cost?",
    a: "It is $7.99 on Steam. There is no free version and no demo currently listed.",
  },
  {
    q: "Is How to Fish multiplayer / co-op?",
    a: "Yes. It supports 1–4 player online co-op with in-game voice/text chat, plus a single-player mode. There is no local split-screen — co-op is online only.",
  },
  {
    q: "Is this the Roblox game or the fishing game 'Fisch'?",
    a: "No. This is a standalone $7.99 Steam game by Dazed Games. It is not the Roblox experience 'Fisch', not a real-life fishing tutorial, and despite the name it plays more like a physics shooter — you catch, kill, and sell creatures for money.",
  },
  {
    q: "How long is How to Fish to beat?",
    a: "The developer hasn't published an official length, so we won't guess a number. For context: only about 41% of players have the 'finish the game' achievement, and a sub-1-hour speedrun (the 'Bean' achievement) is rare at ~2.6%. It's a short, punchy game rather than a long grind.",
  },
  {
    q: "Is How to Fish worth it?",
    a: "Reception is strong — Overwhelmingly Positive with 95% of 16,000+ reviews. It's a cheap, chaotic co-op comedy game that blew up through streamers. If you like short physics-based games to play with friends, $7.99 is an easy yes.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          How to Fish — FAQ
        </Heading>
        <p className="text-fg">
          The questions people ask before and right after buying {SITE.game}. Short
          answers, no padding.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <div className="space-y-4">
        {FAQS.map((f) => (
          <SonarPanel key={f.q} className="space-y-2">
            <h2 className="display text-lg glow-sonar">{f.q}</h2>
            <p className="text-fg">{f.a}</p>
          </SonarPanel>
        ))}
      </div>
    </article>
  );
}
