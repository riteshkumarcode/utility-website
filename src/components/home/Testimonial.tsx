import { homeContent } from "@/content/home";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Testimonial() {
  const { testimonial } = homeContent;

  if (!testimonial) {
    return null;
  }

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-24">
      <div className="flex flex-wrap gap-12 lg:gap-16 items-center">
        {/* Photo slot */}
        <div className="flex-[1_1_320px] min-w-0">
          <PhotoSlot
            src={testimonial.photoSrc}
            alt={`${testimonial.name}, owner of ${testimonial.business} in ${testimonial.town}`}
            brief={testimonial.photoBrief}
            className="h-[360px] md:h-[400px] w-full border-2 border-ink shadow-md"
          />
        </div>

        {/* Quote content */}
        <figure className="flex-[999_1_520px] min-w-0 m-0 space-y-6">
          {/* Signal quote icon */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="#FF5B1F"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M3 11h6v8H3zM3 11c0-4 2-6 6-7M13 11h6v8h-6zM13 11c0-4 2-6 6-7" />
          </svg>

          <blockquote className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-ink leading-snug tracking-[-0.015em] m-0">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base text-ink-2 pt-2">
            <strong className="text-ink font-bold">{testimonial.name}</strong>
            <span aria-hidden="true">·</span>
            <span>{testimonial.role}</span>
            <span aria-hidden="true">·</span>
            <span>{testimonial.business}</span>
            <span aria-hidden="true">·</span>
            <span className="text-muted">{testimonial.town}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
