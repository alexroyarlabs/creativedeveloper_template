export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0B1224",
        primary: "#1D4ED8",
        secondary: "#38BDF8",
        muted: "#E5E7EB",
        card: "#0F172A",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(56, 189, 248, 0.18)",
        card: "0 15px 35px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
