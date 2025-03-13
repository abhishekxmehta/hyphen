/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#101585',
        'mocha-mousse': '#A47864',
        'muted-rose': '#D58D8D',
        'verdant-green': '#31EC56',
        'sunny-yellow': '#FFD43A',
        'crisp-white': '#FFFFFF',
        gold: '#FFD700',
      },
    },
  },
};

