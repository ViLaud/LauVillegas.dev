const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      pink: '#ECB7B7'
    },
    extend: {
    fontFamily: {
      archivo: ['var(--font-archivo)'],
    },
  },
	},
  plugins: [],
}

