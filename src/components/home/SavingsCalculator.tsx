"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";

export function SavingsCalculator() {
  const { calculator } = homeContent;
  const shouldReduceMotion = useReducedMotion();
  const [selectedUtility, setSelectedUtility] = useState("Electricity");
  const [monthlySpend, setMonthlySpend] = useState(2500);

  const rate = calculator.savingRate;
  const monthlySaving = Math.round(monthlySpend * rate);
  const annualSaving = monthlySaving * 12;

  const fmt = (n: number) => Number(n).toLocaleString("en-GB");

  // Percentage of slider range (100 to 20000)
  const spendPercent = Math.min(100, Math.max(0, ((monthlySpend - 100) / (20000 - 100)) * 100));
  const circleCircumference = 2 * Math.PI * 34; // r = 34
  const strokeDashoffset = circleCircumference - (circleCircumference * (rate + (spendPercent / 500)));

  return (
    <section id="calculator" className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="border-2 border-ink rounded-[6px] overflow-hidden flex flex-wrap bg-paper-2">
        {/* Left Interactive Control Panel */}
        <div className="flex-[999_1_480px] min-w-0 p-5 sm:p-8 md:p-12">
          <SectionLabel>{calculator.label}</SectionLabel>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight mt-3 m-0 break-words">
            {calculator.h2}
          </h2>

          <p className="text-ink-2 text-base sm:text-lg mt-3 leading-relaxed max-w-xl">
            {calculator.intro}
          </p>

          {/* Segmented Control for 4 utilities */}
          <div
            role="group"
            aria-label="Select utility type"
            className="inline-flex flex-wrap border-[1.5px] border-ink rounded-[4px] overflow-hidden mt-6 sm:mt-7 max-w-full"
          >
            {calculator.types.map((t) => {
              const isSelected = t === selectedUtility;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedUtility(t)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-base font-bold border-r border-line last:border-r-0 transition-colors cursor-pointer min-h-[40px] sm:min-h-[44px] ${
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
          <div className="mt-8 sm:mt-9 space-y-3">
            <div className="flex justify-between items-baseline gap-2">
              <label htmlFor="calculator-spend-slider" className="font-bold text-sm sm:text-base text-ink">
                Monthly {selectedUtility.toLowerCase()} spend
              </label>
              <motion.span
                key={monthlySpend}
                initial={shouldReduceMotion ? false : { scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xl sm:text-2xl font-bold text-ink shrink-0 inline-block"
              >
                £{fmt(monthlySpend)}
              </motion.span>
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

        {/* Right Output Panel with Dynamic Motion Graphic */}
        <div className="flex-[1_1_320px] min-w-0 bg-ink text-on-dark p-5 sm:p-8 md:p-12 flex flex-col justify-between gap-6 sm:gap-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-signal/10 blur-3xl pointer-events-none"
          />

          <div>
            <div className="flex justify-between items-center">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#8B8F86]">
                Could be back in your account
              </div>

              {/* Animated Circular Gauge Graphic */}
              <div className="w-14 h-14 relative shrink-0" title="Projected ~20% Average Saving">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#2B302B"
                    strokeWidth="5"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="#FF5B1F"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeDasharray={circleCircumference}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-signal">
                  -20%
                </div>
              </div>
            </div>

            <motion.div
              key={annualSaving}
              initial={shouldReduceMotion ? false : { opacity: 0.8, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-signal tracking-[-0.03em] leading-none mt-4 break-words"
            >
              £{fmt(annualSaving)}
            </motion.div>

            <div className="text-[#C9CBC4] text-sm sm:text-base mt-3 flex items-center gap-2">
              <span>a year</span>
              <span className="text-signal">·</span>
              <span>about £{fmt(monthlySaving)} a month</span>
            </div>
          </div>

          <p className="text-xs text-[#8B8F86] leading-relaxed m-0 font-sans">
            {calculator.disclaimer}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-between bg-signal text-ink font-bold text-base md:text-lg p-4 rounded-[4px] min-h-[52px] transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-signal shadow-sm hover:shadow-md"
          >
            <span>Get my real number</span>
            <Arrow className="group-hover:translate-x-1.5 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
