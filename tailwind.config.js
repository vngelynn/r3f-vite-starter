/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'], // or your preferred sans font
      },},
  },
  plugins: [],
}

