"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/content/site";
import { Arrow } from "@/components/ui/Arrow";

export function SiteNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Handle escape key and focus trap
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        openButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Focus the first element inside drawer
    const timer = setTimeout(() => {
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>("a, button");
      firstFocusable?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const baseHref = href.split("#")[0];
    return pathname.startsWith(baseHref);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-line">
      <nav
        aria-label="Main"
        className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2.5 font-display font-black text-2xl md:text-[27px] tracking-[-0.035em] text-ink focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0"
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
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav Links (hidden under 900px) */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-[15px]">
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
            className="group inline-flex items-center justify-center gap-2.5 bg-signal text-ink font-bold text-[15px] px-5 py-3 rounded-[4px] min-h-[46px] transition-colors duration-200 hover:bg-ink hover:text-on-dark focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            <span>Free bill check</span>
            <Arrow className="group-hover:translate-x-1.5" size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button (visible under lg / 900px) */}
        <button
          ref={openButtonRef}
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-drawer"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-ink hover:bg-stone/50 rounded-[4px] transition-colors focus-visible:outline-2 focus-visible:outline-ink"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Drawer (Full-screen ink sheet) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="lg:hidden fixed inset-0 z-50 bg-ink text-on-dark flex flex-col justify-between p-6 sm:p-10 animate-up"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-line-dark pb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 font-display font-black text-2xl text-on-dark"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
              <span>{siteConfig.name}</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openButtonRef.current?.focus();
              }}
              aria-label="Close menu"
              className="p-2.5 text-on-dark hover:text-signal transition-colors focus-visible:outline-2 focus-visible:outline-signal"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Large Archivo Nav Links */}
          <div className="flex flex-col gap-6 my-auto py-6">
            {siteConfig.navLinks.map((link, idx) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] flex items-center justify-between group transition-colors ${
                    active ? "text-signal" : "text-on-dark hover:text-signal"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs font-normal text-muted tracking-widest">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <Arrow className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer Details & CTA */}
          <div className="border-t border-line-dark pt-6 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-between bg-signal text-ink font-bold text-lg p-4 rounded-[4px] min-h-[54px]"
            >
              <span>Get a free bill check</span>
              <Arrow size={20} />
            </Link>

            <div className="flex flex-col gap-1 text-sm text-[#8B8F86] font-mono pt-2">
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-on-dark transition-colors">
                Call {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-on-dark transition-colors">
                {siteConfig.email}
              </a>
              <span className="text-xs pt-1">{siteConfig.openingHours}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
