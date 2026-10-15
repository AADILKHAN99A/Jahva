import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Search,
  FolderKanban,
  Phone,
  Mail,
  Info,
  ArrowLeft,
  Copy,
  Check,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jahva — Brand. Design. Product." },
      { name: "description", content: "Brand. Design. Product. In-Hours Development. &More — Jahva." },
      { property: "og:title", content: "Jahva — Brand. Design. Product." },
      { property: "og:description", content: "Brand. Design. Product. In-Hours Development. &More — Jahva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Seal({ watch = false }: { watch?: boolean }) {
  const id = watch ? "watch-circle" : "brand-circle";
  return (
    <svg className="circular-seal" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <path id={id} d="M32,7 a25,25 0 1,1 -.01,0" />
      </defs>
      <text className="seal-type">
        <textPath href={`#${id}`} textLength="145" lengthAdjust="spacing">
          {watch ? "WATCH OUR VIDEO " : "Jahva creative "}
        </textPath>
      </text>
      <circle className="seal-disc" cx="32" cy="32" r={watch ? 21 : 18} />
      {watch ? (
        <path className="play-triangle" d="M30 26 L38 32 L30 38 Z" />
      ) : (
        <image
          href="/images/logo-j-cropped-black.png"
          x="26.8"
          y="21"
          width="10.4"
          height="22"
          preserveAspectRatio="xMidYMid meet"
        />
      )}
    </svg>
  );
}

