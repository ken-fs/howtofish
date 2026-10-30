import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

/** Q&A drives both the FAQPage schema and snippet targeting - one source. */
const faq = [
  {
    q: "Is How to Fish crossplay?",
    a: "Not yet. The game is only on PC (Steam), so there is no other platform to cross with - every player is already on Steam and can join co-op directly.",
  },
  {
    q: "Will How to Fish have crossplay when it comes to console?",
    a: "Unconfirmed. On October 12, 2026 the developers said they are porting the game to consoles in the coming months. They did not say which consoles, when, or whether console and PC players will be able to play together.",
  },
  {
    q: "Is How to Fish crossplay with PS5?",
    a: "No. There is no PS5 version yet, so there is nothing to cross with. The developers announced a console port on October 12, 2026 but named no platforms and said nothing about crossplay.",
  },
  {
    q: "Does How to Fish have split-screen or local co-op?",
    a: "No. Co-op is online-only: up to 4 players in a lobby hosted by whoever starts the game. There is no split-screen and no LAN mode.",
  },
  {
    q: "How many players can play How to Fish together?",
    a: "1-4 players in online co-op. The full game is also playable solo.",
  },
  {
    q: "How do you turn on crossplay in How to Fish?",
    a: "There is nothing to switch on. The game exists only on Steam, so every player you can invite is already on your platform - add each other on Steam and invite through the overlay.",
  },
  {
    q: "Does crossplay work between Steam Deck and PC?",
    a: "Yes. Steam Deck runs the same Steam build as a desktop PC, so Deck and PC players join each other's lobbies normally - no extra setup, no separate version.",
  },
  {
    q: "Does How to Fish have voice chat?",
    a: "Yes - in-game voice and text chat are built in, so you can talk to your lobby without a third-party app.",
  },
];

export const metadata: Metadata = buildMeta({
  title: "Is How to Fish Crossplay? Not Yet - Co-op & Console Status",
  description:
    "No crossplay yet: How to Fish is PC-only on Steam. A console port was announced Oct 12, 2026, but crossplay isn't confirmed. Co-op invite steps and lobby fixes.",
  path: "/multiplayer/",
});

export default function MultiplayerPage() {
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
      <Breadcrumbs label="Co-op" path="/multiplayer/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Is How to Fish Crossplay? Not Yet (PC Only)
        </Heading>
        <p className="text-fg">
          <strong>
            No, How to Fish isn&rsquo;t crossplay yet. It&rsquo;s only on PC
            (Steam), so every player is already on the same platform.
          </strong>{" "}
          There&rsquo;s nothing to switch on. Anyone with the game on Steam can join
          your co-op lobby.
        </p>
        <p className="text-fg">
          That may change. On October 12, 2026 the developers said they&rsquo;re{" "}
          <Link href="/console/">porting the game to consoles</Link> &ldquo;in the
          coming months&rdquo;. They haven&rsquo;t said which consoles, or whether
          console and PC players will share lobbies. So crossplay is unconfirmed until
          they do.
        </p>
        <VerifiedStamp date="October 21, 2026" />
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-sonar">The basics</p>
          <ul className="space-y-1 text-fg">
            <li><strong>Players:</strong> 1-4, online co-op (Steam lists up to 4).</li>
            <li><strong>Solo:</strong> yes - the full game is playable alone.</li>
            <li><strong>Chat:</strong> in-game voice and text.</li>
            <li><strong>Family Sharing:</strong> supported.</li>
          </ul>
        </SonarPanel>
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-coral">What it is NOT</p>
          <ul className="space-y-1 text-fg">
            <li><strong>No split-screen / local co-op</strong> - online only.</li>
            <li><strong>No crossplay yet</strong> - it&rsquo;s PC-only, everyone&rsquo;s on Steam.</li>
            <li><strong>No console version yet</strong> - a port is announced, with no date.</li>
          </ul>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Why people ask about crossplay here</Heading>
        <SonarPanel className="space-y-3 text-fg">
          <p>
            Three things cause the confusion. First, the name: searching
            &ldquo;How to Fish&rdquo; also brings up Roblox and mobile fishing games,
            which run on many devices. This one is a Steam-only PC game.
          </p>
          <p>
            Second, the developers have announced a console port, so people want to
            know if they&rsquo;ll be able to play with PC friends. Third, the game is
            built around 1-4 player co-op. &ldquo;Can I play with my friends?&rdquo; is
            the first thing everyone asks. Right now the answer is yes, as long as
            everyone owns it on Steam.
          </p>
          <p className="text-sm text-dim">
            Once the console port ships, crossplay becomes a real question. The
            developers haven&rsquo;t answered it yet, so we won&rsquo;t guess. We&rsquo;ll
            update this page as soon as they say whether PC and console players can
            play together.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">How to invite a friend</Heading>
        <SonarPanel>
          <ol className="list-decimal space-y-2 pl-5 text-fg">
            <li>Make sure you and your friends all own the game (or use Steam Family Sharing).</li>
            <li>Launch How to Fish and start or load a game.</li>
            <li>Open the in-game menu / lobby and use the invite option, or invite them through the Steam friends overlay (Shift+Tab → right-click friend → Invite to Game).</li>
            <li>Have your friend accept the invite - they&rsquo;ll drop into your world.</li>
          </ol>
        </SonarPanel>
        <p className="text-sm text-dim">
          Progress is hosted by the person who starts the game, so play on the same
          host if you want to keep a shared save going.
        </p>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Co-op not working? Try these</Heading>
        <SonarPanel className="space-y-3 text-fg">
          <p><strong>Can&rsquo;t see or accept an invite:</strong> both players restart Steam, confirm you&rsquo;re on the same game version (matchmaking breaks across a mid-session patch), and re-send from the Steam overlay.</p>
          <p><strong>Invite fails / infinite loading:</strong> a broadband connection is required - this is online co-op, not LAN. Have the host check their firewall isn&rsquo;t blocking the game, and try having the other player host instead.</p>
          <p><strong>Friend not showing up:</strong> confirm your Steam friends privacy and game details are set to visible, then re-invite through Shift+Tab.</p>
          <p className="text-sm text-dim">Whether co-op uses a host (peer-to-peer) or dedicated servers isn&rsquo;t officially documented - the broadband requirement points to peer-hosted games, so a strong host connection matters. We&rsquo;ll confirm and update.</p>
        </SonarPanel>
      </section>

      <p className="text-sm text-dim">
        Steam&rsquo;s own discussion board for the game is dominated by team-finding
        and lobby threads - if you just want randoms, that board is the fastest place
        to find a group.
      </p>
          <p className="text-sm text-dim">Related: <a href="/console/">is How to Fish on PS5, Xbox or Switch</a>, the <a href="/updates/">patch notes</a> and the <a href="/faq/">game FAQ</a>.</p>
</article>
  );
}
