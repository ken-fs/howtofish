/** Single source of truth for site-wide config. */
export const SITE = {
  name: "How to Fish Hub",
  domain: "howtofishthegame.com",
  url: "https://howtofishthegame.com",
  game: "How to Fish",
  steamUrl: "https://store.steampowered.com/app/4001890/",
  steamAppId: "4001890",
  developer: "Dazed Games",
  releaseDate: "2026-08-20",
  price: "$7.99",
  tagline:
    "Fish list, all 28 achievements, co-op setup & beginner tips for the Steam game How to Fish.",
  // TODO(user): set up Cloudflare Email Routing so this address forwards to you.
  contactEmail: "contact@howtofishthegame.com",
} as const;

/**
 * Primary nav — kept in one place so header/footer/sitemap stay in sync.
 * NOTE: game-qualified pages only. We never target the head term "how to fish"
 * (owned by literal fishing-tutorial authorities); we win the long tail.
 */
export const NAV: { href: string; label: string }[] = [
  { href: "/fish-list/", label: "Fish List" },
  { href: "/bosses/", label: "Bosses" },
  { href: "/achievements/", label: "Achievements" },
  { href: "/multiplayer/", label: "Co-op" },
  { href: "/controls/", label: "Controls" },
  { href: "/beginner-guide/", label: "Beginner Guide" },
  { href: "/faq/", label: "FAQ" },
];

/** Footer / legal + info pages. */
export const LEGAL_NAV: { href: string; label: string }[] = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms" },
];
