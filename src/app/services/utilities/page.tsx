import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Arrow } from "@/components/ui/Arrow";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Business Energy & Utilities Comparison | West Coast Services UK",
  description:
    "Whole-of-market comparison for UK business electricity, gas, water and commercial waste contracts. Transparent commission, bill auditing, zero rollover traps.",
};

export default function UtilitiesHubPage() {
  const utils = services.filter((s) => s.group === "utilities");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Energy & Utilities", url: "/services/utilities" },
  ]);

  return (
    <div className="bg-paper text-ink pb-16 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10">
        <SectionLabel>Category A — Commercial Utilities</SectionLabel>
        <div className="flex flex-wrap gap-6 sm:gap-8 items-end justify-between mt-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] max-w-4xl break-words">
            Cut your business energy, water and waste overheads.
          </h1>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-ink-2 leading-relaxed m-0">
            Four whole-of-market services comparing every UK supplier. Honest advice, transparent commission written down before you sign, and zero rollover traps.
          </p>
        </div>
        <div className="h-1.5 w-36 sm:w-44 bg-signal mt-6 animate-grow" />

        {/* Live Wholesale Market Status Ribbon */}
        <div className="mt-8 sm:mt-10 p-4 rounded-[4px] border-2 border-ink bg-paper-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-blink" />
            <span className="font-bold text-ink uppercase tracking-wider">
              Wholesale Energy Desk: Active Market Tendering
            </span>
          </div>
          <div className="text-muted text-[11px] uppercase tracking-wider">
            Ofgem TPI Code · Fully Independent · Letter of Authority Protected
          </div>
        </div>
      </section>

      {/* 4 Utility Service Cards */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {utils.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="group flex flex-col border-2 border-line rounded-[6px] overflow-hidden bg-paper-2 hover:border-ink transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative bg-stone">
                <PhotoSlot
                  src={c.photo.src}
                  alt={c.photo.alt}
                  brief={c.photo.brief}
                  className="h-full rounded-none border-0 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-ink/95 text-on-dark font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-[2px] shadow-sm">
                  #{c.num} Utility
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-muted block">
                    Whole-of-market audit
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                    {c.name}
                  </h2>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    {c.cardLine}
                  </p>
                </div>
                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-sm font-bold text-ink">
                  <span>View tariff options</span>
                  <Arrow className="group-hover:translate-x-1.5 transition-transform" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Sell to Digital */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <div className="border-2 border-ink rounded-[6px] p-6 sm:p-10 bg-stone flex flex-wrap justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
              Looking for Marketing?
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink m-0">
              Explore our In-House Digital Marketing &amp; Web Studio
            </h3>
            <p className="text-sm sm:text-base text-ink-2 m-0 leading-relaxed">
              We also design custom high-converting business websites, run local Google Ads, manage organic social media, and boost search engine rankings.
            </p>
          </div>
          <Button variant="primary" href="/services/digital">
            Visit Digital Studio
          </Button>
        </div>
      </section>

      {/* Free Bill Check CTA */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-signal rounded-[6px] p-8 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8 text-ink">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
            Got an electricity, gas or water bill? Let&apos;s check it for free.
          </h2>
          <Button
            variant="primary"
            href="/contact"
            size="large"
            className="w-full sm:w-auto text-center"
          >
            Send bill for audit
          </Button>
        </div>
      </section>
    </div>
  );
}
