"use strict";

const gulp          = require('gulp');
const rename        = require("gulp-rename");
const imageResize   = require("gulp-image-resize");
const spritesmith   = require("gulp.spritesmith");

const logger                    = require('../Logger');
const CONFIG                    = require('../../app-paths');
const sourceFiles               = CONFIG.SOURCE_FILES.IMAGES;
const generatedPaths            = CONFIG.GENERATED_FILES.IMAGES;
const distributionPaths         = CONFIG.DIST_PATHS;
const spriteImageBreakpoints    = CONFIG.FILE_CONFIGURATIONS.IMAGE.BREAKPOINTS.SPRITE_IMAGES;
const IS_PRODUCTION = (process.env.NODE_ENV === 'production');


/**
 * Exports
 */
module.exports = {
    ScalingSpriteImages,
    ConsolidateImageAndStyles
};


/**
 * Generates an image for each resolution in breakpoint's array
 * and store the image in the 'genarated-files/sprite-images/source' folder.
 */
function ScalingSpriteImages(done){
    return spriteImageBreakpoints.forEach( (breakpoint, index) => {
        logger.log(`Generating Scale Images for: ${breakpoint.includeInName}  at: ${breakpoint.percentage}%`);
        gulp.src(sourceFiles.spriteImages)
            .pipe( imageResize(breakpoint))
            .pipe( rename( (path) => (path.basename += breakpoint.includeInName) ) )
            .pipe( gulp.dest(generatedPaths.spriteImages.source) );
        if( index === breakpoint.length - 1 ){done();}
    });
}

/**
 * Generates a CSS file and Sprite Image from the images stored in
 * 'genarated-files/sprite-images/source' folder.
 *
 * NOTE: the 'output' folder MUST exist before this is executed.
 */
function ConsolidateImageAndStyles(done){
    logger.log("Generating Consolidated Sprite Image and CSS file");
    gulp.src(`${generatedPaths.spriteImages.source}*.*`)
        .pipe(spritesmith({
            cssOpts: {
                functions: true,
                cssSelector: (item) => {
                    if (item.name.indexOf('_hover') !== -1) {
                        let size = item.name.split('-');
                        size = size[size.length - 1];
                        return `.icon-${item.name.replace(/_hover.+$/, `-${size}:hover`)}`;
                    } else {
                        return `.icon-${item.name}`;
                    }
                }
            },
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            imgPath: `${(IS_PRODUCTION) ? '/admin' : ''}${distributionPaths.IMAGES}/sprite.png`
        }))
        .pipe(gulp.dest(generatedPaths.spriteImages.output))
        .on("end", done);
}