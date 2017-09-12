import React, {PropTypes} from 'react';
import MUISelectField from 'dotin-material-ui/SelectField';
import BaseComponent from '../BaseComponent';




class Select extends BaseComponent {
  static propTypes = {
    /**
     * If true, the width will automatically be set according to the
     * items inside the menu.
     * To control the width in CSS instead, leave this prop set to `false`.
     */
    autoWidth: PropTypes.bool,

    /**
     * If true, the select field will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Dotin property type
     * The value of label
     * The content of the floating label(material-ui floatingLabelText).
     */
    label: PropTypes.string,
    /**
     * The hint content to display.
     */
    hintText: PropTypes.string,
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
     * The value that is currently selected.
     */
    value: PropTypes.any,
    /**
     * If true, value must be an array and the menu will support multiple selections.
     */
    multiple:PropTypes.bool
  };

  static defaultProps = {
    autoWidth: false,
    disabled: false,
  };
  render() {
    const {
        value,
        label,
        onChange,
        style,
        autoWidth,
        disabled,
        hintText,
        id,
        children,
        multiple,
    } = this.props;
    return (
        <MUISelectField value={value}
                     floatingLabelText={label}
                     onChange={onChange}
                     style={style}
                     autoWidth={autoWidth}
                     disabled={disabled}
                     hintText={hintText}
                     id={id}
                     multiple={multiple}
       >
          {children}
        </MUISelectField>
    );
  }
}

export default Select;
