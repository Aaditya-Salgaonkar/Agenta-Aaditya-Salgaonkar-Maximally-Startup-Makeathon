typescript
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f56565',
        secondary: '#4f46e5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}