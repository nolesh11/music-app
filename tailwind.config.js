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
      sm: '0.8rem',
      m: '16px',
      base: '1rem',
      xl: '1.25rem',
      xxl: '1.563rem',
      xxxl: '1.953rem',
      xxxxl: '2.441rem',
      xxxxxl: '3.052rem',
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