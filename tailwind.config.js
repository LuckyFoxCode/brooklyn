/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: '#0C0C0E',
      gold: '#BB945F',
      gray: '#8E8E8E',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Forum', 'serif'],
    },
    container: {
      paddingLeft: '20px',
      paddingRight: '20px',
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
