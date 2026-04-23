/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff4fb',
          100: '#d6e2f3',
          200: '#acc5e7',
          300: '#7ba2d6',
          400: '#4a7fc4',
          500: '#2a60a8',
          600: '#1e4785',
          700: '#163463',
          800: '#0f2547',
          900: '#0a1a34',
          950: '#060f20',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px -2px rgba(15, 37, 71, 0.08)',
        cardHover: '0 10px 30px -6px rgba(15, 37, 71, 0.18)',
      },
    },
  },
  plugins: [],
};
