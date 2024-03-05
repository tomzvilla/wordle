/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'scaleY(1)'},
          '50%': { transform: 'scaleY(0)'},
        },
        horizontalShake: {
          '0%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(5px)'},
          '50%': {transform: 'translateX(-5px)'},
          '75%': {transform: 'translateX(5px)'},
          '100%': {transform: 'translateX(0)'},
        }
      },
      animation: {
        'flip': 'flip 0.4s ease forwards',
        'horizontal-shake': 'horizontalShake 0.2s ease'
      }
    },
  },
  plugins: [],
}

