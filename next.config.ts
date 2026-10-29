import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    {
      source: "/dopravne-nehody",
      destination: "/sluzby/dopravne-nehody",
      permanent: true,
    },
    {
      source: "/trestne-pravo",
      destination: "/sluzby/trestne-pravo",
      permanent: true,
    },
    {
      source: "/obchodne-pravo",
      destination: "/sluzby/obchodne-pravo",
      permanent: true,
    },
  ],
};

export default nextConfig;
