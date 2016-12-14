import React, {PropTypes} from 'react';
import MUIToolbar from 'dotin-material-ui/Toolbar/Toolbar';
import ToolbarSeparator from 'dotin-material-ui/Toolbar/ToolbarSeparator';
import BaseComponent from '../BaseComponent';
import FontIcon from 'dotin-material-ui/FontIcon'
import ToolbarGroup from 'dotin-material-ui/Toolbar/ToolbarGroup'

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
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
    }

    render() {
        const {
            className,
            children,
            style,
        } = this.props;
        return (
            <MUIToolbar className={className}
                        style={style}
            >
                <ToolbarGroup>
                    {children.map((child) => {
                        if (child.name === 'ToolbarSeparator') {
                            return <ToolbarSeparator />;
                        } else if (child.name === 'FontIcon') {
                            return <FontIcon className={child.className}/>;
                        } else {
                            return null;
                        }
                    })}
                </ToolbarGroup>
            </MUIToolbar>
        );
    }
}

export default Toolbar;
