import { pageSeo } from "./10-seo";
import { s9_2_cookies } from "./09-cookies";
import { s9_2_ochranaOsobnychUdajov } from "./09-ochrana-osobnych-udajov";

export const privacy = { meta: pageSeo.privacy, ...s9_2_ochranaOsobnychUdajov };

export const cookiesPolicy = { meta: pageSeo.cookies, ...s9_2_cookies };
