/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        'mobile': '425px',
        '3xl': '1920px',
        '4xl': '2560px',
      },

      keyframes: {
        'border-spin': {
          '100%' : {
            transform: 'rotate(360deg)',
          },
        },

        'side-bar': {
          '0%': {
            transform: 'translateX(200%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          }
        }, 

        'side-bar-2': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(200%)',
          }
        }



      },

      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        'border-spin-2': 'border-spin 7s linear infinite',
        'side-bar': 'side-bar 0.5s linear',
        'side-bar-2': 'side-bar-2 0.5s linear',
      },
    },
  },
  plugins: [],
}

