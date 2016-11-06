import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIThemeProvider from 'dotin-material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'dotin-material-ui/styles/getMuiTheme'

class ThemeProvider extends BaseComponent {

    static propTypes = {
        theme: PropTypes.object
    };

    static childContextTypes = {
        theme: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            theme: getMuiTheme(this.props.theme) || getMuiTheme(undefined, this.props.locale),
        };
    }

    render() {
        return (
            <MUIThemeProvider muiTheme={(getMuiTheme(this.props.theme) || getMuiTheme(undefined, this.props.locale))}>
                {this.props.children}
            </MUIThemeProvider>
        );
    }

}

export default ThemeProvider;