function PixelCodeBackground() {
  const codeSnippet = (
    <>
      <div className="code-line-amber">SELECT * FROM dreams WHERE id=1;</div>
      <div className="code-line-green">await workspace.load(&#123; mode: &apos;x&apos; &#125;)</div>
      <div className="code-line-cyan">npm run build &amp;&amp; deploy --prod</div>
      <div className="code-line-amber">0x00ff: MOV AX, 0x4C00</div>
      <div className="code-line-green">export default function Space() &#123;</div>
      <div className="code-line-dim">fn render(&amp;mut self) -&gt; Frame &#123;</div>
      <div className="code-line-cyan">sudo rm -rf /doubts</div>
      <div className="code-line-green">for (let i=0; i&lt;0xff; i++) mem[i]^=k;</div>
      <div className="code-box">
        <div className="font-bold text-emerald-400">MY WORKSPACE</div>
        <div className="text-[9px] text-emerald-300">LOADING..</div>
        <div className="mt-1 flex items-center gap-1 text-[9px] font-mono">
          <span className="text-emerald-400">[■■■■■■■■■■■■■□□□]</span>
          <span className="text-emerald-300">62%</span>
        </div>
      </div>
      <div className="code-line-dim">const boot = () =&gt; init(core);</div>
      <div className="code-line-green">while(true) &#123; compile(); ship(); &#125;</div>
      <div className="code-line-amber">&lt;&lt;&lt; ACCESS GRANTED &gt;&gt;&gt;</div>
      <div className="code-line-cyan">git push origin main --force</div>
      <div className="code-line-dim">import &#123; kernel &#125; from &apos;./sys&apos;</div>
      <div className="code-line-green">
        system.status = &quot;ONLINE&quot;
        <span className="code-cursor" />
      </div>
    </>
  );

  return (
    <div className="pixel-code-bg" aria-hidden="true">
      {/* Left Margin Live Code Stream */}
      <div className="code-stream-side code-stream-left">
        <div className="code-stream-track">
          {codeSnippet}
          {codeSnippet}
        </div>
      </div>

      {/* Right Margin Live Code Stream */}
      <div className="code-stream-side code-stream-right">
        <div className="code-stream-track">
          {codeSnippet}
          {codeSnippet}
        </div>
      </div>
    </div>
  );
}

const EDITORIAL_CATEGORIES = [
  {
    id: "strategy",
    title: "Strategy & Consulting",
    tag: "Business Discovery & Direction",
    badge: "INSIGHT & VISION",
    summary: "Business discovery, brainstorming, market and user research, ideation, product strategy and creative direction.",
    details: [
      "Business discovery & stakeholder workshops",
      "Market, competitor & deep user behavioral research",
      "Ideation sprints & opportunity mapping",
      "Holistic product strategy & roadmap definition",
      "Creative direction & executive advisory",
    ],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    tag: "Brand Architecture & Design",
    badge: "VISUAL SYSTEMS",
    summary: "Brand positioning, naming, brand architecture, visual identity, graphic design and brand guidelines.",
    details: [
      "Brand positioning & strategic narrative",
      "Naming & verbal identity",
      "Brand architecture & multi-tiered sub-brands",
      "Visual identity systems & bespoke logomarks",
      "Graphic design & high-finish editorial assets",
      "Comprehensive digital brand guidelines & stylekits",
    ],
  },
  {
    id: "digital-product",
    title: "Digital Product Design",
    tag: "UI/UX & Design Systems",
    badge: "INTERACTION LAB",
    summary: "UX research, information architecture, wireframes, UI/UX design, design systems, prototypes and responsive web experiences.",
    details: [
      "User experience (UX) research & persona mapping",
      "Information architecture & content structure",
      "Low to high-fidelity wireframing & user journeys",
      "Tactile UI/UX interface design with micro-interactions",
      "Scalable multi-platform tokenized design systems",
      "Interactive high-fidelity prototypes & responsive web experiences",
    ],
  },
  {
    id: "development",
    title: "Web and App Development",
    tag: "Full-Stack & Systems",
    badge: "IN-HOURS ENGINEERING",
    summary: "We transform ideas and designs into functional digital experiences through website development, web applications, and mobile app development, with a focus on usability, performance, and scalability. Website development, mobile applications, dashboards, CRM solutions, workflow automation and integrated digital systems.",
    details: [
      "Bespoke high-performance website development",
      "Full-stack web applications & SaaS platforms",
      "Native & cross-platform mobile apps (iOS & Android)",
      "High-density data dashboards & real-time analytics",
      "Custom CRM solutions & business logic tools",
      "Workflow automation & integrated enterprise digital systems",
    ],
  },
  {
    id: "motion-3d",
    title: "Motion, Film & 3D",
    tag: "Cinema & Animation",
    badge: "FILM & MOTION",
    summary: "Video shoots, film editing, campaign production, motion graphics, 3D modelling, animation and product visualization.",
    details: [
      "Commercial video shoots & creative directing",
      "Film editing, color grading & post-production",
      "High-impact editorial campaign production",
      "Tactile motion graphics & brand motion systems",
      "3D modelling, photorealistic shaders & lighting",
      "Fluid character animation & hyper-real product visualization",
    ],
  },
  {
    id: "systems-innovation",
    title: "Systems and Innovation",
    tag: "Prototyping & Experiences",
    badge: "EMERGING TECH",
    summary: "Service design, customer journeys, touchpoint design, physical-digital experiences and product prototyping.",
    details: [
      "End-to-end service design & ecosystem planning",
      "Cross-channel customer journey optimization",
      "Multi-sensory touchpoint & environmental design",
      "Phygital (physical-meets-digital) connected experiences",
      "Rapid hardware & digital product prototyping",
    ],
  },
];

const THOUGHT_PROCESS_CARDS = [
  {
    id: "card-1",
    pinNumber: "01",
    label: "01 — OBSERVE",
    headline: "Understanding people and problems.",
    excerpt: "Understanding people and problems.",
    image: "/images/thought-process/observe.jpg",
  },
  {
    id: "card-2",
    pinNumber: "02",
    label: "02 — EXPLORE",
    headline: "Questioning ideas and finding possibilities.",
    excerpt: "Questioning ideas and finding possibilities.",
    image: "/images/thought-process/explore.jpg",
  },
  {
    id: "card-3",
    pinNumber: "03",
    label: "03 — CREATE",
    headline: "Turning thoughts into meaningful experiences.",
    excerpt: "Turning thoughts into meaningful experiences.",
    image: "/images/thought-process/create.jpg",
  },
  {
    id: "card-4",
    pinNumber: "04",
    label: "04 — REFINE",
    headline: "Simplifying until everything feels right.",
    excerpt: "Simplifying until everything feels right.",
    image: "/images/thought-process/refine.jpg",
  },
];

const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Aura Chrono OS",
    category: "Glanceable Wearable UI/UX & Spatial Haptics",
    image: "/images/projects/behance/proj-1.jpg",
    url: "https://www.behance.net/gallery/237041775/UIUX-Design",
    badge: "UI/UX DESIGN",
    year: "2026",
    summary: "Comprehensive wearable smart interface designed for high-resolution curved OLED displays. Features glanceable complications, micro-typography hierarchy, and power-optimized dark theme interactions.",
    deliverables: ["Glanceable UI Architecture", "Micro-Typography System", "OLED Dark Mode Optimization", "Tactile Micro-Haptics"],
  },
  {
    id: "proj-2",
    title: "Savison Pharma",
    category: "Pharmaceutical Brand Identity & Structural Packaging",
    image: "/images/projects/behance/proj-2.jpg",
    url: "https://www.behance.net/gallery/237053489/Branding-Design",
    badge: "BRAND IDENTITY",
    year: "2026",
    summary: "Modern medical and pharmaceutical corporate identity system, combining clean geometric cross iconography with clinical precision, structural retail bag specifications, and high-trust color palettes.",
    deliverables: ["Corporate Brand Mark", "Structural Packaging Design", "Retail Print Specifications", "Visual Identity Guidelines"],
  },
  {
    id: "proj-3",
    title: "Puppet & Tech Robotic Identity",
    category: "Cultural Heritage & Robotic Innovation Branding",
    image: "/images/projects/behance/proj-3.jpg",
    url: "https://www.behance.net/gallery/237046161/Branding-Design",
    badge: "BRANDING DESIGN",
    year: "2026",
    summary: "Deeply rooted cultural brand narrative merging traditional Rajasthani puppet folklore with forward-looking robotic innovation, geometric vector iconography, and cinematic storytelling.",
    deliverables: ["Cultural Concept Narrative", "Robotic Folklore Identity", "Geometric Vector Iconography", "Spatial Exhibition Design"],
  },
  {
    id: "proj-4",
    title: "Shar Automotive Group",
    category: "Automobile Brand Engineering & Spatial Identity",
    image: "/images/projects/behance/proj-4.jpg",
    url: "https://www.behance.net/gallery/237067429/Automobile-Branding-Design",
    badge: "AUTOMOBILE BRANDING",
    year: "2026",
    summary: "Dynamic automotive brand identity crafted through extensive iterative sketch studies, aerodynamic geometric logomarks, embossed stationery, and architectural showroom applications.",
    deliverables: ["Aerodynamic Brand Mark", "Iterative Concept Exploration", "Embossed Identity Collateral", "Automotive Showroom Signage"],
  },
  {
    id: "proj-5",
    title: "Botanical Essence & Care",
    category: "Herbal Wellness Packaging & Commercial Production",
    image: "/images/projects/behance/proj-5.jpg",
    url: "https://www.behance.net/gallery/213844505/Commercial-Advertisement",
    badge: "COMMERCIAL AD",
    year: "2025",
    summary: "End-to-end commercial campaign production and packaging suite for herbal ayurvedic juices and wellness solutions, showcasing rich botanical graphics, typography, and product photography.",
    deliverables: ["Commercial Art Direction", "Ayurvedic Product Packaging", "Label Typography & Hierarchy", "Retail Shelf Staging"],
  },
  {
    id: "proj-6",
    title: "Lumina Phone Commercial",
    category: "Cinematic Product Advertising & Set Architecture",
    image: "/images/projects/behance/proj-6.jpg",
    url: "https://www.behance.net/gallery/237068613/Advertisement-Design",
    badge: "ADVERTISEMENT",
    year: "2026",
    summary: "Cinematic smartphone advertising campaign featuring bespoke studio architectural set design with vertical fluted glass, warm architectural lighting, and immersive flagship device staging.",
    deliverables: ["Studio Set Architecture", "Cinematic Product Staging", "Advertising Key Visuals", "Commercial Campaign Visuals"],
  },
  {
    id: "proj-7",
    title: "Chocc's Artisanal Chocolatier",
    category: "Luxury Confectionery Packaging & Visual Identity",
    image: "/images/projects/behance/proj-7.jpg",
    url: "https://www.behance.net/gallery/197322337/Product-Packaging-Design",
    badge: "PRODUCT PACKAGING",
    year: "2025",
    summary: "Refined luxury confectionery packaging system featuring bespoke arched typography, foil embossing, matte tactile chocolate boxes, and sensual editorial product staging.",
    deliverables: ["Luxury Typography System", "Custom Arch Box Architecture", "Gold Foil Emboss Detailing", "Artisanal Confectionery Identity"],
  },
  {
    id: "proj-8",
    title: "HelloFresh Ecosystem",
    category: "Interactive Tablet Experience & Digital Product Design",
    image: "/images/projects/behance/proj-8.jpg",
    url: "https://www.behance.net/gallery/210732071/UIUX-Project",
    badge: "UI/UX PROJECT",
    year: "2025",
    summary: "Interactive culinary meal-kit tablet interface featuring playful bespoke illustrations, streamlined recipe navigation, custom calendar meal scheduling, and fluid touchscreen micro-animations.",
    deliverables: ["Tablet UX/UI Architecture", "Custom Digital Illustration", "Step-by-Step Cooking Mode", "Tactile Micro-Interactions"],
  },
  {
    id: "proj-9",
    title: "Cinematic Vision & Production",
    category: "Short Film Directing, Scriptwriting & Post-Production",
    image: "/images/projects/behance/proj-9.jpg",
    url: "https://www.behance.net/gallery/237060319/Editing-Film-Making",
    badge: "FILM & EDITING",
    year: "2026",
    summary: "Original narrative film production led by studio creatives. Comprehensive end-to-end creative journey spanning screenplay writing, scene blocking, cinematography, color grading, and editorial finishing.",
    deliverables: ["Screenplay & Storyboarding", "Cinematography & Direction", "Color Grading & Foley Sound", "Film Editorial Post-Production"],
  },
  {
    id: "proj-10",
    title: "Oaty Bytes Organic Crunch",
    category: "Health Food Brand Identity & Sustainable Packaging",
    image: "/images/projects/behance/proj-10.jpg",
    url: "https://www.behance.net/gallery/237055757/Branding-Add-Management",
    badge: "BRAND & AD MGMT",
    year: "2026",
    summary: "Wholesome snack brand identity and sustainable carton packaging for artisanal oat clusters, featuring clean typography, earthy floral textures, and high-conversion commercial advertising management.",
    deliverables: ["Sustainable Carton Packaging", "Artisan Brand Identity", "Commercial Ad Creative", "Social Campaign Visuals"],
  },
  {
    id: "proj-11",
    title: "Optitemp Spiral Engineering",
    category: "Industrial Thermal Dynamics & Kinetic Brand Mark",
    image: "/images/projects/behance/proj-11.jpg",
    url: "https://www.behance.net/gallery/197320717/Product-Design",
    badge: "PRODUCT DESIGN",
    year: "2025",
    summary: "Kinetic visual identity and industrial product design for high-performance temperature regulation systems, built around a mathematical turbine spiral logo and precision hardware branding.",
    deliverables: ["Turbine Spiral Identity", "Industrial Product Engineering", "Hardware Logo Specifications", "Engineering Tech Collateral"],
  },
  {
    id: "proj-12",
    title: "Florara Botanical Monograph",
    category: "Editorial Print Publication & Botanical Typography",
    image: "/images/projects/behance/proj-12.jpg",
    url: "https://www.behance.net/gallery/237065229/Magazine-Design-X-Publication-Design",
    badge: "PUBLICATION DESIGN",
    year: "2026",
    summary: "High-fashion botanical monograph and publication design featuring custom editorial serif typography, raw stone tactile staging, generous margins, and architectural grid layouts.",
    deliverables: ["Editorial Publication Grid", "Custom Editorial Typography", "Tactile Matte Print Finishes", "Botanical Art Direction"],
  },
  {
    id: "proj-13",
    title: "Oh Gaga Comic Chronicles",
    category: "Illustrated Narrative Graphic Novel & Print Design",
    image: "/images/projects/behance/proj-13.jpg",
    url: "https://www.behance.net/gallery/237064193/Comic-Book-Design",
    badge: "COMIC BOOK DESIGN",
    year: "2026",
    summary: "Dynamic illustrated graphic novel and collectible book design featuring hand-inked comic illustrations, expressive kinetic typography, cover embossing, and structural publication binding.",
    deliverables: ["Hand-Inked Graphic Illustration", "Custom Comic Cover Lettering", "Sequential Narrative Paneling", "Print Binding & Production"],
  },
  {
    id: "proj-14",
    title: "Rajasthan Football Club",
    category: "Premier Sports Institution & Matchday Experience",
    image: "/images/projects/rajasthan-fc.jpg",
    url: "https://www.rajasthanfootballclub.com",
    badge: "SPORTS & CLUB",
    year: "2026",
    summary: "Official digital club portal and matchday experience for Rajasthan Football Club (The Desert Royals) at Sawai Mansingh Stadium, Jaipur. Features season membership passes, youth academy registrations, and VIP suites.",
    deliverables: ["Club Web Portal Architecture", "Matchday Ticketing Funnel", "Academy Trial Registration", "Dynamic Fixtures & Standings"],
  },
];

