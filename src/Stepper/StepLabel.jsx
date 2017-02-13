import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import {StepLabel as MuiStepLabel} from 'dotin-material-ui/Stepper';


class StepLabel extends BaseComponent {
    propTypes = {
        /**
         * The label text node
         */
        children: PropTypes.node,
        /**
         * Override the inline-style of the root element.
         */
        style: PropTypes.object,
    };

    constructor(props, state) {
        super(props, state);
    }
    
    render() {
        const {
            children,
            style,
            ...other
        } = this.props;

        return (
            <MuiStepLabel style={style} {...other}>
                {children}
            </MuiStepLabel>
        );
    }
}

export default StepLabel;
