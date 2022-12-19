const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');

const productionConfiguration = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
};

module.exports = merge(common, productionConfiguration);
