import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Notice | Veltro",
  description: "Privacy notice explaining how Veltro handles business contact details, utility bills, and personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24 text-ink">
      <SectionLabel>Legal Notice</SectionLabel>
      <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-[-0.035em] mt-4 leading-tight">
        Privacy Notice
      </h1>
      <div className="h-1.5 w-32 bg-signal mt-6" />
      <p className="font-mono text-xs text-muted mt-4">
        Last updated: 14 October 2026 · Registered company: {siteConfig.legalName}
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-ink-2 leading-relaxed border-t border-line pt-8">
        <section className="space-y-3">
          <h2 className="font-display font-bold text-2xl text-ink">1. Who We Are</h2>
          <p>
            {siteConfig.legalName} (&quot;Veltro&quot;, &quot;we&quot;, &quot;us&quot;) is registered in England &amp; Wales under company number {siteConfig.companyNumber}. We act as a data controller when you submit your business details, utility bills, or contact information through this website.
          </p>
          <p>
            Data protection registration: ICO reference {siteConfig.icoNumber || "[CLIENT TO COMPLETE ICO NUMBER]"}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-2xl text-ink">2. What Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name, business name, work email address, and commercial telephone number.</li>
            <li>Business utility bills uploaded via our contact forms (containing meter numbers, MPAN, MPRN, SPID, and historic consumption data).</li>
            <li>Signed Letter of Authority (LOA) forms required by energy and water suppliers.</li>
            <li>Technical device data and cookie preferences (see our Cookie Policy).</li>
          </ul>
        </section>

        <section className="space-y-3 p-6 bg-stone rounded-[6px] border border-line">
          <h2 className="font-display font-bold text-xl text-ink">[CLIENT TO COMPLETE: Data Retention &amp; Third Parties]</h2>
          <p className="text-sm text-ink-2 leading-relaxed">
            [CLIENT TO COMPLETE: Insert specific details regarding how long utility bill files are stored in your inbox, third-party supplier panel names who receive the Letter of Authority, and contact details for your appointed Data Protection Officer.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-2xl text-ink">3. Your Legal Rights</h2>
          <p>
            Under UK GDPR, you have the right to request access to, rectification of, or erasure of your personal data at any time. To make a subject access request, email us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-rust underline font-medium">
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
