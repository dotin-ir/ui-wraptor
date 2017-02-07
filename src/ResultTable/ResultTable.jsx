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
        /**
         * If true, table rows can be selected.
         * If multiple row selection is desired, enable multiSelectable.
         * The default value is false.
         */
        selectable: PropTypes.bool,
        /**
         * If true, multiple table rows can be selected.
         * CTRL/CMD+Click and SHIFT+Click are valid actions.
         * The default value is false.
         */
        multiSelectable: PropTypes.bool,
        /**
         * Called when a row is selected.
         * selectedRows is an array of all row selections.
         * IF all rows have been selected, the string "all"
         * will be returned instead to indicate that all rows have been selected.
         */
        onRowSelection: PropTypes.func,
    };

    static defaultProps = {
        fromIndex: 1,
        selectable: false,
        multiSelectable: false,
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
            selectable,
            multiSelectable,
            onRowSelection,
        } = this.props;
        return (
            <Table fixedFooter={false}
                   fixedHeader={true}
                   selectable={selectable}
                   bodyStyle={visibleStyle}
                   wrapperStyle={visibleStyle}
                   multiSelectable={multiSelectable}
                   onRowSelection={onRowSelection}
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
                <TableBody displayRowCheckbox={selectable}
                           showRowHover={true}
                           stripedRows={false}
                           deselectOnClickaway={false}
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
        try {
            return key.split('.').reduce((acc, word) => {
                var segments = word.split('[');
                return segments.slice(1, segments.length).map((index) => {
                    return +index.substr(0, index.length - 1);
                }).reduce((acc, index) => {
                    return acc[index];
                }, acc[segments[0]]);
            }, row);
        }catch (e){
            return '';
        }
    }

}

export default ResultTable;
