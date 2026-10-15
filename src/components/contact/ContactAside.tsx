import { siteConfig } from "@/content/site";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function ContactAside() {
  return (
    <aside className="space-y-6">
      {/* Talk to a Person card */}
      <div className="bg-ink text-on-dark rounded-[6px] p-8 space-y-6 shadow-lg">
        <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#8B8F86] flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-signal animate-blink" aria-hidden="true" />
          Talk to a person
        </div>

        <a
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className="block font-display font-extrabold text-3xl sm:text-4xl tracking-[-0.02em] text-on-dark hover:text-signal transition-colors leading-none"
        >
          {siteConfig.phone}
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block text-on-dark text-base hover:text-signal transition-colors underline"
        >
          {siteConfig.email}
        </a>

        <div className="border-t border-line-dark pt-5 text-sm space-y-2 text-[#C9CBC4]">
          <div className="flex justify-between">
            <span>Opening hours</span>
            <span className="font-mono text-on-dark">{siteConfig.openingHours}</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday – Sunday</span>
            <span className="font-mono text-on-dark">Closed</span>
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

      {/* Map Slot */}
      <PhotoSlot
        brief={`office premises in ${siteConfig.address.town}, ${siteConfig.address.county}`}
        className="h-52 w-full"
      />
    </aside>
  );
}
