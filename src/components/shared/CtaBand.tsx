import { Button } from "@/components/ui/Button";

interface CtaBandProps {
  headline: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function CtaBand({
  headline,
  buttonText,
  buttonHref,
  className = "",
}: CtaBandProps) {
  return (
    <section className={`max-w-[1280px] mx-auto px-6 py-16 md:py-20 ${className}`}>
      <div className="bg-signal rounded-[6px] p-10 md:p-14 flex flex-wrap justify-between items-center gap-8 text-ink">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] leading-tight m-0 max-w-2xl">
          {headline}
        </h2>
        <Button variant="primary" href={buttonHref} size="large">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
