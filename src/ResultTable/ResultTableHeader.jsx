import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import Toolbar from '../Toolbar/index';

class ResultTableHeader extends BaseComponent {
    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    };

    static PropTypes = {
        title: PropTypes.string.isRequired,
        actions: PropTypes.array
    };

    render() {

        const {actions, title} = this.props;
        return (
            <div style={{justifyContent: 'space-between'}}>
                <Toolbar children={actions} title={title}/>
            </div>
        )
    }
}

export default ResultTableHeader;
