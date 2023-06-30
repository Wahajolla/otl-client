module.exports = {
  plugins: {
    // 'tailwindcss/nesting': {'postcss-nesting'},

    autoprefixer: {},
    'postcss-mixins': {},
    'postcss-custom-media': {},
    'postcss-nested': {},
    tailwindcss: { config: './src/shared/ui/tailwind.config.js' },
  },
};
