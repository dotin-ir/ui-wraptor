import React from "react";
import {List, ListItem} from "dotin-material-ui/List";
import FontIcon from "dotin-material-ui/FontIcon";
import Dotin from "../icons/Dotin";
import BaseComponent from "../BaseComponent/BaseComponent";
import {Paper} from "dotin-material-ui";


class SideNav extends BaseComponent {
    constructor() {
        super();
        this.state = {
            itemData: {},
            OpenItems: {},
        };
        this.createNavItemElements = this.createNavItemElements.bind(this);
        this.isItemOpen = this.isItemOpen.bind(this);
        this.closeOrOpen = this.closeOrOpen.bind(this);
    }

    static  contextTypes = {
        theme: React.PropTypes.object.isRequired
    };
//-------------- close icon menu
    async handleNestedListToggle(navItem, level, data) {
        if (navItem.subItems && !data.state.open) {
            for (const key in navItem.subItems) {
                await   this.setState({
                    itemData: Object.assign({}, {[navItem.subItems[key]]: {open: false, level: level, isOpen: false}}),
                });
            }
        }
        else {
            let lastData = this.state.itemData;
            await this.setState({
                itemData: Object.assign({}, lastData, {
                    [navItem.key]: {
                        open: data.state.open,
                        level: level,
                        isOpen: data.state.open
                    }
                }),
            });
        }
//-------------- close menu
        for (const key of Object.keys(this.state.itemData)) {

            if (this.state.itemData[navItem.key] !== this.state.itemData[key] && this.state.itemData[key].level === 1 && this.state.itemData[key].isOpen === true) {
                await this.setState({
                    OpenItems: Object.assign({}, (level === 1 ? {
                        [navItem.key]: {
                            open: true,
                            level: level,
                            isOpen: true
                        }
                    } : {}), {[key]: {open: false, level: level, isOpen: false}}),
                });
            }
            else if (this.state.itemData && this.state.itemData["lastdata"]) {

            }
            else {
                let lastData = this.state.itemData;
                await this.setState({
                    itemData: Object.assign({}, {["lastdata"]: lastData}, {
                        [navItem.key]: {
                            open: data.state.open,
                            level: level,
                            isOpen: data.state.open
                        }
                    }),
                });
            }
        }
    }

    isItemOpen(navItem) {
        if (this.state.itemData[navItem.key]) {
            if (this.state.OpenItems[navItem.key] && this.state.OpenItems[navItem.key].level === 1) {
                return (this.state.itemData[navItem.key].open && this.state.OpenItems[navItem.key].open);
            }
            return (this.state.itemData[navItem.key].open );
        }
        return false;
    }

    closeOrOpen(navItem) {

        if (this.state.OpenItems[navItem.key] && Object.keys(this.state.OpenItems).length >= 2) {
            if (this.state.itemData && this.state.itemData[navItem.key]) {

                return (this.state.OpenItems[navItem.key].isOpen && this.state.itemData[navItem.key].isOpen);
            }


            return (this.state.OpenItems[navItem.key].isOpen);
        }

        return null;
    }


    createNavItemElements(navItems, level) {
        level++;
        const theme = this.context.theme;
        return navItems.map((navItem, i) => {
            return <ListItem
                primaryText={navItem.caption}
                primaryTogglesNestedList={Array.isArray(navItem.subItems) && navItem.subItems.length > 0}
                onClick={!navItem.subItems ? this.props.onSelect.bind(null, navItem) : ()=>{}}
                onNestedListToggle={this.handleNestedListToggle.bind(this, navItem, level)}
                nestedItems={navItem.subItems && this.createNavItemElements(navItem.subItems, level)}
                leftIcon={level >= 3 && <FontIcon style={{
                    marginTop: "5px",
                    color: (level === 1 ? '#fff' : (level === 2 ? theme.sideNav.fontColor.level2 : theme.sideNav.fontColor.level3) ),
                    top: "15px",
                    fontSize: 12,
                    width: "10px"
                }} className={level === 3 ? 'fa fa-check-circle' : (level === 4 ? 'fa fa-check-circle-o' : '')}/>}
                open={this.closeOrOpen(navItem)}
                rightIcon={navItem.subItems && <FontIcon style={{
                    color: theme.sideNav.fontColor.level2,
                    fontSize: theme.sideNav.leftIconStyle.fontSize,
                    fontWeight: theme.sideNav.leftIconStyle.fontWeight
                }} className={this.isItemOpen(navItem) ? 'fa fa-minus' : 'fa fa-plus'}/>}
                key={i}
                innerDivStyle={{paddingLeft: "33px"}}
                nestedListStyle={{
                    backgroundColor: theme.sideNav.menuContainer.backgroundColor,
                    borderLeft: (level === 1 ? theme.sideNav.nestedListStyle.borderLeftLevel1 : theme.sideNav.nestedListStyle.notBorderLeftLevel1),
                    paddingLeft: (level === 1 ? theme.sideNav.nestedListStyle.paddingLeftLevel1 : (level === 2 ? theme.sideNav.menuContainer.paddingLeftLevel2 : theme.sideNav.menuContainer.paddingLeftLevel3 ))
                }}
                style={{
                    color: (level === 1 ? theme.sideNav.fontColor.level1 : (level === 2 ? theme.sideNav.fontColor.level2 : theme.sideNav.fontColor.level3) ),
                    fontSize: (level === 1 ? theme.sideNav.fontSize.level1 : (level === 2 ? theme.sideNav.fontSize.level2 : theme.sideNav.fontSize.level3) ),
                    fontWeight: theme.sideNav.listStyle.fontWeight,
                    paddingBottom: theme.sideNav.listStyle.paddingBottom,
                    paddingTop: theme.sideNav.listStyle.paddingTop
                }}
            />
        });
    }

