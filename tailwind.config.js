module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      display: ["EuclidCircularB", "Helvetica", "Arial"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
