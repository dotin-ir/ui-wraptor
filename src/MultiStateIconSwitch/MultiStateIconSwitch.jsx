import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';

const style ={
    rtl: {
        float: 'left',
    },
    ltr:{
        float: 'right',
    },
    icon:{
        display:'inline-block',
        margin:'10px 5px 5px',
        verticalAlign:'middle'
    }

};
class MultiStateIconSwitch extends BaseComponent {
    constructor(props, state) {
        super(props, state);
        this.state = {
            index: 0
        }
    }

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    indexChanger() {
        this.setState({index: this.state.index < this.props.children.length - 1 ? ++this.state.index : 0});
    }
    render() {
        return <div onClick={this.indexChanger.bind(this)} style={ style.icon }>
            {this.props.children[this.state.index]}
        </div>
    }
}
export default MultiStateIconSwitch;