const TEAM_MEMBERS = [
  {
    role: "Creative Designer and Consultant",
    experience: "Founder & Experience with Urban Culture, Clystro, White Eudicots, Chetan Pumps",
    photo: "/images/team/member-1.jpg",
  },
  {
    role: "FullStack Developer",
    experience: "Experience with Zucol, Arthonsys Technologies and Several Projects",
    photo: "/images/team/member-2.jpg",
  },
  {
    role: "Video Editor and 3D Artist",
    experience: "Experience with Professor of How",
    photo: "/images/team/member-3.jpg",
  },
  {
    role: "Software Developer",
    experience: "Experience with Serve.com, White Eudicots and Projects",
    photo: "/images/team/member-4.jpg",
  },
];

function ProfileCardVisual() {
  return (
    <div className="w-full h-full relative rounded-2xl bg-gradient-to-b from-[#141a29] to-[#0a0e17] border border-white/[0.12] p-5 flex flex-col justify-between overflow-hidden group shadow-lg">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white font-sans">J</span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
            JAHVA PROFILE
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE
        </span>
      </div>

      {/* Center Avatar Profile Silhouette */}
      <div className="flex flex-col items-center justify-center my-3 relative z-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-white/20 to-white/5 border border-white/20 flex items-center justify-center p-1 shadow-xl group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full rounded-full bg-[#080c14] flex items-center justify-center overflow-hidden">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" fill="currentColor" fillOpacity="0.2" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="currentColor" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="mt-2.5 text-center">
          <span className="text-xs sm:text-sm font-medium text-white tracking-wide block font-sans">
            Jahva Studio
          </span>
          <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
            Creative &bull; Tech &bull; Product
          </span>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400 relative z-10">
        <span>EST. 2026</span>
        <span>JAIPUR &bull; IN</span>
      </div>
    </div>
  );
}

