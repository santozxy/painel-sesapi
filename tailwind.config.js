/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1094de",
        background: "#f5f5f5",
        placeholder: "#a0a0a0",
        border: "#a0a0a0",
        terciary:{
          light:"#fff",
          dark:"#2f2f2f",
        },

      },
    },
  },
  plugins: [],
};
