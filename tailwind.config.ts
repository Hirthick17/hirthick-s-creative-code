import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette
        violet: {
          DEFAULT: "#3D2C8D",
          light:   "#6B4EFF",
          dark:    "#2A1F60",
        },
        teal: {
          DEFAULT: "#00C9A7",
          light:   "#00E5C0",
          dark:    "#009E84",
        },
        warm: {
          DEFAULT: "#F5A623",
          light:   "#FFD060",
          dark:    "#C4841A",
        },
        ink: {
          DEFAULT: "#0D0D1A",
          50:      "#1A1A2E",
          100:     "#16213E",
        },
        paper: {
          DEFAULT: "#F4F2ED",
          muted:   "#7B7F9E",
        },
      },
      borderRadius: {
        xl:   "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        lg:   "var(--radius)",
        md:   "calc(var(--radius) - 2px)",
        sm:   "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "card":    "0 4px 24px rgba(0,0,0,0.5)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.6)",
        "violet":  "0 0 40px rgba(61,44,141,0.4)",
        "teal":    "0 0 30px rgba(0,201,167,0.3)",
        "inner-sm":"inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "gradient-violet": "linear-gradient(135deg, #3D2C8D 0%, #6B4EFF 100%)",
        "gradient-teal":   "linear-gradient(135deg, #00C9A7 0%, #00E5C0 100%)",
        "gradient-hero":   "radial-gradient(ellipse at 70% 50%, rgba(61,44,141,0.3) 0%, transparent 60%)",
        "gradient-dark":   "linear-gradient(180deg, #0D0D1A 0%, #111124 100%)",
        "grid-pattern":    "linear-gradient(rgba(61,44,141,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(61,44,141,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(61,44,141,0.3)" },
          "50%":       { boxShadow: "0 0 60px rgba(61,44,141,0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "fade-in-left":   "fade-in-left 0.5s ease-out forwards",
        "fade-in-right":  "fade-in-right 0.5s ease-out forwards",
        "scale-in":       "scale-in 0.4s ease-out forwards",
        "glow-pulse":     "glow-pulse 3s ease-in-out infinite",
        float:            "float 4s ease-in-out infinite",
        "spin-slow":      "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
