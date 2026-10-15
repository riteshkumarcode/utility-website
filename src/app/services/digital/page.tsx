import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Arrow } from "@/components/ui/Arrow";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Studio | Veltro UK",
  description:
    "Tailored digital growth for UK businesses: fast Next.js websites, organic social management, local SEO, and ROI-focused Google Ads. Clear deliverables, no lock-ins.",
};

export default function DigitalHubPage() {
  const digitalServices = services.filter((s) => s.group === "digital");
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Digital Marketing", url: "/services/digital" },
  ]);

  return (
    <div className="bg-paper text-ink pb-16 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10">
        <SectionLabel>Category B — Digital Marketing &amp; Web Studio</SectionLabel>
        <div className="flex flex-wrap gap-6 sm:gap-8 items-end justify-between mt-4">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] max-w-4xl break-words">
            Modern websites, SEO and paid ads that generate qualified UK leads.
          </h1>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-ink-2 leading-relaxed m-0">
            Four tailored digital marketing and development services built for UK SMEs. Clear deliverables, full asset ownership, transparent reporting, and zero vanity metrics.
          </p>
        </div>
        <div className="h-1.5 w-36 sm:w-44 bg-rust mt-6 animate-grow" />

        {/* Live Studio Status Ribbon */}
        <div className="mt-8 sm:mt-10 p-4 rounded-[4px] border-2 border-ink bg-paper-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-blink" />
            <span className="font-bold text-ink uppercase tracking-wider">
              Studio Desk: Accepting New Client Sprints
            </span>
          </div>
          <div className="text-muted text-[11px] uppercase tracking-wider">
            UK In-House Team · 100% Client Code Ownership · Transparent Fixed Sprints
          </div>
        </div>
      </section>

      {/* 4 Digital Service Cards */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalServices.map((c) => (
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
                <div className="absolute top-3 left-3 bg-rust text-on-dark font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-[2px] shadow-sm">
                  #{c.num} Studio
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-muted block">
                    Tailored Growth Engine
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                    {c.name}
                  </h2>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    {c.cardLine}
                  </p>
                </div>
                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-sm font-bold text-ink">
                  <span>Explore deliverables &amp; plans</span>
                  <Arrow className="group-hover:translate-x-1.5 transition-transform" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-Sell to Utilities */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
        <div className="border-2 border-ink rounded-[6px] p-6 sm:p-10 bg-stone flex flex-wrap justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
              Looking for Energy &amp; Utilities?
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink m-0">
              Cut Electricity, Gas, Water &amp; Waste Bills
            </h3>
            <p className="text-sm sm:text-base text-ink-2 m-0 leading-relaxed">
              We compare whole-of-market UK commercial energy tariffs, secure wholesale rates, and audit your bills for unfair standing charges and rollover traps.
            </p>
          </div>
          <Button variant="primary" href="/services/utilities">
            Compare Utilities
          </Button>
        </div>
      </section>

      {/* Digital Consultation CTA */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-ink text-on-dark rounded-[6px] p-8 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 text-white">
              Ready to upgrade your website or drive more qualified enquiries?
            </h2>
            <p className="text-muted text-sm sm:text-base m-0">
              Book a no-obligation 20-minute digital strategy consultation with our UK team.
            </p>
          </div>
          <Button
            variant="primary"
            href="/contact"
            size="large"
            className="w-full sm:w-auto text-center"
          >
            Book strategy call
          </Button>
        </div>
      </section>
    </div>
  );
}
