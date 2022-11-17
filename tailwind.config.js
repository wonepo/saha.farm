/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Primaire: '#6F402F',
        Secondaire: '#B08864',
        Tertiare: '#E5D7C9',
        SecondaireLeger : '#FEFEFE',
        TertiaireLeger:'#F6F4F2',
        PrimaireFort: '#B62724'
      }
    },
  },
  plugins: [],
}
