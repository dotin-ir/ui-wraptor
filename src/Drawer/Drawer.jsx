import React, {PropTypes} from "react";
import BaseComponent from "../BaseComponent";
import MuiDrawer  from "dotin-material-ui/Drawer";

class Drawer extends BaseComponent {
    static propTypes = {
        children: PropTypes.node,
        disableSwipeToOpen: PropTypes.bool,
        docked: PropTypes.bool,
        open: PropTypes.bool,
        width: PropTypes.number,
        onRequestChange: PropTypes.any,
        style: PropTypes.any,
    };

    static defaultProps = {
        children: null,
        disableSwipeToOpen: false,
        docked: true,
        open: null,
        width: null,
        onRequestChange: null
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
    }

    render() {
        return (
            <MuiDrawer
                disableSwipeToOpen={this.props.disableSwipeToOpen}
                docked={this.props.docked}
                open={this.props.open}
                width={this.props.width}
                onRequestChange={this.props.onRequestChange}
                style={this.props.style}
            >
                {this.props.children}
            </MuiDrawer>
        );
    }

}

export default Drawer;
