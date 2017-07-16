import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import Table from 'dotin-material-ui/Table/Table';
import TableHeader from 'dotin-material-ui/Table/TableHeader';
import TableHeaderColumn from 'dotin-material-ui/Table/TableHeaderColumn';
import TableBody from 'dotin-material-ui/Table/TableBody';
import TableRow from 'dotin-material-ui/Table/TableRow';
import TableRowColumn from '../TableRowColumn/TableRowColumn';

import Actionbar from '../Toolbar/index';
import ColumnSelector from '../IconMultiSelectList/index';
import TableRowIdentifier from '../TableRowIdentifier/index';

import SortSwitch from "../SortColumnSwitch"


const styles = {
    visibleStyle: {
        overflow: 'visible',
    },
    indexColumnStyle: {
        width: '20px'
    },
    identifierColumnStyle: {
        width: '20px'
    }
}
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

        onSort: PropTypes.func,

        rowIdentifierDefinitions : PropTypes.object,
    };

    static defaultProps = {
        fromIndex: 1,
        selectable: false,
        multiSelectable: false,
    };

    constructor(props) {
        super(props);
        this.state={
            columnsDefinition: this.props.columnsDefinition,
        }
        this.sortASCHandler = this.sortASCHandler.bind(this);
        this.sortDESCHandler = this.sortDESCHandler.bind(this);
        this.comparator = this.comparator.bind(this);
        this.sortDataASC = this.sortDataASC.bind(this);
    }

    comparator(dataAddress, rowOne, rowTwo){
        var valOne = this.getValue(rowOne, dataAddress);
        var valTwo = this.getValue(rowTwo, dataAddress);
        return valOne < valTwo ? -1 : valOne > valTwo ? 1 : 0;
    }
    sortDataASC(columnDefinition){
        return this.props.rawData.sort(this.comparator.bind(this, columnDefinition.dataAddress));
    }
    sortASCHandler(columnDefinition){
        this.props.onSort(this.sortDataASC(columnDefinition));
    }
    sortDESCHandler(columnDefinition){
        this.props.onSort(this.sortDataASC(columnDefinition).reverse());
    }

    columnSelectHandler(columnsDefinition){
        this.setState(Object.assign(this.state,{
            columnsDefinition: columnsDefinition
        }))
    }

    render() {
        const {
            data,
            columnsDefinition,
            fromIndex,
            selectable,
            multiSelectable,
            onRowSelection,
            rowIdentifierDefinitions,
            hasColumnFilter
        } = this.props;
        var columnSelector = null;
        if (hasColumnFilter == true || hasColumnFilter == 'true')
            columnSelector = (
                <ColumnSelector columnsDefinition={columnsDefinition} onChange={this.columnSelectHandler.bind(this)}/>);
        return (
            <div>
            <Table fixedFooter={false}
                   fixedHeader={true}
                   selectable={selectable}
                   bodyStyle={styles.visibleStyle}
                   wrapperStyle={styles.visibleStyle}
                   multiSelectable={multiSelectable}
                   onRowSelection={onRowSelection}
            >
                <TableHeader displaySelectAll={false}
                             adjustForCheckbox={false}
                             enableSelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn style={styles.indexColumnStyle}>
                            {columnSelector}
                        </TableHeaderColumn>
                        {
                            rowIdentifierDefinitions ?
                                <TableHeaderColumn style={styles.identifierColumnStyle}/>
                                :
                                null
                        }
                        {this.state.columnsDefinition.map((columnDefinition) => this.createColumnHeader(columnDefinition))}
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
                            <TableRowColumn style={styles.indexColumnStyle}>{index + fromIndex}</TableRowColumn>
                            {
                                rowIdentifierDefinitions ?
                                    <TableRowColumn style={styles.identifierColumnStyle}>
                                        <TableRowIdentifier rowIdentifierDefinitions={rowIdentifierDefinitions} dataItem={row.dataItem}/>
                                    </TableRowColumn>:
                                    null
                            }

                            {this.state.columnsDefinition.map((columnDefinition) =>{
                                    var text = this.getValue(row.dataItem, columnDefinition.dataAddress);
                                    return columnDefinition.present || columnDefinition.present === undefined ?
                                        <TableRowColumn tooltip={text}>{text}</TableRowColumn>
                                    : null
                                }
                                )}

                            <TableRowColumn style={styles.visibleStyle} >
                                {row.actionbarDefinition && row.actionbarDefinition.length > 0 ? <Actionbar children={row.actionbarDefinition}/> : null}
                            </TableRowColumn>



                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </div>
        );
    }

    createColumnHeader(columnDefinition) {
        return (
        columnDefinition.present || columnDefinition.present === undefined ?
            <TableHeaderColumn tooltip={columnDefinition.tooltip ? columnDefinition.tooltip : columnDefinition.name}>
                {columnDefinition.name}
                {
                    columnDefinition.sortable ?
                        <SortSwitch ascHandler={this.sortASCHandler.bind(this, columnDefinition)}
                                    descHandler={this.sortDESCHandler.bind(this, columnDefinition)}/>
                        : null
                }
            </TableHeaderColumn>
            : null
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
