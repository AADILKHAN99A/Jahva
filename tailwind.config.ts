import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: "var(--color-canvas-base)",
          subtle: "var(--color-canvas-subtle)",
        },
        surface: {
          shell: "var(--color-surface-shell)",
          core: "var(--color-surface-core)",
          elevated: "var(--color-surface-elevated)",
        },
        border: {
          subtle: "var(--color-border-subtle)",
          visible: "var(--color-border-visible)",
          focus: "var(--color-border-focus)",
        },
        brand: {
          text: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },
        accent: {
          DEFAULT: "var(--color-accent-primary)",
          subtle: "var(--color-accent-subtle)",
          glow: "var(--color-accent-glow)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "2.0rem",
      },
    },
  },
  plugins: [],
};

export default config;
