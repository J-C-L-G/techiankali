'use strict';

/**
 * General Configuration
 */
const GENERAL_LOADER_CONFIGURATION = {
    test: /\.s?[ac]ss$/
};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_LOADER_CONFIGURATION, require(`./${process.env.NODE_ENV}.config`));
