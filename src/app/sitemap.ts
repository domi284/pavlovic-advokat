import type { MetadataRoute } from "next";
import { servicesOrder } from "@/content/02-mapa-webu";
import { site } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/sluzby", priority: 0.9 },
  ...servicesOrder.map((slug) => ({ path: `/sluzby/${slug}`, priority: 0.8 })),
  { path: "/o-mne", priority: 0.7 },
  { path: "/nas-tim", priority: 0.6 },
  { path: "/preco-my", priority: 0.6 },
  { path: "/referencie", priority: 0.6 },
  { path: "/kontakt", priority: 0.8 },
  { path: "/caste-otazky", priority: 0.6 },
  { path: "/ochrana-osobnych-udajov", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
