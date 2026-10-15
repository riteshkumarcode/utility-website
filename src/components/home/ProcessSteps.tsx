import { homeContent } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProcessSteps() {
  const { process } = homeContent;

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-24">
      <SectionLabel>{process.label}</SectionLabel>

      <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-tight mt-3 m-0 max-w-3xl">
        {process.h2}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 border-t-2 border-ink pt-8">
        {process.steps.map((step) => (
          <div key={step.num} className="space-y-3 pb-6 border-b border-line lg:border-b-0">
            <div className="font-display font-extrabold text-6xl md:text-7xl text-signal leading-none">
              {step.num}
            </div>
            <h3 className="font-display font-bold text-2xl tracking-[-0.01em] text-ink pt-2">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-ink-2 leading-relaxed m-0">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
