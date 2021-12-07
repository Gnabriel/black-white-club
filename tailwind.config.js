module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // display: ["Abril Fatface", "cursive"],
        display: ["Ruslan Display", "cursive"],
      },
      backgroundImage: {
        "white-black": "linear-gradient(90deg, white 50%, black 50%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
