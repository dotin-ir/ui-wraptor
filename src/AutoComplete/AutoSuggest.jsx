import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import keycode from 'keycode';
import TextField from '../TextField';
import Menu from 'dotin-material-ui/Menu';
import MenuItem from 'dotin-material-ui/MenuItem/MenuItem';
import Divider from 'dotin-material-ui/Divider';
import Popover from 'dotin-material-ui/Popover';
import {dangerColor} from '../styles/colors';
import BaseComponent from "../BaseComponent/BaseComponent";


function getStyles(props, state) {
    const {anchorEl} = state;
    const {fullWidth} = props;

    const styles = {
        root: {
            display: 'inline-block',
            position: 'relative',
            width: fullWidth ? '100%' : 256,
        },
        menu: {
            width: '100%',
        },
        list: {
            display: 'block',
            width: fullWidth ? '100%' : 256,
        },
        innerDiv: {
            overflow: 'hidden',
        },
    };

    if (anchorEl && fullWidth) {
        styles.popover = {
            width: anchorEl.clientWidth,
        };
    }

    return styles;
}

class AutoSuggest extends BaseComponent {

    static propTypes = {
        /**
         * Location of the anchor for the auto complete.
         */
        anchorOrigin: PropTypes.any,
        /**
         * Array of strings or nodes used to populate the list.
         */
        dataSource: PropTypes.array.isRequired,
        /**
         * Config for objects list dataSource.
         *
         * @typedef {Object} dataSourceConfig
         *
         * @property {string} text `dataSource` element key used to find a string to be matched for search
         * and shown as a `TextField` input value after choosing the result.
         * @property {string} value `dataSource` element key used to find a string to be shown in search results.
         */
        dataSourceConfig: PropTypes.object,
        /**
         * Disables focus ripple when true.
         */
        disableFocusRipple: PropTypes.bool,
        /**
         * Callback function used to filter the auto complete.
         *
         * @param {string} searchText The text to search for within `dataSource`.
         * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
         * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
         */
        filter: PropTypes.func,
        /**
         * The content to use for adding floating label element.
         */
        label: PropTypes.node,
        /**
         * If true, the field receives the property `width: 100%`.
         */
        fullWidth: PropTypes.bool,
        /**
         * The hint content to display.
         */
        hintText: PropTypes.node,
        /**
         * The max number of search results to be shown.
         * By default it shows all the items which matches filter.
         */
        maxSearchResults: PropTypes.number,
        /**
         * Delay for closing time of the menu.
         */
        menuCloseDelay: PropTypes.number,
        /**
         * Props to be passed to menu.
         */
        menuProps: PropTypes.object,
        /** @ignore */
        onBlur: PropTypes.func,
        /**
         * Callback function fired when the menu is closed.
         */
        onClose: PropTypes.func,
        /** @ignore */
        onFocus: PropTypes.func,
        /** @ignore */
        onKeyDown: PropTypes.func,
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
         * @param {object} params Additional information linked the update.
         */
        onUpdateInput: PropTypes.func,
        /**
         * Auto complete menu is open if true.
         */
        open: PropTypes.bool,
        /**
         * If true, the list item is showed when a focus event triggers.
         */
        openOnFocus: PropTypes.bool,
        /**
         * Props to be passed to popover.
         */
        popoverProps: PropTypes.object,
        /**
         * Text being input to auto complete.
         */
        searchText: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Origin for location of target.
         */
        targetOrigin: PropTypes.any,
        /**
         * Override the inline-styles of AutoSuggest's TextField element.
         */
        textFieldStyle: PropTypes.object,

        popoverStyle: PropTypes.object,

        setEmptyAfterAction: PropTypes.bool,

        id: PropTypes.string,

        inputStyle: PropTypes.object,
    };

