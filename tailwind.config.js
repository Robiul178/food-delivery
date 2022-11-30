module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#70a21a',
        'dark': 'rgb(39 43 48)',
        'red': '#da2424',
        'white': '#ffffff',
        'gray': 'rgb(180 173 150)',
      },
    },
  },
  plugins: [require("daisyui")],
}
