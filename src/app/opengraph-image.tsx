import { ImageResponse } from "next/og";
import { logo } from "@/content/common";
import { home } from "@/content/home";
import { loadGoogleFont } from "@/lib/og-fonts";

export const alt = "JUDr. Ladislav Pavlovič, advokát · Bratislava";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1C1D20";
const CHALK = "#F6F3EE";
const SAND = "#C8B79F";
const BORDEAUX = "#6E1E2B";

export default async function OpengraphImage() {
  const tagline = home.hero.eyebrow; // „Advokát · Bratislava“
  const [serif, sans] = await Promise.all([
    loadGoogleFont("Cormorant Garamond", 600, `LP${logo.name}`),
    loadGoogleFont("Manrope", 600, `${logo.role.toUpperCase()}${tagline.toUpperCase()}`),
  ]);
  const fonts = [
    serif && { name: "Cormorant", data: serif, weight: 600 as const, style: "normal" as const },
    sans && { name: "Manrope", data: sans, weight: 600 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => !!f);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: INK,
          color: CHALK,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 132,
              height: 132,
              border: `3px solid ${CHALK}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Cormorant",
              fontSize: 72,
              letterSpacing: -6,
              paddingTop: 6,
            }}
          >
            LP
          </div>
          <div style={{ width: 3, height: 96, background: SAND, margin: "0 42px" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Cormorant", fontSize: 64, lineHeight: 1.1 }}>{logo.name}</div>
            <div
              style={{
                fontFamily: "Manrope",
                fontSize: 24,
                letterSpacing: 9,
                color: "rgba(246,243,238,.68)",
                marginTop: 12,
              }}
            >
              {logo.role.toUpperCase()}
            </div>
          </div>
        </div>
        <div style={{ width: 120, height: 2, background: BORDEAUX, margin: "64px 0 32px" }} />
        <div style={{ fontFamily: "Manrope", fontSize: 26, letterSpacing: 6, color: SAND }}>
          {tagline.toUpperCase()}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
