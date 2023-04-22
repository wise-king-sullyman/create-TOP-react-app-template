const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [

    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.join(__dirname, 'public', 'index.html'),
      inject: true
    }),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|svg|png)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ]
  },
  devServer: {
    port: 8080,
    hot: true,
    static: {
          }
  },
};