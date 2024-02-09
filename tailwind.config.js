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
      xxl: '36px'
    },
    boxShadow: {
      default: '0, 0, 10px rgba(0, 0, 0, .1)'
    },
    borderColor: {
      default: 'rgba(0, 0, 0, .2)'
    }
  },
  plugins: [],
}