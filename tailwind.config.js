/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: '#53C151',
        red: '#A31818',
        grey: '#EBEBEB',
        redGradient: '#FF7676'
      }
    },
  },
  plugins: [require("daisyui")],
}
 