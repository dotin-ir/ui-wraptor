import React, {PropTypes} from 'react';
import MUIThemeProvider from 'dotin-material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'dotin-material-ui/styles/getMuiTheme'

export class ThemeProvider extends React.Component {

    static childContextTypes = {
        theme: PropTypes.object.isRequired,
    };

    getChildContext() {
        return {
            theme: getMuiTheme(this.props.theme),
        };
    }

    render() {
        return <MUIThemeProvider muiTheme={getMuiTheme(this.props.theme)}>
            {this.props.children}
        </MUIThemeProvider>
    }

}

export default ThemeProvider