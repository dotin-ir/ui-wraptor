// Type definitions for ui-wraptor v0.0.1
// Project: https://github.com/dotin-ir/ui-wraptor.git

///<reference path='../typings/react.d.ts' />

declare module "ui-wraptor" {
    export import BaseComponent = __UI_Wraptor.BaseComponent;
    export import DynamicMenu = __UI_Wraptor.DynamicMenu;
}

declare namespace __UI_Wraptor {
    export import React = __React;
    import ReactElement = __React.ReactElement;

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
    

    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }
    // Select
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

    //Paper
    interface IPaper{
        circle?: boolean,
        style?:React.CSSProperties,
    }

    export class Paper extends BaseComponent<IPaper,{}> {}

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

    // Menu
    interface IMenu {
        desktop?: boolean;
        style?: React.CSSProperties;
        width?: string | number;
    }

    export class Menu extends BaseComponent<IMenu,{}> {}

    // MenuItem
    interface IMenuItem {
        desktop?: boolean;
        disabled?: boolean;
        icon?: React.ReactElement<any>;
        menuItems?: React.ReactNode;
        style?: React.CSSProperties;
        value?: any;
        text?: React.ReactNode;
    }

    export class MenuItem extends BaseComponent<IMenuItem,{}> {}


    //DatePicker
    interface IDatePicker {
        className?: string,
        defaultDate?: any,
        disabled?: boolean,
        disableYearSelection?: boolean,
        value?:any,
        hintText?:string,
        locale?:string,
        dateTimeFormat?:Intl.DateTimeFormat
    }

    export class DatePicker extends BaseComponent<IDatePicker,{}> {}

    //TimePicker
    interface ITimePicker {
        timeZone?: any,
        defaultTime?: any,
        disabled?: boolean,
    }

    export class TimePicker extends BaseComponent<ITimePicker,{}> {}    


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
    export class Fingerprint extends BaseComponent<IIcon,{}> {}
    export class TransferMoney extends BaseComponent<IIcon,{}> {}
    export class Settings extends BaseComponent<IIcon,{}> {}
    export class Bar extends BaseComponent<IIcon,{}> {}
    export class Profile extends BaseComponent<IIcon,{}> {}
    export class SignOut extends BaseComponent<IIcon,{}> {}

    interface Colors {
        red50: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
        redA100: string;
        redA200: string;
        redA400: string;
        redA700: string;

        pink50: string;
        pink100: string;
        pink200: string;
        pink300: string;
        pink400: string;
        pink500: string;
        pink600: string;
        pink700: string;
        pink800: string;
        pink900: string;
        pinkA100: string;
        pinkA200: string;
        pinkA400: string;
        pinkA700: string;

        purple50: string;
        purple100: string;
        purple200: string;
        purple300: string;
        purple400: string;
        purple500: string;
        purple600: string;
        purple700: string;
        purple800: string;
        purple900: string;
        purpleA100: string;
        purpleA200: string;
        purpleA400: string;
        purpleA700: string;

        deepPurple50: string;
        deepPurple100: string;
        deepPurple200: string;
        deepPurple300: string;
        deepPurple400: string;
        deepPurple500: string;
        deepPurple600: string;
        deepPurple700: string;
        deepPurple800: string;
        deepPurple900: string;
        deepPurpleA100: string;
        deepPurpleA200: string;
        deepPurpleA400: string;
        deepPurpleA700: string;

        indigo50: string;
        indigo100: string;
        indigo200: string;
        indigo300: string;
        indigo400: string;
        indigo500: string;
        indigo600: string;
        indigo700: string;
        indigo800: string;
        indigo900: string;
        indigoA100: string;
        indigoA200: string;
        indigoA400: string;
        indigoA700: string;

        blue50: string;
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        blue800: string;
        blue900: string;
        blueA100: string;
        blueA200: string;
        blueA400: string;
        blueA700: string;

        lightBlue50: string;
        lightBlue100: string;
        lightBlue200: string;
        lightBlue300: string;
        lightBlue400: string;
        lightBlue500: string;
        lightBlue600: string;
        lightBlue700: string;
        lightBlue800: string;
        lightBlue900: string;
        lightBlueA100: string;
        lightBlueA200: string;
        lightBlueA400: string;
        lightBlueA700: string;

        cyan50: string;
        cyan100: string;
        cyan200: string;
        cyan300: string;
        cyan400: string;
        cyan500: string;
        cyan600: string;
        cyan700: string;
        cyan800: string;
        cyan900: string;
        cyanA100: string;
        cyanA200: string;
        cyanA400: string;
        cyanA700: string;

        teal50: string;
        teal100: string;
        teal200: string;
        teal300: string;
        teal400: string;
        teal500: string;
        teal600: string;
        teal700: string;
        teal800: string;
        teal900: string;
        tealA100: string;
        tealA200: string;
        tealA400: string;
        tealA700: string;

        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
        greenA100: string;
        greenA200: string;
        greenA400: string;
        greenA700: string;

        lightGreen50: string;
        lightGreen100: string;
        lightGreen200: string;
        lightGreen300: string;
        lightGreen400: string;
        lightGreen500: string;
        lightGreen600: string;
        lightGreen700: string;
        lightGreen800: string;
        lightGreen900: string;
        lightGreenA100: string;
        lightGreenA200: string;
        lightGreenA400: string;
        lightGreenA700: string;

        lime50: string;
        lime100: string;
        lime200: string;
        lime300: string;
        lime400: string;
        lime500: string;
        lime600: string;
        lime700: string;
        lime800: string;
        lime900: string;
        limeA100: string;
        limeA200: string;
        limeA400: string;
        limeA700: string;

        yellow50: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        yellow600: string;
        yellow700: string;
        yellow800: string;
        yellow900: string;
        yellowA100: string;
        yellowA200: string;
        yellowA400: string;
        yellowA700: string;

        amber50: string;
        amber100: string;
        amber200: string;
        amber300: string;
        amber400: string;
        amber500: string;
        amber600: string;
        amber700: string;
        amber800: string;
        amber900: string;
        amberA100: string;
        amberA200: string;
        amberA400: string;
        amberA700: string;

        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orangeA100: string;
        orangeA200: string;
        orangeA400: string;
        orangeA700: string;

        deepOrange50: string;
        deepOrange100: string;
        deepOrange200: string;
        deepOrange300: string;
        deepOrange400: string;
        deepOrange500: string;
        deepOrange600: string;
        deepOrange700: string;
        deepOrange800: string;
        deepOrange900: string;
        deepOrangeA100: string;
        deepOrangeA200: string;
        deepOrangeA400: string;
        deepOrangeA700: string;

        brown50: string;
        brown100: string;
        brown200: string;
        brown300: string;
        brown400: string;
        brown500: string;
        brown600: string;
        brown700: string;
        brown800: string;
        brown900: string;

        blueGrey50: string;
        blueGrey100: string;
        blueGrey200: string;
        blueGrey300: string;
        blueGrey400: string;
        blueGrey500: string;
        blueGrey600: string;
        blueGrey700: string;
        blueGrey800: string;
        blueGrey900: string;

        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;

        black: string;
        white: string;

        transparent: string;
        fullBlack: string;
        darkBlack: string;
        lightBlack: string;
        minBlack: string;
        faintBlack: string;
        fullWhite: string;
        darkWhite: string;
        lightWhite: string;
    }
    export var Colors: Colors;
    
    //CardLayout
    interface ICardLayout {
        style: React.CSSProperties 
    }
    
    interface ICardHeader {
        avatar: React.ReactNode,
        title: string,
        subtitle: string
    }
    
    export class CardLayout extends BaseComponent<ICardLayout,{}> {}
    export class CardHeader extends BaseComponent<ICardHeader,{}> {}
    export class CardActions extends BaseComponent<{},{}> {}

    interface IIconButton {
        className?: string,
        disabled?: boolean,
        iconClassName?: string,
        iconStyle?: React.CSSProperties,
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        style?: React.CSSProperties,
        tooltip?: string,
        tooltipPosition?: propTypes.cornersAndCenter,
        tooltipStyles?: React.CSSProperties,
        onTouchTap?: React.TouchEventHandler,
    }
    export class IconButton extends BaseComponent<IIconButton,{}> {}

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

