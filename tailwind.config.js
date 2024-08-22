/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'custom-heavy': '0 10px 20px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.12)',
      },
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
