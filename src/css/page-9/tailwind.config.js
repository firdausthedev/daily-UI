module.exports = {
  content: ["src/**/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
