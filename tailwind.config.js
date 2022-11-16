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
    fontSize: {
      hd: ['48px', '66px'], 
      fs32: ['32px', '42px'], 
      fs20: ['20px', '26px'], 
      fs16: ['16px', '24px'], 
      fs15: ['15px', '24px'],  
      fs14: ['14px', '21px'],
    },
    colors: {
      'white'     : '#ffffff',
      'nc-blue'   : '#5AA6B1',
      'nc-orange' : '#DA452C',
      'nc-black'  : "#494949",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], 
    },
  },
  plugins: [],
};
