const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, './'),
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [

    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: true
    }),

  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
  resolve: {
    extensions: ['.js', '.jsx']
  }
};