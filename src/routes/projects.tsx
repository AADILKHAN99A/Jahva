import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
  Search,
  Globe,
  Palette,
  Film,
  Package,
} from "lucide-react";
import { PROJECTS_DATA, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Selected Works & Projects — Jahva Studio" },
      {
        name: "description",
        content:
          "Comprehensive archive of live digital platforms, brand identities, UI/UX systems, and architectural packaging engineered by Jahva Studio.",
      },
      { property: "og:title", content: "Selected Works & Projects — Jahva Studio" },
      {
        property: "og:description",
        content:
          "Comprehensive archive of live digital platforms, brand identities, UI/UX systems, and architectural packaging engineered by Jahva Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type FilterCategory = "all" | "web" | "uiux" | "branding" | "film" | "packaging";

const FILTER_TABS: { id: FilterCategory; label: string; icon: any }[] = [
  { id: "all", label: "All Works", icon: Layers },
  { id: "web", label: "Live Web & Platforms", icon: Globe },
  { id: "uiux", label: "UI/UX & Product", icon: Sparkles },
  { id: "branding", label: "Brand Identity", icon: Palette },
  { id: "film", label: "Film & Advertising", icon: Film },
  { id: "packaging", label: "Packaging & Print", icon: Package },
];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category filter matching
      let matchesCategory = true;
      if (activeFilter === "web") {
        matchesCategory =
          project.type === "live-web" ||
          project.badge.includes("WEB") ||
          project.badge.includes("COMMERCE") ||
          project.badge.includes("SPORTS") ||
          project.badge.includes("REAL ESTATE");
      } else if (activeFilter === "uiux") {
        matchesCategory =
          project.badge.includes("UI/UX") ||
          project.category.toLowerCase().includes("interface") ||
          project.category.toLowerCase().includes("product design");
      } else if (activeFilter === "branding") {
        matchesCategory =
          project.badge.includes("BRAND") ||
          project.badge.includes("AUTOMOBILE") ||
          project.category.toLowerCase().includes("brand");
      } else if (activeFilter === "film") {
        matchesCategory =
          project.badge.includes("FILM") ||
          project.badge.includes("AD") ||
          project.category.toLowerCase().includes("commercial") ||
          project.category.toLowerCase().includes("film");
      } else if (activeFilter === "packaging") {
        matchesCategory =
          project.badge.includes("PACKAGING") ||
          project.badge.includes("PUBLICATION") ||
          project.badge.includes("COMIC") ||
          project.category.toLowerCase().includes("packaging");
      }

      // Search query matching
      const matchesSearch =
        !searchQuery.trim() ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#080b12] text-white selection:bg-emerald-400 selection:text-black">
      {/* Top Studio Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080b12]/80 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to Studio</span>
          </Link>

          {/* Center Wordmark */}
          <Link to="/" className="text-xl font-light tracking-tight text-white font-sans hover:opacity-80 transition-opacity">
            Jahva
          </Link>

          {/* Right Status Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-sans text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>19 Projects Live</span>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="pt-16 sm:pt-24 pb-12 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full Portfolio Archive</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white font-sans leading-[1.08]">
              Selected Works <br className="hidden sm:block" />
              <span className="text-zinc-500">&amp; Product Systems.</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl">
              An exhaustive archive of live production web applications, bespoke design systems, 
              cultural brand marks, and high-fidelity product interfaces created by Jahva Studio.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-zinc-400 focus:outline-none focus:border-white/30 transition-all font-sans"
            />
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-medium shadow-md shadow-white/10"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-6 sm:px-12 pb-28 max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-white/10 rounded-3xl">
            <p className="text-sm text-zinc-400 font-sans">No projects match the current filter or query.</p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 text-xs text-white hover:bg-white/20 transition-all font-sans cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => {
              const isBehance = project.url.includes("behance.net");
              return (
                <article
                  key={project.id}
                  className="group flex flex-col bg-[#0d121e] rounded-3xl border border-white/[0.10] hover:border-white/35 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-1.5"
                >
                  {/* Card Image Container with Direct Outbound Click */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Open ${project.title}`}
                    className="relative aspect-[4/3] overflow-hidden bg-[#121827] block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d121e] via-transparent to-black/30 pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badge & Year Pill */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-emerald-400 uppercase">
                        {project.badge}
                      </span>
                    </div>

                    {/* Floating Outbound Action Button */}
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Category & Year */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2.5">
                        <span className="truncate pr-2">{project.category}</span>
                        <span className="text-zinc-400 font-mono shrink-0">{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-normal text-white tracking-tight font-sans mb-3 group-hover:text-emerald-300 transition-colors">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-2 justify-between"
                        >
                          <span>{project.title}</span>
                        </a>
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-zinc-400 font-sans leading-relaxed line-clamp-3 mb-5">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Deliverables Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.08]">
                        {project.deliverables.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-zinc-400 tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Direct External Action Link */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white text-zinc-300 hover:text-black border border-white/10 hover:border-white transition-all text-xs font-medium font-sans group/btn"
                      >
                        <span>
                          {isBehance ? "View Behance Case Study" : "Visit Live Platform"}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom Collaboration CTA */}
      <section className="border-t border-white/[0.08] bg-[#060910] py-20 px-6 sm:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
            COLLABORATION &bull; IN-HOURS DEVELOPMENT
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight font-sans">
            Have an ambitious project?
          </h2>
          <p className="mt-4 text-sm text-zinc-400 font-sans max-w-xl mx-auto leading-relaxed">
            We work as an independent community of senior freelancers — delivering high-caliber brand, 
            digital product design, and web engineering with zero agency fluff.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-medium font-sans transition-all shadow-lg hover:scale-105"
            >
              <span>Start a Project with Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 text-xs font-medium font-sans transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clean Studio Footer */}
      <footer className="border-t border-white/[0.08] py-8 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-sans gap-4">
        <div>&copy; 2026 Jahva Studio. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
          <a href="tel:+919026054274" className="hover:text-white transition-colors">
            +91 9026054274
          </a>
        </div>
      </footer>
    </div>
  );
}
