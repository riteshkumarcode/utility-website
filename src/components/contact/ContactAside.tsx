import { siteConfig } from "@/content/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function ContactAside() {
  return (
    <aside className="space-y-6">
      {/* Talk to a Person card */}
      <div className="bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 rounded-[6px] p-8 space-y-6 shadow-sm">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-800 flex items-center gap-2.5 font-bold">
          <span className="w-2 h-2 rounded-full bg-signal animate-blink shadow-[0_0_8px_#00D084]" aria-hidden="true" />
          Talk to a person
        </div>

        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className="block font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.02em] text-emerald-950 hover:text-emerald-700 transition-colors leading-none"
        >
          {siteConfig.phone}
        </a>

        <div className="flex flex-col gap-2 pt-1 font-mono text-xs sm:text-sm">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-emerald-700 uppercase tracking-wider text-[11px] font-bold">Enquiries:</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-emerald-950 hover:text-emerald-700 font-medium transition-colors underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-emerald-700 uppercase tracking-wider text-[11px] font-bold">Sales:</span>
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="text-emerald-950 hover:text-emerald-700 font-medium transition-colors underline"
            >
              {siteConfig.salesEmail}
            </a>
          </div>
        </div>

        <div className="border-t border-emerald-200/80 pt-5 text-sm space-y-2 text-emerald-900">
          <div className="flex justify-between">
            <span>Opening hours</span>
            <span className="font-mono text-emerald-950 font-bold">{siteConfig.openingHours}</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday – Sunday</span>
            <span className="font-mono text-emerald-950 font-bold">Closed</span>
          </div>
        </div>
      </div>

      {/* What happens next */}
      <div className="border-[1.5px] border-line rounded-[6px] p-7 bg-paper-2 space-y-4">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          What happens next
        </div>
        <ol className="list-none p-0 m-0 space-y-4">
          <li className="flex gap-3.5">
            <span className="font-display font-extrabold text-xl text-rust w-5 shrink-0">1</span>
            <span className="text-sm leading-relaxed text-ink-2">
              We call or email within one working day to confirm details and meter specs.
            </span>
          </li>
          <li className="flex gap-3.5">
            <span className="font-display font-extrabold text-xl text-rust w-5 shrink-0">2</span>
            <span className="text-sm leading-relaxed text-ink-2">
              For utilities, we issue a Letter of Authority to tender the market; for marketing, we audit your online presence.
            </span>
          </li>
          <li className="flex gap-3.5">
            <span className="font-display font-extrabold text-xl text-rust w-5 shrink-0">3</span>
            <span className="text-sm leading-relaxed text-ink-2">
              You receive a side-by-side comparison with our commission clearly shown. No obligation.
            </span>
          </li>
        </ol>
      </div>

      {/* Office Premises Photo */}
      <PhotoSlot
        src="/images/contact/office-premises.jpg"
        alt={`West Coast Services commercial office premises in ${siteConfig.address.town}`}
        brief={`office premises in ${siteConfig.address.town}, ${siteConfig.address.county}`}
        className="h-52 w-full border border-line shadow-sm"
      />
    </aside>
  );
}
