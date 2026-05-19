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
        primary: "#0c0a09",
        secondary: "#a8a29e",
        accent: "#d9b272",
      },
      boxShadow: {
        card: "0 20px 40px -15px rgba(217, 178, 114, 0.15)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
