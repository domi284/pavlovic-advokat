import { LegalPage } from "@/components/sections/LegalPage";
import { cookiesPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(cookiesPolicy.meta);

export default function CookiesPage() {
  return <LegalPage content={cookiesPolicy} />;
}
