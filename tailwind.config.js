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
        'bordercol':'#484040',
        'custom-red': 'rgba(255, 122, 122, 0.8)',  
        'custom-blue': 'rgba(42, 15, 211, 0.75)'
      },
      borderRadius:{
        "5xl":"50px"
      },
      boxShadow:{
        "3xl":" rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        "4xl": "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 122, 122, 0.8) 14%, rgba(42, 15, 211, 0.75) 100%)'
      }
    },
  },
  plugins: [],
}