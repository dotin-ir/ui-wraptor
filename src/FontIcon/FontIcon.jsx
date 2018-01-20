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
        onClick: PropTypes.func,
    };

    render() {
        const {
            color,
            hoverColor,
            style,
            className,
            onClick
        } = this.props;
        return (
            <MUFontIcon color={color}
                        hoverColor={hoverColor}
                        style={style}
                        className={className}
                        onClick={onClick}
            />
        );
    }
}

export default FontIcon;
