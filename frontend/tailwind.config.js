/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        sans: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#06B6D4",
        accent: "#22C55E",
        canvas: "#020617",
        surface: "#0B1224",
        panel: "#0F172A",
        ink: "#0B1224",
        muted: "#94A3B8"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(2, 6, 23, 0.35)",
        glow: "0 0 0 1px rgba(6, 182, 212, 0.1), 0 10px 40px rgba(6, 182, 212, 0.15)"
      }
    }
  },
  plugins: []
};
