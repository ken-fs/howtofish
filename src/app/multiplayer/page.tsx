import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish Co-op - Play With Friends (Full Multiplayer Guide)",
  description:
    "How co-op works in How to Fish: invite and join friends on Steam, player count, whether there's split-screen or crossplay, and fixes for the lobby not working.",
  path: "/multiplayer/",
});

export default function MultiplayerPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Co-op &amp; Multiplayer - Play With Friends
        </Heading>
        <p className="text-fg">
          Co-op is the whole point of How to Fish - and &ldquo;how do I get my friends
          in&rdquo; is the single most-asked question about the game. Here&rsquo;s the
          short version, plus the fixes when the lobby fights back.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
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
            <li><strong>No crossplay needed</strong> - it&rsquo;s PC-only, everyone&rsquo;s on Steam.</li>
            <li><strong>No console version</strong> to connect from.</li>
          </ul>
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
    </article>
  );
}
