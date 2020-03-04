const path = require('path');
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function( env, argv ) {
  const mod = argv.dev ? "development":"production"
  return {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/client/index.tsx'),
    output: {
      futureEmitAssets: true,
      path: path.resolve(__dirname, 'client'),
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/chunk.[name].[hash].js',
      publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/client/public/index.html')
      }),
      //new BundleAnalyzerPlugin()
      //new webpack.optimize.AggressiveSplittingPlugin({minSize:30000,maxSize: 0})
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'img/'
          }
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 30000,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {           
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          }
        }
      },
      runtimeChunk: 'single'	
    },
    devServer: {
      contentBase: path.join(__dirname, 'src/client/src'),
      compress: true,
      port: 9000,
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src/client/src'), path.resolve(__dirname, 'node_modules/')],
      descriptionFiles: ['package.json'],
      extensions: ['.js', '.tsx', '.ts', '.jpg', '.png', '.svg']
    }
  }
}

