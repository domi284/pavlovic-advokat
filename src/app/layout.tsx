import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AssistantWidget } from "@/components/layout/AssistantWidget";
import { CookieBar } from "@/components/layout/CookieBar";
import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/layout/Grain";
import { Header } from "@/components/layout/Header";
import { MobileBar } from "@/components/layout/MobileBar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ui } from "@/content/common";
import { pageSeo } from "@/content/10-seo";
import { legalServiceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  applicationName: site.company,
  authors: [{ name: site.name }],
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F6F3EE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#obsah"
          className="fixed top-3 left-3 z-[80] -translate-y-24 rounded-xs bg-ink px-5 py-3 text-[14px] font-semibold text-chalk transition-transform focus:translate-y-0"
        >
          {ui.skipLink}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd()) }}
        />
        <SmoothScroll>
          <Header />
          <main id="obsah" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <MobileBar />
          <CookieBar />
          <AssistantWidget />
        </SmoothScroll>
        <Grain />
      </body>
    </html>
  );
}
