"use strict";

const webpack = require('webpack');

/**
 * General Configuration
 */
const GENERAL_PLUGIN_CONFIGURATION = Object.assign({
    "process.env": require(`./${process.env.NODE_ENV}.config`)
});

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = new webpack.DefinePlugin(GENERAL_PLUGIN_CONFIGURATION);