    static defaultProps = {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        animated: true,
        dataSourceConfig: {
            text: 'text',
            value: 'value',
        },
        disableFocusRipple: true,
        filter: (searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1,
        fullWidth: false,
        open: false,
        openOnFocus: false,
        onUpdateInput: () => {},
        onNewRequest: () => {},
        menuCloseDelay: 300,
        targetOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    state = {
        anchorEl: null,
        focusTextField: true,
        open: false,
        searchText: undefined,
    };

    componentWillMount() {
        this.requestsList = [];
        this.setState({
            open: this.props.open,
            searchText: this.props.searchText || '',
            inputStyle: this.props.inputStyle || {},
        });
        this.timerClickCloseId = null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.searchText !== nextProps.searchText) {
            this.setState({
                searchText: nextProps.searchText,
            });
        }
        if (this.props.open !== nextProps.open) {
            this.setState({
                open: nextProps.open,
                anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timerClickCloseId);
        clearTimeout(this.timerBlurClose);
    }

    close() {
        this.setState({
            open: false,
            anchorEl: null,
        });

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    handleRequestClose = () => {
        // Only take into account the Popover clickAway when we are
        // not focusing the TextField.
        if (!this.state.focusTextField) {
            this.close();
        }
    };

    handleMouseDown = (event) => {
        // Keep the TextField focused
        event.preventDefault();
    };

    handleItemClick = (event, child) => {
        const dataSource = this.props.dataSource;
        let index = parseInt(child.key, 10);
        const chosenRequest = dataSource[index];
        const searchText = this.chosenRequestText(chosenRequest);

        const updateInput = () => this.props.onUpdateInput(searchText, this.props.dataSource, {
            source: 'touchTap',
        });

        this.timerClickCloseId = () => setTimeout(() => {
            this.timerClickCloseId = null;
            this.close();
            this.props.onNewRequest(chosenRequest, index);
        }, this.props.menuCloseDelay);

        if (typeof this.props.searchText !== 'undefined') {
            this.setState({searchText: ''})
            updateInput();
            this.timerClickCloseId();
        } else {
            this.setState({
                searchText: searchText,
            }, () => {
                updateInput();
                this.timerClickCloseId();
                if(this.props.setEmptyAfterAction) this.setState({searchText: ''});
            });
        }
    };

    chosenRequestText = (chosenRequest) => {
        if (typeof chosenRequest === 'string') {
            return chosenRequest;
        } else {
            return chosenRequest[this.props.dataSourceConfig.text];
        }
    };

    handleEscKeyDown = () => {
        this.close();
    };

    handleKeyDown = (event) => {
        if (this.props.onKeyDown) this.props.onKeyDown(event);

        switch (keycode(event)) {
            case 'enter':
                this.close();
                const searchText = this.state.searchText;
                if (searchText !== '') {
                    if(this.requestsList.length <= 0) {
                        this.setState({inputStyle: {color: dangerColor}});
                    }else{
                        const index = parseInt(this.requestsList[0].value.key, 10);
                        this.setState({
                            searchText: this.requestsList[0].text,
                            inputStyle: {color: this.context.theme.textField.textColor}
                        });
                        this.props.onNewRequest(this.props.dataSource[index], index);
                        this.handleItemClick({}, this.requestsList[0].value);
                    }
                }
                break;

            case 'esc':
                this.close();
                break;

            case 'down':
                event.preventDefault();
                this.setState({
                    open: true,
                    focusTextField: false,
                    anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
                });
                break;

            default:
                break;
        }
    };

    handleChange = (event) => {
        const {dataSource, maxSearchResults, styles} = this.props
        let requestsList = [];
        const searchText = event.target.value;

        dataSource.every((item, index) => {
            switch (typeof item) {
                case 'string':
                    if (filter(searchText, item, item)) {
                        requestsList.push({
                            text: item,
                        });
                    }
                    break;

                case 'object':
                    if (item && typeof item[this.props.dataSourceConfig.text] === 'string') {
                        const itemText = item[this.props.dataSourceConfig.text];
                        if (!this.props.filter(searchText, itemText, item)) break;

                        const itemValue = item[this.props.dataSourceConfig.value];
                        if (itemValue.type && (itemValue.type.muiName === MenuItem.muiName ||
                            itemValue.type.muiName === Divider.muiName)) {
                            requestsList.push({
                                text: itemText,
                            });
                        } else {
                            requestsList.push({
                                text: itemText,
                            });
                        }
                    }
                    break;

                default:
                // Do nothing
            }

            return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
        });

        // Make sure that we have a new searchText.
        // Fix an issue with a Cordova Webview
        if (searchText === this.state.searchText) {
            return;
        }

        this.setState({
            searchText: searchText,
            open: true,
            anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
        }, () => {
            this.props.onUpdateInput(searchText, this.props.dataSource, {
                source: 'change',
            });
        });

        if(requestsList.length <= 0 && searchText !== '') {
            this.setState({inputStyle: {color: dangerColor}});
        }else{
            this.setState({inputStyle: {color: this.context.theme.textField.textColor}});
        }
    };

    handleBlur = (event) => {
        if (this.state.focusTextField && this.timerClickCloseId === null) {
            this.timerBlurClose = setTimeout(() => {
                this.close();
            }, 0);
        }

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }

        this.setState({inputStyle: {color: this.context.theme.textField.textColor}});
        // if(this.props.setEmptyAfterAction) this.setState({searchText: ''});
    };

    handleFocus = (event) => {
        if (!this.state.open && this.props.openOnFocus) {
            this.setState({
                open: true,
                anchorEl: ReactDOM.findDOMNode(this.refs.searchTextField),
            });
        }

        this.setState({
            focusTextField: true,
        });

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    };

    blur() {
        this.refs.searchTextField.blur();
    }

    focus() {
        this.refs.searchTextField.focus();
    }

    render() {
        const {
            anchorOrigin,
            dataSource,
            dataSourceConfig,
            disableFocusRipple,
            label,
            filter,
            fullWidth,
            style,
            hintText,
            maxSearchResults,
            menuCloseDelay,
            textFieldStyle,
            menuProps,
            targetOrigin,
            onBlur,
            onClose,
            onFocus,
            onKeyDown,
            onNewRequest,
            onUpdateInput,
            openOnFocus,
            popoverProps,
            searchText: searchTextProp,
            popoverStyle,
            inputStyle,

            ...other
        } = this.props;

        const {
            ...popoverOther
        } = popoverProps || {};

        const {
            open,
            anchorEl,
            searchText,
            focusTextField,
        } = this.state;

        const {prepareStyles} = this.context.theme;
        const styles = getStyles(this.props, this.state);

        const requestsList = [];

        dataSource.every((item, index) => {
            switch (typeof item) {
                case 'string':
                    if (filter(searchText, item, item)) {
                        requestsList.push({
                            text: item,
                            value: (
                                <MenuItem
                                    innerDivStyle={styles.innerDiv}
                                    value={item}
                                    primaryText={item}
                                    disableFocusRipple={disableFocusRipple}
                                    key={index}
                                />),
                        });
                    }
                    break;

                case 'object':
                    if (item && typeof item[this.props.dataSourceConfig.text] === 'string') {
                        const itemText = item[this.props.dataSourceConfig.text];
                        if (!this.props.filter(searchText, itemText, item)) break;

                        const itemValue = item[this.props.dataSourceConfig.value];
                        if (itemValue.type && (itemValue.type.muiName === MenuItem.muiName ||
                            itemValue.type.muiName === Divider.muiName)) {
                            requestsList.push({
                                text: itemText,
                                value: React.cloneElement(itemValue, {
                                    key: index,
                                    disableFocusRipple: disableFocusRipple,
                                }),
                            });
                        } else {
                            requestsList.push({
                                text: itemText,
                                value: (
                                    <MenuItem
                                        innerDivStyle={styles.innerDiv}
                                        primaryText={itemText}
                                        disableFocusRipple={disableFocusRipple}
                                        key={index}
                                    />),
                            });
                        }
                    }
                    break;

                default:
                // Do nothing
            }

            return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
        });

        this.requestsList = requestsList;

        const menu = open && requestsList.length > 0 && (
                <Menu
                    ref="menu"
                    autoWidth={false}
                    disableAutoFocus={focusTextField}
                    onEscKeyDown={this.handleEscKeyDown}
                    initiallyKeyboardFocused={true}
                    onItemClick={this.handleItemClick}
                    onMouseDown={this.handleMouseDown}
                    style={styles.menu}
                    listStyle={styles.list}
                    {...menuProps}
                >
                    {requestsList.map((i) => i.value)}
                </Menu>
            );

        return (
            <div style={prepareStyles(Object.assign(styles.root, style))} >
                <TextField
                    ref="searchTextField"
                    autoComplete="off"
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onKeyDown={this.handleKeyDown}
                    floatingLabelText={label}
                    hintText={hintText}
                    fullWidth={fullWidth}
                    multiLine={false}
                   inputStyle={Object.assign({},inputStyle, this.state.inputStyle)}
                    {...other}
                    // value and onChange are idiomatic properties often leaked.
                    // We prevent their overrides in order to reduce potential bugs.
                    value={searchText}
                    onChange={this.handleChange}
                />
                <Popover
                    style={Object.assign({}, styles.popover, popoverStyle)}
                    canAutoPosition={false}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    open={open}
                    anchorEl={anchorEl}
                    useLayerForClickAway={false}
                    onRequestClose={this.handleRequestClose}
                    popoverStyle={popoverStyle}
                    {...popoverOther}
                >
                    {menu}
                </Popover>
            </div>
        );
    }
}

AutoSuggest.levenshteinDistance = (searchText, key) => {
    const current = [];
    let prev;
    let value;

    for (let i = 0; i <= key.length; i++) {
        for (let j = 0; j <= searchText.length; j++) {
            if (i && j) {
                if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;
                else value = Math.min(current[j], current[j - 1], prev) + 1;
            } else {
                value = i + j;
            }
            prev = current[j];
            current[j] = value;
        }
    }
    return current.pop();
};

AutoSuggest.noFilter = () => true;

AutoSuggest.defaultFilter = AutoSuggest.caseSensitiveFilter = (searchText, key) => {
    return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoSuggest.caseInsensitiveFilter = (searchText, key) => {
    return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoSuggest.levenshteinDistanceFilter = (distanceLessThan) => {
    if (distanceLessThan === undefined) {
        return AutoSuggest.levenshteinDistance;
    } else if (typeof distanceLessThan !== 'number') {
        throw 'Error: AutoSuggest.levenshteinDistanceFilter is a filter generator, not a filter!';
    }

    return (s, k) => AutoSuggest.levenshteinDistance(s, k) < distanceLessThan;
};

AutoSuggest.fuzzyFilter = (searchText, key) => {
    const compareString = key.toLowerCase();
    searchText = searchText.toLowerCase();

    let searchTextIndex = 0;
    for (let index = 0; index < key.length; index++) {
        if (compareString[index] === searchText[searchTextIndex]) {
            searchTextIndex += 1;
        }
    }

    return searchTextIndex === searchText.length;
};

AutoSuggest.Item = MenuItem;
AutoSuggest.Divider = Divider;

export default AutoSuggest;