type SearchOptionKey = "projects" | "contact" | "email" | "about";

function Index() {
  const [loading, setLoading] = useState(true);
  const [typewriterText, setTypewriterText] = useState("");
  const [loadingFade, setLoadingFade] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState<SearchOptionKey | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<(typeof EDITORIAL_CATEGORIES)[0] | null>(null);

  // Light-theme typewriter intro (4.5 seconds total, Capital J: "Jahva")
  useEffect(() => {
    const fullText = "Jahva";
    let index = 0;
    const timer = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
      } else {
        clearInterval(timer);
        // Types in ~1.2s, holds for 2.5s, dissolves for 800ms => total 4.5s
        setTimeout(() => {
          setLoadingFade(true);
          setTimeout(() => setLoading(false), 800);
        }, 2500);
      }
    }, 240);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
        setSelectedResult(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jahva.interested@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const lightRibbonSet = (
    <>
      <span>WEB DEVELOPMENT</span>
      <i />
      <span>TECH</span>
      <i />
      <span>APPLICATION</span>
      <i />
      <span>BRANDING</span>
      <i />
    </>
  );

  const darkRibbonSet = (
    <>
      <span>CREATIVE DESIGN</span>
      <i />
      <span>UI/UX</span>
      <i />
      <span>WEB DEVELOPMENT</span>
      <i />
      <span>TECH</span>
      <i />
      <span>APPLICATION</span>
      <i />
      <span>BRANDING</span>
      <i />
    </>
  );

  return (
    <>
      {/* Dark Theme Typewriter Loading Screen (Deep Bluish-Slate to match website) */}
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0d14] text-white transition-all duration-700 ease-out ${
            loadingFade ? "opacity-0 pointer-events-none scale-105 blur-sm" : "opacity-100"
          }`}
        >
          <div className="relative z-10 flex items-center text-4xl sm:text-5xl font-light tracking-wide font-sans text-white">
            <span>{typewriterText}</span>
            <span className="ml-1 inline-block h-8 sm:h-10 w-[2px] bg-white animate-pulse" />
          </div>
          <div className="relative z-10 mt-3 text-xs tracking-[0.28em] uppercase text-zinc-400 font-sans">
            Brand &bull; Design &bull; Product
          </div>
        </div>
      )}

      {/* Hero Section Container (Strictly bounds all background animations) */}
      <main className="reference-page">
        {/* Live pixelart code stream background on Both Left & Right side margins - stays strictly in Hero */}
        <PixelCodeBackground />

        <section className="reference-stage" aria-label="Jahva creative studio">
          <header className="stage-header">
            <div className="wordmark">Jahva</div>
            <div className="header-tools">
              <Button
                variant="ghost"
                className="reference-control"
                aria-label="Search"
                onClick={() => {
                  setSearchOpen(true);
                  setSelectedResult(null);
                }}
              >
                <Search />
              </Button>
              <span className="header-divider" />
              <Button
                variant="ghost"
                className="reference-control font-sans text-[7px] tracking-widest uppercase hover:text-white transition-colors cursor-pointer"
                aria-label="Contact Jahva"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTACT
              </Button>
            </div>
          </header>

          <div className="brand-seal">
            <Seal />
          </div>

          <aside className="side-labels">
            <span>DIGITAL MARKETING</span>
            <span>DESIGNING</span>
            <span>DEVELOPMENT</span>
          </aside>

          <div className="outline-letter" aria-hidden="true">
            j
          </div>

          <h1 className="reference-title">
            Brand.<span className="dim">Design<span className="dot">.</span>Product<span className="dot">.</span></span>
            <br />
            In-Hours Development.
            <br />
            &amp;More
          </h1>

          {/* Slow moving diagonal light ribbon */}
          <div className="ribbon ribbon-light" aria-hidden="true">
            <div className="ribbon-track">
              {lightRibbonSet}
              {lightRibbonSet}
              {lightRibbonSet}
            </div>
            <div className="ribbon-track" aria-hidden="true">
              {lightRibbonSet}
              {lightRibbonSet}
              {lightRibbonSet}
            </div>
          </div>

          {/* Slow moving diagonal dark ribbon */}
          <div className="ribbon ribbon-dark" aria-hidden="true">
            <div className="ribbon-track">
              {darkRibbonSet}
              {darkRibbonSet}
            </div>
            <div className="ribbon-track" aria-hidden="true">
              {darkRibbonSet}
              {darkRibbonSet}
            </div>
          </div>

          <Button variant="ghost" className="reference-control watch-seal" aria-label="Watch our video">
            <Seal watch />
          </Button>
        </section>

        {/* Apple-style Luxury Glassmorphism Search Dialog (Centered pop-up) */}
        <CommandDialog
          open={searchOpen}
          onOpenChange={(open) => {
            setSearchOpen(open);
            if (!open) setSelectedResult(null);
          }}
        >
          {!selectedResult ? (
            <div className="p-2 sm:p-3">
              <CommandInput
                placeholder="Search Jahva (Projects, Contact Details, Email, About Us)..."
                className="text-[14px] text-white placeholder:text-zinc-500"
              />
              <CommandList className="mt-2.5">
                <CommandEmpty className="py-6 text-center text-sm text-zinc-400">
                  No matching option found.
                </CommandEmpty>
                <CommandGroup>
                  {/* Item 1: Projects */}
                  <CommandItem
                    onSelect={() => setSelectedResult("projects")}
                    className="flex items-center justify-between px-3.5 py-3 cursor-pointer rounded-2xl hover:bg-white/[0.08] data-[selected=true]:bg-white/[0.08] border-b border-white/[0.07] transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <FolderKanban className="h-5 w-5 text-white shrink-0" strokeWidth={1.8} />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-normal text-white">Projects</span>
                        <span className="text-xs text-zinc-400">
                          Featured brand &amp; product work
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span>Explore</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    </div>
                  </CommandItem>

                  {/* Item 2: Contact Details */}
                  <CommandItem
                    onSelect={() => setSelectedResult("contact")}
                    className="flex items-center justify-between px-3.5 py-3 cursor-pointer rounded-2xl hover:bg-white/[0.08] data-[selected=true]:bg-white/[0.08] border-b border-white/[0.07] transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <Phone className="h-5 w-5 text-white shrink-0" strokeWidth={1.8} />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-normal text-white">Contact Details</span>
                        <span className="text-xs text-zinc-400">
                          Direct studio phone line &amp; working hours
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span>Live</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    </div>
                  </CommandItem>

                  {/* Item 3: Email */}
                  <CommandItem
                    onSelect={() => setSelectedResult("email")}
                    className="flex items-center justify-between px-3.5 py-3 cursor-pointer rounded-2xl hover:bg-white/[0.08] data-[selected=true]:bg-white/[0.08] border-b border-white/[0.07] transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <Mail className="h-5 w-5 text-white shrink-0" strokeWidth={1.8} />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-normal text-white">Email</span>
                        <span className="text-xs text-zinc-400">
                          jahva.interested@gmail.com — Studio mailbox
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span>Direct</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    </div>
                  </CommandItem>

                  {/* Item 4: About Us */}
                  <CommandItem
                    onSelect={() => setSelectedResult("about")}
                    className="flex items-center justify-between px-3.5 py-3 cursor-pointer rounded-2xl hover:bg-white/[0.08] data-[selected=true]:bg-white/[0.08] transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <Info className="h-5 w-5 text-white shrink-0" strokeWidth={1.8} />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-normal text-white">About Us</span>
                        <span className="text-xs text-zinc-400">
                          Brand, Design &amp; in-house development
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <span>Studio</span>
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    </div>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </div>
          ) : (
            <div className="p-6 text-white backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10 hover:text-white rounded-full border border-white/10"
                  onClick={() => setSelectedResult(null)}
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to options
                </Button>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Jahva Studio
                </span>
              </div>

              {selectedResult === "projects" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FolderKanban className="h-5 w-5 text-white" strokeWidth={1.8} />
                    <h3 className="text-lg font-medium text-white">Featured Projects</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {PROJECTS_DATA.map((proj) => (
                      <a
                        key={proj.id}
                        href="#projects"
                        onClick={() => {
                          setSearchOpen(false);
                          setSelectedResult(null);
                        }}
                        className="block rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-white">{proj.title}</div>
                          <span className="text-[10px] font-mono text-zinc-400">{proj.badge}</span>
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">{proj.category}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {selectedResult === "contact" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-white" strokeWidth={1.8} />
                    <h3 className="text-lg font-medium text-white">Contact Details</h3>
                  </div>
                  <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur-md">
                    <div>
                      <span className="text-xs text-zinc-400">Studio Phone:</span>
                      <p className="font-mono text-base font-semibold text-white">
                        <a href="tel:+919026054274" className="hover:underline text-white">
                          +91 9026054274
                        </a>
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400">Working Hours:</span>
                      <p className="text-zinc-200">Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400">Location:</span>
                      <p className="text-zinc-200">Jaipur, India &amp; Worldwide Remote Partnerships</p>
                    </div>
                    <div className="pt-2 flex gap-2">
                      <a
                        href="tel:+919026054274"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200"
                      >
                        <Phone className="h-3 w-3" /> Call Now
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-medium hover:bg-white/20"
                      >
                        <Mail className="h-3 w-3" /> Open Gmail
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {selectedResult === "email" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white" strokeWidth={1.8} />
                    <h3 className="text-lg font-medium text-white">Email Jahva</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur-md">
                    <span className="text-xs text-zinc-400">Direct Mailbox:</span>
                    <p className="font-mono text-base font-semibold text-white">jahva.interested@gmail.com</p>
                    <p className="mt-1 text-xs text-zinc-400">Inquiries, proposals &amp; creative projects</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        onClick={handleCopyEmail}
                        className="gap-1.5 text-xs bg-white text-black hover:bg-white/90 font-medium rounded-full px-4"
                      >
                        {copiedEmail ? <Check className="h-3.5 w-3.5 text-black" /> : <Copy className="h-3.5 w-3.5 text-black" />}
                        {copiedEmail ? "Copied!" : "Copy Email"}
                      </Button>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
                      >
                        Open in Gmail
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {selectedResult === "about" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-white" strokeWidth={1.8} />
                    <h3 className="text-lg font-medium text-white">About Jahva</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed backdrop-blur-md">
                    <p className="text-zinc-200">
                      <strong className="text-white">Jahva</strong> is an independent creative studio at the intersection of
                      brand strategy, graphic minimalism, and in-house digital development.
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                      Core capabilities: Digital Marketing, Designing, UI/UX, Motion Animation, and
                      Full-Stack Web &amp; Mobile Products.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CommandDialog>
      </main>

      {/* Smooth transition from dark hero into light theme */}
      <div className="theme-bridge" />

      {/* Full Dark Theme Continuous Experience (Projects, Team, and Footer) */}
      <div className="bg-[#0a0d14] text-white w-full relative z-10 border-t border-white/[0.08]">
        {/* Capabilities & Thought Process Section */}
        <section id="capabilities" className="pt-8 pb-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/[0.08] pb-8">
            <div className="max-w-3xl">
              <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                CAPABILITIES &bull; END-TO-END METHODOLOGY
              </p>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mt-2 font-sans">
                From Ideas to Intelligent Products
              </h2>
              <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl">
                We combine business strategy, creative thinking, design and technology to build distinctive brands, digital products and connected experiences, from the first idea to the final implementation.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="tel:+919026054274"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white transition-all text-xs font-medium tracking-wide font-sans group"
                title="Call Studio"
              >
                <Phone className="h-3.5 w-3.5 text-zinc-300 group-hover:text-black" />
                <span>+91 9026054274</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-xs font-medium tracking-wide font-sans group shadow-md"
                title="Open Gmail to jahva.interested@gmail.com"
              >
                <Mail className="h-3.5 w-3.5 text-black" />
                <span>jahva.interested@gmail.com</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Reference Part 1: Interactive Editorial Category Rows (Compact for single viewport balance + Dialog popup) */}
          <div className="mb-14 sm:mb-20 divide-y divide-white/[0.08] border-b border-white/[0.08]">
            {EDITORIAL_CATEGORIES.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedCategory(item)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-4 sm:py-5 transition-all duration-300 hover:px-3 cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4 sm:gap-8">
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-zinc-200 group-hover:text-white group-hover:translate-x-2 transition-all font-sans">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center gap-4 sm:gap-6 mt-2 md:mt-0">
                  <div className="flex flex-col md:items-end">
                    <span className="text-xs text-zinc-300 font-sans font-medium">
                      {item.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-sans">
                      {item.badge}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(item);
                    }}
                    aria-label={`View details for ${item.title}`}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-white group-hover:border-white transition-all cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Service Dialog Popup */}
          <Dialog
            open={!!selectedCategory}
            onOpenChange={(open) => {
              if (!open) setSelectedCategory(null);
            }}
          >
            <DialogContent className="glass-dialog bubbly-dialog max-w-xl p-6 sm:p-8 border border-white/20 bg-[#0e1320]/95 backdrop-blur-3xl text-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
              {selectedCategory && (
                <div>
                  <DialogHeader className="space-y-2 border-b border-white/10 pb-5 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                        {selectedCategory.badge}
                      </span>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-light tracking-tight text-white font-sans">
                      {selectedCategory.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs text-zinc-400 font-sans">
                      {selectedCategory.tag}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-5 space-y-5">
                    {/* Summary Paragraph */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200 leading-relaxed font-sans">
                      {selectedCategory.summary}
                    </div>

                    {/* Detailed Capabilities List */}
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-3">
                        Key Capabilities &amp; Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedCategory.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-white/70 mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-zinc-500">
                        JAHVA STUDIO &bull; CAPABILITY DISCLOSURE
                      </span>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-medium font-sans transition-all"
                      >
                        <span>Inquire About This</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Section 2: Thought Process (Clean typographic header matching site fonts, outside of any card) */}
          <div className="mt-20 sm:mt-28 border-t border-white/[0.08] pt-16 sm:pt-20">
            <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
              <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                CENTRAL THOUGHT &bull; JAHVA
              </p>
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mt-2 font-sans">
                Thought Process
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mx-auto italic">
                &ldquo;I believe good design begins with understanding, grows through exploration, and finds its purpose in simplicity.&rdquo;
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500 uppercase tracking-widest text-[10px]">MY APPROACH &mdash;</span>
                <span className="text-zinc-200">Observe &bull; Explore &bull; Create &bull; Refine</span>
              </div>
            </div>

            {/* 4 Cards with identical ProfileCardVisual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {THOUGHT_PROCESS_CARDS.map((card) => (
                <div key={card.id} className="group">
                  <div className="perspective-1000 w-full aspect-[4/5] cursor-pointer mb-3.5">
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover-rotate-y-180">
                      {/* FRONT FACE: Full image filling the card, merged seamlessly into dark background */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#0d131f] border border-white/[0.12] shadow-lg group-hover:border-white/35 transition-colors">
                        <img
                          src={card.image}
                          alt={card.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-[#0a0e17]/40 pointer-events-none" />
                      </div>

                      {/* BACK FACE: Sleek minimal flip face with step details */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#0e1320] border border-white/[0.18] p-6 flex flex-col justify-between shadow-2xl text-zinc-200">
                        <div>
                          <div className="flex items-center justify-between border-b border-white/[0.1] pb-2.5 mb-3 text-[10px] font-sans tracking-wider text-zinc-400">
                            <span>STAGE {card.pinNumber}</span>
                            <span className="text-white font-medium uppercase font-mono">{card.pinNumber} / 04</span>
                          </div>
                          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                            {card.label}
                          </span>
                          <h4 className="text-base sm:text-lg font-light tracking-tight text-white leading-snug font-sans mt-3">
                            {card.headline}
                          </h4>
                          <p className="mt-3 text-xs text-zinc-400 font-sans leading-relaxed">
                            {card.excerpt}
                          </p>
                        </div>
                        <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-sans text-zinc-400">
                          <span>JAHVA &bull; APPROACH</span>
                          <span className="uppercase text-white tracking-widest text-[9px] font-medium font-mono">STEP {card.pinNumber}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 tracking-wider block">
                    {card.label}
                  </span>
                  <h3 className="text-sm sm:text-base font-normal text-white tracking-tight font-sans mt-1 leading-snug">
                    {card.headline}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Team Section (Strictly: Photo, Name, and Designation ONLY) */}
        <section id="team" className="py-18 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm font-medium tracking-wide text-zinc-400 font-sans">
              STUDIO DIRECTORS
            </p>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mt-3 font-sans">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-[#131826] border border-white/[0.10] mb-3.5 relative shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.role}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      idx === 3
                        ? "filter grayscale contrast-[0.92] brightness-[1.10] group-hover:contrast-100 group-hover:brightness-105"
                        : "filter grayscale contrast-[1.02] group-hover:grayscale-0"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/70 via-transparent to-transparent opacity-75" />
                </div>
                <h3 className="text-base font-medium text-white tracking-tight font-sans">
                  {member.role}
                </h3>
                <p className="text-xs text-zinc-400 font-sans font-light mt-1.5 leading-relaxed">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Projects Section (Positioned below Our Team, with simple profile card placeholder) */}
        <section id="projects" className="py-18 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b border-white/[0.08] pb-8">
            <div>
              <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                FEATURED WORKS &bull; FILM, 3D &amp; DESIGN
              </p>
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white mt-2 font-sans">
                Our Projects
              </h2>
              <p className="mt-3 text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl">
                Commercial films, 3D concepts, and visual installations engineered for maximum emotional resonance.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-xs font-medium tracking-wide font-sans group shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Dual-Row Kinetic Infinite Portfolio Showcase with Counter-Flow & Pause-on-Hover */}
          <div className="relative -mx-6 sm:-mx-12 max-w-none overflow-hidden my-4 sm:my-6">
            <div className="projects-marquee-container">
              {/* Row 1: Leftward drift */}
              <div className="projects-marquee-track">
                {[...PROJECTS_DATA, ...PROJECTS_DATA].map((project, idx) => (
                  <a
                    key={`r1-${project.id}-${idx}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={
                      project.url.includes("behance.net")
                        ? `View ${project.title} on Behance`
                        : `Visit ${project.title} (${project.url})`
                    }
                    className="group relative w-[280px] sm:w-[330px] md:w-[380px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111624] border border-white/[0.12] hover:border-white/40 transition-all duration-500 cursor-pointer shadow-xl shrink-0 hover:-translate-y-2 hover:scale-[1.01] block"
                  >
                    {/* Mockup Photograph */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Action Arrow and Circle */}
                    <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Row 2: Rightward counter-flow drift */}
              <div className="projects-marquee-track-reverse mt-4 sm:mt-6">
                {[...PROJECTS_DATA.slice().reverse(), ...PROJECTS_DATA.slice().reverse()].map((project, idx) => (
                  <a
                    key={`r2-${project.id}-${idx}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={
                      project.url.includes("behance.net")
                        ? `View ${project.title} on Behance`
                        : `Visit ${project.title} (${project.url})`
                    }
                    className="group relative w-[280px] sm:w-[330px] md:w-[380px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111624] border border-white/[0.12] hover:border-white/40 transition-all duration-500 cursor-pointer shadow-xl shrink-0 hover:-translate-y-2 hover:scale-[1.01] block"
                  >
                    {/* Mockup Photograph */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Floating Action Arrow and Circle */}
                    <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dark Luxury Studio Footer */}
        <footer className="bg-[#080b12] border-t border-white/[0.08] py-18 sm:py-24 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Call to action */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 sm:pb-16 border-b border-white/[0.08] gap-6">
              <div>
                <p className="text-sm font-medium tracking-wide text-zinc-400 font-sans">
                  COLLABORATION
                </p>
                <h2 className="text-3xl sm:text-6xl font-light text-white tracking-tight mt-3 font-sans">
                  Let&apos;s build something remarkable.
                </h2>
              </div>
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-all text-sm font-medium shadow-lg hover:scale-105"
                >
                  <span>jahva.interested@gmail.com</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Footer Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-b border-white/[0.08] text-sm">
              <div>
                <div className="text-2xl font-light tracking-tight text-white font-sans mb-3">
                  Jahva
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">
                  Brand. Design. Product. In-Hours Development.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-sans font-medium">
                  Capabilities
                </div>
                <ul className="space-y-2.5 text-zinc-400 font-sans">
                  <li className="hover:text-white transition-colors">Brand Identity</li>
                  <li className="hover:text-white transition-colors">Design Systems</li>
                  <li className="hover:text-white transition-colors">UI/UX Architecture</li>
                  <li className="hover:text-white transition-colors">Motion &amp; 3D Animation</li>
                  <li className="hover:text-white transition-colors">Full-Stack Development</li>
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-sans font-medium">
                  Studio
                </div>
                <ul className="space-y-2.5 text-zinc-400 font-sans">
                  <li>Jaipur, India</li>
                  <li>Worldwide Remote</li>
                  <li className="pt-2 text-xs text-emerald-400 flex items-center gap-1.5 font-sans">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting your projects
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 mb-4 font-sans font-medium">
                  Connect
                </div>
                <ul className="space-y-3 text-zinc-400 font-sans">
                  <li>
                    <a
                      href="tel:+919026054274"
                      className="hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <Phone className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white shrink-0" />
                      <span>+91 9026054274</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=jahva.interested@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <Mail className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white shrink-0" />
                      <span className="break-all">jahva.interested@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3 text-xs text-zinc-500 font-sans">
              <div>&copy; 2026 Jahva Studio. All rights reserved.</div>
              <div className="flex items-center gap-2">
                <span>Jaipur, India (GMT+5:30)</span>
              </div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
