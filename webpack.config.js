const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
    src: path.join(__dirname + "/src"),
    build: path.join(__dirname + "/build")
};

module.exports = {
    entry: paths.src + "/index.js",
    output: {
        path: paths.build,
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack app"
        })
    ]
};


/* 
} */