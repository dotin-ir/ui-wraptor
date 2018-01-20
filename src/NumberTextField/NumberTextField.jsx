import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';

import VMasker from 'vanilla-masker';
import TextField from '../TextField';


class NumberTextField extends BaseComponent {
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
         * @param {object} event Click event targeting the menu item
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

        length: PropTypes.number,
    };

    constructor(props) {
        super();
        this.state = props.defaultValue?{value: props.defaultValue}:{value:''};
    }

    onChange(length,e) {
        let value=this.state.value;
        if(length){
            var mask="";
            for(var i=0;i<length;i++){
                mask+="9";
            }
            value = VMasker.toPattern(e.target.value, mask);
            this.setState({ value });
        }else{
            value = VMasker.toNumber(e.target.value);
            this.setState({ value });
        }
        if (this.props.onChange)
            this.props.onChange(e, value);
    }

    render() {
        const {length,...props} = this.props;
        delete props.defaultValue;
        props.onChange = this.onChange.bind(this,length);
        return (<TextField {...props} />);
    }
}


export default NumberTextField;






