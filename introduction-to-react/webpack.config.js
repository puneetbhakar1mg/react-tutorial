const path = require('path');

const basePath = './';
module.exports = {
  entry: {
    sample: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    root: [
      path.resolve(basePath)
    ]
  },
  resolveLoader: {
    fallback: path.resolve(__dirname, '../node_modules')
  },
};