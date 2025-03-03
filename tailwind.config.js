/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f8f7",
          100: "#e0eae7",
          200: "#c1d6d0",
          300: "#9bbbb2",
          400: "#739c91",
          500: "#568276", // Main primary color
          600: "#44675e",
          700: "#38544d",
          800: "#2f433e",
          900: "#293836",
        },
        secondary: {
          50: "#fef8ec",
          100: "#fdedc8",
          200: "#fbda91",
          300: "#f8c14f", // Main secondary color
          400: "#f6ab22",
          500: "#e68e09",
          600: "#c26d07",
          700: "#9b4e0c",
          800: "#7e4010",
          900: "#693512",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
