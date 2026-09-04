/**
 * How to Fish - game data (single source of truth for content pages).
 *
 * Framing: despite the name, this is a physics FIRST-PERSON game where you
 * catch, KILL (with weapons), and SELL creatures for money, upgrade gear,
 * fight bosses, and progress across five islands.
 *
 * Sourcing: most numeric detail (sell values, weapon stats, killscore
 * multipliers) is sourced from the Game8 guide and cross-checked against Steam
 * Community guides where possible; treat single-source numbers as "verify
 * in-game". Genuinely undocumented / conflicting values are omitted or flagged.
 * Verified ~Sep 2 2026. Sources: Game8 (game8.co/games/How-to-Fish), Steam
 * store App 4001890, Steam achievements + Bait & Fish community guide.
 */

export const LAST_CHECKED = "September 4, 2026";
export const GAME_VERSION = "1.0.11";

/** Rod lure tier = the catch/rarity ladder (cheaper lure = common). */
export type Tier =
  | "Free Bait"
  | "Standard Lure"
  | "Professional Lure"
  | "Scientific Lure"
  | "Boss / Special";

/** value = sell price in-game ($). null = not published / boss with no listed price. */
export const CREATURES: { name: string; tier: Tier; value: number | null }[] = [
  { name: "Brown Crab", tier: "Free Bait", value: 3 },
  { name: "Piranha", tier: "Free Bait", value: 4 },
  { name: "Gar", tier: "Free Bait", value: 5 },
  { name: "Shrimp", tier: "Free Bait", value: 5 },
  { name: "Mackerel", tier: "Free Bait", value: 6 },
  { name: "Rock Crab", tier: "Free Bait", value: 7 },
  { name: "Lobster", tier: "Free Bait", value: 9 },
  { name: "Cod", tier: "Free Bait", value: 10 },
  { name: "Goby", tier: "Free Bait", value: 12 },
  { name: "Pike", tier: "Free Bait", value: 12 },
  { name: "Perch", tier: "Free Bait", value: 18 },
  { name: "Triggerfish", tier: "Free Bait", value: 18 },
  { name: "Goldfish", tier: "Free Bait", value: 24 },
  { name: "Salmon", tier: "Standard Lure", value: 14 },
  { name: "Catfish", tier: "Standard Lure", value: 46 },
  { name: "Clownfish", tier: "Standard Lure", value: 46 },
  { name: "Sea Urchin", tier: "Standard Lure", value: 52 },
  { name: "Yellow Boxfish", tier: "Standard Lure", value: 53 },
  { name: "Needlefish", tier: "Standard Lure", value: 60 },
  { name: "Angelfish", tier: "Standard Lure", value: 62 },
  { name: "Bluegill", tier: "Standard Lure", value: 62 },
  { name: "Seahorse", tier: "Standard Lure", value: 100 },
  { name: "Bowlfish", tier: "Standard Lure", value: 150 },
  { name: "Bass", tier: "Professional Lure", value: 250 },
  { name: "Eel", tier: "Professional Lure", value: 280 },
  { name: "Red Snapper", tier: "Professional Lure", value: 280 },
  { name: "Sengarat", tier: "Professional Lure", value: 280 },
  { name: "Halibut", tier: "Professional Lure", value: 290 },
  { name: "Tigerfish", tier: "Professional Lure", value: 310 },
  { name: "Flying Fish", tier: "Professional Lure", value: 320 },
  { name: "Voxel Fish", tier: "Professional Lure", value: 340 },
  { name: "Parrotfish", tier: "Professional Lure", value: 350 },
  { name: "Dripper", tier: "Professional Lure", value: 380 },
  { name: "Blobfish", tier: "Scientific Lure", value: 1360 },
  { name: "Oarfish", tier: "Scientific Lure", value: 1450 },
  { name: "Anglerfish", tier: "Scientific Lure", value: 1500 },
  { name: "Stonefish", tier: "Scientific Lure", value: 1500 },
  { name: "Superdwarf Fish", tier: "Scientific Lure", value: 1700 },
  { name: "Sunfish", tier: "Boss / Special", value: 50 },
  { name: "The Old Pike", tier: "Boss / Special", value: 80 },
  { name: "Blue Shark", tier: "Boss / Special", value: 300 },
  { name: "Tuna", tier: "Boss / Special", value: 2000 },
  { name: "Goblin Shark", tier: "Boss / Special", value: 6200 },
  { name: "Bowhead Whale", tier: "Boss / Special", value: 8000 },
  { name: "Spider Crab", tier: "Boss / Special", value: null },
  { name: "Giant Piranha", tier: "Boss / Special", value: null },
  { name: "Pufferfish", tier: "Boss / Special", value: null },
  { name: "Albatross", tier: "Boss / Special", value: null },
  { name: "Mutated Bowhead Whale", tier: "Boss / Special", value: null },
];

