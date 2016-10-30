import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIPaper from 'dotin-material-ui/Paper';

class Paper extends BaseComponent {
    static propTypes = {
        /**
         * Set to true to generate a circlular paper container.
         */
        circle: PropTypes.bool,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,

    };
    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    render() {
        const {
            children,
            circle,
            style,
        } = this.props;
        return <MUIPaper zDepth={1}
                         children={children}
                         circle={circle}
                         style={style}
        >
            {children}
         </MUIPaper>;
    }

}

export default Paper;