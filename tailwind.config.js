/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}