/** @type {import('tailwindcss').Config} */
const Nth = require("tailwind-nth-child");
const nth3n = new Nth("3n", "3n+0");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ancient: ["Ancient", "cursive"],
        franklin: ["Libre Franklin", "sans-serif"],
      },
      display: ["nth-child-3n"],
    },
  },
  plugins: [nth3n.nthChild()],
};
