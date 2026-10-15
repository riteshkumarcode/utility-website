import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[#C9CBC4] overflow-hidden border-t border-line-dark">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        {/* 4 Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              className="font-display font-black text-3xl text-on-dark tracking-[-0.03em] hover:text-signal transition-colors inline-block"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px] text-[#A6AAA0] m-0">
              Business utilities and digital marketing for UK companies. {siteConfig.address.town}, {siteConfig.address.county}.
            </p>
          </div>

          {/* Col 2: Utilities */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <Link
              href="/services/utilities"
              className="font-mono text-xs uppercase tracking-[0.12em] text-signal font-bold hover:underline mb-1"
            >
              Energy &amp; Utilities Hub →
            </Link>
            <Link
              href="/services/business-electricity"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Business electricity
            </Link>
            <Link
              href="/services/business-gas"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Business gas
            </Link>
            <Link
              href="/services/business-water"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Business water
            </Link>
            <Link
              href="/services/waste-management"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Waste management
            </Link>
          </div>

          {/* Col 3: Digital */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <Link
              href="/services/digital"
              className="font-mono text-xs uppercase tracking-[0.12em] text-signal font-bold hover:underline mb-1"
            >
              Digital Studio Hub →
            </Link>
            <Link
              href="/services/website-development"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Website development
            </Link>
            <Link
              href="/services/social-media-marketing"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Social media
            </Link>
            <Link
              href="/services/seo"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              SEO
            </Link>
            <Link
              href="/services/paid-advertising"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Paid ads
            </Link>
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-[#8B8F86] mb-1">
              Company
            </div>
            <Link
              href="/services"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              All services
            </Link>
            <Link
              href="/about"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Contact
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="font-mono text-sm text-signal font-semibold hover:underline mt-2 self-start"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Giant Faint VELTRO Wordmark */}
        <div
          aria-hidden="true"
          className="font-display font-black text-[#1E221E] text-[clamp(80px,18vw,260px)] leading-[0.82] tracking-[-0.04em] mt-14 select-none whitespace-nowrap overflow-hidden pointer-events-none"
        >
          {siteConfig.name.toUpperCase()}
        </div>

        {/* Legal Row */}
        <div className="border-t border-line-dark mt-6 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-[#8B8F86] leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              © 2026 {siteConfig.legalName}. Registered in England &amp; Wales, no. {siteConfig.companyNumber}.
            </span>
            <Link href="/privacy" className="hover:text-on-dark underline">
              Privacy Notice
            </Link>
            <Link href="/cookies" className="hover:text-on-dark underline">
              Cookie Policy
            </Link>
          </div>
          <div className="max-w-md text-right md:text-left">
            <span>{siteConfig.commissionStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
