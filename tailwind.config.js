const { orange } = require('@mui/material/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '25': '6.25rem', 
        '15': '3.75rem',  
      },
    },
    colors: {
      'white' : '#ffffff',
      'nc-blue' : '#5AA6B1',
      'nc-orange' : '#DA452C',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], 
    },
  },
  plugins: [],
};
