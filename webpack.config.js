var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devServer: {
        hot: true,
    },
    output: {
        path: path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/client/components/'),
            '@hooks': path.resolve(__dirname, 'src/client/hooks/'),
            '@config': path.resolve(__dirname, 'src/client/config/')
        },
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: ['babel-loader', 'eslint-loader']},
            {test: /\.css$/, use:['style-loader', 'css-loader']},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
	    template: path.resolve('src/client/', 'templates', 'index.html'),
        })
    ]
}
