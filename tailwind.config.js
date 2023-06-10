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
    extend: {
      colors: {
        pink: '#ECB7B7',
        green: '#263E2B',
      },
      fontFamily: {
        archivo: ['var(--font-archivo)'],
      },
      // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '976px',
      //   xl: '1440px',
      // },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
  },
	},
  plugins: [],
}

