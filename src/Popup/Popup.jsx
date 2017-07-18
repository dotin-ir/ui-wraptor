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
        overlayVisible: PropTypes.bool,
    };

    constructor(props) {

        super();
        this.state = {
            open: true,
            actions: [<FlatButton label={props.closeCaption} secondary={true}
                                  onTouchTap={this.handleClose.bind(this)}/>],
            isInitial: false
        };
        this.defaultAction = [<FlatButton label={props.closeCaption} secondary={true}
                                          onTouchTap={this.handleClose.bind(this)}/>];
        this.initActionBar = this.initActionBar.bind(this);
    }

    initActionBar(actions) {
        if (!this.state.isInitial) {
            this.setState(
                {
                    actions: actions.concat(this.defaultAction),
                    isInitial: true
                }
            );
        }
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
    
    static childContextTypes = {
        initActionBar: PropTypes.func,
    };

    getChildContext() {
        return {initActionBar: this.initActionBar};
    }
    
    
    render() {
        const {
            children,
        } = this.props;
        
        const overlayStyle = this.props.overlayVisible ? {} : {
                backgroundColor: 'transparent'
        };  

        const upgradeChildren = React.Children.map(children, (child) => {
            return [
                React.cloneElement(child, child.props),
            ];
        });

        return (
            <Dialog
                title={this.props.title}
                titleStyle={{fontSize: 18, lineHeight: '10px'}}
                actions={this.state.actions}
                modal={true}
                open={this.state.open}
                autoScrollBodyContent={true}
                autoDetectWindowHeight={true}
                repositionOnUpdate={false}
                style={{paddingTop: 0}}
                contentStyle={{maxHeight: 'none', maxWidth: 'none'}}
                overlayStyle={overlayStyle}
            >
                {upgradeChildren}
            </Dialog>
        );
    }
}

export default Popup;