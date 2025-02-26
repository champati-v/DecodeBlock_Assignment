/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont1: ['CustomFont1', 'sans-serif'],
        customFont2: ['CustomFont2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}