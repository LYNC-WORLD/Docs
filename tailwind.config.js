const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
        grotesk: ['"Space Grotesk"', ...fontFamily.sans],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
        custom500: "500px",
        custom385: "385px",
      },
      colors: {},
    },
  },
  plugins: [],
};
