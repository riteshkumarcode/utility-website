interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({
  children,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2.5 ${
        light ? "text-on-dark-muted" : "text-muted"
      } ${className}`}
    >
      <span
        className="w-2.5 h-2.5 bg-signal shrink-0"
        aria-hidden="true"
      />
      <span>{children}</span>
    </div>
  );
}
