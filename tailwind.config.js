/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        santino: { DEFAULT: '#111827', accent: '#e11d48' }, // marca (edita a gusto)
      },
    },
  },
  plugins: [],
};
