import React, {PropTypes} from 'react';
import MUIThemeProvider from 'dotin-material-ui/styles/MuiThemeProvider';
import getWraptorTheme from "./getWraptorTheme";

export class ThemeProvider extends React.Component {

    static childContextTypes = {
        theme: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            theme: getWraptorTheme(this.props.theme),
        };
    }

    render() {
        return <MUIThemeProvider muiTheme={getWraptorTheme(this.props.theme)}>
            {this.props.children}
        </MUIThemeProvider>
    }

}

export default ThemeProvider