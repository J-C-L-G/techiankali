import React from 'react';
import AppPropTypes from './AppPropTypes';
import AppStyles from './AppStyles.scss';
import AppDefaultProps from './AppDefaultProps';
import Header from '../Header';

import logo from '../../../files/generated/sprite-images/source/techiankali-logo-20.png';

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const App = ({title}) => (
    <div>
        <Header title={title}/>
        <h1 className={AppStyles.title}>
            <img src={logo} />
        </h1>
    </div>
);


/**
 * PropType Validation
 */
App.propTypes = AppPropTypes;


/**
 * Default Props
 */
App.defaultProps = AppDefaultProps;


/**
 * Module Export
 */
export default App;
