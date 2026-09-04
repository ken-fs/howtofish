import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CREATURES, KILLSCORE, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - How to Make Money Fast (Best Methods)",
  description:
    "The fastest ways to make money in How to Fish (Steam): early clam farming, the most valuable catches, killscore multipliers that raise sell prices, cooking, and whether gambling is worth it.",
  path: "/money/",
});

/** Top catches by sell value, computed from the same data as the fish list. */
const TOP_CATCHES = [...CREATURES]
  .filter((c) => c.value !== null)
  .sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
  .slice(0, 10);

const FAQS = [
  {
    q: "What is the fastest way to make money in How to Fish?",
    a: "Early on: farm the respawning Clams on island 1 and sell to the Vendor. Once you reach island 3-4, switch to fishing with the best lure you can afford and stack killscore multipliers (360 spin, headshot, no scope) before the killing blow - the multiplier applies directly to the sell price.",
  },
  {
    q: "Is gambling worth it in How to Fish?",
    a: "For fun, yes - for income, no. The island-4 roulette can land green (the 'All in' achievement) and the Reel of Fortune slot machine drops skins, but selling rare creatures with stacked multipliers is the steady money. Don't gamble with few resources.",
  },
  {
    q: "What sells for the most money in How to Fish?",
    a: "The Superdwarf Fish ($1,700) is the most valuable regular rod catch, and the Bowhead Whale boss sells for $8,000. Beyond that, rare drip variants are the big-ticket catches - the 'Rich! Millionaire' achievement asks for a single sale worth $100,000 or more.",
  },
];

export default function MoneyPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Breadcrumbs label="Money Guide" path="/money/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          How to Make Money Fast
        </Heading>
        <p className="text-fg">
          Everything in How to Fish runs on cash: lures, weapons, attachments, boat
          engines. The loop is catch &rarr; kill &rarr; sell &rarr; upgrade - but
          <em> how</em> you kill a creature changes what it sells for, and that&rsquo;s
          where most players leave money on the table.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Early game: farm Clams</Heading>
        <p className="text-fg">
          On island 1 (Lighthouse), <strong>Clams respawn</strong> and the Vendor buys
          them. It&rsquo;s small money per trip but it&rsquo;s constant, safe, and funds
          your first real purchases - the Radar (to find island 2) and your first gun.
          Don&rsquo;t skip the Spider Crab either: bosses are paydays, not just progress.
        </p>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">
          Fish with the best lure you can afford
        </Heading>
        <p className="text-fg">
          Sell prices jump hard per lure tier: Free Bait catches are single-digit
          dollars, Standard Lure (island 3) fish go up to ~$150, Professional (island
          4) hits $250-380 per catch, and Scientific (island 5) is where the $1,700
          Superdwarf Fish lives. Upgrading your lure <em>is</em> upgrading your income.
        </p>
        <SonarPanel>
          <p className="display text-fg">Top 10 catches by sell value</p>
          <table className="mt-2 w-full text-sm">
            <thead>
              <tr className="text-left text-dim">
                <th className="py-1 pr-2 font-normal">Catch</th>
                <th className="py-1 pr-2 font-normal">Lure tier</th>
                <th className="py-1 text-right font-normal">Sells for</th>
              </tr>
            </thead>
            <tbody>
              {TOP_CATCHES.map((c) => (
                <tr key={c.name} className="border-t border-sonar/20">
                  <td className="py-1 pr-2 text-fg">{c.name}</td>
                  <td className="py-1 pr-2 text-dim">{c.tier}</td>
                  <td className="py-1 text-right glow-lure">${c.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-dim">
            Full list with all tiers on the <a href="/fish-list/">fish list page</a>.
            Bosses top everything - the Bowhead Whale sells for $8,000.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">
          Killscore: style multiplies your money
        </Heading>
        <p className="text-fg">
          The killing blow can carry <strong>killscore multipliers</strong> that apply
          directly to the sell value - and they stack. A stylish kill on a mid-tier fish
          beats a boring kill on a rare one. Cooking a catch on the grill adds a
          separate multiplier on top.
        </p>
        <SonarPanel>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-dim">
                <th className="py-1 pr-2 font-normal">Move</th>
                <th className="py-1 text-right font-normal">Multiplier</th>
              </tr>
            </thead>
            <tbody>
              {KILLSCORE.map((k) => (
                <tr key={k.move} className="border-t border-sonar/20">
                  <td className="py-1 pr-2 text-fg">{k.move}</td>
                  <td className="py-1 text-right glow-lure">{k.mult}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-dim">
            Values via Game8, single-source - verify in-game. Stacking a 360 spin with a
            headshot and no scope is how you hit the 5x &ldquo;Impressive&rdquo;
            achievement.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Cooking &amp; gambling</Heading>
        <p className="text-fg">
          The grill unlocks after beating the optional Blue Shark on island 3 (the
          &ldquo;Grillmaster&rdquo; achievement) - cooked catches sell for more. The
          island-4 casino is the opposite advice: roulette and the Reel of Fortune are
          entertainment and achievements (&ldquo;All in&rdquo;, &ldquo;GOLD GOLD
          GOLD&rdquo;), not an income strategy. Sell rare catches; don&rsquo;t bet them.
        </p>
      </section>

      <section className="space-y-3">
        <Heading color="shallow" className="text-xl sm:text-2xl">Quick answers</Heading>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <SonarPanel key={f.q} className="space-y-1">
              <p className="display text-fg">{f.q}</p>
              <p className="text-sm text-dim">{f.a}</p>
            </SonarPanel>
          ))}
        </div>
      </section>

      <p className="text-sm text-dim">
        Related: <a href="/fish-list/">fish list &amp; sell values</a>,{" "}
        <a href="/beginner-guide/">beginner guide</a>,{" "}
        <a href="/achievements/">all 28 achievements</a>.
      </p>
    </article>
  );
}
