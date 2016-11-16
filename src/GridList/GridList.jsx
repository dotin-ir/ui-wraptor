import React, {PropTypes} from 'react';
import MUIGridList from 'dotin-material-ui/GridList';
import BaseComponent from '../BaseComponent';

class GridList extends BaseComponent {
  static propTypes = {
    /**
     * Number of px for one cell height.
     */
    cellHeight: PropTypes.number,
    /**
     * Grid Tiles that will be in Grid List.
     */
    children: PropTypes.node,
    /**
     * Number of columns.
     */
    cols: PropTypes.number,
    /**
     * Number of px for the padding/spacing between items.
     */
    padding: PropTypes.number,
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
        cols,
        padding,
        cellHeight,
        children,
        style,
    } = this.props;
    return (
        <MUIGridList cols={cols}
                     padding={padding}
                     cellHeight={cellHeight}
                     style={style}
       >
          {children}
        </MUIGridList>
    );
  }
}

export default GridList;
