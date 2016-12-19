import React, {PropTypes} from 'react';
import MUIToolbar from 'dotin-material-ui/Toolbar/Toolbar';
import BaseComponent from '../BaseComponent';
import FontIcon from 'dotin-material-ui/FontIcon';
import ToolbarGroup from 'dotin-material-ui/Toolbar/ToolbarGroup';
import IconButton from 'dotin-material-ui/IconButton';
import IconMenu from 'dotin-material-ui/IconMenu';
import MenuItem from 'dotin-material-ui/MenuItem';
import MoreHorizIcon from 'dotin-material-ui/svg-icons/navigation/more-horiz';

class Toolbar extends BaseComponent {
    static propTypes = {
        /**
         * A json containing `FontIcon`s or `ToolbarSeparator`s that will be aliened in a `ToolbarGroup`.
         */
        children: PropTypes.object,
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Reflects the size of screen to behave responsive.
         */
        size: PropTypes.string,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
        this.elementKey = 1;
    }

    generateElementKey() {
        return 'Toolbar-' + (++this.elementKey);
    }

    render() {
        const {
            className,
            children,
            style,
            size,
        } = this.props;
        return ( size === 'small' ? (
            <IconMenu iconButtonElement={ <IconButton touch={true}> <MoreHorizIcon /> </IconButton> }>
                {children.map((child) => this.getMenuItem(size, child))}
            </IconMenu>) : (
            <MUIToolbar className={className} style={Object.assign({backgroundColor: 'white',}, style)}>
                <ToolbarGroup>
                    {children.map((child) => this.getMenuItem(size, child))}
                </ToolbarGroup>
            </MUIToolbar>) );
    }

    getMenuItem(menuSize, childData) {
        if (menuSize === 'small') {
            if (childData.name === 'Item') {
                return (
                    <MenuItem
                        primaryText={childData.tooltip}
                        leftIcon={<FontIcon className={childData.className} />}
                        key={this.generateElementKey()}
                        onTouchTap={childData.onTouchTap}
                    />
                );
            } else {
                return null;
            }
        } else {
            if (childData.name === 'Item') {
                return <IconButton tooltip={childData.tooltip} onTouchTap={childData.onTouchTap}
                                   key={this.generateElementKey()}>
                    <FontIcon className={childData.className}/>
                </IconButton>;
            } else {
                return null;
            }
        }
    }
}

export default Toolbar;
