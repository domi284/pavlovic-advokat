import type { LegalDocument } from "./types";

/**
 * Stránka /cookies (blok 9.2). NÁVRH podľa auditu toho, čo web reálne ukladá a načítava;
 * čaká na schválenie kanceláriou (štítok riadi `site.showLegalDraftBadge`).
 * Pri pridaní novej služby s cookies doplňte riadok do tabuľky aj kategóriu v src/lib/consent.ts.
 */
export const s9_2_cookies = {
  h1: "Zásady používania cookies",
  intro:
    "Používame iba to, čo je pre fungovanie stránky nevyhnutné. Obsah tretích strán, ktorý môže ukladať cookies (mapa Google Maps), načítame až s Vaším súhlasom.",
  sections: [
    {
      id: "co-su-cookies",
      title: "Čo sú cookies",
      blocks: [
        {
          type: "p",
          text: "Cookies sú malé textové súbory, ktoré si webová stránka ukladá vo Vašom prehliadači. Podobne funguje aj úložisko prehliadača (localStorage). Stránka si vďaka nim zapamätá napríklad Vašu voľbu.",
        },
        { type: "p", text: "Vlastné cookies na sledovanie ani na reklamu nepoužívame." },
      ],
    },
    {
      id: "prehlad",
      title: "Čo konkrétne používame",
      blocks: [
        {
          type: "table",
          head: ["Názov", "Poskytovateľ", "Účel", "Doba", "Kategória"],
          rows: [
            [
              "pavlovic-cookie-consent (úložisko prehliadača)",
              "táto stránka",
              "uloží Vašu voľbu cookies, aby sme sa Vás nepýtali znova",
              "12 mesiacov",
              "Nevyhnutné",
            ],
            [
              "Cloudflare Turnstile",
              "Cloudflare, Inc.",
              "ochrana kontaktného formulára pred spamom a robotmi; načíta sa iba pri formulári na stránke Kontakt",
              "iba počas overenia; podľa Cloudflare nepoužíva cookies na sledovanie ani reklamu",
              "Nevyhnutné",
            ],
            [
              "Google Maps (napr. NID, AEC, SOCS)",
              "Google Ireland Limited",
              "zobrazenie mapy na stránke Kontakt",
              "podľa Google, spravidla 6 až 13 mesiacov",
              "Externý obsah – mapy (iba s Vaším súhlasom)",
            ],
            [
              "Vercel Web Analytics",
              "Vercel Inc.",
              "anonymná štatistika návštevnosti",
              "nič neukladá vo Vašom zariadení, bez cookies",
              "Bez cookies, súhlas netreba",
            ],
          ],
        },
        {
          type: "p",
          text: "Písma webu sú uložené priamo na našom serveri, preto sa pri ich načítaní nekontaktuje Google Fonts.",
        },
      ],
    },
    {
      id: "nastavenia",
      title: "Ako zmeniť súhlas",
      blocks: [
        { type: "p", text: "Svoju voľbu môžete kedykoľvek zmeniť alebo súhlas odvolať:" },
        { type: "cookieSettings", label: "Nastavenia cookies" },
        { type: "p", text: "Odkaz Nastavenia cookies nájdete aj v pätičke každej stránky." },
      ],
    },
    {
      id: "zmazanie",
      title: "Ako cookies zmazať v prehliadači",
      blocks: [
        { type: "p", text: "Cookies a uložené údaje stránok môžete vymazať aj v nastaveniach prehliadača:" },
        {
          type: "list",
          items: [
            "Chrome: Nastavenia → Ochrana súkromia a zabezpečenie → Súbory cookie a ďalšie údaje webov",
            "Safari: Nastavenia → Súkromie → Spravovať údaje webových stránok",
            "Firefox: Nastavenia → Súkromie a bezpečnosť → Cookies a údaje stránok",
            "Edge: Nastavenia → Cookies a povolenia lokalít",
          ],
        },
        { type: "p", text: "Po vymazaní sa Vás na našej stránke opýtame na súhlas znova." },
      ],
    },
    {
      id: "ucinnost",
      title: "Účinnosť",
      blocks: [{ type: "p", text: "Tieto zásady sú účinné od [DOPLNIŤ: dátum účinnosti]." }],
    },
  ],
} satisfies LegalDocument;
