/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            },
            colors: {
                gray: {
                    50: '#f9f9f9',
                    100: '#f5f5f7', // Apple light gray
                    200: '#e5e5e5',
                    300: '#d2d2d7',
                    400: '#86868b', // Apple subtle text
                    500: '#6e6e73',
                    800: '#424245',
                    900: '#1d1d1f', // Apple dark
                }
            }
        },
    },
    plugins: [],
}
