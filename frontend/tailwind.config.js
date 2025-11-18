import tailwindcssRtl from 'tailwindcss-rtl'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        varela: ['var(--font-varela)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),[tailwindcssRtl]], 
}
