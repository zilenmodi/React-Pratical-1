const HtmlWebpackPlugin = require("html-webpack-plugin"); // This plugin will generate an HTML file that includes the generated bundles.
const path = require("path"); // Node.js module for working with file paths.

module.exports = {
    entry: "./src/index.js", // The entry point of the application.
    output: {
        filename: "bundle.[hash].js", // The name of the generated bundle file, including a hash to invalidate the cache.
        path: path.resolve(__dirname, "dist"), // The directory where the generated bundles will be stored.
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // The HTML file to use as a template for the generated HTML file.
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"], // The directories to use when resolving modules.
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"], // The file extensions to use when resolving modules.
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // The file types to apply this rule to.
                exclude: /node_modules/, // Directories to exclude from this rule.
                loader: require.resolve("babel-loader"), // The loader to use for this rule.
            },
            {
                test: /\.css$/, // The file types to apply this rule to.
                use: ["style-loader", "css-loader"], // The loaders to use for this rule.
            },
            {
                test: /\.png|svg|jpg|gif|avif$/, // The file types to apply this rule to.
                use: ["file-loader"], // The loaders to use for this rule.
            },
        ],
    },
    mode: process.env.NODE_ENV === "production" ? "production" : "development" // The mode to use for the build.
};
