"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { services } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Arrow } from "@/components/ui/Arrow";
import { motion, AnimatePresence } from "motion/react";

export function ServicesDirectoryClient() {
  const [filter, setFilter] = useState<"all" | "utilities" | "finance" | "digital">("all");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#utilities") {
        setFilter("utilities");
      } else if (hash === "#finance") {
        setFilter("finance");
      } else if (hash === "#digital") {
        setFilter("digital");
      } else {
        setFilter("all");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setFilterAndHash = (newFilter: "all" | "utilities" | "finance" | "digital") => {
    setFilter(newFilter);
    if (newFilter === "utilities") {
      window.location.hash = "#utilities";
    } else if (newFilter === "finance") {
      window.location.hash = "#finance";
    } else if (newFilter === "digital") {
      window.location.hash = "#digital";
    } else {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  const utils = services.filter((s) => s.group === "utilities");
  const finances = services.filter((s) => s.group === "finance");
  const digis = services.filter((s) => s.group === "digital");

  return (
    <div className="bg-paper text-ink pb-12">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <SectionLabel>All 10 Services</SectionLabel>
        <div className="flex flex-wrap gap-6 sm:gap-8 items-end justify-between mt-4 sm:mt-5">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.96] max-w-4xl break-words">
            Ten services. One trusted partner.
          </h1>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-ink-2 leading-relaxed m-0">
            Four that cut your utility bills, two for commercial finance and card machines, and four that build digital reach. Pick one, or let us look after the lot.
          </p>
        </div>
        <div className="h-1.5 w-36 sm:w-44 bg-signal mt-6 sm:mt-7 animate-grow" />

        {/* Filter Tabs */}
        <div
          role="group"
          aria-label="Filter services by category"
          className="inline-flex flex-wrap border-[1.5px] border-ink rounded-[4px] overflow-hidden mt-8 sm:mt-10 max-w-full"
        >
          <button
            type="button"
            onClick={() => setFilterAndHash("all")}
            aria-pressed={filter === "all"}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] font-bold border-r border-line transition-colors cursor-pointer min-h-[44px] sm:min-h-[48px] ${
              filter === "all" ? "bg-ink text-on-dark" : "bg-transparent text-ink hover:bg-stone/40"
            }`}
          >
            All Services (10)
          </button>
          <button
            type="button"
            onClick={() => setFilterAndHash("utilities")}
            aria-pressed={filter === "utilities"}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] font-bold border-r border-line transition-colors cursor-pointer min-h-[44px] sm:min-h-[48px] ${
              filter === "utilities" ? "bg-ink text-on-dark" : "bg-transparent text-ink hover:bg-stone/40"
            }`}
          >
            Energy &amp; Utilities (4)
          </button>
          <button
            type="button"
            onClick={() => setFilterAndHash("finance")}
            aria-pressed={filter === "finance"}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] font-bold border-r border-line transition-colors cursor-pointer min-h-[44px] sm:min-h-[48px] ${
              filter === "finance" ? "bg-ink text-on-dark" : "bg-transparent text-ink hover:bg-stone/40"
            }`}
          >
            Finance &amp; Card Machines (2)
          </button>
          <button
            type="button"
            onClick={() => setFilterAndHash("digital")}
            aria-pressed={filter === "digital"}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-[15px] font-bold transition-colors cursor-pointer min-h-[44px] sm:min-h-[48px] ${
              filter === "digital" ? "bg-ink text-on-dark" : "bg-transparent text-ink hover:bg-stone/40"
            }`}
          >
            Digital Marketing (4)
          </button>
        </div>
      </section>

      {/* Category A: Utilities Grid */}
      <AnimatePresence>
        {(filter === "all" || filter === "utilities") && (
          <motion.section
            key="utilities-section"
            id="utilities"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-10"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 pb-3.5 border-b-2 border-ink">
              <div>
                <span className="font-mono text-xs text-signal font-bold tracking-widest uppercase block mb-1">
                  Category A
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.03em] m-0">
                  UK Business Energy &amp; Utilities
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted tracking-wider uppercase hidden sm:inline">
                  Free Bill Audit · Paid by Supplier Commission
                </span>
                <Link
                  href="/services/utilities"
                  className="font-mono text-xs text-signal font-bold tracking-wider uppercase hover:underline"
                >
                  Dedicated Hub Page →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
              {utils.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group flex flex-col border-[1.5px] border-line rounded-[6px] overflow-hidden bg-paper-2 hover:border-ink transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-44 sm:h-48 overflow-hidden relative bg-stone">
                    <PhotoSlot
                      src={c.photo.src}
                      alt={c.photo.alt}
                      brief={c.photo.brief}
                      className="h-full rounded-none border-0 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-ink/90 text-on-dark font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[2px]">
                      Utility #{c.num}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-muted block">
                        Whole-of-market audit
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                        {c.name}
                      </h3>
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
          </motion.section>
        )}
      </AnimatePresence>

      {/* Category B: Finance & Card Machines Grid */}
      <AnimatePresence>
        {(filter === "all" || filter === "finance") && (
          <motion.section
            key="finance-section"
            id="finance"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-10 mt-6 sm:mt-8"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 pb-3.5 border-b-2 border-ink">
              <div>
                <span className="font-mono text-xs text-signal font-bold tracking-widest uppercase block mb-1">
                  Category B
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.03em] m-0">
                  Business Loans &amp; Card Machines
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted tracking-wider uppercase hidden sm:inline">
                  Soft Searches · Next-Day Payouts · Zero Hidden Fees
                </span>
                <Link
                  href="/services/finance"
                  className="font-mono text-xs text-signal font-bold tracking-wider uppercase hover:underline"
                >
                  Dedicated Hub Page →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {finances.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group flex flex-col sm:flex-row border-[1.5px] border-line rounded-[6px] overflow-hidden bg-paper-2 hover:border-ink transition-all duration-300 hover:shadow-md"
                >
                  <div className="sm:w-5/12 h-52 sm:h-auto overflow-hidden relative bg-stone shrink-0">
                    <PhotoSlot
                      src={c.photo.src}
                      alt={c.photo.alt}
                      brief={c.photo.brief}
                      className="h-full rounded-none border-0 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-ink/90 text-on-dark font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[2px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                      Finance #{c.num}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-muted block">
                        Commercial lending &amp; payments
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                        {c.name}
                      </h3>
                      <p className="text-sm text-ink-2 leading-relaxed m-0">
                        {c.cardLine}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-line/60 flex items-center justify-between text-sm font-bold text-ink">
                      <span>View rates &amp; options</span>
                      <Arrow className="group-hover:translate-x-1.5 transition-transform" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Category C: Digital Marketing Grid */}
      <AnimatePresence>
        {(filter === "all" || filter === "digital") && (
          <motion.section
            key="digital-section"
            id="digital"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-10 mt-6 sm:mt-8"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 pb-3.5 border-b-2 border-ink">
              <div>
                <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase block mb-1">
                  Category C
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.03em] m-0">
                  In-House Digital Marketing &amp; Web
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted tracking-wider uppercase hidden sm:inline">
                  Bespoke Code · 100% Owned by You
                </span>
                <Link
                  href="/services/digital"
                  className="font-mono text-xs text-emerald-700 font-bold tracking-wider uppercase hover:underline"
                >
                  Dedicated Hub Page →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
              {digis.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group flex flex-col border-[1.5px] border-line rounded-[6px] overflow-hidden bg-paper-2 hover:border-ink transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-44 sm:h-48 overflow-hidden relative bg-stone">
                    <PhotoSlot
                      src={c.photo.src}
                      alt={c.photo.alt}
                      brief={c.photo.brief}
                      className="h-full rounded-none border-0 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-ink/90 text-on-dark font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-[2px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Studio #{c.num}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-muted block">
                        Lead generation &amp; code
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                        {c.name}
                      </h3>
                      <p className="text-sm text-ink-2 leading-relaxed m-0">
                        {c.cardLine}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-line/60 flex items-center justify-between text-sm font-bold text-ink">
                      <span>View deliverables</span>
                      <Arrow className="group-hover:translate-x-1.5 transition-transform" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Using Both (Ink dark section) */}
      <section className="bg-ink text-on-dark mt-14 sm:mt-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 flex flex-wrap gap-10 lg:gap-14 items-center">
          <div className="flex-[999_1_500px] min-w-0">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#8B8F86]">
              Smart SME Strategy
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight mt-3.5 m-0">
              Spend less on the meter. Put it into the marketing.
            </h2>
            <p className="text-[#C9CBC4] text-base sm:text-lg leading-relaxed mt-5 max-w-2xl">
              Many clients use the money they save on commercial electricity and gas to fund their new website or launch local Google Ads. It&apos;s not a rigid package and it&apos;s not a condition — it&apos;s just a sensible, self-funding way to grow.
            </p>
          </div>

          {/* Real SME Reinvestment Model Card */}
          <div className="flex-[1_1_320px] min-w-0 border border-line-dark rounded-[6px] overflow-hidden bg-[#1E221E]/80 shadow-xl">
            <div className="p-4 bg-line-dark/40 border-b border-line-dark font-mono text-xs uppercase tracking-wider text-muted">
              Live SME Case Model // Dual Impact
            </div>
            <div className="p-4 sm:p-5 border-b border-line-dark flex justify-between gap-4 items-center">
              <span className="text-[#C9CBC4] text-sm">Saved on energy renewal</span>
              <span className="font-mono text-emerald-400 font-bold text-base sm:text-lg">−£4,850 / yr</span>
            </div>
            <div className="p-4 sm:p-5 border-b border-line-dark flex justify-between gap-4 items-center">
              <span className="text-[#C9CBC4] text-sm">Reinvested in web &amp; SEO</span>
              <span className="font-mono text-on-dark font-semibold text-base sm:text-lg">£3,400 / yr</span>
            </div>
            <div className="p-4 sm:p-5 border-b border-line-dark flex justify-between gap-4 items-center bg-line-dark/20">
              <span className="text-on-dark font-bold text-sm">New inbound customer enquiries</span>
              <span className="font-mono text-signal font-extrabold text-base sm:text-lg">+32 / month</span>
            </div>
            <div className="p-4 text-xs text-[#8B8F86] font-mono leading-relaxed">
              * Based on real UK commercial client results across hospitality and trade services.
            </div>
          </div>
        </div>
      </section>

      {/* Closing Orange CTA Band */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-signal rounded-[6px] p-8 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8 text-ink">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
            Not sure where to start? Start with the bill.
          </h2>
          <Button
            variant="primary"
            href="/contact"
            size="large"
            className="w-full sm:w-auto text-center"
          >
            Book a free review
          </Button>
        </div>
      </section>
    </div>
  );
}
