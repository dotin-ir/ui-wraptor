import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import {defaultColor, successColor, infoColor, warningColor, dangerColor} from '../styles/colors'

class Text extends BaseComponent {
    static propTypes = {
        status : PropTypes.string,
        text : PropTypes.string
    }

    constructor(props, state) {
        super(props, state);
        this.state = {
            color: defaultColor,
        }
    }

    componentWillMount() {
        if(this.props.status == 'success') {
            this.setState({
                color : successColor
            })
        }
        else if(this.props.status == 'warning') {
            this.setState({
                color : warningColor
            })
        }
        else if(this.props.status == 'info') {
            this.setState({
                color : infoColor
            })
        }
        else if(this.props.status == 'danger') {
            this.setState({
                color : dangerColor
            })
        }
    }
    render() {
        let style = {
            fontSize: '14px',
            lineHeight: '22.5px',
            marginBottom: '11.3px',
            color: this.state.color,
        }

        return (
            <p style={style}>{this.props.text}</p>
        );
    }
}

export default Text;
