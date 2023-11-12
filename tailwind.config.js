/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {sans: ['Amatic SC', 'sans-serif']},
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bouncecalm: "bouncecalm 1s  ease-in-out infinite"
      },
        keyframes: {
          wiggle: {
            '0%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(-2deg)' },
            '75%': { transform: 'rotate(2deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
          bouncecalm: {
            "0%, 100%": { transform: "translateY(-10%)"},
            "50%": {transform: "translateY(0)"}
          }

        }
    }
  },
  plugins: [],
}

