module.exports = context => ({
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')
  ]
})
