import Script from "next/script";

/**
 * Adsterra units - paste the script src from the dashboard here after creating
 * each unit (publishers.adsterra.com → Websites → howtofishthegame.com →
 * Add ad unit). Empty string = unit disabled.
 * TODO(user): create the site + units, then fill socialBar (and optionally popunder).
 */
export const ADSTERRA = {
  /** Social Bar - sticky bar, Adsterra's top eCPM no-slot format. */
  socialBar: "",
  /** Popunder - highest CPM, hurts UX. Enable only if you want max revenue. */
  popunder: "",
} as const;

/** Global Adsterra units - rendered once in the root layout, runs on every page. */
export function AdsterraGlobal() {
  return (
    <>
      {ADSTERRA.socialBar && (
        <Script src={ADSTERRA.socialBar} strategy="lazyOnload" data-cfasync="false" />
      )}
      {ADSTERRA.popunder && (
        <Script src={ADSTERRA.popunder} strategy="lazyOnload" data-cfasync="false" />
      )}
    </>
  );
}
