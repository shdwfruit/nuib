/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nuib-navy': '#0A1628',
        'nuib-white': '#FFFFFF',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        // Adjusted font sizes
        'sm': '0.8rem',
        'base': '0.9rem',
        'lg': '1.08rem',
        'xl': '1.215rem',
        '2xl': '1.44rem',
        '3xl': '1.8rem',
        '4xl': '2.25rem',
        '5xl': '2.7rem',
        '6xl': '3.375rem',
        '7xl': '4.05rem',
      },
      spacing: {
        // Adjusted spacing
        '4': '0.9rem',
        '6': '1.35rem',
        '8': '1.8rem',
        '10': '2.25rem',
        '12': '2.7rem',
        '16': '3.6rem',
        '24': '5.4rem',
      },
    },
  },
  plugins: [],
} 