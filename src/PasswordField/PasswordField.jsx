import React, {PropTypes} from 'react';
import MUITextField from 'dotin-material-ui/TextField';
import BaseComponent from '../BaseComponent';
import keycode from 'keycode';

class PasswordField extends BaseComponent {

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
        onEnter: PropTypes.func,
        fullWidth: PropTypes.bool
    };

    handleEnter = (event) => {
        if (!this.props.disabled) {
            if (keycode(event) === 'enter') {
                this.props.onEnter(event);
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
            onChange,
            style,
            children,
            fullWidth,
        } = this.props;

        const theme = this.context.theme,
            textFieldStyles = theme.textField,
            labelStyles = theme.label;

        const inputStyle = {
            margin: textFieldStyles.margin,
            height: textFieldStyles.height,
            padding: textFieldStyles.padding,
            fontSize: textFieldStyles.fontSize,
            borderStyle: textFieldStyles.borderStyle,
            borderWidth: textFieldStyles.borderWidth,
            borderColor: textFieldStyles.borderColor,
            borderRadius: textFieldStyles.borderRadius
        };

        const floatingLabelStyle = {
            position: labelStyles.position,
            fontSize: labelStyles.fontSize,
            color: labelStyles.color,
        };
        const floatingLabelFocusStyle = {
            color: labelStyles.focus.color
        };

        return (
            <MUITextField className={className}
                          defaultValue={defaultValue}
                          disabled={disabled}
                          errorText={errorText}
                          floatingLabelText={label}
                          hintText={hintText}
                          id={id}
                          onChange={onChange}
                          style={style}
                          inputStyle={inputStyle}
                          floatingLabelStyle={floatingLabelStyle}
                          underlineShow={false}
                          type="password"
                          fullWidth={fullWidth}
                          floatingLabelFocusStyle={floatingLabelFocusStyle}
                          onKeyDown={this.handleEnter.bind(this)}
            >
                {children}
            </MUITextField>
        );
    }
}

export default PasswordField;
