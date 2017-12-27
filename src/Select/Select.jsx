import React, {PropTypes} from 'react';
import MUISelectField from 'dotin-material-ui/SelectField';
import BaseComponent from '../BaseComponent';

class Select extends BaseComponent {

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

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
        multiple: PropTypes.bool,
        fullWidth: PropTypes.bool,

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
            fullWidth,
        } = this.props;

        const theme = this.context.theme,
            textFieldStyles = theme.textField,
            selectStyles = theme.dropDownMenu.select,
            iconStyles = theme.dropDownMenu.icon,
            labelStyles = theme.label,
            selectLabelStyles = theme.dropDownMenu.label,
            listStyles = theme.dropDownMenu.list,
            listItemStyle = theme.dropDownMenu.listItem;

        const menuStyle = {
            height: textFieldStyles.height,
            marginTop: textFieldStyles.margin,
            borderStyle: textFieldStyles.borderStyle,
            borderWidth: textFieldStyles.borderWidth,
            borderColor: textFieldStyles.borderColor,
            borderRadius:textFieldStyles.borderRadius,
            padding: theme.noPadding,
        };
        const selectStyle = {
            margin: selectStyles.margin,
            height: selectStyles.height,
            fontSize: selectStyles.fontSize
        };
        // TODO : underlineShow props should add to MUISelectField component
        const underLineStyle = {
            display: selectStyles.displayUnderLine
        };
        const iconStyle = {
            top: iconStyles.top,
            height: iconStyles.height,
            lineHeight: iconStyles.lineHeight,
            padding: iconStyles.padding,
            width: iconStyles.width,
            fill:iconStyles.fill
        };

        const floatingLabelStyle = {
            position: labelStyles.position,
            fontSize: labelStyles.fontSize,
            color: labelStyles.color,
        };

        const labelStyle = {
            lineHeight: selectLabelStyles.lineHeight,
            top: selectLabelStyles.top,
            height: selectLabelStyles.height,
            paddingLeft: selectLabelStyles.paddingRight
        };

        const floatingLabelFocusStyle = {
            color: labelStyles.focus.color
        };

        const dropDownMenuProps = {
            //animated: true,
            // targetOrigin: {horizontal: "left", vertical: "bottom"},
        };

        const menuItemStyle = {
            fontSize : listItemStyle.fontSize ,
            // boxShadow:listItemStyle.boxShadow
        };
        const listStyle = {
            paddingTop: listStyles.paddingTop,
            paddingBottom:listStyles.paddingBottom ,
        };
        return (
            <MUISelectField value={value}
                            floatingLabelText={label}
                            onChange={onChange}
                            autoWidth={autoWidth}
                            disabled={disabled}
                            hintText={hintText}
                            id={id}
                            multiple={multiple}
                            fullWidth={fullWidth}
                            style={selectStyle}
                            menuStyle={menuStyle}
                            underlineStyle={underLineStyle}
                            iconStyle={iconStyle}
                            floatingLabelStyle={floatingLabelStyle}
                            floatingLabelFocusStyle={floatingLabelFocusStyle}
                            labelStyle={labelStyle}
                            dropDownMenuProps={dropDownMenuProps}
                            menuItemStyle={menuItemStyle}
                            listStyle={listStyle}
            >
                {children}
            </MUISelectField>
        );
    }
}

export default Select;
