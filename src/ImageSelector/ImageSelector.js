import React, { PropTypes } from 'react';
import { GridList, GridTile } from '../GridList/';
import BaseComponent from '../BaseComponent';
import { Map } from 'immutable';
import IconButton from 'dotin-material-ui/IconButton';
import CheckBoxOutline from 'dotin-material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckBox from 'dotin-material-ui/svg-icons/toggle/check-box';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  style: {
    margin: 2,
    cursor: 'pointer',
    borderRadius: 3,
  },
};

class ImageSelector extends BaseComponent {
  static propTypes = {
    /**
     * This property generally is used for Information of Images which includes:
     * The id is used for making it unique.
     * The caption is used for labeling images.
     * The src shows reference of images both string or base64.
     */
    imagesInfo: PropTypes.array(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string,
        src: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
      }),
    ),
    /**
     * The values use for reminding which picture is selected or will be removed from list.
     */
    value: PropTypes.array(PropTypes.string),
    /**
     * The onChange is a function for handling changes.
     */
    onChange: PropTypes.func,
    /**
     * The multiple is used for adding multi-select option.
     */
    multiple: PropTypes.bool,
  };
  that;
  static defaultProps = {
    multiple: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      stateValue: [],
      picked: Map(),
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    // this.handleOnChangeFunction = this.handleOnChangeFunction.bind(this);
  }

  isInArray(value, array) {
    return array.indexOf(value) > -1;
  }

  handleImageClick(image) {
      let newState = [];
      if (!this.isInArray(image.id, this.state.stateValue)) {
          newState = this.state.stateValue.concat(image.id);
          this.setState({ stateValue: newState });
          image.selected = true;
      }
      if (this.isInArray(image.id, this.state.stateValue)) {
            let index = this.state.stateValue.indexOf(image.id);
            this.state.stateValue.splice(index, 1);
          this.setState(prevState=> ({
              stateValue : this.state.stateValue
          }));
           newState = this.state.stateValue;
          image.selected = false;
      }

    if (this.props.onChange) this.props.onChange(newState);
  }

  render() {
    const { imagesInfo, multiple } = this.props;
    return (
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          {imagesInfo.map(image => (
            <GridTile
              key={image.id}
              title={image.caption}
              subtitle={<span>{image.caption}</span>}
              multiple={multiple}
              actionIcon={
                <IconButton onClick={this.handleImageClick.bind(this, image)}>
                    { image.selected ?
                        <CheckBox color="white" /> :
                        <CheckBoxOutline color="white" />
                    }
                </IconButton>
              }
              style={styles.style}
            >
              <img
                src={image.src}
                onClick={this.handleImageClick.bind(this, image)}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default ImageSelector;
