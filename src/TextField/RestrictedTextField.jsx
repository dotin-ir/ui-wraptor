import React, {PropTypes} from 'react';
import TextField from './TextField';
import BaseComponent from '../BaseComponent';

class RestrictedTextField extends BaseComponent {
    static propTypes = {
        fieldPattern: PropTypes.RegExp, //textField pattern

        label: PropTypes.string, //The content of the floating label(material-ui floatingLabelText).
        defaultValue: PropTypes.any, //The text string to use for the default value.
        value: PropTypes.any, //The value of the text field.
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
        onKeyDown: PropTypes.func,

        disabled: PropTypes.bool, //If true, the select field will be disabled.

        children: PropTypes.any,

        style: PropTypes.object, //Override the inline-styles of the root element.

        id: PropTypes.string, //The id prop for the text field.
        className: PropTypes.string, //The css class name of the root element.

        validate: PropTypes.func,
        errorText: PropTypes.node, //The error content to display.
        hintText: PropTypes.node, //The hint content to display.

        multiLine: PropTypes.bool, //If true, a textarea element will be rendered.
        rows: PropTypes.number, //Number of rows to display when multiLine option is set to true
        rowsMax: PropTypes.number, //Maximum number of rows to display when multiLine option is set to true
        textareaStyle: PropTypes.object //Override the inline-styles of the TextField's textarea element.
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, value) {
        if (value.search(this.props.fieldPattern) !== -1)
            if(this.props.onChange) this.props.onChange(value)
        else
            e.preventDefault();
    }

    render() {
        const {
            label,
            value,
            defaultValue,
            onKeyDown,
            onEnter,
            disabled,
            style,
            validate,
            errorText,
            hintText,
            id,
            className,
            children,
            multiLine,
            rows,
            rowsMax,
            textareaStyle

        } = this.props;

        return (
            <TextField
                label = {label}
                value = {value}

                onChange = {this.handleChange}
                onKeyDown = {onKeyDown}
                onEnter = {onEnter}
                disabled = {disabled}
                style = {style}
                id = {id}
                className = {className}
                validate = {validate}
                errorText = {errorText}
                hintText = {hintText}
                multiLine = {multiLine}
                rows = {rows}
                rowsMax = {rowsMax}
                textareaStyle = {textareaStyle}
                children = {children}
            />
        );
    }
}

export default RestrictedTextField;
