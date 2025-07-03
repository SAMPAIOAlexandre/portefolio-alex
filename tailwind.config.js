/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-anuphan)", "sans-serif"],
        body: ["var(--font-anuphan)", "sans-serif"],
        title: ["var(--font-gowun-dodum)", "sans-serif"],
      },
      colors: {
        background: { DEFAULT: "hsl(var(--background))" },
        foreground: { DEFAULT: "hsl(var(--foreground))" },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... autres couleurs
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
