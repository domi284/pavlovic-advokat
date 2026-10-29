import { pageSeo } from "./10-seo";
import { s9_2_footer } from "./09-asistentka-paticka";

export const privacy = {
  meta: pageSeo.privacy,
  ...s9_2_footer.privacy,
  sectionPlaceholder: "DOPLNIŤ: text zásad pripraví advokátska kancelária",
};

export const cookiesPolicy = {
  meta: pageSeo.cookies,
  ...s9_2_footer.cookies,
  sectionPlaceholder: "DOPLNIŤ: text zásad pripraví advokátska kancelária",
};
