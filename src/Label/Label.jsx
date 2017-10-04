/**
 * Check if a value is valid to be displayed inside a label.
 *
 * @param value: The value to check.
 * @returns boolean: True if the string provided is valid, false otherwise.
 */
import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'
import shallowEqual from 'recompose/shallowEqual';
import transitions from 'dotin-material-ui/styles/transitions';
import TextFieldLabel from 'dotin-material-ui/TextField/TextFieldLabel';
import TextFieldUnderline from 'dotin-material-ui/TextField/TextFieldUnderline';
import {blue500,orange500} from 'dotin-material-ui/styles/colors';
import warning from 'warning';
import Popover from "dotin-material-ui/Popover";
import {MenuItem, Paper, RaisedButton} from "dotin-material-ui";
import Menu from "../Menu/Menu";

const getStyles = (props, context, state) => {
    const {
        baseTheme,
        textField: {
            textColor,
            backgroundColor,
            errorColor,
        },
        palette: {
            secondaryTextColor,
        }
    } = context.theme;

    const styles = {
        root: {
            fontSize: 16,
            lineHeight: '24px',
            width: 256,
            height: (props.caption ? 72 : 48),
            display: 'inline-block',
            position: 'relative',
            backgroundColor: backgroundColor,
            fontFamily: baseTheme.fontFamily,
            transition: transitions.easeOut('200ms', 'height'),
            cursor: 'auto',
        },
        error: {
            position: 'relative',
            bottom: 0,
            fontSize: 11,
            lineHeight: '11px',
            color: errorColor,
            transition: transitions.easeOut(),
        },
        floatingLabel: {
            color: secondaryTextColor,
            pointerEvents: 'none',
        },
        label: {
            padding: 0,
            position: 'absolute',
            width: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: 'rgba(0,0,0,0)',
            color: textColor,
            cursor: 'inherit',
            font: 'inherit',
            marginTop: (props.caption ? 72 : 48) / 2,
        },
        more: {
            position: 'absolute',
            display:'block',
            width:'450px',
            wordWrap:'break-word',
            padding:'20px 20px',
            color: '#000',
            cursor: 'inherit',
            font: 'inherit',
            display: 'inline-block',
        },
    };

    styles.label.height = '100%';

    if (props.caption) {
        styles.label.boxSizing = 'border-box';

        if (state.errorText) {
            styles.error.bottom = -70;
        }
    }

    if (state.errorText) {
        styles.floatingLabel.color = styles.error.color;
    }

    return styles;
};

function isValid(value) {
    return value !== '' && value !== undefined && value !== null;
}


function createLauncher(value) {
    let array = value.split(" ");
    let candide = array[0];
    if (candide.length < 20) {
        return candide + "..."
    }
    else {
        return candide.substring(0, 20) + "...";
    }
}

class Label extends BaseComponent {
    static propTypes = {
        /**
         * The error content to display.
         */
        errorText: PropTypes.node,
        /**
         * The content to use for the floating label element.
         */
        caption: PropTypes.node,
        /**
         * The id prop for the label.
         */
        id: PropTypes.string,
        /**
         * The value of the text field.
         */
        value: PropTypes.any,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    componentWillMount() {
        const {
            caption,
            id,
        } = this.props;

        const propsLeaf = this.props;

        this.setState({
            isFocused: true,
            errorText: this.props.errorText,
            hasValue: isValid(propsLeaf.value),
        });

        warning(caption || id, `UI-Wraptor: We don't have enough information
      to build a robust unique id for the Label component. Please provide an id or a caption.`);

        const uniqueId = `${id}-${caption}-${
            Math.floor(Math.random() * 0xFFFF)}`;
        this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errorText !== this.props.errorText) {
            this.setState({
                errorText: nextProps.errorText,
            });
        }

        if (nextProps.hasOwnProperty('value')) {
            const hasValue = isValid(nextProps.value);

            this.setState({
                hasValue: hasValue,
            });
        }
    }

    handleMouseOver = (event) => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };


    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext)
        );
    }

    render() {
        const {
            caption,
            id,
            value,
            ...other
        } = this.props;

        const {prepareStyles} = this.context.theme;
        const styles = getStyles(this.props, this.context, this.state);
        const spanId = id || this.uniqueId;
        const errorTextElement = this.state.errorText && (
                <div style={prepareStyles(styles.error)}>
                    {this.state.errorText}
                </div>
            );

        const floatingLabelTextElement = caption && (
                <TextFieldLabel
                    muiTheme={this.context.theme}
                    style={styles.floatingLabel}
                    htmlFor={spanId}
                    shrink={true}
                    disabled={false}
                >
                    {caption}
                </TextFieldLabel>
            );

        const inputProps = {
            id: spanId,
            ref: (elem) => this.label = elem,
        };

        let isOverFlow = value.length > 33 && (typeof value) === 'string';
        let labelElement = isOverFlow ? (
            <span
                style={Object.assign(styles.label, {color:blue500, cursor:"help"})}
                {...other}
                {...inputProps}
                onMouseOver={this.handleMouseOver}
            >
                {createLauncher(value)}
            </span>
        ) : (
            <span
                style={styles.label}
                {...other}
                {...inputProps}
            >
                {value}
            </span>
        );


        const underlineStyle = isOverFlow ? {borderColor:blue500, borderBottom: "dashed 2px", cursor:"help"} : {};
        const {open,anchorEl} = this.state;
        return (
            <div
                style={prepareStyles(styles.root)}
            >
                {floatingLabelTextElement}
                {labelElement}
                <TextFieldUnderline
                    disabled={false}
                    error={!!this.state.errorText}
                    muiTheme={this.context.theme}
                    style = {underlineStyle}
                />
                {errorTextElement}
                {
                    open ?
                        <Popover
                            open={true}
                            anchorEl={anchorEl}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                            style={{marginTop:'-20px'}}
                            zDepth={5}
                        >
                            <Paper style={{
                                    minHeight: 250,
                                    width: 450,
                                }}
                            >
                                <span
                                    style={styles.more}
                                >
                                    {value}
                                </span>
                            </Paper>
                        </Popover>:null
                }
            </div>
        );
    }
}

export default Label;
