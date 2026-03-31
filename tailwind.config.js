/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b4332',
          light: '#2d6a4f',
          dark: '#081c15',
        },
        accent: '#d4af37',
        'dark-bg': '#121212',
        'card-bg': '#1e1e1e',
      }
    },
  },
  plugins: [],
}
