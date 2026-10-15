import { siteConfig } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-[#C9CBC4] font-mono text-xs tracking-normal border-b border-line-dark">
      <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-signal animate-blink inline-block"
            aria-hidden="true"
          />
          <span>Lines open {siteConfig.openingHours}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Call </span>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="text-on-dark hover:text-signal transition-colors font-medium"
          >
            {siteConfig.phone}
          </a>
          <span aria-hidden="true" className="text-muted">·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-on-dark hover:text-signal transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
