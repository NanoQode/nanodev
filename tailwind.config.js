const { orange } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'white' : '#ffffff',
      'nc-blue' : '#5AA6B1',
      'nc-orange' : '#DA452C',
    }
  },
  plugins: [],
};
