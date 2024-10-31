/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"], // Inclui todos os arquivos .js e .html dentro de 'src'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"], // Adiciona a fonte 'Roboto'
      },
      fontSize: {
        h1: ["72px", "79.2px"],
        2438: ["24px", "38.4px"],
      },
      textColor: {
        yellowCusto: ["#FCD34D"],
        orangeCustom: ["#D97706"],
        blackCustom: ["#0F172A"],
        purpleCustom: ["#581C87"],
      },
    },
  },
  plugins: [],
};
