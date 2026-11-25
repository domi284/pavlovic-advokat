"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { TURNSTILE_SCRIPT, turnstileSiteKey } from "@/lib/turnstile";

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<TurnstileApi> | null = null;

/** Skript Cloudflare sa načíta iba raz a až keď je formulár blízko obrazovky. */
function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.defer = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("turnstile")));
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("turnstile"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export type TurnstileHandle = { reset: () => void };

/**
 * Widget Cloudflare Turnstile (režim managed sa nastavuje v Cloudflare pri site key).
 * Téma light, jazyk sk. Šírka „flexible“ na celú šírku formulára; na telefónoch užších ako 340 px „compact“.
 */
export const Turnstile = forwardRef<
  TurnstileHandle,
  { onToken: (token: string | null) => void; onError?: () => void; className?: string }
>(function Turnstile({ onToken, onError, className }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const callbacks = useRef({ onToken, onError });
  callbacks.current = { onToken, onError };

  useImperativeHandle(ref, () => ({
    reset: () => {
      callbacks.current.onToken(null);
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !turnstileSiteKey) return;
    let cancelled = false;

    const render = async () => {
      try {
        const api = await loadTurnstile();
        if (cancelled || widgetId.current) return;
        widgetId.current = api.render(el, {
          sitekey: turnstileSiteKey,
          theme: "light",
          language: "sk",
          // na celú šírku formulára (Cloudflare: min. 300 px); pod 340 px má formulár iba 280 px, preto tam „compact“
          size: el.clientWidth >= 300 ? "flexible" : "compact",
          action: "kontakt",
          "refresh-expired": "auto",
          callback: (token: string) => callbacks.current.onToken(token),
          "expired-callback": () => callbacks.current.onToken(null),
          "error-callback": () => {
            callbacks.current.onToken(null);
            callbacks.current.onError?.();
          },
        });
      } catch {
        callbacks.current.onError?.();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          void render();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  return <div ref={containerRef} className={className} />;
});
