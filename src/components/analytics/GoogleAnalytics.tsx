"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("westcoastservices-consent-update", callback);
  window.addEventListener("veltro-consent-update", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("westcoastservices-consent-update", callback);
    window.removeEventListener("veltro-consent-update", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored =
      localStorage.getItem("westcoastservices_cookie_consent") ||
      localStorage.getItem("veltro_cookie_consent");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.accepted === true;
    }
  } catch {
    // Ignore errors
  }
  return false;
}

function getServerSnapshot(): boolean {
  return false;
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const consented = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!gaId || !consented) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
