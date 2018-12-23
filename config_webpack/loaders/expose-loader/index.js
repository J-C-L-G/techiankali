'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /legacy-dependencies\/global\/\.js$/,
    use: [
        {
            loader: `expose-loader`
        }
    ]
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION);