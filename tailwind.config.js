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
      },
      dropShadow: {
        "neon-cyan": "0 7px 10px var(--neon-cyan)",
        "neon-magenta": "0 7px 10px var(--neon-magenta)",
      }
    },
  },
  plugins: [],
}

