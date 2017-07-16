import React from "react";
import FontIcon from "dotin-material-ui/FontIcon";
import {List, ListItem} from "dotin-material-ui/List";

const style = {
    // maxHeight: this.props.windowHeight,
    overflowX: 'hidden',
    overflowY: 'auto',
    maxWidth: 250,
};

export function SideNav(props) {
    function createNavItemElements(navItems) {
        return navItems.map((navItem, i) => {
            return <ListItem
                        primaryText={navItem.caption}
                        primaryTogglesNestedList={Array.isArray(navItem.subItems) && navItem.subItems.length > 0}
                        onTouchTap={props.onSelect.bind(null, navItem)}
                        nestedItems={navItem.subItems && createNavItemElements(navItem.subItems)}
                        leftIcon={navItem.fontIcon && <FontIcon className={navItem.fontIcon}/>}
                        key={i}
                    />
        })
    }
    return <List style={style}>{createNavItemElements(props.navTree)}</List>
}

export default SideNav
