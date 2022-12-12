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
      fs60  : ['60px', '70px'], 
      hd    : ['48px', '66px'], 
      fs48  : ['48px', '66px'], 
      fs32  : ['32px', '42px'],  
      fs31  : ['31px', '42px'],
      fs30  : ['30px', '48px'], 
      fs3044: ['30px', '44px'], 
      fs25  : ['25px','40px'],
      fs2031: ['20px', '31px'], 
      fs20  : ['20px', '26px'], 
      fs1944: ['19px', '44px'], 
      fs18  : ['18px', '28px'],
      fs1824: ['18px', '24px'],
      fs1628: ['16px', '28px'], 
      fs16  : ['16px', '24px'], 
      fs15  : ['15px', '24px'],  
      fs14  : ['14px', '21px'],
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