declare module 'ui-wraptor/Paper' {
    export import Paper = __UI_Wraptor.Paper;
    export default Paper;
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
declare module 'ui-wraptor/Menu' {
    export import Menu = __UI_Wraptor.Menu;
    export default Menu;
}
declare module 'ui-wraptor/MenuItem' {
    export import MenuItem = __UI_Wraptor.MenuItem;
    export default MenuItem;
}
declare module 'ui-wraptor/icons' {
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
    export import Fingerprint = __UI_Wraptor.Fingerprint;
    export import TransferMoney = __UI_Wraptor.TransferMoney;
    export import Settings = __UI_Wraptor.Settings;
    export import Bar = __UI_Wraptor.Bar;
    export import SignOut = __UI_Wraptor.SignOut;
    export import Profile = __UI_Wraptor.Profile;
}

declare module "ui-wraptor/styles/colors" {
    export const red50: string;
    export const red100: string;
    export const red200: string;
    export const red300: string;
    export const red400: string;
    export const red500: string;
    export const red600: string;
    export const red700: string;
    export const red800: string;
    export const red900: string;
    export const redA100: string;
    export const redA200: string;
    export const redA400: string;
    export const redA700: string;

    export const pink50: string;
    export const pink100: string;
    export const pink200: string;
    export const pink300: string;
    export const pink400: string;
    export const pink500: string;
    export const pink600: string;
    export const pink700: string;
    export const pink800: string;
    export const pink900: string;
    export const pinkA100: string;
    export const pinkA200: string;
    export const pinkA400: string;
    export const pinkA700: string;

