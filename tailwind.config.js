/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Abril: ['Abril', 'sans-serif'],
        Poppinscustom:['Poppinscustom','sans-serif'],
        Poppinsmedium:['Poppinsmedium','sans-serif']
      },
    },
  },
  plugins: [],
}