"use strict";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CONFIG = require('../../app-paths');

module.exports = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    filename: `${CONFIG.TARGET_DIRECTORIES_ASSETS.styles}/[name].[contenthash].css`,
    path: path.resolve(__dirname, CONFIG.TARGET_DIRECTORIES_ASSETS.styles),
    chunkFilename: `${CONFIG.TARGET_DIRECTORIES_ASSETS.styles}/[name].[contenthash].css`,
});
