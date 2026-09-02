import type { Metadata } from "next";
import { buildMeta } from "@/lib/meta";
import { Heading, SonarPanel, VerifiedStamp } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LAST_CHECKED } from "@/data/game";

export const metadata: Metadata = buildMeta({
  title: "How to Fish - Fixes for Crashes, Errors & Low FPS",
  description:
    "Fix How to Fish when it won't launch, crashes, throws Steam Error 51, or runs at low FPS. Step-by-step troubleshooting plus the minimum PC specs.",
  path: "/fixes/",
});

const FIXES: { title: string; steps: string[] }[] = [
  {
    title: "Steam Error 51 / game won't start",
    steps: [
      "In Steam, right-click How to Fish → Properties → Installed Files → Verify integrity of game files.",
      "Update your GPU drivers (NVIDIA / AMD / Intel), then reboot.",
      "Run Steam as administrator (right-click the Steam shortcut → Run as administrator).",
      "Disable in-game overlays temporarily (Steam overlay, Discord, GeForce Experience).",
      "If it persists, fully reinstall the game - Error 51 is usually a corrupt or blocked install.",
    ],
  },
  {
    title: "Black screen or crash on launch",
    steps: [
      "Verify game files (see above) - the most common fix.",
      "Update GPU drivers and Windows.",
      "Add How to Fish and Steam as exceptions in your antivirus / Windows Defender.",
      "Launch in windowed mode first if the game opens off-screen, then switch to fullscreen.",
    ],
  },
  {
    title: "Low FPS or stutter",
    steps: [
      "Lower in-game graphics settings and resolution.",
      "Close background apps (browsers, Discord streams, recording software).",
      "Update GPU drivers and set the game to your dedicated GPU in the driver control panel.",
      "Confirm your PC meets the minimum specs below - this is a physics game, so CPU matters.",
    ],
  },
  {
    title: "Co-op / multiplayer not working",
    steps: [
      "Both players restart Steam and confirm you're on the same game version.",
      "Have the other player try hosting instead.",
      "Check that your firewall isn't blocking the game - broadband is required.",
    ],
  },
];

export default function FixesPage() {
  return (
    <article className="space-y-8">
      <Breadcrumbs label="Fixes & Errors" path="/fixes/" />
      <header className="space-y-3">
        <Heading as="h1" color="lure" className="text-3xl sm:text-4xl">
          Fixes, Errors &amp; Performance
        </Heading>
        <p className="text-fg">
          Stuck on a black screen, hit Steam Error 51, or running at a slideshow?
          Here&rsquo;s what actually fixes the common How to Fish problems, in the order
          worth trying.
        </p>
        <VerifiedStamp date={LAST_CHECKED} />
      </header>

      <div className="space-y-4">
        {FIXES.map((f) => (
          <SonarPanel key={f.title} className="space-y-2">
            <h2 className="display text-lg glow-sonar">{f.title}</h2>
            <ol className="list-decimal space-y-1 pl-5 text-fg">
              {f.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </SonarPanel>
        ))}
      </div>

      <section className="space-y-3">
        <Heading color="shallow" className="text-xl sm:text-2xl">Minimum PC specs</Heading>
        <SonarPanel className="text-fg">
          <ul className="space-y-1 text-sm">
            <li><strong>OS:</strong> Windows 10 or newer (64-bit)</li>
            <li><strong>CPU:</strong> Intel Core i5-5257U / AMD Ryzen 3 1200</li>
            <li><strong>RAM:</strong> 8 GB</li>
            <li><strong>GPU:</strong> NVIDIA GTX 1050 / AMD RX 460 (1 GB)</li>
            <li><strong>Network:</strong> broadband required for co-op</li>
          </ul>
          <p className="mt-2 text-sm text-dim">There is no Mac, Linux, or console version - it&rsquo;s Windows only.</p>
        </SonarPanel>
      </section>

      <p className="text-sm text-dim">
        Still stuck after all this? Tell us what you&rsquo;re seeing on the{" "}
        <a href="/contact/">contact page</a> and we&rsquo;ll help track it down.
      </p>
    </article>
  );
}
