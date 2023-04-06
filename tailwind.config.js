/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ancient: ["Ancient", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
