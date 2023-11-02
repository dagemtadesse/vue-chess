/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#895737",
        chessWhite: '#f3e9dc',
        chessBlack: '#5e3023'
      }
    },
  },
  plugins: [],
}

