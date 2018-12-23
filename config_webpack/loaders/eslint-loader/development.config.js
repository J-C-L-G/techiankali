'use strict';

/**
 * eslint-loader Development Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
        failOnError: false,
        failOnWarning: false
    }
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;
