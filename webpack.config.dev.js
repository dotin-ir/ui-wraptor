var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'public/bundle.js',    
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__isDev__': 'true'
    })
  ],
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js",".json",".jsx"]
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot', 'babel-loader','ts-loader']
    },  {include: /\.json$/, loaders: ["json-loader"]}],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devServer: {
    contentBase: './public',
    hot: true,
    proxy: {
      '/api': {
        target: 'http://backend',
        secure: false,
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};