export const TIER_ORDER: Tier[] = [
  "Free Bait",
  "Standard Lure",
  "Professional Lure",
  "Scientific Lure",
  "Boss / Special",
];

/** One-line context per tier - shown under each tier heading. */
export const TIER_BLURB: Record<Tier, string> = {
  "Free Bait":
    "The starter Crab Rod's free lure, plus the cheap Beginner catches on islands 1-2. Small change (Brown Crab $3) but constant income early on.",
  "Standard Lure":
    "Buyable from island 3. Mid-tier fish worth $14-150, including the endangered Seahorse and Bowlfish needed to progress.",
  "Professional Lure":
    "Island 4's lure. Bass to Dripper, $250-380 each - this is where fishing income really opens up.",
  "Scientific Lure":
    "The island-5 top tier. Blobfish, Oarfish, Anglerfish, Stonefish and the $1,700 Superdwarf Fish - the most valuable rod catches in the game.",
  "Boss / Special":
    "Bosses and special creatures. You fight these with weapons and boss lures; the Bowhead Whale sells for $8,000.",
};

/** 8 weapons, bought at island shops. Prices/stats via Game8 (verify in-game). */
export const WEAPONS: {
  name: string;
  type: "Melee" | "Ranged" | "Throwable";
  price: string;
  role: string;
  tier: "S" | "A" | "B" | "C";
}[] = [
  { name: "Brass Knuckles", type: "Melee", price: "$24", role: "Cheapest starter melee. Low damage, tiny reach - you'll replace it fast.", tier: "C" },
  { name: "Knife", type: "Melee", price: "$45", role: "The melee to actually keep; solid for the first boss and stylish kills.", tier: "A" },
  { name: "Pistol", type: "Ranged", price: "$50", role: "Your first gun. Reliable early income and trick shots.", tier: "B" },
  { name: "Shotgun", type: "Ranged", price: "$150", role: "Close-range spread. Great on the Giant Piranha; frequent reloads.", tier: "B" },
  { name: "SMG", type: "Ranged", price: "$650", role: "High DPS and forgiving aim. The workhorse against fast, mobile bosses.", tier: "S" },
  { name: "Sniper Rifle", type: "Ranged", price: "$3,800", role: "Big single-shot damage at range - the pick for the airborne Albatross.", tier: "A" },
  { name: "Assault Rifle", type: "Ranged", price: "$20,000", role: "Endgame powerhouse for the Volcano bosses. Expensive, worth it late.", tier: "S" },
  { name: "Dynamite", type: "Throwable", price: "$25", role: "AoE farming and boss cheese (mind the self-damage). Key to the 10-second Albatross kill.", tier: "B" },
];

/** All 12 bosses (final has two forms). Lures cross-confirmed; strategies via
 *  Game8 - behavioral, not weak-point data (HP/phases aren't documented). */
