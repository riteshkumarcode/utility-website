import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Promises() {
  const { promises } = homeContent;

  return (
    <section className="my-16 bg-gradient-to-br from-emerald-50/80 via-white to-cyan-50/60 border-y border-emerald-100/90 text-ink">
      <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-24 flex flex-wrap gap-14 items-start">
        {/* Left Column */}
        <div className="flex-[1_1_360px] min-w-0 space-y-6">
          <SectionLabel>{promises.label}</SectionLabel>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-tight m-0 text-ink">
            {promises.h2}
          </h2>

          <div className="pt-4">
            <PhotoSlot
              src={promises.photoSrc}
              alt="West Coast Services team working in modern UK office"
              brief={promises.photoBrief}
              className="h-64 sm:h-72 w-full border border-emerald-200/80 rounded-[6px] shadow-sm bg-white"
            />
          </div>
        </div>

        {/* Right Column: 4 Commitments */}
        <div className="flex-[999_1_520px] min-w-0 divide-y divide-emerald-100/90">
          {promises.items.map((item) => (
            <div key={item.num} className="py-7 first:pt-0 flex gap-6 items-start">
              <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-[4px] shrink-0 border border-emerald-200">
                {item.num}
              </span>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-ink tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-ink-2 leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
