"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactAside } from "@/components/contact/ContactAside";

export function ContactClient() {
  return (
    <div className="bg-paper text-ink pb-20">
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <SectionLabel>Contact Us</SectionLabel>
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-[-0.04em] leading-[0.95] mt-5 max-w-4xl">
          Tell us what you&apos;d like looked at.
        </h1>
        <p className="text-ink-2 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          We reply within one working day. If you&apos;ve got a bill to hand, attach it — it saves a phone call.
        </p>
      </section>

      {/* Main Grid: Form Left, Aside Right */}
      <section className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap gap-12 items-start">
        {/* Left Form Panel */}
        <div className="flex-[999_1_560px] min-w-0 border-2 border-ink rounded-[6px] bg-paper-2 p-8 md:p-12 shadow-sm">
          <EnquiryForm />
        </div>

        {/* Right Contact Details Aside */}
        <div className="flex-[1_1_340px] min-w-0">
          <ContactAside />
        </div>
      </section>
    </div>
  );
}
