/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: {
          DEFAULT: '#2b9994',
          dark: '#025e59'
        }
      }
    },
  },
  plugins: [],
}