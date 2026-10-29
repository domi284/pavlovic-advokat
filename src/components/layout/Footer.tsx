import Link from "next/link";
import { footer, serviceNav } from "@/content/common";
import { footerNav } from "@/content/02-mapa-webu";
import { typo } from "@/lib/typo";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Rich } from "@/components/ui/Rich";

export function Footer() {
  return (
    <footer id="site-footer" data-doc="9.2" className="on-dark bg-ink text-chalk">
      <Container className="pt-20 pb-10 md:pt-24">
        <div className="flex flex-col gap-10 border-b border-chalk/15 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="self-start">
            <Logo variant="dark" />
          </Link>
          <nav aria-label="Navigácia v pätičke">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-chalk-muted transition-colors hover:text-chalk">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-12">
          <address data-doc="9.2" className="text-[15px] leading-[1.8] not-italic text-chalk-muted lg:col-span-4">
            <p className="mb-2 font-semibold text-chalk">{typo(footer.company)}</p>
            {footer.lines.map((line) => (
              <p key={line}>
                <Rich text={line} />
              </p>
            ))}
          </address>

          <nav aria-label="Právne informácie" className="lg:col-span-2">
            <ul className="space-y-2.5 text-[15px]">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-chalk-muted transition-colors hover:text-chalk">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Služby" className="lg:col-span-3">
            <ul className="space-y-2.5 text-[15px]">
              {serviceNav.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-chalk-muted transition-colors hover:text-chalk">
                    {service.label}{service.badge ? ` · ${service.badge}` : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div data-doc="9.2" className="text-[13px] leading-[1.7] text-chalk/60 md:col-span-2 lg:col-span-3">
            <p className="mb-2 font-semibold tracking-[0.14em] text-sand uppercase">{footer.noticeLabel}</p>
            <p>{typo(footer.notice)}</p>
          </div>
        </div>

        <div className="border-t border-chalk/15 pt-8 text-[13px] text-chalk/60">
          <p>{footer.copyright(new Date().getFullYear())}</p>
        </div>
      </Container>
    </footer>
  );
}
