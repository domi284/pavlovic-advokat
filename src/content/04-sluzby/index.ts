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

export const serviceDetails = [
  s4_3_dopravneNehody,
  s4_4_obchodnePravo,
  s4_5_obcianskePravo,
  s4_6_rodinnePravo,
  s4_7_spravnePravo,
  s4_8_dusevneVlastnictvo,
  s4_9_patentovePravo,
  s4_10_kybernetickePravo,
  s4_11_trestnePravo,
] satisfies ServiceDetail[];

export const serviceDetailBySlug = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service]),
) as Record<string, ServiceDetail>;
