'use strict';

/**
 * html-loader Development Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    use: [{
        loader: 'html-loader',
        options: {
            minimize: true,
            attrs: ['attrs=false'],
            removeAttributeQuotes: false,
        }
    }]
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;