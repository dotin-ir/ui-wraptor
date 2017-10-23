import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'
import MUIFlatButton from 'dotin-material-ui/FlatButton';


class FlatButton extends BaseComponent {
    static propsType = {
        backgroundColor:PropTypes.string,
        hoverColor:PropTypes.string,
        icon:PropTypes.element,
        keyboardFocused:PropTypes.bool,
        label:PropTypes.string,
        onClick:PropTypes.func,
        onTouchTap:PropTypes.func,
        primary:PropTypes.bool,
        secondary:PropTypes.bool,
        style:PropTypes.any,
        labelStyle:PropTypes.any
    };

    render() {
        return <MUIFlatButton
                backgroundColor={this.props.backgroundColor}
                hoverColor={this.props.hoverColor}
                icon={this.props.icon}
                keyboardFocused={this.props.keyboardFocused}
                label={this.props.label}
                onClick={this.props.onClick}
                onTouchTap={this.props.onTouchTap}
                primary={this.props.primary}
                secondary={this.props.secondary}
                style={this.props.style}
                labelStyle={this.props.labelStyle}
            />
    }
}

export default FlatButton;