import React from "react";
import MuiDrawer  from "dotin-material-ui/Drawer";

const style = {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    boxSizing: 'border-box',
    boxShadow: '0 1px 6px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.12)',
    display: 'block',
    zIndex: 1,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    borderRadius: '2px',
    float: 'left',
    width: '250px',
};

export function Drawer(props) {
    return <MuiDrawer
        docked={props.docked}
        open={props.open}
        onRequestChange={props.onOpenClose}
        style={style}
        >
        {props.children}
    </MuiDrawer>
}

export default Drawer
