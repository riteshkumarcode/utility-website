import { siteConfig } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden md:block bg-emerald-50/80 text-emerald-950 font-mono text-xs tracking-normal border-b border-emerald-100/80">
      <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full bg-signal animate-blink inline-block shadow-[0_0_8px_#00D084]"
            aria-hidden="true"
          />
          <span className="text-emerald-900 font-medium">Lines open {siteConfig.openingHours}</span>
        </div>
        <div className="flex items-center gap-3 text-emerald-800">
          <span>Call </span>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="text-emerald-950 hover:text-emerald-700 font-bold transition-colors"
          >
            {siteConfig.phone}
          </a>
          <span aria-hidden="true" className="text-emerald-300">·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-emerald-950 hover:text-emerald-700 font-medium transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
