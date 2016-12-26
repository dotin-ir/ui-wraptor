
import React, {PropTypes} from 'react';
import BaseCompnent from '../BaseComponent'
import MUICircularProgress from 'dotin-material-ui/CircularProgress';


class CircularProgress extends BaseCompnent {

    static propTypes = {
        /**
         * Override the progress's color.
         */
        color: PropTypes.string,
        /**
         * Style for inner wrapper div.
         */
        innerStyle: PropTypes.object,
        /**
         * The max value of progress, only works in determinate mode.
         */
        max: PropTypes.number,
        /**
         * The min value of progress, only works in determinate mode.
         */
        min: PropTypes.number,
        /**
         * The mode of show your progress, indeterminate
         * for when there is no value for progress.
         */
        mode: PropTypes.oneOf(['determinate', 'indeterminate']),
        /**
         * The diameter of the progress in pixels.
         */
        size: PropTypes.number,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Stroke width in pixels.
         */
        thickness: PropTypes.number,
        /**
         * The value of progress, only works in determinate mode.
         */
        value: PropTypes.number,
    };

    render() {
        return <MUICircularProgress
            color={this.props.color}
            innerStyle={this.props.innerStyle}
            max={this.props.max}
            min={this.props.min}
            mode={this.props.mode}
            size={this.props.size}
            style={this.props.style}
            thickness={this.props.thickness}
            value={this.props.value}
        />
    }

}

export default CircularProgress;