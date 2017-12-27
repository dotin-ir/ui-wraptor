import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUICheckbox from 'dotin-material-ui/Checkbox';

class Checkbox extends BaseComponent {

    static propTypes = {
        /**
         * Checkbox is checked if true.
         */
        checked: PropTypes.bool,
        /**
         * The SvgIcon to use for the checked state.
         * This is useful to create icon toggles.
         */
        checkedIcon: PropTypes.element,
        /**
         * The default state of our checkbox component.
         * **Warning:** This cannot be used in conjunction with `checked`.
         * Decide between using a controlled or uncontrolled input element and remove one of these props.
         * More info: https://fb.me/react-controlled-components
         */
        defaultChecked: PropTypes.bool,
        /**
         * Disabled if true.
         */
        disabled: PropTypes.bool,
        /**
         * Overrides the inline-styles of the icon element.
         */
        iconStyle: PropTypes.object,
        /**
         * Overrides the inline-styles of the input element.
         */
        inputStyle: PropTypes.object,
        /**
         * Where the label will be placed next to the checkbox.
         */
        labelPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * Overrides the inline-styles of the Checkbox element label.
         */
        labelStyle: PropTypes.object,
        /**
         * Callback function that is fired when the checkbox is checked.
         *
         * @param {object} event `change` event targeting the underlying checkbox `input`.
         * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
         */
        onCheck: PropTypes.func,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The SvgIcon to use for the unchecked state.
         * This is useful to create icon toggles.
         */
        uncheckedIcon: PropTypes.element,
        /**
         * ValueLink for when using controlled checkbox.
         */
        valueLink: PropTypes.object,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    render() {
        const {
            ...all ,
        } = this.props;

        return <MUICheckbox {...all}/>
    }
}

export default Checkbox;