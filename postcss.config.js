module.exports = {
  plugins: {
    // 'tailwindcss/nesting': {'postcss-nesting'},
    'tailwindcss/nesting': {},
    tailwindcss: { config: './src/shared/ui/tailwind.config.js' },
    autoprefixer: {},
    'postcss-mixins': {},
    'postcss-custom-media': {},
    'postcss-nested': {},
  },
};
