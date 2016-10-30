import React, {PropTypes} from "react";
import MUIDivider from "dotin-material-ui/Divider";
import BaseComponent from "../BaseComponent";


class Divider extends BaseComponent {
  static propTypes = {

    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
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
        children,
    } = this.props;
    return (
        <MUIDivider style={style}
        >
          {children}
        </MUIDivider>
    );
  }
}

export default Divider;
