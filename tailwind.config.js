/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/introduction-section.jsx",
    "./src/components/button.jsx",
    "./src/components/section.jsx",
    "./src/components/main-section.jsx",
    "./src/components/side-navigation.jsx",
    "./src/components/content.jsx",
    "./src/components/education-card.jsx",
    "./src/components/simple-card.jsx",
    "./src/components/portfolio-card.jsx",
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

