import React, {PropTypes} from 'react';
import MUIToolbarSeparator from 'dotin-material-ui/Toolbar/ToolbarSeparator';
import BaseComponent from '../BaseComponent';

class ToolbarSeparator extends BaseComponent {
    static propTypes = {
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
    };

    render() {
        const {
            className,
            style,
        } = this.props;
        return (
            <MUIToolbarSeparator className={className}
                                 style={style}
            />
        );
    }
}

export default ToolbarSeparator;
