/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        amarante: ['Amarante', 'sans-serif'],
      },
      keyframes: {
        rotateScaleLinear: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(-15deg) scale(1.3)' },
        },
        ScaleEaseInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1.5)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        linearSpin: 'rotateScaleLinear 1s ease-in-out',
        enlarge: 'ScaleEaseInOut 1s ease-in-out infinite',
        slide: 'slide 20s linear infinite',
      },
    },
  },
  plugins: [],
};
