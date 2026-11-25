"use client";

import { openCookieSettings } from "@/lib/consent";

/** Odkaz v pätičke, ktorý znovu otvorí nastavenia cookies. */
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {label}
    </button>
  );
}
