"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { IslandButton } from "./IslandButton";

const NAV_LINKS = [
  { href: "/projects", label: "Work" },
  { href: "/team", label: "Team" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

/**
 * FloatingIslandNav morphs from a clean top header into a detached floating glass pill on scroll.
 */
export function FloatingIslandNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "py-4 pointer-events-none"
            : "py-6 bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isScrolled
              ? "max-w-3xl pointer-events-auto rounded-full bg-surface-elevated/90 backdrop-blur-xl ring-1 ring-border-visible px-6 py-2.5 shadow-xl shadow-black/10"
              : "max-w-7xl px-6 lg:px-8"
          )}
        >
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
            aria-label="JAHVA Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-shell ring-1 ring-border-subtle text-accent font-mono font-bold text-sm tracking-wider transition-transform group-hover:scale-105">
              JH
            </span>
            <span className="font-bold tracking-tight text-sm text-brand-text hidden sm:inline-block">
              JAHVA
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-surface-shell/60 p-1 rounded-full ring-1 ring-border-subtle"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-medium transition-colors",
                    isActive
                      ? "bg-accent/15 text-accent ring-1 ring-accent/30 font-semibold"
                      : "text-brand-secondary hover:text-brand-text hover:bg-black/[0.04]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <IslandButton href="/contact" variant="primary" showIcon={false} className="py-2 px-5 text-xs">
              Initiate Project
            </IslandButton>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full bg-surface-shell ring-1 ring-border-subtle text-brand-text hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-canvas-base/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-3xl font-bold tracking-tight transition-all",
                    isActive ? "text-accent" : "text-brand-text hover:text-accent"
                  )}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-border-subtle flex flex-col gap-4">
            <IslandButton href="/contact" variant="primary" className="w-full justify-center">
              Initiate Project
            </IslandButton>
            <p className="font-mono text-xs text-brand-muted text-center">
              Berlin - London - Dublin - Dubai
            </p>
          </div>
        </div>
      )}
    </>
  );
}
