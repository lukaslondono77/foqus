/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foqus-green': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce4bc',
          300: '#8fd18f',
          400: '#5bb55b',
          500: '#006400',
          600: '#005a00',
          700: '#004d00',
          800: '#004000',
          900: '#003300',
        }
      }
    },
  },
  plugins: [],
}

