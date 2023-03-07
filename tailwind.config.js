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
            animation: {
                spin: 'spin 0.7s linear infinite'
            }
        }
    },
    plugins: [],
}
