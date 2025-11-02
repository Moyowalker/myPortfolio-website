/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./content/**/*.{md,mdx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "ui-sans-serif"],
      },
      colors: {
        primary: "#020617",
        secondary: "#94a3b8",
        accent: "#6366f1",
      },
      boxShadow: {
        card: "0 25px 60px -20px rgba(59, 130, 246, 0.35)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
