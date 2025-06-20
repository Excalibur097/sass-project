/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D2130', 
        blue: '#6B7CFF', 
        lightviolet: '#E0E4FC',
        text: '#111827',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens:{
        phone:'450px',
        tablet:'850px'
      }
    },
  },
  plugins: [],
}

