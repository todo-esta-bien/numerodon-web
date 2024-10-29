/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Georgia'],
    },
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: ['cupcake'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
