module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main-secondary": "hsl(14, 83%, 74%)",
        "bg-main-primary": "hsl(230, 60%, 98%)",
        "blue-primary": "hsl(230, 76%, 59%)",
        "blue-secondary": "hsl(204, 94%, 68%)",
        "navy-primary": "hsl(231, 33%, 34%)",
        "navy-secondary": "hsl(230, 31%, 31%)",
        "navy-tertiary": "hsl(224, 20%, 49%)",
        white: "#FFFFFF",
        purple: "hsl(282, 83%, 52%)",
        peach: "hsl(14, 83%, 74%)",
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
