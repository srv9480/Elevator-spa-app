const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = 'development';
const API_LINK = 'https://indacoin.io';
const BASE_PATH = '/';

module.exports = {
    entry: {
        indexapp: './src/index.js',
    },
    output: {
        filename: 'static/index_bundle-[name].[hash].js',
        path: path.join(__dirname, './dist'),
        publicPath: BASE_PATH
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            // {
            //     test: /\.(css)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: "css-loader",
            //         }
            //     ]
            // },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[path]-[local]',
                            },
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true },
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    publicPath: `${BASE_PATH}static/images`,
                    outputPath: 'static/images',
                },
            },
            {
                test: /\.(ttf|eot|woff(2)?|otf)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    publicPath: `${BASE_PATH}static/fonts`,
                    outputPath: 'static/fonts',
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "static/[name].[contenthash].css",
            chunkFilename: "[contenthash].css",
        })
        // new HtmlWebpackPlugin({
        //     title: "INDACOIN",
        //     template: "./src/public/index.html",
        //     favicon: "./src/public/favicon.ico",
        // })
        // new webpack.DefinePlugin({
        //     "env.NODE_ENV": JSON.stringify(NODE_ENV),
        //     "env.API_LINK": JSON.stringify(API_LINK),
        //     "env.BASE_PATH": JSON.stringify(BASE_PATH),
        // })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: ["node_modules"],
        alias: {
            "@styles": path.join(__dirname, "src", "styles"),
            "@assets": path.join(__dirname, "src", "assets"),
            '@images': path.join(__dirname, 'src', 'assets/images'),
            "@redux": path.join(__dirname, "src", "redux"),
            "@requests": path.join(__dirname, "src", "requests"),
            "@tools": path.join(__dirname, "src", "tools"),
            "@libs": path.join(__dirname, "src", "libs"),
            "@pages": path.join(__dirname, "src", "pages"),
            "@containers": path.join(__dirname, "src", "containers"),
            "@components": path.join(__dirname, "src", "components"),
            "@config": path.join(__dirname, "src", "config"),
            "@languages": path.join(__dirname, "src", "languages"),
            "@public": path.join(__dirname, "src", "public"),
        }
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000
    },
};