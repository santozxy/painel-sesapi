/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        dark: "#2f2f2f",
        primary: "#107BB2",
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
