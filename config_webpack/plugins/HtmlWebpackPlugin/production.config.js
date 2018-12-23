'use strict';

//const LOCAL_SIMULATING_PRODUCTION = process.env.TARGET_ENV === 'local';

/**
 * HtmlWebpackPlugin Production Configuration
 */
const PRODUCTION_LOADER_CONFIGURATION = {
    //base: (LOCAL_SIMULATING_PRODUCTION ? '/' : '"/admin/"'),
    minify: {
        conservativeCollapse: true,
        removeComments: true,
        collapseWhitespace: true
    }
};

module.exports = PRODUCTION_LOADER_CONFIGURATION;
