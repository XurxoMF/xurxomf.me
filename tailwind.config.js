/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                "xmf-font": ["Roboto Mono", "Liberation Mono", "sans-serif"],
            },
            colors: {
                "xmf-pink": "#ff75a7",
                "xmf-dark-blue": "#081131",
                "xmf-light-white": "#f2f5ff",
            },
        },
    },
    plugins: [],
};
