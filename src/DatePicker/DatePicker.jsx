import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIDatePicker from 'dotin-material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';


class DatePicker extends BaseComponent {
    static propTypes = {
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * This is the initial date value of the component.
         * If either `value` or `valueLink` is provided they will override this
         * prop with `value` taking precedence.
         */
        defaultDate: PropTypes.object,
        /**
         * Disables the year selection in the date picker.
         */
        disableYearSelection: PropTypes.bool,
        /**
         * Disables the DatePicker.
         */
        disabled: PropTypes.bool,
        /**
         * Dotin property type
         * The value of label
         * The content of the floating label(material-ui floatingLabelText).
         */
        label: PropTypes.string,
        /**
         * 	Locale used for formatting the DatePicker date strings. Other than for 'en-US', you must provide a DateTimeFormat that supports the chosen locale.
         */
        locale: PropTypes.string,
        /**
         * 	Constructor for date formatting for the specified locale. The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402). Intl.DateTimeFormat is supported by most modern browsers, see http://caniuse.com/#search=intl, otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
            By default, a built-in DateTimeFormat is used which supports the 'en-US' locale.
         */
        dateTimeFormat: PropTypes.func,
        /**
         * Override the default text of the 'OK' button.
         */
        okLabel: PropTypes.node,
        /**
         * Override the default text of the 'Cancel' button.
         */
        cancelLabel: PropTypes.node,
        /**
         * Used to change the first day of week. It varies from
         * Saturday to Monday between different locales.
         * The allowed range is 0 (Sunday) to 6 (Saturday).
         * The default is `1`, Monday, as per ISO 8601.
         */
        firstDayOfWeek: PropTypes.number,
        /**
         * The ending of a range of valid dates. The range includes the endDate.
         * The default value is current date + 100 years.
         */
        maxDate: PropTypes.object,
        /**
         * The beginning of a range of valid dates. The range includes the startDate.
         * The default value is current date - 100 years.
         */
        minDate: PropTypes.object,
        /**
         * Callback function used to determine if a day's entry should be disabled on the calendar.
         *
         * @param {object} day Date object of a day.
         * @returns {boolean} Indicates whether the day should be disabled.
         */
        shouldDisableDate: PropTypes.func,
        /**
         * Callback function that is fired when the date value changes.
         *
         * @param {null} null Since there is no particular event associated with the change,
         * the first argument will always be null.
         * @param {object} date The new date.
         */
        onChange: PropTypes.func,
    };
    
    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };
    
    render() {
        const {
            className,
            defaultDate,
            disabled,
            disableYearSelection,
            label,
            okLabel,
            cancelLabel,
            firstDayOfWeek,
            maxDate,
            minDate,
            shouldDisableDate,
            onChange,
            id,
            style,
            value,
        } = this.props;
        let locale = (this.props.locale !== null && this.props.locale !== undefined) ?  this.props.locale : this.context.theme.locale;
        let DateTimeFormat;
        if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
            DateTimeFormat = global.Intl.DateTimeFormat;
        } else {
            const IntlPolyfill = require('intl');
            DateTimeFormat = IntlPolyfill.DateTimeFormat;
            require('intl/locale-data/jsonp/fr');
            require('intl/locale-data/jsonp/fa-IR');
        }
        return (value ? 
        <MUIDatePicker
            className = {className}
            defaultDate = {defaultDate}
            disabled = {disabled}
            disableYearSelection = {disableYearSelection}
            floatingLabelText = {label}
            locale = {locale}
            DateTimeFormat = {DateTimeFormat}
            okLabel={okLabel}
            cancelLabel={cancelLabel}
            firstDayOfWeek={firstDayOfWeek}
            maxDate={maxDate}
            minDate={minDate}
            shouldDisableDate={shouldDisableDate}
            onChange={onChange}
            id={id}
            style={style}
            value={value}
        /> :
            <MUIDatePicker
                className = {className}
                defaultDate = {defaultDate}
                disabled = {disabled}
                disableYearSelection = {disableYearSelection}
                floatingLabelText = {label}
                locale = {locale}
                DateTimeFormat = {DateTimeFormat}
                okLabel={okLabel}
                cancelLabel={cancelLabel}
                firstDayOfWeek={firstDayOfWeek}
                maxDate={maxDate}
                minDate={minDate}
                shouldDisableDate={shouldDisableDate}
                onChange={onChange}
                id={id}
                style={style}
            />
        );
    }
}

export default DatePicker;