export const BOSSES: {
  name: string;
  island: string;
  lure: string;
  weapon: string;
  strategy: string;
}[] = [
  { name: "Spider Crab", island: "1 - Lighthouse", lure: "Empty Beer Can (buy beer, give it to the stranded captain)", weapon: "Knife / Brass Knuckles", strategy: "Melee it. It lunges and is stunned for a few seconds when it misses - punish during the stun." },
  { name: "Giant Piranha", island: "2 - Forest", lure: "Modified Leech (give 3 leeches to the daughter NPC)", weapon: "Shotgun", strategy: "It splits into smaller piranhas. Shotgun the biggest one and throw Dynamite as it charges." },
  { name: "Sunfish", island: "2-5", lure: "Beginner Boss Lure (~$40)", weapon: "Pistol", strategy: "Harmless. Just shoot it - free money and an easy boss creature." },
  { name: "The Old Pike", island: "2-5", lure: "Beginner Boss Lure (~$40)", weapon: "Shotgun", strategy: "Constantly charges. Keep your distance and shotgun it while staying mobile." },
  { name: "Pufferfish", island: "3 - Palm Trees", lure: "Carrot (catch an endangered fish, give it to the life-vest NPC)", weapon: "SMG", strategy: "Mandatory boss. At about half health it puffs toxic purple fumes (contact damage) - hide behind coconut trees to slow it and avoid the cloud." },
  { name: "Blue Shark", island: "3 - Palm Trees (optional)", lure: "Standard Boss Lure (~$280)", weapon: "SMG", strategy: "Optional, but beating it unlocks the Grill. Make distance, then firearms; lure it into trees." },
  { name: "Bing Bong", island: "3 - Palm Trees", lure: "Coconut (~$350, knock coconuts off the tallest palm)", weapon: "SMG", strategy: "Too fast for melee. SMG from range; co-op makes it much easier." },
  { name: "Tuna", island: "4 - Casino Barn", lure: "Professional Boss Lure (price is inconsistent in guides - check in-game)", weapon: "Guns + strafe", strategy: "Rams you constantly. Strafe and keep firing; you need the Tuna to summon the Albatross." },
  { name: "Albatross", island: "4 - Casino Barn", lure: "Beat the Tuna, then place the tuna on the grass to draw it in", weapon: "Sniper (best) or SMG", strategy: "Flies high - Sniper is ideal. It drops damaging 'Shartillery' bombs; shelter under a roof and step out to shoot. Cheese: ring the tuna bait with ~20 Dynamite and detonate on its dive for a sub-10s kill (the 'Easy' achievement)." },
  { name: "Goblin Shark", island: "5 - Volcano", lure: "Scientific Boss Lure (~$5,800)", weapon: "Assault Rifle / SMG", strategy: "Very mobile over lava. Keep firing and jump the lava paths." },
  { name: "Bowhead Whale", island: "5 - Volcano (final, form 1)", lure: "Fish Bucket (give 5 island-5 fish to the hazmat-suit NPC)", weapon: "Assault Rifle / SMG", strategy: "Fast and huge. Range it down with your best gun and avoid its towering jump attacks." },
  { name: "Mutated Bowhead Whale", island: "5 - Volcano (final, form 2)", lure: "Kill the Bowhead Whale, then throw its body into the volcano's mouth", weapon: "Guns, then bare hands for the finish", strategy: "Descend the volcano immediately to dodge the AoE burst. It vomits magma - avoid the pools, keep dodging jumps. For 'Handyman', whittle it down with guns then land the final blow with your fists." },
];

/** Killscore style multipliers (applied to a catch's sell value). Values via
 *  Game8, single-source - verify in-game. Cooking adds a separate multiplier after. */
export const KILLSCORE: { move: string; mult: string }[] = [
  { move: "360 spin", mult: "1.5x" },
  { move: "Headshot", mult: "1.25x" },
  { move: "Last Bullet", mult: "1.25x" },
  { move: "No Scope", mult: "1.2x" },
  { move: "Point Blank", mult: "1.1x" },
  { move: "Noob Kill", mult: "1.01x" },
];

/** Islands 1-5, in order, with the proof-item that unlocks the next island. */
export const ISLANDS: { name: string; boss: string; note: string }[] = [
  { name: "1 - Lighthouse", boss: "Spider Crab", note: "Start here. Farm respawning Clams for the Vendor for quick early cash, beat the Spider Crab, hand its shell to the NPC for your boat, then buy the Radar to find island 2." },
  { name: "2 - Forest", boss: "Giant Piranha", note: "Give 3 leeches to the daughter NPC for the Modified Leech lure, beat the Giant Piranha, and hand over its skeleton for island 3's coordinates. Pistol, Shotgun and Dynamite unlock here." },
  { name: "3 - Palm Trees", boss: "Pufferfish (Blue Shark optional)", note: "Catch an endangered fish for the life-vest NPC to get the Carrot lure, beat the Pufferfish, and hand in its fin. Beating the optional Blue Shark unlocks the Grill. SMG unlocks here." },
  { name: "4 - Casino Barn", boss: "Tuna, then Albatross", note: "Home of the casino. Buy the Professional Lure, catch the Tuna, place it to summon the Albatross, beat it and hand in its head for island 5. Sniper unlocks here." },
  { name: "5 - Volcano", boss: "Goblin Shark, then Bowhead Whale + Mutated form", note: "Final island. Deliver smaller creatures to the scientist for the Fish Bucket lure, catch the Bowhead Whale, throw its body in the volcano, and fight the Mutated Bowhead Whale finale. Assault Rifle unlocks here." },
];

