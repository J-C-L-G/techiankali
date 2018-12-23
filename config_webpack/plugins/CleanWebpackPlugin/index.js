"use strict";

const CleanWebpackPlugin = require('clean-webpack-plugin');

const CONFIG = require('../../app-paths');
const TARGET = CONFIG.TARGET_DIRECTORIES_ASSETS;

/**
 * Exports
 */
module.exports = new CleanWebpackPlugin([TARGET.root],{});

