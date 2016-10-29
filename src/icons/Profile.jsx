import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import Icon from 'dotin-material-ui/svg-icons/social/person'

class Profile extends BaseComponent {
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

        return <Icon color={color} hoverColor={hoverColor} style={style} />;
    }

}

export default Profile;