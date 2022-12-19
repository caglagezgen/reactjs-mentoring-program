const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const developmentConfiguration = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200,
    hot: true,
    open: true
  },
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin()
  ]
};

module.exports = merge(common, developmentConfiguration);
