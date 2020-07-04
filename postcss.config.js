// tell snowpack to process our css files
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
};