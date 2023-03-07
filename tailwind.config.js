/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        screens: {
            'xs': '450px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1536px'
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