    export const purple50: string;
    export const purple100: string;
    export const purple200: string;
    export const purple300: string;
    export const purple400: string;
    export const purple500: string;
    export const purple600: string;
    export const purple700: string;
    export const purple800: string;
    export const purple900: string;
    export const purpleA100: string;
    export const purpleA200: string;
    export const purpleA400: string;
    export const purpleA700: string;

    export const deepPurple50: string;
    export const deepPurple100: string;
    export const deepPurple200: string;
    export const deepPurple300: string;
    export const deepPurple400: string;
    export const deepPurple500: string;
    export const deepPurple600: string;
    export const deepPurple700: string;
    export const deepPurple800: string;
    export const deepPurple900: string;
    export const deepPurpleA100: string;
    export const deepPurpleA200: string;
    export const deepPurpleA400: string;
    export const deepPurpleA700: string;

    export const indigo50: string;
    export const indigo100: string;
    export const indigo200: string;
    export const indigo300: string;
    export const indigo400: string;
    export const indigo500: string;
    export const indigo600: string;
    export const indigo700: string;
    export const indigo800: string;
    export const indigo900: string;
    export const indigoA100: string;
    export const indigoA200: string;
    export const indigoA400: string;
    export const indigoA700: string;

    export const blue50: string;
    export const blue100: string;
    export const blue200: string;
    export const blue300: string;
    export const blue400: string;
    export const blue500: string;
    export const blue600: string;
    export const blue700: string;
    export const blue800: string;
    export const blue900: string;
    export const blueA100: string;
    export const blueA200: string;
    export const blueA400: string;
    export const blueA700: string;

    export const lightBlue50: string;
    export const lightBlue100: string;
    export const lightBlue200: string;
    export const lightBlue300: string;
    export const lightBlue400: string;
    export const lightBlue500: string;
    export const lightBlue600: string;
    export const lightBlue700: string;
    export const lightBlue800: string;
    export const lightBlue900: string;
    export const lightBlueA100: string;
    export const lightBlueA200: string;
    export const lightBlueA400: string;
    export const lightBlueA700: string;

    export const cyan50: string;
    export const cyan100: string;
    export const cyan200: string;
    export const cyan300: string;
    export const cyan400: string;
    export const cyan500: string;
    export const cyan600: string;
    export const cyan700: string;
    export const cyan800: string;
    export const cyan900: string;
    export const cyanA100: string;
    export const cyanA200: string;
    export const cyanA400: string;
    export const cyanA700: string;

    export const teal50: string;
    export const teal100: string;
    export const teal200: string;
    export const teal300: string;
    export const teal400: string;
    export const teal500: string;
    export const teal600: string;
    export const teal700: string;
    export const teal800: string;
    export const teal900: string;
    export const tealA100: string;
    export const tealA200: string;
    export const tealA400: string;
    export const tealA700: string;

    export const green50: string;
    export const green100: string;
    export const green200: string;
    export const green300: string;
    export const green400: string;
    export const green500: string;
    export const green600: string;
    export const green700: string;
    export const green800: string;
    export const green900: string;
    export const greenA100: string;
    export const greenA200: string;
    export const greenA400: string;
    export const greenA700: string;

