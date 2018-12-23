'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            babelrc: true
        }
    }
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION, require(`./${process.env.NODE_ENV}.config`));
