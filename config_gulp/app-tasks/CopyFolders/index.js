"use strict";

const gulp = require("gulp");

const CONFIG = require('../../app-paths');
const distributionPaths = CONFIG.DIST_PATHS;
const deploymentPaths = CONFIG.DEPLOYMENT_PATHS;


/**
 * Exports
 */
module.exports = {
    DistFolderToDeploymentFolder
};


/**
 * Moves the 'dist' folder into heroku's dist folder.
 */
function DistFolderToDeploymentFolder(){
    return gulp.src(`${distributionPaths.ROOT}/**/*.*`)
        .pipe(gulp.dest(deploymentPaths.HEROKU_DIST_FOLDER));
}
