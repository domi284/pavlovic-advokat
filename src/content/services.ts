import { serviceDetails, serviceDetailBySlug } from "./04-sluzby";

export type ServiceItem = {
  slug: string;
  name: string;
  badge?: string;
  summary: string;
  description: string;
  href: string;
};

export const services: ServiceItem[] = serviceDetails.map((service) => ({
  slug: service.slug,
  name: service.name,
  ...(service.slug === "trestne-pravo" && { badge: "Iba pre stálych klientov" }),
  summary: service.cardDescription,
  description: service.cardDescription,
  href: `/sluzby/${service.slug}`,
}));

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceItem>;

export { serviceDetails, serviceDetailBySlug };
