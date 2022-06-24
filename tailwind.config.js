/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-default":"#b3b3b3",
        "brown-light":"#212121",
        "brown-dark":"#0a0a0a"
      }
    },
  },
  plugins: [],
}
