import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import Paper from '../Paper';
import RaisedButton from '../RaisedButton/index';

const buttonsGridContainerStyle = {
    marginLeft: "auto",
    minWidth: '240px',
    display: 'table'
};

const btnStyle = {
    margin: "2em 1em 0 1em"
};



class ButtonGroup extends BaseComponent {
    static propTypes = {
        buttons: PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {buttons} = this.props;
        const actions = [] ;

        if (buttons && buttons.length > 0) {
            buttons.forEach(action => {
                actions.push(
                    <RaisedButton
                        label={action.label}
                        primary={action.isPrimary}
                        style={btnStyle}
                        onClick={action.action}
                    />)
            })
        }

        console.log(actions)

        return(
            <Paper style={buttonsGridContainerStyle} noShadow={true}>
                {
                  actions.map((action) => {
                      return action
                  })
                }
            </Paper>
        )
    }
}

export default ButtonGroup;



