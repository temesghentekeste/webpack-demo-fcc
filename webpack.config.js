const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
};
