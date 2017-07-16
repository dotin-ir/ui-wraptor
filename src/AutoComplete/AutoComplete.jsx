import React, {PropTypes} from 'react';
import MUIAutoComplete from 'dotin-material-ui/AutoComplete';
import BaseComponent from '../BaseComponent';

const dataSourceConfig = {
    text: 'text',
    value: 'value',
};
class AutoComplete extends BaseComponent {
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
        } = this.props;
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
                             dataSourceConfig={dataSourceConfig}
                             maxSearchResults={5}
            >
            </MUIAutoComplete>
        );
    }
}

export default AutoComplete;
