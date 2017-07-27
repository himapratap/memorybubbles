var path = require('path');

// build_dir represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public');
// app_dir holds the directory path of the react application's codebase
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /(node_modules|bower_components)/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        [
                            'es2015', {
                                "modules": false
                            }
                        ]
                    ]
                }
            }, {

                test: /\.css$/,
                loader: "css-loader"

            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
              loader: 'file-loader?name=public/fonts/[name].[ext]',
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }

        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        contentBase: "public",
        hot: true
    },
    devtool: "source-map"
};

module.exports = config;
