/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42c4e3",
        secondary: "#ffc61a",
        mywhite: "#ffffff",
        myblack:"#1d264d"
      },
      fontFamily: {
        sans: ["'Open Sans'"],
      },  
    },
  },
  plugins: [],
};
