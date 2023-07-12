/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  plugins: [require('prettier-plugin-tailwindcss')],
  darkMode: 'media',
};
