module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#1E1E1E',
        accent: '#FF63C3',
        'gray-light': '#F4F4F4',
        'gray-dark': '#1A1A1A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}