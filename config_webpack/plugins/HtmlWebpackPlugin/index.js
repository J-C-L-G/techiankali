"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = require('../../app-paths');
const SOURCE = CONFIG.SOURCE_FILES;

/**
 * General Configuration
 */
const GENERAL_PLUGIN_CONFIGURATION = Object.assign(
    {
        base: '"/"',
        template: SOURCE.indexHtml
    },
    require(`./${process.env.NODE_ENV}.config`)
);

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = new HtmlWebpackPlugin(GENERAL_PLUGIN_CONFIGURATION);

