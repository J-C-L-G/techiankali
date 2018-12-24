/**
 * sass-css-loader Development Configuration
 */
const DEVELOPMENT_LOADER_CONFIGURATION = {
    use: [
        // Creates Style nodes from JS strings
        {
            loader: 'style-loader',
            options: {
                sourceMap: true,
                convertToAbsoluteUrls: true
            }
        },
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[local]--[hash:base64:5]',
            }
        },
        // Compiles Sass to CSS
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ]
};

module.exports = DEVELOPMENT_LOADER_CONFIGURATION;
