export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#103D54",
        accent: "#FF6B6B",
        dark: "#0B2C3D",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(255, 107, 107, 0.35)",
      }
    },
  },
  plugins: [],
}
