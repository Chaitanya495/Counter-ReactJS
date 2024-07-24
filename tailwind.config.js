/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js'],
  theme: {
    extend: {
        colors:{
          'heading' : '#00A7FF',
          'page' : '#2A333F',
          'resetBtn' : '#569EFF',
        }
    },
  },
  plugins: [],
}

