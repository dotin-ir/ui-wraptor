import React from 'react';
import BaseComponent from '../BaseComponent';
import Tooltip from 'dotin-material-ui/internal/Tooltip';

var identifierStyle = {
    position: 'relative',
    width: "5px",
    height: "100%"
}

const tooltipStyle = {
    boxSizing: 'border-box',
    marginTop: '10px'
}


class TableRowIdentifier extends BaseComponent {
    constructor(props, state) {
        super(props, state);
        this.state = {
            hovered: false,
        }
    }

    mouseEnterHandler() {
        this.setState({hovered: true})
    }

    mouseLeaveHandler() {
        this.setState({hovered: false})
    }

    render() {
        const {
            rowIdentifierDefinitions,
            dataItem
        } = this.props;
        if(rowIdentifierDefinitions===undefined || rowIdentifierDefinitions == null)
            return null;

        var backgroundColor = null;
        var tooltip = null;
        rowIdentifierDefinitions.map((rowIdentifierDefinition)=> {
            if (this.getValue(dataItem, rowIdentifierDefinition.dataAddress) == rowIdentifierDefinition.dataValue) {
                backgroundColor = rowIdentifierDefinition.color;
                identifierStyle = Object.assign(identifierStyle, {backgroundColor: backgroundColor});
                if (rowIdentifierDefinition.tooltip != undefined && rowIdentifierDefinition.tooltip != '') {
                    tooltip = (<Tooltip label={rowIdentifierDefinition.tooltip }
                                        show={this.state.hovered}
                                        style={tooltipStyle}/>);
                }
            }
        })

        return ( <div onMouseEnter={this.mouseEnterHandler.bind(this)}
                      onMouseLeave={this.mouseLeaveHandler.bind(this)}
                      style={identifierStyle}
            >
                {tooltip}
            </div>
        )
    }

    getValue(row, key) {
        try {
            return key.split('.').reduce((acc, word) => {
                var segments = word.split('[');
                return segments.slice(1, segments.length).map((index) => {
                    return +index.substr(0, index.length - 1);
                }).reduce((acc, index) => {
                    return acc[index];
                }, acc[segments[0]]);
            }, row);
        } catch (e) {
            return '';
        }
    }
}
export default TableRowIdentifier;