const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // only-means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx',
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/public/',
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true,
  },
  resolve: {
    // order of extensions to be evaluated
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre', // run before babel
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: '/node-modules',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
