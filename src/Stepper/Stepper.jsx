import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import {Stepper as MuiStepper} from 'dotin-material-ui/Stepper';

class Stepper extends BaseComponent {

    static propTypes = {
        /**
         * Set the active step (zero based index). This will enable `Step` control helpers.
         */
        activeStep: PropTypes.number,
        /**
         * Should be two or more `<Step />` components
         */
        children: PropTypes.arrayOf(PropTypes.node),
        /**
         * Override the inline-style of the root element.
         */
        style: PropTypes.object,
    };

    render() {
        const {
            activeStep,
            children,
            style,
        } = this.props;

        return (
            <MuiStepper activeStep={activeStep}
                        style={style}>
                {children}
            </MuiStepper>
        );
    }
}

export default Stepper;
