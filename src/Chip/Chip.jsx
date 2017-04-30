import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIChip from 'dotin-material-ui/Chip';

class Chip extends BaseComponent {

    static propTypes = {
        /**
         * Override the background color of the chip.
         */
        backgroundColor: PropTypes.string,
        /**
         * Used to render elements inside the Chip.
         */
        children: PropTypes.node,
        /**
         * CSS `className` of the root element.
         */
        className: PropTypes.node,
        /**
         * Override the label color.
         */
        labelColor: PropTypes.string,
        /**
         * Override the inline-styles of the label.
         */
        labelStyle: PropTypes.object,
        /**
         * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
         * @param {object} event `touchTap` event targeting the element.
         */
        onRequestDelete: PropTypes.func,
        /**
         * Callback function fired when the `Chip` element is touch-tapped.
         *
         * @param {object} event TouchTap event targeting the element.
         */
        onTouchTap: PropTypes.func,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
    };

    render() {
        const {
            backgroundColor,
            children,
            className,
            labelColor,
            labelStyle,
            onRequestDelete,
            onTouchTap,
            style,
        } = this.props;
        return <MUIChip
                backgroundColor={backgroundColor}
                className={className}
                labelColor={labelColor}
                labelStyle={labelStyle}
                onRequestDelete={onRequestDelete}
                onTouchTap={onTouchTap}
                style={style}
            >
            {children}
        </MUIChip>
    }
}

export default Chip;