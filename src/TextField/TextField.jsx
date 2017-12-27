import React, {PropTypes} from 'react';
import MUITextField from 'dotin-material-ui/TextField';
import BaseComponent from '../BaseComponent';
import keycode from 'keycode';

class TextField extends BaseComponent {

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };
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
        onFocus: PropTypes.func,
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
        textareaStyle: PropTypes.object,
        fullWidth: PropTypes.bool
    };

    state = {
        valid: true,
    };

    componentWillMount() {
        if (this.props.validate) {
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
        if (this.props.validate) {
            this.setState({
                valid: this.props.validate(value),
            });
        }
    }

    handleKeyDown = (event) => {
        if (this.props.onKeyDown) this.props.onKeyDown(event)
        if (!this.props.disabled) {
            if (keycode(event) === 'enter') {
                if (this.props.onEnter) this.props.onEnter(event);
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
            textareaStyle,
            onFocus,
            fullWidth,
        } = this.props;

        // todo : saeed review these code
        const theme = this.context.theme,
            textFieldStyles = theme.textField,
            textarea = textFieldStyles.textarea,
            labelStyles = theme.label,
            errorStyles = textFieldStyles.errorStyle;

        const inputStyle = {
            height: textFieldStyles.height,
            padding: textFieldStyles.padding,
            fontSize: textFieldStyles.fontSize,
            borderStyle: textFieldStyles.borderStyle,
            borderWidth: textFieldStyles.borderWidth,
            borderColor: textFieldStyles.borderColor,
            borderRadius : textFieldStyles.borderRadius,
            marginTop:textFieldStyles.margin
        };
        multiLine ? Object.assign(inputStyle, {
            height: 'auto',
            padding: 0,
            minHeight: textFieldStyles.height
        }) : '';

        // boolean for determine material default underline showed or hide
        const showUnderLine = textFieldStyles.showUnderLine;
        // styles for label in textField
        const floatingLabelStyle = {
            position: labelStyles.position,
            fontSize: labelStyles.fontSize,
            color: labelStyles.color,
        };
        const errorStyle = {
            bottom: errorStyles.bottom
        };
        const floatingLabelFocusStyle = {
            color: labelStyles.focus.color
        };

        const textareaStyles = {
            marginTop: theme.noMargin ,
            marginBottom : theme.noMargin,
            padding:textFieldStyles.padding
        };

        /*    const rootStyles = {
             backgroundColor:BaseTheme.container.background,
         };
*/
        return (
            <MUITextField className={className}
                          defaultValue={defaultValue}
                          disabled={disabled}
                          errorText={!this.state.valid && errorText}
                          floatingLabelText={label}
                          hintText={hintText}
                          id={id}
                          onChange={this.handleChange.bind(this)}
                          inputStyle={inputStyle}
                          style={style}
                          value={value}
                          type={type}
                          onKeyDown={this.handleKeyDown.bind(this)}
                          onFocus={onFocus}
                          multiLine={multiLine}
                          rows={rows}
                          rowsMax={rowsMax}
                          textareaStyle={textareaStyles}
                          fullWidth={fullWidth}
                          underlineShow={showUnderLine}
                          floatingLabelStyle={floatingLabelStyle}
                          errorStyle={errorStyle}
                          floatingLabelFocusStyle={floatingLabelFocusStyle}
            >
                {children}
            </MUITextField>
        );
    }
}

export default TextField;
