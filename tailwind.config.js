/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "special-white": "var(--special-white)",
        "neon-magenta": "var(--neon-magenta)",
        "neon-cyan": "var(--neon-cyan)",
        "neon-blue": "var(--neon-blue)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        special: ['"Chakra Petch"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

