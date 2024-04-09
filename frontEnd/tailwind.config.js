/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF685B",
        secondary: "#E74040",
        text: "#252B42",
        textLight: "#737373",
        background: "#E5F9F7",
        backgroundSite: "#FAFAFA",
        bgCard: "#E74040",
      },
    },
  },
  plugins: [],
};
