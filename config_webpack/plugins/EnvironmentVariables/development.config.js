'use strict';

/**
 * Environment Variables Development Configuration
 */
const DEVELOPMENT_PLUGIN_CONFIGURATION = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    TARGET_ENV: JSON.stringify(process.env.TARGET_ENV),
};

module.exports = DEVELOPMENT_PLUGIN_CONFIGURATION;