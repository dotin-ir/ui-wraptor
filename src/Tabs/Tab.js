import React, {Component, PropTypes} from 'react';
import MUTab from 'dotin-material-ui/Tabs/Tab';


class Tab extends Component {
  static muiName = 'Tab';

  static propTypes = {

    /**
     * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
     */
    icon: PropTypes.node,
    /**
     * @ignore
     */
    index: PropTypes.any,
    /**
     * Sets the text value of the tab item to the string specified.
     */
    label: PropTypes.node,

    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * @ignore
     * This property is overriden by the Tabs component.
     */
    onTouchTap: PropTypes.func,
    /**
     * If value prop passed to Tabs component, this value prop is also required.
     * It assigns a value to the tab so that it can be selected by the Tabs.
     */
    value: PropTypes.any,
    /**
     * @ignore
     * This property is overriden by the Tabs component.
     */
    width: PropTypes.string,
    /**
     * @ignore
     */
    index: PropTypes.any,

  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };



  render() {
    const {
      icon,
      label,
      style,
      children,
      onTouchTap,
      value,
      width,
      index,
      ...other,
    } = this.props;

    return (
        <MUTab icon={icon}
               label={label}
               style={style}
               onTouchTap={onTouchTap}
               value={value}
               width={width}
               index={index}
        >
          {children}
        </MUTab>
    );


  }
}

export default Tab;
