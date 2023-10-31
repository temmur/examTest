/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,jsx,tsx,js}'],
  theme: {
    extend: {
      colors:{
        navActiveClass: "rgb(26, 38, 153)",
      },
      boxShadow:{
        busketShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px"
      }
    },
  },
  plugins: [],
}

