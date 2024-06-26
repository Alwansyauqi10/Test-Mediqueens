/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px', // default padding
        md: '32px', // padding untuk layar md
        lg: '48px', // padding untuk layar lg
        xl: '64px', // padding untuk layar xl
      },
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',    // Border radius 32px
        '5xl': '2.5rem',  // Border radius 40px
        '6xl': '3rem',    // Border radius 48px
        '7xl': '3.5rem',  // Border radius 56px
      },
      colors: {
        medipink: '#FFD5EF',
        medigreen: '#D7EFC2',
        medired: '#FFA7A7',
        mediblue: '#B0C5F6',
        mediyellow: '#FFF3C8'
      },
      screens: {
        '2xl' : '1320px'
      },
    },
  },
  plugins: [],
}

