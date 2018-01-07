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
import ResultTableHeader from './ResultTableHeader';

const styles = {
    visibleStyle: {
        overflow: 'visible',
    },
    indexColumnStyle: {
        width: '52px',
        padding: 0,
    },
    identifierColumnStyle: {
        width: '5px',
        padding: 0
    },
    actionsWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    }
};

class ResultTable extends BaseComponent {

    static contextTypes = {
        theme: React.PropTypes.object.isRequired
    };
    static propTypes = {
        /**
         * A json containing data to be shown.
         */
        data: PropTypes.array,
        /**
         * A json defining columns of result table.
         */
        columnsDefinition: PropTypes.array,
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

        rowIdentifierDefinitions: PropTypes.array,

        /**
         * default color for table row identifier color
         */
        defaultColor: PropTypes.object,
        title: PropTypes.string,
        titleActions: PropTypes.array
    };

    static defaultProps = {
        fromIndex: 1,
        selectable: false,
        multiSelectable: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            columnsDefinition: this.props.columnsDefinition,
            data: this.props.data,
        }
        this.sortASCHandler = this.sortASCHandler.bind(this);
        this.sortDESCHandler = this.sortDESCHandler.bind(this);
        this.comparator = this.comparator.bind(this);
        this.sortDataASC = this.sortDataASC.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState(Object.assign(this.state,
            {
                data: newProps.data,
            }
        ))
    }

    comparator(dataAddress, rowOne, rowTwo) {
        var valOne = this.getValue(rowOne, dataAddress);
        var valTwo = this.getValue(rowTwo, dataAddress);
        return valOne < valTwo ? -1 : valOne > valTwo ? 1 : 0;
    }

    sortDataASC(columnDefinition) {
        return this.props.rawData.sort(this.comparator.bind(this, columnDefinition.dataAddress));
    }

    sortASCHandler(columnDefinition) {
        this.props.onSort(this.sortDataASC(columnDefinition));
    }

    sortDESCHandler(columnDefinition) {
        this.props.onSort(this.sortDataASC(columnDefinition).reverse());
    }

    columnSelectHandler(columnsDefinition) {
        this.setState(Object.assign(this.state, {
            columnsDefinition: columnsDefinition
        }))
    }

    onRowSelection(list) {
        const data = this.state.data.slice()
        let selectedRow = []

        if (typeof list === 'string') {
            if (list === 'none') {
                selectedRow = [];
            } else if (list === 'all') {
                selectedRow = data;
            }
        } else {
            if (list.length > 0) {
                list.map((selectedRowIndex) => {
                    data.map((row, rowIndex) => {
                        if (rowIndex == selectedRowIndex) {
                            selectedRow.push(row)
                        }
                    })
                })
            }
        }

        this.props.onRowSelection(selectedRow)
    }

    render() {
        const theme = this.context.theme,
            table = theme.table,
            tableRowColumn = theme.tableRowColumn,
            tableHeader = theme.tableHeader,
            tableHeaderColumn = theme.tableHeaderColumn;
        const tableRowColumnStyles = {
            borderWidth: tableRowColumn.borderWidth,
            borderStyle: tableRowColumn.borderStyle,
            borderColor: tableRowColumn.borderColor,
            textAlign: tableRowColumn.textAlign,
            height: tableRowColumn.height,
            fontSize : tableRowColumn.fontSize
        };
        const tableHeaderStyles = {
            borderBottomWidth: tableHeader.borderBottomWidth,
            borderBottomStyle: tableHeader.borderStyle,
            borderBottomColor: tableHeader.borderColor,
        };

        // const tableHeaderColumn = this.context.theme.tableHeaderColumn;
        const tableHeaderColumnStyles = {
            fontWeight: tableHeaderColumn.fontWeight,
            textAlign: tableHeaderColumn.textAlign,
            borderColor: tableHeaderColumn.borderColor,
            borderStyle: tableHeaderColumn.borderStyle,
            color: tableHeaderColumn.color,
            height: tableHeaderColumn.height,
            borderRadius: '0 0 0 0',
            borderBottomWidth: tableHeaderColumn.borderBottomWidth,
            borderTopWidth: tableHeaderColumn.borderWidth,
            borderRightWidth: tableHeaderColumn.borderWidth,
            borderLeftWidth: tableHeaderColumn.borderWidth
        };
        const tableStyles = {
            borderCollapse: table.borderCollapse
        };
        const actionText = theme.locale == 'fa-IR' ? 'رویدادها' : 'Actions';
        var i = 0;
        const {
            data,
            columnsDefinition,
            fromIndex,
            selectable,
            multiSelectable,
            rowIdentifierDefinitions,
            hasColumnFilter,
            defaultColor,
            title,
            titleActions
        } = this.props;
        var columnSelector = null;
        if (hasColumnFilter == true || hasColumnFilter == 'true')
            columnSelector = (
                <ColumnSelector columnsDefinition={columnsDefinition} onChange={this.columnSelectHandler.bind(this)}/>);
        return (
            <div>
                {title || titleActions ?
                    <ResultTableHeader title={title} actions={titleActions}/> : ''}
                <Table fixedFooter={false}
                       fixedHeader={true}
                       selectable={selectable}
                       bodyStyle={styles.visibleStyle}
                       wrapperStyle={styles.visibleStyle}
                       multiSelectable={multiSelectable}
                       onRowSelection={this.onRowSelection.bind(this)}
                       style={tableStyles}
                >
                    <TableHeader displaySelectAll={false}
                                 adjustForCheckbox={false}
                                 enableSelectAll={false}
                                 style={tableHeaderStyles}
                    >
                        <TableRow>
                            <TableHeaderColumn
                                style={Object.assign({}, tableHeaderColumnStyles, {
                                    borderRadius: '0 5px 0 0',
                                    width: !selectable ? styles.indexColumnStyle.width : '24px',
                                    padding: !selectable ? styles.indexColumnStyle.padding : '0 23px'
                                })}>
                                {columnSelector}
                            </TableHeaderColumn>
                            {
                                selectable ? <TableHeaderColumn
                                    style={Object.assign({}, tableHeaderColumnStyles, {
                                        width: styles.indexColumnStyle.width,
                                        padding: styles.indexColumnStyle.padding
                                    })}>
                                </TableHeaderColumn> : ''
                            }
                            {selectable}
                            {
                                rowIdentifierDefinitions ?
                                    <TableHeaderColumn style={Object.assign({}, tableHeaderColumnStyles, {
                                        width: '3px',
                                        padding: 0,
                                    })}/>
                                    :
                                    null
                            }
                            {this.state.columnsDefinition.map((columnDefinition) => this.createColumnHeader(columnDefinition, tableHeaderColumnStyles))}
                            <TableHeaderColumn
                                style={Object.assign({}, tableHeaderColumnStyles, {borderRadius: '5px 0 0 0'})}>
                                {actionText}
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={selectable}
                               showRowHover={true}
                               stripedRows={true}
                               deselectOnClickaway={false}
                    >
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn
                                    style={
                                        index < data.length - 1 ?
                                            Object.assign(styles.indexColumnStyle, tableRowColumnStyles) :
                                            Object.assign({}, tableRowColumnStyles, {
                                                borderRadius: '0 0 5px 0',
                                                width: styles.indexColumnStyle.width,
                                                padding: styles.indexColumnStyle.padding
                                            })}
                                >{index + fromIndex}</TableRowColumn>
                                {
                                    rowIdentifierDefinitions ?
                                        <TableRowColumn style={styles.identifierColumnStyle}>
                                            <TableRowIdentifier rowIdentifierDefinitions={rowIdentifierDefinitions}
                                                                defaultColor={defaultColor}
                                                                dataItem={row.dataItem}/>
                                        </TableRowColumn> :
                                        null
                                }

                                {this.state.columnsDefinition.map((columnDefinition) => {
                                        var text = this.getValue(row.dataItem, columnDefinition.dataAddress);
                                        return columnDefinition.present || columnDefinition.present === undefined ?
                                            <TableRowColumn key={i++} tooltip={text}
                                                            style={Object.assign({}, tableRowColumnStyles)}>
                                                {text}
                                            </TableRowColumn>
                                            : null
                                    }
                                )}

                                <TableRowColumn style={
                                    index < data.length - 1 ?
                                        Object.assign({}, tableRowColumnStyles, {
                                            padding: 0
                                        }):
                                        Object.assign({}, tableRowColumnStyles, {
                                            borderRadius: '0 0 0 5px',
                                            padding : 0
                                        })}

                                >
                                    {row.actionbarDefinition && row.actionbarDefinition.length > 0 ?
                                        <Actionbar children={row.actionbarDefinition}/> : null}
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }

    createColumnHeader(columnDefinition, columnStyles) {

        var i = 0;
        return (
            columnDefinition.present || columnDefinition.present === undefined ?
                <TableHeaderColumn key={i++}
                                   tooltip={columnDefinition.tooltip ? columnDefinition.tooltip : columnDefinition.name}
                                   style={columnStyles}>
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
        } catch (e) {
            return '';
        }
    }

}

export default ResultTable;
