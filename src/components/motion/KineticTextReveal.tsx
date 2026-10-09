"use client";

import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export interface KineticTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

/**
 * KineticTextReveal scrubs character and word illumination as the reader scrolls.
 */
export function KineticTextReveal({
  text,
  className,
  wordClassName,
}: KineticTextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const words = text.split(" ");

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const wordElements = containerRef.current?.querySelectorAll(".reveal-word");
      if (!wordElements || wordElements.length === 0) return;

      gsap.fromTo(
        wordElements,
        { opacity: 0.15, y: 4 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced, text]);

  return (
    <p
      ref={containerRef}
      className={cn("text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed", className)}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={cn(
            "reveal-word inline-block mr-[0.3em] transition-opacity",
            prefersReduced ? "opacity-100" : "opacity-15",
            wordClassName
          )}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
