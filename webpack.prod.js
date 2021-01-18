const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
