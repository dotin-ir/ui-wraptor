import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import SvgIcon from 'dotin-material-ui/SvgIcon'

class Routine extends BaseComponent {
    static propTypes = {
        /**
         * This is the fill color of the Dollar icon.
         * If not specified, this component will default
         * to color provided by the ThemeProvider.
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
    };

    render() {
        const {
            color,
            hoverColor,
            style
        } = this.props;

        return <SvgIcon color={color} hoverColor={hoverColor} style={style}> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> </SvgIcon>;
    }

}

export default Routine;