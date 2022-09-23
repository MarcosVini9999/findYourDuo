/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundGalaxy: 'url("/Fundo.svg")',
        "your-duo-gradient":
          "linear-gradient(89.86deg, #9572FC 32.08%, #43E7AD 33.94%, #E1D55D 84.57%)",
        "background-title-game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
