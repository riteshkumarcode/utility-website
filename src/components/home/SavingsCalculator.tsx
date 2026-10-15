"use client";

import Link from "next/link";
import React, { useState } from "react";
import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";

export function SavingsCalculator() {
  const { calculator } = homeContent;
  const [selectedUtility, setSelectedUtility] = useState("Electricity");
  const [monthlySpend, setMonthlySpend] = useState(2500);

  const rate = calculator.savingRate;
  const monthlySaving = Math.round(monthlySpend * rate);
  const annualSaving = monthlySaving * 12;

  const fmt = (n: number) => Number(n).toLocaleString("en-GB");

  return (
    <section id="calculator" className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
      <div className="border-2 border-ink rounded-[6px] overflow-hidden flex flex-wrap bg-paper-2">
        {/* Left Interactive Control Panel */}
        <div className="flex-[999_1_520px] min-w-0 p-8 sm:p-12">
          <SectionLabel>{calculator.label}</SectionLabel>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight mt-3 m-0">
            {calculator.h2}
          </h2>

          <p className="text-ink-2 text-base sm:text-lg mt-3 leading-relaxed max-w-xl">
            {calculator.intro}
          </p>

          {/* Segmented Control for 4 utilities */}
          <div
            role="group"
            aria-label="Select utility type"
            className="inline-flex flex-wrap border-[1.5px] border-ink rounded-[4px] overflow-hidden mt-7 max-w-full"
          >
            {calculator.types.map((t) => {
              const isSelected = t === selectedUtility;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedUtility(t)}
                  className={`px-4 sm:px-5 py-2.5 text-sm sm:text-base font-bold border-r border-line last:border-r-0 transition-colors cursor-pointer min-h-[44px] ${
                    isSelected
                      ? "bg-ink text-on-dark"
                      : "bg-transparent text-ink hover:bg-stone/50"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          {/* Range Slider */}
          <div className="mt-9 space-y-3">
            <div className="flex justify-between items-baseline">
              <label htmlFor="calculator-spend-slider" className="font-bold text-base text-ink">
                Monthly {selectedUtility.toLowerCase()} spend
              </label>
              <span className="font-mono text-2xl font-bold text-ink">
                £{fmt(monthlySpend)}
              </span>
            </div>

            <input
              id="calculator-spend-slider"
              type="range"
              min={100}
              max={20000}
              step={100}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              aria-valuetext={`£${fmt(monthlySpend)} a month`}
              className="w-full accent-signal h-3 bg-stone rounded-lg appearance-none cursor-pointer focus-visible:outline-2 focus-visible:outline-ink"
            />

            <div className="flex justify-between font-mono text-xs text-muted">
              <span>£100</span>
              <span>£20,000+</span>
            </div>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="flex-[1_1_340px] min-w-0 bg-ink text-on-dark p-8 sm:p-12 flex flex-col justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#8B8F86]">
              Could be back in your account
            </div>
            <div className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl text-signal tracking-[-0.03em] leading-none mt-4">
              £{fmt(annualSaving)}
            </div>
            <div className="text-[#C9CBC4] text-base mt-3">
              a year &nbsp;·&nbsp; about £{fmt(monthlySaving)} a month
            </div>
          </div>

          <p className="text-xs text-[#8B8F86] leading-relaxed m-0 font-sans">
            {calculator.disclaimer}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-between bg-signal text-ink font-bold text-base md:text-lg p-4 rounded-[4px] min-h-[52px] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-signal"
          >
            <span>Get my real number</span>
            <Arrow className="group-hover:translate-x-1.5" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
