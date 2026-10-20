"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Chip } from "@/components/ui/Chip";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { Arrow } from "@/components/ui/Arrow";

export function StyleGuideClient() {
  const [selectedChips, setSelectedChips] = useState<Record<string, boolean>>({
    Electricity: true,
    Gas: false,
    Water: true,
    Waste: false,
    Websites: true,
  });

  const toggleChip = (name: string) => {
    setSelectedChips((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const colors = [
    { token: "--paper", hex: "#F1F1EC", label: "Page background", bg: "bg-[#F1F1EC]", text: "text-ink" },
    { token: "--paper-2", hex: "#F8F8F4", label: "Raised panels, cards, form box", bg: "bg-[#F8F8F4]", text: "text-ink" },
    { token: "--stone", hex: "#E4E4DC", label: "Soft panel (\"What we'll need\")", bg: "bg-[#E4E4DC]", text: "text-ink" },
    { token: "--ink", hex: "#121512", label: "Text, dark sections, primary buttons", bg: "bg-[#121512]", text: "text-on-dark" },
    { token: "--ink-2", hex: "#3C413B", label: "Body text on paper", bg: "bg-[#3C413B]", text: "text-on-dark" },
    { token: "--muted", hex: "#5B605A", label: "Labels, captions", bg: "bg-[#5B605A]", text: "text-on-dark" },
    { token: "--line", hex: "#C9C9BF", label: "Hairline rules", bg: "bg-[#C9C9BF]", text: "text-ink" },
    { token: "--line-dark", hex: "#2B302B", label: "Rules on dark sections", bg: "bg-[#2B302B]", text: "text-on-dark" },
    { token: "--signal", hex: "#FF5B1F", label: "Accent fills, CTA band, active marks", bg: "bg-[#FF5B1F]", text: "text-ink" },
    { token: "--rust", hex: "#B23A0B", label: "Link hover, small numbers on paper", bg: "bg-[#B23A0B]", text: "text-on-dark" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink pb-24">
      {/* Top Bar Preview */}
      <div className="bg-ink text-[#C9CBC4] font-mono text-xs tracking-wide">
        <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-blink" />
            <span>Style Guide · Phase 1 System Verification (noindex)</span>
          </div>
          <div>
            <Link href="/" className="hover:text-signal transition-colors">
              ← Return Home
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-line">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <SectionLabel>Design System Specification</SectionLabel>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-[-0.035em] mt-4 leading-none">
            West Coast Services Design Tokens &amp; Components
          </h1>
          <p className="text-ink-2 text-lg md:text-xl max-w-2xl mt-5 leading-relaxed">
            Industrial and editorial aesthetic: off-white paper, ink black, signal-orange accents, hairline rules, and square-ish corners.
          </p>
          <div className="h-1.5 w-44 bg-signal mt-6 animate-grow" />
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-16 space-y-20">
        {/* 1. Colour Tokens */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              1. Color Tokens
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              10 Exact CSS Variables
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((c) => (
              <div
                key={c.token}
                className="border border-line rounded-[6px] overflow-hidden bg-paper-2 flex flex-col"
              >
                <div className={`h-24 ${c.bg} border-b border-line flex items-end p-3`}>
                  <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-black/20 ${c.text}`}>
                    {c.hex}
                  </span>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div className="font-mono text-xs font-bold text-ink">{c.token}</div>
                  <div className="text-xs text-muted mt-1 leading-snug">{c.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography Specimen */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              2. Typography
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Archivo · IBM Plex Sans · IBM Plex Mono
            </span>
          </div>

          <div className="space-y-8 bg-paper-2 border border-line rounded-[6px] p-6 md:p-10">
            {/* Display H1 */}
            <div className="pb-8 border-b border-line space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                Display H1 · Archivo 800 (wdth 88%) · clamp(44px, 6.4vw, 92px)
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.96] tracking-[-0.035em]">
                We sort out the bills you hate opening.
              </h1>
            </div>

            {/* H2 */}
            <div className="pb-8 border-b border-line space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                H2 · Archivo 800 (wdth 88%) · 34–62px · Line-height 1.0
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl leading-none tracking-[-0.03em]">
                Two jobs. Done properly.
              </h2>
            </div>

            {/* H3 */}
            <div className="pb-8 border-b border-line space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                H3 / Card Title · Archivo 700 · 22–28px
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em]">
                Business electricity contracts for single &amp; multi-site estates
              </h3>
            </div>

            {/* Big Numbers */}
            <div className="pb-8 border-b border-line space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                Big Numbers · Archivo 800 (wdth 70–75%) · 64–96px
              </div>
              <div className="flex flex-wrap items-baseline gap-8">
                <span className="font-display font-extrabold text-7xl md:text-8xl text-signal leading-none">
                  01
                </span>
                <span className="font-display font-extrabold text-7xl md:text-8xl text-signal leading-none">
                  £3,600
                </span>
                <span className="font-display font-extrabold text-7xl md:text-8xl text-ink leading-none">
                  20%
                </span>
              </div>
            </div>

            {/* Body text */}
            <div className="pb-8 border-b border-line space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                Body Text · IBM Plex Sans 400 &amp; 600 · 16–19px · Line-height 1.6
              </div>
              <p className="text-ink-2 text-base md:text-lg leading-[1.6] max-w-3xl">
                West Coast Services compares business electricity, gas, water and waste contracts across UK suppliers and handles the switch for you. If you want it, our in-house team also builds your website and runs your social media and ads. We disclose our commission before you sign.
              </p>
            </div>

            {/* Mono Labels */}
            <div className="space-y-2">
              <div className="font-mono text-xs text-muted uppercase tracking-[0.14em]">
                Mono Labels &amp; Code · IBM Plex Mono 500 · 11–12px · Tracking 0.14em
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted bg-stone px-2.5 py-1 rounded-[2px]">
                  MPAN 12 3456 7890 123
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink bg-paper px-2.5 py-1 border border-line rounded-[2px]">
                  METER 01 · MAIN SITE
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-signal font-bold">
                  SIMPLER RECYCLING 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Button Variants */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              3. Button System
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Primary · Signal · Outline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Button */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Variant: Primary
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  Default: Ink background (#121512). Hover: Turns Signal orange (#FF5B1F) with dark ink text.
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <Button variant="primary">Get a free bill check</Button>
                </div>
                <div>
                  <Button variant="primary" size="large">
                    Large Hero Button
                  </Button>
                </div>
              </div>
            </div>

            {/* Signal Button */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Variant: Signal
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  Default: Signal orange (#FF5B1F). Hover: Turns Ink black (#121512) with light text.
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <Button variant="signal">Free bill check</Button>
                </div>
                <div>
                  <Button variant="signal" size="large">
                    Get my real number
                  </Button>
                </div>
              </div>
            </div>

            {/* Outline Button */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Variant: Outline
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  Default: 1.5px ink border, transparent fill. Hover: Fills with Ink black (#121512).
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <Button variant="outline" showArrow={false}>
                    See all services
                  </Button>
                </div>
                <div>
                  <Button variant="outline">
                    Book a free review
                  </Button>
                </div>
                <div className="pt-2 flex items-center gap-3 text-sm text-muted">
                  <span>Arrow Icon Component:</span>
                  <Arrow className="text-signal" />
                  <Arrow className="text-ink" />
                  <Arrow className="text-rust" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SectionLabel & Chips */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              4. SectionLabels &amp; Chips
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Interactive &amp; Static
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SectionLabels */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 space-y-6">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  SectionLabel Component
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  10px orange square + uppercase mono text.
                </p>
              </div>

              <div className="p-4 bg-paper border border-line rounded-[4px] space-y-3">
                <SectionLabel>UK business utilities &nbsp;/&nbsp; Digital marketing</SectionLabel>
                <SectionLabel>What a switch actually involves</SectionLabel>
                <SectionLabel>Rough savings estimate</SectionLabel>
              </div>

              {/* On dark section */}
              <div className="p-4 bg-ink rounded-[4px] space-y-3">
                <SectionLabel light>Plain dealing</SectionLabel>
                <SectionLabel light>Meter 01 · Main site</SectionLabel>
              </div>
            </div>

            {/* Chips */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 space-y-6">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Chip Component (Interactive Toggle)
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  Pill toggle with aria-pressed. Click to test toggle state:
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {Object.keys(selectedChips).map((name) => (
                  <Chip
                    key={name}
                    interactive
                    pressed={selectedChips[name]}
                    onToggle={() => toggleChip(name)}
                  >
                    {name}
                  </Chip>
                ))}
              </div>

              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Static Sector Chips (Detail page)
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Chip size="small">Care homes</Chip>
                  <Chip size="small">Cafés &amp; restaurants</Chip>
                  <Chip size="small">Workshops</Chip>
                  <Chip size="small">Multi-site retail</Chip>
                  <Chip size="small">Offices</Chip>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PhotoSlot Placeholder Pattern */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              5. PhotoSlot System
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Hatched pattern + specific shoot brief
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs text-muted uppercase">Card Aspect (Landscape)</div>
              <PhotoSlot
                brief="meter cupboard on a commercial site"
                className="h-48"
              />
            </div>
            <div className="space-y-2">
              <div className="font-mono text-xs text-muted uppercase">Hero Portrait (Tall)</div>
              <PhotoSlot
                brief="your account manager on a client's site (real, not stock)"
                className="h-48"
              />
            </div>
            <div className="space-y-2">
              <div className="font-mono text-xs text-muted uppercase">Office / Team</div>
              <PhotoSlot
                brief="the team in the office at work"
                className="h-48"
              />
            </div>
          </div>
        </section>

        {/* 6. Motion & Micro-animations */}
        <section className="space-y-6">
          <div className="border-b-2 border-ink pb-3 flex justify-between items-baseline">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-[-0.03em]">
              6. Interactive Instruments &amp; Motion
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              SVG Needle · Odometer Digits · Live Dot · Ticker
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logo Needle & Odometer */}
            <div className="bg-ink text-on-dark rounded-[6px] p-6 space-y-6">
              <div className="flex justify-between items-center border-b border-line-dark pb-4">
                <div className="flex items-center gap-3">
                  {/* SVG Meter Logo */}
                  <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#F1F1EC" strokeWidth="2.4" />
                    <path
                      d="M5.5 15.5a7 7 0 0 1 13 0"
                      fill="none"
                      stroke="#F1F1EC"
                      strokeWidth="1.2"
                      strokeDasharray="1.2 1.6"
                    />
                    <line
                      className="animate-sway"
                      x1="12"
                      y1="13"
                      x2="16.5"
                      y2="8"
                      stroke="#FF5B1F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="13" r="1.8" fill="#F1F1EC" />
                  </svg>
                  <span className="font-display font-black text-2xl tracking-[-0.035em]">West Coast Services</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#8B8F86]">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" />
                  Live reading
                </div>
              </div>

              {/* Rolling digits */}
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#8B8F86]">
                  Odometer Digits (CSS translateY step animation)
                </div>
                <div
                  aria-hidden="true"
                  className="font-mono font-medium text-4xl sm:text-5xl mt-3 flex gap-1 items-baseline"
                >
                  <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">0</span>
                  <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">4</span>
                  <span className="bg-[#1E221E] px-2 py-1 rounded-[3px]">8</span>
                  <span className="bg-[#1E221E] px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top">
                    <span className="flex flex-col [animation:roll_220s_steps(10)_infinite]">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <span key={n}>{n}</span>
                      ))}
                    </span>
                  </span>
                  <span className="bg-[#1E221E] px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top">
                    <span className="flex flex-col [animation:roll_22s_steps(10)_infinite]">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <span key={n}>{n}</span>
                      ))}
                    </span>
                  </span>
                  <span className="bg-signal text-ink px-2 py-1 rounded-[3px] h-[1.3em] overflow-hidden inline-block align-top">
                    <span className="flex flex-col [animation:roll_2.2s_steps(10)_infinite]">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <span key={n}>{n}</span>
                      ))}
                    </span>
                  </span>
                  <span className="text-base text-[#8B8F86] ml-2">kWh</span>
                </div>
              </div>

              {/* Utility progress bars */}
              <div className="space-y-3 pt-3 border-t border-line-dark text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-20 text-on-dark-muted">Electricity</span>
                  <div className="flex-1 h-1 bg-line-dark overflow-hidden">
                    <div className="h-full bg-signal animate-fillbar" style={{ "--w": "100%" } as React.CSSProperties} />
                  </div>
                  <span className="font-mono text-xs text-on-dark">Switched</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-20 text-on-dark-muted">Water</span>
                  <div className="flex-1 h-1 bg-line-dark overflow-hidden">
                    <div className="h-full bg-on-dark-muted animate-fillbar" style={{ "--w": "62%" } as React.CSSProperties} />
                  </div>
                  <span className="font-mono text-xs text-on-dark-muted">Quoting</span>
                </div>
              </div>
            </div>

            {/* Marquee Ticker Preview */}
            <div className="border border-line rounded-[6px] p-6 bg-paper-2 flex flex-col justify-between space-y-4">
              <div>
                <div className="font-mono text-xs text-muted uppercase tracking-wider">
                  Ticker Preview (45s linear loop, pause on hover)
                </div>
                <p className="text-sm text-ink-2 mt-1">
                  Continuous ink banner running below the hero section.
                </p>
              </div>

              <div className="bg-ink text-on-dark rounded-[4px] py-4 overflow-hidden">
                <div className="flex w-max animate-ticker font-mono text-sm uppercase tracking-[0.14em]">
                  <div className="flex gap-8 pr-8 shrink-0">
                    <span>Electricity</span>
                    <span className="text-signal">/</span>
                    <span>Gas</span>
                    <span className="text-signal">/</span>
                    <span>Water</span>
                    <span className="text-signal">/</span>
                    <span>Waste</span>
                    <span className="text-signal">/</span>
                    <span>Websites</span>
                    <span className="text-signal">/</span>
                    <span>Social Media</span>
                    <span className="text-signal">/</span>
                    <span>SEO</span>
                    <span className="text-signal">/</span>
                    <span>Paid Ads</span>
                    <span className="text-signal">/</span>
                  </div>
                  <div aria-hidden="true" className="flex gap-8 pr-8 shrink-0">
                    <span>Electricity</span>
                    <span className="text-signal">/</span>
                    <span>Gas</span>
                    <span className="text-signal">/</span>
                    <span>Water</span>
                    <span className="text-signal">/</span>
                    <span>Waste</span>
                    <span className="text-signal">/</span>
                    <span>Websites</span>
                    <span className="text-signal">/</span>
                    <span>Social Media</span>
                    <span className="text-signal">/</span>
                    <span>SEO</span>
                    <span className="text-signal">/</span>
                    <span>Paid Ads</span>
                    <span className="text-signal">/</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
