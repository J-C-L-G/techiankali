"use strict";

const APP_DIRECTORY             = './src';
const DIST_DIRECTORY            = '/dist';
const ASSETS_TARGET_DIRECTORY   = 'assets';
const DEPLOYMENT_DIRECTORY      = './deployment_heroku';
const FILES_DIRECTORY           = './files';
const STATIC_FILES_DIRECTORY    = `${FILES_DIRECTORY}/static`;
const GENERATED_FILES_DIRECTORY = `${FILES_DIRECTORY}/generated`;

exports.SOURCE_FILES = {
    IMAGES: {
        responsiveImages : `${STATIC_FILES_DIRECTORY}/responsive-images/**/*.*`,
        spriteImages : `${STATIC_FILES_DIRECTORY}/sprite-images/**/*.*`,
        regularImages: `${STATIC_FILES_DIRECTORY}/regular-images/**/*.*`,
    },
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
    ROOT : `.${DIST_DIRECTORY}`,
    IMAGES : `/${ASSETS_TARGET_DIRECTORY}/img`,
};

exports.DEPLOYMENT_PATHS = {
    HEROKU : `${DEPLOYMENT_DIRECTORY}`,
    HEROKU_DIST_FOLDER : `${DEPLOYMENT_DIRECTORY}${DIST_DIRECTORY}/`
};

exports.FILE_CONFIGURATIONS = {
    IMAGE : {
        BREAKPOINTS : {
            RESPONSIVE_IMAGES : [
                { width: 320,  quality: 1, sharpen: false, upscale: false, device: "-xs" },            // iPhone 4, iPhone 5, Nokia Lumia 520, Bootstrap xs Breakpoint
                { width: 360,  quality: 1, sharpen: false, upscale: false, device: "-Android"},        // Android, Windows
                { width: 375,  quality: 1, sharpen: false, upscale: false, device: "-iPhone6"},        // iPhone 6
                { width: 384,  quality: 1, sharpen: false, upscale: false, device: "-Nexus4"},         // LG Optimus, Nexus 4
                { width: 412,  quality: 1, sharpen: false, upscale: false, device: "-Nexus6"},         // Nexus 6, Nexus 6P
                { width: 414,  quality: 1, sharpen: false, upscale: false, device: "-iPhone6Plus"},    // iPhone 6 Plus
                { width: 480,  quality: 1, sharpen: false, upscale: false, device: "-iPhone4L"},       // iPhone 4 Landscape
                { width: 533,  quality: 1, sharpen: false, upscale: false, device: "-Nokia"},          // Nokia Lumia 520
                { width: 568,  quality: 1, sharpen: false, upscale: false, device: "-iPhone5L"},       // iPhone 5 Landscape
                { width: 600,  quality: 1, sharpen: false, upscale: false, device: "-Nexus7"},         // Blackberry Playbook & Nexus 7
                { width: 640,  quality: 1, sharpen: false, upscale: false, device: "-AndroidL"},       // Android (Landscape), Windows (Landscape)
                { width: 667,  quality: 1, sharpen: false, upscale: false, device: "-iPhone6L"},       // iPhone 6 (Landscape)
                { width: 732,  quality: 1, sharpen: false, upscale: false, device: "-Nexus6L"  },      // Nexus 6, Nexus 5x,  Nexus 6P
                { width: 736,  quality: 1, sharpen: false, upscale: false, device: "-iPhone6PlusL"},   // iPhone 6 Plus (Landscape)
                { width: 768,  quality: 1, sharpen: false, upscale: false, device: "-sm"},             // iPad, iPad Mini, Bootstrap sm Breakpoint
                { width: 992,  quality: 1, sharpen: false, upscale: false, device: "-md"},             // Bootstrap md Breakpoint
                { width: 1024, quality: 1, sharpen: false, upscale: false, device: "-iPadL"},          // iPad (Landscape)
                { width: 1200, quality: 1, sharpen: false, upscale: false, device: "-lg"},             // Bootstrap lg Breakpoint
                { width: 1280, quality: 1, sharpen: false, upscale: false, device: "-Nexus10"},        // Nexus 10, MDPI Laptop
                { width: 1440, quality: 1, sharpen: false, upscale: false, device: "-HiDPILaptop"},    // HiDPI (Retina) Laptop,
                { width: 1600, quality: 1, sharpen: false, upscale: false, device: "-KindleFireHDX"},  // Kindle Fire HDX, MDPI Desktop
                { width: 1920, quality: 1, sharpen: false, upscale: false, device: "-Desktop"},        // 1080p Desktop
                { width: 2560, quality: 1, sharpen: false, upscale: false, device: "-Retina"},         // HiDPI (Retina) Desktop
                { width: 2560, quality: 1, sharpen: false, upscale: false, device: ""},                // Desktop - Non Responsive (Original File)
            ],
            SPRITE_IMAGES : [
                { includeInName : "-100",   percentage: 100 },
                { includeInName : "-90",    percentage: 90 },
                { includeInName : "-80",    percentage: 80 },
                { includeInName : "-70",    percentage: 70 },
                { includeInName : "-60",    percentage: 60 },
                { includeInName : "-50",    percentage: 50 },
                { includeInName : "-40",    percentage: 40 },
                { includeInName : "-30",    percentage: 30 },
                { includeInName : "-20",    percentage: 20 },
                { includeInName : "-10",    percentage: 10 },
            ],
        }
    }
};