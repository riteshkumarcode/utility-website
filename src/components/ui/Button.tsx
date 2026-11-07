import Link from "next/link";
import React from "react";
import { Arrow } from "./Arrow";

export type ButtonVariant = "primary" | "signal" | "outline";

interface BaseButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  size?: "default" | "large" | "small";
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  children,
  showArrow = true,
  className = "",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-3 font-bold rounded-[4px] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2";

  const sizeStyles = {
    small: "min-h-[44px] px-4 py-2.5 text-sm",
    default: "min-h-[48px] px-6 py-3.5 text-base",
    large: "min-h-[56px] px-7 py-4 text-lg",
  }[size];

  const variantStyles = {
    primary:
      "bg-signal text-ink font-extrabold hover:bg-[#00ea94] active:bg-[#00bd78] shadow-sm hover:shadow-md hover:shadow-emerald-500/20",
    signal:
      "bg-gradient-to-r from-emerald-400 to-cyan-400 text-ink font-extrabold hover:from-emerald-300 hover:to-cyan-300 shadow-md",
    outline:
      "border-[1.5px] border-emerald-600 bg-white text-emerald-950 hover:bg-emerald-50 active:bg-emerald-100",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        <span>{children}</span>
        {showArrow && <Arrow className="group-hover:translate-x-1.5" />}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonProps.type || "button"}
      className={combinedClasses}
      {...buttonProps}
    >
      <span>{children}</span>
      {showArrow && <Arrow className="group-hover:translate-x-1.5" />}
    </button>
  );
}
