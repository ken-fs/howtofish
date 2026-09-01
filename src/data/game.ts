/**
 * How to Fish — game data (single source of truth for content pages).
 *
 * IMPORTANT framing: despite the name, this is a physics FIRST-PERSON game where
 * you catch, KILL (with weapons), and SELL creatures for money, upgrade gear,
 * fight bosses, and progress across islands. Write copy accordingly.
 *
 * Confidence is tracked per dataset. We NEVER publish unverified numbers
 * (weapon prices, how-long-to-beat, killscore triggers) as fact — those are
 * intentionally omitted until confirmed in-game.
 * Sources: Steam store App 4001890; steamcommunity.com/stats/4001890/achievements;
 * Steam guide "ALL THE TYPES OF BAITS" (markomusti, id 3789629297). Verified ~Sep 1 2026.
 */

export const LAST_CHECKED = "September 1, 2026";
export const GAME_VERSION = "1.0.10";

/** Bait/lure tier = the de-facto rarity ladder. Per-fish island mapping is a
 *  documented gap; we don't invent it. */
export type Tier =
  | "Free Bait"
  | "Standard Lure"
  | "Professional Lure"
  | "Scientific Lure"
  | "Boss / Special";

export const CREATURES: { name: string; tier: Tier }[] = [
  // Free / Beginner bait
  { name: "Brown Crab", tier: "Free Bait" },
  { name: "Piranha", tier: "Free Bait" },
  { name: "Gar", tier: "Free Bait" },
  { name: "Shrimp", tier: "Free Bait" },
  { name: "Mackerel", tier: "Free Bait" },
  { name: "Rock Crab", tier: "Free Bait" },
  { name: "Lobster", tier: "Free Bait" },
  { name: "Cod", tier: "Free Bait" },
  { name: "Goby", tier: "Free Bait" },
  { name: "Pike", tier: "Free Bait" },
  { name: "Perch", tier: "Free Bait" },
  { name: "Triggerfish", tier: "Free Bait" },
  { name: "Goldfish", tier: "Free Bait" },
  // Standard Lure
  { name: "Salmon", tier: "Standard Lure" },
  { name: "Catfish", tier: "Standard Lure" },
  { name: "Clownfish", tier: "Standard Lure" },
  { name: "Sea Urchin", tier: "Standard Lure" },
  { name: "Yellow Boxfish", tier: "Standard Lure" },
  { name: "Needlefish", tier: "Standard Lure" },
  { name: "Angelfish", tier: "Standard Lure" },
  { name: "Bluegill", tier: "Standard Lure" },
  { name: "Seahorse", tier: "Standard Lure" },
  { name: "Bowlfish", tier: "Standard Lure" },
  // Professional Lure
  { name: "Bass", tier: "Professional Lure" },
  { name: "Eel", tier: "Professional Lure" },
  { name: "Red Snapper", tier: "Professional Lure" },
  { name: "Sengarat", tier: "Professional Lure" },
  { name: "Halibut", tier: "Professional Lure" },
  { name: "Tigerfish", tier: "Professional Lure" },
  { name: "Flying Fish", tier: "Professional Lure" },
  { name: "Voxel Fish", tier: "Professional Lure" },
  { name: "Parrotfish", tier: "Professional Lure" },
  { name: "Dripper", tier: "Professional Lure" },
  // Scientific Lure
  { name: "Blobfish", tier: "Scientific Lure" },
  { name: "Oarfish", tier: "Scientific Lure" },
  { name: "Anglerfish", tier: "Scientific Lure" },
  { name: "Stonefish", tier: "Scientific Lure" },
  { name: "Superdwarf Fish", tier: "Scientific Lure" },
  // Bosses / special
  { name: "Sunfish", tier: "Boss / Special" },
  { name: "The Old Pike", tier: "Boss / Special" },
  { name: "Blue Shark", tier: "Boss / Special" },
  { name: "Tuna", tier: "Boss / Special" },
  { name: "Goblin Shark", tier: "Boss / Special" },
  { name: "Bowhead Whale", tier: "Boss / Special" },
  { name: "Spider Crab", tier: "Boss / Special" },
  { name: "Giant Piranha", tier: "Boss / Special" },
  { name: "Pufferfish", tier: "Boss / Special" },
  { name: "Albatross", tier: "Boss / Special" },
  { name: "Mutated Bowhead Whale", tier: "Boss / Special" },
];

