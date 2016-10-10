var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      '__isDev__': 'false'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      hash: true
    })
  ],
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['babel-loader','ts-loader']
    }]
  }
};