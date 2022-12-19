const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { getEnvironmentVariables } = require('./utils');

const [ ouputPath, title ] = getEnvironmentVariables();

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, ouputPath)
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
      '.ts',
      '.tsx'
    ],
    plugins: [
      new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title,
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [{
        from: './src/assets',
        to: path.join(__dirname, ouputPath + '/assets')
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|wav|mp3|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  }
};
