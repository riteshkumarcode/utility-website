"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactAside } from "@/components/contact/ContactAside";

export function ContactClient() {
  return (
    <div className="bg-paper text-ink pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-10">
        <SectionLabel>Contact Us</SectionLabel>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.98] mt-4 sm:mt-5 max-w-4xl break-words">
          Tell us what you&apos;d like looked at.
        </h1>
        <p className="text-ink-2 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl leading-relaxed">
          We reply within one working day. If you&apos;ve got a bill to hand, attach it — it saves a phone call.
        </p>
      </section>

      {/* Main Grid: Form Left, Aside Right */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-8 sm:gap-12 items-start">
        {/* Left Form Panel */}
        <div className="flex-[999_1_500px] min-w-0 border-2 border-ink rounded-[6px] bg-paper-2 p-5 sm:p-8 md:p-12 shadow-sm">
          <EnquiryForm />
        </div>

        {/* Right Contact Details Aside */}
        <div className="flex-[1_1_320px] min-w-0 w-full">
          <ContactAside />
        </div>
      </section>
    </div>
  );
}
