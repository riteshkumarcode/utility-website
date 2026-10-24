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

interface FinanceServiceDetailProps {
  service: Service;
  sameCategory: Service[];
  crossCategory: Service[];
}

export function FinanceServiceDetail({
  service,
  sameCategory,
  crossCategory,
}: FinanceServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isLoan = service.slug === "business-loans";

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
              href="/services/finance"
              className="hover:text-ink transition-colors font-medium"
            >
              Finance &amp; Card Machines
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink font-bold">
            {service.name}
          </li>
        </ol>
      </nav>

      {/* 2. Finance Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-14">
        {/* Inspection Header Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 sm:p-3.5 rounded-[4px] border-2 border-ink bg-paper-2 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-pulse" />
            <span className="font-bold text-ink uppercase tracking-wider">
              {isLoan ? "UK Commercial Lending & Capital" : "UK Merchant Acquiring & Payments"}
            </span>
            <span className="text-muted hidden md:inline">|</span>
            <span className="text-muted hidden md:inline">
              {isLoan ? "FCA Registered Panel Lenders" : "PCI-DSS Level 1 Hardware"}
            </span>
          </div>
          <div className="text-signal font-bold tracking-wider uppercase">
            100% Fee Transparency
          </div>
        </div>

        <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 items-start justify-between">
          {/* Left Text Column */}
          <div className="flex-[999_1_520px] min-w-0">
            <SectionLabel>{service.num} — Business Finance</SectionLabel>

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

          {/* Photo Slot with floating tag */}
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
                <span>{isLoan ? "No Upfront Broker Fees" : "Next-Day Settlement"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facts Strip (4 Key/Value pairs) */}
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

      {/* 4. Finance & Payment Transparency Breakdown */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-2 border-ink rounded-[6px] p-5 sm:p-8 md:p-10 bg-paper-2">
          <div className="flex flex-wrap justify-between items-baseline gap-2 pb-4 border-b border-line">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal font-bold block mb-1">
                {isLoan ? "Commercial Finance Code of Conduct" : "Interchange++ Transparent Pricing"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] m-0">
                {isLoan
                  ? "Where commercial finance costs come from"
                  : "What you actually pay for card payments"}
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">
              Written fee disclosure before signing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {isLoan ? (
              <>
                <div className="p-4 sm:p-5 rounded-[4px] border border-line bg-paper space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-ink">
                      Direct Lender Interest Rate (APR)
                    </span>
                    <span className="font-mono text-xs text-signal font-bold">Primary Cost</span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    Set directly by the panel lender based on your trading longevity, profitability, and credit profile. We negotiate to secure fixed repayments so your overheads never jump.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-[4px] border border-line bg-paper space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-ink">
                      Broker Introducer Fee
                    </span>
                    <span className="font-mono text-xs text-emerald-600 font-bold">100% Disclosed</span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    Lenders pay us an introducer commission upon successful drawdown. You are given a clear written disclosure statement in pounds before you sign. Never any upfront application fees.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 sm:p-5 rounded-[4px] border border-line bg-paper space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-ink">
                      Interchange &amp; Scheme Fees
                    </span>
                    <span className="font-mono text-xs text-signal font-bold">Statutory Capped</span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    UK and European consumer debit cards are capped at 0.20%, and credit cards at 0.30% under payment regulations. We ensure your provider passes these low rates through to your business.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-[4px] border border-line bg-paper space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-ink">
                      Acquirer Processing Margin
                    </span>
                    <span className="font-mono text-xs text-emerald-600 font-bold">Optimised</span>
                  </div>
                  <p className="text-sm text-ink-2 leading-relaxed m-0">
                    The bank handling the card settlement charges a few pence per transaction. We benchmark acquiring margins across competitive UK merchant banks and strip out bogus monthly statement fees.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5. What's Included (6 Items) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] pb-3 border-b-2 border-ink">
          {service.includedIntro}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {service.included.map((item, idx) => (
            <div
              key={item.title}
              className="border-2 border-line rounded-[6px] p-5 sm:p-6 bg-paper-2 hover:border-ink transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-muted block">
                  [0{idx + 1}]
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink m-0">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed m-0">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Step-by-Step Roadmap (4 Steps) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-2 border-ink rounded-[6px] p-5 sm:p-8 md:p-10 bg-paper-2">
          <SectionLabel>Roadmap</SectionLabel>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] mt-3 pb-6 border-b border-line">
            {service.stepsTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
            {service.steps.map((step, idx) => (
              <div key={step.title} className="space-y-3 relative">
                <div className="font-mono text-xs text-signal font-bold uppercase tracking-wider">
                  Step 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink m-0">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-2 leading-relaxed m-0">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comparison Table */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
          {service.table.title}
        </h2>
        <div className="overflow-x-auto border-2 border-ink rounded-[6px]">
          <table className="w-full text-left border-collapse text-sm min-w-[600px]">
            <thead>
              <tr className="bg-ink text-on-dark font-mono text-xs uppercase tracking-wider">
                {service.table.headers.map((h) => (
                  <th key={h} className="p-3.5 sm:p-4 border-r border-line-dark last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line bg-paper">
              {service.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-stone/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-3.5 sm:p-4 border-r border-line last:border-r-0 ${
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
            Note: {service.table.note}
          </p>
        )}
      </section>

      {/* 8. Sectors & Needs Checklist */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Sectors */}
          <div className="border-2 border-line rounded-[6px] p-5 sm:p-8 bg-paper-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-4">
              UK Sectors We Assist
            </h3>
            <p className="text-sm text-ink-2 mb-6">
              From high street retail and hospitality to haulage, construction and multi-site companies:
            </p>
            <div className="flex flex-wrap gap-2">
              {service.sectors.map((sec) => (
                <Chip key={sec}>{sec}</Chip>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="border-2 border-line rounded-[6px] p-5 sm:p-8 bg-paper-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-4">
              What We Need for a Rapid Quote
            </h3>
            <p className="text-sm text-ink-2 mb-6">
              Have these details ready to receive competitive quotes within 24 hours:
            </p>
            <ul className="space-y-3 p-0 m-0 list-none text-sm text-ink-2">
              {service.needs.map((need) => (
                <li key={need} className="flex items-start gap-3">
                  <span className="text-signal font-bold shrink-0">✓</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FAQs Accordion */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-[-0.02em] mt-3 mb-8">
          Frequently asked questions about {service.shortName}
        </h2>

        <div className="border-t-2 border-ink divide-y divide-line">
          {service.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left font-display font-bold text-lg sm:text-xl text-ink hover:text-signal transition-colors cursor-pointer gap-4"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`font-mono text-xl sm:text-2xl shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-signal" : "text-muted"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed pr-8"
                  >
                    <p className="m-0">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Related Services Cross Links */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="border-t-2 border-ink pt-8">
          <div className="flex justify-between items-baseline mb-6">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink m-0">
              Other Commercial Services
            </h3>
            <Link
              href="/services"
              className="font-mono text-xs uppercase tracking-wider text-signal font-bold hover:underline"
            >
              All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...sameCategory, ...crossCategory].slice(0, 3).map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group border border-line rounded-[6px] p-5 bg-paper-2 hover:border-ink transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="font-mono text-xs text-muted block mb-1">
                    #{rel.num} {rel.group}
                  </span>
                  <h4 className="font-display font-bold text-lg text-ink group-hover:text-rust transition-colors m-0">
                    {rel.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-2 mt-2 leading-relaxed line-clamp-2">
                    {rel.cardLine}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-ink pt-3 border-t border-line/60">
                  <span>Explore service</span>
                  <Arrow className="group-hover:translate-x-1 transition-transform" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Bottom CTA Strip */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-signal text-ink rounded-[6px] p-8 sm:p-12 md:p-14 flex flex-wrap justify-between items-center gap-6 sm:gap-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0">
              {service.ctaLine}
            </h2>
            <p className="text-sm sm:text-base text-ink/80 m-0">
              Clear quotes within one working day. No obligations, no hard sell.
            </p>
          </div>
          <Button
            variant="primary"
            href={`/contact?service=${service.slug}`}
            size="large"
            className="w-full sm:w-auto text-center bg-ink text-on-dark hover:bg-ink-2"
          >
            {service.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
