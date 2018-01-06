import React, {PropTypes} from 'react';
import MUIToolbar from 'dotin-material-ui/Toolbar/Toolbar';
import BaseComponent from '../BaseComponent';
import FontIcon from 'dotin-material-ui/FontIcon';
import ToolbarGroup from 'dotin-material-ui/Toolbar/ToolbarGroup';
import IconButton from 'dotin-material-ui/IconButton';
import IconMenu from 'dotin-material-ui/IconMenu';
import MenuItem from 'dotin-material-ui/MenuItem';
import MoreIcon from 'dotin-material-ui/svg-icons/navigation/more-vert';
import Measure from 'react-measure';
import {ToolbarTitle } from 'dotin-material-ui/Toolbar/index';


class Toolbar extends BaseComponent {
    titleBar;
     size;
    actionBarSize;

    static propTypes = {
        /**
         * A json containing `FontIcon`s that will be aliened in a `ToolbarGroup`.
         */
        children: PropTypes.array,
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        title: PropTypes.string
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    state = {
        dimensions: {
            width: -1,
            height: -1
        }
    };

    constructor(props, state) {
        super(props, state);
        this.elementKey = 1;
        this.checkTitleSize = this.checkTitleSize.bind(this);
    }

    generateElementKey() {
        return 'Toolbar-' + (++this.elementKey);
    }

    checkTitleSize(){
        const titleSize = this.titleBar._reactInternalInstance._renderedComponent._hostNode.clientWidth;
        this.actionBarSize +=titleSize;
        this.size = this.actionBarSize >= this.state.dimensions.width ? 'small' : 'large';
    }
    render() {
        const {
            className,
            children,
            title
        } = this.props;

        const {width} = this.state.dimensions;
        this.actionBarSize = children ? children.length * this.context.theme.spacing.iconSize * 2 : 0 ;
         this.size = this.actionBarSize >= width ? 'small' : 'large';
        return <Measure
            onMeasure={(dimensions) => {
          this.setState({dimensions})
        }}
        >
            <MUIToolbar className={className}
                        style={Object.assign({},this.context.theme.toolbar)}
             >
                {
                    title ?
                            <ToolbarGroup ref={(titleBar)=>this.titleBar = titleBar}>
                                <ToolbarTitle text={title} style={{color:'#222'}}/>
                            </ToolbarGroup> : null
                }
                {
                    this.titleBar !== null && this.titleBar !== undefined ? this.checkTitleSize() : ''
                }
                {
                    this.size === 'small'
                    ?
                    (<IconMenu
                        iconButtonElement={<IconButton touch={true}> <MoreIcon/> </IconButton>}
                        useLayerForClickAway={true}
                    >
                        {children.map((child) => this.getMenuItem(this.size, child))}
                    </IconMenu>)
                    :
                    (
                        <ToolbarGroup>
                            {children.map((child) => this.getMenuItem(this.size, child))}
                        </ToolbarGroup>
                    )
                }
            </MUIToolbar>
        </Measure>;
    }

    getMenuItem(menuSize, childData) {
        const theme = this.context.theme ,
            itemStyles = theme.resultTableActionMenu.itemStyles ,
            iconStyles = theme.resultTableActionMenu.iconStyles,
            innerDivStyle = theme.resultTableActionMenu.innerDivStyle;

        //TODO remove item and element
        if (menuSize === 'small') {
            // if (childData.name === 'Item') {
            return (
                <MenuItem
                    primaryText={childData.tooltip}
                    leftIcon={childData.className ?
                        <FontIcon className={childData.className}  style={iconStyles}/> : (childData.icon ? childData.icon : null)}
                    key={this.generateElementKey()}
                    onTouchTap={childData.onTouchTap}
                    style={itemStyles}
                    innerDivStyle={innerDivStyle}
                />
            );
            // }
            // else if (childData.name === 'Element') {
            //     return (
            //         <MenuItem
            //             primaryText={childData.tooltip}
            //             key={this.generateElementKey()}
            //         >
            //             {childData.element}
            //         </MenuItem>
            //     );
            // }
            // else {
            //     return null;
            // }
        } else {
            // if (childData.name === 'Item') {
            return <IconButton tooltip={childData.tooltip} onTouchTap={childData.onTouchTap}
                               key={this.generateElementKey()}>
                {childData.className ?
                    <FontIcon className={childData.className}/> : (childData.icon ? childData.icon : null)}
            </IconButton>;
            // }
            // else if (childData.name === 'Element') {
            //     return (childData.element);
            // } else {
            //     return null;
            // }
        }
    }
}

export default Toolbar;
