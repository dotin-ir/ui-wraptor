import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';

import VMasker from 'vanilla-masker';
import TextField from '../TextField';
// import * as UI from 'dotin-material-ui';


class MaskedTextField extends BaseComponent {
    static propTypes = {
        /**
         * Dotin property type
         * The value of label
         * The content of the floating label(material-ui floatingLabelText).
         */
        label: PropTypes.string,
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * The text string to use for the default value.
         */
        defaultValue: PropTypes.any,
        /**
         * If true, the select field will be disabled.
         */
        disabled: PropTypes.bool,
        /**
         * The error content to display.
         */
        errorText: PropTypes.node,
        /**
         * The hint content to display.
         */
        hintText: PropTypes.node,
        /**
         * The id prop for the text field.
         */
        id: PropTypes.string,
        /**
         * Callback function fired when a menu item is selected.
         *
         * @param {object} event TouchTap event targeting the menu item
         * that was selected.
         * @param {number} key The index of the selected menu item.
         * @param {any} payload The `value` prop of the selected menu item.
         */
        onChange: PropTypes.func,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The value of the text field.
         */
        value: PropTypes.any,
        validate: PropTypes.func,
        onEnter: PropTypes.func,
        /**
         * Specifies the type of input to display
         * such as "password" or "text".
         */
        type: PropTypes.string,

        mask: PropTypes.string,
    };

    constructor(props) {
        super();
        this.state = props.defaultValue?{value: props.defaultValue}:{value:''};
    }

    onChange(mask, e) {
        const value = VMasker.toPattern(e.target.value, mask);
        this.setState({ value });
        if (this.props.onChange)
            this.props.onChange(e, value);
    }

    render() {
        const {mask, ...other} = this.props;
        delete other.defaultValue; 
        other.onChange = this.onChange.bind(this, mask);
        other.value = this.state.value;
        return (<TextField {...other} />);
    }
}
MaskedTextField.propTypes = {
    mask: React.PropTypes.string
};

export default MaskedTextField;






