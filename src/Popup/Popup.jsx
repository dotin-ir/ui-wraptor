import React, {PropTypes} from "react";
import BaseComponent from "../BaseComponent";
import Dialog from "dotin-material-ui/Dialog";
import FlatButton from 'dotin-material-ui/FlatButton';

class Popup extends BaseComponent {

    static propTypes = {
        title: PropTypes.string,
        closeCaption: PropTypes.string.isRequired,
        onBeforeClose: PropTypes.func,
        onClosing: PropTypes.func,
        onAfterClosed: PropTypes.func.isRequired,
        overlayVisible: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: true,
        };
    }

    handleClose() {
        if (this.props.onBeforeClose && this.props.onBeforeClose() === false) {
            return;
        }
        if (this.props.onClosing) {
            this.props.onClosing();
        }
        this.setState({open: false});
        this.props.onAfterClosed();
    }

    render() {
        const overlayStyle = this.props.overlayVisible ? {} : {
                backgroundColor: 'transparent'
            };
        return (
            <Dialog
                title={this.props.title}
                titleStyle={{fontSize: 18, lineHeight: '10px'}}
                actions={<FlatButton label={this.props.closeCaption} secondary={true}
                                     onTouchTap={this.handleClose.bind(this)}/>}
                modal={true}
                open={this.state.open}
                autoScrollBodyContent={true}
                autoDetectWindowHeight={true}
                overlayStyle={overlayStyle}
            >
                {this.props.children}
            </Dialog>
        );
    }
}

export default Popup;