"use strict";

const gulp         = require('gulp');
const rename       = require("gulp-rename");
const imageResize  = require("gulp-image-resize");

const logger                        = require('../Logger');
const CONFIG                        = require('../../app-paths');
const sourceFiles                   = CONFIG.SOURCE_FILES.IMAGES;
const generatedPaths                = CONFIG.GENERATED_FILES.IMAGES;
const responsiveImageBreakpoints    = CONFIG.FILE_CONFIGURATIONS.IMAGE.BREAKPOINTS.RESPONSIVE_IMAGES;


/**
 * Exports
 */
module.exports = {
    ResponsiveImages
};


/**
 * Generates an image for each resolution in breakpoint's array
 * and store the image in the 'genarated-files/responsive-images' folder.
 */
function ResponsiveImages(done){
    return responsiveImageBreakpoints.forEach( (breakpoint, index) => {
        logger.log(`Generating Responsive Images for: ${breakpoint.device}  width: ${breakpoint.width}`);
        gulp.src(sourceFiles.responsiveImages)
            .pipe( imageResize(breakpoint))
            .pipe( rename( (path) => (path.basename += breakpoint.device) ) )
            .pipe( gulp.dest(generatedPaths.responsiveImages) );
        if( index === breakpoint.length - 1 ){done();}
    });
}