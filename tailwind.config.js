/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
        },
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
      },
      fontFamily: { lato: ['Lato', 'sans-serif'] },
      screens: {
        min: '320px', // => @media (min-width: 320px) { ... }
        big: '900px', // => @media (min-width: 900px) { ... }
        exLG: '1200px', // => @media (min-width: 1200px) { ... }
        wide: '2000px', // => @media (min-width: 2000px) { ... }
      },
    },
  },
  plugins: [],
};
