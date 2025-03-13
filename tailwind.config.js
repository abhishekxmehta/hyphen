/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory (if using Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Add a custom gold color
      },
    },
  },
  plugins: [],
};
