'use strict';

const CONFIG = require('../app-paths');

/**
 * Webpack-output Production Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    filename: `${CONFIG.TARGET_DIRECTORIES_ASSETS.scripts}/[name].[contenthash].js`
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;