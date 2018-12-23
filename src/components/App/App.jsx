import React from 'react';
import FontAwesome from "react-fontawesome";
import PropTypes from 'prop-types';
import styles from './App.scss';

import Header from '../Header';

/**
 *
 * @param title
 * @returns {*}
 * @constructor
 */
const App = ({title}) => (
    <div>
        <Header title='Test'/>
        <h1 className={styles.title}>
            <FontAwesome className={styles.icon} name='gamepad'/> {title}
        </h1>
    </div>
);

/*
export default class App extends React.Component{
    render(){
        const { title } = this.props;
        return (
            <h1 className={styles.title}>
                <FontAwesome className={styles.icon} name='gamepad'/> {title}
            </h1>
        );
    }
}
*/

App.propTypes = {
    title: PropTypes.string,
};

export default App;
