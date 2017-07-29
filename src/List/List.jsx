import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIList from 'dotin-material-ui/List';


class List extends BaseComponent {

    static propTypes = {
        /**
         * These are usually `ListItem`s that are passed to
         * be part of the list.
         */
        children: PropTypes.node,
    };

    render() {

        const {
            children,
        } = this.props;

        return <MUIList>
            {children}
            </MUIList>
    }

}

export default List;