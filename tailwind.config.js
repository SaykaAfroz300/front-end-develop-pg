/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandStart: "#f97316",
                brandMid: "#ec4899",
                brandEnd: "#8b5cf6",
            },
        },
    },
    plugins: [],
}
