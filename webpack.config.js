const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader',
      }
    ],
    postcss: function() {
      return [autoprefixer, precss];
    }
  }
}
