'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here


let config = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  mode: 'development',
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules(true)
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: require.resolve('babel-loader'),
  include: [].concat(
    [],
    [ path.join(__dirname, '/../src') ]
  ),
  options: {
    cacheDirectory: true,
    plugins: ['react-hot-loader/babel']
  }
});

module.exports = config;
