const plugin = require("tailwindcss/plugin");

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
        "white-black": "linear-gradient(90deg, white 50%, #0b0b0b 50%)",
      },
      colors: {
        black: "#0b0b0b",
        white: "white",
        "gray-lighter": "#f5f6f9",
        "gray-light": "#d8dce7",
        gray: "#9ba1ae",
        "gray-dark": "#66676c",
        "gray-darker": "#252527",
      },
      // backgroundColor: {
      //   black: "var(--black)",
      //   white: "var(--white)",
      //   "gray-lighter": "var(--gray-lighter)",
      //   "gray-light": "var(--gray-light)",
      //   gray: "var(--gray)",
      //   "gray-dark": "var(--gray-dark)",
      //   "gray-darker": "var(--gray-darker)",
      // },
      // textColor: {
      //   black: "var(--black)",
      //   white: "var(--white)",
      //   "gray-lighter": "var(--gray-lighter)",
      //   "gray-light": "var(--gray-light)",
      //   gray: "var(--gray)",
      //   "gray-dark": "var(--gray-dark)",
      //   "gray-darker": "var(--gray-darker)",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
          "text-orientation": "upright",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
