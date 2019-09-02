var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@validations': path.resolve(__dirname, 'src/validations/'),
            '@views': path.resolve(__dirname, 'src/views/')
        }
    },
    module : {
        rules : [
            {test : /\.(js)$/, use: ['babel-loader', 'eslint-loader']},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
	    template: path.resolve('src', 'templates', 'index.html'),
        })
    ]
}
