var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var outputPath = path.join(__dirname, './dist');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: {
    index: __dirname + "/src/scripts/index",
    app: __dirname + "/src/scripts/app"
  },
  output: {
    path: outputPath,
    filename: "scripts/[name]-[chunkhash:5].js"
  },
  module: {
    loaders: [{
      test: /\.es$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.less$/i,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minify: {
        collapseWhitespace: true
      },
      filename: 'scripts/[name].[chunkhash:5].bundle.js'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeCommets: true,
        collapseWhitespace: true
      }
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new LiveReloadPlugin({
    //     appendScriptTag: true
    // }),
    new ExtractTextPlugin('stylesheets/[name]-[hash:5].css')
  ],
  resolve: {
    extensions: ["", ".js", ".es", ".less"]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
};
