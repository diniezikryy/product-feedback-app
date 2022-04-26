module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-primary": "hsl(230, 60%, 98%)",
        "main-secondary": "hsl(231, 100%, 97%)",
        "blue-primary": "hsl(230, 76%, 59%)",
        "blue-secondary": "hsl(204, 94%, 68%)",
        "navy-primary": "hsl(231, 33%, 34%)",
        "navy-secondary": "hsl(230, 31%, 31%)",
        "navy-tertiary": "hsl(224, 20%, 49%)",
        "color-white": "#FFFFFF",
        "purple-primary": "hsl(282, 83%, 52%)",
        "purple-secondary": "#C75AF6",
        "peach-primary": "hsl(14, 83%, 74%)",
        "hover-color": "#CFD7FF",
        "dark-grey": "F2F4FE",
      },
      width: {
        456: "28.5rem",
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
