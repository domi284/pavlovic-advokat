import { LegalPage } from "@/components/sections/LegalPage";
import { cookiesPolicy } from "@/content/legal";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.cookies);

export default function CookiesPage() {
  return <LegalPage content={cookiesPolicy} />;
}
