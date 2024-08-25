/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        'firstcol':"#2F293E",
        'secondcol':"#D8BCFF",
      },
    },
  },
  plugins: [],
}