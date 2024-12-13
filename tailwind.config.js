/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-gray-900": "#0C0C0D",
        "c-gray-800": "#131313",
        "c-gray-700": "#272727",
        "c-gray-400": "#6F6F6F",
        "c-gray-300": "#C8C8C8",
        "c-gray-500": "#5FB9B0",
        "c-purple-300": "#B292FF",
        "c-gray-gradient":
          "linear-gradient(180deg, rgba(35,35,35,1) 0%, rgba(67,67,67,1) 49%, rgba(0,0,0,1) 100%)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
