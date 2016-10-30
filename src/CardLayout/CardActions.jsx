import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUICardActions from 'dotin-material-ui/Card/CardActions';

class CardActions extends BaseComponent {
    
    static propTypes = {
    };

    render() {
        const {
            children
        } = this.props;
        return <MUICardActions>
            {children}
            </MUICardActions>;
    }

}

export default CardActions;