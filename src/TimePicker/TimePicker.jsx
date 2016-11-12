import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUITimePicker from 'dotin-material-ui/TimePicker';
import TextField from 'dotin-material-ui/TextField';
import moment from 'moment-timezone';


class TimePicker extends BaseComponent {
    static propTypes = {
        /**
         * If true, the TimePicker is disabled.
         */
        disabled: PropTypes.bool,
        /**
         * The initial time value of the TimePicker.
         */
        defaultTime: PropTypes.object,
        /**
         * The custom time zone of the TimePicker.
         */
        timeZone: PropTypes.object,        
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };

    calculateCurrentTime(defaultTimeZone, timeZone) {
        let finalTimeZone = timeZone != null ? timeZone : defaultTimeZone;
        let tz = Array.isArray(finalTimeZone) ? finalTimeZone.length > 0 ? finalTimeZone[0] : undefined : finalTimeZone;
        let finalTime = moment.tz(tz).format();
        let separators = [' ', '\\\T', '-', '\\\Z',  ':', '\\\+'];
        let dateAndTime = finalTime.split(new RegExp(separators.join('|'), 'g'));
        return new Date(dateAndTime[0],dateAndTime[1],dateAndTime[2],dateAndTime[3],dateAndTime[4],dateAndTime[5]);
    }

    render() {
        const {
            disabled,
            defaultTime,
            timeZone
        } = this.props;
        let currentTime = defaultTime != null ? defaultTime : this.calculateCurrentTime(this.context.theme.timezone, timeZone);
        return <TextField
            hintText={currentTime.toString().substring(16,34)}
        />
    }
}

export default TimePicker;
