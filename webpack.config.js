const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: [
    // CLIENT SIDE RENDERING
    // activate HMR for React
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // only-means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // SERVER SIDE RENDERING
    // 'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000',
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
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
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
        include: [
          path.resolve('js'),
          path.resolve('node_modules/preact-compat/src'),
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
