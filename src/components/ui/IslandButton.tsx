import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export interface IslandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  showIcon?: boolean;
  className?: string;
}

/**
 * IslandButton implements the nested button-in-button architecture
 * with tactile spring physics, high-contrast states, and single-line guarantee.
 */
export function IslandButton({
  children,
  href,
  variant = "primary",
  showIcon = true,
  className,
  ...props
}: IslandButtonProps) {
  const baseStyles = cn(
    "group relative inline-flex items-center justify-center gap-3",
    "rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap",
    "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-base",
    variant === "primary" &&
      "bg-accent text-brand-inverse font-semibold shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/40",
    variant === "secondary" &&
      "bg-surface-elevated text-brand-text ring-1 ring-white/10 hover:ring-white/25 hover:bg-surface-elevated/80",
    variant === "ghost" &&
      "bg-transparent text-brand-secondary hover:text-brand-text hover:bg-white/5",
    className
  );

  const iconElement = showIcon ? (
    <span
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ease-out",
        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        variant === "primary" ? "bg-black/15 text-black" : "bg-white/10 text-brand-text"
      )}
      aria-hidden="true"
    >
      <ArrowUpRight size={14} weight="bold" />
    </span>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...props}>
      <span>{children}</span>
      {iconElement}
    </button>
  );
}
