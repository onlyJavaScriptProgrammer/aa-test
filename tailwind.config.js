/** @type {import('tailwindcss').Config} */

const TailwindCssForms = require('@tailwindcss/forms');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'btn-base': ['16px', '16px'],
      },
      colors: {
        'slate-500': 'rgba(107, 114, 128, 0.75)',
      },
      container: {
        padding: {
          DEFAULT: '10px',
          sm: '40px',
          xl: '80px',
        },
      },
      padding: {
        '1b': '20px',
      },
      width: {
        'b-tab': '406px',
      },
    },
  },
  plugins: [
    new TailwindCssForms(),
  ],
};
