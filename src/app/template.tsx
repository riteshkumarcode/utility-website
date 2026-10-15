"use client";

import { motion } from "motion/react";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change unless navigating to a hash anchor
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return (
    <>
      {/* High-visibility Signal Orange Top Route Progress Sweep */}
      <motion.div
        key={`progress-bar-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.75, 1],
        }}
        className="fixed top-0 left-0 right-0 h-[4px] bg-signal z-[99999] origin-left pointer-events-none shadow-[0_0_16px_rgba(255,91,31,0.85)]"
      />

      {/* Main Page Entrance Effect: Smooth lift + fade */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.36,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex-1"
      >
        {children}
      </motion.div>
    </>
  );
}
