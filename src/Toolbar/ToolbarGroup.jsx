import React, {PropTypes} from 'react';
import MUIToolbarGroup from 'dotin-material-ui/Toolbar/ToolbarGroup';
import BaseComponent from '../BaseComponent';

class ToolbarGroup extends BaseComponent {
    static propTypes = {
        /**
         * Can be any node or number of nodes.
         */
        children: PropTypes.node,
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
            style,
            children,
        } = this.props;
        return (
            <MUIToolbarGroup firstChild={true}
                             className={className}
                             style={style}
            >
                {children}
            </MUIToolbarGroup>
        );
    }
}

export default ToolbarGroup;
