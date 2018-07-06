'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Add needed plugins here

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  mode: 'production',
  cache: false,
  devtool: 'sourcemap',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: defaultSettings.getDefaultModules(false)
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [].concat(
    [],
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
