"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ProjectCaseStudy } from "@/types/content";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";

export interface StickyStackSectionProps {
  projects: ProjectCaseStudy[];
}

/**
 * StickyStackSection implements canonical GSAP ScrollTrigger card pinning:
 * each case-study card locks at viewport top, shrinking and dimming as the next card arrives.
 */
export function StickyStackSection({ projects }: StickyStackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    // Disable pinning on mobile (< 768px) and under reduced motion
    if (prefersReduced || window.innerWidth < 768 || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      if (cardEls.length <= 1) return;

      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 0.92,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced, projects]);

  return (
    <section ref={containerRef} className="relative py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
          Flagship Engineering Works
        </h2>
        <p className="mt-4 text-base sm:text-lg text-brand-secondary max-w-2xl">
          Four benchmark systems delivered across real-time WebGL audio, distributed telemetry, decentralized geometry, and collaborative canvas software.
        </p>
      </div>

      <div className="relative flex flex-col gap-8 md:gap-0">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="stack-card md:sticky md:top-0 md:min-h-[100dvh] flex items-center justify-center py-6 md:py-12"
          >
            <DoubleBezelCard className="w-full max-w-6xl shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Media Column */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[440px] w-full rounded-2xl overflow-hidden bg-surface-shell ring-1 ring-white/10">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Content Dossier Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <TechnicalBadge key={tech} size="sm">
                          {tech}
                        </TechnicalBadge>
                      ))}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-secondary leading-relaxed mb-6">
                      {project.subtitle}
                    </p>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label}>
                          <div className="text-2xl font-bold text-accent font-mono">
                            {res.metric}
                          </div>
                          <div className="text-xs text-brand-muted leading-tight mt-1">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text hover:text-accent transition-colors group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        ))}
      </div>
    </section>
  );
}
