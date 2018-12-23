"use strict";

const CopyWebpackPlugin = require('copy-webpack-plugin');

const CONFIG = require('../../app-paths');
const SOURCE = CONFIG.SOURCE_DIRECTORIES_ASSETS;
const TARGET = CONFIG.TARGET_DIRECTORIES_ASSETS;

/**
 * Exports
 */
module.exports = new CopyWebpackPlugin([
    { from:`${SOURCE.STATIC.fonts}`,                      to:`${TARGET.fonts}`                                },
    { from:`${SOURCE.STATIC.fontAwesomeFonts}/**/*`,      to:`${TARGET.fonts}`,               flatten: true   },
//  { from:`${SOURCE.STATIC.bootstrapFonts}/**/*`,        to:`${TARGET.fonts}`,               flatten: true   },
    { from:`${SOURCE.STATIC.pdf}`,                        to:`${TARGET.pdf}`                                  },
    { from:`${SOURCE.STATIC.json}`,                       to:`${TARGET.json}`                                 },
    { from:`${SOURCE.STATIC.serverRootFiles}`,            to:`${TARGET.serverRootFiles}`                      },
    { from:`${SOURCE.STATIC.regularImages}`,              to:`${TARGET.images}`                               },
//  { from:`${SOURCE.GENERATED.spriteImages}/sprite.png`, to:`${TARGET.images}`                               },
//  { from:`${SOURCE.GENERATED.responsiveImages}/**/*`,   to:`${TARGET.images}`,              flatten: true   },
]);
