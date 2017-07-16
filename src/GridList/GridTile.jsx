import React, {PropTypes} from 'react';
import MUIGridTile from 'dotin-material-ui/GridList/GridTile';
import BaseComponent from '../BaseComponent';

class GridTile extends BaseComponent {
  static propTypes = {
    /**
     * Theoretically you can pass any node as children, but the main use case is to pass an img,
     * in whichcase GridTile takes care of making the image "cover" available space
     * (similar to background-size: cover or to object-fit:cover).
     */
    children: PropTypes.node,
    /**
     * Width of the tile in number of grid cells.
     */
    cols: PropTypes.number,
    /**
     * Height of the tile in number of grid cells.
     */
    rows: PropTypes.number,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  render() {
    const {
        cols,
        rows,
        style,
        children,
    } = this.props;
    return (
        <MUIGridTile cols={cols}
                     rows={rows}
                     style={style}
       >
          {children}
        </MUIGridTile>
    );
  }
}

export default GridTile;
