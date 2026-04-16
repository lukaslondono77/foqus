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
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Hulk primary
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          bright: '#39FF14', // Neon/Radioactive
        },
        'hulk-purple': {
          DEFAULT: '#7c3aed', // Classic Hulk pants purple
          light: '#a78bfa',
          dark: '#5b21b6',
        }
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'Arial Narrow', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(74,222,128,0.45), 0 0 45px rgba(74,222,128,0.18)',
        'neon-green-sm': '0 0 10px rgba(74,222,128,0.4)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.45), 0 0 45px rgba(124,58,237,0.18)',
      },
      backgroundImage: {
        'hulk-card': 'linear-gradient(135deg, #111111 0%, #0f1f0f 100%)',
        'hulk-radial': 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
