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
  static contextTypes = {
    theme: PropTypes.object.isRequired
  };

  constructor(props, state) {
    super(props, state);
  }

  render() {
    return (
        <MUIRaisedButton label={this.props.label}
                         disable={this.props.disable}
                         href={this.props.href}
                         onClick={this.props.onClick}
                         icon={this.props.icon}
                         labelPosition={this.props.labelPosition}
                         primary={this.props.primary}
                         secondary={this.props.secondary}
                         style={this.props.style}
        >
          {this.props.children}
        </MUIRaisedButton>
    );
  }
}

export default RaisedButton;
