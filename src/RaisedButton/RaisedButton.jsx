import React, {PropTypes} from "react";
import MUIRaisedButton from "dotin-material-ui/RaisedButton";
import BaseComponent from "../BaseComponent";


class RaisedButton extends BaseComponent {
  static propTypes = {
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     */
    href: PropTypes.string,

    onClick:PropTypes.func,
    /**
     * An icon to be displayed within the button.
     */
    icon: PropTypes.node,
    /**
     * The position of the button's label relative to the button's `children`.
     */
    labelPosition: PropTypes.oneOf([
      'before',
      'after',
    ]),
    /**
     * If true, the button will use the theme's primary color.
     */
    primary: PropTypes.bool,
    /**
     * If true, the button will use the theme's secondary color.
     * If both `secondary` and `primary` are true, the button will use
     * the theme's primary color.
     */
    secondary: PropTypes.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const {
        label,
        disabled,
        href,
        onClick,
        icon,
        labelPosition,
        primary,
        secondary,
        style,
        children,
    } = this.props;
    return (
        <MUIRaisedButton label={label}
                         disabled={disabled}
                         href={href}
                         onClick={onClick}
                         icon={icon}
                         labelPosition={labelPosition}
                         primary={primary}
                         secondary={secondary}
                         style={style}
        >
          {children}
        </MUIRaisedButton>
    );
  }
}

export default RaisedButton;
