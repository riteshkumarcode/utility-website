"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Scroll to top on route change unless navigating to a hash anchor
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  if (shouldReduceMotion) {
    return (
      <div key={pathname} className="w-full flex-1">
        {children}
      </div>
    );
  }

  return (
    <>
      {/* Top Sweep Route Progress Bar (Signal Orange Glow) */}
      <motion.div
        key={`progress-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.75, 1],
        }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-signal z-[99999] origin-left pointer-events-none shadow-[0_0_12px_rgba(255,91,31,0.7)]"
      />

      {/* Main Page Transition Effect: Smooth lift + defocus-in */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex-1"
      >
        {children}
      </motion.div>
    </>
  );
}
