
import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'
import MUIDialog from 'dotin-material-ui/Dialog';



class Dialog extends BaseComponent {
    static propsType = {
        title:PropTypes.string,
        actions:PropTypes.any,
        modal:PropTypes.bool,
        open:PropTypes.bool,
        onRequestClose:PropTypes.func
    };

    render() {
        return <MUIDialog
            title={this.props.title}
            actions={this.props.actions}
            modal={this.props.modal}
            open={this.props.open}
            onRequestClose={this.props.onRequestClose}
        >
            {this.props.children}
        </MUIDialog>
    }
}

export default Dialog;