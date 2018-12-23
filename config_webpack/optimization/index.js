'use strict';

/**
 * General Configuration
 */
const GENERAL_OPTIMIZATION_CONFIGURATION = {};

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = Object.assign(GENERAL_OPTIMIZATION_CONFIGURATION, require(`./${process.env.NODE_ENV}.config`));