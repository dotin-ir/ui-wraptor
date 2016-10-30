import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUICardHeader from 'dotin-material-ui/Card/CardHeader';

class CardHeader extends BaseComponent {
    static propTypes = {
        /**
         * Can be used to render a title in Card Header.
         */
        title: PropTypes.node,
        /**
         * Can be used to render a subtitle in Card Header.
         */
        subtitle: PropTypes.node,
        /**
         * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
         * If `avatar` is an `Avatar` or other element, it will be rendered.
         * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
         */
        avatar: PropTypes.node,        
    };

    render() {
        const {
            title,
            subtitle,
            avatar,
        } = this.props;
        return <MUICardHeader 
            title={title}
            subtitle={subtitle}
            avatar={avatar}
        />;
    }

}

export default CardHeader;