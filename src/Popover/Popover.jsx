import React, {PropTypes} from "react";
import propTypes from '../utils/propTypes';
import MUIPopover from "dotin-material-ui/Popover";
import BaseComponent from "../BaseComponent";


class Popover extends BaseComponent {
  static propTypes = {
    /**
     * This is the DOM element that will be used to set the position of the
     * popover.
     */
    anchorEl: PropTypes.object,
    /**
     * This is the point on the anchor where the popover's
     * `targetOrigin` will attach to.
     * Options:
     * vertical: [top, middle, bottom];
     * horizontal: [left, center, right].
     */
    anchorOrigin: propTypes.origin,
    
    /**
     * If true, the popover will hide when the anchor is scrolled off the screen.
     */
    autoCloseWhenOffScreen: PropTypes.bool,
    /**
     * Callback function fired when the popover is requested to be closed.
     *
     * @param {string} reason The reason for the close request. Possibles values
     * are 'clickAway' and 'offScreen'.
     */
    onRequestClose: PropTypes.func,
    /**
     * If true, the popover is visible.
     */
    open: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * This is the point on the popover which will attach to
     * the anchor's origin.
     * Options:
     * vertical: [top, middle, bottom];
     * horizontal: [left, center, right].
     */
    targetOrigin: propTypes.origin,

  };
  static contextTypes = {
    theme: PropTypes.object.isRequired
  };

  constructor(props, state) {
    super(props, state);
  }

  render() {
    const {
        style,
        anchorEl,
        anchorOrigin,
        targetOrigin,
        autoCloseWhenOffScreen,
        onRequestClose,
        open,
        children,
    } = this.props;

    return (
        <MUIPopover style={style}
                    anchorEl={anchorEl}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    autoCloseWhenOffScreen={autoCloseWhenOffScreen}
                    onRequestClose={onRequestClose}
                    open={open}

        >
          {children}
        </MUIPopover>
    );
  }
}

export default Popover;
