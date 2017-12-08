const path =require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-vue-editor.js',
    libraryTarget: 'umd',
    library: 'myVueEditor',
    umdNamedDefine: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'dev',
      filename: 'index.html',
      template: './example/base/index.html',
      inject: 'head'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader?exportAsEs6Default',
        exclude: /node_modules/
      },
      {
        test: /\.(styl|css)$/,
        use:[ 'style-loader','css-loader','stylus-loader'],
        exclude: /node_modules/
      },
    ]
  }
}
