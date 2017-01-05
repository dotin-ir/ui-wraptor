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


class Toolbar extends BaseComponent {
    static propTypes = {
        /**
         * A json containing `FontIcon`s that will be aliened in a `ToolbarGroup`.
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
    }

    generateElementKey() {
        return 'Toolbar-' + (++this.elementKey);
    }

    render() {
        const {
            className,
            children,
            style,
        } = this.props;

        const {width} = this.state.dimensions;
        const actionBarSize = children ? children.length * this.context.theme.baseTheme.spacing.iconSize * 2 : 0;
        const size = actionBarSize >= width ? 'small' : 'large';

        return <Measure
            onMeasure={(dimensions) => {
          this.setState({dimensions})
        }}
        >
            <div>
                { size === 'small' ? (
                    <IconMenu iconButtonElement={ <IconButton touch={true}> <MoreIcon /> </IconButton> }
                              useLayerForClickAway={true}
                    >
                        {children.map((child) => this.getMenuItem(size, child))}
                    </IconMenu>) : (
                    <MUIToolbar className={className}
                                style={Object.assign({backgroundColor: 'rgba(255,0,0,0)',}, style)}>
                        <ToolbarGroup>
                            {children.map((child) => this.getMenuItem(size, child))}
                        </ToolbarGroup>
                    </MUIToolbar>) }
            </div>
        </Measure>;
    }

    getMenuItem(menuSize, childData) {
        if (menuSize === 'small') {
            if (childData.name === 'Item') {
                return (
                    <MenuItem
                        primaryText={childData.tooltip}
                        leftIcon={childData.className ? <FontIcon className={childData.className} /> : (childData.icon ? childData.icon : null)}
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
                    {childData.className ? <FontIcon className={childData.className} /> : (childData.icon ? childData.icon : null)}
                </IconButton>;
            } else {
                return null;
            }
        }
    }
}

export default Toolbar;
