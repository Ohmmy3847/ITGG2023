/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade": "fadeOut 0.5s",
      },

      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0.5, transform: "translateY(30px) scale(0.8)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      }),

    fontFamily :{
      'Athiti': ['sans-serif'],
      'Krub': ["sans-serif"],
      'goblin': ["Goblin One"],
      'georgia': ['Georgia', 'serif'],
      'Kanit': ['Kanit', 'sans-serif']

    }
    },
  },
  plugins: [],
};