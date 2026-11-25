"use client";

import { useEffect, useState } from "react";

/**
 * Súhlas s cookies a externým obsahom.
 * Uloží sa do localStorage aj s dátumom a verziou. Po 12 mesiacoch alebo pri zmene
 * `CONSENT_VERSION` sa lišta zobrazí znova.
 *
 * Novú kategóriu (napr. analytika s cookies) pridáte takto:
 * 1. doplňte kľúč do `ConsentCategory` a `OPTIONAL_CATEGORIES`,
 * 2. doplňte jej popis do `cookieConsent.categories` v `src/content/01-pravidla.ts`,
 * 3. zvýšte `CONSENT_VERSION`, aby sa návštevníci rozhodli znova,
 * 4. obsah načítajte iba ak `hasConsent("kluc")`.
 */

export const CONSENT_KEY = "pavlovic-cookie-consent";
export const CONSENT_VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type ConsentCategory = "necessary" | "maps";
/** Kategórie, ktoré si návštevník môže zapnúť alebo vypnúť (nevyhnutné sú vždy zapnuté). */
export const OPTIONAL_CATEGORIES = ["maps"] as const satisfies readonly Exclude<ConsentCategory, "necessary">[];
export type OptionalCategory = (typeof OPTIONAL_CATEGORIES)[number];
export type ConsentChoices = Record<OptionalCategory, boolean>;

export type Consent = {
  version: number;
  /** ISO dátum udelenia súhlasu */
  date: string;
  categories: { necessary: true } & ConsentChoices;
};

/** Udalosť po zmene súhlasu (detail: Consent | null). */
export const CONSENT_EVENT = "cookie-consent-changed";
/** Udalosť, ktorá otvorí nastavenia cookies (napr. z pätičky). */
export const OPEN_SETTINGS_EVENT = "cookie-settings-open";
/** Udalosť o viditeľnosti cookie lišty (detail: boolean), napr. pre asistentku. */
export const BAR_VISIBILITY_EVENT = "cookie-bar-visibility";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<Consent>;
    if (value?.version !== CONSENT_VERSION || typeof value.date !== "string" || !value.categories) return null;
    const age = Date.now() - new Date(value.date).getTime();
    if (!Number.isFinite(age) || age > MAX_AGE_MS || age < 0) return null;
    const categories = { necessary: true } as Consent["categories"];
    for (const key of OPTIONAL_CATEGORIES) categories[key] = value.categories[key] === true;
    return { version: CONSENT_VERSION, date: value.date, categories };
  } catch {
    return null;
  }
}

export function writeConsent(choices: ConsentChoices): Consent {
  const consent: Consent = {
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    categories: { necessary: true, ...choices },
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // localStorage nemusí byť dostupný (súkromné okno): voľba platí iba do zatvorenia stránky
  }
  memory = consent;
  window.dispatchEvent(new CustomEvent<Consent | null>(CONSENT_EVENT, { detail: consent }));
  return consent;
}

/** Záloha, ak localStorage nefunguje: voľba platí aspoň do obnovenia stránky. */
let memory: Consent | null = null;

export function currentConsent(): Consent | null {
  return readConsent() ?? memory;
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  return currentConsent()?.categories[category] === true;
}

export const allChoices = (value: boolean) =>
  Object.fromEntries(OPTIONAL_CATEGORIES.map((key) => [key, value])) as ConsentChoices;

/** Udelí súhlas pre jednu kategóriu a ostatné voľby ponechá (napr. tlačidlo „Zobraziť mapu“). */
export function grantCategory(category: OptionalCategory) {
  const current = currentConsent();
  writeConsent({ ...(current ? pick(current) : allChoices(false)), [category]: true });
}

function pick(consent: Consent): ConsentChoices {
  return Object.fromEntries(OPTIONAL_CATEGORIES.map((key) => [key, consent.categories[key]])) as ConsentChoices;
}

/** Posledný známy stav cookie lišty (aby ho komponenty, ktoré sa pripoja neskôr, nezmeškali). */
let barOpen = false;
export const isCookieBarOpen = () => barOpen;
export function setCookieBarOpen(open: boolean) {
  if (barOpen === open) return;
  barOpen = open;
  window.dispatchEvent(new CustomEvent<boolean>(BAR_VISIBILITY_EVENT, { detail: open }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/** Aktuálny súhlas v Reacte; pred hydratáciou `undefined` (ešte nevieme). */
export function useConsent(): Consent | null | undefined {
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);
  useEffect(() => {
    setConsent(currentConsent());
    const onChange = () => setConsent(currentConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  return consent;
}
