import React, {PropTypes} from 'react';
import MUIToolbarTitle from 'dotin-material-ui/Toolbar/ToolbarTitle';
import BaseComponent from '../BaseComponent';


class ToolbarTitle extends BaseComponent {
    static propTypes = {
        style: any,
        className: PropTypes.string,
        text: PropTypes.string
    };

    render() {
        return (
            <MUIToolbarTitle
                style={this.props.style}
                className={this.props.className}
                text={this.props.text}
            />
        );
    }
}

export default ToolbarTitle;
