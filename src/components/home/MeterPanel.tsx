"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function MeterPanel() {
  const { meterPanel } = homeContent.hero;
  const shouldReduceMotion = useReducedMotion();
  const [gridFreq, setGridFreq] = useState(50.02);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  // Micro-fluctuation for realistic live grid telemetry
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setGridFreq((prev) => {
        const delta = (Math.random() - 0.5) * 0.04;
        return Number(Math.max(49.95, Math.min(50.05, prev + delta)).toFixed(2));
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="flex flex-col gap-3.5 w-full">
      {/* Dark Industrial Meter Console Graphic */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className="bg-ink text-on-dark rounded-[6px] p-4 sm:p-6 shadow-xl border border-line-dark overflow-hidden relative"
      >
        {/* Subtle grid pattern background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#F1F1EC 1px, transparent 1px), linear-gradient(90deg, #F1F1EC 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top Header Telemetry Bar */}
        <div className="flex justify-between items-center font-mono text-[11px] uppercase tracking-[0.12em] text-[#8B8F86] pb-3 border-b border-line-dark/80">
          <div className="flex items-center gap-2">
            <span className="font-bold text-on-dark">{siteConfig.name}</span>
            <span className="text-line-dark">/</span>
            <span className="text-[#A6AAA0]">Meter 01 · Main</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="text-on-dark font-medium">{meterPanel.readingStatus}</span>
          </div>
        </div>

        {/* Rolling Odometer Readout */}
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
          <div
            aria-hidden="true"
            className="font-mono font-medium text-2xl sm:text-4xl md:text-[46px] flex gap-0.5 sm:gap-1 items-baseline select-none overflow-x-auto py-1"
          >
            <span className="bg-[#1E221E] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] border border-line-dark/60">0</span>
            <span className="bg-[#1E221E] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] border border-line-dark/60">4</span>
            <span className="bg-[#1E221E] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] border border-line-dark/60">8</span>

            {/* Slow column 3 (220s) */}
            <span className="bg-[#1E221E] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top border border-line-dark/60">
              <span className="flex flex-col [animation:roll_220s_steps(10)_infinite]">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>

            {/* Medium column 2 (22s) */}
            <span className="bg-[#1E221E] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top border border-line-dark/60">
              <span className="flex flex-col [animation:roll_22s_steps(10)_infinite]">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>

            {/* Fast column 1 (2.2s) in Signal Orange */}
            <span className="bg-signal text-ink px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top font-bold shadow-sm">
              <span className="flex flex-col [animation:roll_2.2s_steps(10)_infinite]">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>

            <span className="text-xs sm:text-base text-[#8B8F86] ml-1.5 font-mono">kWh</span>
          </div>

          <div className="text-right font-mono text-[11px] text-[#8B8F86] shrink-0">
            <span className="block text-signal font-bold">{gridFreq} Hz</span>
            <span className="text-[10px] text-[#A6AAA0]">Grid Balanced</span>
          </div>
        </div>

        {/* Live Energy Waveform Graphic with Animated Motion */}
        <div className="mt-4 p-2.5 rounded-[4px] bg-[#161A16] border border-line-dark/80 relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#8B8F86] mb-1.5 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signal/80" />
              <span>Telemetry Waveform</span>
            </span>
            <span className="text-signal font-semibold tracking-wider">LIVE TELEMETRY</span>
          </div>

          {/* SVG Animated Oscilloscope Waveform */}
          <div className="h-14 w-full relative">
            <svg
              viewBox="0 0 340 56"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF5B1F" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#FF5B1F" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF5B1F" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="waveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF5B1F" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FF5B1F" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid rules */}
              <line x1="0" y1="28" x2="340" y2="28" stroke="#2B302B" strokeDasharray="3 3" strokeWidth="1" />
              <line x1="85" y1="0" x2="85" y2="56" stroke="#2B302B" strokeDasharray="2 4" strokeWidth="0.8" />
              <line x1="170" y1="0" x2="170" y2="56" stroke="#2B302B" strokeDasharray="2 4" strokeWidth="0.8" />
              <line x1="255" y1="0" x2="255" y2="56" stroke="#2B302B" strokeDasharray="2 4" strokeWidth="0.8" />

              {/* Sine Wave Filled Area */}
              <motion.path
                d="M0,28 Q25,8 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28 L340,56 L0,56 Z"
                fill="url(#waveFill)"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        d: [
                          "M0,28 Q25,12 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28 L340,56 L0,56 Z",
                          "M0,28 Q25,44 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28 L340,56 L0,56 Z",
                          "M0,28 Q25,12 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28 L340,56 L0,56 Z",
                        ],
                      }
                }
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Main Sine Wave Pulse Stroke */}
              <motion.path
                d="M0,28 Q25,12 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="2.2"
                strokeLinecap="round"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        d: [
                          "M0,28 Q25,12 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28",
                          "M0,28 Q25,44 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28",
                          "M0,28 Q25,12 50,28 T100,28 T150,28 T200,28 T250,28 T300,28 T340,28",
                        ],
                      }
                }
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Animated Glowing Wave Marker Point */}
              {!shouldReduceMotion && (
                <motion.circle
                  r="3.5"
                  fill="#FF5B1F"
                  animate={{
                    cx: [20, 100, 200, 320, 20],
                    cy: [20, 28, 20, 28, 20],
                    opacity: [0.6, 1, 0.7, 1, 0.6],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              )}
            </svg>
          </div>
        </div>

        {/* 4 Utility Progress Bars with Staggered Motion */}
        <div className="border-t border-line-dark mt-4 pt-3.5 space-y-2.5 text-sm">
          {meterPanel.bars.map((bar, idx) => {
            const isHovered = activeTab === idx;
            return (
              <motion.div
                key={bar.name}
                onMouseEnter={() => setActiveTab(idx)}
                onMouseLeave={() => setActiveTab(null)}
                className={`flex items-center gap-3 p-1 rounded transition-colors ${
                  isHovered ? "bg-[#1E221E]" : "bg-transparent"
                }`}
              >
                <span className="w-20 text-[#C9CBC4] text-xs sm:text-sm shrink-0 font-medium">
                  {bar.name}
                </span>

                <div className="flex-1 h-1.5 bg-line-dark overflow-hidden rounded-full">
                  <motion.div
                    className={`h-full rounded-full ${
                      bar.color === "signal" ? "bg-signal" : "bg-[#C9CBC4]"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.percent}%` }}
                    transition={{
                      duration: 1.6,
                      delay: idx * 0.2,
                      ease: [0.2, 0.7, 0.2, 1],
                    }}
                  />
                </div>

                <span
                  className={`font-mono text-xs w-20 text-right shrink-0 flex items-center justify-end gap-1.5 ${
                    bar.color === "signal" ? "text-on-dark font-bold" : "text-[#8B8F86]"
                  }`}
                >
                  {bar.color === "signal" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                  )}
                  <span>{bar.status}</span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Commercial Meter Photo with Verification Tag */}
      <div className="relative rounded-[6px] overflow-hidden group">
        <PhotoSlot
          src={meterPanel.photoSrc}
          alt="Commercial electricity meter in UK plant room"
          brief={meterPanel.photoBrief}
          className="h-44 sm:h-48 w-full border border-line shadow-sm"
        />
        <div className="absolute bottom-2.5 left-2.5 bg-ink/90 backdrop-blur-xs text-on-dark text-[11px] font-mono px-2.5 py-1 rounded-[3px] border border-line-dark flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          <span>Active UK Smart Meter Audits</span>
        </div>
      </div>
    </div>
  );
}
