'use strict';

const path = require('path');
const CONFIG = require('../app-paths');

/**
 * General Configuration
 */
const GENERAL_OUTPUT_CONFIGURATION = {
    path: path.resolve(__dirname, '../../', CONFIG.TARGET_DIRECTORIES_ASSETS.root)
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_OUTPUT_CONFIGURATION, require(`./${process.env.NODE_ENV}.config`));