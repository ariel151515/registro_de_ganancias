/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'base': '#E7EFFC',
        'azul': '#5170EB',
        'grisItem': '#FFF6F6',
        'verde':'#54C259',
        'grisItemDos':'#FBEFEF',
        'grisTexto':'#A1A1A1',
        'grisInput':'#E3E2E2',
        'grisIcono':'#BBBBBB'
      },
    },
  },
  plugins: [],
}

