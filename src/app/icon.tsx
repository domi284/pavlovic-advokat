import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-fonts";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon: monogram „LP“ v --chalk na štvorci --bordeaux. */
export default async function Icon() {
  const serif = await loadGoogleFont("Cormorant Garamond", 600, "LP");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6E1E2B",
          color: "#F6F3EE",
          fontFamily: "Cormorant",
          fontSize: 40,
          letterSpacing: -3,
          paddingTop: 4,
        }}
      >
        LP
      </div>
    ),
    { ...size, fonts: serif ? [{ name: "Cormorant", data: serif, weight: 600, style: "normal" }] : [] },
  );
}
