import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent"

export default class Provider extends BaseComponent {
    
    static propTypes = {
        local: PropTypes.string,
        timeZone: PropTypes.string
    };

    static childContextTypes = {
        local: PropTypes.string,
        timeZone: PropTypes.string
    };

    getChildContext() {
        return Object.assign({}, this.context, this.props);
    }
}