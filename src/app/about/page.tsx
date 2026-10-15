import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { getAboutPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — A Small UK Team That Still Picks Up the Phone | Veltro",
  description:
    "Learn about Veltro, our principles, our in-house UK team, and why business owners trust us for energy, water and waste comparison alongside digital marketing.",
};

export default function AboutPage() {
  const aboutSchema = getAboutPageSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  const team = [
    { name: "[Founder Name]", role: "Founder & Energy Lead", brief: "founder portrait at the office or on site visit" },
    { name: "[Account Manager Name]", role: "Account Manager — Utilities", brief: "utilities specialist reviewing bill analysis" },
    { name: "[Developer Name]", role: "Web Designer & Developer", brief: "designer building custom client website on laptop" },
    { name: "[Marketing Lead Name]", role: "Social Media & Ads Specialist", brief: "digital strategist reviewing client campaign metrics" },
  ];

  const credentials = [
    "[Energy broker code of practice / TPI scheme]",
    "[Ombudsman Services / dispute redress scheme]",
    `ICO Data Protection Registration: ${siteConfig.icoNumber || "[ZB000000]"}`,
    "[Google Partner / Meta Business Partner status]",
  ];

  return (
    <div className="bg-paper text-ink pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 pt-16 pb-12">
        <SectionLabel>About Veltro</SectionLabel>
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[-0.04em] leading-[0.95] mt-5 max-w-4xl">
          A small UK team that still picks up the phone.
        </h1>
        <div className="h-1.5 w-44 bg-signal mt-7 animate-grow" />
      </section>

      {/* Story & Facts */}
      <section className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-12 lg:gap-16 items-start">
          <div className="flex-[1_1_420px] min-w-0">
            <PhotoSlot
              src="/images/about/team-office.svg"
              alt="Veltro UK office team and utilities desk"
              brief="founder(s) at the office or on a client visit"
              className="h-[380px] sm:h-[480px] md:h-[540px] w-full border border-line shadow-sm"
            />
          </div>

          <div className="flex-[999_1_520px] min-w-0 space-y-6 text-lg md:text-xl text-ink-2 leading-relaxed">
            <p className="font-display font-bold text-2xl md:text-3xl text-ink tracking-[-0.01em] leading-snug m-0">
              [Founder name] started Veltro in 2024 after years working inside UK energy suppliers, watching business owners get quietly rolled onto punitive out-of-contract rates without notice.
            </p>
            <p className="m-0">
              The business began with one simple promise: check bills thoroughly, show every penny of supplier commission in writing before anyone signs, and never let a customer roll over by surprise.
            </p>
            <p className="m-0">
              As clients saved thousands on electricity, gas and water, they kept asking who could rebuild their outdated 2016 website or manage their social media. Rather than passing clients to unaccountable agencies, we built an in-house digital team with the exact same plain-spoken, honest standards.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-ink">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Founded</div>
                <div className="font-display font-extrabold text-3xl text-ink mt-1.5">2024</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Based in</div>
                <div className="font-display font-extrabold text-3xl text-ink mt-1.5">{siteConfig.address.town}</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Team</div>
                <div className="font-display font-extrabold text-3xl text-ink mt-1.5">UK Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Rules We Don't Bend (Ink dark section) */}
      <section className="bg-ink text-on-dark my-16">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <SectionLabel light>How We Work</SectionLabel>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-tight mt-3 m-0 max-w-2xl">
            Three rules we don&apos;t bend.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 border-t border-line-dark pt-10">
            <div className="space-y-3">
              <div className="font-display font-extrabold text-6xl text-signal leading-none">01</div>
              <h3 className="font-display font-bold text-2xl text-on-dark pt-2">Say what it costs.</h3>
              <p className="text-sm md:text-base text-[#C9CBC4] leading-relaxed m-0">
                Our commission on energy and our fees for marketing are written down before you agree to anything. No mystery charges.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-display font-extrabold text-6xl text-signal leading-none">02</div>
              <h3 className="font-display font-bold text-2xl text-on-dark pt-2">No pressure on the phone.</h3>
              <p className="text-sm md:text-base text-[#C9CBC4] leading-relaxed m-0">
                No &quot;this price ends at 5pm today&quot;. If a quote is genuinely good, it will still make sense after you&apos;ve slept on it.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-display font-extrabold text-6xl text-signal leading-none">03</div>
              <h3 className="font-display font-bold text-2xl text-on-dark pt-2">Report the bad months too.</h3>
              <p className="text-sm md:text-base text-[#C9CBC4] leading-relaxed m-0">
                If an ad campaign underperforms or a supplier dispute drags out, you&apos;ll hear it from us first — along with our plan to resolve it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-between items-baseline gap-4 mb-10">
          <div>
            <SectionLabel>In-House Team</SectionLabel>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] mt-3 m-0">
              The people you&apos;ll speak to
            </h2>
          </div>
          <p className="text-sm md:text-base text-ink-2 max-w-sm m-0">
            Real names, real UK specialists. You deal with the same named person every time you call.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((person) => (
            <div key={person.name} className="border border-line rounded-[6px] overflow-hidden bg-paper-2 flex flex-col">
              <div className="h-64 overflow-hidden">
                <PhotoSlot brief={person.brief} className="h-full rounded-none border-0" />
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-display font-bold text-xl text-ink m-0">{person.name}</h3>
                <p className="font-mono text-xs text-muted m-0">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <SectionLabel>Memberships &amp; Credentials</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 border-t-2 border-ink pt-6">
          {credentials.map((cred, idx) => (
            <div key={idx} className="p-4 border border-line rounded-[4px] bg-paper-2 text-sm font-semibold text-ink">
              {cred}
            </div>
          ))}
        </div>
        <p className="font-mono text-xs text-muted mt-4">
          * Veltro operates under strict compliance with Ofgem TPI guidelines and UK data protection law.
        </p>
      </section>

      {/* Closing CTA Band */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="bg-signal rounded-[6px] p-10 md:p-14 flex flex-wrap justify-between items-center gap-8 text-ink">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
            Come and say hello. Kettle&apos;s on.
          </h2>
          <Button variant="primary" href="/contact" size="large">
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  );
}
