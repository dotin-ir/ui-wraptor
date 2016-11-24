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
        onClick: PropTypes.func
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
        return <List>{content}</List>;
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
        // if (showMini) {
        //     elements.push(
        //         <IconMenu iconButtonElement={<IconButton iconClassName={navigationCategory.fontIcon != null ? navigationCategory.fontIcon : null}/>}
        //                   style={{ padding: '8px 16px' }}
        //                   children={subMen.length > 0 ? subMen : null}
        //                   key={this.generateElementKey()}
        //                   useLayerForClickAway={true}
        //                   anchorOrigin={{horizontal: (this.context.theme.isRtl ? 'left' : 'right'), vertical: 'top'}}
        //                   targetOrigin={{horizontal: (this.context.theme.isRtl ? 'right' : 'left'), vertical: 'top'}}
        //                   onItemTouchTap={this.handleOnTouchTap.bind(this, navigationCategory.url, navigationCategory.urlData)}/>
        //     );
        // } else {
        //     elements.push(
        //         <MenuItem primaryText={navigationCategory.caption}
        //                   menuItems={subMen.length > 0 ? subMen : null}
        //                   rightIcon={subMen.length > 0 ? <FontIcon className="fa fa-angle-right" style={FontIconStyle}/> : <div></div>}
        //                   leftIcon={navigationCategory.fontIcon != null ? <FontIcon className={navigationCategory.fontIcon}/> : <div></div>} key={this.generateElementKey()}
        //                   onTouchTap={this.handleOnTouchTap.bind(this, navigationCategory.url, navigationCategory.urlData)}/>
        //     );
        // }
        return (
            <ListItem
                primaryText={showMini?null:navItem.caption}
                nestedItems={nestedItems}
                leftIcon={this.getIcon(navItem)}
                key={this.generateElementKey()}
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
