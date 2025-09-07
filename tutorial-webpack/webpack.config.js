// module.exports = {
//   mode: 'development',

// }
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
  },
  entry: {
    main: './src/index.js',
  },
  // watch: true,
  output: {
    // 资源放置位置
    path: path.resolve(__dirname, './dist/assets/'),
    // 合并模块后的js代码文件
    filename: '[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.png$/, use: 'file-loader' },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
