/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        orangered: "#ec3e16",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "41xl": "60px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
