import React, {PropTypes} from 'react';
import MUITextField from 'dotin-material-ui/TextField';
import BaseComponent from '../BaseComponent';




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
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired
  };
  constructor(props, state) {
    super(props, state);
  }
  render() {
    const {
        label,
        className,
        defaultValue,
        disable,
        errorText,
        hintText,
        id,
        onChange,
        style,
        children,
    } = this.props;
    return (
        <MUITextField className={className}
                      defaultValue={defaultValue}
                      disable={disable}
                      errorText={errorText}
                      floatingLabelText={label}
                      hintText={hintText}
                      id={id}
                      onChange={onChange}
                      style={style}
       >
          {children}
        </MUITextField>
    );
  }
}

export default TextField;
