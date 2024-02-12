export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      focus: ['group-focus'],
    },
    fontSize: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '18px',
      xl: '24px',
      xxl: '36px',
      xxxl: '40px',
    },
    boxShadow: {
      default: '0, 0, 10px rgba(0, 0, 0, .1)'
    },
    borderColor: {
      default: 'rgba(0, 0, 0, .2)',
      gray: 'rgb(55 65 81)',
      black: 'rgb(0 , 0, 0)',
    },
    // backgroundColor: {
    //   header: 'rgb(246, 246, 246)',
    //   yellow: 'rgb(255, 255, 100)'
    // },
    height: {
      header: '600px'
    },
    gridColumn: {
      'auto': 'auto',
      'fr': '1fr',
    },
  },
  plugins: [],
}