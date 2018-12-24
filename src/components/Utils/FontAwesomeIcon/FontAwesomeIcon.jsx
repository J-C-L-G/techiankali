import React from 'react';
import FontAwesomeIconPropTypes from './FontAwesomeIconPropTypes';
import FontAwesomeIconDefaultProps from './FontAwesomeIconDefaultProps';
import FontAwesomeIconStyles from './FontAwesomeIconStyles.scss';
import FontAwesome from  '../../../../node_modules/font-awesome/scss/font-awesome.scss';


/**
 *
 * @param tagName
 * @param iconName
 * @param classList
 * @returns {*}
 * @constructor
 */
const FontAwesomeIcon = ({tagName, iconName, classList}) => {
    const TagName = tagName;
    return (
        <TagName className={`${FontAwesomeIconStyles.defaultValues} ${FontAwesome.fa} ${FontAwesome[`fa-${iconName}`]} ${classList}`}/>
    );
};


/**
 * PropType Validation
 */
FontAwesomeIcon.propTypes = FontAwesomeIconPropTypes;


/**
 * Default Props
 */
FontAwesomeIcon.defaultProps = FontAwesomeIconDefaultProps;


/**
 * Module Export
 */
export default FontAwesomeIcon;
