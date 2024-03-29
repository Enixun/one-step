const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'client/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true, // keeps bundle.js copies from polluting dist
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map', // a good tool for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/db': 'http://localhost:3000'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'One Step',
            filename: 'index.html',
            template: 'client/template.html'
        })
    ]
}