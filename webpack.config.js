const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const devServer = require("./webpack/dev.server");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const extractCSS = require("./webpack/css.extract");

const paths = {
    src: path.join(__dirname + "/src"),
    build: path.join(__dirname + "/build")
};

const common = {
    entry: {
        "index": paths.src + "/pages/index/index.js",
        "blog": paths.src + "/pages/blog/blog.js"
    },
    output: {
        path: paths.build,
        filename: "js/[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["index","common"],
            template: paths.src + "/pages/index/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "blog.html",
            chunks: ["blog","common"],
            template: paths.src + "/pages/blog/blog.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

module.exports = function (env) {
    if (env === "production") {
        return merge([common, extractCSS()]);
    }
    if (env === "development") {
        return merge([
            common,
            devServer(),
            sass(),
            css()
        ]);
    }
};
