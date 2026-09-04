/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0e14",
          900: "#10141c",
          800: "#161b25",
        },
        line: "#232a37",
        gold: {
          300: "#e8cc8f",
          400: "#d4a94e",
          500: "#b8892e",
        },
      },
      fontFamily: {
        display: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
