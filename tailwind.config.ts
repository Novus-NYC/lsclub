import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Same values as the CSS variables in globals.css; hex here so opacity modifiers work.
        pitch: "#12402b",
        turf: "#1e5c3c",
        chalk: { DEFAULT: "#f5f3ea", deep: "#e9e5d6" },
        yellow: "#f4c430",
        ink: "#0c1f15",
        muted: "#47594e",
        mint: "#b9d3bf",
      },
      fontFamily: {
        display: ["var(--font-slab)", "Rockwell", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: { page: "90rem" },
      screens: { xs: "480px", nav: "1280px" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 0.8, 0.2, 1)" },
    },
  },
  plugins: [],
}
export default config
