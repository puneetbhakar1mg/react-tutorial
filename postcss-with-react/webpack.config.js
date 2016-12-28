const path = require('path');
const basePath = './';

const postcssSimpleVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import')({
  path: basePath
});
const cssNext = require('postcss-cssnext');
module.exports = {
  entry: {
    sample: path.resolve(__dirname, './appInit.js'),
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
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss'
      ],
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
  postcss: function postcss() {
    return [postcssImport, postcssSimpleVars, cssNext];
  },
};