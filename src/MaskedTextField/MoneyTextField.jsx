import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import TextField from '../TextField';
import VMasker from 'vanilla-masker';

class MoneyTextField extends BaseComponent {
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
        unitSign: PropTypes.string,
        precision: PropTypes.number,
    };

    constructor(props) {
        super();
        this.state = props.defaultValue?{value: props.defaultValue}:{value:''};
    }

    onChange(e) {
        const options = {
            precision: this.props.precision,
            moneyPrecision: this.props.precision,
            separator: '.',
            delimiter: ',',
            unit: this.props.unitSign
        };
        const returnOptions = {
            precision: this.props.precision,
            moneyPrecision: this.props.precision,
            separator: '.',
            delimiter: ',',
        };
        let value = e.target.value;
        const val = VMasker.toMoney(value, options);
        if(val != '0') {
            value = value.replace(/\*/g, "000");
        }
        value = VMasker.toMoney(value, options);
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(e, VMasker.toMoney(value, returnOptions).replace(/,/g, ""));
        }
    }

    render() {
        const {...other} = this.props;
        delete other.defaultValue; 
        other.onChange = this.onChange.bind(this);
        return (<TextField {...other} />);
    }
}

export default MoneyTextField;






