'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: `/assets/fonts/`
            }
        }
    ]
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION);
