import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        th: {
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          border: "var(--color-border)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
          hint: "var(--color-hint)",
        },
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        garamond: ["var(--font-garamond)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
