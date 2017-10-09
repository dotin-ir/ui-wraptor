import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import TextField from '../TextField'

const tabKeyCode = 9;
const deleteKeyCode = 46;
const backspaceKeyCode = 8;
const enterKeyCode = 13;
const homeKeyCode = 36;
const endKeyCode = 35;
const leftKeyCode = 37;
const upKeyCode = 38;
const rightKeyCode = 39;
const downKeyCode = 40;
const shiftKeyCode = 16;
const ctrlKeyCode = 17;
const madKeyCode = 221;
const starKeyCode = 106;

class RestrictedInput extends BaseComponent{
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.any,
        fieldPattern: PropTypes.any,
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func,
        style: PropTypes.any,

        /**
         * by pressing *, 000 will add to field
         */
        hasStar: PropTypes.bool,
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
        if(e.keyCode == starKeyCode) {
            if(this.props.hasStar) {
                e.target.value += "000";
                this.handleChange(e)
            }
        }

        if(e.keyCode == leftKeyCode) e.preventDefault();
        if(e.keyCode == rightKeyCode) e.preventDefault();

        if (this.props.onKeyDown) this.props.onKeyDown(e.keyCode)
    }

    handleFocus(e) {
        this.el.selectionEnd = this.el.selectionStart = this.el.value.length;
    }

    render() {
        let {onChange, onKeyDown, fieldPattern, ...rest} = this.props

        return(
            <TextField
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                {...rest}
            />
        )
    }
};

export default RestrictedInput;

