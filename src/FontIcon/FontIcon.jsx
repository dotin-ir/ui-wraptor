import React, {PropTypes} from 'react';
import MUFontIcon from 'dotin-material-ui/FontIcon'
import BaseComponent from '../BaseComponent';

class FontIcon extends BaseComponent {
    static propTypes = {
        /**
         * This is the font color of the font icon. If not specified,
         * this component will default to muiTheme.palette.textColor.
         */
        color: PropTypes.string,
        /**
         * This is the icon color when the mouse hovers over the icon.
         */
        hoverColor: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
    }

    render() {
        const {
            color,
            hoverColor,
            style,
            className,
        } = this.props;
        return (
            <MUFontIcon color={color}
                        hoverColor={hoverColor}
                        style={style}
                        className={className}
            />
        );
    }
}

export default FontIcon;
