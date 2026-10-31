"use client";

import { useEffect, useRef } from "react";

/**
 * Adsterra banners. Each unit runs in its own srcDoc iframe so the shared
 * global `atOptions` can't collide between units, and the ad scripts stay
 * sandboxed away from the main document. Rendered once per page (below content)
 * to keep the reading experience and LCP clean.
 */

type Unit = { adKey: string; width: number; height: number };

const LEADERBOARD: Unit = { adKey: "e1b21475632bd62972f4851d040e096f", width: 728, height: 90 };
const RECTANGLE: Unit = { adKey: "44c94a3796de7bdfc1b8d79c16009489", width: 300, height: 250 };

function AdBanner({ adKey, width, height }: Unit) {
  const ref = useRef<HTMLIFrameElement>(null);
  const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style></head><body><script>atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script src="https://www.highrevenueformat.com/${adKey}/invoke.js"></script></body></html>`;
  // Fill srcdoc only once the slot is on screen (or close), 2026-10-31. It used to be rendered into the
  // HTML, and srcdoc ignores loading="lazy", so the leaderboard hidden on phones loaded on every phone
  // visit: impressions for an ad nobody could see. A display:none element never intersects.
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    if (!("IntersectionObserver" in window)) {
      if (iframe.offsetParent) iframe.srcdoc = srcDoc;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          iframe.srcdoc = srcDoc;
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(iframe);
    return () => io.disconnect();
  }, [srcDoc]);
  return (
    <iframe
      ref={ref}
      title="Advertisement"
      width={width}
      height={height}
      loading="lazy"
      scrolling="no"
      // No allow-same-origin: a srcdoc frame would inherit this page's origin and the ad script could read it.
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
      style={{ border: 0, width, height, display: "block" }}
    />
  );
}

/** One tasteful ad zone below the article: leaderboard (desktop) + rectangle. */
export function AdZone() {
  return (
    <aside className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-4 px-4">
      <p className="text-[10px] uppercase tracking-widest text-dim">Advertisement</p>
      <div className="hidden md:block" style={{ minHeight: 90 }}>
        <AdBanner {...LEADERBOARD} />
      </div>
      <div style={{ minHeight: 250 }}>
        <AdBanner {...RECTANGLE} />
      </div>
    </aside>
  );
}

/**
 * Global no-slot units (Social Bar / Popunder). Left empty on purpose - enable
 * later by pasting a script src if you want higher revenue at some UX cost.
 */
export const ADSTERRA = { socialBar: "", popunder: "" } as const;

export function AdsterraGlobal() {
  return null;
}
