/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {
        fontFamily: {
        title : ["var(--font-gowun-dodum)"],
        body : ["var(--font-anuphan)"],
  }
    },
  },
  plugins: [],

}