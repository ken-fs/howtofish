import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WEAPONS, LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - All Weapons, Prices & Tier List",
  description:
    "Every weapon in How to Fish (Steam): prices, roles and a tier list. From Brass Knuckles and the Pistol to the SMG, Sniper and the $20,000 Assault Rifle - plus which island unlocks each.",
  path: "/weapons/",
});

const TIER_COLOR: Record<string, string> = {
  S: "glow-lure",
  A: "glow-sonar",
  B: "text-fg",
  C: "text-dim",
};

export default function WeaponsPage() {
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "How to Fish - all weapons",
            numberOfItems: WEAPONS.length,
            itemListElement: WEAPONS.map((w, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: w.name,
            })),
          }),
        }}
      />
      <Breadcrumbs label="Weapons" path="/weapons/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Weapons - Prices &amp; Tier List
        </Heading>
        <p className="text-fg">
          You don&rsquo;t reel creatures in gently - you kill them, and better guns mean
          faster money and beaten bosses. There are eight weapons, bought at island item
          shops as you progress. Here&rsquo;s what each one is for, what it costs, and
          which to actually save up for.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">Every weapon</Heading>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-kelp text-left">
                <th className="py-2 pr-4 font-semibold text-dim">Weapon</th>
                <th className="py-2 pr-4 font-semibold text-dim">Type</th>
                <th className="py-2 pr-4 font-semibold text-dim">Price</th>
                <th className="py-2 pr-4 font-semibold text-dim">Tier</th>
                <th className="py-2 font-semibold text-dim">What it&rsquo;s for</th>
              </tr>
            </thead>
            <tbody>
              {WEAPONS.map((w) => (
                <tr key={w.name} className="border-b border-kelp/40 align-top">
                  <td className="py-2 pr-4 text-fg whitespace-nowrap">{w.name}</td>
                  <td className="py-2 pr-4 text-dim whitespace-nowrap">{w.type}</td>
                  <td className="py-2 pr-4 glow-lure whitespace-nowrap">{w.price}</td>
                  <td className={`py-2 pr-4 font-semibold ${TIER_COLOR[w.tier]}`}>{w.tier}</td>
                  <td className="py-2 text-fg">{w.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-sonar">Unlock order (by island shop)</p>
          <ul className="space-y-1 text-sm text-fg">
            <li><strong>1 Lighthouse:</strong> Brass Knuckles, Knife</li>
            <li><strong>2 Forest:</strong> + Pistol, Shotgun, Dynamite</li>
            <li><strong>3 Palm Trees:</strong> + SMG</li>
            <li><strong>4 Casino Barn:</strong> + Sniper Rifle</li>
            <li><strong>5 Volcano:</strong> + Assault Rifle</li>
          </ul>
        </SonarPanel>
        <SonarPanel className="space-y-2">
          <p className="display text-lg glow-lure">What to buy first</p>
          <p className="text-sm text-fg">
            Grab the <strong>Knife</strong> early, then a <strong>Pistol</strong> for
            income and trick shots. Save hard for the <strong>SMG</strong> - it carries
            most of the mid-game bosses. Only fully upgrade your one main gun; maxing
            everything is very expensive, and weapons you leave behind on an island are
            gone for good, attachments included.
          </p>
        </SonarPanel>
      </section>

      <SonarPanel className="space-y-2 text-sm text-dim">
        <p className="text-fg display">Attachments &amp; &ldquo;Fully equipped&rdquo;</p>
        <p>
          Weapons take attachments (Extended Mag, Laser Sight, Red Dot, Compensator,
          Sniper Scope and more), unlocking across islands 2-4. Fitting all four pistol
          attachments (about $900 total) pops the{" "}
          <span className="glow-sonar">Fully equipped</span> achievement. Per-attachment
          prices aren&rsquo;t documented - check the shop in-game. Since v1.0.11 the Iron
          Sight is no longer sold (players only ever bought it by mistake), and a
          Suppressor can&rsquo;t be downgraded back to a Compensator.
        </p>
      </SonarPanel>

      <p className="text-sm text-dim">
        Which gun for which fight? See the <a href="/bosses/">boss guide</a> - the Sniper
        is the pick for the airborne Albatross, the SMG for most others. Prices and stats
        come from community guides (Game8); confirm in-game before big purchases.
      </p>
    </article>
  );
}
