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
    
    // Select
    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }
    
    interface ISelect {
        value?:any,
        label?:string,
        disabled?:boolean,
        hintText?:string,
        style?:React.CSSProperties,
        autoWidth?:boolean,
        onChange?:(e: TouchTapEvent, index: number, menuItemValue: any) => void;
    }
    
    export class Select extends BaseComponent<ISelect,{}> {}

    // RaisedButton
    interface IRaisedButton {
        label?:string,
        disable?:boolean,
        href?:string,
        onClick?: (event:any)=>void,
        icon?:React.ReactNode,
        labelPosition?:"before" | "after",
        primary?:boolean,
        secondary?:boolean,
        style?:React.CSSProperties;


    }

    export class RaisedButton extends BaseComponent<IRaisedButton,{}> {
    }
    // Divider
    interface IDivider {
        style?:React.CSSProperties;
    }

    export class Divider extends BaseComponent<IDivider,{}> {}

    namespace propTypes {
        type horizontal = 'left' | 'middle' | 'right';
        type vertical = 'top' | 'center' | 'bottom';
        type direction = 'left' | 'right' | 'up' | 'down';

        interface origin {
            horizontal: horizontal;
            vertical: vertical;
        }

        type corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
        type cornersAndCenter = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
    }

    // Popover
    interface IPopover {
        style?:React.CSSProperties;
        anchorEl?: React.ReactInstance;
        anchorOrigin?: propTypes.origin;
        targetOrigin?: propTypes.origin;
        autoCloseWhenOffScreen?: boolean;
        onRequestClose?: (reason: string) => void;
        open?: boolean;
    }

    export class Popover extends BaseComponent<IPopover,{}> {}



    // Icon
    interface IIcon {
        color?:string,
        hoverColor?:string,
        style?:any
    }

    export class Dollar extends BaseComponent<IIcon,{}> {}
    export class Shortcut extends BaseComponent<IIcon,{}> {}
    export class Routine extends BaseComponent<IIcon,{}> {}
    export class Dotin extends BaseComponent<IIcon,{}> {}
    export class Management extends BaseComponent<IIcon,{}> {}
    export class Customer extends BaseComponent<IIcon,{}> {}
    export class Accounting extends BaseComponent<IIcon,{}> {}
    export class Deposit extends BaseComponent<IIcon,{}> {}
    export class Cheque extends BaseComponent<IIcon,{}> {}
    export class Guarantee extends BaseComponent<IIcon,{}> {}
    export class Loan extends BaseComponent<IIcon,{}> {}
    export class Demand extends BaseComponent<IIcon,{}> {}
    export class Report extends BaseComponent<IIcon,{}> {}
    export class ArrowDropRight extends BaseComponent<IIcon,{}> {}
    export class Card extends BaseComponent<IIcon,{}> {}
    export class Notifications extends BaseComponent<IIcon,{}> {}
    export class CashDesk extends BaseComponent<IIcon,{}> {}
    export class Inbox extends BaseComponent<IIcon,{}> {}
    export class FingerPrint extends BaseComponent<IIcon,{}> {}
    export class TransferMoney extends BaseComponent<IIcon,{}> {}
    export class Settings extends BaseComponent<IIcon,{}> {}
    export class Bar extends BaseComponent<IIcon,{}> {}
    export class Profile extends BaseComponent<IIcon,{}> {}
    export class SignOut extends BaseComponent<IIcon,{}> {}
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

declare module 'ui-wraptor/Select' {
    export import Select = __UI_Wraptor.Select;
    export default Select;
}
declare module 'ui-wraptor/RaisedButton' {
    export import RaisedButton = __UI_Wraptor.RaisedButton;
    export default RaisedButton;
}
declare module 'ui-wraptor/Divider' {
    export import Divider = __UI_Wraptor.Divider;
    export default Divider;
}
declare module 'ui-wraptor/Popover' {
    export import Popover = __UI_Wraptor.Popover;
    export default Popover;
}


declare module 'ui-wraptor/Icon' {
    export import Dollar = __UI_Wraptor.Dollar;
    export import Shortcut = __UI_Wraptor.Shortcut;
    export import Routine = __UI_Wraptor.Routine;
    export import Dotin = __UI_Wraptor.Dotin;
    export import Management = __UI_Wraptor.Management
    export import Customer = __UI_Wraptor.Customer;
    export import Accounting = __UI_Wraptor.Accounting;
    export import Deposit = __UI_Wraptor.Deposit;
    export import Cheque = __UI_Wraptor.Cheque;
    export import Guarantee = __UI_Wraptor.Guarantee;
    export import Loan = __UI_Wraptor.Loan;
    export import Demand = __UI_Wraptor.Demand;
    export import Report = __UI_Wraptor.Report;
    export import ArrowDropRight = __UI_Wraptor.ArrowDropRight;
    export import Card = __UI_Wraptor.Card;
    export import Notifications = __UI_Wraptor.Notifications;
    export import CashDesk = __UI_Wraptor.CashDesk;
    export import Inbox = __UI_Wraptor.Inbox;
    export import FingerPrint = __UI_Wraptor.FingerPrint;
    export import TransferMoney = __UI_Wraptor.TransferMoney;
    export import Settings = __UI_Wraptor.Settings;
    export import Bar = __UI_Wraptor.Bar;
    export import SignOut = __UI_Wraptor.SignOut;
    export import Profile = __UI_Wraptor.Profile;
}