import React, {PropTypes} from "react";
import BaseComponent from "../BaseComponent";
import MUIRadioButtonGroup from 'dotin-material-ui/RadioButton/RadioButtonGroup';

class RadioButtonGroup extends BaseComponent {

    static propTypes = {
        /**
         * Should be used to pass `RadioButton` components.
         */
        children: PropTypes.node,
        /**
         * The `value` property of the radio button that will be
         * selected by default. This takes precedence over the `checked` property
         * of the `RadioButton` elements.
         */
        defaultSelected: PropTypes.any,
        /**
         * Where the label will be placed for all child radio buttons.
         * This takes precedence over the `labelPosition` property of the
         * `RadioButton` elements.
         */
        labelPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * The name that will be applied to all child radio buttons.
         */
        name: PropTypes.string.isRequired,
        /**
         * Callback function that is fired when a radio button has
         * been checked.
         *
         * @param {object} event `change` event targeting the selected
         * radio button.
         * @param {*} value The `value` of the selected radio button.
         */
        onChange: PropTypes.func,
        /**
         * The `value` of the currently selected radio button.
         */
        valueSelected: PropTypes.any,
    };

    render() {
        const {
            ...all
        } = this.props;
        return (
            <MUIRadioButtonGroup {...all} />
        );
    }

}

export default RadioButtonGroup;