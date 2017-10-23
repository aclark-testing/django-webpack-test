var BundleTracker = require("webpack-bundle-tracker");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    context: __dirname + "/project/app/assets",
    entry: "./entry",
    output: {
        path: __dirname + "/project/app/assets/webpack_bundles",
        filename: "[name]-[hash].js"
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
        })
    ],
    module: {
      loaders: [
        {   
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("css-loader", "style-loader"),
        },
        {
            test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        },
      ],
    },  
};
