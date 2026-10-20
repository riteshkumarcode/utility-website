"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/content/site";
import { Arrow } from "@/components/ui/Arrow";

export function SiteNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [utilitiesOpen, setUtilitiesOpen] = useState(true);
  const [digitalOpen, setDigitalOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  // Mount detection for React portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and handle keyboard accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        openButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const baseHref = href.split("#")[0];
    return pathname.startsWith(baseHref);
  };

  const utilityServices = [
    { name: "Business Electricity", href: "/services/business-electricity", num: "01" },
    { name: "Business Gas", href: "/services/business-gas", num: "02" },
    { name: "Business Water", href: "/services/business-water", num: "03" },
    { name: "Waste Management", href: "/services/waste-management", num: "04" },
  ];

  const digitalServices = [
    { name: "Website Development", href: "/services/website-development", num: "05" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing", num: "06" },
    { name: "SEO & Search", href: "/services/seo", num: "07" },
    { name: "Paid Advertising", href: "/services/paid-advertising", num: "08" },
  ];

  const drawerContent = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/75 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Full-height Mobile Drawer */}
          <motion.div
            ref={menuRef}
            id="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-ink text-on-dark flex flex-col h-[100dvh] max-h-[100dvh] shadow-2xl border-l border-line-dark/80 overflow-y-auto overscroll-contain"
          >
            {/* Drawer Header */}
            <div className="sticky top-0 z-10 bg-ink/95 backdrop-blur-sm flex items-center justify-between px-5 py-4 border-b border-line-dark">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 font-display font-black text-xl text-on-dark"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#F1F1EC" strokeWidth="2.4" />
                  <path d="M5.5 15.5a7 7 0 0 1 13 0" fill="none" stroke="#F1F1EC" strokeWidth="1.2" strokeDasharray="1.2 1.6" />
                  <line className="animate-sway" x1="12" y1="13" x2="16.5" y2="8" stroke="#FF5B1F" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="12" cy="13" r="1.8" fill="#F1F1EC" />
                </svg>
                <span>{siteConfig.name}</span>
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openButtonRef.current?.focus();
                }}
                aria-label="Close navigation menu"
                className="w-11 h-11 flex items-center justify-center text-on-dark hover:text-signal hover:bg-white/10 rounded-[4px] transition-colors focus-visible:outline-2 focus-visible:outline-signal cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 px-5 py-6 space-y-7">
              {/* Main Links */}
              <nav aria-label="Mobile Navigation" className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3 rounded-[4px] font-display font-extrabold text-2xl tracking-[-0.02em] transition-colors ${
                    pathname === "/" ? "bg-signal text-ink" : "text-on-dark hover:bg-white/5 hover:text-signal"
                  }`}
                >
                  <span>Home</span>
                  <Arrow size={18} />
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3 rounded-[4px] font-display font-extrabold text-2xl tracking-[-0.02em] transition-colors ${
                    isActive("/about") ? "bg-signal text-ink" : "text-on-dark hover:bg-white/5 hover:text-signal"
                  }`}
                >
                  <span>About Us</span>
                  <Arrow size={18} />
                </Link>

                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3 rounded-[4px] font-display font-extrabold text-2xl tracking-[-0.02em] transition-colors ${
                    pathname === "/services" ? "bg-signal text-ink" : "text-on-dark hover:bg-white/5 hover:text-signal"
                  }`}
                >
                  <span>All 8 Services</span>
                  <Arrow size={18} />
                </Link>
              </nav>

              {/* Energy & Utilities Section */}
              <div className="border-t border-line-dark pt-5">
                <div className="flex items-center justify-between pb-2 px-1">
                  <Link
                    href="/services/utilities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono text-xs uppercase tracking-[0.14em] text-signal font-bold hover:underline"
                  >
                    Energy &amp; Utilities Hub →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setUtilitiesOpen(!utilitiesOpen)}
                    aria-label="Toggle utility services list"
                    className="text-xs text-[#8B8F86] hover:text-on-dark p-1"
                  >
                    {utilitiesOpen ? "Hide" : "Show"}
                  </button>
                </div>

                {utilitiesOpen && (
                  <div className="grid grid-cols-1 gap-1.5 mt-2">
                    {utilityServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-[4px] text-sm font-semibold transition-colors ${
                          isActive(item.href) ? "bg-white/15 text-signal" : "text-[#C9CBC4] hover:bg-white/5 hover:text-on-dark"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-[#8B8F86]">{item.num}</span>
                          <span>{item.name}</span>
                        </span>
                        <span className="text-xs text-signal">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Digital Marketing Section */}
              <div className="border-t border-line-dark pt-5">
                <div className="flex items-center justify-between pb-2 px-1">
                  <Link
                    href="/services/digital"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-mono text-xs uppercase tracking-[0.14em] text-signal font-bold hover:underline"
                  >
                    Digital Studio Hub →
                  </Link>
                  <button
                    type="button"
                    onClick={() => setDigitalOpen(!digitalOpen)}
                    aria-label="Toggle digital services list"
                    className="text-xs text-[#8B8F86] hover:text-on-dark p-1"
                  >
                    {digitalOpen ? "Hide" : "Show"}
                  </button>
                </div>

                {digitalOpen && (
                  <div className="grid grid-cols-1 gap-1.5 mt-2">
                    {digitalServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-[4px] text-sm font-semibold transition-colors ${
                          isActive(item.href) ? "bg-white/15 text-signal" : "text-[#C9CBC4] hover:bg-white/5 hover:text-on-dark"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-[#8B8F86]">{item.num}</span>
                          <span>{item.name}</span>
                        </span>
                        <span className="text-xs text-signal">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact & Free Quote Direct Actions */}
              <div className="border-t border-line-dark pt-6 space-y-3.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between bg-signal text-ink font-bold text-base p-4 rounded-[4px] min-h-[50px] shadow-lg hover:bg-white transition-colors"
                >
                  <span>Get a free bill check</span>
                  <Arrow size={18} />
                </Link>

                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="w-full flex items-center justify-between border border-line-dark bg-[#161916] text-on-dark font-mono text-sm p-3.5 rounded-[4px] hover:border-signal transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{siteConfig.phone}</span>
                  </span>
                  <span className="text-xs text-signal font-bold">Call Now</span>
                </a>

                <div className="pt-2 text-xs font-mono text-[#8B8F86] space-y-1.5 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[#C9CBC4]">Lines Open {siteConfig.openingHours}</span>
                  </div>
                  <div>Email: <a href={`mailto:${siteConfig.email}`} className="text-on-dark hover:text-signal underline">{siteConfig.email}</a></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-line">
      <nav
        aria-label="Main"
        className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2 sm:gap-2.5 font-display font-black text-xl sm:text-2xl md:text-[27px] tracking-[-0.035em] text-ink focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0 sm:w-8 sm:h-8"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="#121512"
              strokeWidth="2.4"
            />
            <path
              d="M5.5 15.5a7 7 0 0 1 13 0"
              fill="none"
              stroke="#121512"
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
            <circle cx="12" cy="13" r="1.8" fill="#121512" />
          </svg>
          <span className="truncate">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav Links (hidden under lg) */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-8 font-semibold text-[15px]">
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 transition-colors relative ${
                  active
                    ? "text-ink font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-signal"
                    : "text-ink hover:text-rust"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 bg-signal text-ink font-bold text-sm sm:text-[15px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-[4px] min-h-[42px] sm:min-h-[46px] transition-colors duration-200 hover:bg-ink hover:text-on-dark focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            <span>Free bill check</span>
            <Arrow className="group-hover:translate-x-1.5" size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button (visible under lg) */}
        <button
          ref={openButtonRef}
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center text-ink hover:bg-stone/60 rounded-[4px] transition-colors focus-visible:outline-2 focus-visible:outline-ink cursor-pointer shrink-0"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Render Mobile Drawer via Portal directly to body to avoid containing block bugs */}
      {mounted && createPortal(drawerContent, document.body)}
    </header>
  );
}
