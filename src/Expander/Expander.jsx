import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'
import Toolbar from "dotin-material-ui/Toolbar";
import ToolbarGroup from "dotin-material-ui/Toolbar";
import Paper from "dotin-material-ui/Paper";
import IconButton from "dotin-material-ui/IconButton";
import ToolbarTitle from "dotin-material-ui/Toolbar/ToolbarTitle";

export class Expander extends BaseComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        openTooltip: PropTypes.string,
        closeTooltip: PropTypes.string,
    };

    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    render() {

        const {
            closeTooltip,
            openTooltip,
            title,
            children
        } = this.props;

        let className = this.state.open ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
        let toolTip = this.state.open ? closeTooltip : openTooltip;
        let display = this.state.open ? 'inherit' : 'none';
        return (
            <Paper>
                <Toolbar onTouchTap={this.handleClick.bind(this)} style={{cursor: 'pointer'}}>
                    <ToolbarGroup noGutter={true} style={{backgroundColor: 'transparent'}}>
                        <IconButton
                            tooltip={toolTip}
                            onTouchTap={this.handleClick.bind(this)}
                            iconClassName={className}
                            iconStyle={{fontSize: 14}}
                        />
                        <ToolbarTitle text={title} style={{fontSize: 14}}/>
                    </ToolbarGroup>
                </Toolbar>
                <div style={{display: display}}>
                    <Paper>
                        {children}
                    </Paper>
                </div>
            </Paper>
        );
    }

}

export default Expander;