import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import MuiStepLabel from 'dotin-material-ui/Stepper/StepLabel';


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

    render() {
        const {
            children,
            style,
        } = this.props;

        return (
            <MuiStepLabel style={style}>
                {children}
            </MuiStepLabel>
        );
    }
}

export default StepLabel;
