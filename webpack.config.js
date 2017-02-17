var htmlWebpackPlugin = require( 'html-webpack-plugin' )

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name].js',
        // 对打包文件添加前缀，比如公司域名等
        publicPath: 'http://www.nfmedia.com'
    },
    plugins: [
        // 使用html打包插件，模版使用根路径下的index.html
        new htmlWebpackPlugin( {
            // 生成的文件名
            filename: 'webpack-index.html',
            // 引入的模版文件，可在模版文件中指定相应参数
            template: 'index.html',
            inject: false,
            // 通过webpack可在html中直接引入title变量
            title: 'webpack is good'
        }),

        new htmlWebpackPlugin( {
            // 生成的文件名
            filename: 'a.html',
            // 引入的模版文件，可在模版文件中指定相应参数
            template: 'index.html',
            inject: false,
            // 通过webpack可在html中直接引入title变量
            title: 'webpack is a page'
        }),

        new htmlWebpackPlugin( {
            // 生成的文件名
            filename: 'b.html',
            // 引入的模版文件，可在模版文件中指定相应参数
            template: 'index.html',
            inject: false,
            // 通过webpack可在html中直接引入title变量
            title: 'webpack is b page'
        }),

        new htmlWebpackPlugin( {
            // 生成的文件名
            filename: 'c.html',
            // 引入的模版文件，可在模版文件中指定相应参数
            template: 'index.html',
            inject: false,
            // 通过webpack可在html中直接引入title变量
            title: 'webpack is c page'
        })
    ]
}