import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ek: {
          dark: {
            950: "#03060d",
            900: "#070c18",
            850: "#0b1222",
            800: "#10192e",
            700: "#18243f",
          },
          gold: {
            300: "#fde047",
            400: "#facc15",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
          },
          solar: {
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
          },
          emerald: {
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
          },
          sapphire: {
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse-slow": "spin-reverse 35s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(32px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
