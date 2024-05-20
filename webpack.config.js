const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development', // Режим сборки
  entry: './src/index.js', // Точка входа для сборки проекта

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'src/images', to: 'images' },
          { from: 'src/video', to: 'video' },
          { from: 'src/fonts', to: 'fonts' },
         
        ],
      }),

  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true,
    watchFiles: path.join(__dirname, 'src'),// Автоматически открывать браузер
    port: 9000,
     
  },

  
};