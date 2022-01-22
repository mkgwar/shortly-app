module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        //primary
        "Cyan-custom": "hsl(180, 66%, 49%)",
        "Dark-Violet": "hsl(257, 27%, 26%)",

        //secondary
        "Red-custom": "hsl(0, 87%, 67%)",

        //Neutral
        "Gray-custom": "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
