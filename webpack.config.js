var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/App/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/App/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
             { test: /\.less/, exclude: /node_modules/, loader: 'style!css!less' },
             
             { test: /\.css/, exclude: /node_modules/, loader: 'style!css' },
             
             { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
            ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};