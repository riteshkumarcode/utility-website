import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export default function NotFound() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-36 flex flex-col items-start justify-center">
      <SectionLabel>Error 404 · Meter Fault</SectionLabel>
      <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-[-0.04em] leading-[0.95] mt-5 max-w-3xl">
        No reading at this meter.
      </h1>
      <div className="h-1.5 w-44 bg-signal mt-7 animate-grow" />
      <p className="text-ink-2 text-xl md:text-2xl mt-8 max-w-xl leading-relaxed">
        The page you requested doesn&apos;t exist, has moved, or the link has an expired parameter.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Button variant="primary" href="/" size="large">
          Back to home
        </Button>
        <Button variant="outline" href="/services" size="large" showArrow={false}>
          Browse all services
        </Button>
      </div>

      <div className="mt-16 pt-8 border-t border-line text-xs font-mono text-muted">
        Need assistance? Call our UK office on{" "}
        <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`} className="text-ink font-bold underline hover:text-signal">
          {siteConfig.phone}
        </a>
        .
      </div>
    </div>
  );
}
