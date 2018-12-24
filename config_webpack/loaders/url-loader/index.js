'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /\.(woff|woff2)(\?.*$|$)/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }
    ]
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION);
