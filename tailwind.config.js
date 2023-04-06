/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ancient: ["Ancient", "cursive"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
