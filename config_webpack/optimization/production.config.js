"use strict";

/**
 * Production Optimization Settings
 */
const PRODUCTION_OPTIMIZATION_CONFIG = {
    splitChunks: require('./SplitChunks'),
    minimizer: require('./Minimizer')
};


/**
 * Exports
 */
module.exports = PRODUCTION_OPTIMIZATION_CONFIG;