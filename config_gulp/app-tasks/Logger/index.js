"use strict";


/**
 * Exports
 */
module.exports = {
    log
};


/**
 * Log to the terminal
 */
function log(message){
    console.info(`${new Date()}  - ${message}`);
}
