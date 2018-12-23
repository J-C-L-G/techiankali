"use strict";


/**
 * Specific Project Entry Files
 */
const MAIN_INDEX_HTML   =   'index.html';
const MAIN_MODULE_JS    =   'index.jsx';

/**
 * General Directories
 */
const APP_DIRECTORY             = './src';
const DIST_DIRECTORY            = './dist';
const ASSETS_TARGET_DIRECTORY   = 'assets';
const NODE_MODULES_DIRECTORY    = './node_modules';
const FILES_DIRECTORY           = './files';
const STATIC_FILES_DIRECTORY    = `${FILES_DIRECTORY}/static`;
const GENERATED_FILES_DIRECTORY = `${FILES_DIRECTORY}/generated`;

exports.SOURCE_FILES = {
    indexHtml: `${APP_DIRECTORY}/${MAIN_INDEX_HTML}`,
    entryJS: `${APP_DIRECTORY}/${MAIN_MODULE_JS}`
};

exports.SOURCE_DIRECTORIES_ASSETS = {
    STATIC: {
        fonts: `${STATIC_FILES_DIRECTORY}/fonts`,
        fontAwesomeFonts: `${NODE_MODULES_DIRECTORY}/font-awesome/fonts`,
        bootstrapFonts: `${NODE_MODULES_DIRECTORY}/bootstrap/fonts`,
        pdf: `${STATIC_FILES_DIRECTORY}/pdf`,
        json: `${STATIC_FILES_DIRECTORY}/json`,
        serverRootFiles: `${STATIC_FILES_DIRECTORY}/server-root`,
        regularImages: `${STATIC_FILES_DIRECTORY}/regular-images`,
    },
    GENERATED: {
        responsiveImages : `${GENERATED_FILES_DIRECTORY}/responsive-images`,
        spriteImages : `${GENERATED_FILES_DIRECTORY}/sprite-images/output`,
    },
};

exports.TARGET_DIRECTORIES_ASSETS = {
    root: 'dist',
    fonts: `${ASSETS_TARGET_DIRECTORY}/fonts`,
    fontAwesomeFonts: `${ASSETS_TARGET_DIRECTORY}/fonts/fontawesome`,
    bootstrapFonts: `${ASSETS_TARGET_DIRECTORY}/fonts/bootstrap`,
    images: `${ASSETS_TARGET_DIRECTORY}/img`,
    scripts: `${ASSETS_TARGET_DIRECTORY}/js`,
    styles: `${ASSETS_TARGET_DIRECTORY}/css`,
    htmlTemplates: 'templates',
    pdf: 'pdf',
    json: 'json',
    serverRootFiles: '',
};

exports.GENERATED_FILES = {
    IMAGES: {
        responsiveImages : `${GENERATED_FILES_DIRECTORY}/responsive-images/`,
        spriteImages : {
            root : `${GENERATED_FILES_DIRECTORY}/sprite-images/`,
            source : `${GENERATED_FILES_DIRECTORY}/sprite-images/source/`,
            output : `${GENERATED_FILES_DIRECTORY}/sprite-images/output/`,
        },
        regularImages: `${GENERATED_FILES_DIRECTORY}/regular-images/`,
    },
};

exports.DIST_PATHS = {
    ROOT : `${DIST_DIRECTORY}`,
    IMAGES : `/${ASSETS_TARGET_DIRECTORY}/img`,
};

exports.DIST_FILES = {
    indexHTML : `${DIST_DIRECTORY}/${MAIN_INDEX_HTML}`,
};
