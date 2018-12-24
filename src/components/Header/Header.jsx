import React from 'react';
import HeaderPropTypes from './HeaderPropTypes';
import HeaderDefaultProps from './HeaderDefaultProps';
import HeaderStyles from './HeaderStyles.scss';
import { FontAwesomeIcon } from '../Utils';


/**
 * @param title
 * @returns {*}
 * @constructor
 */
const Header = ({title}) => (
    <header className={HeaderStyles.main}>
        <div className="inline-block width-50 height-100 aligned-top">
            <div className={HeaderStyles.logo} alt={title}/>
            <p className={ HeaderStyles.title + " inline-block aligned-top"}>{title}</p>
        </div>
        <nav className="inline-block width-50 height-100">

            <ul className={HeaderStyles.navigationMenu}>
                <li><FontAwesomeIcon iconName="usd" classList={HeaderStyles.icon} /> Vender</li>
                <li><FontAwesomeIcon iconName="sign-language" classList={HeaderStyles.icon} /> Comprar</li>
                <li><FontAwesomeIcon iconName="info-circle" classList={HeaderStyles.icon} /> Informacion</li>
            </ul>
        </nav>
    </header>
);


/**
 * PropType Validation
 */
Header.propTypes = HeaderPropTypes;


/**
 * Default Props
 */
Header.defaultProps = HeaderDefaultProps;


/**
 * Module Export
 */
export default Header;
