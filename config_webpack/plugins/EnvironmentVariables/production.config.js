'use strict';

/**
 * Environment Variables Production Configuration
 */
const PRODUCTION_PLUGIN_CONFIGURATION = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    TARGET_ENV: JSON.stringify(process.env.TARGET_ENV),
};

module.exports = PRODUCTION_PLUGIN_CONFIGURATION;