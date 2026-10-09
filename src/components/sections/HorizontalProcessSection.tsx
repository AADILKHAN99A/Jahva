"use client";

import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";

const PROCESS_STAGES = [
  {
    step: "01",
    title: "Architectural Blueprint",
    description:
      "Deconstructing computational bottlenecks before writing code. We define data schemas, latency budgets, state transitions, and WebGL draw-call boundaries.",
    focus: "Zod Schemas, Frame Budgets, Edge Topology",
  },
  {
    step: "02",
    title: "Generative Prototyping",
    description:
      "Crafting bespoke GLSL shaders and tactile spring physics in isolated sandboxes. We tune friction, damping, and optical hierarchy until motion feels organic.",
    focus: "Custom Shaders, Spring Damping, Kinetic Type",
  },
  {
    step: "03",
    title: "Precision Engineering",
    description:
      "Building with Next.js Server Components, strict TypeScript, and hardware-accelerated transforms. Zero unnecessary client JavaScript; zero layout thrashing.",
    focus: "RSC Architecture, Offscreen Workers, Zero CLS",
  },
  {
    step: "04",
    title: "Hardened Verification",
    description:
      "Subjecting interfaces to mobile network throttling, screen reader audits, and automated Playwright smoke suites to verify Lighthouse 95+ scores.",
    focus: "WCAG AAA Checks, 60fps Mobile Profile, Unit Suites",
  },
];

/**
 * HorizontalProcessSection implements canonical GSAP ScrollTrigger horizontal pan:
 * the section pins while the inner process cards pan horizontally across the viewport.
 */
export function HorizontalProcessSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || window.innerWidth < 1024 || !wrapRef.current || !trackRef.current)
      return;

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollWidth - window.innerWidth + 96;

      gsap.to(trackRef.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section ref={wrapRef} className="relative py-20 lg:py-0 overflow-hidden bg-canvas-subtle border-y border-border-subtle">
      <div className="lg:h-[100dvh] flex flex-col justify-center px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            METHODOLOGY &amp; RIGOR
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
            From Computational Formula to Living Interface
          </h2>
        </div>

        {/* Pan Track */}
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 pb-4 lg:pb-0 overflow-x-auto lg:overflow-visible scroll-smooth snap-x snap-mandatory"
        >
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="w-full sm:w-[420px] lg:w-[480px] shrink-0 snap-center"
            >
              <DoubleBezelCard className="h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-accent text-3xl font-bold mb-4 inline-block">
                      {stage.step}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-text mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-secondary leading-relaxed mb-6">
                      {stage.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border-subtle font-mono text-xs text-brand-muted">
                    Focus: <span className="text-brand-secondary font-semibold">{stage.focus}</span>
                  </div>
                </div>
              </DoubleBezelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
