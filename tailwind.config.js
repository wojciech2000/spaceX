module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "512px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      width: {
        desktop: "1024px",
      },
      colors: {
        primary: "#34FFC8",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
