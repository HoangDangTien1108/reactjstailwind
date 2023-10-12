/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton'],
        gotham: ['Gotham']
      },
      colors: {
        red:'#FA709A',
        orange:'#FEE140',
        yellow:'#FFEC70',
        gray:'#292929',
      },  
      screens:{
        xl:'1102px',
        lg:'1025px'
      },
    },
  },
  plugins: [],
}

