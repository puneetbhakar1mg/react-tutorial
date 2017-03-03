const path = require('path');
const nodeExternals = require('webpack-node-externals');

const basePath = './';

const config = {
  entry: {
    sample: path.resolve(__dirname, './appInit.js'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
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
  }
};

const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    sample: path.resolve(__dirname, './serverSideApp.js'),
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'serverBundle.js',
    libraryTarget: 'commonjs2'
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
  }
};

module.exports = [config, serverConfig];
