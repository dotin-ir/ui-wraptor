import React from 'react'
import MUIDialog from 'dotin-material-ui/Dialog'

export function Dialog(props) {
    return <MUIDialog
        title={props.title}
        actions={props.actions}
        modal={props.modal}
        open={props.open}
        onRequestClose={props.onRequestClose}
    >
        {props.children}
    </MUIDialog>
}

export default Dialog