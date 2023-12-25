/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'bluelogo': '#61DAFB',
      'blue': {
        500: '#030028',
      },
      'gray': {
        100: '#A7A7A7',
      },
      'white': '#FFFFFF',

    },
    extend: {},
  },
  plugins: [],
}

