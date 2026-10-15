"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("veltro_cookie_consent");
      if (!consent) {
        setShow(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem(
      "veltro_cookie_consent",
      JSON.stringify({
        accepted,
        timestamp: new Date().toISOString(),
      })
    );
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("veltro-consent-update", { detail: { accepted } })
      );
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-paper-2 border-2 border-ink p-6 rounded-[6px] shadow-2xl animate-up"
    >
      <div className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-2">
        Cookie Consent · UK GDPR / PECR
      </div>
      <p className="text-sm text-ink-2 leading-relaxed m-0">
        We use essential cookies to make this site work. With your permission, we also use analytics to see how visitors move around the site. We never load analytics without your consent.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button
          variant="primary"
          size="small"
          showArrow={false}
          onClick={() => handleConsent(true)}
        >
          Accept analytics
        </Button>
        <Button
          variant="outline"
          size="small"
          showArrow={false}
          onClick={() => handleConsent(false)}
        >
          Reject optional
        </Button>
        <Link
          href="/cookies"
          className="text-xs text-rust hover:underline ml-auto"
        >
          Cookie policy
        </Link>
      </div>
    </aside>
  );
}
