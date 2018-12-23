import React from 'react';
import HeaderStyles from './HeaderStyles.scss';
import HeaderPropTypes from './HeaderPropTypes';

const Header = ({title}) => (
    <header className={HeaderStyles.main}>
        <h1>{title}</h1>
    </header>
);

Header.propTypes = HeaderPropTypes;

export default Header;
