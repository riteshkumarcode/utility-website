interface ArrowProps {
  className?: string;
  size?: number;
}

export function Arrow({ className = "", size = 18 }: ArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
