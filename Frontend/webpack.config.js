var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.html$/, loader: 'html-loader' },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              loader: 'file-loader'
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              loader: 'file-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    resolve: {
      alias: {
        AppComponents: path.win32.resolve(__dirname, './dev/js/components/'),
        AppContainers: path.win32.resolve(__dirname, './dev/js/containers/'),
      }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
