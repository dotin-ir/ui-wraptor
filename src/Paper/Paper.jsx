import React from 'react';
import BaseComponent from "../BaseComponent";
import MUIPaper from 'dotin-material-ui/Paper';

class Paper extends BaseComponent {
    static propTypes = {
        /**
         * Children passed into the paper element.
         */
        children: PropTypes.node,
        /**
         * Set to true to generate a circlular paper container.
         */
        circle: PropTypes.bool,
        /**
         * By default, the paper container will have a border radius.
         * Set this to false to generate a container with sharp corners.
         */
        rounded: PropTypes.bool,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Set to false to disable CSS transitions for the paper element.
         */
        transitionEnabled: PropTypes.bool,
        /**
         * This number represents the zDepth of the paper shadow.
         */
        zDepth: propTypes.zDepth,
    };

    render() {
        return <MUIPaper />;
    }

}

export default Paper;