import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Arrow } from "@/components/ui/Arrow";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Business Loans & Card Machines Comparison | West Coast Services UK",
  description:
    "Compare UK business loans and merchant services card machines. Fast decision commercial finance, low-fee contactless payment terminals, and transparent fee disclosures.",
};

export default function FinanceHubPage() {
  const financeServices = services.filter((s) => s.group === "finance");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Finance & Card Machines", url: "/services/finance" },
  ]);

  return (
    <div className="bg-paper text-ink pb-16 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10">
        <SectionLabel>Category B — Commercial Finance &amp; Payments</SectionLabel>
        <div className="flex flex-wrap gap-6 sm:gap-8 items-end justify-between mt-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] max-w-4xl break-words">
            Power your business growth and take customer payments effortlessly.
          </h1>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-ink-2 leading-relaxed m-0">
            Tailored commercial loans and low-fee card machines for UK companies. Honest rate comparisons, written commission disclosure, and no upfront broker fees.
          </p>
        </div>
        <div className="h-1.5 w-36 sm:w-44 bg-signal mt-6 animate-grow" />

        {/* Live Finance Desk Status Ribbon */}
        <div className="mt-8 sm:mt-10 p-4 rounded-[4px] border-2 border-ink bg-paper-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-blink" />
            <span className="font-bold text-ink uppercase tracking-wider">
              Finance &amp; Merchant Desk: Active Lender &amp; Terminal Matching
            </span>
          </div>
          <div className="text-muted text-[11px] uppercase tracking-wider">
            Soft Credit Searches · Next-Day Settlement · FCA Regulated Panel Lenders
          </div>
        </div>
      </section>

      {/* 2 Finance Service Cards */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {financeServices.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="group flex flex-col border-2 border-line rounded-[6px] overflow-hidden bg-paper-2 hover:border-ink transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative bg-stone">
                <PhotoSlot
                  src={c.photo.src}
                  alt={c.photo.alt}
                  brief={c.photo.brief}
                  className="h-full rounded-none border-0 group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-ink/95 text-on-dark font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-[2px] shadow-sm">
                  #{c.num} Finance
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-muted block">
                    Transparent market comparison
                  </span>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                    {c.name}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-2 leading-relaxed m-0">
                    {c.cardLine}
                  </p>
                </div>
                <div className="pt-4 border-t border-line/60 flex items-center justify-between text-sm sm:text-base font-bold text-ink">
                  <span>View rates &amp; options</span>
                  <Arrow className="group-hover:translate-x-1.5 transition-transform" size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Sell Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <div className="border-2 border-ink rounded-[6px] p-6 sm:p-10 bg-stone flex flex-wrap justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
              Looking for Energy &amp; Utilities?
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink m-0">
              Cut what you spend on electricity, gas and water
            </h3>
            <p className="text-sm sm:text-base text-ink-2 m-0 leading-relaxed">
              We also compare commercial electricity, gas, water and waste contracts across every UK supplier with transparent written commission.
            </p>
          </div>
          <Button variant="primary" href="/services/utilities">
            View Utility Services
          </Button>
        </div>
      </section>

      {/* Free Check CTA */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-signal rounded-[6px] p-8 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8 text-ink">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
            Want to check loan eligibility or compare your card terminal fees?
          </h2>
          <Button
            variant="primary"
            href="/contact"
            size="large"
            className="w-full sm:w-auto text-center bg-ink text-on-dark hover:bg-ink-2"
          >
            Request a free quote
          </Button>
        </div>
      </section>
    </div>
  );
}
