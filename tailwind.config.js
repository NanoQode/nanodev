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
      fs60   : ['60px', '70px'],  
      fs52   : ['52px', '83px'], 
      fs5265 : ['52px', '65px'],
      hd     : ['48px', '66px'], 
      fs48   : ['48px', '66px'], 
      fs36   : ['36px', '48px'],
      fs32   : ['32px', '42px'],  
      fs31   : ['31px', '42px'],
      fs30   : ['30px', '48px'], 
      fs3044 : ['30px', '44px'], 
      fs2535 : ['25px', '35px'],
      fs25   : ['25px', '40px'],
      fs2031 : ['20px', '31px'], 
      fs20   : ['20px', '26px'], 
      fs1944 : ['19px', '44px'], 
      fs1925 : ['19px', '25px'], 
      fs18   : ['18px', '28px'],
      fs1824 : ['18px', '24px'],
      fs1628 : ['16px', '28px'], 
      fs16   : ['16px', '24px'], 
      fs15   : ['15px', '24px'],  
      fs14   : ['14px', '21px'],
      fs13   : ['13px', '19px'],
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
    screens: {
      
      'xs': '481px',
      // => @media (max-width: 576px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      // max width media
      'm2xl': {'max': '1600px'},
      // => @media (max-width: 1600px) { ... }
      'mxl': {'max': '1400px'},
      // => @media (max-width: 1400px) { ... }
      'mlg': {'max': '1199px'},
      // => @media (max-width: 1199px) { ... }
      'mmd': {'max': '991px'},
      // => @media (max-width: 991px) { ... }
      'msm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'mxs': {'max': '575px'},
      // => @media (max-width:575px) { ... }
      'mxss': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
    }
  },
  plugins: [],
};
