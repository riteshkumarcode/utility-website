import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { services } from "@/content/services";
import { Arrow } from "@/components/ui/Arrow";

export function ServiceIndex() {
  const { serviceIndex } = homeContent;
  const utils = services.filter((s) => s.group === "utilities");
  const digis = services.filter((s) => s.group === "digital");

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
      {/* Section Header */}
      <div className="flex flex-wrap justify-between items-end gap-6 pb-2">
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight m-0 max-w-2xl break-words">
          {serviceIndex.h2}
        </h2>
        <p className="max-w-md text-base sm:text-lg text-ink-2 leading-relaxed m-0">
          {serviceIndex.intro}
        </p>
      </div>

      {/* 2 Column Index Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-10 sm:mt-12">
        {/* Column A: Utilities */}
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted pb-3.5 border-b-2 border-ink flex justify-between items-center">
            <span>{serviceIndex.utilitiesHeading}</span>
            <Link href="/services/utilities" className="text-signal hover:underline lowercase font-bold tracking-normal">
              view all →
            </Link>
          </div>
          <div className="divide-y divide-line">
            {utils.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 -mx-1 sm:-mx-3 rounded-[4px] hover:bg-signal transition-colors text-ink"
              >
                <span className="font-mono text-xs sm:text-sm font-semibold text-muted group-hover:text-ink transition-colors w-5 sm:w-6 shrink-0">
                  {s.num}
                </span>

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] overflow-hidden shrink-0 border border-line group-hover:border-ink/40 bg-stone">
                  {s.photo.src && (
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt || s.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-base sm:text-xl tracking-[-0.02em] block truncate">
                    {s.name}
                  </span>
                  <span className="text-xs sm:text-sm text-ink-2 group-hover:text-ink/90 transition-colors block mt-0.5 truncate">
                    {s.cardLine}
                  </span>
                </div>
                <Arrow className="group-hover:translate-x-1.5 shrink-0" size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Column B: Digital */}
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted pb-3.5 border-b-2 border-ink flex justify-between items-center">
            <span>{serviceIndex.digitalHeading}</span>
            <Link href="/services/digital" className="text-signal hover:underline lowercase font-bold tracking-normal">
              view all →
            </Link>
          </div>
          <div className="divide-y divide-line">
            {digis.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 -mx-1 sm:-mx-3 rounded-[4px] hover:bg-signal transition-colors text-ink"
              >
                <span className="font-mono text-xs sm:text-sm font-semibold text-muted group-hover:text-ink transition-colors w-5 sm:w-6 shrink-0">
                  {s.num}
                </span>

                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] overflow-hidden shrink-0 border border-line group-hover:border-ink/40 bg-stone">
                  {s.photo.src && (
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt || s.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-base sm:text-xl tracking-[-0.02em] block truncate">
                    {s.name}
                  </span>
                  <span className="text-xs sm:text-sm text-ink-2 group-hover:text-ink/90 transition-colors block mt-0.5 truncate">
                    {s.cardLine}
                  </span>
                </div>
                <Arrow className="group-hover:translate-x-1.5 shrink-0" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
