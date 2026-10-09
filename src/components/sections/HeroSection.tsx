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
    loading: () => null,
  }
);

/**
 * HeroSection presents an architectural statement with full-stage procedural
 * WebGL kinetic background animation running at 60% opacity.
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Background Procedural WebGL Wireframe Terrain (60% Opacity) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <AmbientCanvas className="h-full w-full pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-start my-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          COLLECTIVE PRACTICE / EST. 2024
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-brand-text leading-[1.02] max-w-4xl">
          Architecting Digital Systems with Physical Weight &amp; Kinetic Depth.
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-brand-secondary leading-relaxed max-w-[55ch]">
          A disciplined creative engineering atelier crafting award-level web applications, interactive shaders, and high-performance digital brand systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <IslandButton href="/projects" variant="primary">
            Explore Flagship Work
          </IslandButton>
          <IslandButton href="/team" variant="secondary" showIcon={false}>
            Meet The Collective
          </IslandButton>
        </div>
      </div>
    </section>
  );
}
