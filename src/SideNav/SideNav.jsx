import React, {PropTypes} from 'react';
import Paper from 'dotin-material-ui/Paper';
import Menu from 'dotin-material-ui/Menu';
import MenuItem from 'dotin-material-ui/MenuItem';
import Divider from 'dotin-material-ui/Divider';
import FontIcon from 'dotin-material-ui/FontIcon';
import IconMenu from 'dotin-material-ui/IconMenu';
import IconButton from 'dotin-material-ui/IconButton';
import BaseComponent from "../BaseComponent";

import {List, ListItem} from 'dotin-material-ui/List';

// const FontIconStyle = {
//     margin: '10px 2px 0px 0px'
// };

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
        let content = navTree.map((navItem) => this.createNavItem(navItem, this.props.showMini));
        return <List style={this.props.style}>{content}</List>;
    }

    getIcon(navItem) {
        return navItem.fontIcon != null ? <FontIcon className={navItem.fontIcon}/> : <div></div>;
    }

    createNavItem(navItem, showMini) {
        let nestedItems = [];
        if (navItem != null) {
            if (navItem.subItems != null && navItem.subItems.length > 0) {
                navItem.subItems.map((subItem) => {
                    nestedItems.push(this.createNavItem(subItem, showMini));
                });
            }
        }
        return (
            <ListItem
                primaryText={showMini?null:navItem.caption}
                onTouchTap={this.handleOnTouchTap.bind(this,navItem.url,navItem.urlData)}
                nestedItems={nestedItems}
                leftIcon={this.getIcon(navItem)}
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
