import React from "react";
import { cn } from "@/lib/utils";

export interface TechnicalBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
  interactive?: boolean;
  size?: "sm" | "md";
  className?: string;
}

/**
 * TechnicalBadge displays metadata and skill tags with high-contrast monospace typography.
 */
export function TechnicalBadge({
  children,
  active = false,
  interactive = false,
  size = "md",
  className,
  ...props
}: TechnicalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded-full transition-all duration-200",
        size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        active
          ? "bg-accent/15 text-accent ring-1 ring-accent/40 font-semibold"
          : "bg-black/[0.04] text-brand-secondary ring-1 ring-border-subtle",
        interactive &&
          !active &&
          "cursor-pointer hover:bg-black/[0.08] hover:text-brand-text hover:ring-border-visible",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
