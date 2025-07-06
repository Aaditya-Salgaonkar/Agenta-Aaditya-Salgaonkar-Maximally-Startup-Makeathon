// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',
        'secondary': '#4F46E5',
        'accent': '#FFD04D',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}