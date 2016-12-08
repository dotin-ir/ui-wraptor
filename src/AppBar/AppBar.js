import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIAppBar from 'dotin-material-ui/AppBar';

class AppBar extends BaseComponent {

    static propTypes = {
        /**
         * Can be used to render a tab inside an app bar for instance.
         */
        children: PropTypes.node,
        /**
         * Applied to the app bar's root element.
         */
        className: PropTypes.string,
        /**
         * The classname of the icon on the left of the app bar.
         * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
         */
        iconClassNameLeft: PropTypes.string,
        /**
         * Similiar to the iconClassNameLeft prop except that
         * it applies to the icon displayed on the right of the app bar.
         */
        iconClassNameRight: PropTypes.string,
        /**
         * The custom element to be displayed on the left side of the
         * app bar such as an SvgIcon.
         */
        iconElementLeft: PropTypes.element,
        /**
         * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
         */
        iconElementRight: PropTypes.element,
        /**
         * Override the inline-styles of the element displayed on the left side of the app bar.
         */
        iconStyleLeft: PropTypes.object,
        /**
         * Override the inline-styles of the element displayed on the right side of the app bar.
         */
        iconStyleRight: PropTypes.object,
        /**
         * Callback function for when the left icon is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the left `IconButton`.
         */
        onLeftIconButtonTouchTap: PropTypes.func,
        /**
         * Callback function for when the right icon is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the right `IconButton`.
         */
        onRightIconButtonTouchTap: PropTypes.func,
        /**
         * Callback function for when the title text is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the `title` node.
         */
        onTitleTouchTap: PropTypes.func,
        /**
         * Determines whether or not to display the Menu icon next to the title.
         * Setting this prop to false will hide the icon.
         */
        showMenuIconButton: PropTypes.bool,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The title to display on the app bar.
         */
        title: PropTypes.node,
        /**
         * Override the inline-styles of the app bar's title element.
         */
        titleStyle: PropTypes.object,
    };

    render() {
        const {
            children,
            className,
            iconClassNameLeft,
            iconClassNameRight,
            iconElementLeft,
            iconElementRight,
            iconStyleLeft,
            iconStyleRight,
            onLeftIconButtonTouchTap, // eslint-disable-line no-unused-vars
            onRightIconButtonTouchTap, // eslint-disable-line no-unused-vars
            onTitleTouchTap, // eslint-disable-line no-unused-vars
            showMenuIconButton,
            style,
            title,
            titleStyle,
        } = this.props;


        return <MUIAppBar
            title={title}
            titleStyle={titleStyle}
            iconStyleLeft={iconStyleLeft}
            iconStyleRight={iconStyleRight}
            onTitleTouchTap={onTitleTouchTap}
            showMenuIconButton={showMenuIconButton}
            iconElementLeft={iconElementLeft}
            iconElementRight={iconElementRight}
            iconClassNameLeft={iconClassNameLeft}
            iconClassNameRight={iconClassNameRight}
            onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
            onRightIconButtonTouchTap={onRightIconButtonTouchTap}
            className={className}
            style={style}
        >
            {children}
        </MUIAppBar>;
    }
}

export default AppBar;
