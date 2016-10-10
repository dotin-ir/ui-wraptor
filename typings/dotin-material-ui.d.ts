// Type definitions for dotin-material-ui v0.15.1
// Project: https://github.com/callemall/dotin-material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>, Oliver Herrmann <https://github.com/herrmanno>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='./react.d.ts' />

declare module "dotin-material-ui" {
    export import AppBar = __DotinMaterialUI.AppBar;
    export import AutoComplete = __DotinMaterialUI.AutoComplete;
    export import Avatar = __DotinMaterialUI.Avatar;
    export import Badge = __DotinMaterialUI.Badge;
    export import Card = __DotinMaterialUI.Card.Card;
    export import CardActions = __DotinMaterialUI.Card.CardActions;
    export import CardHeader = __DotinMaterialUI.Card.CardHeader;
    export import CardMedia = __DotinMaterialUI.Card.CardMedia;
    export import CardText = __DotinMaterialUI.Card.CardText;
    export import CardTitle = __DotinMaterialUI.Card.CardTitle;
    export import Checkbox = __DotinMaterialUI.Switches.Checkbox;
    export import Chip = __DotinMaterialUI.Chip;
    export import CircularProgress = __DotinMaterialUI.CircularProgress;
    export import DatePicker = __DotinMaterialUI.DatePicker.DatePicker;
    export import Dialog = __DotinMaterialUI.Dialog;
    export import Divider = __DotinMaterialUI.Divider;
    export import Drawer = __DotinMaterialUI.Drawer;
    export import DropDownMenu = __DotinMaterialUI.Menus.DropDownMenu;
    export import FlatButton = __DotinMaterialUI.FlatButton;
    export import FloatingActionButton = __DotinMaterialUI.FloatingActionButton;
    export import FontIcon = __DotinMaterialUI.FontIcon;
    export import GridList = __DotinMaterialUI.GridList.GridList;
    export import GridTile = __DotinMaterialUI.GridList.GridTile;
    export import IconButton = __DotinMaterialUI.IconButton;
    export import IconMenu = __DotinMaterialUI.Menus.IconMenu;
    export import LinearProgress = __DotinMaterialUI.LinearProgress;
    export import List = __DotinMaterialUI.List.List;
    export import ListItem = __DotinMaterialUI.List.ListItem;
    export import MakeSelectable = __DotinMaterialUI.List.MakeSelectable;
    export import Menu = __DotinMaterialUI.Menus.Menu;
    export import MenuItem = __DotinMaterialUI.Menus.MenuItem;
    export import Paper = __DotinMaterialUI.Paper;
    export import Popover = __DotinMaterialUI.Popover.Popover;
    export import RadioButton = __DotinMaterialUI.Switches.RadioButton;
    export import RadioButtonGroup = __DotinMaterialUI.Switches.RadioButtonGroup;
    export import RaisedButton = __DotinMaterialUI.RaisedButton;
    export import RefreshIndicator = __DotinMaterialUI.RefreshIndicator;
    export import SelectField = __DotinMaterialUI.SelectField;
    export import Slider = __DotinMaterialUI.Slider;
    export import Subheader = __DotinMaterialUI.Subheader;
    export import SvgIcon = __DotinMaterialUI.SvgIcon;
    export import Step = __DotinMaterialUI.Stepper.Step;
    export import StepButton = __DotinMaterialUI.Stepper.StepButton;
    export import StepContent = __DotinMaterialUI.Stepper.StepContent;
    export import StepLabel = __DotinMaterialUI.Stepper.StepLabel;
    export import Stepper = __DotinMaterialUI.Stepper;
    export import Snackbar = __DotinMaterialUI.Snackbar;
    export import Tab = __DotinMaterialUI.Tabs.Tab;
    export import Tabs = __DotinMaterialUI.Tabs.Tabs;
    export import Table = __DotinMaterialUI.Table.Table;
    export import TableBody = __DotinMaterialUI.Table.TableBody;
    export import TableFooter = __DotinMaterialUI.Table.TableFooter;
    export import TableHeader = __DotinMaterialUI.Table.TableHeader;
    export import TableHeaderColumn = __DotinMaterialUI.Table.TableHeaderColumn;
    export import TableRow = __DotinMaterialUI.Table.TableRow;
    export import TableRowColumn = __DotinMaterialUI.Table.TableRowColumn;
    export import TextField = __DotinMaterialUI.TextField;
    export import TimePicker = __DotinMaterialUI.TimePicker;
    export import Toggle = __DotinMaterialUI.Switches.Toggle;
    export import Toolbar = __DotinMaterialUI.Toolbar.Toolbar;
    export import ToolbarGroup = __DotinMaterialUI.Toolbar.ToolbarGroup;
    export import ToolbarSeparator = __DotinMaterialUI.Toolbar.ToolbarSeparator;
    export import ToolbarTitle = __DotinMaterialUI.Toolbar.ToolbarTitle;

    // export type definitions
    export type TouchTapEvent = __DotinMaterialUI.TouchTapEvent;
    export type TouchTapEventHandler = __DotinMaterialUI.TouchTapEventHandler;
}

