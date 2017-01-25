import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIToggle from 'dotin-material-ui/Toggle';

class Toggle extends BaseComponent {

    static propTypes = {
        /**
         * Determines whether the Toggle is initially turned on.
         * **Warning:** This cannot be used in conjunction with `toggled`.
         * Decide between using a controlled or uncontrolled input element and remove one of these props.
         * More info: https://fb.me/react-controlled-components
         */
        defaultToggled: PropTypes.bool,
        /**
         * Will disable the toggle if true.
         */
        disabled: PropTypes.bool,
        /**
         * Overrides the inline-styles of the Toggle element.
         */
        elementStyle: PropTypes.object,
        /**
         * Overrides the inline-styles of the Icon element.
         */
        iconStyle: PropTypes.object,
        /**
         * Overrides the inline-styles of the input element.
         */
        inputStyle: PropTypes.object,
        /**
         * Label for toggle.
         */
        label: PropTypes.node,
        /**
         * Where the label will be placed next to the toggle.
         */
        labelPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * Overrides the inline-styles of the Toggle element label.
         */
        labelStyle: PropTypes.object,
        /**
         * Callback function that is fired when the toggle switch is toggled.
         */
        onToggle: PropTypes.func,
        /**
         * Override style of ripple.
         */
        rippleStyle: PropTypes.object,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Override style for thumb.
         */
        thumbStyle: PropTypes.object,
        /**
         * Override the inline styles for thumb when the toggle switch is toggled on.
         */
        thumbSwitchedStyle: PropTypes.object,
        /**
         * Toggled if set to true.
         */
        toggled: PropTypes.bool,
        /**
         * Override style for track.
         */
        trackStyle: PropTypes.object,
        /**
         * Override the inline styles for track when the toggle switch is toggled on.
         */
        trackSwitchedStyle: PropTypes.object,
        /**
         * ValueLink prop for when using controlled toggle.
         */
        valueLink: PropTypes.object,
    };

    render() {
        const {
            ...all
        } = this.props;

        return <MUIToggle {...all}/>
    }
}

export default Toggle;