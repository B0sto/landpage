/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', "sans-serif"],
        serif: ["DM serif Display", "serif"],
      }
    },
  },
  plugins: [],
}