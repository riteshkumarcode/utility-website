import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { MeterPanel } from "./MeterPanel";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="max-w-[1280px] mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20">
      <div className="flex flex-wrap gap-12 lg:gap-16 items-end justify-between">
        {/* Left Column */}
        <div className="flex-[999_1_560px] min-w-0">
          <SectionLabel>{hero.label}</SectionLabel>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] leading-[0.96] mt-5">
            {hero.h1}
          </h1>

          <div className="h-1.5 w-44 bg-signal mt-7 animate-grow" />

          <p className="text-ink-2 text-lg sm:text-xl md:text-2xl mt-7 leading-relaxed max-w-2xl">
            {hero.intro}
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Button variant="primary" href="/contact" size="large">
              Get a free bill check
            </Button>
            <Button variant="outline" href="/services" size="large" showArrow={false}>
              See all services
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs sm:text-sm text-muted">
            {hero.proofPoints.map((point, idx) => (
              <span key={point} className="flex items-center gap-x-6">
                <span>{point}</span>
                {idx < hero.proofPoints.length - 1 && (
                  <span aria-hidden="true" className="text-line">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Meter Panel & Photo */}
        <div className="flex-[1_1_380px] min-w-0 w-full lg:max-w-md">
          <MeterPanel />
        </div>
      </div>
    </section>
  );
}
