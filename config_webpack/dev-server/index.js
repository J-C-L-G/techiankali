'use strict';

const path = require('path');
const IS_PRODUCTION = (process.env.NODE_ENV === 'production');
const CONFIG = require('../app-paths');

/**
 * Exports: General Config for WebPack DevServer.
 */
module.exports = {
    hot: !IS_PRODUCTION,
    contentBase: path.join(__dirname, CONFIG.TARGET_DIRECTORIES_ASSETS.root),
    compress: IS_PRODUCTION,
    port: 9000,
    historyApiFallback: {
        index: `${CONFIG.DIST_FILES.indexHTML}`,
        rewrites: [
            { from: /^\/.+$/, to: '/' },
        ]
    }
}
