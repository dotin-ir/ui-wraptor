import React, {PropTypes} from 'react';
import MUIToolbar from 'dotin-material-ui/Toolbar/Toolbar';
import ToolbarSeparator from './ToolbarSeparator';
import BaseComponent from '../BaseComponent';

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
                {children.comments.map((child) => {
                    switch (child.name) {
                        case 'ToolbarSeparator' :
                            return <ToolbarSeparator />;
                        case 'FontIcon' :
                            return <FontIcon className={child.className} />;
                    }
                })}
            </MUIToolbar>
        );
    }
}

export default Toolbar;
