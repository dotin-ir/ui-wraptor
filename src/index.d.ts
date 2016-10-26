// Type definitions for ui-wraptor v0.0.1
// Project: https://github.com/dotin-ir/ui-wraptor.git

///<reference path='../typings/react.d.ts' />

declare module "ui-wraptor" {
    export import BaseComponent = __UI_Wraptor.BaseComponent;
    export import DynamicMenu = __UI_Wraptor.DynamicMenu;
}

declare namespace __UI_Wraptor {
    export import React = __React;

    // BaseComponent
    export class BaseComponent<P,S> extends React.Component<P,S>{}

    // DynamicMenu
    interface IMenuItem {
        caption: string,
        url?: string,
        urlData?: any,
        fontIcon?: string,
        disabled?: boolean,
        subMenus?: IMenuItem[]
    }

    interface IMenuCategory {
        [key: string]: IMenuItem;
    }

    interface IClickHandler {
        (url: string, urlData: any):void;
    }

    interface DynamicMenuProps extends React.ClassAttributes<DynamicMenu> {
        showMini?: boolean;
        menuData: IMenuCategory;
        onClick?: IClickHandler;
    }

    export class DynamicMenu extends BaseComponent<DynamicMenuProps, {}> {}

    // ThemeProvider
    interface ThemeProviderProps extends React.ClassAttributes<ThemeProvider> {
        theme?: any;
    }

    export class ThemeProvider extends BaseComponent<ThemeProviderProps,{}> {}
    
    // Dialog
    interface IDialog {
        title:string,
        actions:any,
        modal:boolean,
        open:boolean,
        onRequestClose?:(buttonClicked: boolean) => void;      
    }
    
    export class Dialog extends BaseComponent<IDialog,{}> {}

    // FlatButton
    interface IFlatButton {
        backgroundColor?: string,
        hoverColor?: string,
        icon?: React.ReactElement<any>,
        keyboardFocused?: boolean,
        label?: string,
        onClick?: ()=>{},
        onTouchTap?: ()=>{},
        primary?: boolean,
        secondary?: boolean,
        style?: React.CSSProperties,
    }

    export class FlatButton extends BaseComponent<IFlatButton,{}> {}
}

declare module 'ui-wraptor/BaseComponent' {
    export import BaseComponent = __UI_Wraptor.BaseComponent;
    export default BaseComponent;
}

declare module 'ui-wraptor/DynamicMenu' {
    export import DynamicMenu = __UI_Wraptor.DynamicMenu;
    export default DynamicMenu;
}

declare module 'ui-wraptor/ThemeProvider' {
    export import ThemeProvider = __UI_Wraptor.ThemeProvider;
    export default ThemeProvider;
}

declare module 'ui-wraptor/Dialog' {
    export import Dialog = __UI_Wraptor.Dialog;
    export default Dialog;
}

declare module 'ui-wraptor/FlatButton' {
    export import FlatButton = __UI_Wraptor.FlatButton;
    export default FlatButton;
}