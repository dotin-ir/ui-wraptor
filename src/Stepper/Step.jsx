import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import MuiStep from 'dotin-material-ui/Stepper/Step';

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

    render() {
        const {
            children,
            style,
        } = this.props;

        return (
            <MuiStep style={style}>
                {children}
            </MuiStep>
        );
    }
}

export default Step;
