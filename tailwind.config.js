/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#800020",
        secondary: "#F68B33",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["'Open Sans'"],
      },
    },
  },
  plugins: [],
};
