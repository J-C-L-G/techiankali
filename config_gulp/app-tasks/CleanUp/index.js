"use strict";

const del  = require("del");

const CONFIG = require('../../app-paths');
const generatedPaths = CONFIG.GENERATED_FILES.IMAGES;
const distributionPaths = CONFIG.DIST_PATHS;
const deploymentPaths = CONFIG.DEPLOYMENT_PATHS;


/**
 * Exports
 */
module.exports = {
    CleanUpImages,
    CleanUpDistFolder,
    CleanUpHerokuDistFolder
};


/**
 * Deletes the image folders.
 */
function CleanUpImages(){
    del.sync(`${generatedPaths.responsiveImages}**`);
    del.sync(`${generatedPaths.spriteImages.source}**/*.*`);
    del.sync(`${generatedPaths.spriteImages.output}**/*.*`);
}

/**
 * Deletes the 'dist' folder.
 */
function CleanUpDistFolder(){
    del.sync(`${distributionPaths.ROOT}/**`);
}

/**
 * Deletes the 'dist' folder for heroku.
 */
function CleanUpHerokuDistFolder(){
    del.sync(`${deploymentPaths.HEROKU_DIST_FOLDER}/**`);
}
