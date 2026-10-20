"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Service } from "@/content/services";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Chip } from "@/components/ui/Chip";
import { Arrow } from "@/components/ui/Arrow";

interface UtilityServiceDetailProps {
  service: Service;
  sameCategory: Service[];
  crossCategory: Service[];
}

export function UtilityServiceDetail({
  service,
  sameCategory,
  crossCategory,
}: UtilityServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-paper text-ink pb-16 overflow-x-hidden">
      {/* 1. Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-3 text-xs font-mono text-muted"
      >
        <ol className="flex items-center gap-2 list-none p-0 m-0 flex-wrap">
          <li>
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/services/utilities"
              className="hover:text-ink transition-colors font-medium"
            >
              Energy &amp; Utilities
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink font-bold">
            {service.name}
          </li>
        </ol>
      </nav>

      {/* 2. Utility Industrial Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-14">
        {/* Inspection Header Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-3.5 rounded-[4px] border-2 border-ink bg-paper-2 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-pulse" />
            <span className="font-bold text-ink uppercase tracking-wider">
              UK Commercial Utility Specification
            </span>
            <span className="text-muted hidden md:inline">|</span>
            <span className="text-muted hidden md:inline">
              Ofgem TPI Code Compliant · Whole-of-Market Tenders
            </span>
          </div>
          <div className="text-ink text-[11px] font-bold uppercase tracking-widest bg-stone px-2.5 py-1 rounded-[2px] ml-auto sm:ml-0">
            TARIFF CODE #{service.num}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 lg:gap-14 items-start justify-between">
          <div className="flex-[999_1_500px] min-w-0">
            <SectionLabel>{service.num} — Business Utilities</SectionLabel>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.035em] leading-[1.02] mt-4 sm:mt-5 break-words">
              {service.h1}
            </h1>
            <div className="h-1.5 w-32 sm:w-44 bg-signal mt-5 sm:mt-6 animate-grow" />
            <p className="text-ink-2 text-base sm:text-xl md:text-2xl mt-5 sm:mt-6 leading-relaxed max-w-2xl">
              {service.intro}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 sm:gap-4 mt-8">
              <Button
                variant="primary"
                href={`/contact?service=${service.slug}`}
                size="large"
                className="w-full sm:w-auto text-center"
              >
                {service.cta}
              </Button>
              <Button
                variant="outline"
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                size="large"
                showArrow={false}
                className="w-full sm:w-auto text-center"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>

          {/* Authentic Equipment Photo with Industrial Tag */}
          <div className="flex-[1_1_320px] min-w-0 w-full lg:max-w-md">
            <div className="relative rounded-[6px] overflow-hidden border-2 border-ink bg-paper-2 shadow-lg">
              <PhotoSlot
                src={service.photo.src}
                alt={service.photo.alt}
                brief={service.photo.brief}
                className="h-[280px] sm:h-[380px] md:h-[440px] w-full"
                priority
              />
              <div className="absolute top-3 right-3 bg-ink/95 text-on-dark px-3 py-1.5 rounded-[3px] border border-line-dark font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-signal" />
                <span>Zero Rollover Clause</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facts Strip (4 Key/Value pairs between rules) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="border-t-2 border-b border-ink py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {service.facts.map((fact) => (
              <div key={fact.label} className="space-y-1">
                <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.12em] text-muted">
                  {fact.label}
                </div>
                <div className="font-display font-extrabold text-base sm:text-xl md:text-2xl text-ink break-words">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Anatomy of Your Utility Bill (Transparent Breakdown) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-2 border-ink rounded-[6px] p-5 sm:p-8 md:p-10 bg-paper-2">
          <div className="flex flex-wrap justify-between items-baseline gap-2 pb-4 border-b border-line">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold block mb-1">
                Ofgem TPI Transparency Guarantee
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] m-0">
                Where your utility bill money actually goes
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">
              100% Written Commission Disclosure Before You Sign
            </span>
          </div>

          <p className="text-ink-2 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
            Many energy brokers add silent 2p to 4p per kWh markups onto your rates. At {siteConfig.name}, our commission is declared in pounds and pence before you sign any contract, keeping your unit rates tied directly to true wholesale supplier costs.
          </p>

          {/* Visual Bar Breakdown with Motion */}
          <div className="mt-8 space-y-3">
            <div className="h-8 w-full rounded-[4px] overflow-hidden flex text-[10px] sm:text-xs font-mono font-bold text-center text-on-dark border border-ink">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "54%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
                className="bg-ink flex items-center justify-center border-r border-line-dark/40 overflow-hidden"
                title="Wholesale Energy 54%"
              >
                Wholesale (54%)
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "23%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                className="bg-[#3C413B] flex items-center justify-center border-r border-line-dark/40 overflow-hidden"
                title="Network DUoS 23%"
              >
                Network (23%)
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "19%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                className="bg-[#5B605A] flex items-center justify-center border-r border-line-dark/40 overflow-hidden"
                title="Levies CCL 19%"
              >
                Levies (19%)
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                className="bg-signal text-ink flex items-center justify-center overflow-hidden font-extrabold relative group cursor-pointer"
                title={`${siteConfig.name} Fee ~4%`}
              >
                <span className="relative z-10">Fee</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-ink rounded-xs shrink-0" />
                <span className="text-ink-2">Wholesale Commodity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#3C413B] rounded-xs shrink-0" />
                <span className="text-ink-2">Transmission (DUoS)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#5B605A] rounded-xs shrink-0" />
                <span className="text-ink-2">Gov Levies (CCL/RO)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-signal rounded-xs shrink-0" />
                <span className="font-bold text-ink">{siteConfig.name} Fee (Agreed)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What's Included */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="space-y-2">
          <SectionLabel>Specification</SectionLabel>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] m-0">
            {service.includedIntro}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {service.included.map((item, i) => (
            <div
              key={item.title}
              className="border border-line rounded-[6px] p-5 sm:p-6 bg-paper-2 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-signal tracking-widest block">
                  0{i + 1}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl tracking-[-0.02em] text-ink m-0">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-ink-2 leading-relaxed m-0">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. How an Electricity/Gas/Water Switch Works (Ink dark section) */}
      <section className="bg-ink text-on-dark my-10 sm:my-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
          <SectionLabel light>Clear Switch Process</SectionLabel>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] mt-3 m-0">
            {service.stepsTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 border-t border-line-dark pt-8">
            {service.steps.map((step, idx) => (
              <div key={step.title} className="space-y-2 sm:space-y-3">
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-signal leading-none">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-on-dark pt-1 m-0">
                  {step.title}
                </h3>
                <p className="text-sm text-[#C9CBC4] leading-relaxed m-0">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comparison Table */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="space-y-2 mb-6">
          <SectionLabel>Contract Options</SectionLabel>
          <div className="flex flex-wrap justify-between items-baseline gap-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.03em] m-0">
              {service.table.title}
            </h2>
            <span className="font-mono text-xs text-muted block sm:hidden">
              Swipe table sideways →
            </span>
          </div>
        </div>

        <div className="overflow-x-auto border-2 border-ink rounded-[6px] bg-paper-2">
          <table className="w-full text-left border-collapse min-w-[540px]">
            <thead>
              <tr className="bg-ink text-on-dark font-mono text-xs uppercase tracking-[0.1em]">
                {service.table.headers.map((h) => (
                  <th key={h} className="p-3.5 sm:p-5 border-r border-line-dark last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-sm md:text-base">
              {service.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-stone/30 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-3.5 sm:p-5 border-r border-line last:border-r-0 ${
                        cIdx === 0 ? "font-bold text-ink" : "text-ink-2"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {service.table.note && (
          <p className="font-mono text-xs text-muted mt-3">
            * {service.table.note}
          </p>
        )}
      </section>

      {/* 8. Sectors & What We'll Need */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          <div className="border border-line rounded-[6px] p-6 sm:p-8 bg-paper-2 flex flex-col justify-between">
            <div>
              <SectionLabel>Sectors</SectionLabel>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] mt-3">
                Who we do this for
              </h2>
              <p className="text-ink-2 text-sm sm:text-base mt-2 mb-6">
                Tailored commercial utility contracts suited to these UK business sectors:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.sectors.map((sec) => (
                  <Chip key={sec} size="small">
                    {sec}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="border-2 border-ink rounded-[6px] p-6 sm:p-8 bg-stone flex flex-col justify-between">
            <div>
              <SectionLabel>Bill Audit Checklist</SectionLabel>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] mt-3">
                What we&apos;ll need from you
              </h2>
              <p className="text-ink-2 text-sm sm:text-base mt-2 mb-6">
                Send what you have; we verify everything with your supplier:
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {service.needs.map((need, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-3 text-sm md:text-base text-ink font-medium">
                    <span className="w-5 h-5 rounded-full bg-signal text-ink flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="space-y-2 mb-8">
          <SectionLabel>Questions &amp; Answers</SectionLabel>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] m-0">
            Things people ask about {service.shortName}
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl border-t border-line pt-6">
          {service.faqs.map((faq, fIdx) => {
            const isOpen = openFaq === fIdx;
            return (
              <div
                key={faq.q}
                className="border border-line rounded-[6px] overflow-hidden bg-paper-2 transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-ink"
                >
                  <span className="font-display font-bold text-base sm:text-xl text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shrink-0 transition-colors ${
                      isOpen ? "bg-signal text-ink" : "bg-stone text-ink"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-0 text-ink-2 text-sm sm:text-base leading-relaxed border-t border-line/60 mt-1 pt-3.5 animate-up">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Respective Utility Listing */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="pb-4 border-b-2 border-ink mb-8 flex flex-wrap justify-between items-baseline gap-2">
          <div>
            <SectionLabel>More Utility Services</SectionLabel>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.03em] mt-2 m-0">
              Other commercial utility services
            </h2>
          </div>
          <Link
            href="/services/utilities"
            className="font-bold text-sm text-rust hover:underline"
          >
            All 4 utilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sameCategory.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              className="group border-2 border-line rounded-[6px] p-5 sm:p-6 bg-paper-2 hover:border-ink transition-all duration-200 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-muted block">
                  #{rel.num} · Utilities
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink group-hover:text-rust transition-colors m-0">
                  {rel.name}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed m-0">
                  {rel.cardLine}
                </p>
              </div>
              <div className="pt-3 border-t border-line/60 flex items-center justify-between text-sm font-bold text-ink">
                <span>View specification</span>
                <Arrow className="group-hover:translate-x-1.5 transition-transform" size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* Cross-Sell to Digital */}
        <div className="mt-12 p-6 sm:p-8 rounded-[6px] border-2 border-ink bg-stone space-y-5">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="space-y-1.5 max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted">
                In-House Digital Growth
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink m-0">
                Want to reinvest your utility savings into digital marketing?
              </h3>
              <p className="text-sm text-ink-2 m-0 leading-relaxed">
                Many clients use what they save on business energy to fund their website rebuild, local SEO, or targeted ads.
              </p>
            </div>
            <Button variant="outline" href="/services/digital">
              Explore Digital Marketing
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-line/60">
            {crossCategory.map((cross) => (
              <Link
                key={cross.slug}
                href={`/services/${cross.slug}`}
                className="p-3 rounded-[4px] bg-paper-2 hover:bg-paper border border-line transition-colors flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] text-muted block mb-1">
                  #{cross.num}
                </span>
                <span className="font-display font-bold text-sm text-ink hover:text-rust block">
                  {cross.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Closing CTA Band */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-signal rounded-[6px] p-7 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8 text-ink">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
            {service.ctaLine}
          </h2>
          <Button
            variant="primary"
            href={`/contact?service=${service.slug}`}
            size="large"
            className="w-full sm:w-auto text-center"
          >
            {service.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
