import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ListItem from './TreeListItem'
import TextField from 'dotin-material-ui/TextField'
import IconMenu from 'dotin-material-ui/IconMenu';
import MenuItem from 'dotin-material-ui/MenuItem';
import IconButton from 'dotin-material-ui/IconButton';
import MoreVertIcon from 'dotin-material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'dotin-material-ui/FontIcon';
import Paper from 'dotin-material-ui/Paper';

class TreeList extends BaseComponent {

    static propTypes = {
        listItems: PropTypes.array.isRequired,
        contentKey: PropTypes.string.isRequired,
        style: PropTypes.object,
        expandedListItems: PropTypes.array,
        activeListItem: PropTypes.number,
        handleTouchTap: PropTypes.func,
        handleTouchTapInSearchMode: PropTypes.func,
        handleSearch: PropTypes.func,
        listHeight: PropTypes.number,
        useFolderIcons: PropTypes.bool,
        haveSearchbar: PropTypes.bool,
        searchTerm: PropTypes.string,
        searchBarCaption: PropTypes.string,
        onDrop: PropTypes.func,
        selectable: PropTypes.bool,
        multiSelectable: PropTypes.bool,
        onSelect: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            expandedListItems: [],
            activeListItem: null,
            searchTerm: '',
            selectedListItems: [],
            selectedListItem: {},
            checked: false,
        }

        this.searchMode = false
        this.handleTouchTap = this.handleTouchTap.bind(this)
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleTouchTap(listItem, index) {
        if (this.searchMode) {
            if (!listItem.children) {
                this.setState({
                    activeListItem: index
                })
            }
        } else {
            if (listItem.children) {
                const indexOfListItemInArray = this.state.expandedListItems.indexOf(index)
                if  (indexOfListItemInArray === -1) {
                    this.setState({
                        expandedListItems: this.state.expandedListItems.concat([index])
                    })
                } else {
                    let newArray = [].concat(this.state.expandedListItems)
                    newArray.splice(indexOfListItemInArray, 1)
                    this.setState({
                        expandedListItems: newArray
                    })
                }
            } else {
                this.setState({
                    activeListItem: index
                })
            }
        }

        if (this.searchMode && this.props.handleTouchTapInSearchMode) this.props.handleTouchTapInSearchMode(listItem, index)
        if (!this.searchMode && this.props.handleTouchTap) this.props.handleTouchTap(listItem, index)
    }

    handleMouseOver(e, listItem) {

        listItem.hasRightIcon = true;
        this.forceUpdate();
    }

    handleMouseOut(e, listItem) {

        listItem.hasRightIcon = false;
        // this.forceUpdate();
    }

    async handleCheck(listItem, isItemChecked){
        listItem.singleChecked = isItemChecked
        listItem.multipleChecked = isItemChecked

        let selectedItems = []
        let selectedItem = {}

        const {listItems, multiSelectable} = this.props
        const {selectedListItems, selectedListItem} = this.state

        if(multiSelectable){
            if(isItemChecked){
                listItem.checked = true;
                selectedItems.push(listItem)
            }
            if(selectedListItems.length > 0){
                const _selectedListItems = selectedListItems.slice();
                if(selectedItems.length > 0){
                    selectedItems = _selectedListItems.concat(selectedItems)
                }
                if(!isItemChecked) {
                    listItem.checked = false;
                    _selectedListItems.map((item, index) => {
                        if(item.id == listItem.id ){
                            delete _selectedListItems[index]
                            selectedItems = _selectedListItems
                        }
                    })
                }
            }
            await this.setState({
                selectedListItems: selectedItems
            })
            this.props.onSelect(this.state.selectedListItems)
        }
        else{
            if(isItemChecked) {

                listItems.map((item) => {
                    if(item.singleChecked) {
                        item.checked = true;
                        listItem.singleChecked= false;
                        selectedItem = item
                    }
                    else{
                        item.checked = false;
                    }
                })
            }else{
                listItem.checked = false;
            }
            await this.setState({
                selectedListItem: selectedItem
            })
            this.props.onSelect(this.state.selectedListItem)
        }
    }

