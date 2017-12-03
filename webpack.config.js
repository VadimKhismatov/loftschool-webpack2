const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    src: path.join(__dirname + "/src"),
    build: path.join(__dirname + "/build")
};

module.exports = {
    entry: {
        "index": paths.src + "/pages/index/index.js",
        "blog": paths.src + "/pages/blog/blog.js"
    },
    output: {
        path: paths.build,
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["index"],
            template: paths.src + "/pages/index/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "blog.html",
            chunks: ["blog"],
            template: paths.src + "/pages/blog/blog.html"
        })
    ]
};
