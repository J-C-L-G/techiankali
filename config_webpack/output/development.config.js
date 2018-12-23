'use strict';

const CONFIG = require('../app-paths');

/**
 * Webpack-output Development Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    filename: `${CONFIG.TARGET_DIRECTORIES_ASSETS.scripts}/[name].bundle.js`
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;