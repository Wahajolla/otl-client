/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};
const backgroundColor = {
  primary: generateColorClass('bg-primary'),
  secondary: generateColorClass('bg-secondary'),
  tertiary: generateColorClass('bg-tertiary'),
};
const colors = {
  coffee: generateColorClass('coffee'),
  blackblue: generateColorClass('blackblue'),
  brown: generateColorClass('brown'),
  blackcorall: generateColorClass('blackcorall'),
  silver: generateColorClass('silver'),
  transparentcorall: generateColorClass('transparentcorall'),
};
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor,
      colors,
    },
  },
  plugins: [],
  darkMode: 'media',
};