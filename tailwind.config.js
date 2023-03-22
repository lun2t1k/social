/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'xs': '450px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1536px',
            'tall': {
                'raw': '(min-height: 640px)'
            }
        },
        fontSize: {
            base: ['14px', '20px'],
            '2xs': ['10px', '14px'],
            xs: ['12px', '16px'],
            sm: ['14px', '20px'],
            md: ['16px', '24px'],
            lg: ['18px', '28px'],
            xl: ['20px', '28px'],
            '2xl': ['24px', '32px'],
            '3xl': ['30px', '36px'],
            '4xl': ['36px', '40px'],
            '5xl': ['48px', '1'],
            '6xl': ['60px', '1'],
            '7xl': ['72px', '1'],
            '8xl': ['96px', '1'],
            '9xl': ['128px', '1'],
        },
        extend: {
            fontFamily: {
                'montserrat': `'Montserrat', sans-serif`
            },
            animation: {
                spin: 'spin 0.7s linear infinite'
            }
        }
    },
    plugins: [],
}