    handleValueChanges(e, value) {
        this.setState({
            searchTerm: value,
        })
    }

    render() {

        const {children, listItems, contentKey} = this.props
        const style = (this.props.style) ? this.props.style : {}
        const startingDepth = (this.props.startingDepth) ? this.props.startingDepth : 1
        const expandedListItems = (this.props.expandedListItems) ? this.props.expandedListItems : this.state.expandedListItems
        const activeListItem = (this.props.activeListItem) ? this.props.activeListItem : this.state.activeListItem
        const listHeight = (this.props.listHeight) ? this.props.listHeight : '48px'
        const {haveSearchbar, handleSearch, searchBarCaption} = this.props
        const {selectedListItem, selectedListItems} = this.state
        const {selectable, multiSelectable} = this.props
        if(selectedListItem) {
            listItems.map((item) => {
                if(selectedListItem.id == item.id) {
                    item.checked = true;
                }
            })
        }

        if(selectedListItems.length > 0) {
            selectedListItems.map((selectedItem) => {
                listItems.map((item) => {
                    if(selectedItem.id == item.id) {
                        item.checked = true;
                    }
                })
            })

        }

        let listItemsModified = listItems.map((listItem, i, inputArray) => {
                listItem._styles ={
                    root: {
                        paddingRight: (listItem.depth - startingDepth + 1) * 20,
                        fontWeight: ((listItem.children) ? listItem.children.length > 0 : 300 ) ? 400 : 300,
                        height: listHeight,
                        color: (listItem.active == false) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.87)',
                        overflow: 'hidden',
                        transform: 'translateZ(0)'
                    }
                }
                return listItem
            })
        const searchTerm = (this.props.searchTerm) ? this.props.searchTerm : this.state.searchTerm
        if (searchTerm) {
            this.searchMode = true
            listItemsModified = listItemsModified
                .map(tagListItemsWithSearchTerm(searchTerm))
                .map((listItem, i, inputArray) => {
                    listItem._shouldRender = (listItem.searchMatched || childIsTaggedWithSearch(listItem, inputArray))
                    // highlighting search terms
                    if (listItem.highlight) {
                        const left = listItem[contentKey].substring(0, listItem.highlight[0])
                        const middle = listItem[contentKey].substring(listItem.highlight[0], listItem.highlight[0] + listItem.highlight[1])
                        const right = listItem[contentKey].substring(listItem.highlight[0] + listItem.highlight[1])
                        listItem._primaryText = <span>{left}<span style={{display: 'inline-block', backgroundColor: 'rgba(255,235,59,0.5)', padding: '3px'}}>{middle}</span>{right}</span>
                    } else {
                        listItem._primaryText = listItem[contentKey]
                    }
                    return listItem
                })
        } else {
            this.searchMode = false
            listItemsModified = listItemsModified
                .map((listItem, i) => {
                    listItem._shouldRender = (listItem.depth >= startingDepth && parentsAreExpanded(listItem))
                    listItem._primaryText = listItem[contentKey]
                    return listItem
                })
        }

        // JSX: array of listItems
        const listItemsJSX = listItemsModified.map((listItem, i) => {
                if (listItem._shouldRender) {
                    return (
                        <div>
                            <ListItem
                                checked = {listItem.checked ? listItem.checked : false}
                                refs= {'treeListItem-'}
                                key={'treeListItem-' + i}
                                listItem= {listItem}
                                onDrop = {this.props.onDrop}
                                primaryText={listItem._primaryText}
                                style={Object.assign({}, listItem._styles.root)}
                                leftIcon={getLeftIcon(listItem, i, expandedListItems)}
                                rightIcon={(listItem.hasRightIcon)? getRightIcon(listItem) : null}
                                selectable = {selectable}
                                multiSelectable = {multiSelectable}
                                onTouchTap={()=> {
                                    this.handleTouchTap(listItem, i)
                                }}
                                onMouseOver={(e)=> {
                                    this.handleMouseOver(e,listItem, i)
                                }}
                                onMouseOut={(e)=> {
                                    this.handleMouseOut(e, listItem, i)
                                }}
                                onCheck={(e,isChecked)=> {
                                    this.handleCheck(listItem,isChecked)
                                }}
                            >
                            </ListItem>
                        </div>
                    )
                } else {
                    return null
                }
            })

