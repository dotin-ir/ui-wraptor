import React, {PropTypes} from 'react';
import MUIconButton from 'dotin-material-ui/IconButton'
import BaseComponent from '../BaseComponent';
import propTypes from '../utils/propTypes';

class IconButton extends BaseComponent {
  static propTypes = {
    /**
     * Can be used to pass a `FontIcon` element as the icon for the button.
     */
    children: PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,
    /**
     * If true, the element will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The CSS class name of the icon. Used for setting the icon with a stylesheet.
     */
    iconClassName: PropTypes.string,
    /**
     * Override the inline-styles of the icon element.
     */
    iconStyle: PropTypes.object,
    /**
     * Callback function fired when the element is focused or blurred by the keyboard.
     *
     * @param {object} event `focus` or `blur` event targeting the element.
     * @param {boolean} keyboardFocused Indicates whether the element is focused.
     */
    onKeyboardFocus: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * The text to supply to the element's tooltip.
     */
    tooltip: PropTypes.node,
    /**
     * The vertical and horizontal positions, respectively, of the element's tooltip.
     * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
     * "bottom-left", and "top-left".
     */
    tooltipPosition: propTypes.cornersAndCenter,
    /**
     * Override the inline-styles of the tooltip element.
     */
    tooltipStyles: PropTypes.object,
    onTouchTap: PropTypes.func,
  };

  static defaultProps = {
    autoWidth: false,
    disabled: false,
  };
  
  render() {
    const {
        children,
        className,
        disabled,
        iconClassName,
        iconStyle,
        onKeyboardFocus,
        style,
        tooltip,
        tooltipPosition,
        tooltipStyles,
        onTouchTap,
    } = this.props;
    return (
        <MUIconButton className={className}
                      disabled={disabled}
                      iconClassName={iconClassName}
                      iconStyle={iconStyle}
                      onKeyboardFocus={onKeyboardFocus}
                      style={style}
                      tooltip={tooltip}
                      tooltipPosition={tooltipPosition}
                      tooltipStyles={tooltipStyles}
                      onTouchTap={onTouchTap}
       >
          {children}
        </MUIconButton>
    );
  }
}

export default IconButton;
