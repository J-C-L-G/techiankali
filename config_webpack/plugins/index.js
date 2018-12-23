"use strict";

const IS_PRODUCTION = (process.env.NODE_ENV === 'production');

/**
 * General Plugins
 */
const GENERAL_PLUGINS = [
    require('./EnvironmentVariables'),
    require('./CleanWebpackPlugin'),
    require('./CopyWebpackPlugin'),
    require('./HtmlWebpackPlugin'),
];

/**
 * Development Plugins
 */
if(!IS_PRODUCTION){
    GENERAL_PLUGINS.push(require('./HotModuleReplacementPlugin'));
    GENERAL_PLUGINS.push(require('./WriteFilePlugin'));
}

/**
 * Production Plugins
 */
if(IS_PRODUCTION){
    GENERAL_PLUGINS.push(require('./MiniCssExtractPlugin'));
}


/**
 * Exports
 */
module.exports = GENERAL_PLUGINS;
