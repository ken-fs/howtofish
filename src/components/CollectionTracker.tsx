"use client";

import { useEffect, useState } from "react";
import { CREATURES, TIER_ORDER, TIER_BLURB, type Tier } from "@/data/game";

const STORAGE_KEY = "htf-collection-v1";

/**
 * Interactive collection checklist for the "Collector" achievement (kill all
 * creatures). State is stored in localStorage only - no account, nothing leaves
 * the browser. Creature names render server-side too, so the list stays crawlable.
 */
export function CollectionTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // ignore corrupt/unavailable storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore quota/unavailable storage
    }
  }, [checked, loaded]);

  const total = CREATURES.length;
  const caught = CREATURES.filter((c) => checked[c.name]).length;
  const pct = Math.round((caught / total) * 100);

  return (
    <div className="space-y-5">
      <div className="sonar-panel space-y-3 p-5">
        <div className="flex items-baseline justify-between">
          <p className="display text-lg text-fg">
            Caught <span className="glow-sonar">{caught}</span> / {total}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-dim">{pct}%</span>
            {caught > 0 && (
              <button
                type="button"
                onClick={() => setChecked({})}
                className="text-xs text-dim underline hover:text-coral"
              >
                Reset
              </button>
            )}
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-abyss">
          <div
            className="h-full bg-sonar transition-[width] duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-dim">
          Tick off what you&rsquo;ve caught - saved in your browser only. Full set =
          the &ldquo;Collector&rdquo; achievement.
        </p>
      </div>

      {TIER_ORDER.map((tier: Tier) => {
        const rows = CREATURES.filter((c) => c.tier === tier);
        return (
          <div key={tier} className="space-y-2">
            <h2 className="display text-lg glow-sonar">
              {tier} <span className="text-dim text-sm">· {rows.length}</span>
            </h2>
            <p className="text-sm text-dim">{TIER_BLURB[tier]}</p>
            <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((c) => (
                <li key={c.name} className="border-b border-kelp/40 py-1">
                  <label className="flex cursor-pointer items-center gap-2 text-fg">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[var(--color-sonar)]"
                      checked={!!checked[c.name]}
                      onChange={(e) =>
                        setChecked((prev) => ({ ...prev, [c.name]: e.target.checked }))
                      }
                    />
                    <span className={checked[c.name] ? "text-dim line-through" : ""}>
                      {c.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
