/**
 * Carlos Ledezma
 */

'use strict';

const WEBPACK_CONFIG_FOLDER = './config_webpack';
const CONFIG = require(`${WEBPACK_CONFIG_FOLDER}/app-paths`);
const OUTPUT = require(`${WEBPACK_CONFIG_FOLDER}/output`);
const DEVTOOL = require(`${WEBPACK_CONFIG_FOLDER}/devtool`);
const PLUGINS = require(`${WEBPACK_CONFIG_FOLDER}/plugins`);
const LOADERS = require(`${WEBPACK_CONFIG_FOLDER}/loaders`);
const OPTIMIZATION = require(`${WEBPACK_CONFIG_FOLDER}/optimization`);
const DEV_SERVER = require(`${WEBPACK_CONFIG_FOLDER}/dev-server`);

/**
 * Exports
 */
module.exports = {
    mode: ( process.env.NODE_ENV || 'development' ),
    entry: CONFIG.SOURCE_FILES.entryJS,
    devtool: DEVTOOL,
    output: OUTPUT,
    plugins: PLUGINS,
    module: {
        rules: LOADERS
    },
    optimization: OPTIMIZATION,
    devServer: DEV_SERVER
};
