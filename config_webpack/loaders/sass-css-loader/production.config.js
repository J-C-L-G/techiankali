'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * sass-css-loader Production Configuration
 */
const PRODUCTION_LOADER_CONFIGURATION = {
    use: [
        // Creates CSS file
        {
            loader:  MiniCssExtractPlugin.loader
        },
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'

            }
        },
        // Compiles Sass to CSS
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ]
};

module.exports = PRODUCTION_LOADER_CONFIGURATION;
