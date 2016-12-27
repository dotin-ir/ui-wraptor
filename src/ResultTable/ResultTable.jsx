import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import Table from 'dotin-material-ui/Table/Table';
import TableHeader from 'dotin-material-ui/Table/TableHeader';
import TableHeaderColumn from 'dotin-material-ui/Table/TableHeaderColumn';
import TableBody from 'dotin-material-ui/Table/TableBody';
import TableRow from 'dotin-material-ui/Table/TableRow';
import TableRowColumn from 'dotin-material-ui/Table/TableRowColumn';
import Actionbar from '../Toolbar/index'

const visibleStyle = {
    overflow: 'visible',
};

class ResultTable extends BaseComponent {
    static propTypes = {
        /**
         * A json containing data to be shown.
         */
        data: PropTypes.object,
        /**
         * A json defining columns of result table.
         */
        columnsDefinition: PropTypes.object,
        fromIndex: PropTypes.number,
    };

    static defaultProps = {
        fromIndex: 1,
    };
    
    
    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, state) {
        super(props, state);
    }

    render() {
        const {
            data,
            columnsDefinition,
            fromIndex,
        } = this.props;
        return (
            <Table fixedFooter={false}
                   fixedHeader={true}
                   selectable={false}
                   bodyStyle={visibleStyle}
                   wrapperStyle={visibleStyle}
            >
                <TableHeader displaySelectAll={false}
                             adjustForCheckbox={false}
                             enableSelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn />
                        {columnsDefinition.map((columnDefinition) => this.createColumnHeader(columnDefinition))}
                        <TableHeaderColumn />
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}
                           showRowHover={true}
                           stripedRows={false}
                >
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn>{index + fromIndex}</TableRowColumn>
                            {columnsDefinition.map((columnDefinition) =>
                                <TableRowColumn>{this.getValue(row.dataItem, columnDefinition.columnData)}</TableRowColumn>)}
                            <TableRowColumn style={visibleStyle}>
                                <Actionbar children={row.actionbarDefinition}/>
                            </TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }

    createColumnHeader(columnDefinition) {
        return (
            <TableHeaderColumn tooltip={columnDefinition.columnTooltip}>
                {columnDefinition.columnName}
            </TableHeaderColumn>
        );
    }

    getValue(row, key) {
        return key.split('.').reduce((acc, word) => {
            var segments = word.split('[');
            return segments.slice(1, segments.length).map((index) => {
                return +index.substr(0, index.length - 1);
            }).reduce((acc, index) => {
                return acc[index];
            }, acc[segments[0]]);
        }, row);
    }

}

export default ResultTable;
