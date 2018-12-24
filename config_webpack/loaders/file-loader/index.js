'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = [
    {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: (url) => (`./assets/fonts/${url}`)
                }
            }
        ]
    },
    {
        test: /\.(png|jpe|jpg)(\?.*$|$)/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: (url) => (`./assets/img/${url}`)
                }
            }
        ]
    }
];

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION);
