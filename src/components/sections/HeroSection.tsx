"use client";

import React from "react";
import dynamic from "next/dynamic";
import { IslandButton } from "@/components/ui/IslandButton";

// Lazy-load WebGL Canvas to prevent initial bundle bloat and preserve hydration speed
const AmbientCanvas = dynamic(
  () =>
    import("@/components/motion/AmbientCanvas").then((mod) => mod.AmbientCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="h-full min-h-[360px] lg:min-h-[480px] w-full rounded-3xl bg-surface-shell/30 ring-1 ring-white/10 animate-pulse" />
    ),
  }
);

/**
 * HeroSection presents an asymmetrical 60/40 architectural split layout
 * with strict subtext word count (18 words) and above-the-fold visibility.
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column (60% width on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            COLLECTIVE PRACTICE / EST. 2024
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-brand-text leading-[1.02] max-w-3xl">
            Architecting Digital Systems with Physical Weight &amp; Kinetic Depth.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-brand-secondary leading-relaxed max-w-[55ch]">
            A disciplined creative engineering atelier crafting award-level web applications, interactive shaders, and high-performance digital brand systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <IslandButton href="/projects" variant="primary">
              Explore Flagship Work
            </IslandButton>
            <IslandButton href="/team" variant="secondary" showIcon={false}>
              Meet The Collective
            </IslandButton>
          </div>
        </div>

        {/* Right Column (40% width on desktop) */}
        <div className="lg:col-span-5 w-full h-full flex items-center justify-center">
          <AmbientCanvas />
        </div>
      </div>
    </section>
  );
}
