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
      ],
    },  
};
