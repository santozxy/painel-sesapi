/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        light: "#f5f5f5",
        dark: "#2f2f2f",
        primary: "#033E82",
        background: "#f5f5f5",
        placeholder: "#a0a0a0",
        border: "#a0a0a0",
        terciary: {
          light: "#fff",
          dark: "#2f2f2f",
        },
      },
    },
  },
  plugins: [],
};
