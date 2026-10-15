import type { Metadata } from "next";
import { homeContent } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { ServiceIndex } from "@/components/home/ServiceIndex";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Promises } from "@/components/home/Promises";
import { Testimonial } from "@/components/home/Testimonial";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Veltro — Business Utilities & Digital Marketing | UK Energy Broker",
  description:
    "We sort out the bills you hate opening — and the marketing you never get round to. Whole-of-market business electricity, gas, water & waste comparison.",
};

export default function Home() {
  const { ctaBand } = homeContent;
  const orgSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Ticker Marquee */}
      <Ticker />

      {/* 3. Service Index */}
      <Reveal>
        <ServiceIndex />
      </Reveal>

      {/* 4. Savings Calculator */}
      <Reveal>
        <SavingsCalculator />
      </Reveal>

      {/* 5. Process Steps */}
      <Reveal>
        <ProcessSteps />
      </Reveal>

      {/* 6. Promises (Ink dark section) */}
      <Reveal>
        <Promises />
      </Reveal>

      {/* 7. Testimonial */}
      <Reveal>
        <Testimonial />
      </Reveal>

      {/* 8. Closing CTA Band */}
      <CtaBand
        headline={ctaBand.headline}
        buttonText={ctaBand.buttonText}
        buttonHref={ctaBand.buttonHref}
      />
    </div>
  );
}
