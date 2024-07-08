/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00012C",
        secondary: "#868E96",
        tertiary: "#121212",
        main: "#385BDB",
        border: "#cfcfcf",
        card: "#E6E6FA",
      },
    },
  },
  plugins: [],
};
