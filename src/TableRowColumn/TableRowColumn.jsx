import React, {PropTypes} from 'react';
import Tooltip from 'dotin-material-ui/internal/Tooltip';
import MUITableRowColumn from 'dotin-material-ui/Table/TableRowColumn';

const tooltipStyle = {
    boxSizing: 'border-box',
    marginTop: '20px',
    zIndex:3000
}
const tableRowColumnStyle={
    position: "relative",
    whiteSpace: 'pre-line',
    overflow: "visible"
}

class TableRowColumn extends React.Component {
    static propTypes = {

        style: PropTypes.object,

        className: PropTypes.string,

        columnNumber: PropTypes.number,

        hoverable: PropTypes.bool,

        onClick: PropTypes.func,

        onHover: PropTypes.func,

        onHoverExit: PropTypes.func,

        tooltip: PropTypes.any,
    };


    constructor(props, state) {
        super(props, state);
        this.state = {
            hovered: false,
        }
    }

    mouseEnterHandler() {
        this.setState({hovered: true});
        this.props.onHover();
    }

    mouseLeaveHandler() {
        this.setState({hovered: false});
        this.props.onHoverExit();
    }

    render() {
        const {
            style,
            className,
            columnNumber,
            hoverable,
            onClick,
            tooltip,
            children
        } = this.props;

        return (
            <MUITableRowColumn
                style={Object.assign({},style,tableRowColumnStyle)}
                className={className}
                columnNumber={columnNumber}
                hoverable={hoverable}
                onClick={onClick}
                onHover={this.mouseEnterHandler.bind(this)}
                onHoverExit={this.mouseLeaveHandler.bind(this)}
            >
                {children}
                {children && tooltip ? <Tooltip label={tooltip }
                                                show={this.state.hovered}
                                                style={tooltipStyle}/> : undefined}
            </MUITableRowColumn>
        )
    }


}
export default TableRowColumn;