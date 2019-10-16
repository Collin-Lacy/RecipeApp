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
            '@containers': path.resolve(__dirname, 'src/client/containers'),
            '@validations': path.resolve(__dirname, 'src/client/validations/'),
            '@views': path.resolve(__dirname, 'src/client/views/')
        },
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: ['babel-loader', 'eslint-loader']},
            {test: /\.css$/, use:['style-loader', 'css-loader']},
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                       {
                         // Using file-loader for these files
                         loader: "file-loader",
          
                         // In options we can set different things like format
                         // and directory to save
                         options: {
                           outputPath: 'img'
                         }
                       }
                     ]
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
	    template: path.resolve('src/client/', 'templates', 'index.html'),
        })
    ]
}
