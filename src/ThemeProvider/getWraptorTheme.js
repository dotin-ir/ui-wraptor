import merge from 'lodash.merge';
import {fade} from 'dotin-material-ui/utils/colorManipulator';
import lightBaseTheme from 'dotin-material-ui/styles/baseThemes/lightBaseTheme';
import zIndex from 'dotin-material-ui/styles/zIndex';
import autoprefixer from 'dotin-material-ui/utils/autoprefixer';
import callOnce from 'dotin-material-ui/utils/callOnce';
import rtl from 'dotin-material-ui/utils/rtl';
import compose from 'recompose/compose';
import getMuiTheme from 'dotin-material-ui/styles/getMuiTheme';
import {
    red500, grey600,
    transparent, cyan500
} from 'dotin-material-ui/styles/colors';
/*
 * getWraptorTheme function defined to merge customized theme with original theme in dotin-material
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */

export default function getWraptorTheme(customisedTheme, ...more) {
    return getMuiTheme(getWraptorCustomisedTheme(customisedTheme));
}

function getWraptorCustomisedTheme(customisedTheme, ...more) {
    customisedTheme = merge({
        zIndex,
        isRtl: false,
        userAgent: undefined,
    }, lightBaseTheme, customisedTheme, ...more);

    const {spacing, fontFamily, palette} = customisedTheme;
    const baseTheme = {spacing, fontFamily, palette};

    customisedTheme = merge({
        autoComplete: {
            marginTop: -12,
        },
        checkbox: {
            boxColor: grey600,
            labelColor: grey600,
        },
        dropDownMenu: {
            accentColor: palette.borderColor,
            select: {
                height: 45,
                fontSize: 14,
                margin: 0,
                displayUnderLine:'none'
            },
            label: {
                lineHeight: 30 + 'px',
                top: 0,
                height: 30,
                paddingRight: 5,
                color: grey600
            },
            icon: {
                top: 0,
                height: "100%",
                lineHeight: "100%",
                padding: "0 6px",
                textAlign: "center",
                width:36,
                fill:"#888888"
            },
            list: {
                paddingTop: 0,
                paddingBottom: 0,
            },
            listItem: {
                border: 0,
               boxShadow:'0 0 1px #bbb',
                marginRight: -10,
                fontSize: 12
            }
        },
        listItem: {
            nestedLevelDepth: 18,
            secondaryTextColor: palette.secondaryTextColor,
            leftIconColor: grey600,
            rightIconColor: grey600,
        },
        menu: {
            backgroundColor: palette.canvasColor,
            containerBackgroundColor: palette.canvasColor,
        },
        menuItem: {
            dataHeight: 32,
            height: 48,
            hoverColor: fade(palette.textColor, 0.035),
            padding: spacing.desktopGutter,
            selectedTextColor: palette.accent1Color,
            rightIconDesktopFill: grey600,
        },
        textField: {
            errorColor: red500,
            focusColor: palette.primary1Color,
            backgroundColor: 'transparent',
            borderColor: "#b3b3b3",
            showUnderLine: false,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 3 ,
            margin: 0,
            height: 30,
            padding: '0 10px',
            fontSize: 14,
            hintStyle: {
                bottom: 20,
                left: 10,
                right: 'auto',
                fontSize: 12
            },
            errorStyle: {
                bottom: -1
            },
            disabled: {
                display: "block",
                backgroundColor: "#e2e2e2",
                opacity: 0.8,
                lineHeight: "30px",
                cursor:'not-allowed' ,
                color : palette.disabledColor
            },
            textarea: {
                height: 'auto',
                maxHeight: 65,
                overflowY: 'auto',
                overflowX: 'hidden',
                minHeight: 32,
            },
        },
        label: {
            fontSize: 12,
            position: "statics",
            color: "#888888",
            focus: {
                color: cyan500
            }
        },
        noPadding:{
            padding:0
        },
        noMargin:{
            margin:0
        },
        table : {
          borderCollapse:'separate' ,
            actionColumns: {
              justifyContent:'center'
            }
        },
        tableRow : {
            stripeColor : '#f7f7f7',
            hoverColor : '#EBEBEB'
        },
        tableRowColumn : {
            borderWidth : 1 ,
            borderStyle: 'solid' ,
            borderColor: '#EBEBEB',
            textAlign:'center',
            height:40 ,
            fontSize: 12
        },
        tableHeader:{
                borderBottomWidth:'1px',
                borderColor : '#e0e0e0',
                borderStyle:'solid',
        },
        tableHeaderColumn:{
            fontWeight:'bold',
            borderWidth:1,
            borderBottomWidth:'2px',
            borderColor : '#e0e0e0',
            borderStyle:'solid',
            color : '#000',
            textAlign:'center',
            height:40,
        },
        toolbar:{
            justifyContent:'inherit',
            width:'100%',
            backgroundColor:'transparent'
        },
        resultTableActionMenu : {
            itemStyles: {
                fontSize: 12 ,
                lineHeight: '40px' ,
                minHeight : '40px',
            },
            innerDivStyle:{
                paddingLeft:50 ,
                paddingRight:10 ,
            },
            iconStyles : {
                fontSize:20 ,
                margin:10,
                color:'#222'
            }
        }
    }, customisedTheme, {
        baseTheme, // To provide backward compatibility.
        rawTheme: baseTheme, // To provide backward compatibility.
    });

    const transformers = [autoprefixer, rtl, callOnce].map((t) => t(customisedTheme))
        .filter((t) => t);
    customisedTheme.prepareStyles = compose(...transformers);

    return customisedTheme;
}
