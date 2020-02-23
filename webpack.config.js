const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",

    entry: path.resolve(__dirname, 'src/client/index.tsx'),
    output:{
        filename:'js/[hash].js',
        path: path.resolve(__dirname, './client')
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/client/public/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    outputPath: 'images',
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/client/src'),
        compress: true,
        port: 9000
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/client/src'), path.resolve(__dirname, 'node_modules/')],
        descriptionFiles: ['package.json'],
        extensions : ['.js', '.tsx', '.ts', '.jpg', '.png', '.svg']
    }
}