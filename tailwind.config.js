/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        abc: [ "Sora", 'sans-serif'],
        bcd:["Outfit", 'sans-serif']
      }
    },
  },
  plugins: [],
}

