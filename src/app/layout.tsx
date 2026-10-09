import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "JAHVA | Creative Engineering Collective",
    template: "%s | JAHVA",
  },
  description:
    "An architectural creative engineering collective crafting award-level web applications, procedural shaders, and high-performance digital systems.",
  keywords: [
    "creative engineering",
    "webgl",
    "interactive shaders",
    "design engineering",
    "nextjs",
    "gsap",
  ],
  authors: [{ name: "JAHVA Collective" }],
  openGraph: {
    title: "JAHVA | Creative Engineering Collective",
    description:
      "An architectural creative engineering collective crafting award-level web applications, procedural shaders, and high-performance digital systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-accent selection:text-brand-inverse">
        <div className="relative min-h-[100dvh] flex flex-col bg-canvas-base text-brand-text">
          {children}
        </div>
      </body>
    </html>
  );
}
