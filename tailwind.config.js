/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
        dark: "#030712",
        card: "#111827",
      },
    },
  },
  plugins: [],
};