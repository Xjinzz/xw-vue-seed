const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}`);
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let webpackConfig = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),//输出结果
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: /node_modules/
            },
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader',
            //     options: {
            //         minimize: false
            //     }
            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new CopyWebpackPlugin([{
        //     from: './src/static',
        //     to: 'static'
        // }]),
        new HtmlWebpackPlugin(
            {
                filename:"./index.html",
                template: './src/index.html'
            }
        )
    ],
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@CoreUILib":path.resolve(__dirname,"./src/core/le-components")
        }
    },
};
module.exports = merge(webpackConfig, _mergeConfig);