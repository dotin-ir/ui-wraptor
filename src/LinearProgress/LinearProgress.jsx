
import React, {PropTypes} from 'react';
import BaseCompnent from '../BaseComponent'
import MUILinearProgress from 'dotin-material-ui/LinearProgress';

class LinearProgress extends BaseCompnent {

    static propTypes = {
        /**
         * The color of the progress bar, defaults to
         * primary color of theme.
         */
        color: PropTypes.string,
        /**
         * The max value of progress, only works in determinate mode.
         */
        max: PropTypes.number,
        /**
         * The min value of progress, only works in determinate mode.
         */
        min: PropTypes.number,
        /**
         * The mode of show your progress, indeterminate for when
         * there is no value for progress.
         */
        mode: PropTypes.oneOf(['determinate', 'indeterminate']),
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The value of progress, only works in determinate mode.
         */
        value: PropTypes.number,
    };

    render() {
        return <MUILinearProgress
            color={this.props.color}
            max={this.props.max}
            min={this.props.min}
            mode={this.props.mode}
            style={this.props.style}
            value={this.props.value}
        />
    }

}

export default LinearProgress;