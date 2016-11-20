var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var outputPath = path.join(__dirname, './build');
var entryPath = path.join(__dirname, './src/public/');
// var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: {
    index: entryPath + "scripts/init"
  },
  output: {
    path: outputPath,
    chunkFilename: "scripts/[id]-[chunkhash:5].js",
    filename: "public/scripts/[name]-[chunkhash:5].js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minify: {
        collapseWhitespace: true
      },
      filename: 'public/scripts/[name]-[chunkhash:5].bundle.js'
    }),
    new HtmlWebpackPlugin({
      filename: 'views/index.html',
      template: './src/views/index.js',
      minify: {
        removeCommets: true,
        collapseWhitespace: true
      },
      chunks: []
    }),
    new HtmlWebpackPlugin({
      filename: 'views/layout.html',
      template: './src/views/layout.html',
      minify: {
        removeCommets: true,
        collapseWhitespace: true
      },
      chunks: []
    }),
    // new uglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new LiveReloadPlugin({
    //     appendScriptTag: true
    // }),
    new ExtractTextPlugin('public/stylesheets/[name]-[chunkhash:5].css')
  ],
  resolve: {
    extensions: ["", ".js", ".es", ".less"]
  },
  babel: {
    presets: ['es2015', 'stage-3'],
    plugins: ['transform-runtime']
  }
};
