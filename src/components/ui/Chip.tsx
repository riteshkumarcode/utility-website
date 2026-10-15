import React from "react";

interface BaseChipProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small";
}

interface StaticChipProps extends BaseChipProps {
  interactive?: false;
  pressed?: never;
  onToggle?: never;
}

interface InteractiveChipProps extends BaseChipProps {
  interactive: true;
  pressed: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export type ChipProps = StaticChipProps | InteractiveChipProps;

export function Chip(props: ChipProps) {
  const { children, className = "", size = "default" } = props;

  const sizeStyles =
    size === "small"
      ? "text-xs px-3 py-1.5 min-h-[36px]"
      : "text-sm md:text-base px-4 py-2.5 min-h-[44px]";

  if (!props.interactive) {
    return (
      <span
        className={`inline-flex items-center rounded-full border border-line bg-paper-2 text-ink-2 font-medium ${sizeStyles} ${className}`}
      >
        {children}
      </span>
    );
  }

  const { pressed, onToggle, disabled } = props;

  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onToggle}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full border font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 ${sizeStyles} ${
        pressed
          ? "bg-ink text-on-dark border-ink"
          : "bg-transparent text-ink border-[#B9B9AE] hover:border-ink active:border-ink"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
