/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        accent: "#38bdf8",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We'll link fonts in index.html or import
      }
    },
  },
  plugins: [],
}
