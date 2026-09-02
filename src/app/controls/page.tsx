import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - Controls & Keybinds (PC / Controller)",
  description:
    "The controls for How to Fish on Steam: movement, how to catch and sell, inspect values, switch weapons, open the collection - plus the truth about controller support.",
  path: "/controls/",
});

/** action → key. Movement/look are the standard PC first-person defaults;
 *  game-specific actions are the ones confirmed in-game. */
const CONTROLS: { action: string; key: string; note?: string }[] = [
  { action: "Move", key: "W A S D", note: "Standard first-person movement." },
  { action: "Look / aim", key: "Mouse" },
  { action: "Use rod / fire weapon", key: "Left click" },
  { action: "Interact / pick up", key: "Interact key", note: "Grab creatures and items." },
  { action: "Inspect value", key: "Inspect key", note: "Check what a creature sells for before you sell it." },
  { action: "Switch weapon", key: "Number keys 1-9", note: "Switching auto-drops the fish you're holding." },
  { action: "Open collection", key: "Tab", note: "The Fishipedia / creature collection view." },
  { action: "Eat", key: "Eat key", note: "Restore hunger - watch the hunger/grill system." },
];

export default function ControlsPage() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Controls &amp; Keybinds
        </Heading>
        <p className="text-fg">
          How to Fish plays like a first-person shooter, so movement and aiming are the
          usual PC defaults. The game-specific actions - inspecting, selling, switching
          gear - are the ones that trip people up. Here&rsquo;s the lot.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <section className="space-y-3">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-kelp text-left">
                <th className="py-2 pr-4 font-semibold text-dim">Action</th>
                <th className="py-2 pr-4 font-semibold text-dim">Key</th>
                <th className="py-2 font-semibold text-dim">Notes</th>
              </tr>
            </thead>
            <tbody>
              {CONTROLS.map((c) => (
                <tr key={c.action} className="border-b border-kelp/40 align-top">
                  <td className="py-2 pr-4 text-fg whitespace-nowrap">{c.action}</td>
                  <td className="py-2 pr-4 glow-sonar whitespace-nowrap">{c.key}</td>
                  <td className="py-2 text-dim">{c.note ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <Heading color="sonar" className="text-xl sm:text-2xl">How to sell fish</Heading>
        <SonarPanel className="text-fg">
          <p>
            There&rsquo;s no &ldquo;sell&rdquo; button - you sell by{" "}
            <strong>throwing the creature into the shopkeeper&rsquo;s mouth</strong>.
            Inspect it first if you want to know the value before it&rsquo;s gone.
          </p>
        </SonarPanel>
      </section>

      <section className="space-y-3">
        <Heading color="coral" className="text-xl sm:text-2xl">Controller support</Heading>
        <SonarPanel className="text-fg">
          <p>
            Steam lists <strong>no official controller support</strong> for How to
            Fish - it&rsquo;s built for mouse and keyboard. You can force a gamepad
            through Steam Input, but aiming trick-shots with a stick is rough, so
            mouse and keyboard is strongly recommended.
          </p>
        </SonarPanel>
      </section>

      <p className="text-sm text-dim">
        The game doesn&rsquo;t publish a full keybind chart, and a few actions can be
        rebound in the settings menu. The bindings above are what we&rsquo;ve confirmed
        in-game - if a default differs on your build, tell us on the{" "}
        <a href="/contact/">contact page</a> and we&rsquo;ll update it.
      </p>
    </article>
  );
}
