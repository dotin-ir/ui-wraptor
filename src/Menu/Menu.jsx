import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIMenu from 'dotin-material-ui/Menu';
import propTypes from '../utils/propTypes';

class Menu extends BaseComponent {
    static propTypes = {

        /**
         * If true, the menu item will render with compact desktop styles.
         */
        desktop: PropTypes.bool,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The width of the menu. If not specified, the menu's width
         * will be set according to the widths of its children, using
         * proper keyline increments (64px for desktop, 56px otherwise).
         */
        width: propTypes.stringOrNumber,
    };

    static defaultProps = {
        desktop: true,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    render() {
        const {
            desktop,
            width,
            style,
            children,
        } = this.props
        return <MUIMenu desktop={desktop}
                        width={width}
                        style={style}
        >
            {children}
            </MUIMenu>
    }

}

export default Menu;