import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUICard from 'dotin-material-ui/Card';

class CardLayout extends BaseComponent {
    static propTypes = {
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
    };
    
    render() {
        const {
            children,
            style,
        } = this.props;
        return <MUICard children={children}
                         style={style}
        >
            {children}
        </MUICard>;
    }

}

export default CardLayout;