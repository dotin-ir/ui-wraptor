import React, {PropTypes} from "react";
import MUIDivider from "dotin-material-ui/Divider";
import BaseComponent from "../BaseComponent";


class Divider extends BaseComponent {
    static propTypes = {
        /**
         * If true, the `Divider` will be indented.
         */
        inset: PropTypes.bool,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object
    };

    static defaultProps = {
        inset: false
    };

    render() {
        
        const {
            style,
            inset,
        } = this.props;
        
        return <MUIDivider style={style} inset={inset}/>;
    }
}

export default Divider;
