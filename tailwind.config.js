/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dourado: '#C5A059',
        escuro: '#111111',
      }
    },
  },
  plugins: [],
}