    render() {

        const theme = this.context.theme;
        const menuContainer = {
            backgroundColor: theme.sideNav.nestedListStyle.backgroundColor,
            height: theme.sideNav.menuContainer.height,
            overflow: theme.sideNav.menuContainer.overflow
        };
        const companyBrandContainer = {
            height: theme.sideNav.companyBrandContainer.height,
            display: theme.sideNav.companyBrandContainer.display,
            position: theme.sideNav.companyBrandContainer.position,
            backgroundColor: theme.sideNav.companyBrandContainer.backgroundColor,
            overflow: theme.sideNav.companyBrandContainer.overflow
        };
        const brandNameContainer = {
            float: theme.sideNav.brandNameContainer.float,
            height: theme.sideNav.brandNameContainer.height,
            marginLeft: theme.sideNav.brandNameContainer.marginLeft,
            marginTop: theme.sideNav.brandNameContainer.marginTop,
            backgroundColor: theme.sideNav.brandNameContainer.backgroundColor,
            marginRight: theme.sideNav.brandNameContainer.marginRight
        };
        const companyName = {
            color: theme.sideNav.companyName.brandColor,
            fontSize: theme.sideNav.companyName.fontSize,
            display: theme.sideNav.companyName.display,
            right: theme.sideNav.companyName.right,
            top: theme.sideNav.companyName.top,
        };
        const companyLogoContainer = {
            float: theme.sideNav.companyLogoContainer.float,
            backgroundColor: theme.sideNav.companyLogoContainer.backgroundColor
        };
        const companyLogo = {
            fontSize: theme.sideNav.companyLogo.fontSize,
            width: theme.sideNav.companyLogo.width,
            height: theme.sideNav.companyLogo.height,
            top: theme.sideNav.companyLogo.top,
            marginLeft: theme.sideNav.companyLogo.marginLeft
        };
        const listMenuContainer = {
            height: theme.sideNav.listMenuContainer.height,
            width: theme.sideNav.listMenuContainer.width,
            overflow: theme.sideNav.listMenuContainer.overflow,
            position: theme.sideNav.listMenuContainer.position,
            backgroundColor: theme.sideNav.listMenuContainer.backgroundColor
        };
        const listMenuNoScroll = {
            position: theme.sideNav.listMenuNoScroll.position,
            top: theme.sideNav.listMenuNoScroll.top,
            bottom: theme.sideNav.listMenuNoScroll.top,
            right: theme.sideNav.listMenuNoScroll.right,
            left: theme.sideNav.listMenuNoScroll.left,
            overflowY: theme.sideNav.listMenuNoScroll.overflowY,
            backgroundColor: theme.sideNav.listMenuNoScroll.backgroundColor
        };
        const menuListStyle = {
            backgroundColor: theme.sideNav.menuListStyle.backgroundColor
        };

        return (
            <div>
                <Paper style={menuContainer }>
                    <div>
                        <Paper style={companyBrandContainer}>
                            <Paper style={brandNameContainer}>
                                <p style={companyName}>شرکت داتیس</p>
                                <p style={companyName}>آریــن قشــم</p>
                            </Paper>
                            <Paper style={companyLogoContainer}>
                                <Dotin style={companyLogo}/>
                            </Paper>
                        </Paper>
                    </div>
                    <Paper style={listMenuContainer}>
                        <Paper style={listMenuNoScroll}>
                            <List style={menuListStyle}>{this.createNavItemElements(this.props.navTree, 0)}</List>
                        </Paper>
                    </Paper>

                </Paper>
            </div>
        );
    }
}


export default SideNav;
