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
        accent: "#f97316", // electric orange accent replacing dull indigo
      },
      boxShadow: {
        card: "0 20px 40px -15px rgba(249, 115, 22, 0.15)", // subtle orange glow
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
