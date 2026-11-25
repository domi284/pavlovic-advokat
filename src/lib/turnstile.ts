/**
 * Cloudflare Turnstile. V developmente sa používajú oficiálne testovacie kľúče
 * (overenie vždy prejde), v produkcii kľúče z env (Vercel / .env.local).
 * Kľúče sem nikdy nepíšte natvrdo, okrem verejných testovacích kľúčov Cloudflare.
 */

const isDev = process.env.NODE_ENV === "development";

/** Oficiálne testovacie kľúče Cloudflare: https://developers.cloudflare.com/turnstile/troubleshooting/testing/ */
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";
export const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

/** Verejný site key (do prehliadača). */
export const turnstileSiteKey = isDev ? TURNSTILE_TEST_SITE_KEY : (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "");

export const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
export const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
