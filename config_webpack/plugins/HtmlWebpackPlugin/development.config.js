'use strict';

/**
 * HtmlWebpackPlugin Development Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    //base: '"/"',
    minify: {
        conservativeCollapse: true,
        removeComments: true,
        collapseWhitespace: true
    }
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;
