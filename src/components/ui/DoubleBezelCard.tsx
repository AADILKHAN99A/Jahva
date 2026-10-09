import React from "react";
import { cn } from "@/lib/utils";

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: React.ElementType;
}

/**
 * DoubleBezelCard represents physical machined hardware aesthetics:
 * an outer structural bezel ring enclosing a recessed tactile inner core.
 */
export function DoubleBezelCard({
  children,
  className,
  innerClassName,
  as: Component = "div",
  ...props
}: DoubleBezelCardProps) {
  return (
    <Component
      className={cn(
        "group relative rounded-3xl p-2 bg-surface-shell",
        "ring-1 ring-border-subtle transition-all duration-300 ease-out",
        "hover:ring-border-visible hover:shadow-xl hover:shadow-black/10",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-[calc(1.5rem-0.125rem)] bg-surface-core p-6",
          "shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]",
          "transition-transform duration-300 ease-out group-hover:-translate-y-0.5",
          innerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}
