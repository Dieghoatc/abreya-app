/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },
      colors: {
        textPrimary: "#000",
        textSecondary: "#fff",

        backgroundMain: "#101820",
        backgroundPrimary: "#fff0f3",
        backgroundSecondary: "#fff",

        yellowBase: "#f2cd00",
        orangeBase: "#f1be48",
        mandarineBase: "#ff6900",

        darkGray: "#2d2d2d",
        lightGray: "#9b9b9b",
      },
    },
  },
  plugins: [],
};
