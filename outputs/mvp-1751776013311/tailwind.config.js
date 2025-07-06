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
        secondary: '#242A39',
        'light-blue': '#DAECFF',
        'light-gray': '#F5F5F5',
        'dark-gray': '#1F2937',
        'very-dark-gray': '#111827',
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        md: '4px',
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
}