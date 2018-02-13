const webpack = require("webpack")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: __dirname+"/public/resources",
        filename: "bundle.js",
        publicPath: "/resources/",
    },
    devServer: {
        contentBase: __dirname+"/public",
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
}