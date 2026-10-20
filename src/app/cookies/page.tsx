import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Cookie Policy | West Coast Services",
  description: "Information about how West Coast Services uses cookies in compliance with UK GDPR and PECR.",
};

export default function CookiePage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24 text-ink">
      <SectionLabel>Privacy &amp; Cookies</SectionLabel>
      <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-[-0.035em] mt-4 leading-tight">
        Cookie Policy
      </h1>
      <div className="h-1.5 w-32 bg-signal mt-6" />
      <p className="font-mono text-xs text-muted mt-4">
        Last updated: 14 October 2026 · Compliant with PECR / UK GDPR
      </p>

      <div className="mt-12 space-y-8 text-base md:text-lg text-ink-2 leading-relaxed border-t border-line pt-8">
        <section className="space-y-3">
          <h2 className="font-display font-bold text-2xl text-ink">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your computer or mobile phone when you visit a website. Under the Privacy and Electronic Communications Regulations (PECR), we must obtain your consent before placing any non-essential cookies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-ink">2. Cookies We Use</h2>

          <div className="border border-line rounded-[6px] overflow-hidden bg-paper-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-ink text-on-dark font-mono text-xs uppercase">
                  <th className="p-3 border-r border-line-dark">Cookie Name</th>
                  <th className="p-3 border-r border-line-dark">Category</th>
                  <th className="p-3 border-r border-line-dark">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-3 font-mono font-bold border-r border-line">westcoastservices_cookie_consent</td>
                  <td className="p-3 border-r border-line">Strictly Necessary</td>
                  <td className="p-3 border-r border-line">Remembers your choice on the cookie banner</td>
                  <td className="p-3">6 months</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold border-r border-line">_ga / _ga_*</td>
                  <td className="p-3 border-r border-line">Optional Analytics</td>
                  <td className="p-3 border-r border-line">Google Analytics (only loaded if accepted)</td>
                  <td className="p-3">Up to 2 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3 p-6 bg-stone rounded-[6px] border border-line">
          <h2 className="font-display font-bold text-xl text-ink">[CLIENT TO COMPLETE: Third Party Analytics Tooling]</h2>
          <p className="text-sm text-ink-2 leading-relaxed">
            [CLIENT TO COMPLETE: Confirm whether you use Google Analytics 4, Plausible, or another analytics vendor, and confirm your target retention settings.]
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-2xl text-ink">3. Managing Your Preferences</h2>
          <p>
            You can change your cookie preferences at any time by clearing your browser cache or clicking &quot;Cookie settings&quot; in our website footer. For questions, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-rust underline font-medium">
              {siteConfig.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
