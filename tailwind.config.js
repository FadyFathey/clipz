/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00f5ff",
        "neon-purple": "#bf00ff",
        "neon-pink": "#ff0080",
        "dark-bg": "#0a0a0f",
        "dark-card": "#1a1a2e",
        "dark-accent": "#16213e",
      },
      fontFamily: {
        gaming: ["Orbitron", "monospace"],
      },
    },
  },
  plugins: [],
};
