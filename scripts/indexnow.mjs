#!/usr/bin/env node
/**
 * Submit all site URLs to IndexNow (Bing, Yandex, Seznam, etc.).
 * Pulls the live sitemap so it always submits the current page set.
 *
 * Usage: node scripts/indexnow.mjs
 *
 * The key file must be live at https://<host>/<KEY>.txt first (it ships in
 * /public and deploys with the site). Re-run this after publishing new pages.
 */

const HOST = "howtofishthegame.com";
const KEY = "62b87416ba9613e7426902187b379f76";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const xml = await (await fetch(SITEMAP)).text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urlList.length === 0) throw new Error("No URLs found in sitemap");

  console.log(`Submitting ${urlList.length} URLs to IndexNow…`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // IndexNow returns 200 or 202 on success; body is usually empty.
  console.log(`Status: ${res.status} ${res.statusText}`);
  const body = await res.text();
  if (body) console.log(body);
  if (![200, 202].includes(res.status)) process.exit(1);
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
