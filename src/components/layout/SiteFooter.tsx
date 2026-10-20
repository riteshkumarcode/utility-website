"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { Arrow } from "@/components/ui/Arrow";

export function SiteFooter() {
  const [ukTime, setUkTime] = useState<string>("");
  const [gridFreq, setGridFreq] = useState<number>(50.01);

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setUkTime(timeStr);
      } catch {
        setUkTime("12:00:00");
      }
    };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    const freqInterval = setInterval(() => {
      setGridFreq((prev) => {
        const delta = (Math.random() - 0.5) * 0.03;
        return Number(Math.max(49.96, Math.min(50.04, prev + delta)).toFixed(2));
      });
    }, 3200);

    return () => {
      clearInterval(clockInterval);
      clearInterval(freqInterval);
    };
  }, []);

  const tickerItems = [
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "COMMERCIAL ELECTRICITY", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "BUSINESS GAS CONTRACTS", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "WATER AUDITS & EFFICIENCY", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "WASTE & RECYCLING AUDITS", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "NEXT.JS WEBSITES & APPS", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "LOCAL SEO & LEAD GEN", isBrand: false },
    { text: siteConfig.name.toUpperCase(), isBrand: true },
    { text: "TRANSPARENT COMMISSION", isBrand: false },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-[#C9CBC4] overflow-hidden border-t-2 border-ink relative">
      {/* Top Animated Gradient Accent Line */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-signal via-[#FF7E47] to-signal opacity-90"
      />

      {/* Live Telemetry & Status Bar */}
      <div className="border-b border-line-dark/80 bg-[#0E110E] py-2.5 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-3 font-mono text-xs text-[#8B8F86]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="text-on-dark font-semibold">UK Operations Live</span>
            <span className="text-line-dark">|</span>
            <span>London Time: <strong className="text-on-dark font-medium">{ukTime || "--:--:--"} GMT</strong></span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[#8B8F86]">Live Grid:</span>
              <svg className="w-12 h-3.5 text-signal opacity-80" viewBox="0 0 60 16" fill="none">
                <path
                  d="M0 8 Q 7.5 1, 15 8 T 30 8 T 45 8 T 60 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="animate-pulse"
                />
              </svg>
              <strong className="text-signal">{gridFreq} Hz</strong>
            </div>
            <span className="text-line-dark hidden sm:inline">|</span>
            <span className="text-[#A6AAA0]">Transparent Commission Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        {/* 4 Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              className="font-display font-black text-3xl text-on-dark tracking-[-0.03em] hover:text-signal transition-colors inline-block group"
            >
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px] text-[#A6AAA0] m-0">
              Business utilities and digital marketing for UK companies. {siteConfig.address.town}, {siteConfig.address.county}.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[3px] bg-[#161916] border border-line-dark text-[11px] font-mono text-[#A6AAA0] w-fit mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Lines Active &middot; {siteConfig.openingHours}</span>
            </div>
            <div className="pt-2 font-mono text-xs text-[#8B8F86] space-y-1">
              <div>Enquiries: <a href={`mailto:${siteConfig.email}`} className="text-on-dark hover:text-signal underline">{siteConfig.email}</a></div>
              <div>Sales: <a href={`mailto:${siteConfig.salesEmail}`} className="text-on-dark hover:text-signal underline">{siteConfig.salesEmail}</a></div>
            </div>
          </div>

          {/* Col 2: Utilities */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <Link
              href="/services/utilities"
              className="font-mono text-xs uppercase tracking-[0.12em] text-signal font-bold hover:underline mb-1 inline-flex items-center gap-1 group"
            >
              <span>Energy &amp; Utilities Hub</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/services/business-electricity"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Business electricity
            </Link>
            <Link
              href="/services/business-gas"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Business gas
            </Link>
            <Link
              href="/services/business-water"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Business water
            </Link>
            <Link
              href="/services/waste-management"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Waste management
            </Link>
          </div>

          {/* Col 3: Digital */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <Link
              href="/services/digital"
              className="font-mono text-xs uppercase tracking-[0.12em] text-signal font-bold hover:underline mb-1 inline-flex items-center gap-1 group"
            >
              <span>Digital Studio Hub</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/services/website-development"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Website development
            </Link>
            <Link
              href="/services/social-media-marketing"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Social media
            </Link>
            <Link
              href="/services/seo"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              SEO
            </Link>
            <Link
              href="/services/paid-advertising"
              className="text-on-dark hover:text-signal transition-colors self-start hover:translate-x-1 transform duration-150"
            >
              Paid ads
            </Link>
          </div>

          {/* Col 4: Company */}
          <div className="flex flex-col gap-2.5 text-[15px]">
            <div className="font-mono text-xs uppercase tracking-[0.12em] text-[#8B8F86] mb-1">
              Direct Contact
            </div>
            <Link
              href="/services"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              All services
            </Link>
            <Link
              href="/about"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-on-dark hover:text-signal transition-colors self-start"
            >
              Contact office
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="font-mono text-sm sm:text-base text-signal font-bold hover:underline mt-2 self-start flex items-center gap-1.5"
            >
              <span>{siteConfig.phone}</span>
            </a>
            <span className="font-mono text-[11px] text-[#8B8F86]">{siteConfig.openingHours}</span>

            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-[#8B8F86] hover:text-signal transition-colors self-start group cursor-pointer"
              aria-label="Back to top"
            >
              <span className="w-5 h-5 rounded-full border border-line-dark flex items-center justify-center group-hover:border-signal group-hover:-translate-y-0.5 transition-transform">
                ↑
              </span>
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Dynamic Name Ticker Banner (Infinite Marquee) */}
        <div
          aria-hidden="true"
          className="relative mt-16 py-5 overflow-hidden select-none border-y border-line-dark/70 bg-[#141714]/80 rounded-[4px] group"
        >
          {/* Subtle gradient edges for fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-ticker items-center text-[clamp(28px,4.5vw,52px)] font-display font-black tracking-[-0.03em] uppercase leading-none">
            {/* Track 1 */}
            <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 shrink-0">
              {tickerItems.map((item, idx) => (
                <span key={`t1-${idx}`} className="flex items-center gap-6 sm:gap-10">
                  <span
                    className={
                      item.isBrand
                        ? "text-on-dark hover:text-signal transition-colors font-black"
                        : "text-[#3C413B] hover:text-[#C9CBC4] transition-colors font-bold"
                    }
                  >
                    {item.text}
                  </span>
                  <span
                    className={`inline-block rounded-full shrink-0 ${
                      item.isBrand
                        ? "w-3 h-3 bg-signal shadow-[0_0_10px_#FF5B1F]"
                        : "w-2 h-2 bg-[#444A43]"
                    }`}
                  />
                </span>
              ))}
            </div>

            {/* Track 2 (Duplicate for continuous loop) */}
            <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 shrink-0">
              {tickerItems.map((item, idx) => (
                <span key={`t2-${idx}`} className="flex items-center gap-6 sm:gap-10">
                  <span
                    className={
                      item.isBrand
                        ? "text-on-dark hover:text-signal transition-colors font-black"
                        : "text-[#3C413B] hover:text-[#C9CBC4] transition-colors font-bold"
                    }
                  >
                    {item.text}
                  </span>
                  <span
                    className={`inline-block rounded-full shrink-0 ${
                      item.isBrand
                        ? "w-3 h-3 bg-signal shadow-[0_0_10px_#FF5B1F]"
                        : "w-2 h-2 bg-[#444A43]"
                    }`}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="mt-8 pt-6 border-t border-line-dark/60 flex flex-wrap justify-between items-center gap-4 text-xs text-[#8B8F86] leading-relaxed">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              © 2026 {siteConfig.legalName}. Registered in England &amp; Wales, no. {siteConfig.companyNumber}.
            </span>
            <Link href="/privacy" className="hover:text-on-dark underline">
              Privacy Notice
            </Link>
            <Link href="/cookies" className="hover:text-on-dark underline">
              Cookie Policy
            </Link>
          </div>
          <div className="max-w-md text-right md:text-left">
            <span>{siteConfig.commissionStatement}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
