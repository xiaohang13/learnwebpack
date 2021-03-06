var htmlwebpackplugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/script/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      // 处理js中出现的es6语法
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: "babel-loader",
        query: {
          presets: ["latest"]
        }
      },
      // 处理CSS文件
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      // 处理less文件
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      // 处理html文件
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      // 处理图片文件
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: [
          'file-loader?name=asserts/[hash:8].[ext]',
          'image-webpack-loader'
          ]
      }
    ]
  },
  plugins: [
    // 使用html打包插件，模版使用根路径下的index.html
    new htmlwebpackplugin({
      // 生成的文件名
      filename: 'index-layer.html',
      // 引入的模版文件，可在模版文件中指定相应参数
      template: 'index_layer.html',
      inject: 'body',
      // 通过webpack可在html中直接引入title变量
      title: 'webpack is good'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [require('autoprefixer')({
            broswers: ['last 5 versions']
          })]
        }
      }
    })
  ]
}