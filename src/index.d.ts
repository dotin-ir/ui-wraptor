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