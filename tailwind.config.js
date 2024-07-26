/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],   // Font kustom
          'playfair': ['Playfair Display', 'serif'], // Font kustom
      },
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-animation': 'gradient-animation 1s linear infinite',
      },
  },
  },
  plugins: [],
}

