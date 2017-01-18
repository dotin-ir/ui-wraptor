import React, {PropTypes} from "react";
import BaseComponent from "../BaseComponent";
import ReactImage from 'react-images';
import MUIconButton from 'dotin-material-ui/IconButton'
import DisplayImageIcon from 'dotin-material-ui/svg-icons/image/photo';


class DisplayImage extends BaseComponent {
    
    static propsTypes = {
        /**
         * Maximum width of the carousel; defaults to 1024px
         */
        width: PropTypes.number,
        /**
         * images list to display
         */
        images: PropTypes.array,

    }
    
    constructor(props,state){
        super(props,state);
        this.state= {
            iOpen : false
        };
        this.onTouchTap = this.onTouchTap.bind(this);
        this.closeImage = this.closeImage.bind(this);
    }

    onTouchTap() {
        this.setState({
            isOpen : true
        });
    }

    closeImage() {
        this.setState({
            isOpen : false
        });
    }   

    render() {
        const {
            images,
            width,
        } = this.props;
        return <div>
            <MUIconButton
                onTouchTap={this.onTouchTap}
            >
                <DisplayImageIcon />
            </MUIconButton>
            <ReactImage
                
                images={images}
                width={width}
                isOpen={this.state.isOpen}
                onClose={this.closeImage}
            />
            </div>
    }
}
export default DisplayImage;