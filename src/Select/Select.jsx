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
  };

  static defaultProps = {
    autoWidth: false,
    disabled: false,
  };
  static contextTypes = {
    theme: PropTypes.object.isRequired
  };
  constructor(props, state) {
    super(props, state);
  }
  render() {
    const {
        value,
        label,
        onChange,
        style,
        autoWidth,
        disable,
        hintText,
        id,
        children,
    } = this.props;
    return (
        <MUISelectField value={value}
                     floatingLabelText={label}
                     onChange={onChange}
                     style={style}
                     autoWidth={autoWidth}
                     disable={disable}
                     hintText={hintText}
                     id={id}
       >
          {children}
        </MUISelectField>
    );
  }
}

export default Select;
