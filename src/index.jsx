"use strict";

/**
 * Environment Variables
 */
// const IS_PRODUCTION     = process.env.NODE_ENV === 'production';
// const IS_DEVELOPMENT    = process.env.NODE_ENV === 'development';
// const IS_HEROKU         = process.env.TARGET_ENV === 'heroku';


/**
 * Global Scripts
 */
// require('expose-loader?$!jquery');


/**
 * Import node_modules
 */
import '../node_modules/font-awesome/scss/font-awesome.scss';
import React from 'react';
import ReactDom from 'react-dom';

/**
 * Import app styles
 */
import './index.scss';


/**
 * Import Components
 */
import Components from './components';
const {App} = Components;

ReactDom.render(<App title='Game System' />, document.getElementById('gs-application'));
