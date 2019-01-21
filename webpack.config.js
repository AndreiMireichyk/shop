const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Modules settings
const DevServer = require('./webpack/devserver');
const Babel = require('./webpack/babel');
const Pug = require('./webpack/pug');
const Sass = require('./webpack/sass');
const Css = require('./webpack/css');
const CssExtract = require('./webpack/css.extract');
const FileLoader = require('./webpack/fileloader');

const PATH = {
    src: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'build')
};

const common = {

    entry: {
        'index': PATH.src + '/pages/index/index.js',
        'product': PATH.src + '/pages/product/product.js',
        'products': PATH.src + '/pages/products/products.js',
        'order': PATH.src + '/pages/order/order.js',
        'edit_order': PATH.src + '/pages/edit_order/edit_order.js'
    },

    output: {
        path: PATH.build,
        filename: 'js/[name].bundle.js'
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: PATH.src + '/pages/index/index.pug'
        }),

        new HtmlWebpackPlugin({
            filename: 'product.html',
            chunks: ['product', 'common'],
            template: PATH.src + '/pages/product/product.pug'
        }),

        new HtmlWebpackPlugin({
            filename: 'products.html',
            chunks: ['products', 'common'],
            template: PATH.src + '/pages/products/products.pug'
        }),

        new HtmlWebpackPlugin({
            filename: 'order.html',
            chunks: ['order', 'common'],
            template: PATH.src + '/pages/order/order.pug'
        }),

        new HtmlWebpackPlugin({
            filename: 'edit_order.html',
            chunks: ['edit_order', 'common'],
            template: PATH.src + '/pages/edit_order/edit_order.pug'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
        }),

        new CleanWebpackPlugin(PATH.build)
    ],

    optimization: {
        minimizer: [
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            name: 'common',
            chunks: "all",
            minSize: 1,
            minChunks: 2
        }
    }
};


module.exports = function (env) {

    if (env === 'production') {
        return merge([
            common,
            {mode: 'production'},
            Pug(),
            Babel(),
            CssExtract(),
            FileLoader(env)
        ]);
    }

    if (env === 'development') {
        return merge([
            common,
            {mode: 'development'},
            Pug(),
            Babel(),
            Sass(),
            Css(),
            FileLoader(env),
            DevServer(PATH.build)
        ]);
    }
};
