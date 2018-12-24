"use strict";

/**
 * Environment Variables
 */
// const IS_PRODUCTION     = process.env.NODE_ENV === 'production';
// const IS_DEVELOPMENT    = process.env.NODE_ENV === 'development';
// const IS_HEROKU         = process.env.TARGET_ENV === 'heroku';


/**
 * Import app styles
 */
import './index.scss';


/**
 * Import node_modules
 */
import React from 'react';
import ReactDom from 'react-dom';


/**
 * Import Components
 */
import Components from './components';
const {App} = Components;

ReactDom.render(<App title='Techiankali' />, document.getElementById('techiankali-app'));
