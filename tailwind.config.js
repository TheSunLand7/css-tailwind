/* @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{html,js}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'sanFrancisco': "url('../imgs/sanFrancisco.jpg')",
                'sanFranciscoDesktop': "url('../imgs/sanFranciscoDesktop.jpg')",
                'yosemite': "url('../imgs/yosemite.jpg')",
                'LA': "url('../imgs/LA.jpg')",
                'seattle': "url('../imgs/seattle.jpg')",
                'new_york': "url('../imgs/new_york.jpg')",
                'norway': "url('../imgs/norway.jpg')",
                'sydney': "url('../imgs/sydney.jpg')",
                'miami': "url('../imgs/miami.jpg')",
                'switzerland': "url('../imgs/switzerland.jpg')",
                'bali': "url('../imgs/bali.jpg')",
                'norway': "url('../imgs/norway.jpg')",
                'chicago': "url('../imgs/chicago.jpg')",
                'europe': "url('../imgs/europe.jpg')",
                'iceland': "url('../imgs/iceland.jpg')",
            },
            backgroundColor: ({ theme }) => ({
                ...theme('colors'),
                "primary": "#CC2D4A",
                "secondary": "#8FA206",
                "terciary": "#61AEC9"
            }),
            textColor: {
                "primary": "#CC2D4A",
                "secondary": "#8FA206",
                "terciary": "#61AEC9"

            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"]
            },
            ringColor: {
                "primary": "#CC2D4A",
                "secondary": "#8FA206",
                "terciary": "#61AEC9"
            },
        }
    },
    plugins: [],
}
