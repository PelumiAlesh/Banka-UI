const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@App': path.resolve(__dirname, './', 'src/'),
      '@Actions': path.resolve(__dirname, './', 'src/redux/actions/'),
      '@Reducers': path.resolve(__dirname, './', 'src/redux/reducers/'),
      '@Components': path.resolve(__dirname, './', 'src/components/'),
      '@Common': path.resolve(__dirname, './', 'src/components/common/'),
      '@Pages': path.resolve(__dirname, './', 'src/pages/'),
      '@Layout': path.resolve(__dirname, './', 'src/components/layout/'),
      '@Utils': path.resolve(__dirname, './', 'src/utils/'),
      '@Assets': path.resolve(__dirname, './', 'src/assets/'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
