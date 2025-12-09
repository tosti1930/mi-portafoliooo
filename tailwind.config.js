/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // 
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Si elegiste Space Grotesk:
                sans: ["'Space Grotesk'", "sans-serif"],
            },
        },
    },
    plugins: [],
}