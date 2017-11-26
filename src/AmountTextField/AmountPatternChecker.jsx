import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import TextField from '../TextField'
import keycode from 'keycode';

class AmountPatternChecker extends BaseComponent{
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
        style: PropTypes.object,
        validate: PropTypes.func,
        errorText: PropTypes.node,
        onKeyDown: PropTypes.func,
        onEnter: PropTypes.func,
        className: PropTypes.string,
        defaultValue: PropTypes.any,
        disabled: PropTypes.bool,
        hintText: PropTypes.node,
        fieldPattern: PropTypes.any,
        hasStar: PropTypes.bool, //by pressing *, 000 will add to field
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown= this.handleKeyDown.bind(this)
        this.handleFocus= this.handleFocus.bind(this)
    }

    handleChange(e) {
        let value = e.target.value.replace(/,/g,'');

        if (value.search(this.props.fieldPattern) !== -1) this.props.onChange(value)
        else e.preventDefault();
    }

    handleKeyDown(e) {
        // add 000 at the end of the value after  pressing * btn
        if(keycode(e) == 'numpad *') {
            if(this.props.hasStar) {
                e.target.value += "000";
                this.handleChange(e)
            }
        }

        if(keycode(e) == 'left') e.preventDefault();
        if(keycode(e) == 'right') e.preventDefault();

        if (this.props.onKeyDown) this.props.onKeyDown(e.keyCode)
    }

    handleFocus(e) {
        this.el.selectionEnd = this.el.selectionStart = this.el.value.length;
    }

    render() {
        let {
            id,
            label,
            value,
            style,
            validate,
            errorText,
            onEnter,
            className,
            defaultValue,
            disabled,
            hintText,
        } = this.props

        return(
            <TextField
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                id={this.props.id}
                label={this.props.label}
                value={this.props.value}
                style={this.props.style}
                onEnter={this.props.onEnter}
                className={this.props.className}
                defaultValue={this.props.defaultValue}
                disabled={this.props.disabled}
                hintText={this.props.hintText}
                errorText={this.props.errorText}
                validate={this.props.validate}
            />
        )
    }
};

export default AmountPatternChecker;

