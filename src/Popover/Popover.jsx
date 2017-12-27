import React, {PropTypes} from "react"
import propTypes from '../utils/propTypes'
import MUIPopover from "dotin-material-ui/Popover"

export function Popover(props) {
    return <MUIPopover
        anchorEl={props.anchorElement}
        anchorOrigin={props.anchorOrigin}
        targetOrigin={props.targetOrigin}
        onRequestClose={props.onClose}
        open={props.open}
        style={{transformOrigin: 'center top'}}
    >
        {props.children}
    </MUIPopover>
}

export default Popover
