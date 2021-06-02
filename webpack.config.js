const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./frontend/metube.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
                
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: "source-map",
};