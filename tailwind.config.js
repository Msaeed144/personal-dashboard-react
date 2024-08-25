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
        'secondcolhov':'#c0a7e3',
        'thirdcol':"#868B93",
        'bordercol':'#484040'
      },
      borderRadius:{
        "5xl":"50px"
      },
      boxShadow:{
        "3xl":" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      }
    },
  },
  plugins: [],
}