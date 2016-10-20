import React, {PropTypes} from 'react';
import Paper from 'dotin-material-ui/Paper';
import Menu from 'dotin-material-ui/Menu';
import MenuItem from 'dotin-material-ui/MenuItem';
import Divider from 'dotin-material-ui/Divider';
import FontIcon from 'dotin-material-ui/FontIcon';
import IconMenu from 'dotin-material-ui/IconMenu';
import IconButton from 'dotin-material-ui/IconButton';
import BaseComponent from "../BaseComponent";

const PaperStyle = {
    display: 'inline-block',
    margin: '16px 10px 16px 10px'
};

const FontIconStyle = {
    margin: '10px 2px 0px 0px'
};

class DynamicMenu extends BaseComponent {

    static propTypes = {
        showMini: PropTypes.bool,
        menuData: PropTypes.shape({
            caption: PropTypes.string.isRequired,
            url: PropTypes.string,
            urlData: PropTypes.any,
            fontIcon: PropTypes.string,
            disabled: PropTypes.bool,
            subMenus: PropTypes.array
        }).isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        menuData: {},
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
        let menuData = this.props.menuData;
        let elm = [];
        for (let m in menuData) {
            if (menuData.hasOwnProperty(m)) {
                elm.push(this.createMenuItems(menuData[m], this.props.showMini));
                elm.push(<Divider key={this.generateElementKey()}/>);
            }
        }
        if (elm.length > 0) {
            elm.pop(); // remove last <Divider/>
        }
        return (
            <Paper style={PaperStyle}>
                <Menu>
                    {elm}
                </Menu>
            </Paper>
        );
    }

    createMenuItems(menuData, mini) {
        let elements = [];
        if (menuData != null) {
            let subMen = [];
            if (menuData.subMenus != null && menuData.subMenus.length > 0) {
                menuData.subMenus.map((sm) => {
                    subMen.push(this.createMenuItems(sm, false));
                });
            }
            if (mini) {
                elements.push(
                    <IconMenu iconButtonElement={<IconButton iconClassName={menuData.fontIcon != null ? menuData.fontIcon : null}/>}
                              style={{ padding: '8px 16px' }}
                              children={subMen.length > 0 ? subMen : null}
                              key={this.generateElementKey()}
                              useLayerForClickAway={true}
                              anchorOrigin={{horizontal: (this.context.theme.isRtl ? 'left' : 'right'), vertical: 'top'}}
                              targetOrigin={{horizontal: (this.context.theme.isRtl ? 'right' : 'left'), vertical: 'top'}}
                              onItemTouchTap={this.handleOnTouchTap.bind(this, menuData.url, menuData.urlData)}/>
                );
            }
            else {
                elements.push(
                    <MenuItem primaryText={menuData.caption}
                              menuItems={subMen.length > 0 ? subMen : null}
                              rightIcon={subMen.length > 0 ? <FontIcon className="fa fa-angle-right" style={FontIconStyle}/> : <div></div>}
                              leftIcon={menuData.fontIcon != null ? <FontIcon className={menuData.fontIcon}/> : <div></div>} key={this.generateElementKey()}
                              onTouchTap={this.handleOnTouchTap.bind(this, menuData.url, menuData.urlData)}/>
                );
            }
        }
        if (elements.length > 0) {
            return elements;
        }
        else {
            return null;
        }
    }

    generateElementKey() {
        return 'main-menu-' + (++this.elementKey);
    }

    handleOnTouchTap(url, urlData) {
        this.props.onClick(url, urlData);
    }

}

export default DynamicMenu;