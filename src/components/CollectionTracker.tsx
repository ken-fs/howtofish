"use client";

import { useEffect, useMemo, useState } from "react";
import { CREATURES, TIER_ORDER, TIER_BLURB, type Tier } from "@/data/game";

const STORAGE_KEY = "htf-collection-v1";

type FilterMode = "all" | "caught" | "missing";
type SortMode = "tier" | "az";

/**
 * Interactive creature tracker for the "Collector" achievement. Search, filter
 * (all/caught/missing), sort (by bait tier or A-Z), progress, and export.
 * State is localStorage only - nothing leaves the browser. Default render (no
 * search, tier sort) groups every creature under its tier heading, so names +
 * H2s stay in the server-rendered HTML for crawlers.
 */
export function CollectionTracker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [sort, setSort] = useState<SortMode>("tier");
  const [copied, setCopied] = useState(false);

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
  const caught = useMemo(
    () => CREATURES.filter((c) => checked[c.name]).length,
    [checked],
  );
  const pct = Math.round((caught / total) * 100);

  const q = query.trim().toLowerCase();
  const matches = (c: { name: string; tier: Tier }) => {
    if (q && !c.name.toLowerCase().includes(q) && !c.tier.toLowerCase().includes(q))
      return false;
    if (filter === "caught") return !!checked[c.name];
    if (filter === "missing") return !checked[c.name];
    return true;
  };

  const visible = CREATURES.filter(matches);

  const copyMissing = () => {
    const missing = CREATURES.filter((c) => !checked[c.name]).map((c) => c.name);
    navigator.clipboard?.writeText(missing.join("\n")).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  };

  const toggle = (name: string, val: boolean) =>
    setChecked((prev) => ({ ...prev, [name]: val }));

  const Row = ({ c }: { c: { name: string; tier: Tier; value: number | null } }) => (
    <li className="border-b border-kelp/40">
      <label className="flex min-h-11 cursor-pointer items-center gap-3 py-1 text-fg">
        <input
          type="checkbox"
          className="h-5 w-5 accent-[var(--color-sonar)]"
          checked={!!checked[c.name]}
          onChange={(e) => toggle(c.name, e.target.checked)}
        />
        <span className={checked[c.name] ? "text-dim line-through" : ""}>{c.name}</span>
        {c.value != null && (
          <span className="ml-auto text-xs text-dim">${c.value.toLocaleString()}</span>
        )}
      </label>
    </li>
  );

  const filterBtn = (mode: FilterMode, label: string, n: number) => (
    <button
      type="button"
      onClick={() => setFilter(mode)}
      aria-pressed={filter === mode}
      className={`h-11 rounded border-2 px-3 text-sm ${
        filter === mode
          ? "border-sonar text-sonar"
          : "border-kelp text-dim hover:text-fg"
      }`}
    >
      {label} <span className="text-dim">({n})</span>
    </button>
  );

  return (
    <div className="space-y-5">
      {/* Controls + progress */}
      <div className="sonar-panel space-y-4 p-5">
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

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search creature or bait tier..."
          className="h-11 w-full rounded border-2 border-kelp bg-abyss px-3 text-fg placeholder:text-dim focus:border-sonar focus:outline-none"
          aria-label="Search creatures"
        />

        <div className="flex flex-wrap items-center gap-2">
          {filterBtn("all", "All", total)}
          {filterBtn("caught", "Caught", caught)}
          {filterBtn("missing", "Missing", total - caught)}
          <span className="mx-1 h-6 w-px bg-kelp" aria-hidden />
          <button
            type="button"
            onClick={() => setSort(sort === "tier" ? "az" : "tier")}
            className="h-11 rounded border-2 border-kelp px-3 text-sm text-dim hover:text-fg"
          >
            Sort: {sort === "tier" ? "Bait tier" : "A-Z"}
          </button>
          <button
            type="button"
            onClick={copyMissing}
            className="h-11 rounded border-2 border-kelp px-3 text-sm text-sonar hover:border-sonar"
          >
            {copied ? "Copied!" : "Copy missing list"}
          </button>
        </div>
        <p className="text-xs text-dim">
          Tracked in your browser only. Full set = the &ldquo;Collector&rdquo; achievement.
        </p>
      </div>

      {/* Empty state */}
      {visible.length === 0 && (
        <p className="text-dim">No creatures match. Clear the search or filter.</p>
      )}

      {/* A-Z flat list */}
      {sort === "az" && visible.length > 0 && (
        <ul className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...visible]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => (
              <Row key={c.name} c={c} />
            ))}
        </ul>
      )}

      {/* Grouped by bait tier (default) */}
      {sort === "tier" &&
        TIER_ORDER.map((tier: Tier) => {
          const rows = visible.filter((c) => c.tier === tier);
          if (rows.length === 0) return null;
          return (
            <div key={tier} className="space-y-2">
              <h2 className="display text-lg glow-sonar">
                {tier} <span className="text-dim text-sm">· {rows.length}</span>
              </h2>
              <p className="text-sm text-dim">{TIER_BLURB[tier]}</p>
              <ul className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {rows.map((c) => (
                  <Row key={c.name} c={c} />
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
}
