import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIListItem from 'dotin-material-ui/List/ListItem';


class ListItem extends BaseComponent {

    static propTypes = {
        /**
         * If true, generate a nested-list-indicator icon when nested list
         * items are detected. Note that an indicator will not be created
         * if a `rightIcon` or `rightIconButton` has been provided to
         * the element.
         */
        autoGenerateNestedIndicator: PropTypes.bool,
        /**
         * Children passed into the `ListItem`.
         */
        children: PropTypes.node,
        /**
         * The element to use as the container for the ListItem. Either a string to
         * use a DOM element or a ReactElement. This is useful for wrapping the
         * ListItem in a custom Link component. If a ReactElement is given, ensure
         * that it passes all of its given props through to the underlying DOM
         * element and renders its children prop for proper integration.
         */
        containerElement: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]),
        /**
         * If true, the element will not be able to be focused by the keyboard.
         */
        disableKeyboardFocus: PropTypes.bool,
        /**
         * If true, the element will not be clickable
         * and will not display hover effects.
         * This is automatically disabled if either `leftCheckbox`
         * or `rightToggle` is set.
         */
        disabled: PropTypes.bool,
        /**
         * If true, the nested `ListItem`s are initially displayed.
         */
        initiallyOpen: PropTypes.bool,
        /**
         * If true, the children will be indented by 72px.
         * This is useful if there is no left avatar or left icon.
         */
        insetChildren: PropTypes.bool,
        /**
         * Use to control if the list item should render as keyboard focused.  If
         input autocomplete).
         */
        isKeyboardFocused: PropTypes.bool,
        /**
         * This is the `Avatar` element to be displayed on the left side.
         */
        leftAvatar: PropTypes.element,
        /**
         * This is the `Checkbox` element to be displayed on the left side.
         */
        leftCheckbox: PropTypes.element,
        /**
         * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
         */
        leftIcon: PropTypes.element,
        /**
         * An array of `ListItem`s to nest underneath the current `ListItem`.
         */
        nestedItems: PropTypes.arrayOf(PropTypes.element),
        /**
         * Controls how deep a `ListItem` appears.
         * This property is automatically managed, so modify at your own risk.
         */
        nestedLevel: PropTypes.number,
        /**
         * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
         *
         * @param {object} event `focus` or `blur` event targeting the `ListItem`.
         * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
         */
        onKeyboardFocus: PropTypes.func,
        /** @ignore */
        onMouseEnter: PropTypes.func,
        /** @ignore */
        onMouseLeave: PropTypes.func,
        /**
         * Callbak function fired when the `ListItem` toggles its nested list.
         *
         * @param {object} listItem The `ListItem`.
         */
        onNestedListToggle: PropTypes.func,
        /** @ignore */
        onTouchEnd: PropTypes.func,
        /** @ignore */
        onTouchStart: PropTypes.func,
        /** @ignore */
        onTouchTap: PropTypes.func,
        /**
         * Control toggle state of nested list.
         */
        open: PropTypes.bool,
        /**
         * This is the block element that contains the primary text.
         * If a string is passed in, a div tag will be rendered.
         */
        primaryText: PropTypes.node,
        /**
         * If true, clicking or tapping the primary text of the `ListItem`
         * toggles the nested list.
         */
        primaryTogglesNestedList: PropTypes.bool,
        /**
         * This is the `Avatar` element to be displayed on the right side.
         */
        rightAvatar: PropTypes.element,
        /**
         * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
         */
        rightIcon: PropTypes.element,
        /**
         * This is the `IconButton` to be displayed on the right side.
         * Hovering over this button will remove the `ListItem` hover.
         * Also, clicking on this button will not trigger a
         * ripple on the `ListItem`; the event will be stopped and prevented
         * from bubbling up to cause a `ListItem` click.
         */
        rightIconButton: PropTypes.element,
        /**
         * This is the `Toggle` element to display on the right side.
         */
        rightToggle: PropTypes.element,
        /**
         * This is the block element that contains the secondary text.
         * If a string is passed in, a div tag will be rendered.
         */
        secondaryText: PropTypes.node,
        /**
         * Can be 1 or 2. This is the number of secondary
         * text lines before ellipsis will show.
         */
        secondaryTextLines: PropTypes.oneOf([1, 2]),

    };


    render() {

        const {
            autoGenerateNestedIndicator,
            children,
            containerElement,
            disableKeyboardFocus,
            disabled,
            initiallyOpen,
            insetChildren,
            isKeyboardFocused,
            leftAvatar,
            leftCheckbox,
            leftIcon,
            nestedItems,
            nestedLevel,
            onKeyboardFocus,
            onMouseEnter,
            onMouseLeave,
            onNestedListToggle,
            onTouchEnd,
            onTouchStart,
            onTouchTap,
            open,
            primaryText,
            primaryTogglesNestedList,
            rightAvatar,
            rightIcon,
            rightIconButton,
            rightToggle,
            secondaryText,
            secondaryTextLines,
        } = this.props;

        return <MUIListItem autoGenerateNestedIndicator={autoGenerateNestedIndicator}
                            containerElement={containerElement}
                            disableKeyboardFocus={disableKeyboardFocus}
                            disabled={disabled}
                            initiallyOpen={initiallyOpen}
                            insetChildren={insetChildren}
                            isKeyboardFocused={isKeyboardFocused}
                            leftAvatar={leftAvatar}
                            leftCheckbox={leftCheckbox}
                            leftIcon={leftIcon}
                            nestedItems={nestedItems}
                            nestedLevel={nestedLevel}
                            onKeyboardFocus={onKeyboardFocus}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onNestedListToggle={onNestedListToggle}
                            onTouchEnd={onTouchEnd}
                            onTouchStart={onTouchStart}
                            onTouchTap={onTouchTap}
                            open={open}
                            primaryText={primaryText}
                            primaryTogglesNestedList={primaryTogglesNestedList}
                            rightAvatar={rightAvatar}
                            rightIcon={rightIcon}
                            rightIconButton={rightIconButton}
                            rightToggle={rightToggle}
                            secondaryText={secondaryText}
                            secondaryTextLines={secondaryTextLines}
            >
                {children}
            </MUIListItem>
    }
}

export default ListItem;