/** 28 Steam achievements, verified with global unlock % (Sep 2 2026). */
export const ACHIEVEMENTS: {
  name: string;
  how: string;
  pct: number;
  hard?: boolean;
}[] = [
  { name: "Getting started", how: "Kill your first creature.", pct: 98.5 },
  { name: "Drip", how: "Kill a drip (RNG variant) creature.", pct: 96.6 },
  { name: "Who stole my beer", how: "Find and kill the culprit, then bring it to the lighthouse keeper.", pct: 91.8 },
  { name: "Getting an upgrade", how: "Upgrade the boat engine.", pct: 86.7 },
  { name: "Noob", how: "Get a kill with no kill-score multiplier active.", pct: 86.1 },
  { name: "Dinnertime", how: "Catch dinner for the lady in the forest.", pct: 83.4 },
  { name: "Let me go", how: "Get picked up by a seagull.", pct: 82.6 },
  { name: "Impressive", how: "Reach a 5x kill-score multiplier (stack moves like Headshot + No Scope + Fly Fishing).", pct: 81.4 },
  { name: "Grillmaster", how: "Start the grill (unlocks after beating the Blue Shark on island 3).", pct: 80.9 },
  { name: "Vacation", how: "Help the tourist swim on his vacation (forest island).", pct: 71.7 },
  { name: "GOLD GOLD GOLD", how: "Unlock a legendary skin from the Reel of Fortune slot machine.", pct: 68.0 },
  { name: "360 no scope", how: "Kill a creature with a 360 no-scope (spin, then hipfire the finishing shot).", pct: 63.8 },
  { name: "I am speed", how: "Buy the best boat engine.", pct: 63.4 },
  { name: "Fully equipped", how: "Apply all attachments to a single weapon (all four pistol attachments cost ~$900).", pct: 59.0 },
  { name: "Terrorizing bird", how: "Defend the islanders from the terrorizing bird.", pct: 56.2 },
  { name: "Yummy in my tummy", how: "Eat a burnt creature.", pct: 48.4 },
  { name: "Deadliest catch", how: "Help the military defeat the big creature.", pct: 42.9 },
  { name: "We are so back", how: "Finish the game.", pct: 41.4 },
  { name: "All in", how: "Bet on green and win at roulette (casino, island 4).", pct: 39.1 },
  { name: "Easy", how: "Kill a boss within 10 seconds - easiest on the Albatross with a ring of Dynamite.", pct: 33.7, hard: true },
  { name: "I'm the bird now", how: "Make the boat fly.", pct: 27.1 },
  { name: "Competitive eating", how: "Eat a mini-boss.", pct: 22.8 },
  { name: "Rich! Millionaire", how: "Sell something worth 100,000 or more.", pct: 18.1 },
  { name: "Collector", how: "Find and kill all 49 creatures across the five islands.", pct: 16.8, hard: true },
  { name: "Everyone's dream", how: "Kill a seagull with dynamite.", pct: 6.7, hard: true },
  { name: "Handyman", how: "Defeat the final boss (Mutated Bowhead Whale) with your bare hands - land only the finishing blow with fists.", pct: 3.6, hard: true },
  { name: "Fishipedia", how: "Find and kill every drip variant (caught with a rod, not dynamite; a rainbow popup signals a drip).", pct: 3.0, hard: true },
  { name: "Bean", how: "Finish the game within 1 hour (fresh save on Easy, spam Dynamite, join co-op Bean lobbies).", pct: 2.7, hard: true },
];