export const TIER_ORDER: Tier[] = [
  "Free Bait",
  "Standard Lure",
  "Professional Lure",
  "Scientific Lure",
  "Boss / Special",
];

/** 28 Steam achievements, verified with global unlock % (Sep 1 2026). */
export const ACHIEVEMENTS: {
  name: string;
  how: string;
  pct: number;
  hard?: boolean;
}[] = [
  { name: "Getting started", how: "Kill your first creature.", pct: 98.6 },
  { name: "Drip", how: "Kill a drip (shiny) creature.", pct: 96.8 },
  { name: "Who stole my beer", how: "Find and kill the culprit, then bring it to the lighthouse keeper.", pct: 91.8 },
  { name: "Getting an upgrade", how: "Upgrade the boat engine.", pct: 86.7 },
  { name: "Noob", how: "Get a kill with no kill-score multiplier active.", pct: 86.1 },
  { name: "Dinnertime", how: "Catch dinner for the lady in the forest.", pct: 83.3 },
  { name: "Let me go", how: "Get picked up by a seagull.", pct: 82.6 },
  { name: "Impressive", how: "Reach a 5x kill-score multiplier.", pct: 81.3 },
  { name: "Grillmaster", how: "Start the grill.", pct: 80.8 },
  { name: "Vacation", how: "Help the tourist swim on vacation (forest island).", pct: 71.5 },
  { name: "GOLD GOLD GOLD", how: "Unlock a legendary skin from the slot machine.", pct: 67.9 },
  { name: "360 no scope", how: "Kill a creature with a 360 no-scope.", pct: 63.7 },
  { name: "I am speed", how: "Buy the best boat engine.", pct: 63.1 },
  { name: "Fully equipped", how: "Apply all attachments to a single weapon.", pct: 58.7 },
  { name: "Terrorizing bird", how: "Defend the islanders from the terrorizing bird.", pct: 55.7 },
  { name: "Yummy in my tummy", how: "Eat a burnt creature.", pct: 48.2 },
  { name: "Deadliest catch", how: "Help the military defeat the big located creature.", pct: 42.3 },
  { name: "We are so back", how: "Finish the game.", pct: 40.9 },
  { name: "All in", how: "Bet on green and win at roulette.", pct: 38.7 },
  { name: "Easy", how: "Kill a boss within 10 seconds.", pct: 33.3, hard: true },
  { name: "I'm the bird now", how: "Make the boat fly.", pct: 26.8 },
  { name: "Competitive eating", how: "Eat a mini-boss.", pct: 22.6 },
  { name: "Rich! Millionaire", how: "Sell something worth 100,000 or more.", pct: 17.8 },
  { name: "Collector", how: "Find and kill all creatures.", pct: 16.6, hard: true },
  { name: "Everyone's dream", how: "Kill a seagull with dynamite.", pct: 6.6, hard: true },
  { name: "Handyman", how: "Defeat the final boss bare-handed (no weapons).", pct: 3.5, hard: true },
  { name: "Fishipedia", how: "Find and kill every drip (shiny) creature.", pct: 2.9, hard: true },
  { name: "Bean", how: "Finish the game within 1 hour.", pct: 2.6, hard: true },
];

/** Islands — MEDIUM confidence (guide + boss/bait cross-validation). Order likely
 *  but the canonical count/biome names are a documented gap; flagged in copy. */
export const ISLANDS: { name: string; boss: string; note: string }[] = [
  { name: "Lighthouse Island", boss: "Spider Crab", note: "Starting island. 'Who stole my beer' quest (Empty Beer Can bait). Buy the radar upgrade before you leave." },
  { name: "Forest Island", boss: "—", note: "'Dinnertime' and 'Vacation' quests live here." },
  { name: "Leech Island", boss: "Giant Piranha", note: "Boss uses Modified Leech bait." },
  { name: "Island 4", boss: "The Albatross", note: "Tuna bait. Watch for its 'Shartillery' attack — learn the dodge." },
  { name: "Volcano Island", boss: "Bowhead / Mutated Bowhead Whale", note: "Final island. 'Handyman' = beat the final boss bare-handed." },
];
