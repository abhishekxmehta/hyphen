/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#101585', // Dark navy blue
        'mocha-mousse': '#A47864', // Warm mocha color
        'muted-rose': '#D58D8D', // Subtle pinkish rose
        'verdant-green': '#31EC56', // Vibrant green
        'sunny-yellow': '#FFD43A', // Bright yellow
        'crisp-white': '#FFFFFF', // Clean white
        gold: '#FFD700', // Custom golden color for text
      },
    },
  },
  plugins: [],
};
