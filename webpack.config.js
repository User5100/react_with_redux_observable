const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

const {ifProduction} = getIfUtils(process.env.NODE_ENV)

module.exports = {
  context: __dirname,
  entry: {
    app: './src/Client.js'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [ path.resolve(__dirname, 'assets/css')],
        use: ifProduction(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }), ['style-loader', 'css-loader'])
      },
      {
        test: /\.scss$/,
        include: [ path.resolve(__dirname, 'assets/css')],
        use: [{
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(eot|woff(2)?|ttf)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new ExtractTextPlugin('styles.[name].css'),
    new HtmlWebpackPlugin()]
}
