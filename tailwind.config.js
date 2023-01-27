/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': `'Montserrat', sans-serif`
      },
      colors: {
        purple: {
          accent: '#932790',
          'accent--dark': '#701d70',
          secodary: '#672e91',
          'secodary--dark': '#472168',
        },
        pink: {
          raspberry: '#9f005d',
          'raspberry--dark': '#72024a'
        }
      }
    }
  },
  plugins: [],
}
