/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    ".pages/**/*.{html,js}",
    ".components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C059B",
        secondary: "#1E293B",
        accent: "#CB5930",
        danger: "#F00",
      },
    },
  },
  plugins: [],
};
