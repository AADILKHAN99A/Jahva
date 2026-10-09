import React from "react";
import Link from "next/link";
import { IslandButton } from "./IslandButton";

/**
 * Footer provides global closing contact callout and accessible navigation coordinates.
 */
export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border-subtle bg-canvas-subtle">
      {/* Pre-footer Callout Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
              ENGAGEMENT & COMMISSIONS
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text max-w-2xl leading-tight">
              Ready to construct an extraordinary digital system?
            </h2>
          </div>
          <div>
            <IslandButton href="/contact" variant="primary" className="text-base px-8 py-4">
              Initiate Project
            </IslandButton>
          </div>
        </div>
      </div>

      {/* Navigation & Legal Coordinates */}
      <div className="border-t border-border-subtle bg-canvas-base py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-6 w-6 rounded bg-surface-shell ring-1 ring-border-subtle text-accent font-mono font-bold text-xs flex items-center justify-center">
                JH
              </span>
              <span className="font-bold text-sm tracking-tight text-brand-text">
                JAHVA
              </span>
            </div>
            <p className="text-xs text-brand-muted max-w-sm leading-relaxed">
              An architectural creative engineering collective crafting award-level web applications, procedural shaders, and high-performance digital systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-brand-secondary">
            <Link href="/projects" className="hover:text-brand-text transition-colors">
              Projects
            </Link>
            <Link href="/team" className="hover:text-brand-text transition-colors">
              Team
            </Link>
            <Link href="/skills" className="hover:text-brand-text transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="hover:text-brand-text transition-colors">
              Contact
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-text transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="text-xs text-brand-muted font-mono">
            &copy; {new Date().getFullYear()} JAHVA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
