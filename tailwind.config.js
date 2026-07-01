/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        santino: { DEFAULT: '#3f2d23', accent: '#b45309' }, // tono cerámica/terracota
        cream: '#faf6f0', // fondo crema
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
