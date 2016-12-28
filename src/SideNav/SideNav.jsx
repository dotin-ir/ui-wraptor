import React, {PropTypes} from "react";
import FontIcon from "dotin-material-ui/FontIcon";
import BaseComponent from "../BaseComponent";
import {List, ListItem} from "dotin-material-ui/List";

function hasNestedItems(navItem) {
    return navItem.subItems != null && navItem.subItems.length > 0;
}

function getIcon(navItem) {
    return navItem.fontIcon != null ? <FontIcon className={navItem.fontIcon}/> : <div></div>;
}

class SideNav extends BaseComponent {
    static propTypes = {
        showMini: PropTypes.bool,
        navTree: PropTypes.array,
        onClick: PropTypes.func,
        style: PropTypes.any,
    };

    static defaultProps = {
        navTree: [],
        showMini: false
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
        this.elementKey = 1;
    }

    render() {
        let navTree = this.props.navTree;
        let content = navTree.map((navItem) => this.createNavItemComponent(navItem, this.props.showMini));
        return <List style={this.props.style}>{content}</List>;
    }

    createNavItemComponent(navItem, showMini) {
        let nestedItems = [];
        if (navItem != null) {
            if (hasNestedItems(navItem)) {
                navItem.subItems.map((subItem) => {
                    nestedItems.push(this.createNavItemComponent(subItem, showMini));
                });
            }
        }
        return (
            <ListItem
                primaryText={showMini?null:navItem.caption}
                primaryTogglesNestedList={hasNestedItems(navItem)}
                onTouchTap={this.handleOnTouchTap.bind(this, navItem.url, navItem.urlData)}
                nestedItems={nestedItems}
                leftIcon={getIcon(navItem)}
                key={this.generateElementKey()}
                insetChildren={!showMini}
            />
            );
    }

    generateElementKey() {
        return 'main-menu-' + (++this.elementKey);
    }

    handleOnTouchTap(url, urlData) {
        this.props.onClick(url, urlData);
    }
}

export default SideNav;
