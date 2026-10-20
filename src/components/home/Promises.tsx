import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Promises() {
  const { promises } = homeContent;

  return (
    <section className="bg-ink text-on-dark my-16">
      <div className="max-w-[1280px] mx-auto px-6 py-24 flex flex-wrap gap-14 items-start">
        {/* Left Column */}
        <div className="flex-[1_1_360px] min-w-0 space-y-6">
          <SectionLabel light>{promises.label}</SectionLabel>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-tight m-0">
            {promises.h2}
          </h2>

          <div className="pt-4">
            <PhotoSlot
              src={promises.photoSrc}
              alt="West Coast Services team working in modern UK office"
              brief={promises.photoBrief}
              className="h-64 sm:h-72 w-full border border-line-dark shadow-md"
            />
          </div>
        </div>

        {/* Right Column: 4 Commitments */}
        <div className="flex-[999_1_520px] min-w-0 divide-y divide-line-dark">
          {promises.items.map((item) => (
            <div key={item.num} className="py-7 first:pt-0 flex gap-6 items-start">
              <span className="font-mono text-base font-bold text-signal pt-1 shrink-0">
                {item.num}
              </span>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-on-dark tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#C9CBC4] leading-relaxed m-0">
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