    export const lightGreen50: string;
    export const lightGreen100: string;
    export const lightGreen200: string;
    export const lightGreen300: string;
    export const lightGreen400: string;
    export const lightGreen500: string;
    export const lightGreen600: string;
    export const lightGreen700: string;
    export const lightGreen800: string;
    export const lightGreen900: string;
    export const lightGreenA100: string;
    export const lightGreenA200: string;
    export const lightGreenA400: string;
    export const lightGreenA700: string;

    export const lime50: string;
    export const lime100: string;
    export const lime200: string;
    export const lime300: string;
    export const lime400: string;
    export const lime500: string;
    export const lime600: string;
    export const lime700: string;
    export const lime800: string;
    export const lime900: string;
    export const limeA100: string;
    export const limeA200: string;
    export const limeA400: string;
    export const limeA700: string;

    export const yellow50: string;
    export const yellow100: string;
    export const yellow200: string;
    export const yellow300: string;
    export const yellow400: string;
    export const yellow500: string;
    export const yellow600: string;
    export const yellow700: string;
    export const yellow800: string;
    export const yellow900: string;
    export const yellowA100: string;
    export const yellowA200: string;
    export const yellowA400: string;
    export const yellowA700: string;

    export const amber50: string;
    export const amber100: string;
    export const amber200: string;
    export const amber300: string;
    export const amber400: string;
    export const amber500: string;
    export const amber600: string;
    export const amber700: string;
    export const amber800: string;
    export const amber900: string;
    export const amberA100: string;
    export const amberA200: string;
    export const amberA400: string;
    export const amberA700: string;

    export const orange50: string;
    export const orange100: string;
    export const orange200: string;
    export const orange300: string;
    export const orange400: string;
    export const orange500: string;
    export const orange600: string;
    export const orange700: string;
    export const orange800: string;
    export const orange900: string;
    export const orangeA100: string;
    export const orangeA200: string;
    export const orangeA400: string;
    export const orangeA700: string;

    export const deepOrange50: string;
    export const deepOrange100: string;
    export const deepOrange200: string;
    export const deepOrange300: string;
    export const deepOrange400: string;
    export const deepOrange500: string;
    export const deepOrange600: string;
    export const deepOrange700: string;
    export const deepOrange800: string;
    export const deepOrange900: string;
    export const deepOrangeA100: string;
    export const deepOrangeA200: string;
    export const deepOrangeA400: string;
    export const deepOrangeA700: string;

    export const brown50: string;
    export const brown100: string;
    export const brown200: string;
    export const brown300: string;
    export const brown400: string;
    export const brown500: string;
    export const brown600: string;
    export const brown700: string;
    export const brown800: string;
    export const brown900: string;

    export const blueGrey50: string;
    export const blueGrey100: string;
    export const blueGrey200: string;
    export const blueGrey300: string;
    export const blueGrey400: string;
    export const blueGrey500: string;
    export const blueGrey600: string;
    export const blueGrey700: string;
    export const blueGrey800: string;
    export const blueGrey900: string;

    export const grey50: string;
    export const grey100: string;
    export const grey200: string;
    export const grey300: string;
    export const grey400: string;
    export const grey500: string;
    export const grey600: string;
    export const grey700: string;
    export const grey800: string;
    export const grey900: string;

    export const black: string;
    export const white: string;

    export const transparent: string;
    export const fullBlack: string;
    export const darkBlack: string;
    export const lightBlack: string;
    export const minBlack: string;
    export const faintBlack: string;
    export const fullWhite: string;
    export const darkWhite: string;
    export const lightWhite: string;
}

declare module 'ui-wraptor/CardLayout' {
    export import CardLayout = __UI_Wraptor.CardLayout;
    export import CardHeader = __UI_Wraptor.CardHeader;
    export import CardActions = __UI_Wraptor.CardActions;
    export default CardLayout;
}

declare module 'ui-wraptor/IconButton' {
    export import IconButton = __UI_Wraptor.IconButton;
    export default IconButton;
}

declare module 'ui-wraptor/DatePicker' {
    export import DatePicker = __UI_Wraptor.DatePicker;
    export default DatePicker;
}

declare module 'ui-wraptor/TimePicker' {
    export import TimePicker = __UI_Wraptor.TimePicker;
    export default TimePicker;
}