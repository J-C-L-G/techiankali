'use strict';

const CONFIG = require('../../app-paths');

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /\.html$/,
    exclude: [/node_modules/, require.resolve(`../../../${CONFIG.SOURCE_FILES.indexHtml}`)],
    use: [{
        loader: 'html-loader',
        options: {
            minimize: true,
            attrs: ['attrs=false'],
            removeAttributeQuotes: false,
        }
    }]
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION, require(`./${process.env.NODE_ENV}.config`));