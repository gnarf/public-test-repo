const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'out.js',
  },
  externals: {
    jquery: "jQuery",
    jQuery: "jQuery",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ],
}
