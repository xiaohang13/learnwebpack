var htmlwebpackplugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/script/app.js',
  output: {
    path: './dist',
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      // 处理js中出现的es6语法
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: "babel-loader",
        query: {
          presets: ["latest"]
        }
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
  ]
}