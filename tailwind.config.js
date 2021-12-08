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
        "white-black":
          "linear-gradient(90deg, var(--white) 50%, var(--black) 50%)",
      },
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        "gray-lighter": "var(--gray-lighter)",
        "gray-light": "var(--gray-light)",
        gray: "var(--gray)",
        "gray-dark": "var(--gray-dark)",
        "gray-darker": "var(--gray-darker)",
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
  plugins: [require("@tailwindcss/forms")],
};