        // styles for entire wrapper
        const styles = {
            root: {
                padding: 0,
                paddingBottom: 8,
                paddingTop: (children) ? 0 : 8,
            }
        }

        return (
            <Paper>
                <div style={Object.assign({}, styles.root, style)}>
                    {children}
                    {haveSearchbar &&
                    <form
                        style={{padding: '0px 16px'}}
                        onSubmit={(e) => {
                            console.log(searchTerm)
                            e.preventDefault()
                            if (handleSearch) {
                                handleSearch(document.getElementById('searchfield').value)
                            } else {
                                this.setState({searchTerm: document.getElementById('searchfield').value})
                            }
                            document.getElementById('searchfield').value = ''
                        }}>
                        <TextField
                            hintText= {searchBarCaption}
                            fullWidth={true}
                            id={'searchfield'}
                            onChange = {this.handleValueChanges.bind(this)}/>
                    </form>}
                    <ReactCSSTransitionGroup transitionName="tree-list" transitionEnterTimeout={300} transitionLeaveTimeout={150}>
                        {listItemsJSX}
                    </ReactCSSTransitionGroup>
                </div>
            </Paper>
        )

        function getLeftIcon(listItem, index, expandedListItems) {
            const icons = {
                leftIconCollapsed: <i style={{height: 16, width: 16, color: '#AAAAAA'}} className="fa fa-caret-left" />,
                leftIconExpanded: <i style={{height: 16, width: 16, color: '#AAAAAA'}} className="fa fa-caret-down" />
            }
            if (icons) {
                if (listItem.children) {
                    if (listItem.children.length > 0) {
                        if (expandedListItems.indexOf(index) === -1) {
                            return icons.leftIconCollapsed
                        } else {
                            return icons.leftIconExpanded
                        }
                    }
                }
            }
        }

        function getRightIcon(listItem) {
            if (listItem.actionBarDefinition && listItem.actionBarDefinition.length > 0) {
                return  <IconMenu style={{display: 'inline-flex', verticalAlign: 'middle'}}
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    {
                        listItem.actionBarDefinition.map((action) =>
                        {
                            return <MenuItem primaryText={action.name}
                                             leftIcon={action.className ? <FontIcon className={action.className} /> : (action.icon ? action.icon : null)}
                                             onTouchTap={action.onTouchTap}/>
                        })
                    }
                </IconMenu>

            } else {
                return null
            }
        }

        function parentsAreExpanded(listitem) {
            if (listitem.depth > startingDepth) {
                if (expandedListItems.indexOf(listitem.parentIndex) === -1) {
                    return false
                } else {
                    const parent = listItems.filter((_listItem, index) => {
                        return index === listitem.parentIndex
                    })[0]
                    return parentsAreExpanded(parent)
                }
            } else {
                return true
            }
        }

        function tagListItemsWithSearchTerm(searchTerm, listItem) {
            const f = (listItem) => {
                const searchTerms = searchTerm.split(' ')
                let match = false
                let matchIndex, matchTermLength

                if (searchTerms[0] !== '') {
                    searchTerms.forEach((searchTerm) => {
                        const content = (listItem[contentKey]) ? listItem[contentKey] : ''
                        matchIndex = content.toLowerCase().indexOf(searchTerm.toLowerCase())
                        if (matchIndex !== -1) {
                            match = true
                            matchTermLength = searchTerm.length
                        }
                    })
                }

                if (match) {
                    return Object.assign({}, listItem, {searchMatched: true, highlight: [matchIndex, matchTermLength]})
                } else {
                    return listItem
                }
            }

            if (listItem) {
                return f(listItem)
            } else {
                return f
            }
        }

        function childIsTaggedWithSearch(listItem, listItems) {
            if (listItem.children) {
                for (let i = 0; i < listItem.children.length; i++) {
                    if (listItems[listItem.children[i]].searchMatched) {
                        return true
                    }
                }
            }
        }
    }
}



export default TreeList;