declare namespace __DotinMaterialUI {
    export import React = __React;

    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    // What's common between React.TouchEvent and React.MouseEvent
    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }

    // What's common between React.TouchEventHandler and React.MouseEventHandler
    interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }

    interface ThemeWrapperProps extends React.Props<ThemeWrapper> {
        theme: Styles.MuiTheme;
    }
    export class ThemeWrapper extends React.Component<ThemeWrapperProps, {}> {
    }

    export namespace Styles {
        interface Spacing {
            iconSize?: number;

            desktopGutter?: number;
            desktopGutterMore?: number;
            desktopGutterLess?: number;
            desktopGutterMini?: number;
            desktopKeylineIncrement?: number;
            desktopDropDownMenuItemHeight?: number;
            desktopDropDownMenuFontSize?: number;
            desktopLeftNavMenuItemHeight?: number;
            desktopSubheaderHeight?: number;
            desktopToolbarHeight?: number;
        }
        export var Spacing: Spacing;

        interface ThemePalette {
            primary1Color?: string;
            primary2Color?: string;
            primary3Color?: string;
            accent1Color?: string;
            accent2Color?: string;
            accent3Color?: string;
            textColor?: string;
            alternateTextColor?: string;
            canvasColor?: string;
            borderColor?: string;
            disabledColor?: string;
            pickerHeaderColor?: string;
            clockCircleColor?: string;
            shadowColor?: string;
        }
        interface MuiTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
            isRtl?: boolean;
            userAgent?: string;
            zIndex?: zIndex;
            baseTheme?: RawTheme;
            rawTheme?: RawTheme;
            appBar?: {
                color?: string;
                textColor?: string;
                height?: number;
                titleFontWeight?: number;
                padding?: number;
            };
            avatar?: {
                color?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            badge?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                fontWeight?: number;
            };
            button?: {
                height?: number;
                minWidth?: number;
                iconButtonSize?: number;
            };
            card?: {
                titleColor?: string;
                subtitleColor?: string;
                fontWeight?: number;
            };
            cardMedia?: {
              color?: string;
              overlayContentBackground?: string;
              titleColor?: string;
              subtitleColor?: string;
            };
            cardText?: {
                textColor?: string;
            };
            checkbox?: {
                boxColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            chip?: {
              backgroundColor?: string;
              deleteIconColor?: string;
              textColor?: string;
              fontSize?: number;
              fontWeight?: number;
              shadow?: string;
            };
            datePicker?: {
                color?: string;
                textColor?: string;
                calendarTextColor?: string;
                selectColor?: string;
                selectTextColor?: string;
                calendarYearBackgroundColor?: string;
            };
            dialog?: {
              titleFontSize?: number;
              bodyFontSize?: number;
              bodyColor?: string;
            };
            dropDownMenu?: {
                accentColor?: string;
            };
            enhancedButton?: {
              tapHighlightColor?: string;
            };
            flatButton?: {
                color?: string;
                buttonFilterColor?: string;
                disabledTextColor?: string;
                textColor?: string;
                primaryTextColor?: string;
                secondaryTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            floatingActionButton?: {
                buttonSize?: number;
                miniSize?: number;
                color?: string;
                iconColor?: string;
                secondaryColor?: string;
                secondaryIconColor?: string;
                disabledTextColor?: string;
                disabledColor?: string;
            };
            gridTile?: {
                textColor?: string;
            };
            icon?: {
              color?: string;
              backgroundColor?: string;
            };
            inkBar?: {
                backgroundColor?: string;
            };
            drawer?: {
                width?: number;
                color?: string;
            };
            listItem?: {
                nestedLevelDepth?: number;
                secondaryTextColor?: string;
                leftIconColor?: string;
                rightIconColor?: string;
            };
            menu?: {
                backgroundColor?: string;
                containerBackgroundColor?: string;
            };
            menuItem?: {
                dataHeight?: number;
                height?: number;
                hoverColor?: string;
                padding?: number;
                selectedTextColor?: string;
                rightIconDesktopFill?: string;
            };
            menuSubheader?: {
                padding?: number;
                borderColor?: string;
                textColor?: string;
            };
            overlay?: {
                backgroundColor?: string;
            };
            paper?: {
                color?: string;
                backgroundColor?: string;
                zDepthShadows?: string[];
            };
            radioButton?: {
                borderColor?: string;
                backgroundColor?: string;
                checkedColor?: string;
                requiredColor?: string;
                disabledColor?: string;
                size?: number;
                labelColor?: string;
                labelDisabledColor?: string;
            };
            raisedButton?: {
                color?: string;
                textColor?: string;
                primaryColor?: string;
                primaryTextColor?: string;
                secondaryColor?: string;
                secondaryTextColor?: string;
                disabledColor?: string;
                disabledTextColor?: string;
                fontSize?: number;
                fontWeight?: number;
            };
            refreshIndicator?: {
                strokeColor?: string;
                loadingStrokeColor?: string;
            };
            ripple?: {
                color?: string;
            };
            slider?: {
                trackSize?: number;
                trackColor?: string;
                trackColorSelected?: string;
                handleSize?: number;
                handleSizeDisabled?: number;
                handleSizeActive?: number;
                handleColorZero?: string;
                handleFillColor?: string;
                selectionColor?: string;
                rippleColor?: string;
            };
            snackbar?: {
                textColor?: string;
                backgroundColor?: string;
                actionColor?: string;
            };
            subheader?: {
                color?: string;
                fontWeight?: number;
            };
            stepper?: {
                backgroundColor?: string;
                hoverBackgroundColor?: string;
                iconColor?: string;
                hoveredIconColor?: string;
                inactiveIconColor?: string;
                textColor?: string;
                disabledTextColor?: string;
                connectorLineColor?: string;
            };
            table?: {
                backgroundColor?: string;
            };
            tableFooter?: {
                borderColor?: string;
                textColor?: string;
            };
            tableHeader?: {
                borderColor?: string;
            };
            tableHeaderColumn?: {
                textColor?: string;
                height?: number;
                spacing?: number;
            };
            tableRow?: {
                hoverColor?: string;
                stripeColor?: string;
                selectedColor?: string;
                textColor?: string;
                borderColor?: string;
                height?: number;
            };
            tableRowColumn?: {
                height?: number;
                spacing?: number;
            };
            tabs?: {
                backgroundColor?: string;
                textColor?: string;
                selectedTextColor?: string;
            };
            textField?: {
                textColor?: string;
                hintColor?: string;
                floatingLabelColor?: string;
                disabledTextColor?: string;
                errorColor?: string;
                focusColor?: string;
                backgroundColor?: string;
                borderColor?: string;
            };
            timePicker?: {
                color?: string;
                textColor?: string;
                accentColor?: string;
                clockColor?: string;
                clockCircleColor?: string;
                headerColor?: string;
                selectColor?: string;
                selectTextColor?: string;
            };
            toggle?: {
                thumbOnColor?: string;
                thumbOffColor?: string;
                thumbDisabledColor?: string;
                thumbRequiredColor?: string;
                trackOnColor?: string;
                trackOffColor?: string;
                trackDisabledColor?: string;
                labelColor?: string;
                labelDisabledColor?: string;
                trackRequiredColor?: string;
            };
            toolbar?: {
                color?: string;
                hoverColor?: string;
                backgroundColor?: string;
                height?: number;
                titleFontSize?: number;
                iconColor?: string;
                separatorColor?: string;
                menuHoverColor?: string;
            };
            tooltip?: {
                color?: string;
                rippleBackgroundColor?: string;
            };
        }

        interface zIndex {
            menu: number;
            appBar: number;
            drawerOverlay: number;
            drawer: number;
            dialogOverlay: number;
            dialog: number;
            layer: number;
            popover: number;
            snackbar: number;
            tooltip: number;
        }
        export var zIndex: zIndex;

        interface RawTheme {
            spacing?: Spacing;
            fontFamily?: string;
            palette?: ThemePalette;
        }
        var lightBaseTheme: RawTheme;
        var darkBaseTheme: RawTheme;

        export function muiThemeable<TComponent extends React.Component<P, S>, P, S>(): (component: TComponent) => TComponent;

        //** @deprecated use MuiThemeProvider instead **/
        export function themeDecorator(muiTheme: Styles.MuiTheme): <TFunction extends Function>(Component: TFunction) => TFunction;

        interface MuiThemeProviderProps extends React.Props<MuiThemeProvider> {
            muiTheme?: Styles.MuiTheme;
        }
        export class MuiThemeProvider extends React.Component<MuiThemeProviderProps, {}>{
        }

        export function getMuiTheme(...muiTheme: MuiTheme[]): MuiTheme;

        interface ThemeManager {
            //** @deprecated ThemeManager is deprecated. please import getMuiTheme directly from "dotin-material-ui/styles/getMuiTheme" **/
            getMuiTheme(baseTheme: RawTheme, muiTheme?: MuiTheme): MuiTheme;

            //** @deprecated modifyRawThemeSpacing is deprecated. please use getMuiTheme to modify your theme directly. http://www.dotin-material-ui.com/#/customization/themes **/
            modifyRawThemeSpacing(muiTheme: MuiTheme, newSpacing: Spacing): MuiTheme;

            //** @deprecated modifyRawThemePalette is deprecated. please use getMuiTheme to modify your theme directly. http://www.dotin-material-ui.com/#/customization/themes **/
            modifyRawThemePalette(muiTheme: MuiTheme, newPaletteKeys: ThemePalette): MuiTheme;

            //** @deprecated modifyRawThemeFontFamily is deprecated. please use getMuiTheme to modify your theme directly. http://www.dotin-material-ui.com/#/customization/themes **/
            modifyRawThemeFontFamily(muiTheme: MuiTheme, newFontFamily: string): MuiTheme;
        }
        export var ThemeManager: ThemeManager;

        interface Transitions {
            easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
            create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
            easeOutFunction: string;
            easeInOutFunction: string;
        }
        export var Transitions: Transitions;

        interface Typography {
            textFullBlack: string;
            textDarkBlack: string;
            textLightBlack: string;
            textMinBlack: string;
            textFullWhite: string;
            textDarkWhite: string;
            textLightWhite: string;

            // font weight
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightMedium: number;

            fontStyleButtonFontSize: number;
        }
        export var Typography: Typography;

        //** @deprecated use darkBaseTheme instead **/
        export var DarkRawTheme: RawTheme;

        //** @deprecated use lightBaseTheme instead **/
        export var LightRawTheme: RawTheme;
    }

    interface AppBarProps extends React.Props<AppBar> {
        className?: string;
        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: string;
        iconStyleLeft?: string;
        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
        onTitleTouchTap?: TouchTapEventHandler;
        showMenuIconButton?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleStyle?: React.CSSProperties;
        zDepth?: number;
    }
    export class AppBar extends React.Component<AppBarProps, {}>{
    }

    interface AppCanvasProps extends React.Props<AppCanvas> {
    }
    export class AppCanvas extends React.Component<AppCanvasProps, {}> {
    }

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

    type AutoCompleteDataItem = { text: string, value: React.ReactNode } | string;
    type AutoCompleteDataSource = { text: string, value: React.ReactNode }[] | string[];
    interface AutoCompleteProps extends React.Props<AutoComplete> {
        anchorOrigin?: propTypes.origin;
        animated?: boolean;
        dataSource: AutoCompleteDataSource;
        disableFocusRipple?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: string;
        filter?: (searchText: string, key: string, item: AutoCompleteDataItem) => boolean;
        floatingLabelText?: string;
        fullWidth?: boolean;
        hintText?: string;
        listStyle?: React.CSSProperties;
        maxSearchResults?: number;
        menuCloseDelay?: number;
        menuProps?: any;
        menuStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        onNewRequest?: (chosenRequest: string, index: number) => void;
        onUpdateInput?: (searchText: string, dataSource: AutoCompleteDataSource) => void;
        open?: boolean;
        openOnFocus?: boolean;
        searchText?: string;
        style?: React.CSSProperties;
        targetOrigin?: propTypes.origin;
        /** @deprecated Instead, use openOnFocus */
        triggerUpdateOnFocus?: boolean;
    }
    export class AutoComplete extends React.Component<AutoCompleteProps, {}> {
        static noFilter: () => boolean;
        static defaultFilter: (searchText: string, key: string) => boolean;
        static caseSensitiveFilter: (searchText: string, key: string) => boolean;
        static caseInsensitiveFilter: (searchText: string, key: string) => boolean;
        static levenshteinDistanceFilter(distanceLessThan: number): (searchText: string, key: string) => boolean;
        static fuzzyFilter: (searchText: string, key: string) => boolean;
        static Item: Menus.MenuItem;
        static Divider: Divider;
    }

    interface AvatarProps extends React.Props<Avatar> {
        backgroundColor?: string;
        className?: string;
        color?: string;
        icon?: React.ReactElement<any>;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProps, {}> {
    }

    interface BadgeProps extends React.Props<Badge> {
        badgeContent: React.ReactNode;
        badgeStyle?: React.CSSProperties;
        className?: string;
        primary?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class Badge extends React.Component<BadgeProps, {}> {
    }

    interface BeforeAfterWrapperProps extends React.Props<BeforeAfterWrapper> {
        afterElementType?: string;
        afterStyle?: React.CSSProperties;
        beforeElementType?: string;
        beforeStyle?: React.CSSProperties;
        elementType?: string;
        style?: React.CSSProperties;
    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProps, {}> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProps<T> extends React.Props<T> {
        centerRipple?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        keyboardFocused?: boolean;
        linkButton?: boolean;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onKeyDown?: React.KeyboardEventHandler;
        onKeyUp?: React.KeyboardEventHandler;
        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler;
        style?: React.CSSProperties;
        tabIndex?: number;
        touchRippleColor?: string;
        touchRippleOpacity?: number;
        type?: string;
        containerElement?: React.ReactNode | string;
    }

    interface EnhancedButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<EnhancedButton> {
        // container element, <button/>, or <span/>(if disabled link) is the element that get the 'other' properties
        containerElement?: React.ReactNode | string;
        disabled?: boolean;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProps, {}> {
    }

    interface FlatButtonProps extends React.DOMAttributes, SharedEnhancedButtonProps<FlatButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        disabled?: boolean;
        hoverColor?: string;
        href?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onTouchStart?: React.TouchEventHandler;
        primary?: boolean;
        rippleColor?: string;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FlatButton extends React.Component<FlatButtonProps, {}> {
    }

    interface RaisedButtonProps extends SharedEnhancedButtonProps<RaisedButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
        href?: string;
        icon?: React.ReactNode;
        label?: React.ReactNode;
        labelColor?: string;
        labelPosition?: "before" | "after";
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        onMouseDown?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchStart?: React.TouchEventHandler;
        primary?: boolean;
        rippleStyle?: React.CSSProperties;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class RaisedButton extends React.Component<RaisedButtonProps, {}> {
    }

    interface FloatingActionButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<FloatingActionButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        backgroundColor?: string;
        className?: string;
        disabled?: boolean;
        disabledColor?: string;
        href?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        linkButton?: boolean;
        mini?: boolean;
        onMouseDown?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseUp?: React.MouseEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchStart?: React.TouchEventHandler;
        secondary?: boolean;
        style?: React.CSSProperties;
        zDepth?: number;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProps, {}> {
    }

    interface IconButtonProps extends React.HTMLAttributes, SharedEnhancedButtonProps<IconButton> {
        // <EnhancedButton/> is the element that get the 'other' properties
        className?: string;
        disableTouchRipple?: boolean;
        disabled?: boolean;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onMouseOut?: React.MouseEventHandler;
        style?: React.CSSProperties;
        tooltip?: string;
        tooltipPosition?: propTypes.cornersAndCenter;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;
    }
    export class IconButton extends React.Component<IconButtonProps, {}> {
    }

    namespace Card {

        interface CardProps extends React.Props<Card> {
            actAsExpander?: boolean;
            containerStyle?: React.CSSProperties;
            expandable?: boolean;
            expanded?: boolean;
            initiallyExpanded?: boolean;
            onExpandChange?: (isExpanded: boolean) => void;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProps, {}> {
        }

        interface CardActionsProps extends React.Props<CardActions> {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
        }
        export class CardActions extends React.Component<CardActionsProps, {}> {
        }

        interface CardExpandableProps extends React.Props<CardExpandable> {
            expanded?: boolean;
            onExpanding?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class CardExpandable extends React.Component<CardExpandableProps, {}> {
        }

        interface CardHeaderProps extends React.Props<CardHeader> {
            actAsExpander?: boolean;
            avatar?: React.ReactNode;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
        }
        export class CardHeader extends React.Component<CardHeaderProps, {}> {
        }

        interface CardMediaProps extends React.Props<CardMedia> {
            actAsExpander?: boolean;
            expandable?: boolean;
            mediaStyle?: React.CSSProperties;
            overlay?: React.ReactNode;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            overlayStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProps, {}> {
        }

        interface CardTextProps extends React.Props<CardText> {
            actAsExpander?: boolean;
            color?: string;
            expandable?: boolean;
            style?: React.CSSProperties;
        }
        export class CardText extends React.Component<CardTextProps, {}> {
        }

        interface CardTitleProps extends React.Props<CardTitle> {
            actAsExpander?: boolean;
            expandable?: boolean;
            showExpandableButton?: boolean;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            title?: React.ReactNode;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProps, {}> {
        }
    }

    interface ChipProps extends React.Props<Chip> {
        backgroundColor?: string;
        className?: string;
        labelColor?: string;
        labelStyle?: React.CSSProperties;
        onRequestDelete?: React.TouchEventHandler;
        onTouchTap?: React.TouchEventHandler;
        style?: React.CSSProperties;
    }
    export class Chip extends React.Component<ChipProps, {}> {
    }

    namespace DatePicker {
        interface DatePickerProps extends React.Props<DatePicker> {
            // <TextField/> is the element that get the 'other' properties
            DateTimeFormat?: Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            defaultDate?: Date;
            disableYearSelection?: boolean;
            disabled?: boolean;
            firstDayOfWeek?: number;
            formatDate?: (date: Date) => string;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onChange?: (e: any, date: Date) => void; // e is always null
            onDismiss?: () => void;
            onFocus?: React.FocusEventHandler;
            onShow?: () => void;
            onTouchTap?: React.TouchEventHandler;
            shouldDisableDate?: (day: Date) => boolean;
            style?: React.CSSProperties;
            textFieldStyle?: React.CSSProperties;
            value?: Date;
            /** @deprecated use cancelLabel and okLabel instead */
            wordings?: {ok: string, cancel: string};

            // From <TextField />
            className?: string;
            defaultValue?: string;
            errorStyle?: React.CSSProperties;
            errorText?: React.ReactNode;
            floatingLabelStyle?: React.CSSProperties;
            floatingLabelText?: React.ReactNode;
            fullWidth?: boolean;
            hintStyle?: React.CSSProperties;
            hintText?: React.ReactNode;
            id?: string;
            inputStyle?: React.CSSProperties;
            name?: string;
            onBlur?: React.FocusEventHandler;
            onKeyDown?: React.KeyboardEventHandler;
            type?: string;
            underlineDisabledStyle?: React.CSSProperties;
            underlineFocusStyle?: React.CSSProperties;
            underlineShow?: boolean;
            underlineStyle?: React.CSSProperties;
        }
        export class DatePicker extends React.Component<DatePickerProps, {}> {
        }

        interface DatePickerDialogProps extends React.Props<DatePickerDialog> {
            // <Container/> is the element that get the 'other' properties
            DateTimeFormat?: Intl.DateTimeFormat;
            autoOk?: boolean;
            cancelLabel?: React.ReactNode;
            container?: "dialog" | "inline";
            disableYearSelection?: boolean;
            firstDayOfWeek?: number;
            initialDate?: Date;
            locale?: string;
            maxDate?: Date;
            minDate?: Date;
            mode?: "portrait" | "landscape";
            okLabel?: React.ReactNode;
            onAccept?: (d: Date) => void;
            onDismiss?: () => void;
            onShow?: () => void;
            shouldDisableDate?: (day: Date) => boolean;
            style?: React.CSSProperties;
            wordings?: { ok: string, cancel: string };
        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProps, {}> {
        }
    }

    interface DialogProps extends React.DOMAttributes, React.Props<Dialog> {
        actions?: React.ReactElement<any> | React.ReactElement<any>[];
        actionsContainerClassName?: string;
        actionsContainerStyle?: React.CSSProperties;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;
        bodyClassName?: string;
        bodyStyle?: React.CSSProperties;
        className?: string;
        contentClassName?: string;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        onRequestClose?: (buttonClicked: boolean) => void;
        open: boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        repositionOnUpdate?: boolean;
        style?: React.CSSProperties;
        title?: React.ReactNode;
        titleClassName?: string;
        titleStyle?: React.CSSProperties;
    }
    export class Dialog extends React.Component<DialogProps, {}> {
    }

    interface DividerProps extends React.Props<Divider> {
        className?: string;
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Divider extends React.Component<DividerProps, {}>{
    }

    interface DrawerProps extends React.Props<Drawer> {
        className?: string;
        containerClassName?: string;
        containerStyle?: React.CSSProperties;
        disableSwipeToOpen?: boolean;
        docked?: boolean;
        onRequestChange?: (opening: boolean, reason: string) => void;
        open?: boolean;
        openSecondary?: Boolean;
        overlayClassName?: string;
        overlayStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        swipeAreaWidth?: number;
        width?: number;
        zDepth?: number;
    }
    export class Drawer extends React.Component<DrawerProps, {}> {
    }

    namespace GridList {
        interface GridListProps extends React.Props<GridList> {
            cellHeight?: number;
            cols?: number;
            padding?: number;
            style?: React.CSSProperties;
        }
        export class GridList extends React.Component<GridListProps, {}>{
        }

        interface GridTileProps extends React.Props<GridTile> {
            actionIcon?: React.ReactElement<any>;
            actionPosition?: "left" | "right";
            cols?: number;
            containerElement?: string | React.ReactElement<any> | React.ComponentClass<any>;
            rows?: number;
            style?: React.CSSProperties;
            subtitle?: React.ReactNode;
            title?: React.ReactNode;
            titleBackground?: string;
            titlePosition?: "top" | "bottom";
        }
        export class GridTile extends React.Component<GridTileProps, {}>{
        }
    }

    interface FontIconProps extends React.HTMLAttributes, React.Props<FontIcon> {
        // <span/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        style?: React.CSSProperties;
    }
    export class FontIcon extends React.Component<FontIconProps, {}> {
    }

    interface SvgIconProps extends React.SVGAttributes, React.Props<SvgIcon> {
        // <svg/> is the element that get the 'other' properties
        color?: string;
        hoverColor?: string;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        style?: React.CSSProperties;
        viewBox?: string;
    }
    export class SvgIcon extends React.Component<SvgIconProps, {}> {
    }

    namespace List {
        interface ListProps extends React.Props<List> {
            // <Paper/> is the element that get the 'other' properties
            /** @deprecated nest the Subheader component directly inside the List instead */
            insetSubheader?: boolean;
            style?: React.CSSProperties;
            /** @deprecated nest the Subheader component directly inside the List instead */
            subheader?: string;
            /** @deprecated nest the Subheader component directly inside the List instead */
            subheaderStyle?: React.CSSProperties;
            /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
            zDepth?: number;
        }
        export class List extends React.Component<ListProps, {}> {
        }

        interface ListItemProps extends React.HTMLAttributes, React.Props<ListItem> {
            // <EnhancedButton/> is the element that get the 'other' properties
            autoGenerateNestedIndicator?: boolean;
            disableKeyboardFocus?: boolean;
            disabled?: boolean;
            initiallyOpen?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftAvatar?: React.ReactElement<any>;
            leftCheckbox?: React.ReactElement<any>;
            leftIcon?: React.ReactElement<any>;
            nestedItems?: React.ReactElement<ListItemProps>[];
            nestedLevel?: number;
            nestedListStyle?: React.CSSProperties;
            onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onNestedListToggle?: (item: ListItem) => void;
            onTouchStart?: React.TouchEventHandler;
            onTouchTap?: TouchTapEventHandler;
            primaryText?: React.ReactNode;
            primaryTogglesNestedList?: boolean;
            rightAvatar?: React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            rightIconButton?: React.ReactElement<any>;
            rightToggle?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            secondaryTextLines?: number; // 1 or 2
            style?: React.CSSProperties;
        }
        export class ListItem extends React.Component<ListItemProps, {}> {
        }

        interface SelectableProps {
            onChange?: (e: TouchTapEvent, value: any) => void;
            selectedItemStyle?: React.CSSProperties;
            value?: any;
            /** @deprecated use the value and onChange property instead */
            valueLink?: { value: any; requestChange: (e: TouchTapEvent, value: any) => void };
        }

        // union types for higher order components in TypeScript 1.8: https://github.com/Microsoft/TypeScript/issues/4362
        export function MakeSelectable<P extends {}>(component: React.ComponentClass<P>): React.ComponentClass<P & SelectableProps>;
    }

    namespace Menus {
        interface MenuProps extends React.Props<Menu> {
            // <List/> is the element that get the 'other' properties
            /** @deprecated Instead, use a Popover */
            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            disableAutoFocus?: boolean;
            initiallyKeyboardFocused?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
            onEscKeyDown?: React.KeyboardEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyDown?: React.KeyboardEventHandler;
            /** @deprecated Instead, use a Popover */
            openDirection?: propTypes.corners;
            selectedMenuItemStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
            /** @deprecated wrap it in `Paper` or another component that provides zDepth instead */
            zDepth?: number;
        }
        export class Menu extends React.Component<MenuProps, {}>{
        }

        interface MenuItemProps extends React.HTMLAttributes, React.Props<MenuItem> {
            // <ListItem/> is the element that get the 'other' properties
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            focusState?: string; // 'none', 'focused', or 'keyboard-focused'
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            menuItems?: React.ReactNode;
            onTouchTap?: TouchTapEventHandler;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: React.ReactNode;
            style?: React.CSSProperties;
            value?: any;

            // useful attributes passed to <ListItem/>
            primaryText?: React.ReactNode;
            secondaryTextLines?: number; // 1 or 2
        }
        export class MenuItem extends React.Component<MenuItemProps, {}>{
        }

        interface IconMenuProps extends React.Props<IconMenu> {
            // <Menu/> is the element that get the 'other' properties
            anchorOrigin?: propTypes.origin;
            className?: string;
            iconButtonElement: React.ReactElement<IconButtonProps>;
            iconStyle?: React.CSSProperties;
            menuStyle?: React.CSSProperties;
            onItemTouchTap?: (e: TouchTapEvent, item: MenuItem) => void;
            onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
            onMouseDown?: React.MouseEventHandler;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onMouseUp?: React.MouseEventHandler;
            onRequestChange?: (opening: boolean, reason: string) => void;
            onTouchTap?: TouchTapEventHandler;
            open?: boolean;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            touchTapCloseDelay?: number;
            useLayerForClickAway?: boolean;

            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            onChange?: (e: TouchTapEvent, itemValue: any | any[]) => void;
            onKeyDown?: React.KeyboardEventHandler;
            /** @deprecated Instead, use a Popover */
            openDirection?: string;
            selectedMenuItemStyle?: React.CSSProperties;
            value?: any | any[];
            valueLink?: ReactLink<any | any[]>;
            width?: string | number;
        }
        export class IconMenu extends React.Component<IconMenuProps, {}> {
        }

        interface DropDownMenuProps extends React.Props<DropDownMenu> {
            // <div/> is the element that gets the 'other' properties
            animated?: boolean;
            autoWidth?: boolean;
            className?: string;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            menuStyle?: React.CSSProperties;
            onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
            openImmediately?: boolean;
            style?: React.CSSProperties;
            underlineStyle?: React.CSSProperties;
            value?: any;
        }
        export class DropDownMenu extends React.Component<DropDownMenuProps, {}> {
        }
    }

    interface PaperProps extends React.HTMLAttributes, React.Props<Paper> {
        circle?: boolean;
        rounded?: boolean;
        style?: React.CSSProperties;
        transitionEnabled?: boolean;
        zDepth?: number;
    }
    export class Paper extends React.Component<PaperProps, {}> {
    }

    namespace Popover {
        interface PopoverAnimationProps {
            open: boolean;
            style?: React.CSSProperties;
        }

        interface PopoverProps extends React.Props<Popover> {
            anchorEl?: React.ReactInstance;
            anchorOrigin?: propTypes.origin;
            animated?: boolean;
            animation?: React.ComponentClass<PopoverAnimationProps>;
            autoCloseWhenOffScreen?: boolean;
            canAutoPosition?: boolean;
            className?: string;
            onRequestClose?: (reason: string) => void;
            open?: boolean;
            style?: React.CSSProperties;
            targetOrigin?: propTypes.origin;
            useLayerForClickAway?: boolean;
            zDepth?: number;
        }
        export class Popover extends React.Component<PopoverProps, {}>{
        }

        interface PopoverAnimationVerticalProps extends PopoverAnimationProps, React.Props<PopoverAnimationVertical> {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationVertical extends React.Component<PopoverAnimationVerticalProps, {}>{
        }

        interface PopoverAnimationDefaultProps extends PopoverAnimationProps, React.Props<PopoverAnimationDefault> {
            className?: string;
            targetOrigin?: propTypes.origin;
            zDepth?: number;
        }
        export class PopoverAnimationDefault extends React.Component<PopoverAnimationDefaultProps, {}>{
        }
    }

    interface CircularProgressProps extends React.Props<CircularProgress> {
        color?: string;
        innerStyle?: React.CSSProperties;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        size?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class CircularProgress extends React.Component<CircularProgressProps, {}> {
    }

    interface LinearProgressProps extends React.Props<LinearProgress> {
        color?: string;
        max?: number;
        min?: number;
        mode?: "determinate" | "indeterminate";
        style?: React.CSSProperties;
        value?: number;
    }
    export class LinearProgress extends React.Component<LinearProgressProps, {}> {
    }

    interface RefreshIndicatorProps extends React.Props<RefreshIndicator> {
        color?: string;
        left: number;
        loadingColor?: string;
        percentage?: number;
        size?: number;
        status?: "ready" | "loading" | "hide";
        style?: React.CSSProperties;
        top: number;
    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProps, {}> {
    }

    interface SelectFieldProps extends React.Props<SelectField> {
        // <DropDownMenu/> is the element that get the 'other' properties
        autoWidth?: boolean;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        iconStyle?: React.CSSProperties;
        id?: string;
        labelStyle?: React.CSSProperties;
        onBlur?: React.FocusEventHandler;
        onChange?: (e: TouchTapEvent, index: number, menuItemValue: any) => void;
        onFocus?: React.FocusEventHandler;
        style?: React.CSSProperties;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineStyle?: React.CSSProperties;
        value?: any;

        // useful attributes passed to <DropDownMenu/>
        className?: string;
        maxHeight?: number;
        menuStyle?: any;
        openImmediately?: boolean;
    }
    export class SelectField extends React.Component<SelectFieldProps, {}> {
    }

    interface SliderProps extends React.Props<Slider> {
        defaultValue?: number;
        description?: string;
        disableFocusRipple?: boolean;
        disabled?: boolean;
        error?: string;
        max?: number;
        min?: number;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onChange?: (e: React.MouseEvent, value: number) => void;
        onDragStart?: React.MouseEventHandler;
        onDragStop?: React.MouseEventHandler;
        onFocus?: React.FocusEventHandler;
        required?: boolean;
        step?: number;
        style?: React.CSSProperties;
        value?: number;
    }
    export class Slider extends React.Component<SliderProps, {}> {
    }

    namespace Switches {

        // what's not commonly overridden by Checkbox, RadioButton, or Toggle
        interface CommonEnhancedSwitchProps<T> extends React.HTMLAttributes, React.Props<T> {
        }

        interface CheckboxProps extends CommonEnhancedSwitchProps<Checkbox> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checked?: boolean;
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            defaultChecked?: boolean;
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onCheck?: (event: React.MouseEvent, checked: boolean) => void;
            style?: React.CSSProperties;
            /** @deprecated Use uncheckedIcon instead */
            unCheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            valueLink?: ReactLink<boolean>;
        }
        export class Checkbox extends React.Component<CheckboxProps, {}> {
            /** @deprecated Use checked property instead */
            isChecked(): void;
            /** @deprecated Use checked property instead */
            setChecked(newCheckedValue: boolean): void;
        }

        interface RadioButtonProps extends CommonEnhancedSwitchProps<RadioButton> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            disabled?: boolean;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            labelStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            uncheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
            value?: string;
        }
        export class RadioButton extends React.Component<RadioButtonProps, {}> {
            isChecked(): boolean;
            getValue(): string;
        }

        interface RadioButtonGroupProps extends React.Props<RadioButtonGroup> {
            className?: string;
            defaultSelected?: string;
            labelPosition?: "left" | "right";
            name: string;
            onChange?: (e: React.FormEvent, selected: string) => void;
            style?: React.CSSProperties;
            valueSelected?: string;
        }
        export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, {}> {
            clearValue(): void;
            getSelectedValue(): string;
            setSelectedValue(newSelectionValue: string): void;
        }

        interface ToggleProps extends CommonEnhancedSwitchProps<Toggle> {
            // <EnhancedSwitch/> is element that get the 'other' properties
            defaultToggled?: boolean;
            disabled?: boolean;
            elementStyle?: React.CSSProperties;
            iconStyle?: React.CSSProperties;
            inputStyle?: React.CSSProperties;
            label?: string;
            labelPosition?: "left" | "right";
            labelStyle?: React.CSSProperties;
            onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
            rippleStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            thumbStyle?: React.CSSProperties;
            toggled?: boolean;
            trackStyle?: React.CSSProperties;
            valueLink?: ReactLink<boolean>;
        }
        export class Toggle extends React.Component<ToggleProps, {}> {
            isToggled(): boolean;
            setToggled(newToggledValue: boolean): void;
        }
    }

    interface SnackbarProps extends React.Props<Snackbar> {
        action?: string;
        autoHideDuration?: number;
        bodyStyle?: React.CSSProperties;
        className?: string;
        message: React.ReactNode;
        onActionTouchTap?: React.TouchEventHandler;
        onRequestClose: (reason: string) => void;
        open: boolean;
        style?: React.CSSProperties;
    }
    export class Snackbar extends React.Component<SnackbarProps, {}> {
    }

    namespace Stepper {
        interface StepProps extends React.Props<Step> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            style?: React.CSSProperties;
        }
        export class Step extends React.Component<StepProps, {}>{
        }

        interface StepButtonProps extends SharedEnhancedButtonProps<StepButton> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            onMouseEnter?: React.MouseEventHandler;
            onMouseLeave?: React.MouseEventHandler;
            onTouchStart?: React.TouchEventHandler;
            style?: React.CSSProperties;
        }
        export class StepButton extends React.Component<StepButtonProps, {}>{
        }

        interface StepContentProps extends React.Props<StepContent> {
            active?: boolean;
            last?: boolean;
            style?: React.CSSProperties;
        }
        export class StepContent extends React.Component<StepContentProps, {}>{
        }

        interface StepLabelProps extends React.Props<StepLabel> {
            active?: boolean;
            completed?: boolean;
            disabled?: boolean;
            icon?: React.ReactNode | string | number;
            style?: React.CSSProperties;
        }
        export class StepLabel extends React.Component<StepLabelProps, {}>{
        }

        interface StepperProps extends React.Props<Stepper> {
            activeStep?: number;
            linear?: boolean;
            orientation?: "horizontal" | "vertical";
            style?: React.CSSProperties;
        }
        export class Stepper extends React.Component<StepperProps, {}>{
        }
    }

    interface SubheaderProps extends React.Props<Subheader> {
        inset?: boolean;
        style?: React.CSSProperties;
    }
    export class Subheader extends React.Component<SubheaderProps, {}>{
    }

    namespace Table {
        interface TableProps extends React.Props<Table> {
            allRowsSelected?: boolean;
            bodyStyle?: React.CSSProperties;
            className?: string;
            fixedFooter?: boolean;
            fixedHeader?: boolean;
            footerStyle?: React.CSSProperties;
            headerStyle?: React.CSSProperties;
            height?: string;
            multiSelectable?: boolean;
            onCellClick?: (row: number, column: number) => void;
            onCellHover?: (row: number, column: number) => void;
            onCellHoverExit?: (row: number, column: number) => void;
            onRowHover?: (row: number) => void;
            onRowHoverExit?: (row: number) => void;
            onRowSelection?: (selectedRows: number[] | string) => void;
            selectable?: boolean;
            style?: React.CSSProperties;
            wrapperStyle?: React.CSSProperties;
        }
        export class Table extends React.Component<TableProps, {}> {
        }

        interface TableRowProps extends React.Props<TableRow> {
            // <tr/> is element that get the 'other' properties
            className?: string;
            displayBorder?: boolean;
            hoverable?: boolean;
            hovered?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?: (e: React.MouseEvent, row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowClick?: (e: React.MouseEvent, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?: (e: React.MouseEvent, row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?: (e: React.MouseEvent, row: number) => void;
            rowNumber?: number;
            selectable?: boolean;
            selected?: boolean;
            striped?: boolean;
            style?: React.CSSProperties;
        }
        export class TableRow extends React.Component<TableRowProps, {}> {
        }

        interface TableRowColumnProps extends React.Props<TableRowColumn> {
            // <td/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            hoverable?: boolean;
            key?: string;
            /** @deprecated Instead, use event handler on Table */
            onClick?: (e: React.MouseEvent, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHover?: (e: React.MouseEvent, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onHoverExit?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;

            // useful attributes passed to <td/>
            colSpan?: number;
        }
        export class TableRowColumn extends React.Component<TableRowColumnProps, {}> {
        }

        interface TableHeaderProps extends React.Props<TableHeader> {
            adjustForCheckbox?: boolean;
            className?: string;
            displaySelectAll?: boolean;
            enableSelectAll?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onSelectAll?: (checked: boolean) => void;
            /** @deprecated Instead, use event handler on Table */
            selectAllSelected?: boolean;
            style?: React.CSSProperties;
        }
        export class TableHeader extends React.Component<TableHeaderProps, {}> {
        }

        interface TableHeaderColumnProps extends React.Props<TableHeaderColumn> {
            // <th/> is element that get the 'other' properties
            className?: string;
            columnNumber?: number;
            onClick?: (e: React.MouseEvent, column: number) => void;
            style?: React.CSSProperties;
            tooltip?: string;
            tooltipStyle?: React.CSSProperties;

            // useful attributes passed to <th/>
            colSpan?: number;
        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProps, {}> {
        }

        interface TableBodyProps extends React.Props<TableBody> {
            /** @deprecated Instead, use property on Table */
            allRowsSelected?: boolean;
            className?: string;
            deselectOnClickaway?: boolean;
            displayRowCheckbox?: boolean;
            /** @deprecated Instead, use property on Table */
            multiSelectable?: boolean;
            /** @deprecated Instead, use event handler on Table */
            onCellClick?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHover?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onCellHoverExit?: (row: number, column: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHover?: (row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowHoverExit?: (row: number) => void;
            /** @deprecated Instead, use event handler on Table */
            onRowSelection?: (selectedRows: number[] | string) => void;
            preScanRows?: boolean;
            /** @deprecated Instead, use property on Table */
            selectable?: boolean;
            showRowHover?: boolean;
            stripedRows?: boolean;
            style?: React.CSSProperties;
        }
        export class TableBody extends React.Component<TableBodyProps, {}> {
        }

        interface TableFooterProps extends React.Props<TableFooter> {
            // <tfoot/> is element that get the 'other' properties
            adjustForCheckbox?: boolean;
            className?: string;
            style?: React.CSSProperties;
        }
        export class TableFooter extends React.Component<TableFooterProps, {}> {
        }
    }

    namespace Tabs {
        interface TabsProps extends React.Props<Tabs> {
            className?: string;
            contentContainerClassName?: string;
            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            onChange?: (value: any, e: React.FormEvent, tab: Tab) => void;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            tabTemplate?: React.ComponentClass<any>;
            value?: any;
        }
        export class Tabs extends React.Component<TabsProps, {}> {
        }

        interface TabProps extends SharedEnhancedButtonProps<Tab> {
            className?: string;
            icon?: React.ReactNode;
            label?: React.ReactNode;
            onActive?: (tab: Tab) => void;
            style?: React.CSSProperties;
            value?: any;
            disabled?: boolean;
        }
        export class Tab extends React.Component<
            TabProps, {}> {
        }
    }

    interface TextFieldProps extends React.Props<TextField> {
        className?: string;
        defaultValue?: string | number;
        disabled?: boolean;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onChange?: React.FormEventHandler;
        /** @deprecated Use onKeyDown and check for keycode instead. */
        onEnterKeyDown?: React.KeyboardEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        rows?: number,
        rowsMax?: number,
        style?: React.CSSProperties;
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
        value?: string | number;
    }
    export class TextField extends React.Component<TextFieldProps, {}> {
        blur(): void;
        focus(): void;
        select(): void;
        getValue(): string;
        getInputNode(): HTMLInputElement;
    }

    interface TimePickerProps extends React.Props<TimePicker> {
        // <TextField/> is element that get the 'other' properties
        autoOk?: boolean;
        cancelLabel?: React.ReactNode;
        defaultTime?: Date;
        dialogBodyStyle?: React.CSSProperties;
        dialogStyle?: React.CSSProperties;
        disabled?: boolean;
        format?: "ampm" | "24hr";
        okLabel?: React.ReactNode;
        onChange?: (e: any, time: Date) => void;
        onDismiss?: () => void;
        onFocus?: React.FocusEventHandler;
        onShow?: () => void;
        onTouchTap?: TouchTapEventHandler;
        pedantic?: boolean;
        style?: React.CSSProperties;
        textFieldStyle?: React.CSSProperties;
        value?: Date;

        // From <TextField />
        className?: string;
        defaultValue?: string | number;
        errorStyle?: React.CSSProperties;
        errorText?: React.ReactNode;
        floatingLabelFixed?: boolean;
        floatingLabelFocusStyle?: React.CSSProperties;
        floatingLabelStyle?: React.CSSProperties;
        floatingLabelText?: React.ReactNode;
        fullWidth?: boolean;
        hintStyle?: React.CSSProperties;
        hintText?: React.ReactNode;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        name?: string;
        onBlur?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        rows?: number,
        rowsMax?: number,
        textareaStyle?: React.CSSProperties;
        type?: string;
        underlineDisabledStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        underlineShow?: boolean;
        underlineStyle?: React.CSSProperties;
    }
    export class TimePicker extends React.Component<TimePickerProps, {}> {
        /** @deprecated Use defaultTime instead. */
        getTime(): Date;
        /** @deprecated Use defaultTime instead. */
        setTime(time: Date): void;
        focus(): void;
        openDialog(): void;
    }

    namespace Toolbar {
        interface ToolbarProps extends React.Props<Toolbar> {
            className?: string;
            noGutter?: boolean;
            style?: React.CSSProperties;
        }
        export class Toolbar extends React.Component<ToolbarProps, {}> {
        }

        interface ToolbarGroupProps extends React.Props<ToolbarGroup> {
            className?: string;
            firstChild?: boolean;
            float?: "left" | "right";
            lastChild?: boolean;
            style?: React.CSSProperties;
        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProps, {}> {
        }

        interface ToolbarSeparatorProps extends React.Props<ToolbarSeparator> {
            className?: string;
            style?: React.CSSProperties;
        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProps, {}> {
        }

        interface ToolbarTitleProps extends React.HTMLAttributes, React.Props<ToolbarTitle> {
            className?: string;
            style?: React.CSSProperties;
            text?: string;
        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProps, {}> {
        }
    }

    export namespace Utils {
        export namespace ColorManipulator {
            interface MuiColorObject {
                type: string;
                values: number[];
            }
            function convertColorToString(color: any): string;
            function convertHexToRGB(color: string): string;
            function decomposeColor(color: string): MuiColorObject;
            function getContrastRatio(foreground: string, background: string): number;
            function getLuminance(color: string): number;
            function emphasize(color: string, coefficient?: number): string;
            function fade(color: string, value: number): string;
            function darken(color: string, coefficient: number): string;
            function lighten(color: string, coefficient: number): string;
        }

        interface Dom {
            addClass(el: Element, className: string): void;
            forceRedraw(el: HTMLElement): void;
            getStyleAttributeAsNumber(el: HTMLElement, attr: string): number;
            hasClass(el: Element, className: string): boolean;
            isDescendant(parent: Node, child: Node): boolean;
            offset(el: Element): { top: number, left: number };
            removeClass(el: Element, className: string): void;
            toggleClass(el: Element, className: string): void;
            withoutTransition(el: HTMLElement, callback: () => void): void;
        }
        export var Dom: Dom;

        interface Events {
            isKeyboard(e: Event): boolean;
            off(el: Element, type: string, callback: EventListener): void;
            on(el: Element, type: string, callback: EventListener): void;
            once(el: Element, type: string, callback: EventListener): void;
        }
        export var Events: Events;
    }
}    // __MaterialUI

declare module 'dotin-material-ui/AppBar' {
    export import AppBar = __DotinMaterialUI.AppBar;
    export default AppBar;
}

declare module 'dotin-material-ui/AutoComplete' {
    export import AutoComplete = __DotinMaterialUI.AutoComplete;
    export default AutoComplete;
}

declare module 'dotin-material-ui/Avatar' {
    export import Avatar = __DotinMaterialUI.Avatar;
    export default Avatar;
}

declare module "dotin-material-ui/Badge" {
    export import Badge = __DotinMaterialUI.Badge;
    export default Badge;
}

declare module 'dotin-material-ui/Card' {
    export import Card = __DotinMaterialUI.Card.Card;
    export import CardActions = __DotinMaterialUI.Card.CardActions;
    export import CardExpandable = __DotinMaterialUI.Card.CardExpandable;
    export import CardHeader = __DotinMaterialUI.Card.CardHeader;
    export import CardMedia = __DotinMaterialUI.Card.CardMedia;
    export import CardText = __DotinMaterialUI.Card.CardText;
    export import CardTitle = __DotinMaterialUI.Card.CardTitle;
    export default Card;
}

declare module 'dotin-material-ui/Card/Card' {
    export import Card = __DotinMaterialUI.Card.Card;
    export default Card;
}

declare module 'dotin-material-ui/Card/CardActions' {
    export import CardActions = __DotinMaterialUI.Card.CardActions;
    export default CardActions;
}

declare module 'dotin-material-ui/Card/CardExpandable' {
    export import CardExpandable = __DotinMaterialUI.Card.CardExpandable;
    export default CardExpandable;
}

declare module 'dotin-material-ui/Card/CardHeader' {
    export import CardHeader = __DotinMaterialUI.Card.CardHeader;
    export default CardHeader;
}

declare module 'dotin-material-ui/Card/CardMedia' {
    export import CardMedia = __DotinMaterialUI.Card.CardMedia;
    export default CardMedia;
}

declare module 'dotin-material-ui/Card/CardText' {
    export import CardText = __DotinMaterialUI.Card.CardText;
    export default CardText;
}

declare module 'dotin-material-ui/Card/CardTitle' {
    export import CardTitle = __DotinMaterialUI.Card.CardTitle;
    export default CardTitle;
}

declare module 'dotin-material-ui/Checkbox' {
    export import Checkbox = __DotinMaterialUI.Switches.Checkbox;
    export default Checkbox;
}

declare module 'dotin-material-ui/Chip' {
    export import Chip = __DotinMaterialUI.Chip;
    export default Chip;
}

declare module 'dotin-material-ui/CircularProgress' {
    export import CircularProgress = __DotinMaterialUI.CircularProgress;
    export default CircularProgress;
}

declare module 'dotin-material-ui/DatePicker' {
    export import DatePicker = __DotinMaterialUI.DatePicker.DatePicker;
    export default DatePicker;
}

declare module 'dotin-material-ui/Dialog' {
    export import Dialog = __DotinMaterialUI.Dialog;
    export default Dialog;
}

declare module "dotin-material-ui/Divider" {
    export import Divider = __DotinMaterialUI.Divider;
    export default Divider;
}

declare module 'dotin-material-ui/Drawer' {
    export import Drawer = __DotinMaterialUI.Drawer;
    export default Drawer;
}

declare module 'dotin-material-ui/DropDownMenu' {
    export import DropDownMenu = __DotinMaterialUI.Menus.DropDownMenu;
    export default DropDownMenu;
}

declare module 'dotin-material-ui/FlatButton' {
    export import FlatButton = __DotinMaterialUI.FlatButton;
    export default FlatButton;
}

declare module 'dotin-material-ui/FloatingActionButton' {
    export import FloatingActionButton = __DotinMaterialUI.FloatingActionButton;
    export default FloatingActionButton;
}

declare module 'dotin-material-ui/FontIcon' {
    export import FontIcon = __DotinMaterialUI.FontIcon;
    export default FontIcon;
}

declare module "dotin-material-ui/GridList" {
    export import GridList = __DotinMaterialUI.GridList.GridList;
    export import GridTile = __DotinMaterialUI.GridList.GridTile;
    export default GridList;
}

declare module "dotin-material-ui/GridList/GridList" {
    export import GridList = __DotinMaterialUI.GridList.GridList;
    export default GridList;
}

declare module "dotin-material-ui/GridList/GridTile" {
    export import GridTile = __DotinMaterialUI.GridList.GridTile;
    export default GridTile;
}

declare module 'dotin-material-ui/IconButton' {
    export import IconButton = __DotinMaterialUI.IconButton;
    export default IconButton;
}

declare module "dotin-material-ui/IconMenu" {
    export import IconMenu = __DotinMaterialUI.Menus.IconMenu;
    export default IconMenu;
}

declare module 'dotin-material-ui/LinearProgress' {
    export import LinearProgress = __DotinMaterialUI.LinearProgress;
    export default LinearProgress;
}

declare module 'dotin-material-ui/List' {
    export import List = __DotinMaterialUI.List.List;
    export import ListItem = __DotinMaterialUI.List.ListItem;
    export import MakeSelectable = __DotinMaterialUI.List.MakeSelectable;
    export default List;
}

declare module 'dotin-material-ui/List/List' {
    export import List = __DotinMaterialUI.List.List;
    export default List;
}

declare module 'dotin-material-ui/List/ListItem' {
    export import ListItem = __DotinMaterialUI.List.ListItem;
    export default ListItem;
}

declare module 'dotin-material-ui/List/MakeSelectable' {
    export import MakeSelectable = __DotinMaterialUI.List.MakeSelectable;
    export default MakeSelectable;
}

declare module "dotin-material-ui/Menu" {
    export import Menu = __DotinMaterialUI.Menus.Menu;
    export import MenuItem = __DotinMaterialUI.Menus.MenuItem;
    export default Menu;
}

declare module "dotin-material-ui/MenuItem" {
    export import MenuItem = __DotinMaterialUI.Menus.MenuItem;
    export default MenuItem;
}

declare module 'dotin-material-ui/Paper' {
    export import Paper = __DotinMaterialUI.Paper;
    export default Paper;
}

declare module 'dotin-material-ui/Popover' {
    export import Popover = __DotinMaterialUI.Popover.Popover;
    export import PopoverAnimationVertical = __DotinMaterialUI.Popover.PopoverAnimationVertical;
    export default Popover;
}

declare module 'dotin-material-ui/Popover/Popover' {
    export import Popover = __DotinMaterialUI.Popover.Popover;
    export default Popover;
}

declare module 'dotin-material-ui/Popover/PopoverAnimationDefault' {
    export import PopoverAnimationDefault = __DotinMaterialUI.Popover.PopoverAnimationDefault;
    export default PopoverAnimationDefault;
}

declare module 'dotin-material-ui/Popover/PopoverAnimationVertical' {
    export import PopoverAnimationVertical = __DotinMaterialUI.Popover.PopoverAnimationVertical;
    export default PopoverAnimationVertical;
}

declare module 'dotin-material-ui/RadioButton' {
    export import RadioButton = __DotinMaterialUI.Switches.RadioButton;
    export import RadioButtonGroup = __DotinMaterialUI.Switches.RadioButtonGroup;
    export default RadioButton;
}

declare module 'dotin-material-ui/RadioButton/RadioButtonGroup' {
    export import RadioButtonGroup = __DotinMaterialUI.Switches.RadioButtonGroup;
    export default RadioButtonGroup;
}

declare module 'dotin-material-ui/RaisedButton' {
    export import RaisedButton = __DotinMaterialUI.RaisedButton;
    export default RaisedButton;
}

declare module 'dotin-material-ui/RefreshIndicator' {
    export import RefreshIndicator = __DotinMaterialUI.RefreshIndicator;
    export default RefreshIndicator;
}

declare module 'dotin-material-ui/SelectField' {
    export import SelectField = __DotinMaterialUI.SelectField;
    export default SelectField;
}

declare module 'dotin-material-ui/Slider' {
    export import Slider = __DotinMaterialUI.Slider;
    export default Slider;
}

declare module 'dotin-material-ui/Snackbar' {
    export import Snackbar = __DotinMaterialUI.Snackbar;
    export default Snackbar;
}

declare module 'dotin-material-ui/Stepper' {
    export import Step = __DotinMaterialUI.Stepper.Step;
    export import StepButton = __DotinMaterialUI.Stepper.StepButton;
    export import StepContent = __DotinMaterialUI.Stepper.StepContent;
    export import StepLabel = __DotinMaterialUI.Stepper.StepLabel;
    export import Stepper = __DotinMaterialUI.Stepper.Stepper;
}

declare module 'dotin-material-ui/Subheader' {
    export import Subheader = __DotinMaterialUI.Subheader;
    export default Subheader;
}

declare module 'dotin-material-ui/SvgIcon' {
    export import SvgIcon = __DotinMaterialUI.SvgIcon;
    export default SvgIcon;
}

declare module 'dotin-material-ui/svg-icons/action/work' {
  export import ActionWork = __DotinMaterialUI.SvgIcon;
  export default ActionWork;
}

declare module 'dotin-material-ui/svg-icons/action/camera-enhance' {
  export import ActionCameraEnhance = __DotinMaterialUI.SvgIcon;
  export default ActionCameraEnhance;
}

declare module 'dotin-material-ui/svg-icons/action/flip-to-back' {
  export import ActionFlipToBack = __DotinMaterialUI.SvgIcon;
  export default ActionFlipToBack;
}

declare module 'dotin-material-ui/svg-icons/action/feedback' {
  export import ActionFeedback = __DotinMaterialUI.SvgIcon;
  export default ActionFeedback;
}

declare module 'dotin-material-ui/svg-icons/action/assignment-turned-in' {
  export import ActionAssignmentTurnedIn = __DotinMaterialUI.SvgIcon;
  export default ActionAssignmentTurnedIn;
}

declare module 'dotin-material-ui/svg-icons/action/track-changes' {
  export import ActionTrackChanges = __DotinMaterialUI.SvgIcon;
  export default ActionTrackChanges;
}

declare module 'dotin-material-ui/svg-icons/action/view-stream' {
  export import ActionViewStream = __DotinMaterialUI.SvgIcon;
  export default ActionViewStream;
}

declare module 'dotin-material-ui/svg-icons/action/open-in-browser' {
  export import ActionOpenInBrowser = __DotinMaterialUI.SvgIcon;
  export default ActionOpenInBrowser;
}

declare module 'dotin-material-ui/svg-icons/action/view-headline' {
  export import ActionViewHeadline = __DotinMaterialUI.SvgIcon;
  export default ActionViewHeadline;
}

declare module 'dotin-material-ui/svg-icons/action/alarm-add' {
  export import ActionAlarmAdd = __DotinMaterialUI.SvgIcon;
  export default ActionAlarmAdd;
}

declare module 'dotin-material-ui/svg-icons/action/history' {
  export import ActionHistory = __DotinMaterialUI.SvgIcon;
  export default ActionHistory;
}

declare module 'dotin-material-ui/svg-icons/action/perm-device-information' {
  export import ActionPermDeviceInformation = __DotinMaterialUI.SvgIcon;
  export default ActionPermDeviceInformation;
}

declare module 'dotin-material-ui/svg-icons/action/reorder' {
  export import ActionReorder = __DotinMaterialUI.SvgIcon;
  export default ActionReorder;
}

declare module 'dotin-material-ui/svg-icons/action/assignment' {
  export import ActionAssignment = __DotinMaterialUI.SvgIcon;
  export default ActionAssignment;
}

declare module 'dotin-material-ui/svg-icons/action/shopping-cart' {
  export import ActionShoppingCart = __DotinMaterialUI.SvgIcon;
  export default ActionShoppingCart;
}

declare module 'dotin-material-ui/svg-icons/action/face' {
  export import ActionFace = __DotinMaterialUI.SvgIcon;
  export default ActionFace;
}

declare module 'dotin-material-ui/svg-icons/action/event' {
  export import ActionEvent = __DotinMaterialUI.SvgIcon;
  export default ActionEvent;
}

declare module 'dotin-material-ui/svg-icons/action/view-week' {
  export import ActionViewWeek = __DotinMaterialUI.SvgIcon;
  export default ActionViewWeek;
}

declare module 'dotin-material-ui/svg-icons/action/rounded-corner' {
  export import ActionRoundedCorner = __DotinMaterialUI.SvgIcon;
  export default ActionRoundedCorner;
}

declare module 'dotin-material-ui/svg-icons/action/view-carousel' {
  export import ActionViewCarousel = __DotinMaterialUI.SvgIcon;
  export default ActionViewCarousel;
}

declare module 'dotin-material-ui/svg-icons/action/toll' {
  export import ActionToll = __DotinMaterialUI.SvgIcon;
  export default ActionToll;
}

declare module 'dotin-material-ui/svg-icons/action/home' {
  export import ActionHome = __DotinMaterialUI.SvgIcon;
  export default ActionHome;
}

declare module 'dotin-material-ui/svg-icons/action/subject' {
  export import ActionSubject = __DotinMaterialUI.SvgIcon;
  export default ActionSubject;
}

declare module 'dotin-material-ui/svg-icons/action/lock' {
  export import ActionLock = __DotinMaterialUI.SvgIcon;
  export default ActionLock;
}

declare module 'dotin-material-ui/svg-icons/action/visibility-off' {
  export import ActionVisibilityOff = __DotinMaterialUI.SvgIcon;
  export default ActionVisibilityOff;
}

declare module 'dotin-material-ui/svg-icons/action/opacity' {
  export import ActionOpacity = __DotinMaterialUI.SvgIcon;
  export default ActionOpacity;
}

declare module 'dotin-material-ui/svg-icons/action/dns' {
  export import ActionDns = __DotinMaterialUI.SvgIcon;
  export default ActionDns;
}

declare module 'dotin-material-ui/svg-icons/action/open-with' {
  export import ActionOpenWith = __DotinMaterialUI.SvgIcon;
  export default ActionOpenWith;
}

declare module 'dotin-material-ui/svg-icons/action/system-update-alt' {
  export import ActionSystemUpdateAlt = __DotinMaterialUI.SvgIcon;
  export default ActionSystemUpdateAlt;
}

declare module 'dotin-material-ui/svg-icons/action/picture-in-picture-alt' {
  export import ActionPictureInPictureAlt = __DotinMaterialUI.SvgIcon;
  export default ActionPictureInPictureAlt;
}

declare module 'dotin-material-ui/svg-icons/action/bookmark-border' {
  export import ActionBookmarkBorder = __DotinMaterialUI.SvgIcon;
  export default ActionBookmarkBorder;
}

declare module 'dotin-material-ui/svg-icons/action/settings' {
  export import ActionSettings = __DotinMaterialUI.SvgIcon;
  export default ActionSettings;
}

declare module 'dotin-material-ui/svg-icons/action/dashboard' {
  export import ActionDashboard = __DotinMaterialUI.SvgIcon;
  export default ActionDashboard;
}

declare module 'dotin-material-ui/svg-icons/action/done-all' {
  export import ActionDoneAll = __DotinMaterialUI.SvgIcon;
  export default ActionDoneAll;
}

declare module 'dotin-material-ui/svg-icons/action/aspect-ratio' {
  export import ActionAspectRatio = __DotinMaterialUI.SvgIcon;
  export default ActionAspectRatio;
}

declare module 'dotin-material-ui/svg-icons/action/verified-user' {
  export import ActionVerifiedUser = __DotinMaterialUI.SvgIcon;
  export default ActionVerifiedUser;
}

declare module 'dotin-material-ui/svg-icons/action/update' {
  export import ActionUpdate = __DotinMaterialUI.SvgIcon;
  export default ActionUpdate;
}

declare module 'dotin-material-ui/svg-icons/action/query-builder' {
  export import ActionQueryBuilder = __DotinMaterialUI.SvgIcon;
  export default ActionQueryBuilder;
}

declare module 'dotin-material-ui/svg-icons/action/supervisor-account' {
  export import ActionSupervisorAccount = __DotinMaterialUI.SvgIcon;
  export default ActionSupervisorAccount;
}

declare module 'dotin-material-ui/svg-icons/action/polymer' {
  export import ActionPolymer = __DotinMaterialUI.SvgIcon;
  export default ActionPolymer;
}

declare module 'dotin-material-ui/svg-icons/action/accessible' {
  export import ActionAccessible = __DotinMaterialUI.SvgIcon;
  export default ActionAccessible;
}

declare module 'dotin-material-ui/svg-icons/action/highlight-off' {
  export import ActionHighlightOff = __DotinMaterialUI.SvgIcon;
  export default ActionHighlightOff;
}

declare module 'dotin-material-ui/svg-icons/action/power-settings-new' {
  export import ActionPowerSettingsNew = __DotinMaterialUI.SvgIcon;
  export default ActionPowerSettingsNew;
}

declare module 'dotin-material-ui/svg-icons/action/chrome-reader-mode' {
  export import ActionChromeReaderMode = __DotinMaterialUI.SvgIcon;
  export default ActionChromeReaderMode;
}

declare module 'dotin-material-ui/svg-icons/action/perm-camera-mic' {
  export import ActionPermCameraMic = __DotinMaterialUI.SvgIcon;
  export default ActionPermCameraMic;
}

declare module 'dotin-material-ui/svg-icons/action/touch-app' {
  export import ActionTouchApp = __DotinMaterialUI.SvgIcon;
  export default ActionTouchApp;
}

declare module 'dotin-material-ui/svg-icons/action/receipt' {
  export import ActionReceipt = __DotinMaterialUI.SvgIcon;
  export default ActionReceipt;
}

declare module 'dotin-material-ui/svg-icons/action/assignment-late' {
  export import ActionAssignmentLate = __DotinMaterialUI.SvgIcon;
  export default ActionAssignmentLate;
}

declare module 'dotin-material-ui/svg-icons/action/alarm-off' {
  export import ActionAlarmOff = __DotinMaterialUI.SvgIcon;
  export default ActionAlarmOff;
}

declare module 'dotin-material-ui/svg-icons/action/toc' {
  export import ActionToc = __DotinMaterialUI.SvgIcon;
  export default ActionToc;
}

declare module 'dotin-material-ui/svg-icons/action/settings-bluetooth' {
  export import ActionSettingsBluetooth = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsBluetooth;
}

declare module 'dotin-material-ui/svg-icons/action/settings-brightness' {
  export import ActionSettingsBrightness = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsBrightness;
}

declare module 'dotin-material-ui/svg-icons/action/donut-small' {
  export import ActionDonutSmall = __DotinMaterialUI.SvgIcon;
  export default ActionDonutSmall;
}

declare module 'dotin-material-ui/svg-icons/action/zoom-out' {
  export import ActionZoomOut = __DotinMaterialUI.SvgIcon;
  export default ActionZoomOut;
}

declare module 'dotin-material-ui/svg-icons/action/loyalty' {
  export import ActionLoyalty = __DotinMaterialUI.SvgIcon;
  export default ActionLoyalty;
}

declare module 'dotin-material-ui/svg-icons/action/search' {
  export import ActionSearch = __DotinMaterialUI.SvgIcon;
  export default ActionSearch;
}

declare module 'dotin-material-ui/svg-icons/action/account-balance-wallet' {
  export import ActionAccountBalanceWallet = __DotinMaterialUI.SvgIcon;
  export default ActionAccountBalanceWallet;
}

declare module 'dotin-material-ui/svg-icons/action/date-range' {
  export import ActionDateRange = __DotinMaterialUI.SvgIcon;
  export default ActionDateRange;
}

declare module 'dotin-material-ui/svg-icons/action/alarm-on' {
  export import ActionAlarmOn = __DotinMaterialUI.SvgIcon;
  export default ActionAlarmOn;
}

declare module 'dotin-material-ui/svg-icons/action/view-quilt' {
  export import ActionViewQuilt = __DotinMaterialUI.SvgIcon;
  export default ActionViewQuilt;
}

declare module 'dotin-material-ui/svg-icons/action/launch' {
  export import ActionLaunch = __DotinMaterialUI.SvgIcon;
  export default ActionLaunch;
}

declare module 'dotin-material-ui/svg-icons/action/visibility' {
  export import ActionVisibility = __DotinMaterialUI.SvgIcon;
  export default ActionVisibility;
}

declare module 'dotin-material-ui/svg-icons/action/flight-land' {
  export import ActionFlightLand = __DotinMaterialUI.SvgIcon;
  export default ActionFlightLand;
}

declare module 'dotin-material-ui/svg-icons/action/card-travel' {
  export import ActionCardTravel = __DotinMaterialUI.SvgIcon;
  export default ActionCardTravel;
}

declare module 'dotin-material-ui/svg-icons/action/get-app' {
  export import ActionGetApp = __DotinMaterialUI.SvgIcon;
  export default ActionGetApp;
}

declare module 'dotin-material-ui/svg-icons/action/markunread-mailbox' {
  export import ActionMarkunreadMailbox = __DotinMaterialUI.SvgIcon;
  export default ActionMarkunreadMailbox;
}

declare module 'dotin-material-ui/svg-icons/action/view-agenda' {
  export import ActionViewAgenda = __DotinMaterialUI.SvgIcon;
  export default ActionViewAgenda;
}

declare module 'dotin-material-ui/svg-icons/action/timeline' {
  export import ActionTimeline = __DotinMaterialUI.SvgIcon;
  export default ActionTimeline;
}

declare module 'dotin-material-ui/svg-icons/action/settings-remote' {
  export import ActionSettingsRemote = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsRemote;
}

declare module 'dotin-material-ui/svg-icons/action/input' {
  export import ActionInput = __DotinMaterialUI.SvgIcon;
  export default ActionInput;
}

declare module 'dotin-material-ui/svg-icons/action/record-voice-over' {
  export import ActionRecordVoiceOver = __DotinMaterialUI.SvgIcon;
  export default ActionRecordVoiceOver;
}

declare module 'dotin-material-ui/svg-icons/action/backup' {
  export import ActionBackup = __DotinMaterialUI.SvgIcon;
  export default ActionBackup;
}

declare module 'dotin-material-ui/svg-icons/action/language' {
  export import ActionLanguage = __DotinMaterialUI.SvgIcon;
  export default ActionLanguage;
}

declare module 'dotin-material-ui/svg-icons/action/play-for-work' {
  export import ActionPlayForWork = __DotinMaterialUI.SvgIcon;
  export default ActionPlayForWork;
}

declare module 'dotin-material-ui/svg-icons/action/gif' {
  export import ActionGif = __DotinMaterialUI.SvgIcon;
  export default ActionGif;
}

declare module 'dotin-material-ui/svg-icons/action/theaters' {
  export import ActionTheaters = __DotinMaterialUI.SvgIcon;
  export default ActionTheaters;
}

declare module 'dotin-material-ui/svg-icons/action/offline-pin' {
  export import ActionOfflinePin = __DotinMaterialUI.SvgIcon;
  export default ActionOfflinePin;
}

declare module 'dotin-material-ui/svg-icons/action/assignment-return' {
  export import ActionAssignmentReturn = __DotinMaterialUI.SvgIcon;
  export default ActionAssignmentReturn;
}

declare module 'dotin-material-ui/svg-icons/action/print' {
  export import ActionPrint = __DotinMaterialUI.SvgIcon;
  export default ActionPrint;
}

declare module 'dotin-material-ui/svg-icons/action/settings-overscan' {
  export import ActionSettingsOverscan = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsOverscan;
}

declare module 'dotin-material-ui/svg-icons/action/store' {
  export import ActionStore = __DotinMaterialUI.SvgIcon;
  export default ActionStore;
}

declare module 'dotin-material-ui/svg-icons/action/exit-to-app' {
  export import ActionExitToApp = __DotinMaterialUI.SvgIcon;
  export default ActionExitToApp;
}

declare module 'dotin-material-ui/svg-icons/action/account-balance' {
  export import ActionAccountBalance = __DotinMaterialUI.SvgIcon;
  export default ActionAccountBalance;
}

declare module 'dotin-material-ui/svg-icons/action/grade' {
  export import ActionGrade = __DotinMaterialUI.SvgIcon;
  export default ActionGrade;
}

declare module 'dotin-material-ui/svg-icons/action/picture-in-picture' {
  export import ActionPictureInPicture = __DotinMaterialUI.SvgIcon;
  export default ActionPictureInPicture;
}

declare module 'dotin-material-ui/svg-icons/action/copyright' {
  export import ActionCopyright = __DotinMaterialUI.SvgIcon;
  export default ActionCopyright;
}

declare module 'dotin-material-ui/svg-icons/action/donut-large' {
  export import ActionDonutLarge = __DotinMaterialUI.SvgIcon;
  export default ActionDonutLarge;
}

declare module 'dotin-material-ui/svg-icons/action/lock-open' {
  export import ActionLockOpen = __DotinMaterialUI.SvgIcon;
  export default ActionLockOpen;
}

declare module 'dotin-material-ui/svg-icons/action/perm-media' {
  export import ActionPermMedia = __DotinMaterialUI.SvgIcon;
  export default ActionPermMedia;
}

declare module 'dotin-material-ui/svg-icons/action/all-out' {
  export import ActionAllOut = __DotinMaterialUI.SvgIcon;
  export default ActionAllOut;
}

declare module 'dotin-material-ui/svg-icons/action/check-circle' {
  export import ActionCheckCircle = __DotinMaterialUI.SvgIcon;
  export default ActionCheckCircle;
}

declare module 'dotin-material-ui/svg-icons/action/swap-vertical-circle' {
  export import ActionSwapVerticalCircle = __DotinMaterialUI.SvgIcon;
  export default ActionSwapVerticalCircle;
}

declare module 'dotin-material-ui/svg-icons/action/settings-input-svideo' {
  export import ActionSettingsInputSvideo = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsInputSvideo;
}

declare module 'dotin-material-ui/svg-icons/action/watch-later' {
  export import ActionWatchLater = __DotinMaterialUI.SvgIcon;
  export default ActionWatchLater;
}

declare module 'dotin-material-ui/svg-icons/action/question-answer' {
  export import ActionQuestionAnswer = __DotinMaterialUI.SvgIcon;
  export default ActionQuestionAnswer;
}

declare module 'dotin-material-ui/svg-icons/action/assignment-ind' {
  export import ActionAssignmentInd = __DotinMaterialUI.SvgIcon;
  export default ActionAssignmentInd;
}

declare module 'dotin-material-ui/svg-icons/action/code' {
  export import ActionCode = __DotinMaterialUI.SvgIcon;
  export default ActionCode;
}

declare module 'dotin-material-ui/svg-icons/action/turned-in-not' {
  export import ActionTurnedInNot = __DotinMaterialUI.SvgIcon;
  export default ActionTurnedInNot;
}

declare module 'dotin-material-ui/svg-icons/action/line-weight' {
  export import ActionLineWeight = __DotinMaterialUI.SvgIcon;
  export default ActionLineWeight;
}

declare module 'dotin-material-ui/svg-icons/action/restore' {
  export import ActionRestore = __DotinMaterialUI.SvgIcon;
  export default ActionRestore;
}

declare module 'dotin-material-ui/svg-icons/action/tab' {
  export import ActionTab = __DotinMaterialUI.SvgIcon;
  export default ActionTab;
}

declare module 'dotin-material-ui/svg-icons/action/open-in-new' {
  export import ActionOpenInNew = __DotinMaterialUI.SvgIcon;
  export default ActionOpenInNew;
}

declare module 'dotin-material-ui/svg-icons/action/turned-in' {
  export import ActionTurnedIn = __DotinMaterialUI.SvgIcon;
  export default ActionTurnedIn;
}

declare module 'dotin-material-ui/svg-icons/action/settings-input-hdmi' {
  export import ActionSettingsInputHdmi = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsInputHdmi;
}

declare module 'dotin-material-ui/svg-icons/action/favorite-border' {
  export import ActionFavoriteBorder = __DotinMaterialUI.SvgIcon;
  export default ActionFavoriteBorder;
}

declare module 'dotin-material-ui/svg-icons/action/done' {
  export import ActionDone = __DotinMaterialUI.SvgIcon;
  export default ActionDone;
}

declare module 'dotin-material-ui/svg-icons/action/payment' {
  export import ActionPayment = __DotinMaterialUI.SvgIcon;
  export default ActionPayment;
}

declare module 'dotin-material-ui/svg-icons/action/announcement' {
  export import ActionAnnouncement = __DotinMaterialUI.SvgIcon;
  export default ActionAnnouncement;
}

declare module 'dotin-material-ui/svg-icons/action/find-in-page' {
  export import ActionFindInPage = __DotinMaterialUI.SvgIcon;
  export default ActionFindInPage;
}

declare module 'dotin-material-ui/svg-icons/action/thumbs-up-down' {
  export import ActionThumbsUpDown = __DotinMaterialUI.SvgIcon;
  export default ActionThumbsUpDown;
}

declare module 'dotin-material-ui/svg-icons/action/explore' {
  export import ActionExplore = __DotinMaterialUI.SvgIcon;
  export default ActionExplore;
}

declare module 'dotin-material-ui/svg-icons/action/today' {
  export import ActionToday = __DotinMaterialUI.SvgIcon;
  export default ActionToday;
}

declare module 'dotin-material-ui/svg-icons/action/settings-power' {
  export import ActionSettingsPower = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsPower;
}

declare module 'dotin-material-ui/svg-icons/action/gavel' {
  export import ActionGavel = __DotinMaterialUI.SvgIcon;
  export default ActionGavel;
}

declare module 'dotin-material-ui/svg-icons/action/build' {
  export import ActionBuild = __DotinMaterialUI.SvgIcon;
  export default ActionBuild;
}

declare module 'dotin-material-ui/svg-icons/action/rowing' {
  export import ActionRowing = __DotinMaterialUI.SvgIcon;
  export default ActionRowing;
}

declare module 'dotin-material-ui/svg-icons/action/label' {
  export import ActionLabel = __DotinMaterialUI.SvgIcon;
  export default ActionLabel;
}

declare module 'dotin-material-ui/svg-icons/action/card-giftcard' {
  export import ActionCardGiftcard = __DotinMaterialUI.SvgIcon;
  export default ActionCardGiftcard;
}

declare module 'dotin-material-ui/svg-icons/action/thumb-up' {
  export import ActionThumbUp = __DotinMaterialUI.SvgIcon;
  export default ActionThumbUp;
}

declare module 'dotin-material-ui/svg-icons/action/shopping-basket' {
  export import ActionShoppingBasket = __DotinMaterialUI.SvgIcon;
  export default ActionShoppingBasket;
}

declare module 'dotin-material-ui/svg-icons/action/swap-horiz' {
  export import ActionSwapHoriz = __DotinMaterialUI.SvgIcon;
  export default ActionSwapHoriz;
}

declare module 'dotin-material-ui/svg-icons/action/help-outline' {
  export import ActionHelpOutline = __DotinMaterialUI.SvgIcon;
  export default ActionHelpOutline;
}

declare module 'dotin-material-ui/svg-icons/action/pregnant-woman' {
  export import ActionPregnantWoman = __DotinMaterialUI.SvgIcon;
  export default ActionPregnantWoman;
}

declare module 'dotin-material-ui/svg-icons/action/help' {
  export import ActionHelp = __DotinMaterialUI.SvgIcon;
  export default ActionHelp;
}

declare module 'dotin-material-ui/svg-icons/action/settings-input-antenna' {
  export import ActionSettingsInputAntenna = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsInputAntenna;
}

declare module 'dotin-material-ui/svg-icons/action/find-replace' {
  export import ActionFindReplace = __DotinMaterialUI.SvgIcon;
  export default ActionFindReplace;
}

declare module 'dotin-material-ui/svg-icons/action/shop' {
  export import ActionShop = __DotinMaterialUI.SvgIcon;
  export default ActionShop;
}

declare module 'dotin-material-ui/svg-icons/action/change-history' {
  export import ActionChangeHistory = __DotinMaterialUI.SvgIcon;
  export default ActionChangeHistory;
}

declare module 'dotin-material-ui/svg-icons/action/info' {
  export import ActionInfo = __DotinMaterialUI.SvgIcon;
  export default ActionInfo;
}

declare module 'dotin-material-ui/svg-icons/action/trending-down' {
  export import ActionTrendingDown = __DotinMaterialUI.SvgIcon;
  export default ActionTrendingDown;
}

declare module 'dotin-material-ui/svg-icons/action/flight-takeoff' {
  export import ActionFlightTakeoff = __DotinMaterialUI.SvgIcon;
  export default ActionFlightTakeoff;
}

declare module 'dotin-material-ui/svg-icons/action/alarm' {
  export import ActionAlarm = __DotinMaterialUI.SvgIcon;
  export default ActionAlarm;
}

declare module 'dotin-material-ui/svg-icons/action/spellcheck' {
  export import ActionSpellcheck = __DotinMaterialUI.SvgIcon;
  export default ActionSpellcheck;
}

declare module 'dotin-material-ui/svg-icons/action/settings-input-component' {
  export import ActionSettingsInputComponent = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsInputComponent;
}

declare module 'dotin-material-ui/svg-icons/action/settings-applications' {
  export import ActionSettingsApplications = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsApplications;
}

declare module 'dotin-material-ui/svg-icons/action/room' {
  export import ActionRoom = __DotinMaterialUI.SvgIcon;
  export default ActionRoom;
}

declare module 'dotin-material-ui/svg-icons/action/book' {
  export import ActionBook = __DotinMaterialUI.SvgIcon;
  export default ActionBook;
}

declare module 'dotin-material-ui/svg-icons/action/class' {
  export import ActionClass = __DotinMaterialUI.SvgIcon;
  export default ActionClass;
}

declare module 'dotin-material-ui/svg-icons/action/group-work' {
  export import ActionGroupWork = __DotinMaterialUI.SvgIcon;
  export default ActionGroupWork;
}

declare module 'dotin-material-ui/svg-icons/action/hourglass-full' {
  export import ActionHourglassFull = __DotinMaterialUI.SvgIcon;
  export default ActionHourglassFull;
}

declare module 'dotin-material-ui/svg-icons/action/assessment' {
  export import ActionAssessment = __DotinMaterialUI.SvgIcon;
  export default ActionAssessment;
}

declare module 'dotin-material-ui/svg-icons/action/youtube-searched-for' {
  export import ActionYoutubeSearchedFor = __DotinMaterialUI.SvgIcon;
  export default ActionYoutubeSearchedFor;
}

declare module 'dotin-material-ui/svg-icons/action/eject' {
  export import ActionEject = __DotinMaterialUI.SvgIcon;
  export default ActionEject;
}

declare module 'dotin-material-ui/svg-icons/action/trending-up' {
  export import ActionTrendingUp = __DotinMaterialUI.SvgIcon;
  export default ActionTrendingUp;
}

declare module 'dotin-material-ui/svg-icons/action/http' {
  export import ActionHttp = __DotinMaterialUI.SvgIcon;
  export default ActionHttp;
}

declare module 'dotin-material-ui/svg-icons/action/stars' {
  export import ActionStars = __DotinMaterialUI.SvgIcon;
  export default ActionStars;
}

declare module 'dotin-material-ui/svg-icons/action/autorenew' {
  export import ActionAutorenew = __DotinMaterialUI.SvgIcon;
  export default ActionAutorenew;
}

declare module 'dotin-material-ui/svg-icons/action/settings-ethernet' {
  export import ActionSettingsEthernet = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsEthernet;
}

declare module 'dotin-material-ui/svg-icons/action/label-outline' {
  export import ActionLabelOutline = __DotinMaterialUI.SvgIcon;
  export default ActionLabelOutline;
}

declare module 'dotin-material-ui/svg-icons/action/settings-phone' {
  export import ActionSettingsPhone = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsPhone;
}

declare module 'dotin-material-ui/svg-icons/action/info-outline' {
  export import ActionInfoOutline = __DotinMaterialUI.SvgIcon;
  export default ActionInfoOutline;
}

declare module 'dotin-material-ui/svg-icons/action/lock-outline' {
  export import ActionLockOutline = __DotinMaterialUI.SvgIcon;
  export default ActionLockOutline;
}

declare module 'dotin-material-ui/svg-icons/action/settings-input-composite' {
  export import ActionSettingsInputComposite = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsInputComposite;
}

declare module 'dotin-material-ui/svg-icons/action/invert-colors' {
  export import ActionInvertColors = __DotinMaterialUI.SvgIcon;
  export default ActionInvertColors;
}

declare module 'dotin-material-ui/svg-icons/action/bookmark' {
  export import ActionBookmark = __DotinMaterialUI.SvgIcon;
  export default ActionBookmark;
}

declare module 'dotin-material-ui/svg-icons/action/add-shopping-cart' {
  export import ActionAddShoppingCart = __DotinMaterialUI.SvgIcon;
  export default ActionAddShoppingCart;
}

declare module 'dotin-material-ui/svg-icons/action/bug-report' {
  export import ActionBugReport = __DotinMaterialUI.SvgIcon;
  export default ActionBugReport;
}

declare module 'dotin-material-ui/svg-icons/action/cached' {
  export import ActionCached = __DotinMaterialUI.SvgIcon;
  export default ActionCached;
}

declare module 'dotin-material-ui/svg-icons/action/view-day' {
  export import ActionViewDay = __DotinMaterialUI.SvgIcon;
  export default ActionViewDay;
}

declare module 'dotin-material-ui/svg-icons/action/fingerprint' {
  export import ActionFingerprint = __DotinMaterialUI.SvgIcon;
  export default ActionFingerprint;
}

declare module 'dotin-material-ui/svg-icons/action/accessibility' {
  export import ActionAccessibility = __DotinMaterialUI.SvgIcon;
  export default ActionAccessibility;
}

declare module 'dotin-material-ui/svg-icons/action/perm-data-setting' {
  export import ActionPermDataSetting = __DotinMaterialUI.SvgIcon;
  export default ActionPermDataSetting;
}

declare module 'dotin-material-ui/svg-icons/action/settings-backup-restore' {
  export import ActionSettingsBackupRestore = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsBackupRestore;
}

declare module 'dotin-material-ui/svg-icons/action/zoom-in' {
  export import ActionZoomIn = __DotinMaterialUI.SvgIcon;
  export default ActionZoomIn;
}

declare module 'dotin-material-ui/svg-icons/action/perm-identity' {
  export import ActionPermIdentity = __DotinMaterialUI.SvgIcon;
  export default ActionPermIdentity;
}

declare module 'dotin-material-ui/svg-icons/action/favorite' {
  export import ActionFavorite = __DotinMaterialUI.SvgIcon;
  export default ActionFavorite;
}

declare module 'dotin-material-ui/svg-icons/action/thumb-down' {
  export import ActionThumbDown = __DotinMaterialUI.SvgIcon;
  export default ActionThumbDown;
}

declare module 'dotin-material-ui/svg-icons/action/assignment-returned' {
  export import ActionAssignmentReturned = __DotinMaterialUI.SvgIcon;
  export default ActionAssignmentReturned;
}

declare module 'dotin-material-ui/svg-icons/action/account-box' {
  export import ActionAccountBox = __DotinMaterialUI.SvgIcon;
  export default ActionAccountBox;
}

declare module 'dotin-material-ui/svg-icons/action/extension' {
  export import ActionExtension = __DotinMaterialUI.SvgIcon;
  export default ActionExtension;
}

declare module 'dotin-material-ui/svg-icons/action/pageview' {
  export import ActionPageview = __DotinMaterialUI.SvgIcon;
  export default ActionPageview;
}

declare module 'dotin-material-ui/svg-icons/action/https' {
  export import ActionHttps = __DotinMaterialUI.SvgIcon;
  export default ActionHttps;
}

declare module 'dotin-material-ui/svg-icons/action/translate' {
  export import ActionTranslate = __DotinMaterialUI.SvgIcon;
  export default ActionTranslate;
}

declare module 'dotin-material-ui/svg-icons/action/three-d-rotation' {
  export import ActionThreeDRotation = __DotinMaterialUI.SvgIcon;
  export default ActionThreeDRotation;
}

declare module 'dotin-material-ui/svg-icons/action/tab-unselected' {
  export import ActionTabUnselected = __DotinMaterialUI.SvgIcon;
  export default ActionTabUnselected;
}

declare module 'dotin-material-ui/svg-icons/action/description' {
  export import ActionDescription = __DotinMaterialUI.SvgIcon;
  export default ActionDescription;
}

declare module 'dotin-material-ui/svg-icons/action/note-add' {
  export import ActionNoteAdd = __DotinMaterialUI.SvgIcon;
  export default ActionNoteAdd;
}

declare module 'dotin-material-ui/svg-icons/action/perm-scan-wifi' {
  export import ActionPermScanWifi = __DotinMaterialUI.SvgIcon;
  export default ActionPermScanWifi;
}

declare module 'dotin-material-ui/svg-icons/action/pets' {
  export import ActionPets = __DotinMaterialUI.SvgIcon;
  export default ActionPets;
}

declare module 'dotin-material-ui/svg-icons/action/view-array' {
  export import ActionViewArray = __DotinMaterialUI.SvgIcon;
  export default ActionViewArray;
}

declare module 'dotin-material-ui/svg-icons/action/shop-two' {
  export import ActionShopTwo = __DotinMaterialUI.SvgIcon;
  export default ActionShopTwo;
}

declare module 'dotin-material-ui/svg-icons/action/line-style' {
  export import ActionLineStyle = __DotinMaterialUI.SvgIcon;
  export default ActionLineStyle;
}

declare module 'dotin-material-ui/svg-icons/action/lightbulb-outline' {
  export import ActionLightbulbOutline = __DotinMaterialUI.SvgIcon;
  export default ActionLightbulbOutline;
}

declare module 'dotin-material-ui/svg-icons/action/report-problem' {
  export import ActionReportProblem = __DotinMaterialUI.SvgIcon;
  export default ActionReportProblem;
}

declare module 'dotin-material-ui/svg-icons/action/swap-vert' {
  export import ActionSwapVert = __DotinMaterialUI.SvgIcon;
  export default ActionSwapVert;
}

declare module 'dotin-material-ui/svg-icons/action/list' {
  export import ActionList = __DotinMaterialUI.SvgIcon;
  export default ActionList;
}

declare module 'dotin-material-ui/svg-icons/action/settings-voice' {
  export import ActionSettingsVoice = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsVoice;
}

declare module 'dotin-material-ui/svg-icons/action/view-list' {
  export import ActionViewList = __DotinMaterialUI.SvgIcon;
  export default ActionViewList;
}

declare module 'dotin-material-ui/svg-icons/action/pan-tool' {
  export import ActionPanTool = __DotinMaterialUI.SvgIcon;
  export default ActionPanTool;
}

declare module 'dotin-material-ui/svg-icons/action/important-devices' {
  export import ActionImportantDevices = __DotinMaterialUI.SvgIcon;
  export default ActionImportantDevices;
}

declare module 'dotin-material-ui/svg-icons/action/redeem' {
  export import ActionRedeem = __DotinMaterialUI.SvgIcon;
  export default ActionRedeem;
}

declare module 'dotin-material-ui/svg-icons/action/flip-to-front' {
  export import ActionFlipToFront = __DotinMaterialUI.SvgIcon;
  export default ActionFlipToFront;
}

declare module 'dotin-material-ui/svg-icons/action/android' {
  export import ActionAndroid = __DotinMaterialUI.SvgIcon;
  export default ActionAndroid;
}

declare module 'dotin-material-ui/svg-icons/action/account-circle' {
  export import ActionAccountCircle = __DotinMaterialUI.SvgIcon;
  export default ActionAccountCircle;
}

declare module 'dotin-material-ui/svg-icons/action/event-seat' {
  export import ActionEventSeat = __DotinMaterialUI.SvgIcon;
  export default ActionEventSeat;
}

declare module 'dotin-material-ui/svg-icons/action/perm-contact-calendar' {
  export import ActionPermContactCalendar = __DotinMaterialUI.SvgIcon;
  export default ActionPermContactCalendar;
}

declare module 'dotin-material-ui/svg-icons/action/perm-phone-msg' {
  export import ActionPermPhoneMsg = __DotinMaterialUI.SvgIcon;
  export default ActionPermPhoneMsg;
}

declare module 'dotin-material-ui/svg-icons/action/delete' {
  export import ActionDelete = __DotinMaterialUI.SvgIcon;
  export default ActionDelete;
}

declare module 'dotin-material-ui/svg-icons/action/card-membership' {
  export import ActionCardMembership = __DotinMaterialUI.SvgIcon;
  export default ActionCardMembership;
}

declare module 'dotin-material-ui/svg-icons/action/hourglass-empty' {
  export import ActionHourglassEmpty = __DotinMaterialUI.SvgIcon;
  export default ActionHourglassEmpty;
}

declare module 'dotin-material-ui/svg-icons/action/schedule' {
  export import ActionSchedule = __DotinMaterialUI.SvgIcon;
  export default ActionSchedule;
}

declare module 'dotin-material-ui/svg-icons/action/trending-flat' {
  export import ActionTrendingFlat = __DotinMaterialUI.SvgIcon;
  export default ActionTrendingFlat;
}

declare module 'dotin-material-ui/svg-icons/action/motorcycle' {
  export import ActionMotorcycle = __DotinMaterialUI.SvgIcon;
  export default ActionMotorcycle;
}

declare module 'dotin-material-ui/svg-icons/action/view-column' {
  export import ActionViewColumn = __DotinMaterialUI.SvgIcon;
  export default ActionViewColumn;
}

declare module 'dotin-material-ui/svg-icons/action/settings-cell' {
  export import ActionSettingsCell = __DotinMaterialUI.SvgIcon;
  export default ActionSettingsCell;
}

declare module 'dotin-material-ui/svg-icons/action/credit-card' {
  export import ActionCreditCard = __DotinMaterialUI.SvgIcon;
  export default ActionCreditCard;
}

declare module 'dotin-material-ui/svg-icons/action/view-module' {
  export import ActionViewModule = __DotinMaterialUI.SvgIcon;
  export default ActionViewModule;
}

declare module 'dotin-material-ui/svg-icons/action/compare-arrows' {
  export import ActionCompareArrows = __DotinMaterialUI.SvgIcon;
  export default ActionCompareArrows;
}

declare module 'dotin-material-ui/svg-icons/action/speaker-notes' {
  export import ActionSpeakerNotes = __DotinMaterialUI.SvgIcon;
  export default ActionSpeakerNotes;
}

declare module 'dotin-material-ui/svg-icons/social/person' {
  export import SocialPerson = __DotinMaterialUI.SvgIcon;
  export default SocialPerson;
}

declare module 'dotin-material-ui/svg-icons/social/notifications-none' {
  export import SocialNotificationsNone = __DotinMaterialUI.SvgIcon;
  export default SocialNotificationsNone;
}

declare module 'dotin-material-ui/svg-icons/social/domain' {
  export import SocialDomain = __DotinMaterialUI.SvgIcon;
  export default SocialDomain;
}

declare module 'dotin-material-ui/svg-icons/social/notifications-paused' {
  export import SocialNotificationsPaused = __DotinMaterialUI.SvgIcon;
  export default SocialNotificationsPaused;
}

declare module 'dotin-material-ui/svg-icons/social/person-outline' {
  export import SocialPersonOutline = __DotinMaterialUI.SvgIcon;
  export default SocialPersonOutline;
}

declare module 'dotin-material-ui/svg-icons/social/plus-one' {
  export import SocialPlusOne = __DotinMaterialUI.SvgIcon;
  export default SocialPlusOne;
}

declare module 'dotin-material-ui/svg-icons/social/notifications-active' {
  export import SocialNotificationsActive = __DotinMaterialUI.SvgIcon;
  export default SocialNotificationsActive;
}

declare module 'dotin-material-ui/svg-icons/social/share' {
  export import SocialShare = __DotinMaterialUI.SvgIcon;
  export default SocialShare;
}

declare module 'dotin-material-ui/svg-icons/social/whatshot' {
  export import SocialWhatshot = __DotinMaterialUI.SvgIcon;
  export default SocialWhatshot;
}

declare module 'dotin-material-ui/svg-icons/social/poll' {
  export import SocialPoll = __DotinMaterialUI.SvgIcon;
  export default SocialPoll;
}

declare module 'dotin-material-ui/svg-icons/social/pages' {
  export import SocialPages = __DotinMaterialUI.SvgIcon;
  export default SocialPages;
}

declare module 'dotin-material-ui/svg-icons/social/notifications-off' {
  export import SocialNotificationsOff = __DotinMaterialUI.SvgIcon;
  export default SocialNotificationsOff;
}

declare module 'dotin-material-ui/svg-icons/social/notifications' {
  export import SocialNotifications = __DotinMaterialUI.SvgIcon;
  export default SocialNotifications;
}

declare module 'dotin-material-ui/svg-icons/social/school' {
  export import SocialSchool = __DotinMaterialUI.SvgIcon;
  export default SocialSchool;
}

declare module 'dotin-material-ui/svg-icons/social/cake' {
  export import SocialCake = __DotinMaterialUI.SvgIcon;
  export default SocialCake;
}

declare module 'dotin-material-ui/svg-icons/social/people-outline' {
  export import SocialPeopleOutline = __DotinMaterialUI.SvgIcon;
  export default SocialPeopleOutline;
}

declare module 'dotin-material-ui/svg-icons/social/location-city' {
  export import SocialLocationCity = __DotinMaterialUI.SvgIcon;
  export default SocialLocationCity;
}

declare module 'dotin-material-ui/svg-icons/social/public' {
  export import SocialPublic = __DotinMaterialUI.SvgIcon;
  export default SocialPublic;
}

declare module 'dotin-material-ui/svg-icons/social/mood-bad' {
  export import SocialMoodBad = __DotinMaterialUI.SvgIcon;
  export default SocialMoodBad;
}

declare module 'dotin-material-ui/svg-icons/social/people' {
  export import SocialPeople = __DotinMaterialUI.SvgIcon;
  export default SocialPeople;
}

declare module 'dotin-material-ui/svg-icons/social/mood' {
  export import SocialMood = __DotinMaterialUI.SvgIcon;
  export default SocialMood;
}

declare module 'dotin-material-ui/svg-icons/social/party-mode' {
  export import SocialPartyMode = __DotinMaterialUI.SvgIcon;
  export default SocialPartyMode;
}

declare module 'dotin-material-ui/svg-icons/social/group' {
  export import SocialGroup = __DotinMaterialUI.SvgIcon;
  export default SocialGroup;
}

declare module 'dotin-material-ui/svg-icons/social/person-add' {
  export import SocialPersonAdd = __DotinMaterialUI.SvgIcon;
  export default SocialPersonAdd;
}

declare module 'dotin-material-ui/svg-icons/social/group-add' {
  export import SocialGroupAdd = __DotinMaterialUI.SvgIcon;
  export default SocialGroupAdd;
}

declare module 'dotin-material-ui/svg-icons/maps/edit-location' {
  export import MapsEditLocation = __DotinMaterialUI.SvgIcon;
  export default MapsEditLocation;
}

declare module 'dotin-material-ui/svg-icons/maps/local-airport' {
  export import MapsLocalAirport = __DotinMaterialUI.SvgIcon;
  export default MapsLocalAirport;
}

declare module 'dotin-material-ui/svg-icons/maps/local-phone' {
  export import MapsLocalPhone = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPhone;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-car' {
  export import MapsDirectionsCar = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsCar;
}

declare module 'dotin-material-ui/svg-icons/maps/local-drink' {
  export import MapsLocalDrink = __DotinMaterialUI.SvgIcon;
  export default MapsLocalDrink;
}

declare module 'dotin-material-ui/svg-icons/maps/local-gas-station' {
  export import MapsLocalGasStation = __DotinMaterialUI.SvgIcon;
  export default MapsLocalGasStation;
}

declare module 'dotin-material-ui/svg-icons/maps/store-mall-directory' {
  export import MapsStoreMallDirectory = __DotinMaterialUI.SvgIcon;
  export default MapsStoreMallDirectory;
}

declare module 'dotin-material-ui/svg-icons/maps/add-location' {
  export import MapsAddLocation = __DotinMaterialUI.SvgIcon;
  export default MapsAddLocation;
}

declare module 'dotin-material-ui/svg-icons/maps/local-laundry-service' {
  export import MapsLocalLaundryService = __DotinMaterialUI.SvgIcon;
  export default MapsLocalLaundryService;
}

declare module 'dotin-material-ui/svg-icons/maps/local-hotel' {
  export import MapsLocalHotel = __DotinMaterialUI.SvgIcon;
  export default MapsLocalHotel;
}

declare module 'dotin-material-ui/svg-icons/maps/local-pizza' {
  export import MapsLocalPizza = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPizza;
}

declare module 'dotin-material-ui/svg-icons/maps/person-pin-circle' {
  export import MapsPersonPinCircle = __DotinMaterialUI.SvgIcon;
  export default MapsPersonPinCircle;
}

declare module 'dotin-material-ui/svg-icons/maps/terrain' {
  export import MapsTerrain = __DotinMaterialUI.SvgIcon;
  export default MapsTerrain;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-subway' {
  export import MapsDirectionsSubway = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsSubway;
}

declare module 'dotin-material-ui/svg-icons/maps/local-bar' {
  export import MapsLocalBar = __DotinMaterialUI.SvgIcon;
  export default MapsLocalBar;
}

declare module 'dotin-material-ui/svg-icons/maps/local-car-wash' {
  export import MapsLocalCarWash = __DotinMaterialUI.SvgIcon;
  export default MapsLocalCarWash;
}

declare module 'dotin-material-ui/svg-icons/maps/restaurant-menu' {
  export import MapsRestaurantMenu = __DotinMaterialUI.SvgIcon;
  export default MapsRestaurantMenu;
}

declare module 'dotin-material-ui/svg-icons/maps/near-me' {
  export import MapsNearMe = __DotinMaterialUI.SvgIcon;
  export default MapsNearMe;
}

declare module 'dotin-material-ui/svg-icons/maps/directions' {
  export import MapsDirections = __DotinMaterialUI.SvgIcon;
  export default MapsDirections;
}

declare module 'dotin-material-ui/svg-icons/maps/my-location' {
  export import MapsMyLocation = __DotinMaterialUI.SvgIcon;
  export default MapsMyLocation;
}

declare module 'dotin-material-ui/svg-icons/maps/local-convenience-store' {
  export import MapsLocalConvenienceStore = __DotinMaterialUI.SvgIcon;
  export default MapsLocalConvenienceStore;
}

declare module 'dotin-material-ui/svg-icons/maps/local-offer' {
  export import MapsLocalOffer = __DotinMaterialUI.SvgIcon;
  export default MapsLocalOffer;
}

declare module 'dotin-material-ui/svg-icons/maps/local-florist' {
  export import MapsLocalFlorist = __DotinMaterialUI.SvgIcon;
  export default MapsLocalFlorist;
}

declare module 'dotin-material-ui/svg-icons/maps/local-shipping' {
  export import MapsLocalShipping = __DotinMaterialUI.SvgIcon;
  export default MapsLocalShipping;
}

declare module 'dotin-material-ui/svg-icons/maps/local-taxi' {
  export import MapsLocalTaxi = __DotinMaterialUI.SvgIcon;
  export default MapsLocalTaxi;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-walk' {
  export import MapsDirectionsWalk = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsWalk;
}

declare module 'dotin-material-ui/svg-icons/maps/local-hospital' {
  export import MapsLocalHospital = __DotinMaterialUI.SvgIcon;
  export default MapsLocalHospital;
}

declare module 'dotin-material-ui/svg-icons/maps/layers' {
  export import MapsLayers = __DotinMaterialUI.SvgIcon;
  export default MapsLayers;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-run' {
  export import MapsDirectionsRun = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsRun;
}

declare module 'dotin-material-ui/svg-icons/maps/rate-review' {
  export import MapsRateReview = __DotinMaterialUI.SvgIcon;
  export default MapsRateReview;
}

declare module 'dotin-material-ui/svg-icons/maps/local-dining' {
  export import MapsLocalDining = __DotinMaterialUI.SvgIcon;
  export default MapsLocalDining;
}

declare module 'dotin-material-ui/svg-icons/maps/local-post-office' {
  export import MapsLocalPostOffice = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPostOffice;
}

declare module 'dotin-material-ui/svg-icons/maps/pin-drop' {
  export import MapsPinDrop = __DotinMaterialUI.SvgIcon;
  export default MapsPinDrop;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-boat' {
  export import MapsDirectionsBoat = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsBoat;
}

declare module 'dotin-material-ui/svg-icons/maps/local-see' {
  export import MapsLocalSee = __DotinMaterialUI.SvgIcon;
  export default MapsLocalSee;
}

declare module 'dotin-material-ui/svg-icons/maps/map' {
  export import MapsMap = __DotinMaterialUI.SvgIcon;
  export default MapsMap;
}

declare module 'dotin-material-ui/svg-icons/maps/flight' {
  export import MapsFlight = __DotinMaterialUI.SvgIcon;
  export default MapsFlight;
}

declare module 'dotin-material-ui/svg-icons/maps/person-pin' {
  export import MapsPersonPin = __DotinMaterialUI.SvgIcon;
  export default MapsPersonPin;
}

declare module 'dotin-material-ui/svg-icons/maps/satellite' {
  export import MapsSatellite = __DotinMaterialUI.SvgIcon;
  export default MapsSatellite;
}

declare module 'dotin-material-ui/svg-icons/maps/local-printshop' {
  export import MapsLocalPrintshop = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPrintshop;
}

declare module 'dotin-material-ui/svg-icons/maps/navigation' {
  export import MapsNavigation = __DotinMaterialUI.SvgIcon;
  export default MapsNavigation;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-railway' {
  export import MapsDirectionsRailway = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsRailway;
}

declare module 'dotin-material-ui/svg-icons/maps/local-atm' {
  export import MapsLocalAtm = __DotinMaterialUI.SvgIcon;
  export default MapsLocalAtm;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-transit' {
  export import MapsDirectionsTransit = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsTransit;
}

declare module 'dotin-material-ui/svg-icons/maps/local-parking' {
  export import MapsLocalParking = __DotinMaterialUI.SvgIcon;
  export default MapsLocalParking;
}

declare module 'dotin-material-ui/svg-icons/maps/local-cafe' {
  export import MapsLocalCafe = __DotinMaterialUI.SvgIcon;
  export default MapsLocalCafe;
}

declare module 'dotin-material-ui/svg-icons/maps/local-mall' {
  export import MapsLocalMall = __DotinMaterialUI.SvgIcon;
  export default MapsLocalMall;
}

declare module 'dotin-material-ui/svg-icons/maps/zoom-out-map' {
  export import MapsZoomOutMap = __DotinMaterialUI.SvgIcon;
  export default MapsZoomOutMap;
}

declare module 'dotin-material-ui/svg-icons/maps/local-activity' {
  export import MapsLocalActivity = __DotinMaterialUI.SvgIcon;
  export default MapsLocalActivity;
}

declare module 'dotin-material-ui/svg-icons/maps/local-grocery-store' {
  export import MapsLocalGroceryStore = __DotinMaterialUI.SvgIcon;
  export default MapsLocalGroceryStore;
}

declare module 'dotin-material-ui/svg-icons/maps/local-pharmacy' {
  export import MapsLocalPharmacy = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPharmacy;
}

declare module 'dotin-material-ui/svg-icons/maps/local-movies' {
  export import MapsLocalMovies = __DotinMaterialUI.SvgIcon;
  export default MapsLocalMovies;
}

declare module 'dotin-material-ui/svg-icons/maps/place' {
  export import MapsPlace = __DotinMaterialUI.SvgIcon;
  export default MapsPlace;
}

declare module 'dotin-material-ui/svg-icons/maps/layers-clear' {
  export import MapsLayersClear = __DotinMaterialUI.SvgIcon;
  export default MapsLayersClear;
}

declare module 'dotin-material-ui/svg-icons/maps/hotel' {
  export import MapsHotel = __DotinMaterialUI.SvgIcon;
  export default MapsHotel;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-bike' {
  export import MapsDirectionsBike = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsBike;
}

declare module 'dotin-material-ui/svg-icons/maps/local-library' {
  export import MapsLocalLibrary = __DotinMaterialUI.SvgIcon;
  export default MapsLocalLibrary;
}

declare module 'dotin-material-ui/svg-icons/maps/local-play' {
  export import MapsLocalPlay = __DotinMaterialUI.SvgIcon;
  export default MapsLocalPlay;
}

declare module 'dotin-material-ui/svg-icons/maps/directions-bus' {
  export import MapsDirectionsBus = __DotinMaterialUI.SvgIcon;
  export default MapsDirectionsBus;
}

declare module 'dotin-material-ui/svg-icons/maps/traffic' {
  export import MapsTraffic = __DotinMaterialUI.SvgIcon;
  export default MapsTraffic;
}

declare module 'dotin-material-ui/svg-icons/maps/beenhere' {
  export import MapsBeenhere = __DotinMaterialUI.SvgIcon;
  export default MapsBeenhere;
}

declare module 'dotin-material-ui/svg-icons/communication/call-received' {
  export import CommunicationCallReceived = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallReceived;
}

declare module 'dotin-material-ui/svg-icons/communication/dialpad' {
  export import CommunicationDialpad = __DotinMaterialUI.SvgIcon;
  export default CommunicationDialpad;
}

declare module 'dotin-material-ui/svg-icons/communication/forum' {
  export import CommunicationForum = __DotinMaterialUI.SvgIcon;
  export default CommunicationForum;
}

declare module 'dotin-material-ui/svg-icons/communication/no-sim' {
  export import CommunicationNoSim = __DotinMaterialUI.SvgIcon;
  export default CommunicationNoSim;
}

declare module 'dotin-material-ui/svg-icons/communication/chat' {
  export import CommunicationChat = __DotinMaterialUI.SvgIcon;
  export default CommunicationChat;
}

declare module 'dotin-material-ui/svg-icons/communication/stay-primary-landscape' {
  export import CommunicationStayPrimaryLandscape = __DotinMaterialUI.SvgIcon;
  export default CommunicationStayPrimaryLandscape;
}

declare module 'dotin-material-ui/svg-icons/communication/phonelink-setup' {
  export import CommunicationPhonelinkSetup = __DotinMaterialUI.SvgIcon;
  export default CommunicationPhonelinkSetup;
}

declare module 'dotin-material-ui/svg-icons/communication/ring-volume' {
  export import CommunicationRingVolume = __DotinMaterialUI.SvgIcon;
  export default CommunicationRingVolume;
}

declare module 'dotin-material-ui/svg-icons/communication/phonelink-lock' {
  export import CommunicationPhonelinkLock = __DotinMaterialUI.SvgIcon;
  export default CommunicationPhonelinkLock;
}

declare module 'dotin-material-ui/svg-icons/communication/contacts' {
  export import CommunicationContacts = __DotinMaterialUI.SvgIcon;
  export default CommunicationContacts;
}

declare module 'dotin-material-ui/svg-icons/communication/call-missed' {
  export import CommunicationCallMissed = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallMissed;
}

declare module 'dotin-material-ui/svg-icons/communication/contact-mail' {
  export import CommunicationContactMail = __DotinMaterialUI.SvgIcon;
  export default CommunicationContactMail;
}

declare module 'dotin-material-ui/svg-icons/communication/portable-wifi-off' {
  export import CommunicationPortableWifiOff = __DotinMaterialUI.SvgIcon;
  export default CommunicationPortableWifiOff;
}

declare module 'dotin-material-ui/svg-icons/communication/call-merge' {
  export import CommunicationCallMerge = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallMerge;
}

declare module 'dotin-material-ui/svg-icons/communication/tact-mail' {
  export import CommunicationTactMail = __DotinMaterialUI.SvgIcon;
  export default CommunicationTactMail;
}

declare module 'dotin-material-ui/svg-icons/communication/stop-screen-share' {
  export import CommunicationStopScreenShare = __DotinMaterialUI.SvgIcon;
  export default CommunicationStopScreenShare;
}

declare module 'dotin-material-ui/svg-icons/communication/vpn-key' {
  export import CommunicationVpnKey = __DotinMaterialUI.SvgIcon;
  export default CommunicationVpnKey;
}

declare module 'dotin-material-ui/svg-icons/communication/swap-calls' {
  export import CommunicationSwapCalls = __DotinMaterialUI.SvgIcon;
  export default CommunicationSwapCalls;
}

declare module 'dotin-material-ui/svg-icons/communication/dialer-sip' {
  export import CommunicationDialerSip = __DotinMaterialUI.SvgIcon;
  export default CommunicationDialerSip;
}

declare module 'dotin-material-ui/svg-icons/communication/business' {
  export import CommunicationBusiness = __DotinMaterialUI.SvgIcon;
  export default CommunicationBusiness;
}

declare module 'dotin-material-ui/svg-icons/communication/phonelink-erase' {
  export import CommunicationPhonelinkErase = __DotinMaterialUI.SvgIcon;
  export default CommunicationPhonelinkErase;
}

declare module 'dotin-material-ui/svg-icons/communication/call' {
  export import CommunicationCall = __DotinMaterialUI.SvgIcon;
  export default CommunicationCall;
}

declare module 'dotin-material-ui/svg-icons/communication/screen-share' {
  export import CommunicationScreenShare = __DotinMaterialUI.SvgIcon;
  export default CommunicationScreenShare;
}

declare module 'dotin-material-ui/svg-icons/communication/clear-all' {
  export import CommunicationClearAll = __DotinMaterialUI.SvgIcon;
  export default CommunicationClearAll;
}

declare module 'dotin-material-ui/svg-icons/communication/chat-bubble-outline' {
  export import CommunicationChatBubbleOutline = __DotinMaterialUI.SvgIcon;
  export default CommunicationChatBubbleOutline;
}

declare module 'dotin-material-ui/svg-icons/communication/call-missed-outgoing' {
  export import CommunicationCallMissedOutgoing = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallMissedOutgoing;
}

declare module 'dotin-material-ui/svg-icons/communication/stay-primary-portrait' {
  export import CommunicationStayPrimaryPortrait = __DotinMaterialUI.SvgIcon;
  export default CommunicationStayPrimaryPortrait;
}

declare module 'dotin-material-ui/svg-icons/communication/stay-current-portrait' {
  export import CommunicationStayCurrentPortrait = __DotinMaterialUI.SvgIcon;
  export default CommunicationStayCurrentPortrait;
}

declare module 'dotin-material-ui/svg-icons/communication/voicemail' {
  export import CommunicationVoicemail = __DotinMaterialUI.SvgIcon;
  export default CommunicationVoicemail;
}

declare module 'dotin-material-ui/svg-icons/communication/speaker-phone' {
  export import CommunicationSpeakerPhone = __DotinMaterialUI.SvgIcon;
  export default CommunicationSpeakerPhone;
}

declare module 'dotin-material-ui/svg-icons/communication/call-split' {
  export import CommunicationCallSplit = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallSplit;
}

declare module 'dotin-material-ui/svg-icons/communication/live-help' {
  export import CommunicationLiveHelp = __DotinMaterialUI.SvgIcon;
  export default CommunicationLiveHelp;
}

declare module 'dotin-material-ui/svg-icons/communication/call-made' {
  export import CommunicationCallMade = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallMade;
}

declare module 'dotin-material-ui/svg-icons/communication/phone' {
  export import CommunicationPhone = __DotinMaterialUI.SvgIcon;
  export default CommunicationPhone;
}

declare module 'dotin-material-ui/svg-icons/communication/textsms' {
  export import CommunicationTextsms = __DotinMaterialUI.SvgIcon;
  export default CommunicationTextsms;
}

declare module 'dotin-material-ui/svg-icons/communication/message' {
  export import CommunicationMessage = __DotinMaterialUI.SvgIcon;
  export default CommunicationMessage;
}

declare module 'dotin-material-ui/svg-icons/communication/import-export' {
  export import CommunicationImportExport = __DotinMaterialUI.SvgIcon;
  export default CommunicationImportExport;
}

declare module 'dotin-material-ui/svg-icons/communication/import-contacts' {
  export import CommunicationImportContacts = __DotinMaterialUI.SvgIcon;
  export default CommunicationImportContacts;
}

declare module 'dotin-material-ui/svg-icons/communication/phonelink-ring' {
  export import CommunicationPhonelinkRing = __DotinMaterialUI.SvgIcon;
  export default CommunicationPhonelinkRing;
}

declare module 'dotin-material-ui/svg-icons/communication/present-to-all' {
  export import CommunicationPresentToAll = __DotinMaterialUI.SvgIcon;
  export default CommunicationPresentToAll;
}

declare module 'dotin-material-ui/svg-icons/communication/contact-phone' {
  export import CommunicationContactPhone = __DotinMaterialUI.SvgIcon;
  export default CommunicationContactPhone;
}

declare module 'dotin-material-ui/svg-icons/communication/invert-colors-off' {
  export import CommunicationInvertColorsOff = __DotinMaterialUI.SvgIcon;
  export default CommunicationInvertColorsOff;
}

declare module 'dotin-material-ui/svg-icons/communication/comment' {
  export import CommunicationComment = __DotinMaterialUI.SvgIcon;
  export default CommunicationComment;
}

declare module 'dotin-material-ui/svg-icons/communication/chat-bubble' {
  export import CommunicationChatBubble = __DotinMaterialUI.SvgIcon;
  export default CommunicationChatBubble;
}

declare module 'dotin-material-ui/svg-icons/communication/mail-outline' {
  export import CommunicationMailOutline = __DotinMaterialUI.SvgIcon;
  export default CommunicationMailOutline;
}

declare module 'dotin-material-ui/svg-icons/communication/location-on' {
  export import CommunicationLocationOn = __DotinMaterialUI.SvgIcon;
  export default CommunicationLocationOn;
}

declare module 'dotin-material-ui/svg-icons/communication/stay-current-landscape' {
  export import CommunicationStayCurrentLandscape = __DotinMaterialUI.SvgIcon;
  export default CommunicationStayCurrentLandscape;
}

declare module 'dotin-material-ui/svg-icons/communication/location-off' {
  export import CommunicationLocationOff = __DotinMaterialUI.SvgIcon;
  export default CommunicationLocationOff;
}

declare module 'dotin-material-ui/svg-icons/communication/email' {
  export import CommunicationEmail = __DotinMaterialUI.SvgIcon;
  export default CommunicationEmail;
}

declare module 'dotin-material-ui/svg-icons/communication/call-end' {
  export import CommunicationCallEnd = __DotinMaterialUI.SvgIcon;
  export default CommunicationCallEnd;
}

declare module 'dotin-material-ui/svg-icons/toggle/check-box' {
  export import ToggleCheckBox = __DotinMaterialUI.SvgIcon;
  export default ToggleCheckBox;
}

declare module 'dotin-material-ui/svg-icons/toggle/star-half' {
  export import ToggleStarHalf = __DotinMaterialUI.SvgIcon;
  export default ToggleStarHalf;
}

declare module 'dotin-material-ui/svg-icons/toggle/check-box-outline-blank' {
  export import ToggleCheckBoxOutlineBlank = __DotinMaterialUI.SvgIcon;
  export default ToggleCheckBoxOutlineBlank;
}

declare module 'dotin-material-ui/svg-icons/toggle/star' {
  export import ToggleStar = __DotinMaterialUI.SvgIcon;
  export default ToggleStar;
}

declare module 'dotin-material-ui/svg-icons/toggle/star-border' {
  export import ToggleStarBorder = __DotinMaterialUI.SvgIcon;
  export default ToggleStarBorder;
}

declare module 'dotin-material-ui/svg-icons/toggle/radio-button-unchecked' {
  export import ToggleRadioButtonUnchecked = __DotinMaterialUI.SvgIcon;
  export default ToggleRadioButtonUnchecked;
}

declare module 'dotin-material-ui/svg-icons/toggle/indeterminate-check-box' {
  export import ToggleIndeterminateCheckBox = __DotinMaterialUI.SvgIcon;
  export default ToggleIndeterminateCheckBox;
}

declare module 'dotin-material-ui/svg-icons/toggle/radio-button-checked' {
  export import ToggleRadioButtonChecked = __DotinMaterialUI.SvgIcon;
  export default ToggleRadioButtonChecked;
}

declare module 'dotin-material-ui/svg-icons/index' {
  export import Index = __DotinMaterialUI.SvgIcon;
  export default Index;
}

declare module 'dotin-material-ui/svg-icons/index-generator' {
  export import IndexGenerator = __DotinMaterialUI.SvgIcon;
  export default IndexGenerator;
}

declare module 'dotin-material-ui/svg-icons/alert/warning' {
  export import AlertWarning = __DotinMaterialUI.SvgIcon;
  export default AlertWarning;
}

declare module 'dotin-material-ui/svg-icons/alert/add-alert' {
  export import AlertAddAlert = __DotinMaterialUI.SvgIcon;
  export default AlertAddAlert;
}

declare module 'dotin-material-ui/svg-icons/alert/error-outline' {
  export import AlertErrorOutline = __DotinMaterialUI.SvgIcon;
  export default AlertErrorOutline;
}

declare module 'dotin-material-ui/svg-icons/alert/error' {
  export import AlertError = __DotinMaterialUI.SvgIcon;
  export default AlertError;
}

declare module 'dotin-material-ui/svg-icons/file/file-upload' {
  export import FileFileUpload = __DotinMaterialUI.SvgIcon;
  export default FileFileUpload;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-upload' {
  export import FileCloudUpload = __DotinMaterialUI.SvgIcon;
  export default FileCloudUpload;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-done' {
  export import FileCloudDone = __DotinMaterialUI.SvgIcon;
  export default FileCloudDone;
}

declare module 'dotin-material-ui/svg-icons/file/folder-open' {
  export import FileFolderOpen = __DotinMaterialUI.SvgIcon;
  export default FileFolderOpen;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-off' {
  export import FileCloudOff = __DotinMaterialUI.SvgIcon;
  export default FileCloudOff;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-queue' {
  export import FileCloudQueue = __DotinMaterialUI.SvgIcon;
  export default FileCloudQueue;
}

declare module 'dotin-material-ui/svg-icons/file/folder-shared' {
  export import FileFolderShared = __DotinMaterialUI.SvgIcon;
  export default FileFolderShared;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-circle' {
  export import FileCloudCircle = __DotinMaterialUI.SvgIcon;
  export default FileCloudCircle;
}

declare module 'dotin-material-ui/svg-icons/file/folder' {
  export import FileFolder = __DotinMaterialUI.SvgIcon;
  export default FileFolder;
}

declare module 'dotin-material-ui/svg-icons/file/attachment' {
  export import FileAttachment = __DotinMaterialUI.SvgIcon;
  export default FileAttachment;
}

declare module 'dotin-material-ui/svg-icons/file/create-new-folder' {
  export import FileCreateNewFolder = __DotinMaterialUI.SvgIcon;
  export default FileCreateNewFolder;
}

declare module 'dotin-material-ui/svg-icons/file/cloud-download' {
  export import FileCloudDownload = __DotinMaterialUI.SvgIcon;
  export default FileCloudDownload;
}

declare module 'dotin-material-ui/svg-icons/file/cloud' {
  export import FileCloud = __DotinMaterialUI.SvgIcon;
  export default FileCloud;
}

declare module 'dotin-material-ui/svg-icons/file/file-download' {
  export import FileFileDownload = __DotinMaterialUI.SvgIcon;
  export default FileFileDownload;
}

declare module 'dotin-material-ui/svg-icons/navigation-arrow-drop-right' {
  export import NavigationArrowDropRight = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowDropRight;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard' {
  export import HardwareKeyboard = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboard;
}

declare module 'dotin-material-ui/svg-icons/hardware/toys' {
  export import HardwareToys = __DotinMaterialUI.SvgIcon;
  export default HardwareToys;
}

declare module 'dotin-material-ui/svg-icons/hardware/dock' {
  export import HardwareDock = __DotinMaterialUI.SvgIcon;
  export default HardwareDock;
}

declare module 'dotin-material-ui/svg-icons/hardware/headset' {
  export import HardwareHeadset = __DotinMaterialUI.SvgIcon;
  export default HardwareHeadset;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-voice' {
  export import HardwareKeyboardVoice = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardVoice;
}

declare module 'dotin-material-ui/svg-icons/hardware/phonelink-off' {
  export import HardwarePhonelinkOff = __DotinMaterialUI.SvgIcon;
  export default HardwarePhonelinkOff;
}

declare module 'dotin-material-ui/svg-icons/hardware/speaker-group' {
  export import HardwareSpeakerGroup = __DotinMaterialUI.SvgIcon;
  export default HardwareSpeakerGroup;
}

declare module 'dotin-material-ui/svg-icons/hardware/desktop-windows' {
  export import HardwareDesktopWindows = __DotinMaterialUI.SvgIcon;
  export default HardwareDesktopWindows;
}

declare module 'dotin-material-ui/svg-icons/hardware/laptop-mac' {
  export import HardwareLaptopMac = __DotinMaterialUI.SvgIcon;
  export default HardwareLaptopMac;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-return' {
  export import HardwareKeyboardReturn = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardReturn;
}

declare module 'dotin-material-ui/svg-icons/hardware/gamepad' {
  export import HardwareGamepad = __DotinMaterialUI.SvgIcon;
  export default HardwareGamepad;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-arrow-up' {
  export import HardwareKeyboardArrowUp = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardArrowUp;
}

declare module 'dotin-material-ui/svg-icons/hardware/laptop' {
  export import HardwareLaptop = __DotinMaterialUI.SvgIcon;
  export default HardwareLaptop;
}

declare module 'dotin-material-ui/svg-icons/hardware/phone-iphone' {
  export import HardwarePhoneIphone = __DotinMaterialUI.SvgIcon;
  export default HardwarePhoneIphone;
}

declare module 'dotin-material-ui/svg-icons/hardware/memory' {
  export import HardwareMemory = __DotinMaterialUI.SvgIcon;
  export default HardwareMemory;
}

declare module 'dotin-material-ui/svg-icons/hardware/security' {
  export import HardwareSecurity = __DotinMaterialUI.SvgIcon;
  export default HardwareSecurity;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-capslock' {
  export import HardwareKeyboardCapslock = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardCapslock;
}

declare module 'dotin-material-ui/svg-icons/hardware/sim-card' {
  export import HardwareSimCard = __DotinMaterialUI.SvgIcon;
  export default HardwareSimCard;
}

declare module 'dotin-material-ui/svg-icons/hardware/devices-other' {
  export import HardwareDevicesOther = __DotinMaterialUI.SvgIcon;
  export default HardwareDevicesOther;
}

declare module 'dotin-material-ui/svg-icons/hardware/tablet-android' {
  export import HardwareTabletAndroid = __DotinMaterialUI.SvgIcon;
  export default HardwareTabletAndroid;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-arrow-right' {
  export import HardwareKeyboardArrowRight = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardArrowRight;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-tab' {
  export import HardwareKeyboardTab = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardTab;
}

declare module 'dotin-material-ui/svg-icons/hardware/watch' {
  export import HardwareWatch = __DotinMaterialUI.SvgIcon;
  export default HardwareWatch;
}

declare module 'dotin-material-ui/svg-icons/hardware/speaker' {
  export import HardwareSpeaker = __DotinMaterialUI.SvgIcon;
  export default HardwareSpeaker;
}

declare module 'dotin-material-ui/svg-icons/hardware/phonelink' {
  export import HardwarePhonelink = __DotinMaterialUI.SvgIcon;
  export default HardwarePhonelink;
}

declare module 'dotin-material-ui/svg-icons/hardware/laptop-windows' {
  export import HardwareLaptopWindows = __DotinMaterialUI.SvgIcon;
  export default HardwareLaptopWindows;
}

declare module 'dotin-material-ui/svg-icons/hardware/tv' {
  export import HardwareTv = __DotinMaterialUI.SvgIcon;
  export default HardwareTv;
}

declare module 'dotin-material-ui/svg-icons/hardware/headset-mic' {
  export import HardwareHeadsetMic = __DotinMaterialUI.SvgIcon;
  export default HardwareHeadsetMic;
}

declare module 'dotin-material-ui/svg-icons/hardware/videogame-asset' {
  export import HardwareVideogameAsset = __DotinMaterialUI.SvgIcon;
  export default HardwareVideogameAsset;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-arrow-down' {
  export import HardwareKeyboardArrowDown = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardArrowDown;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-hide' {
  export import HardwareKeyboardHide = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardHide;
}

declare module 'dotin-material-ui/svg-icons/hardware/scanner' {
  export import HardwareScanner = __DotinMaterialUI.SvgIcon;
  export default HardwareScanner;
}

declare module 'dotin-material-ui/svg-icons/hardware/laptop-chromebook' {
  export import HardwareLaptopChromebook = __DotinMaterialUI.SvgIcon;
  export default HardwareLaptopChromebook;
}

declare module 'dotin-material-ui/svg-icons/hardware/tablet-mac' {
  export import HardwareTabletMac = __DotinMaterialUI.SvgIcon;
  export default HardwareTabletMac;
}

declare module 'dotin-material-ui/svg-icons/hardware/cast' {
  export import HardwareCast = __DotinMaterialUI.SvgIcon;
  export default HardwareCast;
}

declare module 'dotin-material-ui/svg-icons/hardware/cast-connected' {
  export import HardwareCastConnected = __DotinMaterialUI.SvgIcon;
  export default HardwareCastConnected;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-arrow-left' {
  export import HardwareKeyboardArrowLeft = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardArrowLeft;
}

declare module 'dotin-material-ui/svg-icons/hardware/phone-android' {
  export import HardwarePhoneAndroid = __DotinMaterialUI.SvgIcon;
  export default HardwarePhoneAndroid;
}

declare module 'dotin-material-ui/svg-icons/hardware/computer' {
  export import HardwareComputer = __DotinMaterialUI.SvgIcon;
  export default HardwareComputer;
}

declare module 'dotin-material-ui/svg-icons/hardware/power-input' {
  export import HardwarePowerInput = __DotinMaterialUI.SvgIcon;
  export default HardwarePowerInput;
}

declare module 'dotin-material-ui/svg-icons/hardware/smartphone' {
  export import HardwareSmartphone = __DotinMaterialUI.SvgIcon;
  export default HardwareSmartphone;
}

declare module 'dotin-material-ui/svg-icons/hardware/router' {
  export import HardwareRouter = __DotinMaterialUI.SvgIcon;
  export default HardwareRouter;
}

declare module 'dotin-material-ui/svg-icons/hardware/keyboard-backspace' {
  export import HardwareKeyboardBackspace = __DotinMaterialUI.SvgIcon;
  export default HardwareKeyboardBackspace;
}

declare module 'dotin-material-ui/svg-icons/hardware/developer-board' {
  export import HardwareDeveloperBoard = __DotinMaterialUI.SvgIcon;
  export default HardwareDeveloperBoard;
}

declare module 'dotin-material-ui/svg-icons/hardware/device-hub' {
  export import HardwareDeviceHub = __DotinMaterialUI.SvgIcon;
  export default HardwareDeviceHub;
}

declare module 'dotin-material-ui/svg-icons/hardware/mouse' {
  export import HardwareMouse = __DotinMaterialUI.SvgIcon;
  export default HardwareMouse;
}

declare module 'dotin-material-ui/svg-icons/hardware/desktop-mac' {
  export import HardwareDesktopMac = __DotinMaterialUI.SvgIcon;
  export default HardwareDesktopMac;
}

declare module 'dotin-material-ui/svg-icons/hardware/tablet' {
  export import HardwareTablet = __DotinMaterialUI.SvgIcon;
  export default HardwareTablet;
}

declare module 'dotin-material-ui/svg-icons/content/add-box' {
  export import ContentAddBox = __DotinMaterialUI.SvgIcon;
  export default ContentAddBox;
}

declare module 'dotin-material-ui/svg-icons/content/filter-list' {
  export import ContentFilterList = __DotinMaterialUI.SvgIcon;
  export default ContentFilterList;
}

declare module 'dotin-material-ui/svg-icons/content/save' {
  export import ContentSave = __DotinMaterialUI.SvgIcon;
  export default ContentSave;
}

declare module 'dotin-material-ui/svg-icons/content/unarchive' {
  export import ContentUnarchive = __DotinMaterialUI.SvgIcon;
  export default ContentUnarchive;
}

declare module 'dotin-material-ui/svg-icons/content/link' {
  export import ContentLink = __DotinMaterialUI.SvgIcon;
  export default ContentLink;
}

declare module 'dotin-material-ui/svg-icons/content/sort' {
  export import ContentSort = __DotinMaterialUI.SvgIcon;
  export default ContentSort;
}

declare module 'dotin-material-ui/svg-icons/content/text-format' {
  export import ContentTextFormat = __DotinMaterialUI.SvgIcon;
  export default ContentTextFormat;
}

declare module 'dotin-material-ui/svg-icons/content/add' {
  export import ContentAdd = __DotinMaterialUI.SvgIcon;
  export default ContentAdd;
}

declare module 'dotin-material-ui/svg-icons/content/send' {
  export import ContentSend = __DotinMaterialUI.SvgIcon;
  export default ContentSend;
}

declare module 'dotin-material-ui/svg-icons/content/gesture' {
  export import ContentGesture = __DotinMaterialUI.SvgIcon;
  export default ContentGesture;
}

declare module 'dotin-material-ui/svg-icons/content/archive' {
  export import ContentArchive = __DotinMaterialUI.SvgIcon;
  export default ContentArchive;
}

declare module 'dotin-material-ui/svg-icons/content/weekend' {
  export import ContentWeekend = __DotinMaterialUI.SvgIcon;
  export default ContentWeekend;
}

declare module 'dotin-material-ui/svg-icons/content/markunread' {
  export import ContentMarkunread = __DotinMaterialUI.SvgIcon;
  export default ContentMarkunread;
}

declare module 'dotin-material-ui/svg-icons/content/create' {
  export import ContentCreate = __DotinMaterialUI.SvgIcon;
  export default ContentCreate;
}

declare module 'dotin-material-ui/svg-icons/content/content-cut' {
  export import ContentContentCut = __DotinMaterialUI.SvgIcon;
  export default ContentContentCut;
}

declare module 'dotin-material-ui/svg-icons/content/clear' {
  export import ContentClear = __DotinMaterialUI.SvgIcon;
  export default ContentClear;
}

declare module 'dotin-material-ui/svg-icons/content/redo' {
  export import ContentRedo = __DotinMaterialUI.SvgIcon;
  export default ContentRedo;
}

declare module 'dotin-material-ui/svg-icons/content/block' {
  export import ContentBlock = __DotinMaterialUI.SvgIcon;
  export default ContentBlock;
}

declare module 'dotin-material-ui/svg-icons/content/forward' {
  export import ContentForward = __DotinMaterialUI.SvgIcon;
  export default ContentForward;
}

declare module 'dotin-material-ui/svg-icons/content/mail' {
  export import ContentMail = __DotinMaterialUI.SvgIcon;
  export default ContentMail;
}

declare module 'dotin-material-ui/svg-icons/content/inbox' {
  export import ContentInbox = __DotinMaterialUI.SvgIcon;
  export default ContentInbox;
}

declare module 'dotin-material-ui/svg-icons/content/remove-circle' {
  export import ContentRemoveCircle = __DotinMaterialUI.SvgIcon;
  export default ContentRemoveCircle;
}

declare module 'dotin-material-ui/svg-icons/content/move-to-inbox' {
  export import ContentMoveToInbox = __DotinMaterialUI.SvgIcon;
  export default ContentMoveToInbox;
}

declare module 'dotin-material-ui/svg-icons/content/flag' {
  export import ContentFlag = __DotinMaterialUI.SvgIcon;
  export default ContentFlag;
}

declare module 'dotin-material-ui/svg-icons/content/reply-all' {
  export import ContentReplyAll = __DotinMaterialUI.SvgIcon;
  export default ContentReplyAll;
}

declare module 'dotin-material-ui/svg-icons/content/remove' {
  export import ContentRemove = __DotinMaterialUI.SvgIcon;
  export default ContentRemove;
}

declare module 'dotin-material-ui/svg-icons/content/next-week' {
  export import ContentNextWeek = __DotinMaterialUI.SvgIcon;
  export default ContentNextWeek;
}

declare module 'dotin-material-ui/svg-icons/content/undo' {
  export import ContentUndo = __DotinMaterialUI.SvgIcon;
  export default ContentUndo;
}

declare module 'dotin-material-ui/svg-icons/content/font-download' {
  export import ContentFontDownload = __DotinMaterialUI.SvgIcon;
  export default ContentFontDownload;
}

declare module 'dotin-material-ui/svg-icons/content/remove-circle-outline' {
  export import ContentRemoveCircleOutline = __DotinMaterialUI.SvgIcon;
  export default ContentRemoveCircleOutline;
}

declare module 'dotin-material-ui/svg-icons/content/backspace' {
  export import ContentBackspace = __DotinMaterialUI.SvgIcon;
  export default ContentBackspace;
}

declare module 'dotin-material-ui/svg-icons/content/reply' {
  export import ContentReply = __DotinMaterialUI.SvgIcon;
  export default ContentReply;
}

declare module 'dotin-material-ui/svg-icons/content/report' {
  export import ContentReport = __DotinMaterialUI.SvgIcon;
  export default ContentReport;
}

declare module 'dotin-material-ui/svg-icons/content/add-circle' {
  export import ContentAddCircle = __DotinMaterialUI.SvgIcon;
  export default ContentAddCircle;
}

declare module 'dotin-material-ui/svg-icons/content/content-copy' {
  export import ContentContentCopy = __DotinMaterialUI.SvgIcon;
  export default ContentContentCopy;
}

declare module 'dotin-material-ui/svg-icons/content/content-paste' {
  export import ContentContentPaste = __DotinMaterialUI.SvgIcon;
  export default ContentContentPaste;
}

declare module 'dotin-material-ui/svg-icons/content/select-all' {
  export import ContentSelectAll = __DotinMaterialUI.SvgIcon;
  export default ContentSelectAll;
}

declare module 'dotin-material-ui/svg-icons/content/add-circle-outline' {
  export import ContentAddCircleOutline = __DotinMaterialUI.SvgIcon;
  export default ContentAddCircleOutline;
}

declare module 'dotin-material-ui/svg-icons/content/drafts' {
  export import ContentDrafts = __DotinMaterialUI.SvgIcon;
  export default ContentDrafts;
}

declare module 'dotin-material-ui/svg-icons/editor/wrap-text' {
  export import EditorWrapText = __DotinMaterialUI.SvgIcon;
  export default EditorWrapText;
}

declare module 'dotin-material-ui/svg-icons/editor/format-size' {
  export import EditorFormatSize = __DotinMaterialUI.SvgIcon;
  export default EditorFormatSize;
}

declare module 'dotin-material-ui/svg-icons/editor/functions' {
  export import EditorFunctions = __DotinMaterialUI.SvgIcon;
  export default EditorFunctions;
}

declare module 'dotin-material-ui/svg-icons/editor/format-bold' {
  export import EditorFormatBold = __DotinMaterialUI.SvgIcon;
  export default EditorFormatBold;
}

declare module 'dotin-material-ui/svg-icons/editor/format-align-center' {
  export import EditorFormatAlignCenter = __DotinMaterialUI.SvgIcon;
  export default EditorFormatAlignCenter;
}

declare module 'dotin-material-ui/svg-icons/editor/mode-comment' {
  export import EditorModeComment = __DotinMaterialUI.SvgIcon;
  export default EditorModeComment;
}

declare module 'dotin-material-ui/svg-icons/editor/money-off' {
  export import EditorMoneyOff = __DotinMaterialUI.SvgIcon;
  export default EditorMoneyOff;
}

declare module 'dotin-material-ui/svg-icons/editor/format-textdirection-r-to-l' {
  export import EditorFormatTextdirectionRToL = __DotinMaterialUI.SvgIcon;
  export default EditorFormatTextdirectionRToL;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-drive-file' {
  export import EditorInsertDriveFile = __DotinMaterialUI.SvgIcon;
  export default EditorInsertDriveFile;
}

declare module 'dotin-material-ui/svg-icons/editor/highlight' {
  export import EditorHighlight = __DotinMaterialUI.SvgIcon;
  export default EditorHighlight;
}

declare module 'dotin-material-ui/svg-icons/editor/format-clear' {
  export import EditorFormatClear = __DotinMaterialUI.SvgIcon;
  export default EditorFormatClear;
}

declare module 'dotin-material-ui/svg-icons/editor/border-style' {
  export import EditorBorderStyle = __DotinMaterialUI.SvgIcon;
  export default EditorBorderStyle;
}

declare module 'dotin-material-ui/svg-icons/editor/format-shapes' {
  export import EditorFormatShapes = __DotinMaterialUI.SvgIcon;
  export default EditorFormatShapes;
}

declare module 'dotin-material-ui/svg-icons/editor/format-paint' {
  export import EditorFormatPaint = __DotinMaterialUI.SvgIcon;
  export default EditorFormatPaint;
}

declare module 'dotin-material-ui/svg-icons/editor/linear-scale' {
  export import EditorLinearScale = __DotinMaterialUI.SvgIcon;
  export default EditorLinearScale;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-photo' {
  export import EditorInsertPhoto = __DotinMaterialUI.SvgIcon;
  export default EditorInsertPhoto;
}

declare module 'dotin-material-ui/svg-icons/editor/drag-handle' {
  export import EditorDragHandle = __DotinMaterialUI.SvgIcon;
  export default EditorDragHandle;
}

declare module 'dotin-material-ui/svg-icons/editor/merge-type' {
  export import EditorMergeType = __DotinMaterialUI.SvgIcon;
  export default EditorMergeType;
}

declare module 'dotin-material-ui/svg-icons/editor/attach-money' {
  export import EditorAttachMoney = __DotinMaterialUI.SvgIcon;
  export default EditorAttachMoney;
}

declare module 'dotin-material-ui/svg-icons/editor/border-vertical' {
  export import EditorBorderVertical = __DotinMaterialUI.SvgIcon;
  export default EditorBorderVertical;
}

declare module 'dotin-material-ui/svg-icons/editor/format-indent-decrease' {
  export import EditorFormatIndentDecrease = __DotinMaterialUI.SvgIcon;
  export default EditorFormatIndentDecrease;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-emoticon' {
  export import EditorInsertEmoticon = __DotinMaterialUI.SvgIcon;
  export default EditorInsertEmoticon;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-invitation' {
  export import EditorInsertInvitation = __DotinMaterialUI.SvgIcon;
  export default EditorInsertInvitation;
}

declare module 'dotin-material-ui/svg-icons/editor/format-color-fill' {
  export import EditorFormatColorFill = __DotinMaterialUI.SvgIcon;
  export default EditorFormatColorFill;
}

declare module 'dotin-material-ui/svg-icons/editor/mode-edit' {
  export import EditorModeEdit = __DotinMaterialUI.SvgIcon;
  export default EditorModeEdit;
}

declare module 'dotin-material-ui/svg-icons/editor/vertical-align-bottom' {
  export import EditorVerticalAlignBottom = __DotinMaterialUI.SvgIcon;
  export default EditorVerticalAlignBottom;
}

declare module 'dotin-material-ui/svg-icons/editor/format-align-justify' {
  export import EditorFormatAlignJustify = __DotinMaterialUI.SvgIcon;
  export default EditorFormatAlignJustify;
}

declare module 'dotin-material-ui/svg-icons/editor/attach-file' {
  export import EditorAttachFile = __DotinMaterialUI.SvgIcon;
  export default EditorAttachFile;
}

declare module 'dotin-material-ui/svg-icons/editor/space-bar' {
  export import EditorSpaceBar = __DotinMaterialUI.SvgIcon;
  export default EditorSpaceBar;
}

declare module 'dotin-material-ui/svg-icons/editor/border-clear' {
  export import EditorBorderClear = __DotinMaterialUI.SvgIcon;
  export default EditorBorderClear;
}

declare module 'dotin-material-ui/svg-icons/editor/short-text' {
  export import EditorShortText = __DotinMaterialUI.SvgIcon;
  export default EditorShortText;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-link' {
  export import EditorInsertLink = __DotinMaterialUI.SvgIcon;
  export default EditorInsertLink;
}

declare module 'dotin-material-ui/svg-icons/editor/format-list-numbered' {
  export import EditorFormatListNumbered = __DotinMaterialUI.SvgIcon;
  export default EditorFormatListNumbered;
}

declare module 'dotin-material-ui/svg-icons/editor/format-quote' {
  export import EditorFormatQuote = __DotinMaterialUI.SvgIcon;
  export default EditorFormatQuote;
}

declare module 'dotin-material-ui/svg-icons/editor/border-left' {
  export import EditorBorderLeft = __DotinMaterialUI.SvgIcon;
  export default EditorBorderLeft;
}

declare module 'dotin-material-ui/svg-icons/editor/format-underlined' {
  export import EditorFormatUnderlined = __DotinMaterialUI.SvgIcon;
  export default EditorFormatUnderlined;
}

declare module 'dotin-material-ui/svg-icons/editor/text-fields' {
  export import EditorTextFields = __DotinMaterialUI.SvgIcon;
  export default EditorTextFields;
}

declare module 'dotin-material-ui/svg-icons/editor/format-italic' {
  export import EditorFormatItalic = __DotinMaterialUI.SvgIcon;
  export default EditorFormatItalic;
}

declare module 'dotin-material-ui/svg-icons/editor/publish' {
  export import EditorPublish = __DotinMaterialUI.SvgIcon;
  export default EditorPublish;
}

declare module 'dotin-material-ui/svg-icons/editor/border-top' {
  export import EditorBorderTop = __DotinMaterialUI.SvgIcon;
  export default EditorBorderTop;
}

declare module 'dotin-material-ui/svg-icons/editor/format-indent-increase' {
  export import EditorFormatIndentIncrease = __DotinMaterialUI.SvgIcon;
  export default EditorFormatIndentIncrease;
}

declare module 'dotin-material-ui/svg-icons/editor/border-bottom' {
  export import EditorBorderBottom = __DotinMaterialUI.SvgIcon;
  export default EditorBorderBottom;
}

declare module 'dotin-material-ui/svg-icons/editor/format-align-right' {
  export import EditorFormatAlignRight = __DotinMaterialUI.SvgIcon;
  export default EditorFormatAlignRight;
}

declare module 'dotin-material-ui/svg-icons/editor/border-right' {
  export import EditorBorderRight = __DotinMaterialUI.SvgIcon;
  export default EditorBorderRight;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-comment' {
  export import EditorInsertComment = __DotinMaterialUI.SvgIcon;
  export default EditorInsertComment;
}

declare module 'dotin-material-ui/svg-icons/editor/strikethrough-s' {
  export import EditorStrikethroughS = __DotinMaterialUI.SvgIcon;
  export default EditorStrikethroughS;
}

declare module 'dotin-material-ui/svg-icons/editor/format-strikethrough' {
  export import EditorFormatStrikethrough = __DotinMaterialUI.SvgIcon;
  export default EditorFormatStrikethrough;
}

declare module 'dotin-material-ui/svg-icons/editor/insert-chart' {
  export import EditorInsertChart = __DotinMaterialUI.SvgIcon;
  export default EditorInsertChart;
}

declare module 'dotin-material-ui/svg-icons/editor/format-color-reset' {
  export import EditorFormatColorReset = __DotinMaterialUI.SvgIcon;
  export default EditorFormatColorReset;
}

declare module 'dotin-material-ui/svg-icons/editor/border-inner' {
  export import EditorBorderInner = __DotinMaterialUI.SvgIcon;
  export default EditorBorderInner;
}

declare module 'dotin-material-ui/svg-icons/editor/format-color-text' {
  export import EditorFormatColorText = __DotinMaterialUI.SvgIcon;
  export default EditorFormatColorText;
}

declare module 'dotin-material-ui/svg-icons/editor/border-horizontal' {
  export import EditorBorderHorizontal = __DotinMaterialUI.SvgIcon;
  export default EditorBorderHorizontal;
}

declare module 'dotin-material-ui/svg-icons/editor/format-list-bulleted' {
  export import EditorFormatListBulleted = __DotinMaterialUI.SvgIcon;
  export default EditorFormatListBulleted;
}

declare module 'dotin-material-ui/svg-icons/editor/border-outer' {
  export import EditorBorderOuter = __DotinMaterialUI.SvgIcon;
  export default EditorBorderOuter;
}

declare module 'dotin-material-ui/svg-icons/editor/format-align-left' {
  export import EditorFormatAlignLeft = __DotinMaterialUI.SvgIcon;
  export default EditorFormatAlignLeft;
}

declare module 'dotin-material-ui/svg-icons/editor/border-color' {
  export import EditorBorderColor = __DotinMaterialUI.SvgIcon;
  export default EditorBorderColor;
}

declare module 'dotin-material-ui/svg-icons/editor/format-textdirection-l-to-r' {
  export import EditorFormatTextdirectionLToR = __DotinMaterialUI.SvgIcon;
  export default EditorFormatTextdirectionLToR;
}

declare module 'dotin-material-ui/svg-icons/editor/vertical-align-center' {
  export import EditorVerticalAlignCenter = __DotinMaterialUI.SvgIcon;
  export default EditorVerticalAlignCenter;
}

declare module 'dotin-material-ui/svg-icons/editor/vertical-align-top' {
  export import EditorVerticalAlignTop = __DotinMaterialUI.SvgIcon;
  export default EditorVerticalAlignTop;
}

declare module 'dotin-material-ui/svg-icons/editor/format-line-spacing' {
  export import EditorFormatLineSpacing = __DotinMaterialUI.SvgIcon;
  export default EditorFormatLineSpacing;
}

declare module 'dotin-material-ui/svg-icons/editor/border-all' {
  export import EditorBorderAll = __DotinMaterialUI.SvgIcon;
  export default EditorBorderAll;
}

declare module 'dotin-material-ui/svg-icons/device/screen-lock-portrait' {
  export import DeviceScreenLockPortrait = __DotinMaterialUI.SvgIcon;
  export default DeviceScreenLockPortrait;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-off' {
  export import DeviceSignalCellularOff = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularOff;
}

declare module 'dotin-material-ui/svg-icons/device/bluetooth-searching' {
  export import DeviceBluetoothSearching = __DotinMaterialUI.SvgIcon;
  export default DeviceBluetoothSearching;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-3-bar' {
  export import DeviceSignalCellular3Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellular3Bar;
}

declare module 'dotin-material-ui/svg-icons/device/network-cell' {
  export import DeviceNetworkCell = __DotinMaterialUI.SvgIcon;
  export default DeviceNetworkCell;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-no-sim' {
  export import DeviceSignalCellularNoSim = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularNoSim;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-2-bar' {
  export import DeviceSignalWifi2Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi2Bar;
}

declare module 'dotin-material-ui/svg-icons/device/devices' {
  export import DeviceDevices = __DotinMaterialUI.SvgIcon;
  export default DeviceDevices;
}

declare module 'dotin-material-ui/svg-icons/device/battery-90' {
  export import DeviceBattery90 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery90;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-80' {
  export import DeviceBatteryCharging80 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging80;
}

declare module 'dotin-material-ui/svg-icons/device/location-searching' {
  export import DeviceLocationSearching = __DotinMaterialUI.SvgIcon;
  export default DeviceLocationSearching;
}

declare module 'dotin-material-ui/svg-icons/device/wallpaper' {
  export import DeviceWallpaper = __DotinMaterialUI.SvgIcon;
  export default DeviceWallpaper;
}

declare module 'dotin-material-ui/svg-icons/device/screen-lock-rotation' {
  export import DeviceScreenLockRotation = __DotinMaterialUI.SvgIcon;
  export default DeviceScreenLockRotation;
}

declare module 'dotin-material-ui/svg-icons/device/screen-lock-landscape' {
  export import DeviceScreenLockLandscape = __DotinMaterialUI.SvgIcon;
  export default DeviceScreenLockLandscape;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-20' {
  export import DeviceBatteryCharging20 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging20;
}

declare module 'dotin-material-ui/svg-icons/device/usb' {
  export import DeviceUsb = __DotinMaterialUI.SvgIcon;
  export default DeviceUsb;
}

declare module 'dotin-material-ui/svg-icons/device/airplanemode-active' {
  export import DeviceAirplanemodeActive = __DotinMaterialUI.SvgIcon;
  export default DeviceAirplanemodeActive;
}

declare module 'dotin-material-ui/svg-icons/device/network-wifi' {
  export import DeviceNetworkWifi = __DotinMaterialUI.SvgIcon;
  export default DeviceNetworkWifi;
}

declare module 'dotin-material-ui/svg-icons/device/graphic-eq' {
  export import DeviceGraphicEq = __DotinMaterialUI.SvgIcon;
  export default DeviceGraphicEq;
}

declare module 'dotin-material-ui/svg-icons/device/bluetooth-connected' {
  export import DeviceBluetoothConnected = __DotinMaterialUI.SvgIcon;
  export default DeviceBluetoothConnected;
}

declare module 'dotin-material-ui/svg-icons/device/gps-fixed' {
  export import DeviceGpsFixed = __DotinMaterialUI.SvgIcon;
  export default DeviceGpsFixed;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar' {
  export import DeviceSignalCellularConnectedNoInternet4Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularConnectedNoInternet4Bar;
}

declare module 'dotin-material-ui/svg-icons/device/brightness-medium' {
  export import DeviceBrightnessMedium = __DotinMaterialUI.SvgIcon;
  export default DeviceBrightnessMedium;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar' {
  export import DeviceSignalCellularConnectedNoInternet3Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularConnectedNoInternet3Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-3-bar-lock' {
  export import DeviceSignalWifi3BarLock = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi3BarLock;
}

declare module 'dotin-material-ui/svg-icons/device/battery-80' {
  export import DeviceBattery80 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery80;
}

declare module 'dotin-material-ui/svg-icons/device/wifi-lock' {
  export import DeviceWifiLock = __DotinMaterialUI.SvgIcon;
  export default DeviceWifiLock;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-2-bar-lock' {
  export import DeviceSignalWifi2BarLock = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi2BarLock;
}

declare module 'dotin-material-ui/svg-icons/device/bluetooth' {
  export import DeviceBluetooth = __DotinMaterialUI.SvgIcon;
  export default DeviceBluetooth;
}

declare module 'dotin-material-ui/svg-icons/device/access-time' {
  export import DeviceAccessTime = __DotinMaterialUI.SvgIcon;
  export default DeviceAccessTime;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-30' {
  export import DeviceBatteryCharging30 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging30;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-off' {
  export import DeviceSignalWifiOff = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifiOff;
}

declare module 'dotin-material-ui/svg-icons/device/dvr' {
  export import DeviceDvr = __DotinMaterialUI.SvgIcon;
  export default DeviceDvr;
}

declare module 'dotin-material-ui/svg-icons/device/battery-60' {
  export import DeviceBattery60 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery60;
}

declare module 'dotin-material-ui/svg-icons/device/access-alarm' {
  export import DeviceAccessAlarm = __DotinMaterialUI.SvgIcon;
  export default DeviceAccessAlarm;
}

declare module 'dotin-material-ui/svg-icons/device/nfc' {
  export import DeviceNfc = __DotinMaterialUI.SvgIcon;
  export default DeviceNfc;
}

declare module 'dotin-material-ui/svg-icons/device/data-usage' {
  export import DeviceDataUsage = __DotinMaterialUI.SvgIcon;
  export default DeviceDataUsage;
}

declare module 'dotin-material-ui/svg-icons/device/access-alarms' {
  export import DeviceAccessAlarms = __DotinMaterialUI.SvgIcon;
  export default DeviceAccessAlarms;
}

declare module 'dotin-material-ui/svg-icons/device/battery-full' {
  export import DeviceBatteryFull = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryFull;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-full' {
  export import DeviceBatteryChargingFull = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryChargingFull;
}

declare module 'dotin-material-ui/svg-icons/device/settings-system-daydream' {
  export import DeviceSettingsSystemDaydream = __DotinMaterialUI.SvgIcon;
  export default DeviceSettingsSystemDaydream;
}

declare module 'dotin-material-ui/svg-icons/device/battery-std' {
  export import DeviceBatteryStd = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryStd;
}

declare module 'dotin-material-ui/svg-icons/device/battery-unknown' {
  export import DeviceBatteryUnknown = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryUnknown;
}

declare module 'dotin-material-ui/svg-icons/device/add-alarm' {
  export import DeviceAddAlarm = __DotinMaterialUI.SvgIcon;
  export default DeviceAddAlarm;
}

declare module 'dotin-material-ui/svg-icons/device/storage' {
  export import DeviceStorage = __DotinMaterialUI.SvgIcon;
  export default DeviceStorage;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-90' {
  export import DeviceBatteryCharging90 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging90;
}

declare module 'dotin-material-ui/svg-icons/device/screen-rotation' {
  export import DeviceScreenRotation = __DotinMaterialUI.SvgIcon;
  export default DeviceScreenRotation;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-4-bar' {
  export import DeviceSignalWifi4Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi4Bar;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-50' {
  export import DeviceBatteryCharging50 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging50;
}

declare module 'dotin-material-ui/svg-icons/device/battery-30' {
  export import DeviceBattery30 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery30;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar' {
  export import DeviceSignalCellularConnectedNoInternet0Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularConnectedNoInternet0Bar;
}

declare module 'dotin-material-ui/svg-icons/device/battery-alert' {
  export import DeviceBatteryAlert = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryAlert;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-1-bar' {
  export import DeviceSignalWifi1Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi1Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-4-bar' {
  export import DeviceSignalCellular4Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellular4Bar;
}

declare module 'dotin-material-ui/svg-icons/device/wifi-tethering' {
  export import DeviceWifiTethering = __DotinMaterialUI.SvgIcon;
  export default DeviceWifiTethering;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-0-bar' {
  export import DeviceSignalWifi0Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi0Bar;
}

declare module 'dotin-material-ui/svg-icons/device/brightness-auto' {
  export import DeviceBrightnessAuto = __DotinMaterialUI.SvgIcon;
  export default DeviceBrightnessAuto;
}

declare module 'dotin-material-ui/svg-icons/device/location-disabled' {
  export import DeviceLocationDisabled = __DotinMaterialUI.SvgIcon;
  export default DeviceLocationDisabled;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-3-bar' {
  export import DeviceSignalWifi3Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi3Bar;
}

declare module 'dotin-material-ui/svg-icons/device/gps-not-fixed' {
  export import DeviceGpsNotFixed = __DotinMaterialUI.SvgIcon;
  export default DeviceGpsNotFixed;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-1-bar' {
  export import DeviceSignalCellular1Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellular1Bar;
}

declare module 'dotin-material-ui/svg-icons/device/battery-charging-60' {
  export import DeviceBatteryCharging60 = __DotinMaterialUI.SvgIcon;
  export default DeviceBatteryCharging60;
}

declare module 'dotin-material-ui/svg-icons/device/gps-off' {
  export import DeviceGpsOff = __DotinMaterialUI.SvgIcon;
  export default DeviceGpsOff;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-null' {
  export import DeviceSignalCellularNull = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularNull;
}

declare module 'dotin-material-ui/svg-icons/device/brightness-low' {
  export import DeviceBrightnessLow = __DotinMaterialUI.SvgIcon;
  export default DeviceBrightnessLow;
}

declare module 'dotin-material-ui/svg-icons/device/sd-storage' {
  export import DeviceSdStorage = __DotinMaterialUI.SvgIcon;
  export default DeviceSdStorage;
}

declare module 'dotin-material-ui/svg-icons/device/airplanemode-inactive' {
  export import DeviceAirplanemodeInactive = __DotinMaterialUI.SvgIcon;
  export default DeviceAirplanemodeInactive;
}

declare module 'dotin-material-ui/svg-icons/device/widgets' {
  export import DeviceWidgets = __DotinMaterialUI.SvgIcon;
  export default DeviceWidgets;
}

declare module 'dotin-material-ui/svg-icons/device/brightness-high' {
  export import DeviceBrightnessHigh = __DotinMaterialUI.SvgIcon;
  export default DeviceBrightnessHigh;
}

declare module 'dotin-material-ui/svg-icons/device/battery-20' {
  export import DeviceBattery20 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery20;
}

declare module 'dotin-material-ui/svg-icons/device/bluetooth-disabled' {
  export import DeviceBluetoothDisabled = __DotinMaterialUI.SvgIcon;
  export default DeviceBluetoothDisabled;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-4-bar-lock' {
  export import DeviceSignalWifi4BarLock = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi4BarLock;
}

declare module 'dotin-material-ui/svg-icons/device/developer-mode' {
  export import DeviceDeveloperMode = __DotinMaterialUI.SvgIcon;
  export default DeviceDeveloperMode;
}

declare module 'dotin-material-ui/svg-icons/device/battery-50' {
  export import DeviceBattery50 = __DotinMaterialUI.SvgIcon;
  export default DeviceBattery50;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar' {
  export import DeviceSignalCellularConnectedNoInternet1Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularConnectedNoInternet1Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-2-bar' {
  export import DeviceSignalCellular2Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellular2Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar' {
  export import DeviceSignalCellularConnectedNoInternet2Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellularConnectedNoInternet2Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-cellular-0-bar' {
  export import DeviceSignalCellular0Bar = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalCellular0Bar;
}

declare module 'dotin-material-ui/svg-icons/device/signal-wifi-1-bar-lock' {
  export import DeviceSignalWifi1BarLock = __DotinMaterialUI.SvgIcon;
  export default DeviceSignalWifi1BarLock;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-forward' {
  export import NavigationArrowForward = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowForward;
}

declare module 'dotin-material-ui/svg-icons/navigation/unfold-more' {
  export import NavigationUnfoldMore = __DotinMaterialUI.SvgIcon;
  export default NavigationUnfoldMore;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-drop-down' {
  export import NavigationArrowDropDown = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowDropDown;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-back' {
  export import NavigationArrowBack = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowBack;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-downward' {
  export import NavigationArrowDownward = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowDownward;
}

declare module 'dotin-material-ui/svg-icons/navigation/fullscreen' {
  export import NavigationFullscreen = __DotinMaterialUI.SvgIcon;
  export default NavigationFullscreen;
}

declare module 'dotin-material-ui/svg-icons/navigation/unfold-less' {
  export import NavigationUnfoldLess = __DotinMaterialUI.SvgIcon;
  export default NavigationUnfoldLess;
}

declare module 'dotin-material-ui/svg-icons/navigation/chevron-right' {
  export import NavigationChevronRight = __DotinMaterialUI.SvgIcon;
  export default NavigationChevronRight;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-drop-down-circle' {
  export import NavigationArrowDropDownCircle = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowDropDownCircle;
}

declare module 'dotin-material-ui/svg-icons/navigation/check' {
  export import NavigationCheck = __DotinMaterialUI.SvgIcon;
  export default NavigationCheck;
}

declare module 'dotin-material-ui/svg-icons/navigation/fullscreen-exit' {
  export import NavigationFullscreenExit = __DotinMaterialUI.SvgIcon;
  export default NavigationFullscreenExit;
}

declare module 'dotin-material-ui/svg-icons/navigation/chevron-left' {
  export import NavigationChevronLeft = __DotinMaterialUI.SvgIcon;
  export default NavigationChevronLeft;
}

declare module 'dotin-material-ui/svg-icons/navigation/menu' {
  export import NavigationMenu = __DotinMaterialUI.SvgIcon;
  export default NavigationMenu;
}

declare module 'dotin-material-ui/svg-icons/navigation/apps' {
  export import NavigationApps = __DotinMaterialUI.SvgIcon;
  export default NavigationApps;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-upward' {
  export import NavigationArrowUpward = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowUpward;
}

declare module 'dotin-material-ui/svg-icons/navigation/close' {
  export import NavigationClose = __DotinMaterialUI.SvgIcon;
  export default NavigationClose;
}

declare module 'dotin-material-ui/svg-icons/navigation/more-horiz' {
  export import NavigationMoreHoriz = __DotinMaterialUI.SvgIcon;
  export default NavigationMoreHoriz;
}

declare module 'dotin-material-ui/svg-icons/navigation/cancel' {
  export import NavigationCancel = __DotinMaterialUI.SvgIcon;
  export default NavigationCancel;
}

declare module 'dotin-material-ui/svg-icons/navigation/subdirectory-arrow-right' {
  export import NavigationSubdirectoryArrowRight = __DotinMaterialUI.SvgIcon;
  export default NavigationSubdirectoryArrowRight;
}

declare module 'dotin-material-ui/svg-icons/navigation/expand-more' {
  export import NavigationExpandMore = __DotinMaterialUI.SvgIcon;
  export default NavigationExpandMore;
}

declare module 'dotin-material-ui/svg-icons/navigation/arrow-drop-up' {
  export import NavigationArrowDropUp = __DotinMaterialUI.SvgIcon;
  export default NavigationArrowDropUp;
}

declare module 'dotin-material-ui/svg-icons/navigation/subdirectory-arrow-left' {
  export import NavigationSubdirectoryArrowLeft = __DotinMaterialUI.SvgIcon;
  export default NavigationSubdirectoryArrowLeft;
}

declare module 'dotin-material-ui/svg-icons/navigation/expand-less' {
  export import NavigationExpandLess = __DotinMaterialUI.SvgIcon;
  export default NavigationExpandLess;
}

declare module 'dotin-material-ui/svg-icons/navigation/refresh' {
  export import NavigationRefresh = __DotinMaterialUI.SvgIcon;
  export default NavigationRefresh;
}

declare module 'dotin-material-ui/svg-icons/navigation/more-vert' {
  export import NavigationMoreVert = __DotinMaterialUI.SvgIcon;
  export default NavigationMoreVert;
}

declare module 'dotin-material-ui/svg-icons/notification/rv-hookup' {
  export import NotificationRvHookup = __DotinMaterialUI.SvgIcon;
  export default NotificationRvHookup;
}

declare module 'dotin-material-ui/svg-icons/notification/no-encryption' {
  export import NotificationNoEncryption = __DotinMaterialUI.SvgIcon;
  export default NotificationNoEncryption;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-forwarded' {
  export import NotificationPhoneForwarded = __DotinMaterialUI.SvgIcon;
  export default NotificationPhoneForwarded;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-flat-angled' {
  export import NotificationAirlineSeatFlatAngled = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatFlatAngled;
}

declare module 'dotin-material-ui/svg-icons/notification/time-to-leave' {
  export import NotificationTimeToLeave = __DotinMaterialUI.SvgIcon;
  export default NotificationTimeToLeave;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-legroom-extra' {
  export import NotificationAirlineSeatLegroomExtra = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatLegroomExtra;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-recline-extra' {
  export import NotificationAirlineSeatReclineExtra = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatReclineExtra;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-individual-suite' {
  export import NotificationAirlineSeatIndividualSuite = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatIndividualSuite;
}

declare module 'dotin-material-ui/svg-icons/notification/vibration' {
  export import NotificationVibration = __DotinMaterialUI.SvgIcon;
  export default NotificationVibration;
}

declare module 'dotin-material-ui/svg-icons/notification/sim-card-alert' {
  export import NotificationSimCardAlert = __DotinMaterialUI.SvgIcon;
  export default NotificationSimCardAlert;
}

declare module 'dotin-material-ui/svg-icons/notification/sms-failed' {
  export import NotificationSmsFailed = __DotinMaterialUI.SvgIcon;
  export default NotificationSmsFailed;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-flat' {
  export import NotificationAirlineSeatFlat = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatFlat;
}

declare module 'dotin-material-ui/svg-icons/notification/do-not-disturb' {
  export import NotificationDoNotDisturb = __DotinMaterialUI.SvgIcon;
  export default NotificationDoNotDisturb;
}

declare module 'dotin-material-ui/svg-icons/notification/sync-problem' {
  export import NotificationSyncProblem = __DotinMaterialUI.SvgIcon;
  export default NotificationSyncProblem;
}

declare module 'dotin-material-ui/svg-icons/notification/event-available' {
  export import NotificationEventAvailable = __DotinMaterialUI.SvgIcon;
  export default NotificationEventAvailable;
}

declare module 'dotin-material-ui/svg-icons/notification/network-check' {
  export import NotificationNetworkCheck = __DotinMaterialUI.SvgIcon;
  export default NotificationNetworkCheck;
}

declare module 'dotin-material-ui/svg-icons/notification/sms' {
  export import NotificationSms = __DotinMaterialUI.SvgIcon;
  export default NotificationSms;
}

declare module 'dotin-material-ui/svg-icons/notification/disc-full' {
  export import NotificationDiscFull = __DotinMaterialUI.SvgIcon;
  export default NotificationDiscFull;
}

declare module 'dotin-material-ui/svg-icons/notification/do-not-disturb-alt' {
  export import NotificationDoNotDisturbAlt = __DotinMaterialUI.SvgIcon;
  export default NotificationDoNotDisturbAlt;
}

declare module 'dotin-material-ui/svg-icons/notification/system-update' {
  export import NotificationSystemUpdate = __DotinMaterialUI.SvgIcon;
  export default NotificationSystemUpdate;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-bluetooth-speaker' {
  export import NotificationPhoneBluetoothSpeaker = __DotinMaterialUI.SvgIcon;
  export default NotificationPhoneBluetoothSpeaker;
}

declare module 'dotin-material-ui/svg-icons/notification/ondemand-video' {
  export import NotificationOndemandVideo = __DotinMaterialUI.SvgIcon;
  export default NotificationOndemandVideo;
}

declare module 'dotin-material-ui/svg-icons/notification/power' {
  export import NotificationPower = __DotinMaterialUI.SvgIcon;
  export default NotificationPower;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-locked' {
  export import NotificationPhoneLocked = __DotinMaterialUI.SvgIcon;
  export default NotificationPhoneLocked;
}

declare module 'dotin-material-ui/svg-icons/notification/sd-card' {
  export import NotificationSdCard = __DotinMaterialUI.SvgIcon;
  export default NotificationSdCard;
}

declare module 'dotin-material-ui/svg-icons/notification/event-busy' {
  export import NotificationEventBusy = __DotinMaterialUI.SvgIcon;
  export default NotificationEventBusy;
}

declare module 'dotin-material-ui/svg-icons/notification/personal-video' {
  export import NotificationPersonalVideo = __DotinMaterialUI.SvgIcon;
  export default NotificationPersonalVideo;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-legroom-normal' {
  export import NotificationAirlineSeatLegroomNormal = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatLegroomNormal;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-in-talk' {
  export import NotificationPhoneInTalk = __DotinMaterialUI.SvgIcon;
  export default NotificationPhoneInTalk;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-legroom-reduced' {
  export import NotificationAirlineSeatLegroomReduced = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatLegroomReduced;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-paused' {
  export import NotificationPhonePaused = __DotinMaterialUI.SvgIcon;
  export default NotificationPhonePaused;
}

declare module 'dotin-material-ui/svg-icons/notification/sync-disabled' {
  export import NotificationSyncDisabled = __DotinMaterialUI.SvgIcon;
  export default NotificationSyncDisabled;
}

declare module 'dotin-material-ui/svg-icons/notification/enhanced-encryption' {
  export import NotificationEnhancedEncryption = __DotinMaterialUI.SvgIcon;
  export default NotificationEnhancedEncryption;
}

declare module 'dotin-material-ui/svg-icons/notification/mms' {
  export import NotificationMms = __DotinMaterialUI.SvgIcon;
  export default NotificationMms;
}

declare module 'dotin-material-ui/svg-icons/notification/drive-eta' {
  export import NotificationDriveEta = __DotinMaterialUI.SvgIcon;
  export default NotificationDriveEta;
}

declare module 'dotin-material-ui/svg-icons/notification/voice-chat' {
  export import NotificationVoiceChat = __DotinMaterialUI.SvgIcon;
  export default NotificationVoiceChat;
}

declare module 'dotin-material-ui/svg-icons/notification/wifi' {
  export import NotificationWifi = __DotinMaterialUI.SvgIcon;
  export default NotificationWifi;
}

declare module 'dotin-material-ui/svg-icons/notification/airline-seat-recline-normal' {
  export import NotificationAirlineSeatReclineNormal = __DotinMaterialUI.SvgIcon;
  export default NotificationAirlineSeatReclineNormal;
}

declare module 'dotin-material-ui/svg-icons/notification/more' {
  export import NotificationMore = __DotinMaterialUI.SvgIcon;
  export default NotificationMore;
}

declare module 'dotin-material-ui/svg-icons/notification/vpn-lock' {
  export import NotificationVpnLock = __DotinMaterialUI.SvgIcon;
  export default NotificationVpnLock;
}

declare module 'dotin-material-ui/svg-icons/notification/event-note' {
  export import NotificationEventNote = __DotinMaterialUI.SvgIcon;
  export default NotificationEventNote;
}

declare module 'dotin-material-ui/svg-icons/notification/confirmation-number' {
  export import NotificationConfirmationNumber = __DotinMaterialUI.SvgIcon;
  export default NotificationConfirmationNumber;
}

declare module 'dotin-material-ui/svg-icons/notification/network-locked' {
  export import NotificationNetworkLocked = __DotinMaterialUI.SvgIcon;
  export default NotificationNetworkLocked;
}

declare module 'dotin-material-ui/svg-icons/notification/adb' {
  export import NotificationAdb = __DotinMaterialUI.SvgIcon;
  export default NotificationAdb;
}

declare module 'dotin-material-ui/svg-icons/notification/bluetooth-audio' {
  export import NotificationBluetoothAudio = __DotinMaterialUI.SvgIcon;
  export default NotificationBluetoothAudio;
}

declare module 'dotin-material-ui/svg-icons/notification/wc' {
  export import NotificationWc = __DotinMaterialUI.SvgIcon;
  export default NotificationWc;
}

declare module 'dotin-material-ui/svg-icons/notification/tap-and-play' {
  export import NotificationTapAndPlay = __DotinMaterialUI.SvgIcon;
  export default NotificationTapAndPlay;
}

declare module 'dotin-material-ui/svg-icons/notification/folder-special' {
  export import NotificationFolderSpecial = __DotinMaterialUI.SvgIcon;
  export default NotificationFolderSpecial;
}

declare module 'dotin-material-ui/svg-icons/notification/live-tv' {
  export import NotificationLiveTv = __DotinMaterialUI.SvgIcon;
  export default NotificationLiveTv;
}

declare module 'dotin-material-ui/svg-icons/notification/sync' {
  export import NotificationSync = __DotinMaterialUI.SvgIcon;
  export default NotificationSync;
}

declare module 'dotin-material-ui/svg-icons/notification/phone-missed' {
  export import NotificationPhoneMissed = __DotinMaterialUI.SvgIcon;
  export default NotificationPhoneMissed;
}

declare module 'dotin-material-ui/svg-icons/av/skip-previous' {
  export import AvSkipPrevious = __DotinMaterialUI.SvgIcon;
  export default AvSkipPrevious;
}

declare module 'dotin-material-ui/svg-icons/av/volume-off' {
  export import AvVolumeOff = __DotinMaterialUI.SvgIcon;
  export default AvVolumeOff;
}

declare module 'dotin-material-ui/svg-icons/av/subscriptions' {
  export import AvSubscriptions = __DotinMaterialUI.SvgIcon;
  export default AvSubscriptions;
}

declare module 'dotin-material-ui/svg-icons/av/play-arrow' {
  export import AvPlayArrow = __DotinMaterialUI.SvgIcon;
  export default AvPlayArrow;
}

declare module 'dotin-material-ui/svg-icons/av/play-circle-outline' {
  export import AvPlayCircleOutline = __DotinMaterialUI.SvgIcon;
  export default AvPlayCircleOutline;
}

declare module 'dotin-material-ui/svg-icons/av/replay-30' {
  export import AvReplay30 = __DotinMaterialUI.SvgIcon;
  export default AvReplay30;
}

declare module 'dotin-material-ui/svg-icons/av/videocam' {
  export import AvVideocam = __DotinMaterialUI.SvgIcon;
  export default AvVideocam;
}

declare module 'dotin-material-ui/svg-icons/av/replay-5' {
  export import AvReplay5 = __DotinMaterialUI.SvgIcon;
  export default AvReplay5;
}

declare module 'dotin-material-ui/svg-icons/av/forward-10' {
  export import AvForward10 = __DotinMaterialUI.SvgIcon;
  export default AvForward10;
}

declare module 'dotin-material-ui/svg-icons/av/recent-actors' {
  export import AvRecentActors = __DotinMaterialUI.SvgIcon;
  export default AvRecentActors;
}

declare module 'dotin-material-ui/svg-icons/av/replay-10' {
  export import AvReplay10 = __DotinMaterialUI.SvgIcon;
  export default AvReplay10;
}

declare module 'dotin-material-ui/svg-icons/av/repeat' {
  export import AvRepeat = __DotinMaterialUI.SvgIcon;
  export default AvRepeat;
}

declare module 'dotin-material-ui/svg-icons/av/queue-music' {
  export import AvQueueMusic = __DotinMaterialUI.SvgIcon;
  export default AvQueueMusic;
}

declare module 'dotin-material-ui/svg-icons/av/fiber-pin' {
  export import AvFiberPin = __DotinMaterialUI.SvgIcon;
  export default AvFiberPin;
}

declare module 'dotin-material-ui/svg-icons/av/new-releases' {
  export import AvNewReleases = __DotinMaterialUI.SvgIcon;
  export default AvNewReleases;
}

declare module 'dotin-material-ui/svg-icons/av/fiber-new' {
  export import AvFiberNew = __DotinMaterialUI.SvgIcon;
  export default AvFiberNew;
}

declare module 'dotin-material-ui/svg-icons/av/fiber-manual-record' {
  export import AvFiberManualRecord = __DotinMaterialUI.SvgIcon;
  export default AvFiberManualRecord;
}

declare module 'dotin-material-ui/svg-icons/av/hearing' {
  export import AvHearing = __DotinMaterialUI.SvgIcon;
  export default AvHearing;
}

declare module 'dotin-material-ui/svg-icons/av/loop' {
  export import AvLoop = __DotinMaterialUI.SvgIcon;
  export default AvLoop;
}

declare module 'dotin-material-ui/svg-icons/av/volume-up' {
  export import AvVolumeUp = __DotinMaterialUI.SvgIcon;
  export default AvVolumeUp;
}

declare module 'dotin-material-ui/svg-icons/av/high-quality' {
  export import AvHighQuality = __DotinMaterialUI.SvgIcon;
  export default AvHighQuality;
}

declare module 'dotin-material-ui/svg-icons/av/surround-sound' {
  export import AvSurroundSound = __DotinMaterialUI.SvgIcon;
  export default AvSurroundSound;
}

declare module 'dotin-material-ui/svg-icons/av/equalizer' {
  export import AvEqualizer = __DotinMaterialUI.SvgIcon;
  export default AvEqualizer;
}

declare module 'dotin-material-ui/svg-icons/av/music-video' {
  export import AvMusicVideo = __DotinMaterialUI.SvgIcon;
  export default AvMusicVideo;
}

declare module 'dotin-material-ui/svg-icons/av/shuffle' {
  export import AvShuffle = __DotinMaterialUI.SvgIcon;
  export default AvShuffle;
}

declare module 'dotin-material-ui/svg-icons/av/volume-down' {
  export import AvVolumeDown = __DotinMaterialUI.SvgIcon;
  export default AvVolumeDown;
}

declare module 'dotin-material-ui/svg-icons/av/radio' {
  export import AvRadio = __DotinMaterialUI.SvgIcon;
  export default AvRadio;
}

declare module 'dotin-material-ui/svg-icons/av/web-asset' {
  export import AvWebAsset = __DotinMaterialUI.SvgIcon;
  export default AvWebAsset;
}

declare module 'dotin-material-ui/svg-icons/av/replay' {
  export import AvReplay = __DotinMaterialUI.SvgIcon;
  export default AvReplay;
}

declare module 'dotin-material-ui/svg-icons/av/queue-play-next' {
  export import AvQueuePlayNext = __DotinMaterialUI.SvgIcon;
  export default AvQueuePlayNext;
}

declare module 'dotin-material-ui/svg-icons/av/closed-caption' {
  export import AvClosedCaption = __DotinMaterialUI.SvgIcon;
  export default AvClosedCaption;
}

declare module 'dotin-material-ui/svg-icons/av/fiber-dvr' {
  export import AvFiberDvr = __DotinMaterialUI.SvgIcon;
  export default AvFiberDvr;
}

declare module 'dotin-material-ui/svg-icons/av/explicit' {
  export import AvExplicit = __DotinMaterialUI.SvgIcon;
  export default AvExplicit;
}

declare module 'dotin-material-ui/svg-icons/av/games' {
  export import AvGames = __DotinMaterialUI.SvgIcon;
  export default AvGames;
}

declare module 'dotin-material-ui/svg-icons/av/videocam-off' {
  export import AvVideocamOff = __DotinMaterialUI.SvgIcon;
  export default AvVideocamOff;
}

declare module 'dotin-material-ui/svg-icons/av/hd' {
  export import AvHd = __DotinMaterialUI.SvgIcon;
  export default AvHd;
}

declare module 'dotin-material-ui/svg-icons/av/fast-rewind' {
  export import AvFastRewind = __DotinMaterialUI.SvgIcon;
  export default AvFastRewind;
}

declare module 'dotin-material-ui/svg-icons/av/add-to-queue' {
  export import AvAddToQueue = __DotinMaterialUI.SvgIcon;
  export default AvAddToQueue;
}

declare module 'dotin-material-ui/svg-icons/av/movie' {
  export import AvMovie = __DotinMaterialUI.SvgIcon;
  export default AvMovie;
}

declare module 'dotin-material-ui/svg-icons/av/library-books' {
  export import AvLibraryBooks = __DotinMaterialUI.SvgIcon;
  export default AvLibraryBooks;
}

declare module 'dotin-material-ui/svg-icons/av/art-track' {
  export import AvArtTrack = __DotinMaterialUI.SvgIcon;
  export default AvArtTrack;
}

declare module 'dotin-material-ui/svg-icons/av/web' {
  export import AvWeb = __DotinMaterialUI.SvgIcon;
  export default AvWeb;
}

declare module 'dotin-material-ui/svg-icons/av/play-circle-filled' {
  export import AvPlayCircleFilled = __DotinMaterialUI.SvgIcon;
  export default AvPlayCircleFilled;
}

declare module 'dotin-material-ui/svg-icons/av/snooze' {
  export import AvSnooze = __DotinMaterialUI.SvgIcon;
  export default AvSnooze;
}

declare module 'dotin-material-ui/svg-icons/av/forward-5' {
  export import AvForward5 = __DotinMaterialUI.SvgIcon;
  export default AvForward5;
}

declare module 'dotin-material-ui/svg-icons/av/sort-by-alpha' {
  export import AvSortByAlpha = __DotinMaterialUI.SvgIcon;
  export default AvSortByAlpha;
}

declare module 'dotin-material-ui/svg-icons/av/pause-circle-filled' {
  export import AvPauseCircleFilled = __DotinMaterialUI.SvgIcon;
  export default AvPauseCircleFilled;
}

declare module 'dotin-material-ui/svg-icons/av/fiber-smart-record' {
  export import AvFiberSmartRecord = __DotinMaterialUI.SvgIcon;
  export default AvFiberSmartRecord;
}

declare module 'dotin-material-ui/svg-icons/av/stop' {
  export import AvStop = __DotinMaterialUI.SvgIcon;
  export default AvStop;
}

declare module 'dotin-material-ui/svg-icons/av/playlist-play' {
  export import AvPlaylistPlay = __DotinMaterialUI.SvgIcon;
  export default AvPlaylistPlay;
}

declare module 'dotin-material-ui/svg-icons/av/library-add' {
  export import AvLibraryAdd = __DotinMaterialUI.SvgIcon;
  export default AvLibraryAdd;
}

declare module 'dotin-material-ui/svg-icons/av/volume-mute' {
  export import AvVolumeMute = __DotinMaterialUI.SvgIcon;
  export default AvVolumeMute;
}

declare module 'dotin-material-ui/svg-icons/av/skip-next' {
  export import AvSkipNext = __DotinMaterialUI.SvgIcon;
  export default AvSkipNext;
}

declare module 'dotin-material-ui/svg-icons/av/forward-30' {
  export import AvForward30 = __DotinMaterialUI.SvgIcon;
  export default AvForward30;
}

declare module 'dotin-material-ui/svg-icons/av/playlist-add' {
  export import AvPlaylistAdd = __DotinMaterialUI.SvgIcon;
  export default AvPlaylistAdd;
}

declare module 'dotin-material-ui/svg-icons/av/album' {
  export import AvAlbum = __DotinMaterialUI.SvgIcon;
  export default AvAlbum;
}

declare module 'dotin-material-ui/svg-icons/av/video-library' {
  export import AvVideoLibrary = __DotinMaterialUI.SvgIcon;
  export default AvVideoLibrary;
}

declare module 'dotin-material-ui/svg-icons/av/library-music' {
  export import AvLibraryMusic = __DotinMaterialUI.SvgIcon;
  export default AvLibraryMusic;
}

declare module 'dotin-material-ui/svg-icons/av/not-interested' {
  export import AvNotInterested = __DotinMaterialUI.SvgIcon;
  export default AvNotInterested;
}

declare module 'dotin-material-ui/svg-icons/av/playlist-add-check' {
  export import AvPlaylistAddCheck = __DotinMaterialUI.SvgIcon;
  export default AvPlaylistAddCheck;
}

declare module 'dotin-material-ui/svg-icons/av/mic-none' {
  export import AvMicNone = __DotinMaterialUI.SvgIcon;
  export default AvMicNone;
}

declare module 'dotin-material-ui/svg-icons/av/pause' {
  export import AvPause = __DotinMaterialUI.SvgIcon;
  export default AvPause;
}

declare module 'dotin-material-ui/svg-icons/av/remove-from-queue' {
  export import AvRemoveFromQueue = __DotinMaterialUI.SvgIcon;
  export default AvRemoveFromQueue;
}

declare module 'dotin-material-ui/svg-icons/av/slow-motion-video' {
  export import AvSlowMotionVideo = __DotinMaterialUI.SvgIcon;
  export default AvSlowMotionVideo;
}

declare module 'dotin-material-ui/svg-icons/av/subtitles' {
  export import AvSubtitles = __DotinMaterialUI.SvgIcon;
  export default AvSubtitles;
}

declare module 'dotin-material-ui/svg-icons/av/mic-off' {
  export import AvMicOff = __DotinMaterialUI.SvgIcon;
  export default AvMicOff;
}

declare module 'dotin-material-ui/svg-icons/av/repeat-one' {
  export import AvRepeatOne = __DotinMaterialUI.SvgIcon;
  export default AvRepeatOne;
}

declare module 'dotin-material-ui/svg-icons/av/queue' {
  export import AvQueue = __DotinMaterialUI.SvgIcon;
  export default AvQueue;
}

declare module 'dotin-material-ui/svg-icons/av/fast-forward' {
  export import AvFastForward = __DotinMaterialUI.SvgIcon;
  export default AvFastForward;
}

declare module 'dotin-material-ui/svg-icons/av/mic' {
  export import AvMic = __DotinMaterialUI.SvgIcon;
  export default AvMic;
}

declare module 'dotin-material-ui/svg-icons/av/av-timer' {
  export import AvAvTimer = __DotinMaterialUI.SvgIcon;
  export default AvAvTimer;
}

declare module 'dotin-material-ui/svg-icons/av/pause-circle-outline' {
  export import AvPauseCircleOutline = __DotinMaterialUI.SvgIcon;
  export default AvPauseCircleOutline;
}

declare module 'dotin-material-ui/svg-icons/av/airplay' {
  export import AvAirplay = __DotinMaterialUI.SvgIcon;
  export default AvAirplay;
}

declare module 'dotin-material-ui/svg-icons/image/camera-rear' {
  export import ImageCameraRear = __DotinMaterialUI.SvgIcon;
  export default ImageCameraRear;
}

declare module 'dotin-material-ui/svg-icons/image/add-a-photo' {
  export import ImageAddAPhoto = __DotinMaterialUI.SvgIcon;
  export default ImageAddAPhoto;
}

declare module 'dotin-material-ui/svg-icons/image/portrait' {
  export import ImagePortrait = __DotinMaterialUI.SvgIcon;
  export default ImagePortrait;
}

declare module 'dotin-material-ui/svg-icons/image/looks' {
  export import ImageLooks = __DotinMaterialUI.SvgIcon;
  export default ImageLooks;
}

declare module 'dotin-material-ui/svg-icons/image/exposure-neg-2' {
  export import ImageExposureNeg2 = __DotinMaterialUI.SvgIcon;
  export default ImageExposureNeg2;
}

declare module 'dotin-material-ui/svg-icons/image/wb-cloudy' {
  export import ImageWbCloudy = __DotinMaterialUI.SvgIcon;
  export default ImageWbCloudy;
}

declare module 'dotin-material-ui/svg-icons/image/switch-video' {
  export import ImageSwitchVideo = __DotinMaterialUI.SvgIcon;
  export default ImageSwitchVideo;
}

declare module 'dotin-material-ui/svg-icons/image/wb-auto' {
  export import ImageWbAuto = __DotinMaterialUI.SvgIcon;
  export default ImageWbAuto;
}

declare module 'dotin-material-ui/svg-icons/image/filter-center-focus' {
  export import ImageFilterCenterFocus = __DotinMaterialUI.SvgIcon;
  export default ImageFilterCenterFocus;
}

declare module 'dotin-material-ui/svg-icons/image/crop-7-5' {
  export import ImageCrop75 = __DotinMaterialUI.SvgIcon;
  export default ImageCrop75;
}

declare module 'dotin-material-ui/svg-icons/image/crop-3-2' {
  export import ImageCrop32 = __DotinMaterialUI.SvgIcon;
  export default ImageCrop32;
}

declare module 'dotin-material-ui/svg-icons/image/assistant-photo' {
  export import ImageAssistantPhoto = __DotinMaterialUI.SvgIcon;
  export default ImageAssistantPhoto;
}

declare module 'dotin-material-ui/svg-icons/image/looks-one' {
  export import ImageLooksOne = __DotinMaterialUI.SvgIcon;
  export default ImageLooksOne;
}

declare module 'dotin-material-ui/svg-icons/image/collections-bookmark' {
  export import ImageCollectionsBookmark = __DotinMaterialUI.SvgIcon;
  export default ImageCollectionsBookmark;
}

declare module 'dotin-material-ui/svg-icons/image/image-aspect-ratio' {
  export import ImageImageAspectRatio = __DotinMaterialUI.SvgIcon;
  export default ImageImageAspectRatio;
}

declare module 'dotin-material-ui/svg-icons/image/brush' {
  export import ImageBrush = __DotinMaterialUI.SvgIcon;
  export default ImageBrush;
}

declare module 'dotin-material-ui/svg-icons/image/linked-camera' {
  export import ImageLinkedCamera = __DotinMaterialUI.SvgIcon;
  export default ImageLinkedCamera;
}

declare module 'dotin-material-ui/svg-icons/image/filter-1' {
  export import ImageFilter1 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter1;
}

declare module 'dotin-material-ui/svg-icons/image/edit' {
  export import ImageEdit = __DotinMaterialUI.SvgIcon;
  export default ImageEdit;
}

declare module 'dotin-material-ui/svg-icons/image/timelapse' {
  export import ImageTimelapse = __DotinMaterialUI.SvgIcon;
  export default ImageTimelapse;
}

declare module 'dotin-material-ui/svg-icons/image/nature' {
  export import ImageNature = __DotinMaterialUI.SvgIcon;
  export default ImageNature;
}

declare module 'dotin-material-ui/svg-icons/image/monochrome-photos' {
  export import ImageMonochromePhotos = __DotinMaterialUI.SvgIcon;
  export default ImageMonochromePhotos;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-6' {
  export import ImageBrightness6 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness6;
}

declare module 'dotin-material-ui/svg-icons/image/music-note' {
  export import ImageMusicNote = __DotinMaterialUI.SvgIcon;
  export default ImageMusicNote;
}

declare module 'dotin-material-ui/svg-icons/image/collections' {
  export import ImageCollections = __DotinMaterialUI.SvgIcon;
  export default ImageCollections;
}

declare module 'dotin-material-ui/svg-icons/image/wb-sunny' {
  export import ImageWbSunny = __DotinMaterialUI.SvgIcon;
  export default ImageWbSunny;
}

declare module 'dotin-material-ui/svg-icons/image/hdr-strong' {
  export import ImageHdrStrong = __DotinMaterialUI.SvgIcon;
  export default ImageHdrStrong;
}

declare module 'dotin-material-ui/svg-icons/image/panorama-vertical' {
  export import ImagePanoramaVertical = __DotinMaterialUI.SvgIcon;
  export default ImagePanoramaVertical;
}

declare module 'dotin-material-ui/svg-icons/image/navigate-next' {
  export import ImageNavigateNext = __DotinMaterialUI.SvgIcon;
  export default ImageNavigateNext;
}

declare module 'dotin-material-ui/svg-icons/image/looks-4' {
  export import ImageLooks4 = __DotinMaterialUI.SvgIcon;
  export default ImageLooks4;
}

declare module 'dotin-material-ui/svg-icons/image/filter-4' {
  export import ImageFilter4 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter4;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-1' {
  export import ImageBrightness1 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness1;
}

declare module 'dotin-material-ui/svg-icons/image/exposure-plus-1' {
  export import ImageExposurePlus1 = __DotinMaterialUI.SvgIcon;
  export default ImageExposurePlus1;
}

declare module 'dotin-material-ui/svg-icons/image/timer-3' {
  export import ImageTimer3 = __DotinMaterialUI.SvgIcon;
  export default ImageTimer3;
}

declare module 'dotin-material-ui/svg-icons/image/exposure-zero' {
  export import ImageExposureZero = __DotinMaterialUI.SvgIcon;
  export default ImageExposureZero;
}

declare module 'dotin-material-ui/svg-icons/image/blur-linear' {
  export import ImageBlurLinear = __DotinMaterialUI.SvgIcon;
  export default ImageBlurLinear;
}

declare module 'dotin-material-ui/svg-icons/image/photo-library' {
  export import ImagePhotoLibrary = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoLibrary;
}

declare module 'dotin-material-ui/svg-icons/image/filter-drama' {
  export import ImageFilterDrama = __DotinMaterialUI.SvgIcon;
  export default ImageFilterDrama;
}

declare module 'dotin-material-ui/svg-icons/image/dehaze' {
  export import ImageDehaze = __DotinMaterialUI.SvgIcon;
  export default ImageDehaze;
}

declare module 'dotin-material-ui/svg-icons/image/control-point-duplicate' {
  export import ImageControlPointDuplicate = __DotinMaterialUI.SvgIcon;
  export default ImageControlPointDuplicate;
}

declare module 'dotin-material-ui/svg-icons/image/image' {
  export import ImageImage = __DotinMaterialUI.SvgIcon;
  export default ImageImage;
}

declare module 'dotin-material-ui/svg-icons/image/flash-auto' {
  export import ImageFlashAuto = __DotinMaterialUI.SvgIcon;
  export default ImageFlashAuto;
}

declare module 'dotin-material-ui/svg-icons/image/rotate-90-degrees-ccw' {
  export import ImageRotate90DegreesCcw = __DotinMaterialUI.SvgIcon;
  export default ImageRotate90DegreesCcw;
}

declare module 'dotin-material-ui/svg-icons/image/blur-circular' {
  export import ImageBlurCircular = __DotinMaterialUI.SvgIcon;
  export default ImageBlurCircular;
}

declare module 'dotin-material-ui/svg-icons/image/filter-3' {
  export import ImageFilter3 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter3;
}

declare module 'dotin-material-ui/svg-icons/image/exposure-plus-2' {
  export import ImageExposurePlus2 = __DotinMaterialUI.SvgIcon;
  export default ImageExposurePlus2;
}

declare module 'dotin-material-ui/svg-icons/image/flash-on' {
  export import ImageFlashOn = __DotinMaterialUI.SvgIcon;
  export default ImageFlashOn;
}

declare module 'dotin-material-ui/svg-icons/image/view-comfy' {
  export import ImageViewComfy = __DotinMaterialUI.SvgIcon;
  export default ImageViewComfy;
}

declare module 'dotin-material-ui/svg-icons/image/colorize' {
  export import ImageColorize = __DotinMaterialUI.SvgIcon;
  export default ImageColorize;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-4' {
  export import ImageBrightness4 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness4;
}

declare module 'dotin-material-ui/svg-icons/image/crop-free' {
  export import ImageCropFree = __DotinMaterialUI.SvgIcon;
  export default ImageCropFree;
}

declare module 'dotin-material-ui/svg-icons/image/vignette' {
  export import ImageVignette = __DotinMaterialUI.SvgIcon;
  export default ImageVignette;
}

declare module 'dotin-material-ui/svg-icons/image/tag-faces' {
  export import ImageTagFaces = __DotinMaterialUI.SvgIcon;
  export default ImageTagFaces;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-7' {
  export import ImageBrightness7 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness7;
}

declare module 'dotin-material-ui/svg-icons/image/healing' {
  export import ImageHealing = __DotinMaterialUI.SvgIcon;
  export default ImageHealing;
}

declare module 'dotin-material-ui/svg-icons/image/nature-people' {
  export import ImageNaturePeople = __DotinMaterialUI.SvgIcon;
  export default ImageNaturePeople;
}

declare module 'dotin-material-ui/svg-icons/image/gradient' {
  export import ImageGradient = __DotinMaterialUI.SvgIcon;
  export default ImageGradient;
}

declare module 'dotin-material-ui/svg-icons/image/flash-off' {
  export import ImageFlashOff = __DotinMaterialUI.SvgIcon;
  export default ImageFlashOff;
}

declare module 'dotin-material-ui/svg-icons/image/movie-creation' {
  export import ImageMovieCreation = __DotinMaterialUI.SvgIcon;
  export default ImageMovieCreation;
}

declare module 'dotin-material-ui/svg-icons/image/leak-add' {
  export import ImageLeakAdd = __DotinMaterialUI.SvgIcon;
  export default ImageLeakAdd;
}

declare module 'dotin-material-ui/svg-icons/image/filter-5' {
  export import ImageFilter5 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter5;
}

declare module 'dotin-material-ui/svg-icons/image/photo' {
  export import ImagePhoto = __DotinMaterialUI.SvgIcon;
  export default ImagePhoto;
}

declare module 'dotin-material-ui/svg-icons/image/color-lens' {
  export import ImageColorLens = __DotinMaterialUI.SvgIcon;
  export default ImageColorLens;
}

declare module 'dotin-material-ui/svg-icons/image/broken-image' {
  export import ImageBrokenImage = __DotinMaterialUI.SvgIcon;
  export default ImageBrokenImage;
}

declare module 'dotin-material-ui/svg-icons/image/looks-6' {
  export import ImageLooks6 = __DotinMaterialUI.SvgIcon;
  export default ImageLooks6;
}

declare module 'dotin-material-ui/svg-icons/image/picture-as-pdf' {
  export import ImagePictureAsPdf = __DotinMaterialUI.SvgIcon;
  export default ImagePictureAsPdf;
}

declare module 'dotin-material-ui/svg-icons/image/palette' {
  export import ImagePalette = __DotinMaterialUI.SvgIcon;
  export default ImagePalette;
}

declare module 'dotin-material-ui/svg-icons/image/crop-landscape' {
  export import ImageCropLandscape = __DotinMaterialUI.SvgIcon;
  export default ImageCropLandscape;
}

declare module 'dotin-material-ui/svg-icons/image/grid-on' {
  export import ImageGridOn = __DotinMaterialUI.SvgIcon;
  export default ImageGridOn;
}

declare module 'dotin-material-ui/svg-icons/image/slideshow' {
  export import ImageSlideshow = __DotinMaterialUI.SvgIcon;
  export default ImageSlideshow;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-3' {
  export import ImageBrightness3 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness3;
}

declare module 'dotin-material-ui/svg-icons/image/style' {
  export import ImageStyle = __DotinMaterialUI.SvgIcon;
  export default ImageStyle;
}

declare module 'dotin-material-ui/svg-icons/image/filter-vintage' {
  export import ImageFilterVintage = __DotinMaterialUI.SvgIcon;
  export default ImageFilterVintage;
}

declare module 'dotin-material-ui/svg-icons/image/tune' {
  export import ImageTune = __DotinMaterialUI.SvgIcon;
  export default ImageTune;
}

declare module 'dotin-material-ui/svg-icons/image/camera' {
  export import ImageCamera = __DotinMaterialUI.SvgIcon;
  export default ImageCamera;
}

declare module 'dotin-material-ui/svg-icons/image/timer' {
  export import ImageTimer = __DotinMaterialUI.SvgIcon;
  export default ImageTimer;
}

declare module 'dotin-material-ui/svg-icons/image/landscape' {
  export import ImageLandscape = __DotinMaterialUI.SvgIcon;
  export default ImageLandscape;
}

declare module 'dotin-material-ui/svg-icons/image/crop-16-9' {
  export import ImageCrop169 = __DotinMaterialUI.SvgIcon;
  export default ImageCrop169;
}

declare module 'dotin-material-ui/svg-icons/image/add-to-photos' {
  export import ImageAddToPhotos = __DotinMaterialUI.SvgIcon;
  export default ImageAddToPhotos;
}

declare module 'dotin-material-ui/svg-icons/image/wb-incandescent' {
  export import ImageWbIncandescent = __DotinMaterialUI.SvgIcon;
  export default ImageWbIncandescent;
}

declare module 'dotin-material-ui/svg-icons/image/hdr-weak' {
  export import ImageHdrWeak = __DotinMaterialUI.SvgIcon;
  export default ImageHdrWeak;
}

declare module 'dotin-material-ui/svg-icons/image/details' {
  export import ImageDetails = __DotinMaterialUI.SvgIcon;
  export default ImageDetails;
}

declare module 'dotin-material-ui/svg-icons/image/view-compact' {
  export import ImageViewCompact = __DotinMaterialUI.SvgIcon;
  export default ImageViewCompact;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-5' {
  export import ImageBrightness5 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness5;
}

declare module 'dotin-material-ui/svg-icons/image/center-focus-weak' {
  export import ImageCenterFocusWeak = __DotinMaterialUI.SvgIcon;
  export default ImageCenterFocusWeak;
}

declare module 'dotin-material-ui/svg-icons/image/adjust' {
  export import ImageAdjust = __DotinMaterialUI.SvgIcon;
  export default ImageAdjust;
}

declare module 'dotin-material-ui/svg-icons/image/camera-front' {
  export import ImageCameraFront = __DotinMaterialUI.SvgIcon;
  export default ImageCameraFront;
}

declare module 'dotin-material-ui/svg-icons/image/transform' {
  export import ImageTransform = __DotinMaterialUI.SvgIcon;
  export default ImageTransform;
}

declare module 'dotin-material-ui/svg-icons/image/filter' {
  export import ImageFilter = __DotinMaterialUI.SvgIcon;
  export default ImageFilter;
}

declare module 'dotin-material-ui/svg-icons/image/grain' {
  export import ImageGrain = __DotinMaterialUI.SvgIcon;
  export default ImageGrain;
}

declare module 'dotin-material-ui/svg-icons/image/filter-9-plus' {
  export import ImageFilter9Plus = __DotinMaterialUI.SvgIcon;
  export default ImageFilter9Plus;
}

declare module 'dotin-material-ui/svg-icons/image/looks-5' {
  export import ImageLooks5 = __DotinMaterialUI.SvgIcon;
  export default ImageLooks5;
}

declare module 'dotin-material-ui/svg-icons/image/hdr-on' {
  export import ImageHdrOn = __DotinMaterialUI.SvgIcon;
  export default ImageHdrOn;
}

declare module 'dotin-material-ui/svg-icons/image/audiotrack' {
  export import ImageAudiotrack = __DotinMaterialUI.SvgIcon;
  export default ImageAudiotrack;
}

declare module 'dotin-material-ui/svg-icons/image/compare' {
  export import ImageCompare = __DotinMaterialUI.SvgIcon;
  export default ImageCompare;
}

declare module 'dotin-material-ui/svg-icons/image/crop' {
  export import ImageCrop = __DotinMaterialUI.SvgIcon;
  export default ImageCrop;
}

declare module 'dotin-material-ui/svg-icons/image/texture' {
  export import ImageTexture = __DotinMaterialUI.SvgIcon;
  export default ImageTexture;
}

declare module 'dotin-material-ui/svg-icons/image/movie-filter' {
  export import ImageMovieFilter = __DotinMaterialUI.SvgIcon;
  export default ImageMovieFilter;
}

declare module 'dotin-material-ui/svg-icons/image/exposure' {
  export import ImageExposure = __DotinMaterialUI.SvgIcon;
  export default ImageExposure;
}

declare module 'dotin-material-ui/svg-icons/image/filter-b-and-w' {
  export import ImageFilterBAndW = __DotinMaterialUI.SvgIcon;
  export default ImageFilterBAndW;
}

declare module 'dotin-material-ui/svg-icons/image/photo-size-select-actual' {
  export import ImagePhotoSizeSelectActual = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoSizeSelectActual;
}

declare module 'dotin-material-ui/svg-icons/image/crop-5-4' {
  export import ImageCrop54 = __DotinMaterialUI.SvgIcon;
  export default ImageCrop54;
}

declare module 'dotin-material-ui/svg-icons/image/brightness-2' {
  export import ImageBrightness2 = __DotinMaterialUI.SvgIcon;
  export default ImageBrightness2;
}

declare module 'dotin-material-ui/svg-icons/image/tonality' {
  export import ImageTonality = __DotinMaterialUI.SvgIcon;
  export default ImageTonality;
}

declare module 'dotin-material-ui/svg-icons/image/panorama-wide-angle' {
  export import ImagePanoramaWideAngle = __DotinMaterialUI.SvgIcon;
  export default ImagePanoramaWideAngle;
}

declare module 'dotin-material-ui/svg-icons/image/flip' {
  export import ImageFlip = __DotinMaterialUI.SvgIcon;
  export default ImageFlip;
}

declare module 'dotin-material-ui/svg-icons/image/filter-9' {
  export import ImageFilter9 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter9;
}

declare module 'dotin-material-ui/svg-icons/image/blur-on' {
  export import ImageBlurOn = __DotinMaterialUI.SvgIcon;
  export default ImageBlurOn;
}

declare module 'dotin-material-ui/svg-icons/image/assistant' {
  export import ImageAssistant = __DotinMaterialUI.SvgIcon;
  export default ImageAssistant;
}

declare module 'dotin-material-ui/svg-icons/image/lens' {
  export import ImageLens = __DotinMaterialUI.SvgIcon;
  export default ImageLens;
}

declare module 'dotin-material-ui/svg-icons/image/switch-camera' {
  export import ImageSwitchCamera = __DotinMaterialUI.SvgIcon;
  export default ImageSwitchCamera;
}

declare module 'dotin-material-ui/svg-icons/image/photo-filter' {
  export import ImagePhotoFilter = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoFilter;
}

declare module 'dotin-material-ui/svg-icons/image/wb-iridescent' {
  export import ImageWbIridescent = __DotinMaterialUI.SvgIcon;
  export default ImageWbIridescent;
}

declare module 'dotin-material-ui/svg-icons/image/crop-square' {
  export import ImageCropSquare = __DotinMaterialUI.SvgIcon;
  export default ImageCropSquare;
}

declare module 'dotin-material-ui/svg-icons/image/timer-10' {
  export import ImageTimer10 = __DotinMaterialUI.SvgIcon;
  export default ImageTimer10;
}

declare module 'dotin-material-ui/svg-icons/image/rotate-right' {
  export import ImageRotateRight = __DotinMaterialUI.SvgIcon;
  export default ImageRotateRight;
}

declare module 'dotin-material-ui/svg-icons/image/grid-off' {
  export import ImageGridOff = __DotinMaterialUI.SvgIcon;
  export default ImageGridOff;
}

declare module 'dotin-material-ui/svg-icons/image/filter-7' {
  export import ImageFilter7 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter7;
}

declare module 'dotin-material-ui/svg-icons/image/loupe' {
  export import ImageLoupe = __DotinMaterialUI.SvgIcon;
  export default ImageLoupe;
}

declare module 'dotin-material-ui/svg-icons/image/filter-6' {
  export import ImageFilter6 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter6;
}

declare module 'dotin-material-ui/svg-icons/image/filter-tilt-shift' {
  export import ImageFilterTiltShift = __DotinMaterialUI.SvgIcon;
  export default ImageFilterTiltShift;
}

declare module 'dotin-material-ui/svg-icons/image/crop-din' {
  export import ImageCropDin = __DotinMaterialUI.SvgIcon;
  export default ImageCropDin;
}

declare module 'dotin-material-ui/svg-icons/image/center-focus-strong' {
  export import ImageCenterFocusStrong = __DotinMaterialUI.SvgIcon;
  export default ImageCenterFocusStrong;
}

declare module 'dotin-material-ui/svg-icons/image/rotate-left' {
  export import ImageRotateLeft = __DotinMaterialUI.SvgIcon;
  export default ImageRotateLeft;
}

declare module 'dotin-material-ui/svg-icons/image/filter-hdr' {
  export import ImageFilterHdr = __DotinMaterialUI.SvgIcon;
  export default ImageFilterHdr;
}

declare module 'dotin-material-ui/svg-icons/image/timer-off' {
  export import ImageTimerOff = __DotinMaterialUI.SvgIcon;
  export default ImageTimerOff;
}

declare module 'dotin-material-ui/svg-icons/image/straighten' {
  export import ImageStraighten = __DotinMaterialUI.SvgIcon;
  export default ImageStraighten;
}

declare module 'dotin-material-ui/svg-icons/image/exposure-neg-1' {
  export import ImageExposureNeg1 = __DotinMaterialUI.SvgIcon;
  export default ImageExposureNeg1;
}

declare module 'dotin-material-ui/svg-icons/image/navigate-before' {
  export import ImageNavigateBefore = __DotinMaterialUI.SvgIcon;
  export default ImageNavigateBefore;
}

declare module 'dotin-material-ui/svg-icons/image/iso' {
  export import ImageIso = __DotinMaterialUI.SvgIcon;
  export default ImageIso;
}

declare module 'dotin-material-ui/svg-icons/image/photo-album' {
  export import ImagePhotoAlbum = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoAlbum;
}

declare module 'dotin-material-ui/svg-icons/image/crop-rotate' {
  export import ImageCropRotate = __DotinMaterialUI.SvgIcon;
  export default ImageCropRotate;
}

declare module 'dotin-material-ui/svg-icons/image/remove-red-eye' {
  export import ImageRemoveRedEye = __DotinMaterialUI.SvgIcon;
  export default ImageRemoveRedEye;
}

declare module 'dotin-material-ui/svg-icons/image/crop-portrait' {
  export import ImageCropPortrait = __DotinMaterialUI.SvgIcon;
  export default ImageCropPortrait;
}

declare module 'dotin-material-ui/svg-icons/image/camera-alt' {
  export import ImageCameraAlt = __DotinMaterialUI.SvgIcon;
  export default ImageCameraAlt;
}

declare module 'dotin-material-ui/svg-icons/image/control-point' {
  export import ImageControlPoint = __DotinMaterialUI.SvgIcon;
  export default ImageControlPoint;
}

declare module 'dotin-material-ui/svg-icons/image/panorama' {
  export import ImagePanorama = __DotinMaterialUI.SvgIcon;
  export default ImagePanorama;
}

declare module 'dotin-material-ui/svg-icons/image/panorama-fish-eye' {
  export import ImagePanoramaFishEye = __DotinMaterialUI.SvgIcon;
  export default ImagePanoramaFishEye;
}

declare module 'dotin-material-ui/svg-icons/image/filter-8' {
  export import ImageFilter8 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter8;
}

declare module 'dotin-material-ui/svg-icons/image/looks-two' {
  export import ImageLooksTwo = __DotinMaterialUI.SvgIcon;
  export default ImageLooksTwo;
}

declare module 'dotin-material-ui/svg-icons/image/panorama-horizontal' {
  export import ImagePanoramaHorizontal = __DotinMaterialUI.SvgIcon;
  export default ImagePanoramaHorizontal;
}

declare module 'dotin-material-ui/svg-icons/image/looks-3' {
  export import ImageLooks3 = __DotinMaterialUI.SvgIcon;
  export default ImageLooks3;
}

declare module 'dotin-material-ui/svg-icons/image/filter-none' {
  export import ImageFilterNone = __DotinMaterialUI.SvgIcon;
  export default ImageFilterNone;
}

declare module 'dotin-material-ui/svg-icons/image/photo-size-select-large' {
  export import ImagePhotoSizeSelectLarge = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoSizeSelectLarge;
}

declare module 'dotin-material-ui/svg-icons/image/blur-off' {
  export import ImageBlurOff = __DotinMaterialUI.SvgIcon;
  export default ImageBlurOff;
}

declare module 'dotin-material-ui/svg-icons/image/camera-roll' {
  export import ImageCameraRoll = __DotinMaterialUI.SvgIcon;
  export default ImageCameraRoll;
}

declare module 'dotin-material-ui/svg-icons/image/leak-remove' {
  export import ImageLeakRemove = __DotinMaterialUI.SvgIcon;
  export default ImageLeakRemove;
}

declare module 'dotin-material-ui/svg-icons/image/filter-frames' {
  export import ImageFilterFrames = __DotinMaterialUI.SvgIcon;
  export default ImageFilterFrames;
}

declare module 'dotin-material-ui/svg-icons/image/flare' {
  export import ImageFlare = __DotinMaterialUI.SvgIcon;
  export default ImageFlare;
}

declare module 'dotin-material-ui/svg-icons/image/photo-size-select-small' {
  export import ImagePhotoSizeSelectSmall = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoSizeSelectSmall;
}

declare module 'dotin-material-ui/svg-icons/image/photo-camera' {
  export import ImagePhotoCamera = __DotinMaterialUI.SvgIcon;
  export default ImagePhotoCamera;
}

declare module 'dotin-material-ui/svg-icons/image/hdr-off' {
  export import ImageHdrOff = __DotinMaterialUI.SvgIcon;
  export default ImageHdrOff;
}

declare module 'dotin-material-ui/svg-icons/image/filter-2' {
  export import ImageFilter2 = __DotinMaterialUI.SvgIcon;
  export default ImageFilter2;
}

declare module 'dotin-material-ui/svg-icons/image/crop-original' {
  export import ImageCropOriginal = __DotinMaterialUI.SvgIcon;
  export default ImageCropOriginal;
}

declare module 'dotin-material-ui/svg-icons/places/kitchen' {
  export import PlacesKitchen = __DotinMaterialUI.SvgIcon;
  export default PlacesKitchen;
}

declare module 'dotin-material-ui/svg-icons/places/spa' {
  export import PlacesSpa = __DotinMaterialUI.SvgIcon;
  export default PlacesSpa;
}

declare module 'dotin-material-ui/svg-icons/places/all-inclusive' {
  export import PlacesAllInclusive = __DotinMaterialUI.SvgIcon;
  export default PlacesAllInclusive;
}

declare module 'dotin-material-ui/svg-icons/places/ac-unit' {
  export import PlacesAcUnit = __DotinMaterialUI.SvgIcon;
  export default PlacesAcUnit;
}

declare module 'dotin-material-ui/svg-icons/places/child-care' {
  export import PlacesChildCare = __DotinMaterialUI.SvgIcon;
  export default PlacesChildCare;
}

declare module 'dotin-material-ui/svg-icons/places/golf-course' {
  export import PlacesGolfCourse = __DotinMaterialUI.SvgIcon;
  export default PlacesGolfCourse;
}

declare module 'dotin-material-ui/svg-icons/places/business-center' {
  export import PlacesBusinessCenter = __DotinMaterialUI.SvgIcon;
  export default PlacesBusinessCenter;
}

declare module 'dotin-material-ui/svg-icons/places/free-breakfast' {
  export import PlacesFreeBreakfast = __DotinMaterialUI.SvgIcon;
  export default PlacesFreeBreakfast;
}

declare module 'dotin-material-ui/svg-icons/places/fitness-center' {
  export import PlacesFitnessCenter = __DotinMaterialUI.SvgIcon;
  export default PlacesFitnessCenter;
}

declare module 'dotin-material-ui/svg-icons/places/pool' {
  export import PlacesPool = __DotinMaterialUI.SvgIcon;
  export default PlacesPool;
}

declare module 'dotin-material-ui/svg-icons/places/child-friendly' {
  export import PlacesChildFriendly = __DotinMaterialUI.SvgIcon;
  export default PlacesChildFriendly;
}

declare module 'dotin-material-ui/svg-icons/places/casino' {
  export import PlacesCasino = __DotinMaterialUI.SvgIcon;
  export default PlacesCasino;
}

declare module 'dotin-material-ui/svg-icons/places/hot-tub' {
  export import PlacesHotTub = __DotinMaterialUI.SvgIcon;
  export default PlacesHotTub;
}

declare module 'dotin-material-ui/svg-icons/places/smoke-free' {
  export import PlacesSmokeFree = __DotinMaterialUI.SvgIcon;
  export default PlacesSmokeFree;
}

declare module 'dotin-material-ui/svg-icons/places/room-service' {
  export import PlacesRoomService = __DotinMaterialUI.SvgIcon;
  export default PlacesRoomService;
}

declare module 'dotin-material-ui/svg-icons/places/smoking-rooms' {
  export import PlacesSmokingRooms = __DotinMaterialUI.SvgIcon;
  export default PlacesSmokingRooms;
}

declare module 'dotin-material-ui/svg-icons/places/beach-access' {
  export import PlacesBeachAccess = __DotinMaterialUI.SvgIcon;
  export default PlacesBeachAccess;
}

declare module 'dotin-material-ui/svg-icons/places/airport-shuttle' {
  export import PlacesAirportShuttle = __DotinMaterialUI.SvgIcon;
  export default PlacesAirportShuttle;
}

declare module 'dotin-material-ui/styles' {
    export import MuiThemeProvider = __DotinMaterialUI.Styles.MuiThemeProvider;
    export import colors = __DotinMaterialUI.Styles.Colors;
    export import darkBaseTheme = __DotinMaterialUI.Styles.darkBaseTheme;
    export import DarkRawTheme = __DotinMaterialUI.Styles.darkBaseTheme;
    export import lightBaseTheme = __DotinMaterialUI.Styles.lightBaseTheme;
    export import LightRawTheme = __DotinMaterialUI.Styles.lightBaseTheme;
    export import getMuiTheme = __DotinMaterialUI.Styles.getMuiTheme;
    export import spacing = __DotinMaterialUI.Styles.Spacing;
    export import themeManager = __DotinMaterialUI.Styles.ThemeManager;
    export import transitions = __DotinMaterialUI.Styles.Transitions;
    export import typography = __DotinMaterialUI.Styles.Typography;
    export import zIndex = __DotinMaterialUI.Styles.zIndex;

    export type MuiTheme = __DotinMaterialUI.Styles.MuiTheme;
}

declare module 'dotin-material-ui/styles/getMuiTheme' {
    export import getMuiTheme = __DotinMaterialUI.Styles.getMuiTheme;
    export default getMuiTheme;
}

declare module 'dotin-material-ui/styles/muiThemeable' {
    export import muiThemeable = __DotinMaterialUI.Styles.muiThemeable;
    export default muiThemeable;
}

declare module 'dotin-material-ui/styles/MuiThemeProvider' {
    export import MuiThemeProvider = __DotinMaterialUI.Styles.MuiThemeProvider;
    export default MuiThemeProvider;
}

declare module 'dotin-material-ui/styles/spacing' {
    type Spacing = __DotinMaterialUI.Styles.Spacing;
    var Spacing: Spacing;
    export default Spacing;
}

declare module 'dotin-material-ui/styles/themeManager' {
    export import ThemeManager = __DotinMaterialUI.Styles.ThemeManager;
    export default ThemeManager;
}

declare module 'dotin-material-ui/styles/transitions' {
    export import Transitions = __DotinMaterialUI.Styles.Transitions;
    export default Transitions;
}

declare module 'dotin-material-ui/styles/typography' {
    export import Typography = __DotinMaterialUI.Styles.Typography;
    export default Typography;
}

declare module 'dotin-material-ui/styles/baseThemes/lightBaseTheme' {
    export import lightBaseTheme = __DotinMaterialUI.Styles.lightBaseTheme;
    export default lightBaseTheme;
}

//** @deprecated use lightBaseTheme instead **/
declare module 'dotin-material-ui/styles/raw-themes/light-raw-theme' {
    export import LightRawTheme = __DotinMaterialUI.Styles.LightRawTheme;
    export default LightRawTheme;
}

declare module 'dotin-material-ui/styles/baseThemes/darkBaseTheme' {
    export import darkBaseTheme = __DotinMaterialUI.Styles.darkBaseTheme;
    export default darkBaseTheme;
}

//** @deprecated use darkBaseTheme instead **/
declare module 'dotin-material-ui/styles/raw-themes/dark-raw-theme' {
    export import DarkRawTheme = __DotinMaterialUI.Styles.DarkRawTheme;
    export default DarkRawTheme;
}

declare module 'dotin-material-ui/styles/themeDecorator' {
    export import themeDecorator = __DotinMaterialUI.Styles.themeDecorator;
    export default themeDecorator;
}

declare module 'dotin-material-ui/styles/zIndex' {
    export import zIndex = __DotinMaterialUI.Styles.zIndex;
    export default zIndex;
}

declare module "dotin-material-ui/styles/colors" {
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

declare module 'dotin-material-ui/Table' {
    export import Table = __DotinMaterialUI.Table.Table;
    export import TableBody = __DotinMaterialUI.Table.TableBody;
    export import TableFooter = __DotinMaterialUI.Table.TableFooter;
    export import TableHeader = __DotinMaterialUI.Table.TableHeader;
    export import TableHeaderColumn = __DotinMaterialUI.Table.TableHeaderColumn;
    export import TableRow = __DotinMaterialUI.Table.TableRow;
    export import TableRowColumn = __DotinMaterialUI.Table.TableRowColumn;
    export default Table;
}

declare module 'dotin-material-ui/Table/Table' {
    export import Table = __DotinMaterialUI.Table.Table;
    export default Table;
}

declare module 'dotin-material-ui/Table/TableBody' {
    export import TableBody = __DotinMaterialUI.Table.TableBody;
    export default TableBody;
}

declare module 'dotin-material-ui/Table/TableFooter' {
    export import TableFooter = __DotinMaterialUI.Table.TableFooter;
    export default TableFooter;
}

declare module 'dotin-material-ui/Table/TableHeader' {
    export import TableHeader = __DotinMaterialUI.Table.TableHeader;
    export default TableHeader;
}

declare module 'dotin-material-ui/Table/TableHeaderColumn' {
    export import TableHeaderColumn = __DotinMaterialUI.Table.TableHeaderColumn;
    export default TableHeaderColumn;
}

declare module 'dotin-material-ui/Table/TableRow' {
    export import TableRow = __DotinMaterialUI.Table.TableRow;
    export default TableRow;
}

declare module 'dotin-material-ui/Table/TableRowColumn' {
    export import TableRowColumn = __DotinMaterialUI.Table.TableRowColumn;
    export default TableRowColumn;
}

declare module 'dotin-material-ui/Tabs' {
    export import Tab = __DotinMaterialUI.Tabs.Tab;
    export import Tabs = __DotinMaterialUI.Tabs.Tabs;
    export default Tabs;
}

declare module 'dotin-material-ui/Tabs/Tab' {
    export import Tab = __DotinMaterialUI.Tabs.Tab;
    export default Tab;
}

declare module 'dotin-material-ui/Tabs/Tabs' {
    export import Tabs = __DotinMaterialUI.Tabs.Tabs;
    export default Tabs;
}

declare module 'dotin-material-ui/TextField' {
    export import TextField = __DotinMaterialUI.TextField;
    export default TextField;
}

declare module 'dotin-material-ui/TimePicker' {
    export import TimePicker = __DotinMaterialUI.TimePicker;
    export default TimePicker;
}

declare module 'dotin-material-ui/Toggle' {
    export import Toggle = __DotinMaterialUI.Switches.Toggle;
    export default Toggle;
}

declare module 'dotin-material-ui/Toolbar' {
    export import Toolbar = __DotinMaterialUI.Toolbar.Toolbar;
    export import ToolbarGroup = __DotinMaterialUI.Toolbar.ToolbarGroup;
    export import ToolbarSeparator = __DotinMaterialUI.Toolbar.ToolbarSeparator;
    export import ToolbarTitle = __DotinMaterialUI.Toolbar.ToolbarTitle;
    export default Toolbar;
}

declare module 'dotin-material-ui/Toolbar/Toolbar' {
    export import Toolbar = __DotinMaterialUI.Toolbar.Toolbar;
    export default Toolbar;
}

declare module 'dotin-material-ui/Toolbar/ToolbarGroup' {
    export import ToolbarGroup = __DotinMaterialUI.Toolbar.ToolbarGroup;
    export default ToolbarGroup;
}

declare module 'dotin-material-ui/Toolbar/ToolbarSeparator' {
    export import ToolbarSeparator = __DotinMaterialUI.Toolbar.ToolbarSeparator;
    export default ToolbarSeparator;
}

declare module 'dotin-material-ui/Toolbar/ToolbarTitle' {
    export import ToolbarTitle = __DotinMaterialUI.Toolbar.ToolbarTitle;
    export default ToolbarTitle;
}

declare module 'dotin-material-ui/utils/colorManipulator' {
    export import convertColorToString = __DotinMaterialUI.Utils.ColorManipulator.convertColorToString;
    export import convertHexToRGB = __DotinMaterialUI.Utils.ColorManipulator.convertHexToRGB;
    export import decomposeColor = __DotinMaterialUI.Utils.ColorManipulator.decomposeColor;
    export import getContrastRatio = __DotinMaterialUI.Utils.ColorManipulator.getContrastRatio;
    export import getLuminance = __DotinMaterialUI.Utils.ColorManipulator.getLuminance;
    export import emphasize = __DotinMaterialUI.Utils.ColorManipulator.emphasize;
    export import fade = __DotinMaterialUI.Utils.ColorManipulator.fade;
    export import darken = __DotinMaterialUI.Utils.ColorManipulator.darken;
    export import lighten = __DotinMaterialUI.Utils.ColorManipulator.lighten;
}
declare module 'dotin-material-ui/utils/dom' {
    export import Dom = __DotinMaterialUI.Utils.Dom;
    export default Dom;
}
declare module 'dotin-material-ui/utils/events' {
    export import Events = __DotinMaterialUI.Utils.Events;
    export default Events;
}
declare module 'dotin-material-ui/utils/withWidth' {
  export const SMALL: number;
  export const MEDIUM: number;
  export const LARGE: number;

  interface Options {
      largeWidth?: number;
      mediumWidth?: number;
      resizeInterval?: number;
  }
  export default function withWidth(options?: Options): __React.ComponentClass<any>
}

declare namespace __DotinMaterialUI.Styles {
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
}

declare module "dotin-material-ui/svg-icons" {
    export import ActionAccessibility = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/accessibility');
    export import ActionAccessible = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/accessible');
    export import ActionAccountBalance = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/account-balance');
    export import ActionAccountBalanceWallet = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/account-balance-wallet');
    export import ActionAccountBox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/account-box');
    export import ActionAccountCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/account-circle');
    export import ActionAddShoppingCart = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/add-shopping-cart');
    export import ActionAlarm = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/alarm');
    export import ActionAlarmAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/alarm-add');
    export import ActionAlarmOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/alarm-off');
    export import ActionAlarmOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/alarm-on');
    export import ActionAllOut = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/all-out');
    export import ActionAndroid = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/android');
    export import ActionAnnouncement = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/announcement');
    export import ActionAspectRatio = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/aspect-ratio');
    export import ActionAssessment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assessment');
    export import ActionAssignment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment');
    export import ActionAssignmentInd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment-ind');
    export import ActionAssignmentLate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment-late');
    export import ActionAssignmentReturn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment-return');
    export import ActionAssignmentReturned = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment-returned');
    export import ActionAssignmentTurnedIn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/assignment-turned-in');
    export import ActionAutorenew = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/autorenew');
    export import ActionBackup = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/backup');
    export import ActionBook = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/book');
    export import ActionBookmark = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/bookmark');
    export import ActionBookmarkBorder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/bookmark-border');
    export import ActionBugReport = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/bug-report');
    export import ActionBuild = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/build');
    export import ActionCached = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/cached');
    export import ActionCameraEnhance = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/camera-enhance');
    export import ActionCardGiftcard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/card-giftcard');
    export import ActionCardMembership = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/card-membership');
    export import ActionCardTravel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/card-travel');
    export import ActionChangeHistory = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/change-history');
    export import ActionCheckCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/check-circle');
    export import ActionChromeReaderMode = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/chrome-reader-mode');
    export import ActionClass = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/class');
    export import ActionCode = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/code');
    export import ActionCompareArrows = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/compare-arrows');
    export import ActionCopyright = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/copyright');
    export import ActionCreditCard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/credit-card');
    export import ActionDashboard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/dashboard');
    export import ActionDateRange = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/date-range');
    export import ActionDelete = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/delete');
    export import ActionDescription = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/description');
    export import ActionDns = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/dns');
    export import ActionDone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/done');
    export import ActionDoneAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/done-all');
    export import ActionDonutLarge = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/donut-large');
    export import ActionDonutSmall = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/donut-small');
    export import ActionEject = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/eject');
    export import ActionEvent = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/event');
    export import ActionEventSeat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/event-seat');
    export import ActionExitToApp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/exit-to-app');
    export import ActionExplore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/explore');
    export import ActionExtension = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/extension');
    export import ActionFace = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/face');
    export import ActionFavorite = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/favorite');
    export import ActionFavoriteBorder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/favorite-border');
    export import ActionFeedback = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/feedback');
    export import ActionFindInPage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/find-in-page');
    export import ActionFindReplace = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/find-replace');
    export import ActionFingerprint = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/fingerprint');
    export import ActionFlightLand = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/flight-land');
    export import ActionFlightTakeoff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/flight-takeoff');
    export import ActionFlipToBack = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/flip-to-back');
    export import ActionFlipToFront = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/flip-to-front');
    export import ActionGavel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/gavel');
    export import ActionGetApp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/get-app');
    export import ActionGif = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/gif');
    export import ActionGrade = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/grade');
    export import ActionGroupWork = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/group-work');
    export import ActionHelp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/help');
    export import ActionHelpOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/help-outline');
    export import ActionHighlightOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/highlight-off');
    export import ActionHistory = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/history');
    export import ActionHome = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/home');
    export import ActionHourglassEmpty = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/hourglass-empty');
    export import ActionHourglassFull = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/hourglass-full');
    export import ActionHttp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/http');
    export import ActionHttps = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/https');
    export import ActionImportantDevices = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/important-devices');
    export import ActionInfo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/info');
    export import ActionInfoOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/info-outline');
    export import ActionInput = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/input');
    export import ActionInvertColors = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/invert-colors');
    export import ActionLabel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/label');
    export import ActionLabelOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/label-outline');
    export import ActionLanguage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/language');
    export import ActionLaunch = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/launch');
    export import ActionLightbulbOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/lightbulb-outline');
    export import ActionLineStyle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/line-style');
    export import ActionLineWeight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/line-weight');
    export import ActionList = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/list');
    export import ActionLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/lock');
    export import ActionLockOpen = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/lock-open');
    export import ActionLockOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/lock-outline');
    export import ActionLoyalty = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/loyalty');
    export import ActionMarkunreadMailbox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/markunread-mailbox');
    export import ActionMotorcycle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/motorcycle');
    export import ActionNoteAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/note-add');
    export import ActionOfflinePin = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/offline-pin');
    export import ActionOpacity = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/opacity');
    export import ActionOpenInBrowser = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/open-in-browser');
    export import ActionOpenInNew = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/open-in-new');
    export import ActionOpenWith = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/open-with');
    export import ActionPageview = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/pageview');
    export import ActionPanTool = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/pan-tool');
    export import ActionPayment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/payment');
    export import ActionPermCameraMic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-camera-mic');
    export import ActionPermContactCalendar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-contact-calendar');
    export import ActionPermDataSetting = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-data-setting');
    export import ActionPermDeviceInformation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-device-information');
    export import ActionPermIdentity = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-identity');
    export import ActionPermMedia = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-media');
    export import ActionPermPhoneMsg = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-phone-msg');
    export import ActionPermScanWifi = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/perm-scan-wifi');
    export import ActionPets = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/pets');
    export import ActionPictureInPicture = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/picture-in-picture');
    export import ActionPictureInPictureAlt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/picture-in-picture-alt');
    export import ActionPlayForWork = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/play-for-work');
    export import ActionPolymer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/polymer');
    export import ActionPowerSettingsNew = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/power-settings-new');
    export import ActionPregnantWoman = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/pregnant-woman');
    export import ActionPrint = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/print');
    export import ActionQueryBuilder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/query-builder');
    export import ActionQuestionAnswer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/question-answer');
    export import ActionReceipt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/receipt');
    export import ActionRecordVoiceOver = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/record-voice-over');
    export import ActionRedeem = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/redeem');
    export import ActionReorder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/reorder');
    export import ActionReportProblem = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/report-problem');
    export import ActionRestore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/restore');
    export import ActionRoom = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/room');
    export import ActionRoundedCorner = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/rounded-corner');
    export import ActionRowing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/rowing');
    export import ActionSchedule = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/schedule');
    export import ActionSearch = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/search');
    export import ActionSettings = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings');
    export import ActionSettingsApplications = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-applications');
    export import ActionSettingsBackupRestore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-backup-restore');
    export import ActionSettingsBluetooth = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-bluetooth');
    export import ActionSettingsBrightness = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-brightness');
    export import ActionSettingsCell = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-cell');
    export import ActionSettingsEthernet = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-ethernet');
    export import ActionSettingsInputAntenna = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-input-antenna');
    export import ActionSettingsInputComponent = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-input-component');
    export import ActionSettingsInputComposite = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-input-composite');
    export import ActionSettingsInputHdmi = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-input-hdmi');
    export import ActionSettingsInputSvideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-input-svideo');
    export import ActionSettingsOverscan = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-overscan');
    export import ActionSettingsPhone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-phone');
    export import ActionSettingsPower = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-power');
    export import ActionSettingsRemote = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-remote');
    export import ActionSettingsVoice = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/settings-voice');
    export import ActionShop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/shop');
    export import ActionShoppingBasket = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/shopping-basket');
    export import ActionShoppingCart = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/shopping-cart');
    export import ActionShopTwo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/shop-two');
    export import ActionSpeakerNotes = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/speaker-notes');
    export import ActionSpellcheck = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/spellcheck');
    export import ActionStars = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/stars');
    export import ActionStore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/store');
    export import ActionSubject = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/subject');
    export import ActionSupervisorAccount = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/supervisor-account');
    export import ActionSwapHoriz = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/swap-horiz');
    export import ActionSwapVert = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/swap-vert');
    export import ActionSwapVerticalCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/swap-vertical-circle');
    export import ActionSystemUpdateAlt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/system-update-alt');
    export import ActionTab = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/tab');
    export import ActionTabUnselected = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/tab-unselected');
    export import ActionTheaters = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/theaters');
    export import ActionThreeDRotation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/three-d-rotation');
    export import ActionThumbDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/thumb-down');
    export import ActionThumbsUpDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/thumbs-up-down');
    export import ActionThumbUp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/thumb-up');
    export import ActionTimeline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/timeline');
    export import ActionToc = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/toc');
    export import ActionToday = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/today');
    export import ActionToll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/toll');
    export import ActionTouchApp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/touch-app');
    export import ActionTrackChanges = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/track-changes');
    export import ActionTranslate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/translate');
    export import ActionTrendingDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/trending-down');
    export import ActionTrendingFlat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/trending-flat');
    export import ActionTrendingUp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/trending-up');
    export import ActionTurnedIn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/turned-in');
    export import ActionTurnedInNot = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/turned-in-not');
    export import ActionUpdate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/update');
    export import ActionVerifiedUser = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/verified-user');
    export import ActionViewAgenda = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-agenda');
    export import ActionViewArray = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-array');
    export import ActionViewCarousel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-carousel');
    export import ActionViewColumn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-column');
    export import ActionViewDay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-day');
    export import ActionViewHeadline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-headline');
    export import ActionViewList = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-list');
    export import ActionViewModule = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-module');
    export import ActionViewQuilt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-quilt');
    export import ActionViewStream = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-stream');
    export import ActionViewWeek = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/view-week');
    export import ActionVisibility = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/visibility');
    export import ActionVisibilityOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/visibility-off');
    export import ActionWatchLater = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/watch-later');
    export import ActionWork = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/work');
    export import ActionYoutubeSearchedFor = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/youtube-searched-for');
    export import ActionZoomIn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/zoom-in');
    export import ActionZoomOut = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/action/zoom-out');
    export import AlertAddAlert = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/alert/add-alert');
    export import AlertError = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/alert/error');
    export import AlertErrorOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/alert/error-outline');
    export import AlertWarning = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/alert/warning');
    export import AvAddToQueue = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/add-to-queue');
    export import AvAirplay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/airplay');
    export import AvAlbum = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/album');
    export import AvArtTrack = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/art-track');
    export import AvAvTimer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/av-timer');
    export import AvClosedCaption = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/closed-caption');
    export import AvEqualizer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/equalizer');
    export import AvExplicit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/explicit');
    export import AvFastForward = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fast-forward');
    export import AvFastRewind = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fast-rewind');
    export import AvFiberDvr = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fiber-dvr');
    export import AvFiberManualRecord = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fiber-manual-record');
    export import AvFiberNew = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fiber-new');
    export import AvFiberPin = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fiber-pin');
    export import AvFiberSmartRecord = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/fiber-smart-record');
    export import AvForward10 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/forward-10');
    export import AvForward30 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/forward-30');
    export import AvForward5 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/forward-5');
    export import AvGames = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/games');
    export import AvHd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/hd');
    export import AvHearing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/hearing');
    export import AvHighQuality = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/high-quality');
    export import AvLibraryAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/library-add');
    export import AvLibraryBooks = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/library-books');
    export import AvLibraryMusic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/library-music');
    export import AvLoop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/loop');
    export import AvMic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/mic');
    export import AvMicNone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/mic-none');
    export import AvMicOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/mic-off');
    export import AvMovie = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/movie');
    export import AvMusicVideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/music-video');
    export import AvNewReleases = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/new-releases');
    export import AvNotInterested = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/not-interested');
    export import AvPause = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/pause');
    export import AvPauseCircleFilled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/pause-circle-filled');
    export import AvPauseCircleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/pause-circle-outline');
    export import AvPlayArrow = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/play-arrow');
    export import AvPlayCircleFilled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/play-circle-filled');
    export import AvPlayCircleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/play-circle-outline');
    export import AvPlaylistAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/playlist-add');
    export import AvPlaylistAddCheck = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/playlist-add-check');
    export import AvPlaylistPlay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/playlist-play');
    export import AvQueue = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/queue');
    export import AvQueueMusic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/queue-music');
    export import AvQueuePlayNext = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/queue-play-next');
    export import AvRadio = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/radio');
    export import AvRecentActors = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/recent-actors');
    export import AvRemoveFromQueue = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/remove-from-queue');
    export import AvRepeat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/repeat');
    export import AvRepeatOne = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/repeat-one');
    export import AvReplay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/replay');
    export import AvReplay10 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/replay-10');
    export import AvReplay30 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/replay-30');
    export import AvReplay5 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/replay-5');
    export import AvShuffle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/shuffle');
    export import AvSkipNext = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/skip-next');
    export import AvSkipPrevious = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/skip-previous');
    export import AvSlowMotionVideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/slow-motion-video');
    export import AvSnooze = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/snooze');
    export import AvSortByAlpha = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/sort-by-alpha');
    export import AvStop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/stop');
    export import AvSubscriptions = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/subscriptions');
    export import AvSubtitles = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/subtitles');
    export import AvSurroundSound = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/surround-sound');
    export import AvVideocam = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/videocam');
    export import AvVideocamOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/videocam-off');
    export import AvVideoLibrary = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/video-library');
    export import AvVolumeDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/volume-down');
    export import AvVolumeMute = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/volume-mute');
    export import AvVolumeOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/volume-off');
    export import AvVolumeUp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/volume-up');
    export import AvWeb = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/web');
    export import AvWebAsset = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/av/web-asset');
    export import CommunicationBusiness = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/business');
    export import CommunicationCall = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call');
    export import CommunicationCallEnd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-end');
    export import CommunicationCallMade = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-made');
    export import CommunicationCallMerge = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-merge');
    export import CommunicationCallMissed = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-missed');
    export import CommunicationCallMissedOutgoing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-missed-outgoing');
    export import CommunicationCallReceived = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-received');
    export import CommunicationCallSplit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/call-split');
    export import CommunicationChat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/chat');
    export import CommunicationChatBubble = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/chat-bubble');
    export import CommunicationChatBubbleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/chat-bubble-outline');
    export import CommunicationClearAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/clear-all');
    export import CommunicationComment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/comment');
    export import CommunicationContactMail = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/contact-mail');
    export import CommunicationContactPhone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/contact-phone');
    export import CommunicationContacts = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/contacts');
    export import CommunicationDialerSip = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/dialer-sip');
    export import CommunicationDialpad = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/dialpad');
    export import CommunicationEmail = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/email');
    export import CommunicationForum = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/forum');
    export import CommunicationImportContacts = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/import-contacts');
    export import CommunicationImportExport = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/import-export');
    export import CommunicationInvertColorsOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/invert-colors-off');
    export import CommunicationLiveHelp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/live-help');
    export import CommunicationLocationOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/location-off');
    export import CommunicationLocationOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/location-on');
    export import CommunicationMailOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/mail-outline');
    export import CommunicationMessage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/message');
    export import CommunicationNoSim = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/no-sim');
    export import CommunicationPhone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/phone');
    export import CommunicationPhonelinkErase = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/phonelink-erase');
    export import CommunicationPhonelinkLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/phonelink-lock');
    export import CommunicationPhonelinkRing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/phonelink-ring');
    export import CommunicationPhonelinkSetup = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/phonelink-setup');
    export import CommunicationPortableWifiOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/portable-wifi-off');
    export import CommunicationPresentToAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/present-to-all');
    export import CommunicationRingVolume = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/ring-volume');
    export import CommunicationScreenShare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/screen-share');
    export import CommunicationSpeakerPhone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/speaker-phone');
    export import CommunicationStayCurrentLandscape = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/stay-current-landscape');
    export import CommunicationStayCurrentPortrait = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/stay-current-portrait');
    export import CommunicationStayPrimaryLandscape = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/stay-primary-landscape');
    export import CommunicationStayPrimaryPortrait = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/stay-primary-portrait');
    export import CommunicationStopScreenShare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/stop-screen-share');
    export import CommunicationSwapCalls = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/swap-calls');
    export import CommunicationTactMail = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/tact-mail');
    export import CommunicationTextsms = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/textsms');
    export import CommunicationVoicemail = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/voicemail');
    export import CommunicationVpnKey = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/communication/vpn-key');
    export import ContentAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/add');
    export import ContentAddBox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/add-box');
    export import ContentAddCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/add-circle');
    export import ContentAddCircleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/add-circle-outline');
    export import ContentArchive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/archive');
    export import ContentBackspace = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/backspace');
    export import ContentBlock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/block');
    export import ContentClear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/clear');
    export import ContentContentCopy = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/content-copy');
    export import ContentContentCut = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/content-cut');
    export import ContentContentPaste = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/content-paste');
    export import ContentCreate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/create');
    export import ContentDrafts = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/drafts');
    export import ContentFilterList = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/filter-list');
    export import ContentFlag = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/flag');
    export import ContentFontDownload = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/font-download');
    export import ContentForward = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/forward');
    export import ContentGesture = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/gesture');
    export import ContentInbox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/inbox');
    export import ContentLink = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/link');
    export import ContentMail = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/mail');
    export import ContentMarkunread = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/markunread');
    export import ContentMoveToInbox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/move-to-inbox');
    export import ContentNextWeek = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/next-week');
    export import ContentRedo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/redo');
    export import ContentRemove = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/remove');
    export import ContentRemoveCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/remove-circle');
    export import ContentRemoveCircleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/remove-circle-outline');
    export import ContentReply = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/reply');
    export import ContentReplyAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/reply-all');
    export import ContentReport = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/report');
    export import ContentSave = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/save');
    export import ContentSelectAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/select-all');
    export import ContentSend = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/send');
    export import ContentSort = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/sort');
    export import ContentTextFormat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/text-format');
    export import ContentUnarchive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/unarchive');
    export import ContentUndo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/undo');
    export import ContentWeekend = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/content/weekend');
    export import DeviceAccessAlarm = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/access-alarm');
    export import DeviceAccessAlarms = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/access-alarms');
    export import DeviceAccessTime = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/access-time');
    export import DeviceAddAlarm = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/add-alarm');
    export import DeviceAirplanemodeActive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/airplanemode-active');
    export import DeviceAirplanemodeInactive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/airplanemode-inactive');
    export import DeviceBattery20 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-20');
    export import DeviceBattery30 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-30');
    export import DeviceBattery50 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-50');
    export import DeviceBattery60 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-60');
    export import DeviceBattery80 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-80');
    export import DeviceBattery90 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-90');
    export import DeviceBatteryAlert = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-alert');
    export import DeviceBatteryCharging20 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-20');
    export import DeviceBatteryCharging30 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-30');
    export import DeviceBatteryCharging50 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-50');
    export import DeviceBatteryCharging60 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-60');
    export import DeviceBatteryCharging80 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-80');
    export import DeviceBatteryCharging90 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-90');
    export import DeviceBatteryChargingFull = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-charging-full');
    export import DeviceBatteryFull = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-full');
    export import DeviceBatteryStd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-std');
    export import DeviceBatteryUnknown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/battery-unknown');
    export import DeviceBluetooth = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/bluetooth');
    export import DeviceBluetoothConnected = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/bluetooth-connected');
    export import DeviceBluetoothDisabled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/bluetooth-disabled');
    export import DeviceBluetoothSearching = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/bluetooth-searching');
    export import DeviceBrightnessAuto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/brightness-auto');
    export import DeviceBrightnessHigh = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/brightness-high');
    export import DeviceBrightnessLow = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/brightness-low');
    export import DeviceBrightnessMedium = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/brightness-medium');
    export import DeviceDataUsage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/data-usage');
    export import DeviceDeveloperMode = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/developer-mode');
    export import DeviceDevices = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/devices');
    export import DeviceDvr = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/dvr');
    export import DeviceGpsFixed = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/gps-fixed');
    export import DeviceGpsNotFixed = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/gps-not-fixed');
    export import DeviceGpsOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/gps-off');
    export import DeviceGraphicEq = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/graphic-eq');
    export import DeviceLocationDisabled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/location-disabled');
    export import DeviceLocationSearching = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/location-searching');
    export import DeviceNetworkCell = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/network-cell');
    export import DeviceNetworkWifi = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/network-wifi');
    export import DeviceNfc = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/nfc');
    export import DeviceScreenLockLandscape = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/screen-lock-landscape');
    export import DeviceScreenLockPortrait = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/screen-lock-portrait');
    export import DeviceScreenLockRotation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/screen-lock-rotation');
    export import DeviceScreenRotation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/screen-rotation');
    export import DeviceSdStorage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/sd-storage');
    export import DeviceSettingsSystemDaydream = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/settings-system-daydream');
    export import DeviceSignalCellular0Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-0-bar');
    export import DeviceSignalCellular1Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-1-bar');
    export import DeviceSignalCellular2Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-2-bar');
    export import DeviceSignalCellular3Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-3-bar');
    export import DeviceSignalCellular4Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-4-bar');
    export import DeviceSignalCellularConnectedNoInternet0Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-0-bar');
    export import DeviceSignalCellularConnectedNoInternet1Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-1-bar');
    export import DeviceSignalCellularConnectedNoInternet2Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-2-bar');
    export import DeviceSignalCellularConnectedNoInternet3Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-3-bar');
    export import DeviceSignalCellularConnectedNoInternet4Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-connected-no-internet-4-bar');
    export import DeviceSignalCellularNoSim = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-no-sim');
    export import DeviceSignalCellularNull = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-null');
    export import DeviceSignalCellularOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-cellular-off');
    export import DeviceSignalWifi0Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-0-bar');
    export import DeviceSignalWifi1Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-1-bar');
    export import DeviceSignalWifi1BarLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-1-bar-lock');
    export import DeviceSignalWifi2Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-2-bar');
    export import DeviceSignalWifi2BarLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-2-bar-lock');
    export import DeviceSignalWifi3Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-3-bar');
    export import DeviceSignalWifi3BarLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-3-bar-lock');
    export import DeviceSignalWifi4Bar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-4-bar');
    export import DeviceSignalWifi4BarLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-4-bar-lock');
    export import DeviceSignalWifiOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/signal-wifi-off');
    export import DeviceStorage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/storage');
    export import DeviceUsb = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/usb');
    export import DeviceWallpaper = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/wallpaper');
    export import DeviceWidgets = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/widgets');
    export import DeviceWifiLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/wifi-lock');
    export import DeviceWifiTethering = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/device/wifi-tethering');
    export import EditorAttachFile = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/attach-file');
    export import EditorAttachMoney = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/attach-money');
    export import EditorBorderAll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-all');
    export import EditorBorderBottom = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-bottom');
    export import EditorBorderClear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-clear');
    export import EditorBorderColor = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-color');
    export import EditorBorderHorizontal = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-horizontal');
    export import EditorBorderInner = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-inner');
    export import EditorBorderLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-left');
    export import EditorBorderOuter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-outer');
    export import EditorBorderRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-right');
    export import EditorBorderStyle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-style');
    export import EditorBorderTop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-top');
    export import EditorBorderVertical = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/border-vertical');
    export import EditorDragHandle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/drag-handle');
    export import EditorFormatAlignCenter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-align-center');
    export import EditorFormatAlignJustify = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-align-justify');
    export import EditorFormatAlignLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-align-left');
    export import EditorFormatAlignRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-align-right');
    export import EditorFormatBold = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-bold');
    export import EditorFormatClear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-clear');
    export import EditorFormatColorFill = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-color-fill');
    export import EditorFormatColorReset = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-color-reset');
    export import EditorFormatColorText = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-color-text');
    export import EditorFormatIndentDecrease = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-indent-decrease');
    export import EditorFormatIndentIncrease = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-indent-increase');
    export import EditorFormatItalic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-italic');
    export import EditorFormatLineSpacing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-line-spacing');
    export import EditorFormatListBulleted = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-list-bulleted');
    export import EditorFormatListNumbered = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-list-numbered');
    export import EditorFormatPaint = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-paint');
    export import EditorFormatQuote = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-quote');
    export import EditorFormatShapes = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-shapes');
    export import EditorFormatSize = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-size');
    export import EditorFormatStrikethrough = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-strikethrough');
    export import EditorFormatTextdirectionLToR = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-textdirection-l-to-r');
    export import EditorFormatTextdirectionRToL = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-textdirection-r-to-l');
    export import EditorFormatUnderlined = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/format-underlined');
    export import EditorFunctions = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/functions');
    export import EditorHighlight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/highlight');
    export import EditorInsertChart = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-chart');
    export import EditorInsertComment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-comment');
    export import EditorInsertDriveFile = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-drive-file');
    export import EditorInsertEmoticon = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-emoticon');
    export import EditorInsertInvitation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-invitation');
    export import EditorInsertLink = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-link');
    export import EditorInsertPhoto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/insert-photo');
    export import EditorLinearScale = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/linear-scale');
    export import EditorMergeType = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/merge-type');
    export import EditorModeComment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/mode-comment');
    export import EditorModeEdit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/mode-edit');
    export import EditorMoneyOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/money-off');
    export import EditorPublish = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/publish');
    export import EditorShortText = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/short-text');
    export import EditorSpaceBar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/space-bar');
    export import EditorStrikethroughS = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/strikethrough-s');
    export import EditorTextFields = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/text-fields');
    export import EditorVerticalAlignBottom = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/vertical-align-bottom');
    export import EditorVerticalAlignCenter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/vertical-align-center');
    export import EditorVerticalAlignTop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/vertical-align-top');
    export import EditorWrapText = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/editor/wrap-text');
    export import FileAttachment = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/attachment');
    export import FileCloud = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud');
    export import FileCloudCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-circle');
    export import FileCloudDone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-done');
    export import FileCloudDownload = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-download');
    export import FileCloudOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-off');
    export import FileCloudQueue = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-queue');
    export import FileCloudUpload = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/cloud-upload');
    export import FileCreateNewFolder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/create-new-folder');
    export import FileFileDownload = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/file-download');
    export import FileFileUpload = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/file-upload');
    export import FileFolder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/folder');
    export import FileFolderOpen = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/folder-open');
    export import FileFolderShared = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/file/folder-shared');
    export import HardwareCast = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/cast');
    export import HardwareCastConnected = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/cast-connected');
    export import HardwareComputer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/computer');
    export import HardwareDesktopMac = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/desktop-mac');
    export import HardwareDesktopWindows = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/desktop-windows');
    export import HardwareDeveloperBoard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/developer-board');
    export import HardwareDeviceHub = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/device-hub');
    export import HardwareDevicesOther = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/devices-other');
    export import HardwareDock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/dock');
    export import HardwareGamepad = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/gamepad');
    export import HardwareHeadset = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/headset');
    export import HardwareHeadsetMic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/headset-mic');
    export import HardwareKeyboard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard');
    export import HardwareKeyboardArrowDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-arrow-down');
    export import HardwareKeyboardArrowLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-arrow-left');
    export import HardwareKeyboardArrowRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-arrow-right');
    export import HardwareKeyboardArrowUp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-arrow-up');
    export import HardwareKeyboardBackspace = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-backspace');
    export import HardwareKeyboardCapslock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-capslock');
    export import HardwareKeyboardHide = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-hide');
    export import HardwareKeyboardReturn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-return');
    export import HardwareKeyboardTab = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-tab');
    export import HardwareKeyboardVoice = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/keyboard-voice');
    export import HardwareLaptop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/laptop');
    export import HardwareLaptopChromebook = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/laptop-chromebook');
    export import HardwareLaptopMac = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/laptop-mac');
    export import HardwareLaptopWindows = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/laptop-windows');
    export import HardwareMemory = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/memory');
    export import HardwareMouse = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/mouse');
    export import HardwarePhoneAndroid = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/phone-android');
    export import HardwarePhoneIphone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/phone-iphone');
    export import HardwarePhonelink = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/phonelink');
    export import HardwarePhonelinkOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/phonelink-off');
    export import HardwarePowerInput = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/power-input');
    export import HardwareRouter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/router');
    export import HardwareScanner = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/scanner');
    export import HardwareSecurity = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/security');
    export import HardwareSimCard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/sim-card');
    export import HardwareSmartphone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/smartphone');
    export import HardwareSpeaker = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/speaker');
    export import HardwareSpeakerGroup = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/speaker-group');
    export import HardwareTablet = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/tablet');
    export import HardwareTabletAndroid = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/tablet-android');
    export import HardwareTabletMac = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/tablet-mac');
    export import HardwareToys = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/toys');
    export import HardwareTv = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/tv');
    export import HardwareVideogameAsset = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/videogame-asset');
    export import HardwareWatch = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/hardware/watch');
    export import ImageAddAPhoto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/add-a-photo');
    export import ImageAddToPhotos = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/add-to-photos');
    export import ImageAdjust = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/adjust');
    export import ImageAssistant = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/assistant');
    export import ImageAssistantPhoto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/assistant-photo');
    export import ImageAudiotrack = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/audiotrack');
    export import ImageBlurCircular = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/blur-circular');
    export import ImageBlurLinear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/blur-linear');
    export import ImageBlurOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/blur-off');
    export import ImageBlurOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/blur-on');
    export import ImageBrightness1 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-1');
    export import ImageBrightness2 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-2');
    export import ImageBrightness3 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-3');
    export import ImageBrightness4 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-4');
    export import ImageBrightness5 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-5');
    export import ImageBrightness6 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-6');
    export import ImageBrightness7 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brightness-7');
    export import ImageBrokenImage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/broken-image');
    export import ImageBrush = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/brush');
    export import ImageCamera = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/camera');
    export import ImageCameraAlt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/camera-alt');
    export import ImageCameraFront = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/camera-front');
    export import ImageCameraRear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/camera-rear');
    export import ImageCameraRoll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/camera-roll');
    export import ImageCenterFocusStrong = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/center-focus-strong');
    export import ImageCenterFocusWeak = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/center-focus-weak');
    export import ImageCollections = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/collections');
    export import ImageCollectionsBookmark = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/collections-bookmark');
    export import ImageColorize = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/colorize');
    export import ImageColorLens = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/color-lens');
    export import ImageCompare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/compare');
    export import ImageControlPoint = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/control-point');
    export import ImageControlPointDuplicate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/control-point-duplicate');
    export import ImageCrop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop');
    export import ImageCrop169 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-16-9');
    export import ImageCrop32 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-3-2');
    export import ImageCrop54 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-5-4');
    export import ImageCrop75 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-7-5');
    export import ImageCropDin = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-din');
    export import ImageCropFree = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-free');
    export import ImageCropLandscape = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-landscape');
    export import ImageCropOriginal = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-original');
    export import ImageCropPortrait = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-portrait');
    export import ImageCropRotate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-rotate');
    export import ImageCropSquare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/crop-square');
    export import ImageDehaze = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/dehaze');
    export import ImageDetails = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/details');
    export import ImageEdit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/edit');
    export import ImageExposure = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure');
    export import ImageExposureNeg1 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure-neg-1');
    export import ImageExposureNeg2 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure-neg-2');
    export import ImageExposurePlus1 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure-plus-1');
    export import ImageExposurePlus2 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure-plus-2');
    export import ImageExposureZero = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/exposure-zero');
    export import ImageFilter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter');
    export import ImageFilter1 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-1');
    export import ImageFilter2 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-2');
    export import ImageFilter3 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-3');
    export import ImageFilter4 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-4');
    export import ImageFilter5 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-5');
    export import ImageFilter6 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-6');
    export import ImageFilter7 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-7');
    export import ImageFilter8 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-8');
    export import ImageFilter9 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-9');
    export import ImageFilter9Plus = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-9-plus');
    export import ImageFilterBAndW = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-b-and-w');
    export import ImageFilterCenterFocus = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-center-focus');
    export import ImageFilterDrama = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-drama');
    export import ImageFilterFrames = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-frames');
    export import ImageFilterHdr = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-hdr');
    export import ImageFilterNone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-none');
    export import ImageFilterTiltShift = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-tilt-shift');
    export import ImageFilterVintage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/filter-vintage');
    export import ImageFlare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/flare');
    export import ImageFlashAuto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/flash-auto');
    export import ImageFlashOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/flash-off');
    export import ImageFlashOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/flash-on');
    export import ImageFlip = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/flip');
    export import ImageGradient = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/gradient');
    export import ImageGrain = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/grain');
    export import ImageGridOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/grid-off');
    export import ImageGridOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/grid-on');
    export import ImageHdrOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/hdr-off');
    export import ImageHdrOn = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/hdr-on');
    export import ImageHdrStrong = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/hdr-strong');
    export import ImageHdrWeak = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/hdr-weak');
    export import ImageHealing = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/healing');
    export import ImageImage = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/image');
    export import ImageImageAspectRatio = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/image-aspect-ratio');
    export import ImageIso = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/iso');
    export import ImageLandscape = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/landscape');
    export import ImageLeakAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/leak-add');
    export import ImageLeakRemove = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/leak-remove');
    export import ImageLens = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/lens');
    export import ImageLinkedCamera = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/linked-camera');
    export import ImageLooks = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks');
    export import ImageLooks3 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-3');
    export import ImageLooks4 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-4');
    export import ImageLooks5 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-5');
    export import ImageLooks6 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-6');
    export import ImageLooksOne = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-one');
    export import ImageLooksTwo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/looks-two');
    export import ImageLoupe = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/loupe');
    export import ImageMonochromePhotos = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/monochrome-photos');
    export import ImageMovieCreation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/movie-creation');
    export import ImageMovieFilter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/movie-filter');
    export import ImageMusicNote = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/music-note');
    export import ImageNature = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/nature');
    export import ImageNaturePeople = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/nature-people');
    export import ImageNavigateBefore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/navigate-before');
    export import ImageNavigateNext = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/navigate-next');
    export import ImagePalette = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/palette');
    export import ImagePanorama = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/panorama');
    export import ImagePanoramaFishEye = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/panorama-fish-eye');
    export import ImagePanoramaHorizontal = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/panorama-horizontal');
    export import ImagePanoramaVertical = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/panorama-vertical');
    export import ImagePanoramaWideAngle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/panorama-wide-angle');
    export import ImagePhoto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo');
    export import ImagePhotoAlbum = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-album');
    export import ImagePhotoCamera = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-camera');
    export import ImagePhotoFilter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-filter');
    export import ImagePhotoLibrary = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-library');
    export import ImagePhotoSizeSelectActual = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-size-select-actual');
    export import ImagePhotoSizeSelectLarge = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-size-select-large');
    export import ImagePhotoSizeSelectSmall = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/photo-size-select-small');
    export import ImagePictureAsPdf = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/picture-as-pdf');
    export import ImagePortrait = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/portrait');
    export import ImageRemoveRedEye = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/remove-red-eye');
    export import ImageRotate90DegreesCcw = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/rotate-90-degrees-ccw');
    export import ImageRotateLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/rotate-left');
    export import ImageRotateRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/rotate-right');
    export import ImageSlideshow = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/slideshow');
    export import ImageStraighten = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/straighten');
    export import ImageStyle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/style');
    export import ImageSwitchCamera = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/switch-camera');
    export import ImageSwitchVideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/switch-video');
    export import ImageTagFaces = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/tag-faces');
    export import ImageTexture = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/texture');
    export import ImageTimelapse = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/timelapse');
    export import ImageTimer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/timer');
    export import ImageTimer10 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/timer-10');
    export import ImageTimer3 = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/timer-3');
    export import ImageTimerOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/timer-off');
    export import ImageTonality = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/tonality');
    export import ImageTransform = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/transform');
    export import ImageTune = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/tune');
    export import ImageViewComfy = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/view-comfy');
    export import ImageViewCompact = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/view-compact');
    export import ImageVignette = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/vignette');
    export import ImageWbAuto = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/wb-auto');
    export import ImageWbCloudy = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/wb-cloudy');
    export import ImageWbIncandescent = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/wb-incandescent');
    export import ImageWbIridescent = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/wb-iridescent');
    export import ImageWbSunny = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/image/wb-sunny');
    export import Index = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/index');
    export import IndexGenerator = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/index-generator');
    export import MapsAddLocation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/add-location');
    export import MapsBeenhere = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/beenhere');
    export import MapsDirections = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions');
    export import MapsDirectionsBike = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-bike');
    export import MapsDirectionsBoat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-boat');
    export import MapsDirectionsBus = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-bus');
    export import MapsDirectionsCar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-car');
    export import MapsDirectionsRailway = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-railway');
    export import MapsDirectionsRun = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-run');
    export import MapsDirectionsSubway = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-subway');
    export import MapsDirectionsTransit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-transit');
    export import MapsDirectionsWalk = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/directions-walk');
    export import MapsEditLocation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/edit-location');
    export import MapsFlight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/flight');
    export import MapsHotel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/hotel');
    export import MapsLayers = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/layers');
    export import MapsLayersClear = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/layers-clear');
    export import MapsLocalActivity = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-activity');
    export import MapsLocalAirport = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-airport');
    export import MapsLocalAtm = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-atm');
    export import MapsLocalBar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-bar');
    export import MapsLocalCafe = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-cafe');
    export import MapsLocalCarWash = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-car-wash');
    export import MapsLocalConvenienceStore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-convenience-store');
    export import MapsLocalDining = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-dining');
    export import MapsLocalDrink = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-drink');
    export import MapsLocalFlorist = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-florist');
    export import MapsLocalGasStation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-gas-station');
    export import MapsLocalGroceryStore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-grocery-store');
    export import MapsLocalHospital = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-hospital');
    export import MapsLocalHotel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-hotel');
    export import MapsLocalLaundryService = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-laundry-service');
    export import MapsLocalLibrary = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-library');
    export import MapsLocalMall = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-mall');
    export import MapsLocalMovies = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-movies');
    export import MapsLocalOffer = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-offer');
    export import MapsLocalParking = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-parking');
    export import MapsLocalPharmacy = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-pharmacy');
    export import MapsLocalPhone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-phone');
    export import MapsLocalPizza = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-pizza');
    export import MapsLocalPlay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-play');
    export import MapsLocalPostOffice = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-post-office');
    export import MapsLocalPrintshop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-printshop');
    export import MapsLocalSee = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-see');
    export import MapsLocalShipping = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-shipping');
    export import MapsLocalTaxi = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/local-taxi');
    export import MapsMap = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/map');
    export import MapsMyLocation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/my-location');
    export import MapsNavigation = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/navigation');
    export import MapsNearMe = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/near-me');
    export import MapsPersonPin = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/person-pin');
    export import MapsPersonPinCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/person-pin-circle');
    export import MapsPinDrop = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/pin-drop');
    export import MapsPlace = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/place');
    export import MapsRateReview = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/rate-review');
    export import MapsRestaurantMenu = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/restaurant-menu');
    export import MapsSatellite = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/satellite');
    export import MapsStoreMallDirectory = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/store-mall-directory');
    export import MapsTerrain = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/terrain');
    export import MapsTraffic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/traffic');
    export import MapsZoomOutMap = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/maps/zoom-out-map');
    export import NavigationApps = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/apps');
    export import NavigationArrowBack = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-back');
    export import NavigationArrowDownward = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-downward');
    export import NavigationArrowDropDown = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-drop-down');
    export import NavigationArrowDropDownCircle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-drop-down-circle');
    export import NavigationArrowDropRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation-arrow-drop-right');
    export import NavigationArrowDropUp = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-drop-up');
    export import NavigationArrowForward = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-forward');
    export import NavigationArrowUpward = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/arrow-upward');
    export import NavigationCancel = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/cancel');
    export import NavigationCheck = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/check');
    export import NavigationChevronLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/chevron-left');
    export import NavigationChevronRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/chevron-right');
    export import NavigationClose = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/close');
    export import NavigationExpandLess = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/expand-less');
    export import NavigationExpandMore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/expand-more');
    export import NavigationFullscreen = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/fullscreen');
    export import NavigationFullscreenExit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/fullscreen-exit');
    export import NavigationMenu = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/menu');
    export import NavigationMoreHoriz = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/more-horiz');
    export import NavigationMoreVert = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/more-vert');
    export import NavigationRefresh = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/refresh');
    export import NavigationSubdirectoryArrowLeft = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/subdirectory-arrow-left');
    export import NavigationSubdirectoryArrowRight = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/subdirectory-arrow-right');
    export import NavigationUnfoldLess = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/unfold-less');
    export import NavigationUnfoldMore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/navigation/unfold-more');
    export import NotificationAdb = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/adb');
    export import NotificationAirlineSeatFlat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-flat');
    export import NotificationAirlineSeatFlatAngled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-flat-angled');
    export import NotificationAirlineSeatIndividualSuite = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-individual-suite');
    export import NotificationAirlineSeatLegroomExtra = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-legroom-extra');
    export import NotificationAirlineSeatLegroomNormal = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-legroom-normal');
    export import NotificationAirlineSeatLegroomReduced = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-legroom-reduced');
    export import NotificationAirlineSeatReclineExtra = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-recline-extra');
    export import NotificationAirlineSeatReclineNormal = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/airline-seat-recline-normal');
    export import NotificationBluetoothAudio = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/bluetooth-audio');
    export import NotificationConfirmationNumber = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/confirmation-number');
    export import NotificationDiscFull = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/disc-full');
    export import NotificationDoNotDisturb = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/do-not-disturb');
    export import NotificationDoNotDisturbAlt = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/do-not-disturb-alt');
    export import NotificationDriveEta = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/drive-eta');
    export import NotificationEnhancedEncryption = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/enhanced-encryption');
    export import NotificationEventAvailable = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/event-available');
    export import NotificationEventBusy = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/event-busy');
    export import NotificationEventNote = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/event-note');
    export import NotificationFolderSpecial = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/folder-special');
    export import NotificationLiveTv = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/live-tv');
    export import NotificationMms = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/mms');
    export import NotificationMore = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/more');
    export import NotificationNetworkCheck = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/network-check');
    export import NotificationNetworkLocked = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/network-locked');
    export import NotificationNoEncryption = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/no-encryption');
    export import NotificationOndemandVideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/ondemand-video');
    export import NotificationPersonalVideo = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/personal-video');
    export import NotificationPhoneBluetoothSpeaker = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-bluetooth-speaker');
    export import NotificationPhoneForwarded = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-forwarded');
    export import NotificationPhoneInTalk = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-in-talk');
    export import NotificationPhoneLocked = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-locked');
    export import NotificationPhoneMissed = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-missed');
    export import NotificationPhonePaused = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/phone-paused');
    export import NotificationPower = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/power');
    export import NotificationRvHookup = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/rv-hookup');
    export import NotificationSdCard = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sd-card');
    export import NotificationSimCardAlert = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sim-card-alert');
    export import NotificationSms = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sms');
    export import NotificationSmsFailed = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sms-failed');
    export import NotificationSync = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sync');
    export import NotificationSyncDisabled = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sync-disabled');
    export import NotificationSyncProblem = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/sync-problem');
    export import NotificationSystemUpdate = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/system-update');
    export import NotificationTapAndPlay = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/tap-and-play');
    export import NotificationTimeToLeave = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/time-to-leave');
    export import NotificationVibration = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/vibration');
    export import NotificationVoiceChat = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/voice-chat');
    export import NotificationVpnLock = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/vpn-lock');
    export import NotificationWc = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/wc');
    export import NotificationWifi = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/notification/wifi');
    export import PlacesAcUnit = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/ac-unit');
    export import PlacesAirportShuttle = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/airport-shuttle');
    export import PlacesAllInclusive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/all-inclusive');
    export import PlacesBeachAccess = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/beach-access');
    export import PlacesBusinessCenter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/business-center');
    export import PlacesCasino = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/casino');
    export import PlacesChildCare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/child-care');
    export import PlacesChildFriendly = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/child-friendly');
    export import PlacesFitnessCenter = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/fitness-center');
    export import PlacesFreeBreakfast = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/free-breakfast');
    export import PlacesGolfCourse = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/golf-course');
    export import PlacesHotTub = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/hot-tub');
    export import PlacesKitchen = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/kitchen');
    export import PlacesPool = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/pool');
    export import PlacesRoomService = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/room-service');
    export import PlacesSmokeFree = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/smoke-free');
    export import PlacesSmokingRooms = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/smoking-rooms');
    export import PlacesSpa = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/places/spa');
    export import SocialCake = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/cake');
    export import SocialDomain = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/domain');
    export import SocialGroup = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/group');
    export import SocialGroupAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/group-add');
    export import SocialLocationCity = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/location-city');
    export import SocialMood = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/mood');
    export import SocialMoodBad = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/mood-bad');
    export import SocialNotifications = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/notifications');
    export import SocialNotificationsActive = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/notifications-active');
    export import SocialNotificationsNone = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/notifications-none');
    export import SocialNotificationsOff = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/notifications-off');
    export import SocialNotificationsPaused = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/notifications-paused');
    export import SocialPages = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/pages');
    export import SocialPartyMode = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/party-mode');
    export import SocialPeople = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/people');
    export import SocialPeopleOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/people-outline');
    export import SocialPerson = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/person');
    export import SocialPersonAdd = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/person-add');
    export import SocialPersonOutline = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/person-outline');
    export import SocialPlusOne = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/plus-one');
    export import SocialPoll = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/poll');
    export import SocialPublic = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/public');
    export import SocialSchool = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/school');
    export import SocialShare = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/share');
    export import SocialWhatshot = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/social/whatshot');
    export import ToggleCheckBox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/check-box');
    export import ToggleCheckBoxOutlineBlank = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/check-box-outline-blank');
    export import ToggleIndeterminateCheckBox = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/indeterminate-check-box');
    export import ToggleRadioButtonChecked = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/radio-button-checked');
    export import ToggleRadioButtonUnchecked = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/radio-button-unchecked');
    export import ToggleStar = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/star');
    export import ToggleStarBorder = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/star-border');
    export import ToggleStarHalf = __DotinMaterialUI.SvgIcon; // require('dotin-material-ui/svg-icons/toggle/star-half');
}


declare module 'dotin-material-ui/internal/AppCanvas' {
  interface AppCanvasProps extends __React.Props<AppCanvas> { }
  class AppCanvas extends __React.Component<AppCanvasProps, {}> { }
  export default AppCanvas;
}
declare module 'dotin-material-ui/internal/AutoLockScrolling' {
  interface AutoLockScrollingProps extends __React.Props<AutoLockScrolling> {
    lock: boolean;
  }
  class AutoLockScrolling extends __React.Component<AutoLockScrollingProps, {}> { }
  export default AutoLockScrolling;
}
declare module 'dotin-material-ui/internal/BeforeAfterWrapper' {
  interface BeforeAfterWrapperProps extends __React.Props<BeforeAfterWrapper> {
    afterElementType?: string,
    afterStyle?: __React.CSSProperties,
    beforeElementType?: string,
    beforeStyle?: __React.CSSProperties,
    elementType?: string,
    style?: __React.CSSProperties,
  }
  class BeforeAfterWrapper extends __React.Component<BeforeAfterWrapperProps, {}> { }
  export default BeforeAfterWrapper;
}
declare module 'dotin-material-ui/internal/CircleRipple' {
  interface CircleRippleProps extends __React.Props<CircleRipple> {
    aborted?: boolean;
    color?: string;
    opacity?: number;
    style?: __React.CSSProperties;
  }
  class CircleRipple extends __React.Component<CircleRippleProps, {}> { }
  export default CircleRipple;
}
declare module 'dotin-material-ui/internal/ClearFix' {
  interface ClearFixProps extends __React.Props<ClearFix> {
    style?: __React.CSSProperties;
  }
  class ClearFix extends __React.Component<ClearFixProps, {}> { }
  export default ClearFix;
}
declare module 'dotin-material-ui/internal/ClickAwayListener' {
  interface ClickAwayListenerProps extends __React.Props<ClickAwayListener> {
    onClickAway?: any,
  }
  class ClickAwayListener extends __React.Component<ClickAwayListenerProps, {}> { }
  export default ClickAwayListener;
}
declare module 'dotin-material-ui/internal/EnhancedButton' {
  interface EnhancedButtonProps extends __DotinMaterialUI.SharedEnhancedButtonProps<EnhancedButton> {}
  class EnhancedButton extends __React.Component<EnhancedButtonProps, {}> {}
  export default EnhancedButton;
}
declare module 'dotin-material-ui/internal/EnhancedSwitch' {
  interface EnhancedSwitchProps extends __DotinMaterialUI.Switches.CommonEnhancedSwitchProps<EnhancedSwitch> {}
  class EnhancedSwitch extends __React.Component<EnhancedSwitchProps, {}> {}
  export default EnhancedSwitch;
}
declare module 'dotin-material-ui/internal/ExpandTransition' {
  interface ExpandTransitionProps extends __React.Props<ExpandTransition> {
    enterDelay?: number;
    loading?: boolean;
    open?: boolean;
    style?: __React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
  }
  class ExpandTransition extends __React.Component<ExpandTransitionProps, {}> { }
  export default ExpandTransition;
}
declare module 'dotin-material-ui/internal/ExpandTransitionChild' {
  interface ExpandTransitionChildProps extends __React.Props<ExpandTransitionChild> {
    enterDelay?: number;
    style?: __React.CSSProperties;
    transitionDelay?: number;
    transitionDuration?: number;
  }
  class ExpandTransitionChild extends __React.Component<ExpandTransitionChildProps, {}> { }
  export default ExpandTransitionChild;
}
declare module 'dotin-material-ui/internal/FocusRipple' {
  interface FocusRippleProps extends __React.Props<FocusRipple> {
    color?: string,
    innerStyle?: __React.CSSProperties,
    opacity?: number,
    show?: boolean,
    style?: __React.CSSProperties
  }
  class FocusRipple extends __React.Component<FocusRippleProps, {}> { }
  export default FocusRipple;
}
declare module 'dotin-material-ui/internal/Overlay' {
  interface OverlayProps extends __React.Props<Overlay> {
    autoLockScrolling?: boolean;
    show: boolean;
    style?: __React.CSSProperties;
    transitionEnabled?: boolean;
  }
  class Overlay extends __React.Component<OverlayProps, {}> { }
  export default Overlay;
}
declare module 'dotin-material-ui/internal/RenderToLayer' {
  interface RenderToLayerProps extends __React.Props<RenderToLayer> {
    componentClickAway?: Function;
    open: boolean;
    render: Function;
    useLayerForClickAway?: boolean;
  }
  class RenderToLayer extends __React.Component<RenderToLayerProps, {}> { }
  export default RenderToLayer;
}
declare module 'dotin-material-ui/internal/ScaleIn' {
  interface ScaleInProps extends __React.Props<ScaleIn> {
    childStyle?: __React.CSSProperties;
    enterDelay?: number;
    maxScale?: number;
    minScale?: number;
  }
  class ScaleIn extends __React.Component<ScaleInProps, {}> { }
  export default ScaleIn;
}
declare module 'dotin-material-ui/internal/ScaleInChild' {
  interface ScaleInChildProps extends __React.Props<ScaleInChild> {
    enterDelay?: number;
    maxScale?: number;
    minScale?: number;
    style?: __React.CSSProperties;
  }
  class ScaleInChild extends __React.Component<ScaleInChildProps, {}> { }
  export default ScaleInChild;
}
declare module 'dotin-material-ui/internal/SlideIn' {
  interface SlideInProps extends __React.Props<SlideIn> {
    childStyle?: __React.CSSProperties;
    direction?: __DotinMaterialUI.propTypes.direction;
    enterDelay?: number;
    style?: __React.CSSProperties;
  }
  class SlideIn extends __React.Component<SlideInProps, {}> { }
  export default SlideIn;
}
declare module 'dotin-material-ui/internal/SlideInChild' {
  interface SlideInChildProps extends __React.Props<SlideInChild> {
    direction?: string,
    enterDelay?: number;
    getLeaveDirection: Function;
    style?: __React.CSSProperties;
  }
  class SlideInChild extends __React.Component<SlideInChildProps, {}> { }
  export default SlideInChild;
}
declare module 'dotin-material-ui/internal/Tooltip' {
  interface TooltipProps extends __React.Props<Tooltip> {
    className?: string;
    horizontalPosition?: __DotinMaterialUI.propTypes.horizontal;
    label: any;
    show?: boolean;
    style?: __React.CSSProperties;
    touch?: boolean;
    verticalPosition?: __DotinMaterialUI.propTypes.vertical;
  }
  class Tooltip extends __React.Component<TooltipProps, {}> { }
  export default Tooltip;
}
declare module 'dotin-material-ui/internal/TouchRipple' {
  interface TouchRippleProps extends __React.Props<TouchRipple> {
    abortOnScroll?: boolean,
    centerRipple?: boolean;
    color?: string;
    opacity?: number;
    style?: __React.CSSProperties
  }
  class TouchRipple extends __React.Component<TouchRippleProps, {}> { }
  export default TouchRipple;
}