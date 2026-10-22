export const CONSENT_KEY = "pavlovic-cookie-consent";

export type ConsentValue = "all" | "necessary";

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "all" || value === "necessary" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage nemusí byť dostupný (súkromné okno), voľba platí len pre reláciu
  }
}

/** Analytika sa smie spustiť iba ak používateľ prijal všetky cookies. */
export function hasAnalyticsConsent(): boolean {
  return readConsent() === "all";
}
