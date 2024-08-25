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
        'secondcolhov':'#000000',
        'thirdcol':"#868B93",
      },
      boxShadow:{
        "3xl":" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      }
    },
  },
  plugins: [],
}