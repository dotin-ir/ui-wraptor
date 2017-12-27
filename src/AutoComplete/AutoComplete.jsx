import React, {PropTypes} from 'react';
import MUIAutoComplete from 'dotin-material-ui/AutoComplete';
import BaseComponent from '../BaseComponent';

const _dataSourceConfig = {
    text: 'text',
    value: 'value',
};

class AutoComplete extends BaseComponent {

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    static propTypes = {
        /**
         * Array of strings or nodes used to populate the list.
         */
        dataSource: PropTypes.array.isRequired,
        /**
         * The error content to display.
         */
        errorText: PropTypes.node,
        /**
         * Dotin property type
         * The value of label
         * The content of the floating label(material-ui floatingLabelText).
         */
        label: PropTypes.string,
        /**
         * The hint content to display.
         */
        hintText: PropTypes.node,
        /**
         * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
         *
         * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
         * or the text value of the corresponding list item that was selected.
         * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
         * `TextField`.
         */
        onNewRequest: PropTypes.func,
        /**
         * Callback function that is fired when the user updates the `TextField`.
         *
         * @param {string} searchText The auto-complete's `searchText` value.
         * @param {array} dataSource The auto-complete's `dataSource` array.
         */
        onUpdateInput: PropTypes.func,
        /**
         * Text being input to auto complete.
         */
        searchText: PropTypes.string,

        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        dataSourceConfig: PropTypes.any
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

    render() {
        const {
            label,
            dataSource,
            errorText,
            hintText,
            onNewRequest,
            onUpdateInput,
            searchText,
            id,
            style,
            dataSourceConfig
        } = this.props;

        const theme = this.context.theme,
            textFieldStyles = theme.textField,
            labelStyles = theme.label,
            hintStyles = textFieldStyles.hintStyle,
            listItemStyle = theme.dropDownMenu.listItem,
            listStyles = theme.dropDownMenu.list;

        const inputStyle = {
            margin: textFieldStyles.margin,
            height: textFieldStyles.height,
            padding: textFieldStyles.padding,
            fontSize: textFieldStyles.fontSize,
            borderStyle: textFieldStyles.borderStyle,
            borderWidth: textFieldStyles.borderWidth,
            borderColor: textFieldStyles.borderColor,
            borderRadius : textFieldStyles.borderRadius
        };
        const floatingLabelStyle = {
            position: labelStyles.position,
            fontSize: labelStyles.fontSize,
            color: labelStyles.color,
        };
        const hintStyle = {
            bottom: hintStyles.bottom,
            // todo: verify why left and right are changed
            left: hintStyles.left,
            right: hintStyles.right,
            fontSize: hintStyles.fontSize
        };

        const popoverStyle = {
            marginTop: theme.autoComplete.marginTop
        };
        const listStyle = {
            paddingTop: listStyles.paddingTop,
            paddingBottom: listStyles.paddingBottom,

        };
        const menuStyle = {};
        const menuProps = {
            menuItemStyle: {
                border: listItemStyle.border,
                borderBottomWidth: listItemStyle.borderBottomWidth,
                borderBottomColor: listItemStyle.borderBottomColor,
                borderBottomStyle: listItemStyle.borderBottomStyle,
                fontSize: listItemStyle.fontSize,
            }
        };
        const floatingLabelFocusStyle = {
            color: labelStyles.focus.color
        };

        return (
            <MUIAutoComplete floatingLabelText={label}
                             dataSource={dataSource}
                             errorText={errorText}
                             hintText={hintText}
                             id={id}
                             filter={AutoComplete.fuzzyFilter}
                             onNewRequest={onNewRequest}
                             style={style}
                             onUpdateInput={onUpdateInput}
                             searchText={searchText}
                             dataSourceConfig={dataSourceConfig ? dataSourceConfig : _dataSourceConfig}
                             maxSearchResults={5}
                             underlineShow={false}
                             floatingLabelStyle={floatingLabelStyle}
                             inputStyle={inputStyle}
                             hintStyle={hintStyle}
                             floatingLabelFocusStyle={floatingLabelFocusStyle}
                             popoverProps={{style: popoverStyle}}
                             listStyle={listStyle}
                             menuStyle={menuStyle}
                             menuProps={menuProps}

            >
            </MUIAutoComplete>
        );
    }
}

export default AutoComplete;
