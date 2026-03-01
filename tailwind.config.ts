import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      background: "#0a0a0c",
      border: "#1a1a1f",
      "border-hover": "#2a2a32",
      text: "#ececef",
      muted: "#888893",
      dim: "#4a4a53",
      accent: "#5b9cf5",
      "accent-dim": "#5b9cf530",
    },
    fontFamily: {
      sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
      mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
    },
    extend: {
      fontSize: {
        hero: [
          "clamp(3rem, 7vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        subtitle: [
          "clamp(1rem, 1.5vw, 1.15rem)",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
        label: [
          "0.6875rem",
          { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "500" },
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
