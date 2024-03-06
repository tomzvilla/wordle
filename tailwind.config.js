/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bevan: ["Bevan", "sans-serif"],
        glegoo: ["Glegoo", "sans-serif"],
        vacer: ["Vacer", "sans-serif"],
      },
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
        },
        fadeIn: {
          '0%': {display: 'none', opacity: '0'},
          '1%': {display: 'block', opacity: '0'},
          '100%': {display: 'block', opacity: '1'},
        },
        fadeOut: {
          '0%': {display: 'block', opacity: '1'},
          '100%': {display: 'none', opacity: '0', visibility: 'hidden'},
        }
      },
      animation: {
        'flip': 'flip 0.4s ease forwards',
        'horizontal-shake': 'horizontalShake 0.2s ease',
        'fade-in': 'fadeIn 0.2s ease',
        'fade-out': 'fadeOut 0.2s ease',
      }
    },
  },
  plugins: [],
}

