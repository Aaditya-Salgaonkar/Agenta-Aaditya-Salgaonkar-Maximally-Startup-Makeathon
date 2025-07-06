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
        primary: {
          DEFAULT: '#4ECDC4',
          50: '#E6FCFD',
          100: '#BFFCF8',
          200: '#99F6F3',
          300: '#66F3EF',
          400: '#33F0F0',
          500: '#00EDEB',
          600: '#00E5E5',
          700: '#00DDE0',
          800: '#00D4DB',
          900: '#00CEDA',
        },
        accent: {
          DEFAULT: '#FF6B81',
          50: '#FFE8ED',
          100: '#FFD1DA',
          200: '#FFB5C9',
          300: '#FF99D6',
          400: '#FF7ED3',
          500: '#FF61C0',
          600: '#FA5ACF',
          700: '#F754C1',
          800: '#F44DC3',
          900: '#F146BE',
        },
      },
      screens: {
        xs: '475px',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};