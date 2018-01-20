import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import { DragSource, DropTarget } from 'react-dnd';
import Checkbox from 'dotin-material-ui/Checkbox';


class TreeListItem extends BaseComponent {

    static propTypes = {
        listItem: PropTypes.any,
        primaryText: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired,
        leftIcon: PropTypes.element,
        rightIcon: PropTypes.element,
        onClick: PropTypes.func,
        onMouseOver: PropTypes.func,
        onMouseOut: PropTypes.func,
        onCheck: PropTypes.func,
        checked: PropTypes.bool,
        selectable: PropTypes.bool,
        onDrop: PropTypes.func,
        connectDragSource: PropTypes.any,
        isDragging: PropTypes.any,
        connectDropTarget: PropTypes.any,
        canDrop: PropTypes.any,
        isOver: PropTypes.any
    };

    render() {
        const {listItem, primaryText, style} = this.props;
        const {checked, selectable} = this.props;
        const {onClick, onMouseOver, onMouseOut, onCheck, leftIcon, rightIcon} = this.props;
        const {connectDragSource, connectDropTarget} = this.props;
        const styles = {
            root: {
                transition: 'all 0.25s ease-in-out',
            },
            primaryText: {
                lineHeight: '32px',
            },

            centerText: {
                display: 'inline-flex',
                verticalAlign: 'middle',
                alignItems: 'center'
            }
        }

        return (
            <div style={Object.assign({}, style, styles.centerText)}  onMouseLeave={onMouseOut}>
                <span>
                    {(selectable) ? <Checkbox onCheck = {onCheck} checked = {checked}/> : null}
                </span>
                <span style={Object.assign({}, styles.root)}
                      onMouseEnter={onMouseOver}
                >
                    <span onClick={onClick}>
                    {leftIcon}
                        {connectDropTarget(
                            connectDragSource(
                                <span style={Object.assign({}, styles.primaryText)}>
                                    {primaryText}
                                </span>
                            )
                        )}

                    </span>
                    {rightIcon}
                </span>
            </div>
        )
    }
}


const treeListItemSource = {

    beginDrag(props, monitor, component) {

        console.log(props.primaryText)

        return {
            dragItem: props.listItem
        }
    },

    endDrag(props, monitor, component) {

        const dragItem = monitor.getItem().dragItem;
        const dropItem = monitor.getDropResult().dropItem;

        if(dragItem == dropItem){
            return
        }

        props.onDrop(dragItem, dropItem)
    }
};

const treeListItemTarget = {

    drop(props, monitor, component) {

        console.log(props.primaryText)

        return {
            dropItem: props.listItem
        }
    }
};

function dropCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

function dragCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

TreeListItem = DropTarget('treeListItem', treeListItemTarget, dropCollect)(TreeListItem);
TreeListItem = DragSource('treeListItem', treeListItemSource, dragCollect)(TreeListItem);

export default TreeListItem;

