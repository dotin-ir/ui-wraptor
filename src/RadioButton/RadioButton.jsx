import React, {PropTypes} from "react";
import BaseComponent from "../BaseComponent";
import MUIRadioButton from 'dotin-material-ui/RadioButton';

class RadioButton extends BaseComponent {

    static propTypes = {
        /**
         * @ignore
         * checked if true
         * Used internally by `RadioButtonGroup`.
         */
        checked: PropTypes.bool,
        /**
         * The icon element to show when the radio button is checked.
         */
        checkedIcon: PropTypes.element,
        /**
         * If true, the radio button is disabled.
         */
        disabled: PropTypes.bool,
        /**
         * @ignore
         * Used internally by `RadioButtonGroup`. Use the `labelPosition` property of `RadioButtonGroup` instead.
         * Where the label will be placed next to the radio button.
         */
        labelPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * @ignore
         * Callback function fired when the radio button is checked. Note that this
         * function will not be called if the radio button is part of a
         * radio button group: in this case, use the `onChange` property of
         * `RadioButtonGroup`.
         *
         * @param {object} event `change` event targeting the element.
         * @param {string} value The element's `value`.
         */
        onCheck: PropTypes.func,
        /**
         * The icon element to show when the radio button is unchecked.
         */
        uncheckedIcon: PropTypes.element,
        /**
         * The value of the radio button.
         */
        value: PropTypes.any,
    };

    render() {
        const {
            ...all
        } = this.props;
        return (
            <MUIRadioButton {...all} />
        );
    }

}

export default RadioButton;