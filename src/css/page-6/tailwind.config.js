module.exports = {
  content: ["src/**/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      colors: {
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
