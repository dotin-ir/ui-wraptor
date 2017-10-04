import React, {PropTypes} from 'react';
import MUITextField from 'dotin-material-ui/TextField';
import BaseComponent from '../BaseComponent';
import keycode from 'keycode';


class TextField extends BaseComponent {
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
        onKeyDown: PropTypes.func,
        /**
         *  If true, a textarea element will be rendered.
         *  The textarea also grows and shrinks according to the number of lines
         *  */
        multiLine: PropTypes.bool,
        /**
         *  Number of rows to display when multiLine option is set to true
         *  */
        rows: PropTypes.number,
        /**
         *  Maximum number of rows to display when multiLine option is set to true
         *  */
        rowsMax: PropTypes.number,
        /**
         *  Override the inline-styles of the TextField's textarea element.
         *  The TextField use either a textarea or an input, this property has effects only when multiLine is true
         *  */
        textareaStyle: PropTypes.object
    };

    state = {
        valid: true,
    };

    componentWillMount() {
        if(this.props.validate) {
            this.setState({
                valid: this.props.validate(this.props.value),
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.validate) {
            this.setState({
                valid: nextProps.validate(nextProps.value),
            });
        }
    }

    handleChange(e, value) {
        if (this.props.onChange) {
            this.props.onChange(e, value);
        }
        if(this.props.validate) {
            this.setState({
                valid: this.props.validate(value),
            });
        }
    }

    handleKeyDown = (event) => {
        if(this.props.onKeyDown) this.props.onKeyDown(event)
        if (!this.props.disabled) {
            if (keycode(event) === 'enter') {
                if(this.props.onEnter) this.props.onEnter(event);
            }
        }
    };

    render() {
        const {
            label,
            className,
            defaultValue,
            disabled,
            errorText,
            hintText,
            id,
            style,
            children,
            value,
            type,
            multiLine,
            rows,
            rowsMax,
            textareaStyle
        } = this.props;
        return (
            <MUITextField className={className}
                          defaultValue={defaultValue}
                          disabled={disabled}
                          errorText={!this.state.valid && errorText}
                          floatingLabelText={label}
                          hintText={hintText}
                          id={id}
                          onChange={this.handleChange.bind(this)}
                          style={style}
                          value={value}
                          type={type}
                          onKeyDown={this.handleKeyDown.bind(this)}
                          multiLine= {multiLine}
                          rows= {rows}
                          rowsMax= {rowsMax}
                          textareaStyle= {textareaStyle}
            >
                {children}
            </MUITextField>
        );
    }
}

export default TextField;
