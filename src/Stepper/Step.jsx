import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import {Step as MuiStep} from 'dotin-material-ui/Stepper';

class Step extends BaseComponent {
    static propTypes = {
        /**
         * Should be `Step` sub-components such as `StepLabel`.
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
            <MuiStep style={style} {...other}>
                {children}
            </MuiStep>
        );
    }
}

export default Step;
