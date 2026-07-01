/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        santino: { DEFAULT: '#3f2d23', accent: '#b45309' }, // tono cerámica/terracota (edita a gusto)
      },
    },
  },
  plugins: [],
};
