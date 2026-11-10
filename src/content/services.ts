import { serviceDetails, serviceDetailBySlug } from "./04-sluzby";

export type ServiceItem = {
  slug: string;
  name: string;
  badge?: string;
  summary: string;
  description: string;
  href: string;
};

export const CRIMINAL_BADGE = "Iba pre stálych klientov";

/** Služby v poradí `servicesOrder`. */
export const services: ServiceItem[] = serviceDetails.map((service) => ({
  slug: service.slug,
  name: service.name,
  ...(service.slug === "trestne-pravo" && { badge: CRIMINAL_BADGE }),
  summary: service.cardDescription,
  description: service.cardDescription,
  href: `/sluzby/${service.slug}`,
}));

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceItem>;

export const serviceNav = services.map((service) => ({
  label: service.name,
  href: service.href,
  ...(service.badge && { badge: service.badge }),
}));

export { serviceDetails, serviceDetailBySlug };
