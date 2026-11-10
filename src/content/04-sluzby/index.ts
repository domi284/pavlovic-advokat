import { servicesOrder } from "../02-mapa-webu";
import type { ServiceDetail } from "../types";
import { s4_3_dopravneNehody } from "./4-3-dopravne-nehody";
import { s4_4_obchodnePravo } from "./4-4-obchodne-pravo";
import { s4_5_obcianskePravo } from "./4-5-obcianske-pravo";
import { s4_6_rodinnePravo } from "./4-6-rodinne-pravo";
import { s4_7_spravnePravo } from "./4-7-spravne-pravo";
import { s4_8_dusevneVlastnictvo } from "./4-8-dusevne-vlastnictvo";
import { s4_9_patentovePravo } from "./4-9-patentove-pravo";
import { s4_10_kybernetickePravo } from "./4-10-kyberneticke-pravo";
import { s4_11_trestnePravo } from "./4-11-trestne-pravo";
import { s4_12_pracovnePravo } from "./4-12-pracovne-pravo";

const all: ServiceDetail[] = [
  s4_3_dopravneNehody,
  s4_4_obchodnePravo,
  s4_5_obcianskePravo,
  s4_6_rodinnePravo,
  s4_7_spravnePravo,
  s4_8_dusevneVlastnictvo,
  s4_9_patentovePravo,
  s4_10_kybernetickePravo,
  s4_11_trestnePravo,
  s4_12_pracovnePravo,
];

export const serviceDetailBySlug = Object.fromEntries(
  all.map((service) => [service.slug, service]),
) as Record<string, ServiceDetail>;

/** Služby v poradí podľa `servicesOrder` (02-mapa-webu.ts). */
export const serviceDetails: ServiceDetail[] = servicesOrder.map((slug) => {
  const service = serviceDetailBySlug[slug];
  if (!service) throw new Error(`Chýba obsah služby „${slug}“`);
  return service;
});
