import React, {Component,
  PropTypes,
} from 'react';
import MUTabs from 'dotin-material-ui/Tabs'

class Tabs extends Component {
  static propTypes = {
    /**
     * Should be used to pass `Tab` components.
     */
    children: PropTypes.node,

    /**
     * Specify initial visible tab index.
     * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
     * `initialSelectedIndex` will revert back to default.
     * If `initialSlectedIndex` is set to any negative value, no tab will be selected intially.
     */
    initialSelectedIndex: PropTypes.number,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Called when the selected value change.
     */
    onChange: PropTypes.func,
  };


  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };


  render() {
    const {
      initialSelectedIndex,
      style,
      children,
      onChange,
      ...other,
    } = this.props;
    return (
        <MUTabs
            initialSelectedIndex={initialSelectedIndex}
            style={style}
            onChange={onChange}
        >
          {children}
        </MUTabs>
    );
  }
}

export default Tabs;
