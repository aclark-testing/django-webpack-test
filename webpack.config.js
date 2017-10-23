var BundleTracker = require("webpack-bundle-tracker");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/project/app/assets",
    entry: "./entry",
    output: {
        path: __dirname + "/project/app/assets/webpack_bundles",
        filename: "bundle.js"
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
        })
    ],
};
