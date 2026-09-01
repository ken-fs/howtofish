# How to Fish Hub — howtofishthegame.com

Independent fan guide site for the Steam game **How to Fish** (App 4001890, Dazed Games).
Fish list, all 28 achievements, co-op setup, beginner guide and FAQ.

Static Next.js site (`output: export`) → deploys as static assets.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploy — Cloudflare Pages (GitHub integration)

Connect this repo in the Cloudflare dashboard (Workers & Pages → Create → Pages → Connect to Git) with:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 |

Then add the custom domain `howtofishthegame.com` in the Pages project.

## Strategy notes

- Despite the name, the game is a physics **shooter** (catch → kill → sell creatures). Copy reflects real gameplay.
- We never target the head term "how to fish" (owned by literal fishing-tutorial sites) — only game-qualified long-tail.
- Unverified data (weapon prices, how-long-to-beat, per-fish values) is intentionally omitted, not guessed.

See `PROJECT.md` for the full plan.
