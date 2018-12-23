'use strict';

const IS_PRODUCTION = (process.env.NODE_ENV === 'production');
const SOURCEMAPS_FOR_PRODUCTION = 'nosources-source-map';
const SOURCEMAPS_FOR_DEVELOPMENT = 'cheap-module-eval-source-map';

/**
 * Exports: General Config + Specific Env Config.
 */
module.exports = (IS_PRODUCTION ? SOURCEMAPS_FOR_PRODUCTION : SOURCEMAPS_FOR_DEVELOPMENT);