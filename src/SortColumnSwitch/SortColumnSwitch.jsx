import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent';
import MultiStateIconSwitch from "../MultiStateIconSwitch"
import IconButton from 'dotin-material-ui/IconButton';
import SortDesc from 'dotin-material-ui/svg-icons/navigation/arrow-downward';
import SortASC from 'dotin-material-ui/svg-icons/navigation/arrow-upward';


const styles = {
    small: {
        width: 16,
        height: 16,
        padding: 0,
    },
    smallIcon: {
        width: 16,
        height: 16,
    },
}

class SortColumnSwitch extends BaseComponent {

    static propTypes = {
        ascHandler: PropTypes.func,
        descHandler: PropTypes.func,
    };
    constructor(props, state) {
        super(props, state);
    }


    render() {
        const {
            ascHandler,
            descHandler,

        } = this.props;
        return (
            <MultiStateIconSwitch>
                <IconButton onClick={ascHandler} iconStyle={styles.smallIcon} style={styles.small}>
                    <SortASC  />
                </IconButton>
                <IconButton onClick={descHandler} iconStyle={styles.smallIcon} style={styles.small}>
                    <SortDesc />
                </IconButton>
            </MultiStateIconSwitch>
        )
    }
}
export default SortColumnSwitch;