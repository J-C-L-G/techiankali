/**
 * Carlos Ledezma
 */

"use strict";

const gulp = require('gulp');
const GULP_CONFIG_FOLDER    = './config_gulp';
const applicationTasks      = require(`${GULP_CONFIG_FOLDER}/app-tasks`);
const tasksName             = require(`${GULP_CONFIG_FOLDER}/task-names`);


/*********************************************
 *          ..:: Gulp Tasks ::..              *
 **********************************************/
/* main */
gulp.task(tasksName.DEFAULT,                        [tasksName.GENERATE_SPRITE_IMAGES, tasksName.GENERATE_RESPONSIVE_IMAGES]);
gulp.task(tasksName.CREATE_PROJECT_IMAGES,          [tasksName.GENERATE_SPRITE_IMAGES, tasksName.GENERATE_RESPONSIVE_IMAGES]);

/* images */
gulp.task(tasksName.GENERATE_RESPONSIVE_IMAGES,     applicationTasks.ResponsiveImages);
gulp.task(tasksName.GENERATE_SPRITE_IMAGES,         [tasksName.SCALE_SPRITE_IMAGES, tasksName.CONSOLIDATE_SPRITE_SOURCES]);
gulp.task(tasksName.SCALE_SPRITE_IMAGES,            applicationTasks.SpriteImages.ScalingSpriteImages);
gulp.task(tasksName.CONSOLIDATE_SPRITE_SOURCES,     applicationTasks.SpriteImages.ConsolidateImageAndStyles);

/* copy */
gulp.task(tasksName.COPY_DIST_FOLDER_TO_HEROKU,     applicationTasks.CopyFolders.DistFolderToDeploymentFolder);

/* clean up */
gulp.task(tasksName.CLEAN_GENERATED_IMAGES,         applicationTasks.CleanUp.CleanUpImages);
gulp.task(tasksName.CLEAN_DIST_FOLDER,              applicationTasks.CleanUp.CleanUpDistFolder);
gulp.task(tasksName.CLEAN_DIST_FOLDER_FROM_HEROKU,  applicationTasks.CleanUp.CleanUpHerokuDistFolder);


/**********************************************
 *          ..:: Gulp Error ::..              *
 **********************************************/

process.on('uncaughtException', (err) => {
    console.error(`::::::::::::::::::::::::::::::: EXCEPTION ::::::::::::::::::::::::::::::::::::::
    "Exception while building the application:
        ${err}
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::`);
});
