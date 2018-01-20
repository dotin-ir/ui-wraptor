import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIMenuItem from 'dotin-material-ui/MenuItem';

class MenuItem extends BaseComponent {
    static muiName = 'MenuItem';

    static propTypes = {
        /**
         * @ignore
         * If true, the menu item will render with compact desktop
         * styles.
         */
        desktop: PropTypes.bool,
        /**
         * If true, the menu item will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * The `SvgIcon` or `FontIcon` to be displayed on the left side.
         * leftIcon prop
         */
        icon: PropTypes.element,
        /**
         * Callback function fired when the menu item is touch-tapped.
         *
         * @param {object} event Click event targeting the menu item.
         */
        onClick: PropTypes.func,
        /**
         * `MenuItem` elements to nest within the menu item.
         */
        menuItems: PropTypes.node,
        /**
         * Can be used to render text within the menu item.
         *  primaryText prop
         */
        text: PropTypes.node,

        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The value of the menu item.
         */
        value: PropTypes.any,
    };

    static defaultProps = {
        desktop: true,
        disabled: false,
    };

    render() {
        const {
            desktop,
            disabled,
            icon,
            onClick,
            menuItems,
            primaryText,
            style,
            value,
            children,
        } = this.props;
        return <MUIMenuItem desktop={desktop}
                            disabled={disabled}
                            leftIcon={icon}
                            onClick={onClick}
                            menuItems={menuItems}
                            primaryText={primaryText}
                            style={style}
                            value={value}
        >
            {children}
            </MUIMenuItem>
    }

}

export default MenuItem;