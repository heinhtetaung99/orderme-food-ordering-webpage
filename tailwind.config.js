/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      heading: ["Dancing Script", "cursive"],
      body: ["Della Respira", "serif"],
      paragraph: ["Raleway", "sans - serif"],
    },

    extend: {
      colors: {
        primary: "#006837",
        secondary: "#FE971E",
        third: "#181A1B",
      },
      fontFamily: {
        heading: ["Dancing Script", "cursive"],
        body: ["Della Respira", "serif"],
        paragraph: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
