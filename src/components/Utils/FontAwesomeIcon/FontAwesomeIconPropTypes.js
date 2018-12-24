import PropsTypes from 'prop-types';

const FontAwesomeIconPropTypes = {
    tagName: PropsTypes.string,
    iconName: PropsTypes.string.isRequired,
    classList: PropsTypes.string
};

export default FontAwesomeIconPropTypes;
