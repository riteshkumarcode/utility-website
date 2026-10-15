import Image from "next/image";

interface PhotoSlotProps {
  src?: string;
  alt?: string;
  brief: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function PhotoSlot({
  src,
  alt,
  brief,
  className = "",
  aspectRatio,
  priority = false,
}: PhotoSlotProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-[6px] ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        <Image
          src={src}
          alt={alt || brief}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`photo-slot rounded-[6px] flex items-end p-3.5 border border-line ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      aria-label={`Photo placeholder: ${brief}`}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.08em] bg-paper text-ink-2 px-2.5 py-1.5 rounded-[2px] leading-tight select-none">
        Photo — {brief}
      </span>
    </div>
  );
}
