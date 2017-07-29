import React, {PropTypes} from 'react';
import TreeList from './TreeList'
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext }from 'react-dnd';

class Test extends React.Component {
    static propTypes = {
        listItems: PropTypes.array.isRequired,
        firstFile: PropTypes.number,
        searchBarCaption: PropTypes.string,
        selectable: PropTypes.bool,
        multiSelectable: PropTypes.bool,
        onDrop: PropTypes.func,
        onSelect: PropTypes.func,
    };

    constructor(props) {
        super(props)
        this.state = {
            activeListItem: props.firstFile,
            expandedListItems: [],
            searchTerm: '',
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.handleTouchTapInSearchMode = this.handleTouchTapInSearchMode.bind(this)
    }

    componentDidUpdate({}, prevState) {
        const {activeListItem} = this.state
        const {listItems} = this.props
        if (activeListItem !== prevState.activeListItem) {
            const expandedListItems = getAllParents(listItems[activeListItem], listItems, [])
            this.setState(Object.assign({}, this.state,{
                expandedListItems: expandedListItems
            }))
        }
    }

    handleSearch(searchTerm) {

        console.log(searchTerm)
        this.setState(Object.assign({}, this.state, {searchTerm: searchTerm}))
    }

    handleTouchTap(listItem, index) {
        if (listItem.children) {
            const indexOfListItemInArray = this.state.expandedListItems.indexOf(index)
            if  (indexOfListItemInArray === -1) {
                this.setState(Object.assign({}, this.state,{
                    expandedListItems: this.state.expandedListItems.concat([index])
                }))
            } else {
                let newArray = []
                newArray = newArray.concat(this.state.expandedListItems)
                newArray.splice(indexOfListItemInArray, 1)
                this.setState(Object.assign({}, this.state,{
                    expandedListItems: newArray
                }))
            }
        } else {
            this.setState(Object.assign({}, this.state,{
                activeListItem: index
            }))
        }
    }

    handleTouchTapInSearchMode(listItem, index) {
        if (!listItem.children) {
            const expandedListItems = getAllParents(listItem, this.props.listItems , [])

            this.setState(Object.assign({}, this.state,{
                activeListItem: index,
                expandedListItems,
                searchTerm: ''
            }))
        }
    }

    render() {
        const {expandedListItems, activeListItem, searchTerm} = this.state
        const {listItems, onDrop, onSelect} = this.props
        const {selectable, multiSelectable} = this.props
        const {searchBarCaption} = this.props

        return (
            <div>
                <TreeList
                    listItems={listItems}
                    contentKey={'title'}
                    haveSearchbar={true}
                    activeListItem={activeListItem}
                    expandedListItems={expandedListItems}
                    handleTouchTap={this.handleTouchTap}
                    handleTouchTapInSearchMode={this.handleTouchTapInSearchMode}
                    handleSearch={this.handleSearch}
                    searchTerm={searchTerm}
                    searchBarCaption = {searchBarCaption}
                    onDrop={onDrop}
                    onSelect={onSelect}
                    selectable = {selectable}
                    multiSelectable = {multiSelectable}
                >
                </TreeList>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Test);

function getAllParents(listItem, listItems, parents=[]) {
    if (listItem.parentIndex) {
        return getAllParents(listItems[listItem.parentIndex], listItems, parents.concat([listItem.parentIndex]))
    } else {
        return parents
    }
}