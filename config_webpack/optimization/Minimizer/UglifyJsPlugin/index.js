"use strict";

const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');

/**
 * Exports
 */
module.exports = new UglifyJsPlugin({
    parallel: true,
    sourceMap: true,
    uglifyOptions: {}
});

